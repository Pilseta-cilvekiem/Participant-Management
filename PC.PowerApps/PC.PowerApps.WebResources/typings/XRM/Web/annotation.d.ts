interface Annotation_Base extends WebEntity {
  annotationid?: string | null;
  createdon?: Date | null;
  documentbody?: string | null;
  dummyfilename?: string | null;
  dummyregarding?: string | null;
  filename?: string | null;
  filepointer?: string | null;
  filesize?: number | null;
  importsequencenumber?: number | null;
  isdocument?: boolean | null;
  isprivate?: boolean | null;
  langid?: string | null;
  mimetype?: string | null;
  modifiedon?: Date | null;
  notetext?: string | null;
  objecttypecode?: string | null;
  overriddencreatedon?: Date | null;
  prefix?: string | null;
  stepid?: string | null;
  storagepointer?: string | null;
  subject?: string | null;
  versionnumber?: number | null;
}
interface Annotation_Relationships {
  Annotation_AsyncOperations?: AsyncOperation_Result[] | null;
  Annotation_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  Annotation_ProcessSessions?: ProcessSession_Result[] | null;
  Annotation_SyncErrors?: SyncError_Result[] | null;
  channelaccessprofile_annotations?: ChannelAccessProfile_Result | null;
  channelaccessprofileruleid?: ChannelAccessProfileRule_Result | null;
  objectid_account?: Account_Result | null;
  objectid_appointment?: Appointment_Result | null;
  objectid_calendar?: Calendar_Result | null;
  objectid_contact?: Contact_Result | null;
  objectid_convertrule?: ConvertRule_Result | null;
  objectid_duplicaterule?: DuplicateRule_Result | null;
  objectid_email?: Email_Result | null;
  objectid_emailserverprofile?: EmailServerProfile_Result | null;
  objectid_fax?: Fax_Result | null;
  objectid_goal?: Goal_Result | null;
  objectid_kbarticle?: KbArticle_Result | null;
  objectid_knowledgearticle?: KnowledgeArticle_Result | null;
  objectid_knowledgebaserecord?: KnowledgeBaseRecord_Result | null;
  objectid_letter?: Letter_Result | null;
  objectid_mailbox?: Mailbox_Result | null;
  objectid_msdyn_aifptrainingdocument?: msdyn_AIFpTrainingDocument_Result | null;
  objectid_msdyn_aimodel?: msdyn_AIModel_Result | null;
  objectid_msdyn_aiodimage?: msdyn_AIOdImage_Result | null;
  objectid_pc_bankaccount?: pc_BankAccount_Result | null;
  objectid_phonecall?: PhoneCall_Result | null;
  objectid_profileruleitem?: ChannelAccessProfileRuleItem_Result | null;
  objectid_recurringappointmentmaster?: RecurringAppointmentMaster_Result | null;
  objectid_routingrule?: RoutingRule_Result | null;
  objectid_routingruleitem?: RoutingRuleItem_Result | null;
  objectid_sharepointdocument?: SharePointDocument_Result | null;
  objectid_sla?: SLA_Result | null;
  objectid_socialactivity?: SocialActivity_Result | null;
  objectid_task?: Task_Result | null;
  objectid_workflow?: Workflow_Result | null;
  userentityinstancedata_annotation?: UserEntityInstanceData_Result[] | null;
}
interface Annotation extends Annotation_Base, Annotation_Relationships {
  channelaccessprofile_annotations_bind$channelaccessprofiles?: string | null;
  channelaccessprofileruleid_bind$channelaccessprofilerules?: string | null;
  objectid_account_bind$accounts?: string | null;
  objectid_appointment_bind$appointments?: string | null;
  objectid_calendar_bind$calendars?: string | null;
  objectid_contact_bind$contacts?: string | null;
  objectid_convertrule_bind$convertrules?: string | null;
  objectid_duplicaterule_bind$duplicaterules?: string | null;
  objectid_email_bind$emails?: string | null;
  objectid_emailserverprofile_bind$emailserverprofiles?: string | null;
  objectid_fax_bind$faxes?: string | null;
  objectid_goal_bind$goals?: string | null;
  objectid_kbarticle_bind$kbarticles?: string | null;
  objectid_knowledgearticle_bind$knowledgearticles?: string | null;
  objectid_knowledgebaserecord_bind$knowledgebaserecords?: string | null;
  objectid_letter_bind$letters?: string | null;
  objectid_mailbox_bind$mailboxes?: string | null;
  objectid_msdyn_aifptrainingdocument_bind$msdyn_aifptrainingdocuments?: string | null;
  objectid_msdyn_aimodel_bind$msdyn_aimodels?: string | null;
  objectid_msdyn_aiodimage_bind$msdyn_aiodimages?: string | null;
  objectid_pc_bankaccount_bind$pc_bankaccounts?: string | null;
  objectid_phonecall_bind$phonecalls?: string | null;
  objectid_profileruleitem_bind$channelaccessprofileruleitems?: string | null;
  objectid_recurringappointmentmaster_bind$recurringappointmentmasters?: string | null;
  objectid_routingrule_bind$routingrules?: string | null;
  objectid_routingruleitem_bind$routingruleitems?: string | null;
  objectid_sharepointdocument_bind$sharepointdocuments?: string | null;
  objectid_sla_bind$slas?: string | null;
  objectid_socialactivity_bind$socialactivities?: string | null;
  objectid_task_bind$tasks?: string | null;
  objectid_workflow_bind$workflows?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface Annotation_Create extends Annotation {
}
interface Annotation_Update extends Annotation {
}
interface Annotation_Select {
  annotationid: WebAttribute<Annotation_Select, { annotationid: string | null }, {  }>;
  createdby_guid: WebAttribute<Annotation_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<Annotation_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<Annotation_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  documentbody: WebAttribute<Annotation_Select, { documentbody: string | null }, {  }>;
  dummyfilename: WebAttribute<Annotation_Select, { dummyfilename: string | null }, {  }>;
  dummyregarding: WebAttribute<Annotation_Select, { dummyregarding: string | null }, {  }>;
  filename: WebAttribute<Annotation_Select, { filename: string | null }, {  }>;
  filepointer: WebAttribute<Annotation_Select, { filepointer: string | null }, {  }>;
  filesize: WebAttribute<Annotation_Select, { filesize: number | null }, {  }>;
  importsequencenumber: WebAttribute<Annotation_Select, { importsequencenumber: number | null }, {  }>;
  isdocument: WebAttribute<Annotation_Select, { isdocument: boolean | null }, {  }>;
  isprivate: WebAttribute<Annotation_Select, { isprivate: boolean | null }, {  }>;
  langid: WebAttribute<Annotation_Select, { langid: string | null }, {  }>;
  mimetype: WebAttribute<Annotation_Select, { mimetype: string | null }, {  }>;
  modifiedby_guid: WebAttribute<Annotation_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<Annotation_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<Annotation_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  notetext: WebAttribute<Annotation_Select, { notetext: string | null }, {  }>;
  objectid_guid: WebAttribute<Annotation_Select, { objectid_guid: string | null }, { objectid_formatted?: string }>;
  objecttypecode: WebAttribute<Annotation_Select, { objecttypecode: string | null }, {  }>;
  overriddencreatedon: WebAttribute<Annotation_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<Annotation_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<Annotation_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<Annotation_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<Annotation_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  prefix: WebAttribute<Annotation_Select, { prefix: string | null }, {  }>;
  stepid: WebAttribute<Annotation_Select, { stepid: string | null }, {  }>;
  storagepointer: WebAttribute<Annotation_Select, { storagepointer: string | null }, {  }>;
  subject: WebAttribute<Annotation_Select, { subject: string | null }, {  }>;
  versionnumber: WebAttribute<Annotation_Select, { versionnumber: number | null }, {  }>;
}
interface Annotation_Filter {
  annotationid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  documentbody: string;
  dummyfilename: string;
  dummyregarding: string;
  filename: string;
  filepointer: string;
  filesize: number;
  importsequencenumber: number;
  isdocument: boolean;
  isprivate: boolean;
  langid: string;
  mimetype: string;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  notetext: string;
  objectid_guid: XQW.Guid;
  objecttypecode: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  prefix: string;
  stepid: string;
  storagepointer: string;
  subject: string;
  versionnumber: number;
}
interface Annotation_Expand {
  Annotation_AsyncOperations: WebExpand<Annotation_Expand, AsyncOperation_Select, AsyncOperation_Filter, { Annotation_AsyncOperations: AsyncOperation_Result[] }>;
  Annotation_BulkDeleteFailures: WebExpand<Annotation_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { Annotation_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  Annotation_ProcessSessions: WebExpand<Annotation_Expand, ProcessSession_Select, ProcessSession_Filter, { Annotation_ProcessSessions: ProcessSession_Result[] }>;
  Annotation_SyncErrors: WebExpand<Annotation_Expand, SyncError_Select, SyncError_Filter, { Annotation_SyncErrors: SyncError_Result[] }>;
  channelaccessprofile_annotations: WebExpand<Annotation_Expand, ChannelAccessProfile_Select, ChannelAccessProfile_Filter, { channelaccessprofile_annotations: ChannelAccessProfile_Result }>;
  channelaccessprofileruleid: WebExpand<Annotation_Expand, ChannelAccessProfileRule_Select, ChannelAccessProfileRule_Filter, { channelaccessprofileruleid: ChannelAccessProfileRule_Result }>;
  createdby: WebExpand<Annotation_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<Annotation_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<Annotation_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<Annotation_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  objectid_account: WebExpand<Annotation_Expand, Account_Select, Account_Filter, { objectid_account: Account_Result }>;
  objectid_appointment: WebExpand<Annotation_Expand, Appointment_Select, Appointment_Filter, { objectid_appointment: Appointment_Result }>;
  objectid_calendar: WebExpand<Annotation_Expand, Calendar_Select, Calendar_Filter, { objectid_calendar: Calendar_Result }>;
  objectid_contact: WebExpand<Annotation_Expand, Contact_Select, Contact_Filter, { objectid_contact: Contact_Result }>;
  objectid_convertrule: WebExpand<Annotation_Expand, ConvertRule_Select, ConvertRule_Filter, { objectid_convertrule: ConvertRule_Result }>;
  objectid_duplicaterule: WebExpand<Annotation_Expand, DuplicateRule_Select, DuplicateRule_Filter, { objectid_duplicaterule: DuplicateRule_Result }>;
  objectid_email: WebExpand<Annotation_Expand, Email_Select, Email_Filter, { objectid_email: Email_Result }>;
  objectid_emailserverprofile: WebExpand<Annotation_Expand, EmailServerProfile_Select, EmailServerProfile_Filter, { objectid_emailserverprofile: EmailServerProfile_Result }>;
  objectid_fax: WebExpand<Annotation_Expand, Fax_Select, Fax_Filter, { objectid_fax: Fax_Result }>;
  objectid_goal: WebExpand<Annotation_Expand, Goal_Select, Goal_Filter, { objectid_goal: Goal_Result }>;
  objectid_kbarticle: WebExpand<Annotation_Expand, KbArticle_Select, KbArticle_Filter, { objectid_kbarticle: KbArticle_Result }>;
  objectid_knowledgearticle: WebExpand<Annotation_Expand, KnowledgeArticle_Select, KnowledgeArticle_Filter, { objectid_knowledgearticle: KnowledgeArticle_Result }>;
  objectid_knowledgebaserecord: WebExpand<Annotation_Expand, KnowledgeBaseRecord_Select, KnowledgeBaseRecord_Filter, { objectid_knowledgebaserecord: KnowledgeBaseRecord_Result }>;
  objectid_letter: WebExpand<Annotation_Expand, Letter_Select, Letter_Filter, { objectid_letter: Letter_Result }>;
  objectid_mailbox: WebExpand<Annotation_Expand, Mailbox_Select, Mailbox_Filter, { objectid_mailbox: Mailbox_Result }>;
  objectid_msdyn_aifptrainingdocument: WebExpand<Annotation_Expand, msdyn_AIFpTrainingDocument_Select, msdyn_AIFpTrainingDocument_Filter, { objectid_msdyn_aifptrainingdocument: msdyn_AIFpTrainingDocument_Result }>;
  objectid_msdyn_aimodel: WebExpand<Annotation_Expand, msdyn_AIModel_Select, msdyn_AIModel_Filter, { objectid_msdyn_aimodel: msdyn_AIModel_Result }>;
  objectid_msdyn_aiodimage: WebExpand<Annotation_Expand, msdyn_AIOdImage_Select, msdyn_AIOdImage_Filter, { objectid_msdyn_aiodimage: msdyn_AIOdImage_Result }>;
  objectid_pc_bankaccount: WebExpand<Annotation_Expand, pc_BankAccount_Select, pc_BankAccount_Filter, { objectid_pc_bankaccount: pc_BankAccount_Result }>;
  objectid_phonecall: WebExpand<Annotation_Expand, PhoneCall_Select, PhoneCall_Filter, { objectid_phonecall: PhoneCall_Result }>;
  objectid_profileruleitem: WebExpand<Annotation_Expand, ChannelAccessProfileRuleItem_Select, ChannelAccessProfileRuleItem_Filter, { objectid_profileruleitem: ChannelAccessProfileRuleItem_Result }>;
  objectid_recurringappointmentmaster: WebExpand<Annotation_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { objectid_recurringappointmentmaster: RecurringAppointmentMaster_Result }>;
  objectid_routingrule: WebExpand<Annotation_Expand, RoutingRule_Select, RoutingRule_Filter, { objectid_routingrule: RoutingRule_Result }>;
  objectid_routingruleitem: WebExpand<Annotation_Expand, RoutingRuleItem_Select, RoutingRuleItem_Filter, { objectid_routingruleitem: RoutingRuleItem_Result }>;
  objectid_sharepointdocument: WebExpand<Annotation_Expand, SharePointDocument_Select, SharePointDocument_Filter, { objectid_sharepointdocument: SharePointDocument_Result }>;
  objectid_sla: WebExpand<Annotation_Expand, SLA_Select, SLA_Filter, { objectid_sla: SLA_Result }>;
  objectid_socialactivity: WebExpand<Annotation_Expand, SocialActivity_Select, SocialActivity_Filter, { objectid_socialactivity: SocialActivity_Result }>;
  objectid_task: WebExpand<Annotation_Expand, Task_Select, Task_Filter, { objectid_task: Task_Result }>;
  objectid_workflow: WebExpand<Annotation_Expand, Workflow_Select, Workflow_Filter, { objectid_workflow: Workflow_Result }>;
  ownerid: WebExpand<Annotation_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<Annotation_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<Annotation_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<Annotation_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  userentityinstancedata_annotation: WebExpand<Annotation_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_annotation: UserEntityInstanceData_Result[] }>;
}
interface Annotation_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  objectid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
}
interface Annotation_Result extends Annotation_Base, Annotation_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  objectid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface Annotation_RelatedOne {
  channelaccessprofile_annotations: WebMappingRetrieve<ChannelAccessProfile_Select,ChannelAccessProfile_Expand,ChannelAccessProfile_Filter,ChannelAccessProfile_Fixed,ChannelAccessProfile_Result,ChannelAccessProfile_FormattedResult>;
  channelaccessprofileruleid: WebMappingRetrieve<ChannelAccessProfileRule_Select,ChannelAccessProfileRule_Expand,ChannelAccessProfileRule_Filter,ChannelAccessProfileRule_Fixed,ChannelAccessProfileRule_Result,ChannelAccessProfileRule_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  objectid_account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  objectid_appointment: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  objectid_calendar: WebMappingRetrieve<Calendar_Select,Calendar_Expand,Calendar_Filter,Calendar_Fixed,Calendar_Result,Calendar_FormattedResult>;
  objectid_contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  objectid_convertrule: WebMappingRetrieve<ConvertRule_Select,ConvertRule_Expand,ConvertRule_Filter,ConvertRule_Fixed,ConvertRule_Result,ConvertRule_FormattedResult>;
  objectid_duplicaterule: WebMappingRetrieve<DuplicateRule_Select,DuplicateRule_Expand,DuplicateRule_Filter,DuplicateRule_Fixed,DuplicateRule_Result,DuplicateRule_FormattedResult>;
  objectid_email: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  objectid_emailserverprofile: WebMappingRetrieve<EmailServerProfile_Select,EmailServerProfile_Expand,EmailServerProfile_Filter,EmailServerProfile_Fixed,EmailServerProfile_Result,EmailServerProfile_FormattedResult>;
  objectid_fax: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  objectid_goal: WebMappingRetrieve<Goal_Select,Goal_Expand,Goal_Filter,Goal_Fixed,Goal_Result,Goal_FormattedResult>;
  objectid_kbarticle: WebMappingRetrieve<KbArticle_Select,KbArticle_Expand,KbArticle_Filter,KbArticle_Fixed,KbArticle_Result,KbArticle_FormattedResult>;
  objectid_knowledgearticle: WebMappingRetrieve<KnowledgeArticle_Select,KnowledgeArticle_Expand,KnowledgeArticle_Filter,KnowledgeArticle_Fixed,KnowledgeArticle_Result,KnowledgeArticle_FormattedResult>;
  objectid_knowledgebaserecord: WebMappingRetrieve<KnowledgeBaseRecord_Select,KnowledgeBaseRecord_Expand,KnowledgeBaseRecord_Filter,KnowledgeBaseRecord_Fixed,KnowledgeBaseRecord_Result,KnowledgeBaseRecord_FormattedResult>;
  objectid_letter: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  objectid_mailbox: WebMappingRetrieve<Mailbox_Select,Mailbox_Expand,Mailbox_Filter,Mailbox_Fixed,Mailbox_Result,Mailbox_FormattedResult>;
  objectid_msdyn_aifptrainingdocument: WebMappingRetrieve<msdyn_AIFpTrainingDocument_Select,msdyn_AIFpTrainingDocument_Expand,msdyn_AIFpTrainingDocument_Filter,msdyn_AIFpTrainingDocument_Fixed,msdyn_AIFpTrainingDocument_Result,msdyn_AIFpTrainingDocument_FormattedResult>;
  objectid_msdyn_aimodel: WebMappingRetrieve<msdyn_AIModel_Select,msdyn_AIModel_Expand,msdyn_AIModel_Filter,msdyn_AIModel_Fixed,msdyn_AIModel_Result,msdyn_AIModel_FormattedResult>;
  objectid_msdyn_aiodimage: WebMappingRetrieve<msdyn_AIOdImage_Select,msdyn_AIOdImage_Expand,msdyn_AIOdImage_Filter,msdyn_AIOdImage_Fixed,msdyn_AIOdImage_Result,msdyn_AIOdImage_FormattedResult>;
  objectid_pc_bankaccount: WebMappingRetrieve<pc_BankAccount_Select,pc_BankAccount_Expand,pc_BankAccount_Filter,pc_BankAccount_Fixed,pc_BankAccount_Result,pc_BankAccount_FormattedResult>;
  objectid_phonecall: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  objectid_profileruleitem: WebMappingRetrieve<ChannelAccessProfileRuleItem_Select,ChannelAccessProfileRuleItem_Expand,ChannelAccessProfileRuleItem_Filter,ChannelAccessProfileRuleItem_Fixed,ChannelAccessProfileRuleItem_Result,ChannelAccessProfileRuleItem_FormattedResult>;
  objectid_recurringappointmentmaster: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  objectid_routingrule: WebMappingRetrieve<RoutingRule_Select,RoutingRule_Expand,RoutingRule_Filter,RoutingRule_Fixed,RoutingRule_Result,RoutingRule_FormattedResult>;
  objectid_routingruleitem: WebMappingRetrieve<RoutingRuleItem_Select,RoutingRuleItem_Expand,RoutingRuleItem_Filter,RoutingRuleItem_Fixed,RoutingRuleItem_Result,RoutingRuleItem_FormattedResult>;
  objectid_sharepointdocument: WebMappingRetrieve<SharePointDocument_Select,SharePointDocument_Expand,SharePointDocument_Filter,SharePointDocument_Fixed,SharePointDocument_Result,SharePointDocument_FormattedResult>;
  objectid_sla: WebMappingRetrieve<SLA_Select,SLA_Expand,SLA_Filter,SLA_Fixed,SLA_Result,SLA_FormattedResult>;
  objectid_socialactivity: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  objectid_task: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  objectid_workflow: WebMappingRetrieve<Workflow_Select,Workflow_Expand,Workflow_Filter,Workflow_Fixed,Workflow_Result,Workflow_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface Annotation_RelatedMany {
  Annotation_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  Annotation_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  Annotation_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  Annotation_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  userentityinstancedata_annotation: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
}
interface WebEntitiesRelated {
  annotations: WebMappingRelated<Annotation_RelatedOne,Annotation_RelatedMany>;
}
interface WebEntitiesCUDA {
  annotations: WebMappingCUDA<Annotation_Create,Annotation_Update,Annotation_Select>;
}
