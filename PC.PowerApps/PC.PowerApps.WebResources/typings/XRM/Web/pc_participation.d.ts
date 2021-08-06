interface pc_Participation_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  pc_from?: Date | null;
  pc_level?: pc_participationlevel | null;
  pc_name?: string | null;
  pc_participationid?: string | null;
  pc_till?: Date | null;
  statecode?: pc_participation_statecode | null;
  statuscode?: pc_participation_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface pc_Participation_Relationships {
  pc_Contact?: Contact_Result | null;
  pc_participation_AsyncOperations?: AsyncOperation_Result[] | null;
  pc_participation_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  pc_participation_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  pc_participation_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  pc_participation_ProcessSession?: ProcessSession_Result[] | null;
  pc_participation_SyncErrors?: SyncError_Result[] | null;
  pc_participation_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface pc_Participation extends pc_Participation_Base, pc_Participation_Relationships {
  pc_Contact_bind$contacts?: string | null;
}
interface pc_Participation_Create extends pc_Participation {
}
interface pc_Participation_Update extends pc_Participation {
}
interface pc_Participation_Select {
  createdby_guid: WebAttribute<pc_Participation_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<pc_Participation_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<pc_Participation_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<pc_Participation_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<pc_Participation_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<pc_Participation_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<pc_Participation_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<pc_Participation_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<pc_Participation_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  pc_contact_guid: WebAttribute<pc_Participation_Select, { pc_contact_guid: string | null }, { pc_contact_formatted?: string }>;
  pc_from: WebAttribute<pc_Participation_Select, { pc_from: Date | null }, { pc_from_formatted?: string }>;
  pc_level: WebAttribute<pc_Participation_Select, { pc_level: pc_participationlevel | null }, { pc_level_formatted?: string }>;
  pc_name: WebAttribute<pc_Participation_Select, { pc_name: string | null }, {  }>;
  pc_participationid: WebAttribute<pc_Participation_Select, { pc_participationid: string | null }, {  }>;
  pc_till: WebAttribute<pc_Participation_Select, { pc_till: Date | null }, { pc_till_formatted?: string }>;
  statecode: WebAttribute<pc_Participation_Select, { statecode: pc_participation_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<pc_Participation_Select, { statuscode: pc_participation_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<pc_Participation_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<pc_Participation_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<pc_Participation_Select, { versionnumber: number | null }, {  }>;
}
interface pc_Participation_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  pc_contact_guid: XQW.Guid;
  pc_from: Date;
  pc_level: pc_participationlevel;
  pc_name: string;
  pc_participationid: XQW.Guid;
  pc_till: Date;
  statecode: pc_participation_statecode;
  statuscode: pc_participation_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface pc_Participation_Expand {
  createdby: WebExpand<pc_Participation_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<pc_Participation_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<pc_Participation_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<pc_Participation_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<pc_Participation_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  pc_Contact: WebExpand<pc_Participation_Expand, Contact_Select, Contact_Filter, { pc_Contact: Contact_Result }>;
  pc_participation_AsyncOperations: WebExpand<pc_Participation_Expand, AsyncOperation_Select, AsyncOperation_Filter, { pc_participation_AsyncOperations: AsyncOperation_Result[] }>;
  pc_participation_BulkDeleteFailures: WebExpand<pc_Participation_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { pc_participation_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  pc_participation_MailboxTrackingFolders: WebExpand<pc_Participation_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { pc_participation_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  pc_participation_PrincipalObjectAttributeAccesses: WebExpand<pc_Participation_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { pc_participation_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  pc_participation_ProcessSession: WebExpand<pc_Participation_Expand, ProcessSession_Select, ProcessSession_Filter, { pc_participation_ProcessSession: ProcessSession_Result[] }>;
  pc_participation_SyncErrors: WebExpand<pc_Participation_Expand, SyncError_Select, SyncError_Filter, { pc_participation_SyncErrors: SyncError_Result[] }>;
  pc_participation_UserEntityInstanceDatas: WebExpand<pc_Participation_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { pc_participation_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
}
interface pc_Participation_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  pc_contact_formatted?: string;
  pc_from_formatted?: string;
  pc_level_formatted?: string;
  pc_till_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface pc_Participation_Result extends pc_Participation_Base, pc_Participation_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  pc_contact_guid: string | null;
}
interface pc_Participation_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  pc_Contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
}
interface pc_Participation_RelatedMany {
  pc_participation_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  pc_participation_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  pc_participation_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  pc_participation_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  pc_participation_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  pc_participation_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  pc_participation_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  pc_participations: WebMappingRetrieve<pc_Participation_Select,pc_Participation_Expand,pc_Participation_Filter,pc_Participation_Fixed,pc_Participation_Result,pc_Participation_FormattedResult>;
}
interface WebEntitiesRelated {
  pc_participations: WebMappingRelated<pc_Participation_RelatedOne,pc_Participation_RelatedMany>;
}
interface WebEntitiesCUDA {
  pc_participations: WebMappingCUDA<pc_Participation_Create,pc_Participation_Update,pc_Participation_Select>;
}
