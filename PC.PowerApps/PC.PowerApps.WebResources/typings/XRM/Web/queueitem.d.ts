interface QueueItem_Base extends WebEntity {
  createdon?: Date | null;
  enteredon?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  objecttypecode?: queueitem_objecttypecode | null;
  overriddencreatedon?: Date | null;
  priority?: number | null;
  queueitemid?: string | null;
  sender?: string | null;
  state?: number | null;
  statecode?: queueitem_statecode | null;
  status?: number | null;
  statuscode?: queueitem_statuscode | null;
  timezoneruleversionnumber?: number | null;
  title?: string | null;
  torecipients?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
  workeridmodifiedon?: Date | null;
}
interface QueueItem_Relationships {
  QueueItem_AsyncOperations?: AsyncOperation_Result[] | null;
  QueueItem_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  QueueItem_ProcessSessions?: ProcessSession_Result[] | null;
  QueueItem_SyncErrors?: SyncError_Result[] | null;
  objectid_activitypointer?: ActivityPointer_Result | null;
  objectid_appointment?: Appointment_Result | null;
  objectid_email?: Email_Result | null;
  objectid_fax?: Fax_Result | null;
  objectid_knowledgearticle?: KnowledgeArticle_Result | null;
  objectid_letter?: Letter_Result | null;
  objectid_msdyn_knowledgearticletemplate?: msdyn_knowledgearticletemplate_Result | null;
  objectid_phonecall?: PhoneCall_Result | null;
  objectid_recurringappointmentmaster?: RecurringAppointmentMaster_Result | null;
  objectid_socialactivity?: SocialActivity_Result | null;
  objectid_task?: Task_Result | null;
  queueitem_principalobjectattributeaccess?: PrincipalObjectAttributeAccess_Result[] | null;
  userentityinstancedata_queueitem?: UserEntityInstanceData_Result[] | null;
  workerid_systemuser?: SystemUser_Result | null;
  workerid_team?: Team_Result | null;
}
interface QueueItem extends QueueItem_Base, QueueItem_Relationships {
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
  workerid_systemuser_bind$systemusers?: string | null;
  workerid_team_bind$teams?: string | null;
}
interface QueueItem_Create extends QueueItem {
  objectid_activitypointer_bind$activitypointers?: string | null;
  objectid_appointment_bind$appointments?: string | null;
  objectid_email_bind$emails?: string | null;
  objectid_fax_bind$faxes?: string | null;
  objectid_knowledgearticle_bind$knowledgearticles?: string | null;
  objectid_letter_bind$letters?: string | null;
  objectid_msdyn_knowledgearticletemplate_bind$msdyn_knowledgearticletemplates?: string | null;
  objectid_phonecall_bind$phonecalls?: string | null;
  objectid_recurringappointmentmaster_bind$recurringappointmentmasters?: string | null;
  objectid_socialactivity_bind$socialactivities?: string | null;
  objectid_task_bind$tasks?: string | null;
  queueid_bind$queues?: string | null;
}
interface QueueItem_Update extends QueueItem {
}
interface QueueItem_Select {
  createdby_guid: WebAttribute<QueueItem_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<QueueItem_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<QueueItem_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  enteredon: WebAttribute<QueueItem_Select, { enteredon: Date | null }, { enteredon_formatted?: string }>;
  exchangerate: WebAttribute<QueueItem_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<QueueItem_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<QueueItem_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<QueueItem_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<QueueItem_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  objectid_guid: WebAttribute<QueueItem_Select, { objectid_guid: string | null }, { objectid_formatted?: string }>;
  objecttypecode: WebAttribute<QueueItem_Select, { objecttypecode: queueitem_objecttypecode | null }, { objecttypecode_formatted?: string }>;
  organizationid_guid: WebAttribute<QueueItem_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<QueueItem_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<QueueItem_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<QueueItem_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owninguser_guid: WebAttribute<QueueItem_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  priority: WebAttribute<QueueItem_Select, { priority: number | null }, {  }>;
  queueid_guid: WebAttribute<QueueItem_Select, { queueid_guid: string | null }, { queueid_formatted?: string }>;
  queueitemid: WebAttribute<QueueItem_Select, { queueitemid: string | null }, {  }>;
  sender: WebAttribute<QueueItem_Select, { sender: string | null }, {  }>;
  state: WebAttribute<QueueItem_Select, { state: number | null }, {  }>;
  statecode: WebAttribute<QueueItem_Select, { statecode: queueitem_statecode | null }, { statecode_formatted?: string }>;
  status: WebAttribute<QueueItem_Select, { status: number | null }, {  }>;
  statuscode: WebAttribute<QueueItem_Select, { statuscode: queueitem_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<QueueItem_Select, { timezoneruleversionnumber: number | null }, {  }>;
  title: WebAttribute<QueueItem_Select, { title: string | null }, {  }>;
  torecipients: WebAttribute<QueueItem_Select, { torecipients: string | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<QueueItem_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<QueueItem_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<QueueItem_Select, { versionnumber: number | null }, {  }>;
  workerid_guid: WebAttribute<QueueItem_Select, { workerid_guid: string | null }, { workerid_formatted?: string }>;
  workeridmodifiedon: WebAttribute<QueueItem_Select, { workeridmodifiedon: Date | null }, { workeridmodifiedon_formatted?: string }>;
}
interface QueueItem_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  enteredon: Date;
  exchangerate: any;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  objectid_guid: XQW.Guid;
  objecttypecode: queueitem_objecttypecode;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  priority: number;
  queueid_guid: XQW.Guid;
  queueitemid: XQW.Guid;
  sender: string;
  state: number;
  statecode: queueitem_statecode;
  status: number;
  statuscode: queueitem_statuscode;
  timezoneruleversionnumber: number;
  title: string;
  torecipients: string;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
  workerid_guid: XQW.Guid;
  workeridmodifiedon: Date;
}
interface QueueItem_Expand {
  QueueItem_AsyncOperations: WebExpand<QueueItem_Expand, AsyncOperation_Select, AsyncOperation_Filter, { QueueItem_AsyncOperations: AsyncOperation_Result[] }>;
  QueueItem_BulkDeleteFailures: WebExpand<QueueItem_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { QueueItem_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  QueueItem_ProcessSessions: WebExpand<QueueItem_Expand, ProcessSession_Select, ProcessSession_Filter, { QueueItem_ProcessSessions: ProcessSession_Result[] }>;
  QueueItem_SyncErrors: WebExpand<QueueItem_Expand, SyncError_Select, SyncError_Filter, { QueueItem_SyncErrors: SyncError_Result[] }>;
  createdby: WebExpand<QueueItem_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<QueueItem_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<QueueItem_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<QueueItem_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  objectid_activitypointer: WebExpand<QueueItem_Expand, ActivityPointer_Select, ActivityPointer_Filter, { objectid_activitypointer: ActivityPointer_Result }>;
  objectid_appointment: WebExpand<QueueItem_Expand, Appointment_Select, Appointment_Filter, { objectid_appointment: Appointment_Result }>;
  objectid_email: WebExpand<QueueItem_Expand, Email_Select, Email_Filter, { objectid_email: Email_Result }>;
  objectid_fax: WebExpand<QueueItem_Expand, Fax_Select, Fax_Filter, { objectid_fax: Fax_Result }>;
  objectid_knowledgearticle: WebExpand<QueueItem_Expand, KnowledgeArticle_Select, KnowledgeArticle_Filter, { objectid_knowledgearticle: KnowledgeArticle_Result }>;
  objectid_letter: WebExpand<QueueItem_Expand, Letter_Select, Letter_Filter, { objectid_letter: Letter_Result }>;
  objectid_msdyn_knowledgearticletemplate: WebExpand<QueueItem_Expand, msdyn_knowledgearticletemplate_Select, msdyn_knowledgearticletemplate_Filter, { objectid_msdyn_knowledgearticletemplate: msdyn_knowledgearticletemplate_Result }>;
  objectid_phonecall: WebExpand<QueueItem_Expand, PhoneCall_Select, PhoneCall_Filter, { objectid_phonecall: PhoneCall_Result }>;
  objectid_recurringappointmentmaster: WebExpand<QueueItem_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { objectid_recurringappointmentmaster: RecurringAppointmentMaster_Result }>;
  objectid_socialactivity: WebExpand<QueueItem_Expand, SocialActivity_Select, SocialActivity_Filter, { objectid_socialactivity: SocialActivity_Result }>;
  objectid_task: WebExpand<QueueItem_Expand, Task_Select, Task_Filter, { objectid_task: Task_Result }>;
  organizationid: WebExpand<QueueItem_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  queueid: WebExpand<QueueItem_Expand, Queue_Select, Queue_Filter, { queueid: Queue_Result }>;
  queueitem_principalobjectattributeaccess: WebExpand<QueueItem_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { queueitem_principalobjectattributeaccess: PrincipalObjectAttributeAccess_Result[] }>;
  transactioncurrencyid: WebExpand<QueueItem_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
  userentityinstancedata_queueitem: WebExpand<QueueItem_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_queueitem: UserEntityInstanceData_Result[] }>;
  workerid_systemuser: WebExpand<QueueItem_Expand, SystemUser_Select, SystemUser_Filter, { workerid_systemuser: SystemUser_Result }>;
  workerid_team: WebExpand<QueueItem_Expand, Team_Select, Team_Filter, { workerid_team: Team_Result }>;
}
interface QueueItem_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  enteredon_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  objectid_formatted?: string;
  objecttypecode_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owninguser_formatted?: string;
  queueid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
  workerid_formatted?: string;
  workeridmodifiedon_formatted?: string;
}
interface QueueItem_Result extends QueueItem_Base, QueueItem_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  objectid_guid: string | null;
  organizationid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owninguser_guid: string | null;
  queueid_guid: string | null;
  transactioncurrencyid_guid: string | null;
  workerid_guid: string | null;
}
interface QueueItem_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  objectid_activitypointer: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  objectid_appointment: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  objectid_email: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  objectid_fax: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  objectid_knowledgearticle: WebMappingRetrieve<KnowledgeArticle_Select,KnowledgeArticle_Expand,KnowledgeArticle_Filter,KnowledgeArticle_Fixed,KnowledgeArticle_Result,KnowledgeArticle_FormattedResult>;
  objectid_letter: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  objectid_msdyn_knowledgearticletemplate: WebMappingRetrieve<msdyn_knowledgearticletemplate_Select,msdyn_knowledgearticletemplate_Expand,msdyn_knowledgearticletemplate_Filter,msdyn_knowledgearticletemplate_Fixed,msdyn_knowledgearticletemplate_Result,msdyn_knowledgearticletemplate_FormattedResult>;
  objectid_phonecall: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  objectid_recurringappointmentmaster: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  objectid_socialactivity: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  objectid_task: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  queueid: WebMappingRetrieve<Queue_Select,Queue_Expand,Queue_Filter,Queue_Fixed,Queue_Result,Queue_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
  workerid_systemuser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  workerid_team: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
}
interface QueueItem_RelatedMany {
  QueueItem_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  QueueItem_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  QueueItem_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  QueueItem_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  queueitem_principalobjectattributeaccess: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  userentityinstancedata_queueitem: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  queueitems: WebMappingRetrieve<QueueItem_Select,QueueItem_Expand,QueueItem_Filter,QueueItem_Fixed,QueueItem_Result,QueueItem_FormattedResult>;
}
interface WebEntitiesRelated {
  queueitems: WebMappingRelated<QueueItem_RelatedOne,QueueItem_RelatedMany>;
}
interface WebEntitiesCUDA {
  queueitems: WebMappingCUDA<QueueItem_Create,QueueItem_Update,QueueItem_Select>;
}
