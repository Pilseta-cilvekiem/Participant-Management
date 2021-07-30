namespace PC.PowerApps.Common.Entities.Fidavista
{
    // NOTE: Generated code may require at least .NET Framework 4.5 or .NET Core/Standard 2.0.
    /// <remarks/>
    [System.Serializable()]
    [System.ComponentModel.DesignerCategory("code")]
    [System.Xml.Serialization.XmlType(AnonymousType = true, Namespace = "http://www.bankasoc.lv/fidavista/fidavista0101.xsd")]
    [System.Xml.Serialization.XmlRoot(Namespace = "http://www.bankasoc.lv/fidavista/fidavista0101.xsd", IsNullable = false)]
    public partial class FIDAVISTA
    {

        private FIDAVISTAHeader headerField;

        private FIDAVISTAStatement statementField;

        /// <remarks/>
        public FIDAVISTAHeader Header
        {
            get
            {
                return this.headerField;
            }
            set
            {
                this.headerField = value;
            }
        }

        /// <remarks/>
        public FIDAVISTAStatement Statement
        {
            get
            {
                return this.statementField;
            }
            set
            {
                this.statementField = value;
            }
        }
    }

    /// <remarks/>
    [System.Serializable()]
    [System.ComponentModel.DesignerCategory("code")]
    [System.Xml.Serialization.XmlType(AnonymousType = true, Namespace = "http://www.bankasoc.lv/fidavista/fidavista0101.xsd")]
    public partial class FIDAVISTAHeader
    {

        private ulong timestampField;

        private string fromField;

        /// <remarks/>
        public ulong Timestamp
        {
            get
            {
                return this.timestampField;
            }
            set
            {
                this.timestampField = value;
            }
        }

        /// <remarks/>
        public string From
        {
            get
            {
                return this.fromField;
            }
            set
            {
                this.fromField = value;
            }
        }
    }

    /// <remarks/>
    [System.Serializable()]
    [System.ComponentModel.DesignerCategory("code")]
    [System.Xml.Serialization.XmlType(AnonymousType = true, Namespace = "http://www.bankasoc.lv/fidavista/fidavista0101.xsd")]
    public partial class FIDAVISTAStatement
    {

        private FIDAVISTAStatementPeriod periodField;

        private FIDAVISTAStatementBankSet bankSetField;

        private FIDAVISTAStatementClientSet clientSetField;

        private FIDAVISTAStatementAccountSet accountSetField;

        /// <remarks/>
        public FIDAVISTAStatementPeriod Period
        {
            get
            {
                return this.periodField;
            }
            set
            {
                this.periodField = value;
            }
        }

        /// <remarks/>
        public FIDAVISTAStatementBankSet BankSet
        {
            get
            {
                return this.bankSetField;
            }
            set
            {
                this.bankSetField = value;
            }
        }

        /// <remarks/>
        public FIDAVISTAStatementClientSet ClientSet
        {
            get
            {
                return this.clientSetField;
            }
            set
            {
                this.clientSetField = value;
            }
        }

        /// <remarks/>
        public FIDAVISTAStatementAccountSet AccountSet
        {
            get
            {
                return this.accountSetField;
            }
            set
            {
                this.accountSetField = value;
            }
        }
    }

    /// <remarks/>
    [System.Serializable()]
    [System.ComponentModel.DesignerCategory("code")]
    [System.Xml.Serialization.XmlType(AnonymousType = true, Namespace = "http://www.bankasoc.lv/fidavista/fidavista0101.xsd")]
    public partial class FIDAVISTAStatementPeriod
    {

        private System.DateTime startDateField;

        private System.DateTime endDateField;

        private System.DateTime prepDateField;

        /// <remarks/>
        [System.Xml.Serialization.XmlElement(DataType = "date")]
        public System.DateTime StartDate
        {
            get
            {
                return this.startDateField;
            }
            set
            {
                this.startDateField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlElement(DataType = "date")]
        public System.DateTime EndDate
        {
            get
            {
                return this.endDateField;
            }
            set
            {
                this.endDateField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlElement(DataType = "date")]
        public System.DateTime PrepDate
        {
            get
            {
                return this.prepDateField;
            }
            set
            {
                this.prepDateField = value;
            }
        }
    }

    /// <remarks/>
    [System.Serializable()]
    [System.ComponentModel.DesignerCategory("code")]
    [System.Xml.Serialization.XmlType(AnonymousType = true, Namespace = "http://www.bankasoc.lv/fidavista/fidavista0101.xsd")]
    public partial class FIDAVISTAStatementBankSet
    {

        private string nameField;

        private ulong legalIdField;

        private string addressField;

        /// <remarks/>
        public string Name
        {
            get
            {
                return this.nameField;
            }
            set
            {
                this.nameField = value;
            }
        }

        /// <remarks/>
        public ulong LegalId
        {
            get
            {
                return this.legalIdField;
            }
            set
            {
                this.legalIdField = value;
            }
        }

        /// <remarks/>
        public string Address
        {
            get
            {
                return this.addressField;
            }
            set
            {
                this.addressField = value;
            }
        }
    }

    /// <remarks/>
    [System.Serializable()]
    [System.ComponentModel.DesignerCategory("code")]
    [System.Xml.Serialization.XmlType(AnonymousType = true, Namespace = "http://www.bankasoc.lv/fidavista/fidavista0101.xsd")]
    public partial class FIDAVISTAStatementClientSet
    {

        private string nameField;

        private ulong legalIdField;

        /// <remarks/>
        public string Name
        {
            get
            {
                return this.nameField;
            }
            set
            {
                this.nameField = value;
            }
        }

        /// <remarks/>
        public ulong LegalId
        {
            get
            {
                return this.legalIdField;
            }
            set
            {
                this.legalIdField = value;
            }
        }
    }

    /// <remarks/>
    [System.Serializable()]
    [System.ComponentModel.DesignerCategory("code")]
    [System.Xml.Serialization.XmlType(AnonymousType = true, Namespace = "http://www.bankasoc.lv/fidavista/fidavista0101.xsd")]
    public partial class FIDAVISTAStatementAccountSet
    {

        private string accNoField;

        private FIDAVISTAStatementAccountSetCcyStmt ccyStmtField;

        /// <remarks/>
        public string AccNo
        {
            get
            {
                return this.accNoField;
            }
            set
            {
                this.accNoField = value;
            }
        }

        /// <remarks/>
        public FIDAVISTAStatementAccountSetCcyStmt CcyStmt
        {
            get
            {
                return this.ccyStmtField;
            }
            set
            {
                this.ccyStmtField = value;
            }
        }
    }

    /// <remarks/>
    [System.Serializable()]
    [System.ComponentModel.DesignerCategory("code")]
    [System.Xml.Serialization.XmlType(AnonymousType = true, Namespace = "http://www.bankasoc.lv/fidavista/fidavista0101.xsd")]
    public partial class FIDAVISTAStatementAccountSetCcyStmt
    {

        private string ccyField;

        private decimal openBalField;

        private decimal closeBalField;

        private FIDAVISTAStatementAccountSetCcyStmtTrxSet[] trxSetField;

        /// <remarks/>
        public string Ccy
        {
            get
            {
                return this.ccyField;
            }
            set
            {
                this.ccyField = value;
            }
        }

        /// <remarks/>
        public decimal OpenBal
        {
            get
            {
                return this.openBalField;
            }
            set
            {
                this.openBalField = value;
            }
        }

        /// <remarks/>
        public decimal CloseBal
        {
            get
            {
                return this.closeBalField;
            }
            set
            {
                this.closeBalField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlElement("TrxSet")]
        public FIDAVISTAStatementAccountSetCcyStmtTrxSet[] TrxSet
        {
            get
            {
                return this.trxSetField;
            }
            set
            {
                this.trxSetField = value;
            }
        }
    }

    /// <remarks/>
    [System.Serializable()]
    [System.ComponentModel.DesignerCategory("code")]
    [System.Xml.Serialization.XmlType(AnonymousType = true, Namespace = "http://www.bankasoc.lv/fidavista/fidavista0101.xsd")]
    public partial class FIDAVISTAStatementAccountSetCcyStmtTrxSet
    {

        private string typeCodeField;

        private string typeNameField;

        private string regDateField;

        private System.DateTime bookDateField;

        private System.DateTime valueDateField;

        private string bankRefField;

        private string docNoField;

        private string corDField;

        private decimal accAmtField;

        private string pmtInfoField;

        private FIDAVISTAStatementAccountSetCcyStmtTrxSetCPartySet cPartySetField;

        /// <remarks/>
        public string TypeCode
        {
            get
            {
                return this.typeCodeField;
            }
            set
            {
                this.typeCodeField = value;
            }
        }

        /// <remarks/>
        public string TypeName
        {
            get
            {
                return this.typeNameField;
            }
            set
            {
                this.typeNameField = value;
            }
        }

        /// <remarks/>
        public string RegDate
        {
            get
            {
                return this.regDateField;
            }
            set
            {
                this.regDateField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlElement(DataType = "date")]
        public System.DateTime BookDate
        {
            get
            {
                return this.bookDateField;
            }
            set
            {
                this.bookDateField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlElement(DataType = "date")]
        public System.DateTime ValueDate
        {
            get
            {
                return this.valueDateField;
            }
            set
            {
                this.valueDateField = value;
            }
        }

        /// <remarks/>
        public string BankRef
        {
            get
            {
                return this.bankRefField;
            }
            set
            {
                this.bankRefField = value;
            }
        }

        /// <remarks/>
        public string DocNo
        {
            get
            {
                return this.docNoField;
            }
            set
            {
                this.docNoField = value;
            }
        }

        /// <remarks/>
        public string CorD
        {
            get
            {
                return this.corDField;
            }
            set
            {
                this.corDField = value;
            }
        }

        /// <remarks/>
        public decimal AccAmt
        {
            get
            {
                return this.accAmtField;
            }
            set
            {
                this.accAmtField = value;
            }
        }

        /// <remarks/>
        public string PmtInfo
        {
            get
            {
                return this.pmtInfoField;
            }
            set
            {
                this.pmtInfoField = value;
            }
        }

        /// <remarks/>
        public FIDAVISTAStatementAccountSetCcyStmtTrxSetCPartySet CPartySet
        {
            get
            {
                return this.cPartySetField;
            }
            set
            {
                this.cPartySetField = value;
            }
        }
    }

    /// <remarks/>
    [System.Serializable()]
    [System.ComponentModel.DesignerCategory("code")]
    [System.Xml.Serialization.XmlType(AnonymousType = true, Namespace = "http://www.bankasoc.lv/fidavista/fidavista0101.xsd")]
    public partial class FIDAVISTAStatementAccountSetCcyStmtTrxSetCPartySet
    {

        private string accNoField;

        private FIDAVISTAStatementAccountSetCcyStmtTrxSetCPartySetAccHolder accHolderField;

        private string bankCodeField;

        private string ccyField;

        private decimal amtField;

        /// <remarks/>
        public string AccNo
        {
            get
            {
                return this.accNoField;
            }
            set
            {
                this.accNoField = value;
            }
        }

        /// <remarks/>
        public FIDAVISTAStatementAccountSetCcyStmtTrxSetCPartySetAccHolder AccHolder
        {
            get
            {
                return this.accHolderField;
            }
            set
            {
                this.accHolderField = value;
            }
        }

        /// <remarks/>
        public string BankCode
        {
            get
            {
                return this.bankCodeField;
            }
            set
            {
                this.bankCodeField = value;
            }
        }

        /// <remarks/>
        public string Ccy
        {
            get
            {
                return this.ccyField;
            }
            set
            {
                this.ccyField = value;
            }
        }

        /// <remarks/>
        public decimal Amt
        {
            get
            {
                return this.amtField;
            }
            set
            {
                this.amtField = value;
            }
        }
    }

    /// <remarks/>
    [System.Serializable()]
    [System.ComponentModel.DesignerCategory("code")]
    [System.Xml.Serialization.XmlType(AnonymousType = true, Namespace = "http://www.bankasoc.lv/fidavista/fidavista0101.xsd")]
    public partial class FIDAVISTAStatementAccountSetCcyStmtTrxSetCPartySetAccHolder
    {

        private string nameField;

        private string legalIdField;

        /// <remarks/>
        public string Name
        {
            get
            {
                return this.nameField;
            }
            set
            {
                this.nameField = value;
            }
        }

        /// <remarks/>
        public string LegalId
        {
            get
            {
                return this.legalIdField;
            }
            set
            {
                this.legalIdField = value;
            }
        }
    }
}
