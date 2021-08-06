interface SLA_Base extends WebEntity {
  allowpauseresume?: boolean | null;
  applicablefrom?: string | null;
  applicablefrompicklist?: slabase_applicablefrom | null;
  changedattributelist?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  description?: string | null;
  exchangerate?: number | null;
  isdefault?: boolean | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  objecttypecode?: sla_objecttypecode | null;
  overwritetime?: Date | null;
  primaryentityotc?: number | null;
  slaid?: string | null;
  slaidunique?: string | null;
  slatype?: sla_slatype | null;
  slaversion?: sla_slaversion | null;
  solutionid?: string | null;
  statecode?: sla_statecode | null;
  statuscode?: sla_statuscode | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface SLA_Relationships {
  SLA_SyncErrors?: SyncError_Result[] | null;
  manualsla_account?: Account_Result[] | null;
  manualsla_activitypointer?: ActivityPointer_Result[] | null;
  manualsla_appointment?: Appointment_Result[] | null;
  manualsla_contact?: Contact_Result[] | null;
  manualsla_email?: Email_Result[] | null;
  manualsla_fax?: Fax_Result[] | null;
  manualsla_letter?: Letter_Result[] | null;
  manualsla_phonecall?: PhoneCall_Result[] | null;
  manualsla_socialactivity?: SocialActivity_Result[] | null;
  manualsla_task?: Task_Result[] | null;
  sla_Annotation?: Annotation_Result[] | null;
  sla_account?: Account_Result[] | null;
  sla_activitypointer?: ActivityPointer_Result[] | null;
  sla_appointment?: Appointment_Result[] | null;
  sla_contact?: Contact_Result[] | null;
  sla_email?: Email_Result[] | null;
  sla_fax?: Fax_Result[] | null;
  sla_letter?: Letter_Result[] | null;
  sla_phonecall?: PhoneCall_Result[] | null;
  sla_slaitem_slaId?: SLAItem_Result[] | null;
  sla_socialactivity?: SocialActivity_Result[] | null;
  sla_task?: Task_Result[] | null;
  slabase_AsyncOperations?: AsyncOperation_Result[] | null;
  slabase_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  slabase_ProcessSessions?: ProcessSession_Result[] | null;
  slabase_userentityinstancedatas?: UserEntityInstanceData_Result[] | null;
}
interface SLA extends SLA_Base, SLA_Relationships {
  businesshoursid_bind$calendars?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  owningbusinessunit_bind$businessunits?: string | null;
  owningteam_bind$teams?: string | null;
  owninguser_bind$systemusers?: string | null;
  workflowid_bind$workflows?: string | null;
}
interface SLA_Create extends SLA {
}
interface SLA_Update extends SLA {
}
interface SLA_Select {
  allowpauseresume: WebAttribute<SLA_Select, { allowpauseresume: boolean | null }, {  }>;
  applicablefrom: WebAttribute<SLA_Select, { applicablefrom: string | null }, {  }>;
  applicablefrompicklist: WebAttribute<SLA_Select, { applicablefrompicklist: slabase_applicablefrom | null }, { applicablefrompicklist_formatted?: string }>;
  businesshoursid_guid: WebAttribute<SLA_Select, { businesshoursid_guid: string | null }, { businesshoursid_formatted?: string }>;
  changedattributelist: WebAttribute<SLA_Select, { changedattributelist: string | null }, {  }>;
  componentstate: WebAttribute<SLA_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<SLA_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<SLA_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<SLA_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<SLA_Select, { description: string | null }, {  }>;
  exchangerate: WebAttribute<SLA_Select, { exchangerate: number | null }, {  }>;
  isdefault: WebAttribute<SLA_Select, { isdefault: boolean | null }, {  }>;
  ismanaged: WebAttribute<SLA_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<SLA_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<SLA_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<SLA_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<SLA_Select, { name: string | null }, {  }>;
  objecttypecode: WebAttribute<SLA_Select, { objecttypecode: sla_objecttypecode | null }, { objecttypecode_formatted?: string }>;
  overwritetime: WebAttribute<SLA_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<SLA_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<SLA_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<SLA_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<SLA_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  primaryentityotc: WebAttribute<SLA_Select, { primaryentityotc: number | null }, {  }>;
  slaid: WebAttribute<SLA_Select, { slaid: string | null }, {  }>;
  slaidunique: WebAttribute<SLA_Select, { slaidunique: string | null }, {  }>;
  slatype: WebAttribute<SLA_Select, { slatype: sla_slatype | null }, { slatype_formatted?: string }>;
  slaversion: WebAttribute<SLA_Select, { slaversion: sla_slaversion | null }, { slaversion_formatted?: string }>;
  solutionid: WebAttribute<SLA_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<SLA_Select, { statecode: sla_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<SLA_Select, { statuscode: sla_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<SLA_Select, { supportingsolutionid: string | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<SLA_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  versionnumber: WebAttribute<SLA_Select, { versionnumber: number | null }, {  }>;
  workflowid_guid: WebAttribute<SLA_Select, { workflowid_guid: string | null }, { workflowid_formatted?: string }>;
}
interface SLA_Filter {
  allowpauseresume: boolean;
  applicablefrom: string;
  applicablefrompicklist: slabase_applicablefrom;
  businesshoursid_guid: XQW.Guid;
  changedattributelist: string;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  exchangerate: any;
  isdefault: boolean;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  objecttypecode: sla_objecttypecode;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  primaryentityotc: number;
  slaid: XQW.Guid;
  slaidunique: XQW.Guid;
  slatype: sla_slatype;
  slaversion: sla_slaversion;
  solutionid: XQW.Guid;
  statecode: sla_statecode;
  statuscode: sla_statuscode;
  supportingsolutionid: XQW.Guid;
  transactioncurrencyid_guid: XQW.Guid;
  versionnumber: number;
  workflowid_guid: XQW.Guid;
}
interface SLA_Expand {
  SLA_SyncErrors: WebExpand<SLA_Expand, SyncError_Select, SyncError_Filter, { SLA_SyncErrors: SyncError_Result[] }>;
  businesshoursid: WebExpand<SLA_Expand, Calendar_Select, Calendar_Filter, { businesshoursid: Calendar_Result }>;
  createdby: WebExpand<SLA_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<SLA_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  manualsla_account: WebExpand<SLA_Expand, Account_Select, Account_Filter, { manualsla_account: Account_Result[] }>;
  manualsla_activitypointer: WebExpand<SLA_Expand, ActivityPointer_Select, ActivityPointer_Filter, { manualsla_activitypointer: ActivityPointer_Result[] }>;
  manualsla_appointment: WebExpand<SLA_Expand, Appointment_Select, Appointment_Filter, { manualsla_appointment: Appointment_Result[] }>;
  manualsla_contact: WebExpand<SLA_Expand, Contact_Select, Contact_Filter, { manualsla_contact: Contact_Result[] }>;
  manualsla_email: WebExpand<SLA_Expand, Email_Select, Email_Filter, { manualsla_email: Email_Result[] }>;
  manualsla_fax: WebExpand<SLA_Expand, Fax_Select, Fax_Filter, { manualsla_fax: Fax_Result[] }>;
  manualsla_letter: WebExpand<SLA_Expand, Letter_Select, Letter_Filter, { manualsla_letter: Letter_Result[] }>;
  manualsla_phonecall: WebExpand<SLA_Expand, PhoneCall_Select, PhoneCall_Filter, { manualsla_phonecall: PhoneCall_Result[] }>;
  manualsla_socialactivity: WebExpand<SLA_Expand, SocialActivity_Select, SocialActivity_Filter, { manualsla_socialactivity: SocialActivity_Result[] }>;
  manualsla_task: WebExpand<SLA_Expand, Task_Select, Task_Filter, { manualsla_task: Task_Result[] }>;
  modifiedby: WebExpand<SLA_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<SLA_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<SLA_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<SLA_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<SLA_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<SLA_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  sla_Annotation: WebExpand<SLA_Expand, Annotation_Select, Annotation_Filter, { sla_Annotation: Annotation_Result[] }>;
  sla_account: WebExpand<SLA_Expand, Account_Select, Account_Filter, { sla_account: Account_Result[] }>;
  sla_activitypointer: WebExpand<SLA_Expand, ActivityPointer_Select, ActivityPointer_Filter, { sla_activitypointer: ActivityPointer_Result[] }>;
  sla_appointment: WebExpand<SLA_Expand, Appointment_Select, Appointment_Filter, { sla_appointment: Appointment_Result[] }>;
  sla_contact: WebExpand<SLA_Expand, Contact_Select, Contact_Filter, { sla_contact: Contact_Result[] }>;
  sla_email: WebExpand<SLA_Expand, Email_Select, Email_Filter, { sla_email: Email_Result[] }>;
  sla_fax: WebExpand<SLA_Expand, Fax_Select, Fax_Filter, { sla_fax: Fax_Result[] }>;
  sla_letter: WebExpand<SLA_Expand, Letter_Select, Letter_Filter, { sla_letter: Letter_Result[] }>;
  sla_phonecall: WebExpand<SLA_Expand, PhoneCall_Select, PhoneCall_Filter, { sla_phonecall: PhoneCall_Result[] }>;
  sla_slaitem_slaId: WebExpand<SLA_Expand, SLAItem_Select, SLAItem_Filter, { sla_slaitem_slaId: SLAItem_Result[] }>;
  sla_socialactivity: WebExpand<SLA_Expand, SocialActivity_Select, SocialActivity_Filter, { sla_socialactivity: SocialActivity_Result[] }>;
  sla_task: WebExpand<SLA_Expand, Task_Select, Task_Filter, { sla_task: Task_Result[] }>;
  slabase_AsyncOperations: WebExpand<SLA_Expand, AsyncOperation_Select, AsyncOperation_Filter, { slabase_AsyncOperations: AsyncOperation_Result[] }>;
  slabase_BulkDeleteFailures: WebExpand<SLA_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { slabase_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  slabase_ProcessSessions: WebExpand<SLA_Expand, ProcessSession_Select, ProcessSession_Filter, { slabase_ProcessSessions: ProcessSession_Result[] }>;
  slabase_userentityinstancedatas: WebExpand<SLA_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { slabase_userentityinstancedatas: UserEntityInstanceData_Result[] }>;
  transactioncurrencyid: WebExpand<SLA_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
  workflowid: WebExpand<SLA_Expand, Workflow_Select, Workflow_Filter, { workflowid: Workflow_Result }>;
}
interface SLA_FormattedResult {
  applicablefrompicklist_formatted?: string;
  businesshoursid_formatted?: string;
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  objecttypecode_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  slatype_formatted?: string;
  slaversion_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
  workflowid_formatted?: string;
}
interface SLA_Result extends SLA_Base, SLA_Relationships {
  "@odata.etag": string;
  businesshoursid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  transactioncurrencyid_guid: string | null;
  workflowid_guid: string | null;
}
interface SLA_RelatedOne {
  businesshoursid: WebMappingRetrieve<Calendar_Select,Calendar_Expand,Calendar_Filter,Calendar_Fixed,Calendar_Result,Calendar_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
  workflowid: WebMappingRetrieve<Workflow_Select,Workflow_Expand,Workflow_Filter,Workflow_Fixed,Workflow_Result,Workflow_FormattedResult>;
}
interface SLA_RelatedMany {
  SLA_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  manualsla_account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  manualsla_activitypointer: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  manualsla_appointment: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  manualsla_contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  manualsla_email: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  manualsla_fax: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  manualsla_letter: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  manualsla_phonecall: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  manualsla_socialactivity: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  manualsla_task: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  sla_Annotation: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  sla_account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  sla_activitypointer: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  sla_appointment: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  sla_contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  sla_email: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  sla_fax: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  sla_letter: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  sla_phonecall: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  sla_slaitem_slaId: WebMappingRetrieve<SLAItem_Select,SLAItem_Expand,SLAItem_Filter,SLAItem_Fixed,SLAItem_Result,SLAItem_FormattedResult>;
  sla_socialactivity: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  sla_task: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  slabase_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  slabase_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  slabase_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  slabase_userentityinstancedatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  slas: WebMappingRetrieve<SLA_Select,SLA_Expand,SLA_Filter,SLA_Fixed,SLA_Result,SLA_FormattedResult>;
}
interface WebEntitiesRelated {
  slas: WebMappingRelated<SLA_RelatedOne,SLA_RelatedMany>;
}
interface WebEntitiesCUDA {
  slas: WebMappingCUDA<SLA_Create,SLA_Update,SLA_Select>;
}
