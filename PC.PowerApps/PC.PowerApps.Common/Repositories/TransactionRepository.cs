using Microsoft.Extensions.Logging;
using Microsoft.Xrm.Sdk;
using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Entities.Fidavista;
using PC.PowerApps.Common.Extensions;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Xml.Serialization;

namespace PC.PowerApps.Common.Repositories
{
    public class TransactionRepository
    {
        private readonly Lazy<Context> context;

        public Context Context => context.Value;

        public TransactionRepository(Lazy<Context> context)
        {
            this.context = context;
        }

        public void ImportFromAnnotation(Guid annotationId)
        {
            Annotation annotation = Context.ServiceContext.Retrieve<Annotation>(annotationId);

            if (annotation.ObjectId == null)
            {
                Context.Logger.LogInformation("The note is not connected to an object.");
                return;
            }

            if (annotation.ObjectId.LogicalName != pc_BankAccount.EntityLogicalName)
            {
                Context.Logger.LogInformation("The note is not connected to a bank account.");
                return;
            }

            if (annotation.IsDocument != true)
            {
                Context.Logger.LogInformation("The note does not have a document.");
            }
            else
            {
                pc_BankAccount bankAccount = Context.ServiceContext.Retrieve<pc_BankAccount>(annotation.ObjectId);

                byte[] file = Convert.FromBase64String(annotation.DocumentBody);
                using MemoryStream memoryStream = new MemoryStream(file);
                XmlSerializer xmlSerializer = new XmlSerializer(typeof(FIDAVISTA));
                FIDAVISTA document = (FIDAVISTA)xmlSerializer.Deserialize(memoryStream);

                Lazy<TransactionCurrency> transactionCurrency = new Lazy<TransactionCurrency>(() => Context.ServiceContext.TransactionCurrencySet
                     .Where(tc => tc.ISOCurrencyCode == document.Statement.AccountSet.CcyStmt.Ccy)
                     .TakeSingle());

                Lazy<List<pc_Transaction>> existingTransactions = new Lazy<List<pc_Transaction>>(() => Context.ServiceContext.pc_TransactionSet
                    .Select(t => new pc_Transaction
                    {
                        pc_Id = t.pc_Id,
                    })
                    .ToList());

                foreach (FIDAVISTAStatementAccountSetCcyStmtTrxSet bankTransaction in document.Statement.AccountSet.CcyStmt.TrxSet)
                {
                    ImportTransaction(bankTransaction, bankAccount, transactionCurrency, existingTransactions);
                }

                DateTime lastImportedTransactionDate = document.Statement.AccountSet.CcyStmt.TrxSet.Max(t => t.BookDate);

                if (bankAccount.pc_LastImportedTransactionDate == null || bankAccount.pc_LastImportedTransactionDate < lastImportedTransactionDate)
                {
                    bankAccount.pc_LastImportedTransactionDate = lastImportedTransactionDate;
                }

                _ = Context.ServiceContext.UpdateModifiedAttributes(bankAccount);
            }

            Context.OrganizationService.Delete(annotation);
        }

        private void ImportTransaction(FIDAVISTAStatementAccountSetCcyStmtTrxSet bankTransaction, pc_BankAccount bankAccount, Lazy<TransactionCurrency> transactionCurrency, Lazy<List<pc_Transaction>> existingTransactions)
        {
            if (bankTransaction.TypeCode != "INP")
            {
                Context.Logger.LogInformation($"The transaction {bankTransaction.BankRef} is not an incoming payment.");
                return;
            }

            pc_Transaction transaction = existingTransactions.Value
                .Where(t => t.pc_Id == bankTransaction.BankRef)
                .FirstOrDefault();

            if (transaction != null)
            {
                Context.Logger.LogInformation($"The transaction {bankTransaction.BankRef} is already imported.");
                return;
            }

            transaction = new pc_Transaction
            {
                pc_Amount = new Money(bankTransaction.AccAmt),
                pc_BankAccount = bankAccount.ToEntityReference(),
                pc_Date = bankTransaction.BookDate,
                pc_Details = bankTransaction.PmtInfo,
                pc_Id = bankTransaction.BankRef,
                pc_PayerId = bankTransaction.CPartySet.AccHolder.LegalId,
                pc_PayerName = bankTransaction.CPartySet.AccHolder.Name,
                TransactionCurrencyId = transactionCurrency.Value.ToEntityReference(),
            };
            Context.OrganizationService.CreateWithoutNulls(transaction);
            Context.Logger.LogInformation($"The transaction {bankTransaction.BankRef} has been imported.");
        }
    }
}
