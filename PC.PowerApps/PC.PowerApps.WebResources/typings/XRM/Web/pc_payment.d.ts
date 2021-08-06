interface pc_Payment_Base extends WebEntity {
  createdon?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  pc_amount?: number | null;
  pc_amount_base?: number | null;
  pc_date?: Date | null;
  pc_name?: string | null;
  pc_paymentid?: string | null;
  statecode?: pc_payment_statecode | null;
  statuscode?: pc_payment_statuscode | null;
  timezoneruleversionnumber?: number | null;
  transactioncurrencyid_guid?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface pc_Payment_Relationships {
  pc_Contact?: Contact_Result | null;
  pc_Transaction?: pc_Transaction_Result | null;
  pc_payment_AsyncOperations?: AsyncOperation_Result[] | null;
  pc_payment_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  pc_payment_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  pc_payment_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  pc_payment_ProcessSession?: ProcessSession_Result[] | null;
  pc_payment_SyncErrors?: SyncError_Result[] | null;
  pc_payment_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface pc_Payment extends pc_Payment_Base, pc_Payment_Relationships {
  pc_Contact_bind$contacts?: string | null;
  pc_Transaction_bind$pc_transactions?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface pc_Payment_Create extends pc_Payment {
}
interface pc_Payment_Update extends pc_Payment {
}
interface pc_Payment_Select {
  createdby_guid: WebAttribute<pc_Payment_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<pc_Payment_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<pc_Payment_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<pc_Payment_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<pc_Payment_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<pc_Payment_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<pc_Payment_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<pc_Payment_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<pc_Payment_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<pc_Payment_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  pc_amount: WebAttribute<pc_Payment_Select, { pc_amount: number | null; transactioncurrencyid_guid: string | null }, { pc_amount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  pc_amount_base: WebAttribute<pc_Payment_Select, { pc_amount_base: number | null; transactioncurrencyid_guid: string | null }, { pc_amount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  pc_contact_guid: WebAttribute<pc_Payment_Select, { pc_contact_guid: string | null }, { pc_contact_formatted?: string }>;
  pc_date: WebAttribute<pc_Payment_Select, { pc_date: Date | null }, { pc_date_formatted?: string }>;
  pc_name: WebAttribute<pc_Payment_Select, { pc_name: string | null }, {  }>;
  pc_paymentid: WebAttribute<pc_Payment_Select, { pc_paymentid: string | null }, {  }>;
  pc_transaction_guid: WebAttribute<pc_Payment_Select, { pc_transaction_guid: string | null }, { pc_transaction_formatted?: string }>;
  statecode: WebAttribute<pc_Payment_Select, { statecode: pc_payment_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<pc_Payment_Select, { statuscode: pc_payment_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<pc_Payment_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<pc_Payment_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<pc_Payment_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<pc_Payment_Select, { versionnumber: number | null }, {  }>;
}
interface pc_Payment_Filter {
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
  pc_contact_guid: XQW.Guid;
  pc_date: Date;
  pc_name: string;
  pc_paymentid: XQW.Guid;
  pc_transaction_guid: XQW.Guid;
  statecode: pc_payment_statecode;
  statuscode: pc_payment_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface pc_Payment_Expand {
  createdby: WebExpand<pc_Payment_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<pc_Payment_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<pc_Payment_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<pc_Payment_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<pc_Payment_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  pc_Contact: WebExpand<pc_Payment_Expand, Contact_Select, Contact_Filter, { pc_Contact: Contact_Result }>;
  pc_Transaction: WebExpand<pc_Payment_Expand, pc_Transaction_Select, pc_Transaction_Filter, { pc_Transaction: pc_Transaction_Result }>;
  pc_payment_AsyncOperations: WebExpand<pc_Payment_Expand, AsyncOperation_Select, AsyncOperation_Filter, { pc_payment_AsyncOperations: AsyncOperation_Result[] }>;
  pc_payment_BulkDeleteFailures: WebExpand<pc_Payment_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { pc_payment_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  pc_payment_MailboxTrackingFolders: WebExpand<pc_Payment_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { pc_payment_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  pc_payment_PrincipalObjectAttributeAccesses: WebExpand<pc_Payment_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { pc_payment_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  pc_payment_ProcessSession: WebExpand<pc_Payment_Expand, ProcessSession_Select, ProcessSession_Filter, { pc_payment_ProcessSession: ProcessSession_Result[] }>;
  pc_payment_SyncErrors: WebExpand<pc_Payment_Expand, SyncError_Select, SyncError_Filter, { pc_payment_SyncErrors: SyncError_Result[] }>;
  pc_payment_UserEntityInstanceDatas: WebExpand<pc_Payment_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { pc_payment_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  transactioncurrencyid: WebExpand<pc_Payment_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface pc_Payment_FormattedResult {
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
  pc_contact_formatted?: string;
  pc_date_formatted?: string;
  pc_transaction_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface pc_Payment_Result extends pc_Payment_Base, pc_Payment_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  pc_contact_guid: string | null;
  pc_transaction_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface pc_Payment_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  pc_Contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  pc_Transaction: WebMappingRetrieve<pc_Transaction_Select,pc_Transaction_Expand,pc_Transaction_Filter,pc_Transaction_Fixed,pc_Transaction_Result,pc_Transaction_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface pc_Payment_RelatedMany {
  pc_payment_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  pc_payment_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  pc_payment_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  pc_payment_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  pc_payment_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  pc_payment_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  pc_payment_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  pc_payments: WebMappingRetrieve<pc_Payment_Select,pc_Payment_Expand,pc_Payment_Filter,pc_Payment_Fixed,pc_Payment_Result,pc_Payment_FormattedResult>;
}
interface WebEntitiesRelated {
  pc_payments: WebMappingRelated<pc_Payment_RelatedOne,pc_Payment_RelatedMany>;
}
interface WebEntitiesCUDA {
  pc_payments: WebMappingCUDA<pc_Payment_Create,pc_Payment_Update,pc_Payment_Select>;
}
