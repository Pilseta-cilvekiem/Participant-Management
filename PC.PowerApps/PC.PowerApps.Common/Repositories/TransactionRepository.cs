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
    public static class TransactionRepository
    {
        public static void ImportFromAnnotation(Context context, Guid annotationId)
        {
            Annotation annotation = context.ServiceContext.Retrieve<Annotation>(annotationId, isOptional: true);

            if (annotation is null)
            {
                context.Logger.LogInformation("The note does not exist.");
                return;
            }

            if (annotation.IsDocument != true)
            {
                context.Logger.LogInformation("The note does not have a document.");
            }
            else
            {
                pc_BankAccount bankAccount = context.ServiceContext.Retrieve<pc_BankAccount>(annotation.ObjectId);

                byte[] file = Convert.FromBase64String(annotation.DocumentBody);
                using MemoryStream memoryStream = new MemoryStream(file);
                XmlSerializer xmlSerializer = new XmlSerializer(typeof(FIDAVISTA));
                FIDAVISTA document = (FIDAVISTA)xmlSerializer.Deserialize(memoryStream);

                Lazy<TransactionCurrency> transactionCurrency = new Lazy<TransactionCurrency>(() => context.ServiceContext.TransactionCurrencySet
                     .Where(tc => tc.ISOCurrencyCode == document.Statement.AccountSet.CcyStmt.Ccy)
                     .Single());

                Lazy<List<pc_Transaction>> existingTransactions = new Lazy<List<pc_Transaction>>(() => context.ServiceContext.pc_TransactionSet
                    .Select(t => new pc_Transaction
                    {
                        pc_Id = t.pc_Id,
                    })
                    .ToList());

                foreach (FIDAVISTAStatementAccountSetCcyStmtTrxSet bankTransaction in document.Statement.AccountSet.CcyStmt.TrxSet)
                {
                    ImportTransaction(context, bankTransaction, bankAccount, transactionCurrency, existingTransactions);
                }

                DateTime lastImportedTransactionDate = document.Statement.AccountSet.CcyStmt.TrxSet.Max(t => t.BookDate);

                if (bankAccount.pc_LastImportedTransactionDate is null || bankAccount.pc_LastImportedTransactionDate < lastImportedTransactionDate)
                {
                    bankAccount.pc_LastImportedTransactionDate = lastImportedTransactionDate;
                }

                _ = context.ServiceContext.UpdateModifiedAttributes(bankAccount);
            }

            context.OrganizationService.Delete(annotation);
        }

        private static void ImportTransaction(Context context, FIDAVISTAStatementAccountSetCcyStmtTrxSet bankTransaction, pc_BankAccount bankAccount, Lazy<TransactionCurrency> transactionCurrency, Lazy<List<pc_Transaction>> existingTransactions)
        {
            if (bankTransaction.TypeCode != "INP")
            {
                context.Logger.LogInformation($"The transaction {bankTransaction.BankRef} is not an incoming payment.");
                return;
            }

            pc_Transaction transaction = existingTransactions.Value
                .Where(t => t.pc_Id == bankTransaction.BankRef)
                .FirstOrDefault();

            if (transaction != null)
            {
                context.Logger.LogInformation($"The transaction {bankTransaction.BankRef} is already imported.");
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
            context.OrganizationService.CreateWithoutNulls(transaction);
            context.Logger.LogInformation($"The transaction {bankTransaction.BankRef} has been imported.");
        }
    }
}
