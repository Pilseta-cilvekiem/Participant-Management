using CrmEarlyBound;
using CsvHelper;
using CsvHelper.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Xrm.Sdk;
using PC.PowerApps.Common.Extensions;
using PC.PowerApps.Common.ScheduledJobs;
using PC.PowerApps.ScheduledJobs.Enumerations;
using PC.PowerApps.ScheduledJobs.Models;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PC.PowerApps.ScheduledJobs.Jobs
{
    public class ImportSwedbankTransactions : ImportSwedbankTransactionsBase
    {
        private EntityReference bankAccountRef;
        private DateTime? lastImportedTransactionDate;
        private Lazy<List<pc_Transaction>> existingTransactions;

        public override Task Execute()
        {
            pc_BankAccount bankAccount = Context.ServiceContext.Retrieve<pc_BankAccount>(BankAccountId);
            bankAccountRef = bankAccount.ToEntityReference();
            existingTransactions = new Lazy<List<pc_Transaction>>(() => Context.ServiceContext.pc_TransactionSet
                .Select(t => new pc_Transaction
                {
                    pc_TransferReference = t.pc_TransferReference,
                })
                .ToList());
            lastImportedTransactionDate = bankAccount.pc_LastImportedTransactionDate;

            IQueryable<Annotation> annotations = Context.ServiceContext.AnnotationSet
                .Where(a => a.IsDocument == true && a.ObjectId.Id == BankAccountId && a.ObjectTypeCode == pc_BankAccount.EntityLogicalName)
                .OrderBy(a => a.CreatedOn);

            foreach (Annotation annotation in annotations)
            {
                ImportFromAnnotation(annotation);
            }

            bankAccount.pc_LastImportedTransactionDate = lastImportedTransactionDate;
            //_ = Context.ServiceContext.UpdateModifiedAttributes();
            return Task.CompletedTask;
        }

        private void ImportFromAnnotation(Annotation annotation)
        {
            byte[] document = Convert.FromBase64String(annotation.DocumentBody);
            using MemoryStream memoryStream = new MemoryStream(document);
            using StreamReader streamReader = new StreamReader(memoryStream, Encoding.GetEncoding(1257));
            CultureInfo cultureInfo = new CultureInfo("lv-LV");
            CsvConfiguration csvConfiguration = new CsvConfiguration(cultureInfo)
            {
                Delimiter = ";",
                HasHeaderRecord = false,
            };
            using CsvReader csvReader = new CsvReader(streamReader, csvConfiguration);
            IEnumerable<SwedbankTransactionCsv> swedbankTransactionCsvs = csvReader.GetRecords<SwedbankTransactionCsv>();

            foreach (SwedbankTransactionCsv swedbankTransactionCsv in swedbankTransactionCsvs)
            {
                CreateTransaction(swedbankTransactionCsv);
            }
        }

        private void CreateTransaction(SwedbankTransactionCsv swedbankTransactionCsv)
        {
            if (swedbankTransactionCsv.Currency != "EUR" ||
                   swedbankTransactionCsv.DebitCredit != SwedbankTransactionDebitCredit.K ||
                   swedbankTransactionCsv.RowType != 20 ||
                   swedbankTransactionCsv.TransactionType != "INB")
            {
                return;
            }

            pc_Transaction transaction = existingTransactions.Value
                .Where(t => t.pc_TransferReference == swedbankTransactionCsv.TransferReference)
                .TakeSingleOrDefault();

            if (transaction == null)
            {
                Context.Logger.LogInformation($"Importing transaction with transfer reference \"{swedbankTransactionCsv.TransferReference}\".");
                transaction = new pc_Transaction
                {
                    pc_Amount = new Money(swedbankTransactionCsv.Amount),
                    pc_BeneficiaryPayer = swedbankTransactionCsv.BeneficiaryPayer,
                    pc_Date = swedbankTransactionCsv.Date,
                    pc_Details = swedbankTransactionCsv.Details,
                    pc_BankAccount = bankAccountRef,
                    pc_TransferReference = swedbankTransactionCsv.TransferReference,
                };
                Context.OrganizationService.CreateWithoutNulls(transaction);
            }
            else
            {
                Context.Logger.LogInformation($"Skipping already imported transaction with transfer reference \"{swedbankTransactionCsv.TransferReference}\".");
            }

            if (lastImportedTransactionDate == null || swedbankTransactionCsv.Date > lastImportedTransactionDate)
            {
                lastImportedTransactionDate = swedbankTransactionCsv.Date;
            }
        }
    }
}
