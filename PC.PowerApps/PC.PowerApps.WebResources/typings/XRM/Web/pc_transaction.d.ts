interface pc_Transaction_Base extends WebEntity {
  createdon?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  pc_amount?: number | null;
  pc_amount_base?: number | null;
  pc_date?: Date | null;
  pc_details?: string | null;
  pc_name?: string | null;
  pc_nonpaymentamount?: number | null;
  pc_nonpaymentamount_base?: number | null;
  pc_payerid?: string | null;
  pc_payername?: string | null;
  pc_paymenttotalamount?: number | null;
  pc_paymenttotalamount_base?: number | null;
  pc_remainingamount?: number | null;
  pc_remainingamount_base?: number | null;
  pc_transactionid?: string | null;
  statecode?: pc_transaction_statecode | null;
  statuscode?: pc_transaction_statuscode | null;
  timezoneruleversionnumber?: number | null;
  transactioncurrencyid_guid?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface pc_Transaction_Relationships {
  pc_BankAccount?: pc_BankAccount_Result | null;
  pc_Payment_Transaction_Transaction?: pc_Payment_Result[] | null;
  pc_transaction_AsyncOperations?: AsyncOperation_Result[] | null;
  pc_transaction_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  pc_transaction_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  pc_transaction_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  pc_transaction_ProcessSession?: ProcessSession_Result[] | null;
  pc_transaction_SyncErrors?: SyncError_Result[] | null;
  pc_transaction_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface pc_Transaction extends pc_Transaction_Base, pc_Transaction_Relationships {
  pc_BankAccount_bind$pc_bankaccounts?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface pc_Transaction_Create extends pc_Transaction {
}
interface pc_Transaction_Update extends pc_Transaction {
}
interface pc_Transaction_Select {
  createdby_guid: WebAttribute<pc_Transaction_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<pc_Transaction_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<pc_Transaction_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<pc_Transaction_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<pc_Transaction_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<pc_Transaction_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<pc_Transaction_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<pc_Transaction_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<pc_Transaction_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<pc_Transaction_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  pc_amount: WebAttribute<pc_Transaction_Select, { pc_amount: number | null; transactioncurrencyid_guid: string | null }, { pc_amount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  pc_amount_base: WebAttribute<pc_Transaction_Select, { pc_amount_base: number | null; transactioncurrencyid_guid: string | null }, { pc_amount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  pc_bankaccount_guid: WebAttribute<pc_Transaction_Select, { pc_bankaccount_guid: string | null }, { pc_bankaccount_formatted?: string }>;
  pc_date: WebAttribute<pc_Transaction_Select, { pc_date: Date | null }, { pc_date_formatted?: string }>;
  pc_details: WebAttribute<pc_Transaction_Select, { pc_details: string | null }, {  }>;
  pc_name: WebAttribute<pc_Transaction_Select, { pc_name: string | null }, {  }>;
  pc_nonpaymentamount: WebAttribute<pc_Transaction_Select, { pc_nonpaymentamount: number | null; transactioncurrencyid_guid: string | null }, { pc_nonpaymentamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  pc_nonpaymentamount_base: WebAttribute<pc_Transaction_Select, { pc_nonpaymentamount_base: number | null; transactioncurrencyid_guid: string | null }, { pc_nonpaymentamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  pc_payerid: WebAttribute<pc_Transaction_Select, { pc_payerid: string | null }, {  }>;
  pc_payername: WebAttribute<pc_Transaction_Select, { pc_payername: string | null }, {  }>;
  pc_paymenttotalamount: WebAttribute<pc_Transaction_Select, { pc_paymenttotalamount: number | null; transactioncurrencyid_guid: string | null }, { pc_paymenttotalamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  pc_paymenttotalamount_base: WebAttribute<pc_Transaction_Select, { pc_paymenttotalamount_base: number | null; transactioncurrencyid_guid: string | null }, { pc_paymenttotalamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  pc_remainingamount: WebAttribute<pc_Transaction_Select, { pc_remainingamount: number | null; transactioncurrencyid_guid: string | null }, { pc_remainingamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  pc_remainingamount_base: WebAttribute<pc_Transaction_Select, { pc_remainingamount_base: number | null; transactioncurrencyid_guid: string | null }, { pc_remainingamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  pc_transactionid: WebAttribute<pc_Transaction_Select, { pc_transactionid: string | null }, {  }>;
  statecode: WebAttribute<pc_Transaction_Select, { statecode: pc_transaction_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<pc_Transaction_Select, { statuscode: pc_transaction_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<pc_Transaction_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<pc_Transaction_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<pc_Transaction_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<pc_Transaction_Select, { versionnumber: number | null }, {  }>;
}
interface pc_Transaction_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  exchangerate: any;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  pc_amount: number;
  pc_amount_base: number;
  pc_bankaccount_guid: XQW.Guid;
  pc_date: Date;
  pc_details: string;
  pc_name: string;
  pc_nonpaymentamount: number;
  pc_nonpaymentamount_base: number;
  pc_payerid: string;
  pc_payername: string;
  pc_paymenttotalamount: number;
  pc_paymenttotalamount_base: number;
  pc_remainingamount: number;
  pc_remainingamount_base: number;
  pc_transactionid: XQW.Guid;
  statecode: pc_transaction_statecode;
  statuscode: pc_transaction_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface pc_Transaction_Expand {
  createdby: WebExpand<pc_Transaction_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<pc_Transaction_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<pc_Transaction_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<pc_Transaction_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<pc_Transaction_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  pc_BankAccount: WebExpand<pc_Transaction_Expand, pc_BankAccount_Select, pc_BankAccount_Filter, { pc_BankAccount: pc_BankAccount_Result }>;
  pc_Payment_Transaction_Transaction: WebExpand<pc_Transaction_Expand, pc_Payment_Select, pc_Payment_Filter, { pc_Payment_Transaction_Transaction: pc_Payment_Result[] }>;
  pc_transaction_AsyncOperations: WebExpand<pc_Transaction_Expand, AsyncOperation_Select, AsyncOperation_Filter, { pc_transaction_AsyncOperations: AsyncOperation_Result[] }>;
  pc_transaction_BulkDeleteFailures: WebExpand<pc_Transaction_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { pc_transaction_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  pc_transaction_MailboxTrackingFolders: WebExpand<pc_Transaction_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { pc_transaction_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  pc_transaction_PrincipalObjectAttributeAccesses: WebExpand<pc_Transaction_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { pc_transaction_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  pc_transaction_ProcessSession: WebExpand<pc_Transaction_Expand, ProcessSession_Select, ProcessSession_Filter, { pc_transaction_ProcessSession: ProcessSession_Result[] }>;
  pc_transaction_SyncErrors: WebExpand<pc_Transaction_Expand, SyncError_Select, SyncError_Filter, { pc_transaction_SyncErrors: SyncError_Result[] }>;
  pc_transaction_UserEntityInstanceDatas: WebExpand<pc_Transaction_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { pc_transaction_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  transactioncurrencyid: WebExpand<pc_Transaction_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface pc_Transaction_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  pc_amount_base_formatted?: string;
  pc_amount_formatted?: string;
  pc_bankaccount_formatted?: string;
  pc_date_formatted?: string;
  pc_nonpaymentamount_base_formatted?: string;
  pc_nonpaymentamount_formatted?: string;
  pc_paymenttotalamount_base_formatted?: string;
  pc_paymenttotalamount_formatted?: string;
  pc_remainingamount_base_formatted?: string;
  pc_remainingamount_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface pc_Transaction_Result extends pc_Transaction_Base, pc_Transaction_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  pc_bankaccount_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface pc_Transaction_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  pc_BankAccount: WebMappingRetrieve<pc_BankAccount_Select,pc_BankAccount_Expand,pc_BankAccount_Filter,pc_BankAccount_Fixed,pc_BankAccount_Result,pc_BankAccount_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface pc_Transaction_RelatedMany {
  pc_Payment_Transaction_Transaction: WebMappingRetrieve<pc_Payment_Select,pc_Payment_Expand,pc_Payment_Filter,pc_Payment_Fixed,pc_Payment_Result,pc_Payment_FormattedResult>;
  pc_transaction_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  pc_transaction_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  pc_transaction_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  pc_transaction_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  pc_transaction_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  pc_transaction_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  pc_transaction_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  pc_transactions: WebMappingRetrieve<pc_Transaction_Select,pc_Transaction_Expand,pc_Transaction_Filter,pc_Transaction_Fixed,pc_Transaction_Result,pc_Transaction_FormattedResult>;
}
interface WebEntitiesRelated {
  pc_transactions: WebMappingRelated<pc_Transaction_RelatedOne,pc_Transaction_RelatedMany>;
}
interface WebEntitiesCUDA {
  pc_transactions: WebMappingCUDA<pc_Transaction_Create,pc_Transaction_Update,pc_Transaction_Select>;
}
