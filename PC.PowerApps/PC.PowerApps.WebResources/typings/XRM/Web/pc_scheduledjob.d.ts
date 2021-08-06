interface pc_ScheduledJob_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  pc_completedon?: Date | null;
  pc_error?: string | null;
  pc_executeevery?: number | null;
  pc_executeon?: Date | null;
  pc_failures?: number | null;
  pc_name?: string | null;
  pc_parameters?: string | null;
  pc_postponeuntil?: Date | null;
  pc_recurrence?: pc_recurrence | null;
  pc_scheduledjobid?: string | null;
  pc_startedon?: Date | null;
  statecode?: pc_scheduledjob_statecode | null;
  statuscode?: pc_scheduledjob_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface pc_ScheduledJob_Relationships {
  pc_scheduledjob_AsyncOperations?: AsyncOperation_Result[] | null;
  pc_scheduledjob_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  pc_scheduledjob_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  pc_scheduledjob_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  pc_scheduledjob_ProcessSession?: ProcessSession_Result[] | null;
  pc_scheduledjob_SyncErrors?: SyncError_Result[] | null;
  pc_scheduledjob_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface pc_ScheduledJob extends pc_ScheduledJob_Base, pc_ScheduledJob_Relationships {
}
interface pc_ScheduledJob_Create extends pc_ScheduledJob {
}
interface pc_ScheduledJob_Update extends pc_ScheduledJob {
}
interface pc_ScheduledJob_Select {
  createdby_guid: WebAttribute<pc_ScheduledJob_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<pc_ScheduledJob_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<pc_ScheduledJob_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<pc_ScheduledJob_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<pc_ScheduledJob_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<pc_ScheduledJob_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<pc_ScheduledJob_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<pc_ScheduledJob_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<pc_ScheduledJob_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  pc_completedon: WebAttribute<pc_ScheduledJob_Select, { pc_completedon: Date | null }, { pc_completedon_formatted?: string }>;
  pc_error: WebAttribute<pc_ScheduledJob_Select, { pc_error: string | null }, {  }>;
  pc_executeevery: WebAttribute<pc_ScheduledJob_Select, { pc_executeevery: number | null }, {  }>;
  pc_executeon: WebAttribute<pc_ScheduledJob_Select, { pc_executeon: Date | null }, { pc_executeon_formatted?: string }>;
  pc_failures: WebAttribute<pc_ScheduledJob_Select, { pc_failures: number | null }, {  }>;
  pc_name: WebAttribute<pc_ScheduledJob_Select, { pc_name: string | null }, {  }>;
  pc_parameters: WebAttribute<pc_ScheduledJob_Select, { pc_parameters: string | null }, {  }>;
  pc_postponeuntil: WebAttribute<pc_ScheduledJob_Select, { pc_postponeuntil: Date | null }, { pc_postponeuntil_formatted?: string }>;
  pc_recurrence: WebAttribute<pc_ScheduledJob_Select, { pc_recurrence: pc_recurrence | null }, { pc_recurrence_formatted?: string }>;
  pc_scheduledjobid: WebAttribute<pc_ScheduledJob_Select, { pc_scheduledjobid: string | null }, {  }>;
  pc_startedon: WebAttribute<pc_ScheduledJob_Select, { pc_startedon: Date | null }, { pc_startedon_formatted?: string }>;
  statecode: WebAttribute<pc_ScheduledJob_Select, { statecode: pc_scheduledjob_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<pc_ScheduledJob_Select, { statuscode: pc_scheduledjob_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<pc_ScheduledJob_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<pc_ScheduledJob_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<pc_ScheduledJob_Select, { versionnumber: number | null }, {  }>;
}
interface pc_ScheduledJob_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  pc_completedon: Date;
  pc_error: string;
  pc_executeevery: number;
  pc_executeon: Date;
  pc_failures: number;
  pc_name: string;
  pc_parameters: string;
  pc_postponeuntil: Date;
  pc_recurrence: pc_recurrence;
  pc_scheduledjobid: XQW.Guid;
  pc_startedon: Date;
  statecode: pc_scheduledjob_statecode;
  statuscode: pc_scheduledjob_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface pc_ScheduledJob_Expand {
  createdby: WebExpand<pc_ScheduledJob_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<pc_ScheduledJob_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<pc_ScheduledJob_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<pc_ScheduledJob_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<pc_ScheduledJob_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  pc_scheduledjob_AsyncOperations: WebExpand<pc_ScheduledJob_Expand, AsyncOperation_Select, AsyncOperation_Filter, { pc_scheduledjob_AsyncOperations: AsyncOperation_Result[] }>;
  pc_scheduledjob_BulkDeleteFailures: WebExpand<pc_ScheduledJob_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { pc_scheduledjob_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  pc_scheduledjob_MailboxTrackingFolders: WebExpand<pc_ScheduledJob_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { pc_scheduledjob_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  pc_scheduledjob_PrincipalObjectAttributeAccesses: WebExpand<pc_ScheduledJob_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { pc_scheduledjob_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  pc_scheduledjob_ProcessSession: WebExpand<pc_ScheduledJob_Expand, ProcessSession_Select, ProcessSession_Filter, { pc_scheduledjob_ProcessSession: ProcessSession_Result[] }>;
  pc_scheduledjob_SyncErrors: WebExpand<pc_ScheduledJob_Expand, SyncError_Select, SyncError_Filter, { pc_scheduledjob_SyncErrors: SyncError_Result[] }>;
  pc_scheduledjob_UserEntityInstanceDatas: WebExpand<pc_ScheduledJob_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { pc_scheduledjob_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
}
interface pc_ScheduledJob_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  pc_completedon_formatted?: string;
  pc_executeon_formatted?: string;
  pc_postponeuntil_formatted?: string;
  pc_recurrence_formatted?: string;
  pc_startedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface pc_ScheduledJob_Result extends pc_ScheduledJob_Base, pc_ScheduledJob_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface pc_ScheduledJob_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface pc_ScheduledJob_RelatedMany {
  pc_scheduledjob_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  pc_scheduledjob_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  pc_scheduledjob_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  pc_scheduledjob_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  pc_scheduledjob_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  pc_scheduledjob_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  pc_scheduledjob_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  pc_scheduledjobs: WebMappingRetrieve<pc_ScheduledJob_Select,pc_ScheduledJob_Expand,pc_ScheduledJob_Filter,pc_ScheduledJob_Fixed,pc_ScheduledJob_Result,pc_ScheduledJob_FormattedResult>;
}
interface WebEntitiesRelated {
  pc_scheduledjobs: WebMappingRelated<pc_ScheduledJob_RelatedOne,pc_ScheduledJob_RelatedMany>;
}
interface WebEntitiesCUDA {
  pc_scheduledjobs: WebMappingCUDA<pc_ScheduledJob_Create,pc_ScheduledJob_Update,pc_ScheduledJob_Select>;
}
