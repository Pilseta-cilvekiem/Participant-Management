interface pc_BankAccount_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  pc_bankaccountid?: string | null;
  pc_lastimportedtransactiondate?: Date | null;
  pc_name?: string | null;
  pc_transactionimporterror?: string | null;
  pc_transactionimportstatus?: pc_transactionimportstatus | null;
  statecode?: pc_bankaccount_statecode | null;
  statuscode?: pc_bankaccount_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface pc_BankAccount_Relationships {
  pc_Transaction_BankAccount_BankAccount?: pc_Transaction_Result[] | null;
  pc_bankaccount_Annotations?: Annotation_Result[] | null;
  pc_bankaccount_AsyncOperations?: AsyncOperation_Result[] | null;
  pc_bankaccount_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  pc_bankaccount_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  pc_bankaccount_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  pc_bankaccount_ProcessSession?: ProcessSession_Result[] | null;
  pc_bankaccount_SyncErrors?: SyncError_Result[] | null;
  pc_bankaccount_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface pc_BankAccount extends pc_BankAccount_Base, pc_BankAccount_Relationships {
}
interface pc_BankAccount_Create extends pc_BankAccount {
}
interface pc_BankAccount_Update extends pc_BankAccount {
}
interface pc_BankAccount_Select {
  createdby_guid: WebAttribute<pc_BankAccount_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<pc_BankAccount_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<pc_BankAccount_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<pc_BankAccount_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<pc_BankAccount_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<pc_BankAccount_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<pc_BankAccount_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<pc_BankAccount_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<pc_BankAccount_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  pc_bankaccountid: WebAttribute<pc_BankAccount_Select, { pc_bankaccountid: string | null }, {  }>;
  pc_lastimportedtransactiondate: WebAttribute<pc_BankAccount_Select, { pc_lastimportedtransactiondate: Date | null }, { pc_lastimportedtransactiondate_formatted?: string }>;
  pc_name: WebAttribute<pc_BankAccount_Select, { pc_name: string | null }, {  }>;
  pc_transactionimporterror: WebAttribute<pc_BankAccount_Select, { pc_transactionimporterror: string | null }, {  }>;
  pc_transactionimportstatus: WebAttribute<pc_BankAccount_Select, { pc_transactionimportstatus: pc_transactionimportstatus | null }, { pc_transactionimportstatus_formatted?: string }>;
  statecode: WebAttribute<pc_BankAccount_Select, { statecode: pc_bankaccount_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<pc_BankAccount_Select, { statuscode: pc_bankaccount_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<pc_BankAccount_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<pc_BankAccount_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<pc_BankAccount_Select, { versionnumber: number | null }, {  }>;
}
interface pc_BankAccount_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  pc_bankaccountid: XQW.Guid;
  pc_lastimportedtransactiondate: Date;
  pc_name: string;
  pc_transactionimporterror: string;
  pc_transactionimportstatus: pc_transactionimportstatus;
  statecode: pc_bankaccount_statecode;
  statuscode: pc_bankaccount_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface pc_BankAccount_Expand {
  createdby: WebExpand<pc_BankAccount_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<pc_BankAccount_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<pc_BankAccount_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<pc_BankAccount_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<pc_BankAccount_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  pc_Transaction_BankAccount_BankAccount: WebExpand<pc_BankAccount_Expand, pc_Transaction_Select, pc_Transaction_Filter, { pc_Transaction_BankAccount_BankAccount: pc_Transaction_Result[] }>;
  pc_bankaccount_Annotations: WebExpand<pc_BankAccount_Expand, Annotation_Select, Annotation_Filter, { pc_bankaccount_Annotations: Annotation_Result[] }>;
  pc_bankaccount_AsyncOperations: WebExpand<pc_BankAccount_Expand, AsyncOperation_Select, AsyncOperation_Filter, { pc_bankaccount_AsyncOperations: AsyncOperation_Result[] }>;
  pc_bankaccount_BulkDeleteFailures: WebExpand<pc_BankAccount_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { pc_bankaccount_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  pc_bankaccount_MailboxTrackingFolders: WebExpand<pc_BankAccount_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { pc_bankaccount_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  pc_bankaccount_PrincipalObjectAttributeAccesses: WebExpand<pc_BankAccount_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { pc_bankaccount_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  pc_bankaccount_ProcessSession: WebExpand<pc_BankAccount_Expand, ProcessSession_Select, ProcessSession_Filter, { pc_bankaccount_ProcessSession: ProcessSession_Result[] }>;
  pc_bankaccount_SyncErrors: WebExpand<pc_BankAccount_Expand, SyncError_Select, SyncError_Filter, { pc_bankaccount_SyncErrors: SyncError_Result[] }>;
  pc_bankaccount_UserEntityInstanceDatas: WebExpand<pc_BankAccount_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { pc_bankaccount_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
}
interface pc_BankAccount_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  pc_lastimportedtransactiondate_formatted?: string;
  pc_transactionimportstatus_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface pc_BankAccount_Result extends pc_BankAccount_Base, pc_BankAccount_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface pc_BankAccount_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface pc_BankAccount_RelatedMany {
  pc_Transaction_BankAccount_BankAccount: WebMappingRetrieve<pc_Transaction_Select,pc_Transaction_Expand,pc_Transaction_Filter,pc_Transaction_Fixed,pc_Transaction_Result,pc_Transaction_FormattedResult>;
  pc_bankaccount_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  pc_bankaccount_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  pc_bankaccount_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  pc_bankaccount_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  pc_bankaccount_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  pc_bankaccount_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  pc_bankaccount_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  pc_bankaccount_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  pc_bankaccounts: WebMappingRetrieve<pc_BankAccount_Select,pc_BankAccount_Expand,pc_BankAccount_Filter,pc_BankAccount_Fixed,pc_BankAccount_Result,pc_BankAccount_FormattedResult>;
}
interface WebEntitiesRelated {
  pc_bankaccounts: WebMappingRelated<pc_BankAccount_RelatedOne,pc_BankAccount_RelatedMany>;
}
interface WebEntitiesCUDA {
  pc_bankaccounts: WebMappingCUDA<pc_BankAccount_Create,pc_BankAccount_Update,pc_BankAccount_Select>;
}
