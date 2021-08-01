using Microsoft.Extensions.Logging;
using Microsoft.Xrm.Sdk;
using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Entities.Fidavista;
using PC.PowerApps.Common.Extensions;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
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
                     .TakeSingle());

                Lazy<List<pc_Transaction>> existingTransactions = new Lazy<List<pc_Transaction>>(() => context.ServiceContext.pc_TransactionSet
                    .Select(t => new pc_Transaction
                    {
                        pc_Id = t.pc_Id,
                    })
                    .ToList());

                foreach (FIDAVISTAStatementAccountSetCcyStmtTrxSet bankTransaction in document.Statement.AccountSet.CcyStmt.TrxSet)
                {
                    Import(context, bankTransaction, bankAccount, transactionCurrency, existingTransactions);
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

        public static void SetDefaults(pc_Transaction transaction)
        {
            transaction.pc_NonPaymentAmount ??= new Money();
            transaction.pc_PaymentTotalAmount ??= new Money();
        }

        public static void CalculatePaymentTotalAmount(Context context, EntityReference transactionReference)
        {
            if (transactionReference is null)
            {
                return;
            }

            pc_Transaction transaction = context.ServiceContext.Retrieve<pc_Transaction>(transactionReference);
            transaction.pc_PaymentTotalAmount = new(context.ServiceContext.pc_PaymentSet
                .Where(p => p.pc_Transaction.Id == transactionReference.Id && p.pc_Amount != null && p.pc_Amount.Value != 0)
                .Select(p => p.pc_Amount.Value)
                .ToList()
                .Sum());
            _ = context.ServiceContext.UpdateModifiedAttributes(transaction);
        }

        public static void CalculateRemainingAmount(pc_Transaction transaction)
        {
            transaction.pc_RemainingAmount = new(Utils.GetAmountOrZero(transaction.pc_Amount) - Utils.GetAmountOrZero(transaction.pc_PaymentTotalAmount) - Utils.GetAmountOrZero(transaction.pc_NonPaymentAmount));
        }

        public static void SetStatusCode(pc_Transaction transaction)
        {
            if (transaction.pc_RemainingAmount.Value == 0)
            {
                transaction.StateCode = pc_TransactionState.Inactive;
                transaction.StatusCode = pc_Transaction_StatusCode.Inactive;
            }
            else
            {
                transaction.StateCode = pc_TransactionState.Active;
                transaction.StatusCode = pc_Transaction_StatusCode.Active;
            }
        }

        private static void Import(Context context, FIDAVISTAStatementAccountSetCcyStmtTrxSet bankTransaction, pc_BankAccount bankAccount, Lazy<TransactionCurrency> transactionCurrency, Lazy<List<pc_Transaction>> existingTransactions)
        {
            if (bankTransaction.TypeCode != "INP")
            {
                context.Logger.LogInformation($"The transaction {bankTransaction.BankRef} is not an incoming payment.");
                return;
            }

            pc_Transaction transaction = existingTransactions.Value
                .Where(t => t.pc_Id == bankTransaction.BankRef)
                .FirstOrDefault();

            if (transaction is not null)
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

        public static void Process(Context context, pc_Transaction transaction)
        {
            if (Utils.GetAmountOrZero(transaction.pc_RemainingAmount) == 0 || transaction.pc_Details is null)
            {
                return;
            }

            Lazy<Regex> participantFeeRegex = new(() => new($@"\b(?:{context.Settings.pc_ParticipantFeeRegularExpression})\b", RegexOptions.IgnoreCase));
            Lazy<Regex> nonParticipantFeeRegex = new(() => new($@"\b(?:{context.Settings.pc_NonParticipantFeeRegularExpression})\b", RegexOptions.IgnoreCase));

            if (!string.IsNullOrEmpty(context.Settings.pc_ParticipantFeeRegularExpression) && participantFeeRegex.Value.IsMatch(transaction.pc_Details))
            {
                HashSet<string> personalIdentityNumbers = new();
                Lazy<Regex> personalIdentityNumberRegex = new(() => new(@"\b(\d{6})-?(\d{5})\b"));
                AddPersonalIdentityNumbers(personalIdentityNumbers, personalIdentityNumberRegex, transaction.pc_PayerId);
                AddPersonalIdentityNumbers(personalIdentityNumbers, personalIdentityNumberRegex, transaction.pc_Details);
                List<Contact> contacts = personalIdentityNumbers
                    .SelectMany(pin => context.ServiceContext.ContactSet
                        .Where(c => c.pc_PersonalIdentityNumber == pin))
                    .ToList();

                if (contacts.Count != 1)
                {
                    return;
                }

                pc_Payment payment = new pc_Payment
                {
                    pc_Contact = contacts[0].ToEntityReference(),
                    pc_Transaction = transaction.ToEntityReference(),
                };
                context.OrganizationService.CreateWithoutNulls(payment);

                return;
            }

            if (!string.IsNullOrEmpty(context.Settings.pc_NonParticipantFeeRegularExpression) && nonParticipantFeeRegex.Value.IsMatch(transaction.pc_Details))
            {
                transaction.pc_NonPaymentAmount = new(Utils.GetAmountOrZero(transaction.pc_RemainingAmount));
            }
        }

        private static void AddPersonalIdentityNumbers(HashSet<string> personalIdentityNumbers, Lazy<Regex> personalIdentityNumberRegex, string value)
        {
            if (value is not null)
            {
                MatchCollection matches = personalIdentityNumberRegex.Value.Matches(value);

                foreach (Match match in matches)
                {
                    _ = personalIdentityNumbers.Add($"{match.Groups[1]}-{match.Groups[2]}");
                }
            }
        }
    }
}
