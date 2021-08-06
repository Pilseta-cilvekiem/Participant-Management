interface ExternalParty_Base extends WebEntity {
  correlationkey?: string | null;
  createdon?: Date | null;
  emailaddress?: string | null;
  exchangerate?: number | null;
  externalpartyid?: string | null;
  externalpartyidunique?: string | null;
  firstname?: string | null;
  fullname?: string | null;
  importsequencenumber?: number | null;
  lastdisabledon?: Date | null;
  lastenabledon?: Date | null;
  lastname?: string | null;
  middlename?: string | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: externalparty_statecode | null;
  statuscode?: externalparty_statuscode | null;
  timezoneruleversionnumber?: number | null;
  type?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface ExternalParty_Relationships {
  ExternalParty_SyncErrors?: SyncError_Result[] | null;
  business_unit_externalparty_externalparty?: BusinessUnit_Result | null;
  externalparty_PostRegardings?: PostRegarding_Result[] | null;
  externalparty_asyncoperations_externalparty?: AsyncOperation_Result[] | null;
  externalparty_bulkdeletefailures_externalparty?: BulkDeleteFailure_Result[] | null;
  externalparty_createdby?: SystemUser_Result | null;
  externalparty_createdonbehalfby?: SystemUser_Result | null;
  externalparty_entries?: ExternalPartyItem_Result[] | null;
  externalparty_modifiedby?: SystemUser_Result | null;
  externalparty_modifiedonbehalfby?: SystemUser_Result | null;
  externalparty_processsession_externalparty?: ProcessSession_Result[] | null;
  externalparty_userentityinstancedatas_externalparty?: UserEntityInstanceData_Result[] | null;
  lk_externalparty_account_createdby?: Account_Result[] | null;
  lk_externalparty_account_modifiedby?: Account_Result[] | null;
  lk_externalparty_contact_createdby?: Contact_Result[] | null;
  lk_externalparty_contact_modifiedby?: Contact_Result[] | null;
  lk_externalparty_subject_createdby?: Subject_Result[] | null;
  lk_externalparty_subject_modifiedby?: Subject_Result[] | null;
  owner_externalparty_externalparty?: Team_Result | null;
  owner_externalparty_externalparty1?: SystemUser_Result | null;
  team_externalparty_externalparty?: Team_Result | null;
  transactioncurrency_externalparty_externalparty?: TransactionCurrency_Result | null;
  user_externalparty?: SystemUser_Result | null;
}
interface ExternalParty extends ExternalParty_Base, ExternalParty_Relationships {
  owner_externalparty_externalparty_bind$systemusers?: string | null;
  owner_externalparty_externalparty_bind$teams?: string | null;
  transactioncurrency_externalparty_externalparty_bind$transactioncurrencies?: string | null;
}
interface ExternalParty_Create extends ExternalParty {
}
interface ExternalParty_Update extends ExternalParty {
}
interface ExternalParty_Select {
  correlationkey: WebAttribute<ExternalParty_Select, { correlationkey: string | null }, {  }>;
  createdby_guid: WebAttribute<ExternalParty_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ExternalParty_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ExternalParty_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  emailaddress: WebAttribute<ExternalParty_Select, { emailaddress: string | null }, {  }>;
  exchangerate: WebAttribute<ExternalParty_Select, { exchangerate: number | null }, {  }>;
  externalpartyid: WebAttribute<ExternalParty_Select, { externalpartyid: string | null }, {  }>;
  externalpartyidunique: WebAttribute<ExternalParty_Select, { externalpartyidunique: string | null }, {  }>;
  firstname: WebAttribute<ExternalParty_Select, { firstname: string | null }, {  }>;
  fullname: WebAttribute<ExternalParty_Select, { fullname: string | null }, {  }>;
  importsequencenumber: WebAttribute<ExternalParty_Select, { importsequencenumber: number | null }, {  }>;
  lastdisabledon: WebAttribute<ExternalParty_Select, { lastdisabledon: Date | null }, { lastdisabledon_formatted?: string }>;
  lastenabledon: WebAttribute<ExternalParty_Select, { lastenabledon: Date | null }, { lastenabledon_formatted?: string }>;
  lastname: WebAttribute<ExternalParty_Select, { lastname: string | null }, {  }>;
  middlename: WebAttribute<ExternalParty_Select, { middlename: string | null }, {  }>;
  modifiedby_guid: WebAttribute<ExternalParty_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ExternalParty_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ExternalParty_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<ExternalParty_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<ExternalParty_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<ExternalParty_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<ExternalParty_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<ExternalParty_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<ExternalParty_Select, { statecode: externalparty_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<ExternalParty_Select, { statuscode: externalparty_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<ExternalParty_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<ExternalParty_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  type: WebAttribute<ExternalParty_Select, { type: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<ExternalParty_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<ExternalParty_Select, { versionnumber: number | null }, {  }>;
}
interface ExternalParty_Filter {
  correlationkey: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  emailaddress: string;
  exchangerate: any;
  externalpartyid: XQW.Guid;
  externalpartyidunique: XQW.Guid;
  firstname: string;
  fullname: string;
  importsequencenumber: number;
  lastdisabledon: Date;
  lastenabledon: Date;
  lastname: string;
  middlename: string;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: externalparty_statecode;
  statuscode: externalparty_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  type: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface ExternalParty_Expand {
  ExternalParty_SyncErrors: WebExpand<ExternalParty_Expand, SyncError_Select, SyncError_Filter, { ExternalParty_SyncErrors: SyncError_Result[] }>;
  business_unit_externalparty_externalparty: WebExpand<ExternalParty_Expand, BusinessUnit_Select, BusinessUnit_Filter, { business_unit_externalparty_externalparty: BusinessUnit_Result }>;
  externalparty_PostRegardings: WebExpand<ExternalParty_Expand, PostRegarding_Select, PostRegarding_Filter, { externalparty_PostRegardings: PostRegarding_Result[] }>;
  externalparty_asyncoperations_externalparty: WebExpand<ExternalParty_Expand, AsyncOperation_Select, AsyncOperation_Filter, { externalparty_asyncoperations_externalparty: AsyncOperation_Result[] }>;
  externalparty_bulkdeletefailures_externalparty: WebExpand<ExternalParty_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { externalparty_bulkdeletefailures_externalparty: BulkDeleteFailure_Result[] }>;
  externalparty_createdby: WebExpand<ExternalParty_Expand, SystemUser_Select, SystemUser_Filter, { externalparty_createdby: SystemUser_Result }>;
  externalparty_createdonbehalfby: WebExpand<ExternalParty_Expand, SystemUser_Select, SystemUser_Filter, { externalparty_createdonbehalfby: SystemUser_Result }>;
  externalparty_entries: WebExpand<ExternalParty_Expand, ExternalPartyItem_Select, ExternalPartyItem_Filter, { externalparty_entries: ExternalPartyItem_Result[] }>;
  externalparty_modifiedby: WebExpand<ExternalParty_Expand, SystemUser_Select, SystemUser_Filter, { externalparty_modifiedby: SystemUser_Result }>;
  externalparty_modifiedonbehalfby: WebExpand<ExternalParty_Expand, SystemUser_Select, SystemUser_Filter, { externalparty_modifiedonbehalfby: SystemUser_Result }>;
  externalparty_processsession_externalparty: WebExpand<ExternalParty_Expand, ProcessSession_Select, ProcessSession_Filter, { externalparty_processsession_externalparty: ProcessSession_Result[] }>;
  externalparty_userentityinstancedatas_externalparty: WebExpand<ExternalParty_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { externalparty_userentityinstancedatas_externalparty: UserEntityInstanceData_Result[] }>;
  lk_externalparty_account_createdby: WebExpand<ExternalParty_Expand, Account_Select, Account_Filter, { lk_externalparty_account_createdby: Account_Result[] }>;
  lk_externalparty_account_modifiedby: WebExpand<ExternalParty_Expand, Account_Select, Account_Filter, { lk_externalparty_account_modifiedby: Account_Result[] }>;
  lk_externalparty_contact_createdby: WebExpand<ExternalParty_Expand, Contact_Select, Contact_Filter, { lk_externalparty_contact_createdby: Contact_Result[] }>;
  lk_externalparty_contact_modifiedby: WebExpand<ExternalParty_Expand, Contact_Select, Contact_Filter, { lk_externalparty_contact_modifiedby: Contact_Result[] }>;
  lk_externalparty_subject_createdby: WebExpand<ExternalParty_Expand, Subject_Select, Subject_Filter, { lk_externalparty_subject_createdby: Subject_Result[] }>;
  lk_externalparty_subject_modifiedby: WebExpand<ExternalParty_Expand, Subject_Select, Subject_Filter, { lk_externalparty_subject_modifiedby: Subject_Result[] }>;
  owner_externalparty_externalparty: WebExpand<ExternalParty_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { owner_externalparty_externalparty: SystemUser_Result } & { owner_externalparty_externalparty: Team_Result }>;
  team_externalparty_externalparty: WebExpand<ExternalParty_Expand, Team_Select, Team_Filter, { team_externalparty_externalparty: Team_Result }>;
  transactioncurrency_externalparty_externalparty: WebExpand<ExternalParty_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrency_externalparty_externalparty: TransactionCurrency_Result }>;
  user_externalparty: WebExpand<ExternalParty_Expand, SystemUser_Select, SystemUser_Filter, { user_externalparty: SystemUser_Result }>;
}
interface ExternalParty_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  lastdisabledon_formatted?: string;
  lastenabledon_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface ExternalParty_Result extends ExternalParty_Base, ExternalParty_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface ExternalParty_RelatedOne {
  business_unit_externalparty_externalparty: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  externalparty_createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  externalparty_createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  externalparty_modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  externalparty_modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  owner_externalparty_externalparty: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owner_externalparty_externalparty1: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  team_externalparty_externalparty: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  transactioncurrency_externalparty_externalparty: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
  user_externalparty: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface ExternalParty_RelatedMany {
  ExternalParty_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  externalparty_PostRegardings: WebMappingRetrieve<PostRegarding_Select,PostRegarding_Expand,PostRegarding_Filter,PostRegarding_Fixed,PostRegarding_Result,PostRegarding_FormattedResult>;
  externalparty_asyncoperations_externalparty: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  externalparty_bulkdeletefailures_externalparty: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  externalparty_entries: WebMappingRetrieve<ExternalPartyItem_Select,ExternalPartyItem_Expand,ExternalPartyItem_Filter,ExternalPartyItem_Fixed,ExternalPartyItem_Result,ExternalPartyItem_FormattedResult>;
  externalparty_processsession_externalparty: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  externalparty_userentityinstancedatas_externalparty: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  lk_externalparty_account_createdby: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  lk_externalparty_account_modifiedby: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  lk_externalparty_contact_createdby: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  lk_externalparty_contact_modifiedby: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  lk_externalparty_subject_createdby: WebMappingRetrieve<Subject_Select,Subject_Expand,Subject_Filter,Subject_Fixed,Subject_Result,Subject_FormattedResult>;
  lk_externalparty_subject_modifiedby: WebMappingRetrieve<Subject_Select,Subject_Expand,Subject_Filter,Subject_Fixed,Subject_Result,Subject_FormattedResult>;
}
interface WebEntitiesRetrieve {
  externalparties: WebMappingRetrieve<ExternalParty_Select,ExternalParty_Expand,ExternalParty_Filter,ExternalParty_Fixed,ExternalParty_Result,ExternalParty_FormattedResult>;
}
interface WebEntitiesRelated {
  externalparties: WebMappingRelated<ExternalParty_RelatedOne,ExternalParty_RelatedMany>;
}
interface WebEntitiesCUDA {
  externalparties: WebMappingCUDA<ExternalParty_Create,ExternalParty_Update,ExternalParty_Select>;
}
