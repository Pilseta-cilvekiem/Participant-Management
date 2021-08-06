interface mbs_pluginprofile_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  mbs_configuration?: string | null;
  mbs_correlationid?: string | null;
  mbs_depth?: number | null;
  mbs_label?: string | null;
  mbs_messagename?: string | null;
  mbs_mode?: mbs_pluginprofile_mbs_mode | null;
  mbs_operationtype?: mbs_pluginprofile_mbs_operationtype | null;
  mbs_performanceconstructorduration?: number | null;
  mbs_performanceconstructorstarttime?: Date | null;
  mbs_performanceexecutionduration?: number | null;
  mbs_performanceexecutionstarttime?: Date | null;
  mbs_persistencekey?: string | null;
  mbs_pluginprofileid?: string | null;
  mbs_primaryentity?: string | null;
  mbs_profile?: string | null;
  mbs_requestid?: string | null;
  mbs_secureconfiguration?: string | null;
  mbs_typename?: string | null;
  mbs_workflowstepid?: string | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: mbs_pluginprofile_statecode | null;
  statuscode?: mbs_pluginprofile_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface mbs_pluginprofile_Relationships {
  mbs_BusinessUnitId?: BusinessUnit_Result | null;
  mbs_InitiatingUserId?: SystemUser_Result | null;
  mbs_pluginprofile_AsyncOperations?: AsyncOperation_Result[] | null;
  mbs_pluginprofile_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  mbs_pluginprofile_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  mbs_pluginprofile_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  mbs_pluginprofile_ProcessSession?: ProcessSession_Result[] | null;
  mbs_pluginprofile_SyncErrors?: SyncError_Result[] | null;
  mbs_pluginprofile_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface mbs_pluginprofile extends mbs_pluginprofile_Base, mbs_pluginprofile_Relationships {
  mbs_BusinessUnitId_bind$businessunits?: string | null;
  mbs_InitiatingUserId_bind$systemusers?: string | null;
}
interface mbs_pluginprofile_Create extends mbs_pluginprofile {
}
interface mbs_pluginprofile_Update extends mbs_pluginprofile {
}
interface mbs_pluginprofile_Select {
  createdby_guid: WebAttribute<mbs_pluginprofile_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<mbs_pluginprofile_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<mbs_pluginprofile_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<mbs_pluginprofile_Select, { importsequencenumber: number | null }, {  }>;
  mbs_businessunitid_guid: WebAttribute<mbs_pluginprofile_Select, { mbs_businessunitid_guid: string | null }, { mbs_businessunitid_formatted?: string }>;
  mbs_configuration: WebAttribute<mbs_pluginprofile_Select, { mbs_configuration: string | null }, {  }>;
  mbs_correlationid: WebAttribute<mbs_pluginprofile_Select, { mbs_correlationid: string | null }, {  }>;
  mbs_depth: WebAttribute<mbs_pluginprofile_Select, { mbs_depth: number | null }, {  }>;
  mbs_initiatinguserid_guid: WebAttribute<mbs_pluginprofile_Select, { mbs_initiatinguserid_guid: string | null }, { mbs_initiatinguserid_formatted?: string }>;
  mbs_label: WebAttribute<mbs_pluginprofile_Select, { mbs_label: string | null }, {  }>;
  mbs_messagename: WebAttribute<mbs_pluginprofile_Select, { mbs_messagename: string | null }, {  }>;
  mbs_mode: WebAttribute<mbs_pluginprofile_Select, { mbs_mode: mbs_pluginprofile_mbs_mode | null }, { mbs_mode_formatted?: string }>;
  mbs_operationtype: WebAttribute<mbs_pluginprofile_Select, { mbs_operationtype: mbs_pluginprofile_mbs_operationtype | null }, { mbs_operationtype_formatted?: string }>;
  mbs_performanceconstructorduration: WebAttribute<mbs_pluginprofile_Select, { mbs_performanceconstructorduration: number | null }, {  }>;
  mbs_performanceconstructorstarttime: WebAttribute<mbs_pluginprofile_Select, { mbs_performanceconstructorstarttime: Date | null }, { mbs_performanceconstructorstarttime_formatted?: string }>;
  mbs_performanceexecutionduration: WebAttribute<mbs_pluginprofile_Select, { mbs_performanceexecutionduration: number | null }, {  }>;
  mbs_performanceexecutionstarttime: WebAttribute<mbs_pluginprofile_Select, { mbs_performanceexecutionstarttime: Date | null }, { mbs_performanceexecutionstarttime_formatted?: string }>;
  mbs_persistencekey: WebAttribute<mbs_pluginprofile_Select, { mbs_persistencekey: string | null }, {  }>;
  mbs_pluginprofileid: WebAttribute<mbs_pluginprofile_Select, { mbs_pluginprofileid: string | null }, {  }>;
  mbs_primaryentity: WebAttribute<mbs_pluginprofile_Select, { mbs_primaryentity: string | null }, {  }>;
  mbs_profile: WebAttribute<mbs_pluginprofile_Select, { mbs_profile: string | null }, {  }>;
  mbs_requestid: WebAttribute<mbs_pluginprofile_Select, { mbs_requestid: string | null }, {  }>;
  mbs_secureconfiguration: WebAttribute<mbs_pluginprofile_Select, { mbs_secureconfiguration: string | null }, {  }>;
  mbs_typename: WebAttribute<mbs_pluginprofile_Select, { mbs_typename: string | null }, {  }>;
  mbs_workflowstepid: WebAttribute<mbs_pluginprofile_Select, { mbs_workflowstepid: string | null }, {  }>;
  modifiedby_guid: WebAttribute<mbs_pluginprofile_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<mbs_pluginprofile_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<mbs_pluginprofile_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<mbs_pluginprofile_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<mbs_pluginprofile_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<mbs_pluginprofile_Select, { statecode: mbs_pluginprofile_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<mbs_pluginprofile_Select, { statuscode: mbs_pluginprofile_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<mbs_pluginprofile_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<mbs_pluginprofile_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<mbs_pluginprofile_Select, { versionnumber: number | null }, {  }>;
}
interface mbs_pluginprofile_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  mbs_businessunitid_guid: XQW.Guid;
  mbs_configuration: string;
  mbs_correlationid: string;
  mbs_depth: number;
  mbs_initiatinguserid_guid: XQW.Guid;
  mbs_label: string;
  mbs_messagename: string;
  mbs_mode: mbs_pluginprofile_mbs_mode;
  mbs_operationtype: mbs_pluginprofile_mbs_operationtype;
  mbs_performanceconstructorduration: number;
  mbs_performanceconstructorstarttime: Date;
  mbs_performanceexecutionduration: number;
  mbs_performanceexecutionstarttime: Date;
  mbs_persistencekey: string;
  mbs_pluginprofileid: XQW.Guid;
  mbs_primaryentity: string;
  mbs_profile: string;
  mbs_requestid: string;
  mbs_secureconfiguration: string;
  mbs_typename: string;
  mbs_workflowstepid: string;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: mbs_pluginprofile_statecode;
  statuscode: mbs_pluginprofile_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface mbs_pluginprofile_Expand {
  createdby: WebExpand<mbs_pluginprofile_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<mbs_pluginprofile_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  mbs_BusinessUnitId: WebExpand<mbs_pluginprofile_Expand, BusinessUnit_Select, BusinessUnit_Filter, { mbs_BusinessUnitId: BusinessUnit_Result }>;
  mbs_InitiatingUserId: WebExpand<mbs_pluginprofile_Expand, SystemUser_Select, SystemUser_Filter, { mbs_InitiatingUserId: SystemUser_Result }>;
  mbs_pluginprofile_AsyncOperations: WebExpand<mbs_pluginprofile_Expand, AsyncOperation_Select, AsyncOperation_Filter, { mbs_pluginprofile_AsyncOperations: AsyncOperation_Result[] }>;
  mbs_pluginprofile_BulkDeleteFailures: WebExpand<mbs_pluginprofile_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { mbs_pluginprofile_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  mbs_pluginprofile_MailboxTrackingFolders: WebExpand<mbs_pluginprofile_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { mbs_pluginprofile_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  mbs_pluginprofile_PrincipalObjectAttributeAccesses: WebExpand<mbs_pluginprofile_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { mbs_pluginprofile_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  mbs_pluginprofile_ProcessSession: WebExpand<mbs_pluginprofile_Expand, ProcessSession_Select, ProcessSession_Filter, { mbs_pluginprofile_ProcessSession: ProcessSession_Result[] }>;
  mbs_pluginprofile_SyncErrors: WebExpand<mbs_pluginprofile_Expand, SyncError_Select, SyncError_Filter, { mbs_pluginprofile_SyncErrors: SyncError_Result[] }>;
  mbs_pluginprofile_UserEntityInstanceDatas: WebExpand<mbs_pluginprofile_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { mbs_pluginprofile_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  modifiedby: WebExpand<mbs_pluginprofile_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<mbs_pluginprofile_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<mbs_pluginprofile_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface mbs_pluginprofile_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  mbs_businessunitid_formatted?: string;
  mbs_initiatinguserid_formatted?: string;
  mbs_mode_formatted?: string;
  mbs_operationtype_formatted?: string;
  mbs_performanceconstructorstarttime_formatted?: string;
  mbs_performanceexecutionstarttime_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface mbs_pluginprofile_Result extends mbs_pluginprofile_Base, mbs_pluginprofile_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  mbs_businessunitid_guid: string | null;
  mbs_initiatinguserid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface mbs_pluginprofile_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  mbs_BusinessUnitId: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  mbs_InitiatingUserId: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface mbs_pluginprofile_RelatedMany {
  mbs_pluginprofile_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  mbs_pluginprofile_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  mbs_pluginprofile_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  mbs_pluginprofile_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  mbs_pluginprofile_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  mbs_pluginprofile_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  mbs_pluginprofile_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  mbs_pluginprofiles: WebMappingRetrieve<mbs_pluginprofile_Select,mbs_pluginprofile_Expand,mbs_pluginprofile_Filter,mbs_pluginprofile_Fixed,mbs_pluginprofile_Result,mbs_pluginprofile_FormattedResult>;
}
interface WebEntitiesRelated {
  mbs_pluginprofiles: WebMappingRelated<mbs_pluginprofile_RelatedOne,mbs_pluginprofile_RelatedMany>;
}
interface WebEntitiesCUDA {
  mbs_pluginprofiles: WebMappingCUDA<mbs_pluginprofile_Create,mbs_pluginprofile_Update,mbs_pluginprofile_Select>;
}
