interface WorkflowLog_Base extends WebEntity {
  activityname?: string | null;
  completedon?: Date | null;
  createdon?: Date | null;
  description?: string | null;
  duration?: number | null;
  errorcode?: number | null;
  errortext?: string | null;
  interactionactivityresult?: string | null;
  iterationcount?: number | null;
  message?: string | null;
  modifiedon?: Date | null;
  repetitioncount?: number | null;
  repetitionid?: string | null;
  stagename?: string | null;
  startedon?: Date | null;
  status?: workflowlog_status | null;
  stepname?: string | null;
  workflowlogid?: string | null;
}
interface WorkflowLog_Relationships {
  ExpiredProcess_asyncoperationid?: ExpiredProcess_Result | null;
  NewProcess_asyncoperationid?: NewProcess_Result | null;
  TranslationProcess_asyncoperationid?: TranslationProcess_Result | null;
  asyncoperationid_asyncoperation?: AsyncOperation_Result | null;
  asyncoperationid_processsession?: ProcessSession_Result | null;
  childworkflowinstanceid_asyncoperation?: AsyncOperation_Result | null;
  childworkflowinstanceid_processsession?: ProcessSession_Result | null;
  inputs?: FileAttachment_Result | null;
  outputs?: FileAttachment_Result | null;
  userentityinstancedata_workflowlog?: UserEntityInstanceData_Result[] | null;
  workflowlog_FileAttachments?: FileAttachment_Result[] | null;
}
interface WorkflowLog extends WorkflowLog_Base, WorkflowLog_Relationships {
  childworkflowinstanceid_asyncoperation_bind$asyncoperations?: string | null;
  childworkflowinstanceid_processsession_bind$processsessions?: string | null;
}
interface WorkflowLog_Create extends WorkflowLog {
  ExpiredProcess_asyncoperationid_bind$expiredprocesses?: string | null;
  NewProcess_asyncoperationid_bind$newprocesses?: string | null;
  TranslationProcess_asyncoperationid_bind$translationprocesses?: string | null;
  asyncoperationid_asyncoperation_bind$asyncoperations?: string | null;
  asyncoperationid_processsession_bind$processsessions?: string | null;
}
interface WorkflowLog_Update extends WorkflowLog {
}
interface WorkflowLog_Select {
  activityname: WebAttribute<WorkflowLog_Select, { activityname: string | null }, {  }>;
  asyncoperationid_guid: WebAttribute<WorkflowLog_Select, { asyncoperationid_guid: string | null }, { asyncoperationid_formatted?: string }>;
  childworkflowinstanceid_guid: WebAttribute<WorkflowLog_Select, { childworkflowinstanceid_guid: string | null }, { childworkflowinstanceid_formatted?: string }>;
  completedon: WebAttribute<WorkflowLog_Select, { completedon: Date | null }, { completedon_formatted?: string }>;
  createdby_guid: WebAttribute<WorkflowLog_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<WorkflowLog_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<WorkflowLog_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<WorkflowLog_Select, { description: string | null }, {  }>;
  duration: WebAttribute<WorkflowLog_Select, { duration: number | null }, {  }>;
  errorcode: WebAttribute<WorkflowLog_Select, { errorcode: number | null }, {  }>;
  errortext: WebAttribute<WorkflowLog_Select, { errortext: string | null }, {  }>;
  interactionactivityresult: WebAttribute<WorkflowLog_Select, { interactionactivityresult: string | null }, {  }>;
  iterationcount: WebAttribute<WorkflowLog_Select, { iterationcount: number | null }, {  }>;
  message: WebAttribute<WorkflowLog_Select, { message: string | null }, {  }>;
  modifiedby_guid: WebAttribute<WorkflowLog_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<WorkflowLog_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<WorkflowLog_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  ownerid_guid: WebAttribute<WorkflowLog_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<WorkflowLog_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<WorkflowLog_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<WorkflowLog_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  regardingobjectid_guid: WebAttribute<WorkflowLog_Select, { regardingobjectid_guid: string | null }, { regardingobjectid_formatted?: string }>;
  repetitioncount: WebAttribute<WorkflowLog_Select, { repetitioncount: number | null }, {  }>;
  repetitionid: WebAttribute<WorkflowLog_Select, { repetitionid: string | null }, {  }>;
  stagename: WebAttribute<WorkflowLog_Select, { stagename: string | null }, {  }>;
  startedon: WebAttribute<WorkflowLog_Select, { startedon: Date | null }, { startedon_formatted?: string }>;
  status: WebAttribute<WorkflowLog_Select, { status: workflowlog_status | null }, { status_formatted?: string }>;
  stepname: WebAttribute<WorkflowLog_Select, { stepname: string | null }, {  }>;
  workflowlogid: WebAttribute<WorkflowLog_Select, { workflowlogid: string | null }, {  }>;
}
interface WorkflowLog_Filter {
  activityname: string;
  asyncoperationid_guid: XQW.Guid;
  childworkflowinstanceid_guid: XQW.Guid;
  completedon: Date;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  duration: number;
  errorcode: number;
  errortext: string;
  interactionactivityresult: string;
  iterationcount: number;
  message: string;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  regardingobjectid_guid: XQW.Guid;
  repetitioncount: number;
  repetitionid: string;
  stagename: string;
  startedon: Date;
  status: workflowlog_status;
  stepname: string;
  workflowlogid: XQW.Guid;
}
interface WorkflowLog_Expand {
  ExpiredProcess_asyncoperationid: WebExpand<WorkflowLog_Expand, ExpiredProcess_Select, ExpiredProcess_Filter, { ExpiredProcess_asyncoperationid: ExpiredProcess_Result }>;
  NewProcess_asyncoperationid: WebExpand<WorkflowLog_Expand, NewProcess_Select, NewProcess_Filter, { NewProcess_asyncoperationid: NewProcess_Result }>;
  TranslationProcess_asyncoperationid: WebExpand<WorkflowLog_Expand, TranslationProcess_Select, TranslationProcess_Filter, { TranslationProcess_asyncoperationid: TranslationProcess_Result }>;
  asyncoperationid_asyncoperation: WebExpand<WorkflowLog_Expand, AsyncOperation_Select, AsyncOperation_Filter, { asyncoperationid_asyncoperation: AsyncOperation_Result }>;
  asyncoperationid_processsession: WebExpand<WorkflowLog_Expand, ProcessSession_Select, ProcessSession_Filter, { asyncoperationid_processsession: ProcessSession_Result }>;
  childworkflowinstanceid_asyncoperation: WebExpand<WorkflowLog_Expand, AsyncOperation_Select, AsyncOperation_Filter, { childworkflowinstanceid_asyncoperation: AsyncOperation_Result }>;
  childworkflowinstanceid_processsession: WebExpand<WorkflowLog_Expand, ProcessSession_Select, ProcessSession_Filter, { childworkflowinstanceid_processsession: ProcessSession_Result }>;
  createdby: WebExpand<WorkflowLog_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<WorkflowLog_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  inputs: WebExpand<WorkflowLog_Expand, FileAttachment_Select, FileAttachment_Filter, { inputs: FileAttachment_Result }>;
  modifiedby: WebExpand<WorkflowLog_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<WorkflowLog_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  outputs: WebExpand<WorkflowLog_Expand, FileAttachment_Select, FileAttachment_Filter, { outputs: FileAttachment_Result }>;
  owningbusinessunit: WebExpand<WorkflowLog_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<WorkflowLog_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  userentityinstancedata_workflowlog: WebExpand<WorkflowLog_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_workflowlog: UserEntityInstanceData_Result[] }>;
  workflowlog_FileAttachments: WebExpand<WorkflowLog_Expand, FileAttachment_Select, FileAttachment_Filter, { workflowlog_FileAttachments: FileAttachment_Result[] }>;
}
interface WorkflowLog_FormattedResult {
  asyncoperationid_formatted?: string;
  childworkflowinstanceid_formatted?: string;
  completedon_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  regardingobjectid_formatted?: string;
  startedon_formatted?: string;
  status_formatted?: string;
}
interface WorkflowLog_Result extends WorkflowLog_Base, WorkflowLog_Relationships {
  "@odata.etag": string;
  asyncoperationid_guid: string | null;
  childworkflowinstanceid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  regardingobjectid_guid: string | null;
}
interface WorkflowLog_RelatedOne {
  ExpiredProcess_asyncoperationid: WebMappingRetrieve<ExpiredProcess_Select,ExpiredProcess_Expand,ExpiredProcess_Filter,ExpiredProcess_Fixed,ExpiredProcess_Result,ExpiredProcess_FormattedResult>;
  NewProcess_asyncoperationid: WebMappingRetrieve<NewProcess_Select,NewProcess_Expand,NewProcess_Filter,NewProcess_Fixed,NewProcess_Result,NewProcess_FormattedResult>;
  TranslationProcess_asyncoperationid: WebMappingRetrieve<TranslationProcess_Select,TranslationProcess_Expand,TranslationProcess_Filter,TranslationProcess_Fixed,TranslationProcess_Result,TranslationProcess_FormattedResult>;
  asyncoperationid_asyncoperation: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  asyncoperationid_processsession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  childworkflowinstanceid_asyncoperation: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  childworkflowinstanceid_processsession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  inputs: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  outputs: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
}
interface WorkflowLog_RelatedMany {
  userentityinstancedata_workflowlog: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  workflowlog_FileAttachments: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
}
interface WebEntitiesRetrieve {
  workflowlogs: WebMappingRetrieve<WorkflowLog_Select,WorkflowLog_Expand,WorkflowLog_Filter,WorkflowLog_Fixed,WorkflowLog_Result,WorkflowLog_FormattedResult>;
}
interface WebEntitiesRelated {
  workflowlogs: WebMappingRelated<WorkflowLog_RelatedOne,WorkflowLog_RelatedMany>;
}
interface WebEntitiesCUDA {
  workflowlogs: WebMappingCUDA<WorkflowLog_Create,WorkflowLog_Update,WorkflowLog_Select>;
}
