interface ActivityParty_Base extends WebEntity {
  activitypartyid?: string | null;
  addressused?: string | null;
  addressusedemailcolumnnumber?: number | null;
  donotemail?: boolean | null;
  donotfax?: boolean | null;
  donotphone?: boolean | null;
  donotpostalmail?: boolean | null;
  effort?: number | null;
  exchangeentryid?: string | null;
  instancetypecode?: activityparty_instancetypecode | null;
  ispartydeleted?: boolean | null;
  owningbusinessunit?: string | null;
  owninguser?: string | null;
  participationtypemask?: activityparty_participationtypemask | null;
  scheduledend?: Date | null;
  scheduledstart?: Date | null;
  versionnumber?: number | null;
}
interface ActivityParty_Relationships {
  ActivityParty_SyncErrors?: SyncError_Result[] | null;
  activityid_activitypointer?: ActivityPointer_Result | null;
  activityid_appointment?: Appointment_Result | null;
  activityid_email?: Email_Result | null;
  activityid_fax?: Fax_Result | null;
  activityid_letter?: Letter_Result | null;
  activityid_phonecall?: PhoneCall_Result | null;
  activityid_recurringappointmentmaster?: RecurringAppointmentMaster_Result | null;
  activityid_socialactivity?: SocialActivity_Result | null;
  activityid_task?: Task_Result | null;
  partyid_account?: Account_Result | null;
  partyid_contact?: Contact_Result | null;
  partyid_knowledgearticle?: KnowledgeArticle_Result | null;
  partyid_queue?: Queue_Result | null;
  partyid_systemuser?: SystemUser_Result | null;
  userentityinstancedata_activityparty?: UserEntityInstanceData_Result[] | null;
}
interface ActivityParty extends ActivityParty_Base, ActivityParty_Relationships {
  activityid_activitypointer_bind$activitypointers?: string | null;
  activityid_appointment_bind$appointments?: string | null;
  activityid_email_bind$emails?: string | null;
  activityid_fax_bind$faxes?: string | null;
  activityid_letter_bind$letters?: string | null;
  activityid_phonecall_bind$phonecalls?: string | null;
  activityid_recurringappointmentmaster_bind$recurringappointmentmasters?: string | null;
  activityid_socialactivity_bind$socialactivities?: string | null;
  activityid_task_bind$tasks?: string | null;
  partyid_account_bind$accounts?: string | null;
  partyid_contact_bind$contacts?: string | null;
  partyid_knowledgearticle_bind$knowledgearticles?: string | null;
  partyid_queue_bind$queues?: string | null;
  partyid_systemuser_bind$systemusers?: string | null;
}
interface ActivityParty_Create extends ActivityParty {
}
interface ActivityParty_Update extends ActivityParty {
}
interface ActivityParty_Select {
  activityid_guid: WebAttribute<ActivityParty_Select, { activityid_guid: string | null }, { activityid_formatted?: string }>;
  activitypartyid: WebAttribute<ActivityParty_Select, { activitypartyid: string | null }, {  }>;
  addressused: WebAttribute<ActivityParty_Select, { addressused: string | null }, {  }>;
  addressusedemailcolumnnumber: WebAttribute<ActivityParty_Select, { addressusedemailcolumnnumber: number | null }, {  }>;
  donotemail: WebAttribute<ActivityParty_Select, { donotemail: boolean | null }, {  }>;
  donotfax: WebAttribute<ActivityParty_Select, { donotfax: boolean | null }, {  }>;
  donotphone: WebAttribute<ActivityParty_Select, { donotphone: boolean | null }, {  }>;
  donotpostalmail: WebAttribute<ActivityParty_Select, { donotpostalmail: boolean | null }, {  }>;
  effort: WebAttribute<ActivityParty_Select, { effort: number | null }, {  }>;
  exchangeentryid: WebAttribute<ActivityParty_Select, { exchangeentryid: string | null }, {  }>;
  instancetypecode: WebAttribute<ActivityParty_Select, { instancetypecode: activityparty_instancetypecode | null }, { instancetypecode_formatted?: string }>;
  ispartydeleted: WebAttribute<ActivityParty_Select, { ispartydeleted: boolean | null }, {  }>;
  ownerid_guid: WebAttribute<ActivityParty_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit: WebAttribute<ActivityParty_Select, { owningbusinessunit: string | null }, {  }>;
  owninguser: WebAttribute<ActivityParty_Select, { owninguser: string | null }, {  }>;
  participationtypemask: WebAttribute<ActivityParty_Select, { participationtypemask: activityparty_participationtypemask | null }, { participationtypemask_formatted?: string }>;
  partyid_guid: WebAttribute<ActivityParty_Select, { partyid_guid: string | null }, { partyid_formatted?: string }>;
  scheduledend: WebAttribute<ActivityParty_Select, { scheduledend: Date | null }, { scheduledend_formatted?: string }>;
  scheduledstart: WebAttribute<ActivityParty_Select, { scheduledstart: Date | null }, { scheduledstart_formatted?: string }>;
  versionnumber: WebAttribute<ActivityParty_Select, { versionnumber: number | null }, {  }>;
}
interface ActivityParty_Filter {
  activityid_guid: XQW.Guid;
  activitypartyid: XQW.Guid;
  addressused: string;
  addressusedemailcolumnnumber: number;
  donotemail: boolean;
  donotfax: boolean;
  donotphone: boolean;
  donotpostalmail: boolean;
  effort: number;
  exchangeentryid: string;
  instancetypecode: activityparty_instancetypecode;
  ispartydeleted: boolean;
  ownerid_guid: XQW.Guid;
  owningbusinessunit: XQW.Guid;
  owninguser: XQW.Guid;
  participationtypemask: activityparty_participationtypemask;
  partyid_guid: XQW.Guid;
  scheduledend: Date;
  scheduledstart: Date;
  versionnumber: number;
}
interface ActivityParty_Expand {
  ActivityParty_SyncErrors: WebExpand<ActivityParty_Expand, SyncError_Select, SyncError_Filter, { ActivityParty_SyncErrors: SyncError_Result[] }>;
  activityid_activitypointer: WebExpand<ActivityParty_Expand, ActivityPointer_Select, ActivityPointer_Filter, { activityid_activitypointer: ActivityPointer_Result }>;
  activityid_appointment: WebExpand<ActivityParty_Expand, Appointment_Select, Appointment_Filter, { activityid_appointment: Appointment_Result }>;
  activityid_email: WebExpand<ActivityParty_Expand, Email_Select, Email_Filter, { activityid_email: Email_Result }>;
  activityid_fax: WebExpand<ActivityParty_Expand, Fax_Select, Fax_Filter, { activityid_fax: Fax_Result }>;
  activityid_letter: WebExpand<ActivityParty_Expand, Letter_Select, Letter_Filter, { activityid_letter: Letter_Result }>;
  activityid_phonecall: WebExpand<ActivityParty_Expand, PhoneCall_Select, PhoneCall_Filter, { activityid_phonecall: PhoneCall_Result }>;
  activityid_recurringappointmentmaster: WebExpand<ActivityParty_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { activityid_recurringappointmentmaster: RecurringAppointmentMaster_Result }>;
  activityid_socialactivity: WebExpand<ActivityParty_Expand, SocialActivity_Select, SocialActivity_Filter, { activityid_socialactivity: SocialActivity_Result }>;
  activityid_task: WebExpand<ActivityParty_Expand, Task_Select, Task_Filter, { activityid_task: Task_Result }>;
  partyid_account: WebExpand<ActivityParty_Expand, Account_Select, Account_Filter, { partyid_account: Account_Result }>;
  partyid_contact: WebExpand<ActivityParty_Expand, Contact_Select, Contact_Filter, { partyid_contact: Contact_Result }>;
  partyid_knowledgearticle: WebExpand<ActivityParty_Expand, KnowledgeArticle_Select, KnowledgeArticle_Filter, { partyid_knowledgearticle: KnowledgeArticle_Result }>;
  partyid_queue: WebExpand<ActivityParty_Expand, Queue_Select, Queue_Filter, { partyid_queue: Queue_Result }>;
  partyid_systemuser: WebExpand<ActivityParty_Expand, SystemUser_Select, SystemUser_Filter, { partyid_systemuser: SystemUser_Result }>;
  userentityinstancedata_activityparty: WebExpand<ActivityParty_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_activityparty: UserEntityInstanceData_Result[] }>;
}
interface ActivityParty_FormattedResult {
  activityid_formatted?: string;
  instancetypecode_formatted?: string;
  ownerid_formatted?: string;
  participationtypemask_formatted?: string;
  partyid_formatted?: string;
  scheduledend_formatted?: string;
  scheduledstart_formatted?: string;
}
interface ActivityParty_Result extends ActivityParty_Base, ActivityParty_Relationships {
  "@odata.etag": string;
  activityid_guid: string | null;
  ownerid_guid: string | null;
  partyid_guid: string | null;
}
interface ActivityParty_RelatedOne {
  activityid_activitypointer: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  activityid_appointment: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  activityid_email: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  activityid_fax: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  activityid_letter: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  activityid_phonecall: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  activityid_recurringappointmentmaster: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  activityid_socialactivity: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  activityid_task: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  partyid_account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  partyid_contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  partyid_knowledgearticle: WebMappingRetrieve<KnowledgeArticle_Select,KnowledgeArticle_Expand,KnowledgeArticle_Filter,KnowledgeArticle_Fixed,KnowledgeArticle_Result,KnowledgeArticle_FormattedResult>;
  partyid_queue: WebMappingRetrieve<Queue_Select,Queue_Expand,Queue_Filter,Queue_Fixed,Queue_Result,Queue_FormattedResult>;
  partyid_systemuser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface ActivityParty_RelatedMany {
  ActivityParty_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  userentityinstancedata_activityparty: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  activityparties: WebMappingRetrieve<ActivityParty_Select,ActivityParty_Expand,ActivityParty_Filter,ActivityParty_Fixed,ActivityParty_Result,ActivityParty_FormattedResult>;
}
interface WebEntitiesRelated {
  activityparties: WebMappingRelated<ActivityParty_RelatedOne,ActivityParty_RelatedMany>;
}
interface WebEntitiesCUDA {
  activityparties: WebMappingCUDA<ActivityParty_Create,ActivityParty_Update,ActivityParty_Select>;
}
