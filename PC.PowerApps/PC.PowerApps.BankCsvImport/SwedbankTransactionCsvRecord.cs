using System;

namespace PC.PowerApps.BankCsvImport
{
    internal class SwedbankTransactionCsvRecord
    {
        public string ClientAccount { get; set; }
        public int RowType { get; set; }
        public DateTime Date { get; set; }
        public string BeneficiaryPayer { get; set; }
        public string Details { get; set; }
        public decimal Amount { get; set; }
        public string Currency { get; set; }
        public SwedbankTransactionDebitCredit DebitCredit { get; set; }
        public string TransferReference { get; set; }
        public string TransactionType { get; set; }
        public string ReferenceNumber { get; set; }
        public string DocumentNumber { get; set; }
    }
}
