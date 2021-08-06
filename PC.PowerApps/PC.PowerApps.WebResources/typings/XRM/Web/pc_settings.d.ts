interface pc_Settings_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  pc_automaticallyprocesstransactions?: boolean | null;
  pc_googleadminemail?: string | null;
  pc_googleserviceaccountkey?: string | null;
  pc_googlesupportergroup?: string | null;
  pc_name?: string | null;
  pc_nonparticipantfeeregularexpressions?: string | null;
  pc_participantfeeregularexpressions?: string | null;
  pc_settingsid?: string | null;
  statecode?: pc_settings_statecode | null;
  statuscode?: pc_settings_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface pc_Settings_Relationships {
  pc_EmailSender?: Queue_Result | null;
  pc_settings_AsyncOperations?: AsyncOperation_Result[] | null;
  pc_settings_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  pc_settings_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  pc_settings_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  pc_settings_ProcessSession?: ProcessSession_Result[] | null;
  pc_settings_SyncErrors?: SyncError_Result[] | null;
  pc_settings_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface pc_Settings extends pc_Settings_Base, pc_Settings_Relationships {
  pc_EmailSender_bind$queues?: string | null;
}
interface pc_Settings_Create extends pc_Settings {
}
interface pc_Settings_Update extends pc_Settings {
}
interface pc_Settings_Select {
  createdby_guid: WebAttribute<pc_Settings_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<pc_Settings_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<pc_Settings_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<pc_Settings_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<pc_Settings_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<pc_Settings_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<pc_Settings_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<pc_Settings_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<pc_Settings_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  pc_automaticallyprocesstransactions: WebAttribute<pc_Settings_Select, { pc_automaticallyprocesstransactions: boolean | null }, {  }>;
  pc_emailsender_guid: WebAttribute<pc_Settings_Select, { pc_emailsender_guid: string | null }, { pc_emailsender_formatted?: string }>;
  pc_googleadminemail: WebAttribute<pc_Settings_Select, { pc_googleadminemail: string | null }, {  }>;
  pc_googleserviceaccountkey: WebAttribute<pc_Settings_Select, { pc_googleserviceaccountkey: string | null }, {  }>;
  pc_googlesupportergroup: WebAttribute<pc_Settings_Select, { pc_googlesupportergroup: string | null }, {  }>;
  pc_name: WebAttribute<pc_Settings_Select, { pc_name: string | null }, {  }>;
  pc_nonparticipantfeeregularexpressions: WebAttribute<pc_Settings_Select, { pc_nonparticipantfeeregularexpressions: string | null }, {  }>;
  pc_participantfeeregularexpressions: WebAttribute<pc_Settings_Select, { pc_participantfeeregularexpressions: string | null }, {  }>;
  pc_settingsid: WebAttribute<pc_Settings_Select, { pc_settingsid: string | null }, {  }>;
  statecode: WebAttribute<pc_Settings_Select, { statecode: pc_settings_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<pc_Settings_Select, { statuscode: pc_settings_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<pc_Settings_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<pc_Settings_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<pc_Settings_Select, { versionnumber: number | null }, {  }>;
}
interface pc_Settings_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  pc_automaticallyprocesstransactions: boolean;
  pc_emailsender_guid: XQW.Guid;
  pc_googleadminemail: string;
  pc_googleserviceaccountkey: string;
  pc_googlesupportergroup: string;
  pc_name: string;
  pc_nonparticipantfeeregularexpressions: string;
  pc_participantfeeregularexpressions: string;
  pc_settingsid: XQW.Guid;
  statecode: pc_settings_statecode;
  statuscode: pc_settings_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface pc_Settings_Expand {
  createdby: WebExpand<pc_Settings_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<pc_Settings_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<pc_Settings_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<pc_Settings_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<pc_Settings_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  pc_EmailSender: WebExpand<pc_Settings_Expand, Queue_Select, Queue_Filter, { pc_EmailSender: Queue_Result }>;
  pc_settings_AsyncOperations: WebExpand<pc_Settings_Expand, AsyncOperation_Select, AsyncOperation_Filter, { pc_settings_AsyncOperations: AsyncOperation_Result[] }>;
  pc_settings_BulkDeleteFailures: WebExpand<pc_Settings_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { pc_settings_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  pc_settings_MailboxTrackingFolders: WebExpand<pc_Settings_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { pc_settings_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  pc_settings_PrincipalObjectAttributeAccesses: WebExpand<pc_Settings_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { pc_settings_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  pc_settings_ProcessSession: WebExpand<pc_Settings_Expand, ProcessSession_Select, ProcessSession_Filter, { pc_settings_ProcessSession: ProcessSession_Result[] }>;
  pc_settings_SyncErrors: WebExpand<pc_Settings_Expand, SyncError_Select, SyncError_Filter, { pc_settings_SyncErrors: SyncError_Result[] }>;
  pc_settings_UserEntityInstanceDatas: WebExpand<pc_Settings_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { pc_settings_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
}
interface pc_Settings_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  pc_emailsender_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface pc_Settings_Result extends pc_Settings_Base, pc_Settings_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  pc_emailsender_guid: string | null;
}
interface pc_Settings_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  pc_EmailSender: WebMappingRetrieve<Queue_Select,Queue_Expand,Queue_Filter,Queue_Fixed,Queue_Result,Queue_FormattedResult>;
}
interface pc_Settings_RelatedMany {
  pc_settings_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  pc_settings_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  pc_settings_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  pc_settings_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  pc_settings_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  pc_settings_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  pc_settings_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  pc_settingses: WebMappingRetrieve<pc_Settings_Select,pc_Settings_Expand,pc_Settings_Filter,pc_Settings_Fixed,pc_Settings_Result,pc_Settings_FormattedResult>;
}
interface WebEntitiesRelated {
  pc_settingses: WebMappingRelated<pc_Settings_RelatedOne,pc_Settings_RelatedMany>;
}
interface WebEntitiesCUDA {
  pc_settingses: WebMappingCUDA<pc_Settings_Create,pc_Settings_Update,pc_Settings_Select>;
}
