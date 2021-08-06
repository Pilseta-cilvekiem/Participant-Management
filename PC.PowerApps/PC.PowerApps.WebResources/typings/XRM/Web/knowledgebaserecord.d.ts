interface KnowledgeBaseRecord_Base extends WebEntity {
  createdon?: Date | null;
  exchangerate?: number | null;
  knowledgebaserecordid?: string | null;
  modifiedon?: Date | null;
  privateurl?: string | null;
  publicurl?: string | null;
  timezoneruleversionnumber?: number | null;
  title?: string | null;
  uniqueid?: string | null;
  versionnumber?: number | null;
}
interface KnowledgeBaseRecord_Relationships {
  KnowledgeBaseRecord_ActivityPointers?: ActivityPointer_Result[] | null;
  KnowledgeBaseRecord_Annotations?: Annotation_Result[] | null;
  KnowledgeBaseRecord_Appointments?: Appointment_Result[] | null;
  KnowledgeBaseRecord_AsyncOperations?: AsyncOperation_Result[] | null;
  KnowledgeBaseRecord_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  KnowledgeBaseRecord_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  KnowledgeBaseRecord_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  KnowledgeBaseRecord_Emails?: Email_Result[] | null;
  KnowledgeBaseRecord_Faxes?: Fax_Result[] | null;
  KnowledgeBaseRecord_Letters?: Letter_Result[] | null;
  KnowledgeBaseRecord_PhoneCalls?: PhoneCall_Result[] | null;
  KnowledgeBaseRecord_PrincipalObjectAttributeAccess?: PrincipalObjectAttributeAccess_Result[] | null;
  KnowledgeBaseRecord_ProcessSession?: ProcessSession_Result[] | null;
  KnowledgeBaseRecord_RecurringAppointmentMasters?: RecurringAppointmentMaster_Result[] | null;
  KnowledgeBaseRecord_SocialActivities?: SocialActivity_Result[] | null;
  KnowledgeBaseRecord_SyncErrors?: SyncError_Result[] | null;
  KnowledgeBaseRecord_Tasks?: Task_Result[] | null;
  KnowledgeBaseRecord_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  KnowledgeBaseRecord_connections1?: Connection_Result[] | null;
  KnowledgeBaseRecord_connections2?: Connection_Result[] | null;
}
interface KnowledgeBaseRecord extends KnowledgeBaseRecord_Base, KnowledgeBaseRecord_Relationships {
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface KnowledgeBaseRecord_Create extends KnowledgeBaseRecord {
}
interface KnowledgeBaseRecord_Update extends KnowledgeBaseRecord {
}
interface KnowledgeBaseRecord_Select {
  createdby_guid: WebAttribute<KnowledgeBaseRecord_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<KnowledgeBaseRecord_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<KnowledgeBaseRecord_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<KnowledgeBaseRecord_Select, { exchangerate: number | null }, {  }>;
  knowledgebaserecordid: WebAttribute<KnowledgeBaseRecord_Select, { knowledgebaserecordid: string | null }, {  }>;
  modifiedby_guid: WebAttribute<KnowledgeBaseRecord_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<KnowledgeBaseRecord_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<KnowledgeBaseRecord_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<KnowledgeBaseRecord_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  privateurl: WebAttribute<KnowledgeBaseRecord_Select, { privateurl: string | null }, {  }>;
  publicurl: WebAttribute<KnowledgeBaseRecord_Select, { publicurl: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<KnowledgeBaseRecord_Select, { timezoneruleversionnumber: number | null }, {  }>;
  title: WebAttribute<KnowledgeBaseRecord_Select, { title: string | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<KnowledgeBaseRecord_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  uniqueid: WebAttribute<KnowledgeBaseRecord_Select, { uniqueid: string | null }, {  }>;
  versionnumber: WebAttribute<KnowledgeBaseRecord_Select, { versionnumber: number | null }, {  }>;
}
interface KnowledgeBaseRecord_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  exchangerate: any;
  knowledgebaserecordid: XQW.Guid;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  privateurl: string;
  publicurl: string;
  timezoneruleversionnumber: number;
  title: string;
  transactioncurrencyid_guid: XQW.Guid;
  uniqueid: string;
  versionnumber: number;
}
interface KnowledgeBaseRecord_Expand {
  KnowledgeBaseRecord_ActivityPointers: WebExpand<KnowledgeBaseRecord_Expand, ActivityPointer_Select, ActivityPointer_Filter, { KnowledgeBaseRecord_ActivityPointers: ActivityPointer_Result[] }>;
  KnowledgeBaseRecord_Annotations: WebExpand<KnowledgeBaseRecord_Expand, Annotation_Select, Annotation_Filter, { KnowledgeBaseRecord_Annotations: Annotation_Result[] }>;
  KnowledgeBaseRecord_Appointments: WebExpand<KnowledgeBaseRecord_Expand, Appointment_Select, Appointment_Filter, { KnowledgeBaseRecord_Appointments: Appointment_Result[] }>;
  KnowledgeBaseRecord_AsyncOperations: WebExpand<KnowledgeBaseRecord_Expand, AsyncOperation_Select, AsyncOperation_Filter, { KnowledgeBaseRecord_AsyncOperations: AsyncOperation_Result[] }>;
  KnowledgeBaseRecord_BulkDeleteFailures: WebExpand<KnowledgeBaseRecord_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { KnowledgeBaseRecord_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  KnowledgeBaseRecord_DuplicateBaseRecord: WebExpand<KnowledgeBaseRecord_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { KnowledgeBaseRecord_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  KnowledgeBaseRecord_DuplicateMatchingRecord: WebExpand<KnowledgeBaseRecord_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { KnowledgeBaseRecord_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  KnowledgeBaseRecord_Emails: WebExpand<KnowledgeBaseRecord_Expand, Email_Select, Email_Filter, { KnowledgeBaseRecord_Emails: Email_Result[] }>;
  KnowledgeBaseRecord_Faxes: WebExpand<KnowledgeBaseRecord_Expand, Fax_Select, Fax_Filter, { KnowledgeBaseRecord_Faxes: Fax_Result[] }>;
  KnowledgeBaseRecord_Letters: WebExpand<KnowledgeBaseRecord_Expand, Letter_Select, Letter_Filter, { KnowledgeBaseRecord_Letters: Letter_Result[] }>;
  KnowledgeBaseRecord_PhoneCalls: WebExpand<KnowledgeBaseRecord_Expand, PhoneCall_Select, PhoneCall_Filter, { KnowledgeBaseRecord_PhoneCalls: PhoneCall_Result[] }>;
  KnowledgeBaseRecord_PrincipalObjectAttributeAccess: WebExpand<KnowledgeBaseRecord_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { KnowledgeBaseRecord_PrincipalObjectAttributeAccess: PrincipalObjectAttributeAccess_Result[] }>;
  KnowledgeBaseRecord_ProcessSession: WebExpand<KnowledgeBaseRecord_Expand, ProcessSession_Select, ProcessSession_Filter, { KnowledgeBaseRecord_ProcessSession: ProcessSession_Result[] }>;
  KnowledgeBaseRecord_RecurringAppointmentMasters: WebExpand<KnowledgeBaseRecord_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { KnowledgeBaseRecord_RecurringAppointmentMasters: RecurringAppointmentMaster_Result[] }>;
  KnowledgeBaseRecord_SocialActivities: WebExpand<KnowledgeBaseRecord_Expand, SocialActivity_Select, SocialActivity_Filter, { KnowledgeBaseRecord_SocialActivities: SocialActivity_Result[] }>;
  KnowledgeBaseRecord_SyncErrors: WebExpand<KnowledgeBaseRecord_Expand, SyncError_Select, SyncError_Filter, { KnowledgeBaseRecord_SyncErrors: SyncError_Result[] }>;
  KnowledgeBaseRecord_Tasks: WebExpand<KnowledgeBaseRecord_Expand, Task_Select, Task_Filter, { KnowledgeBaseRecord_Tasks: Task_Result[] }>;
  KnowledgeBaseRecord_UserEntityInstanceDatas: WebExpand<KnowledgeBaseRecord_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { KnowledgeBaseRecord_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  KnowledgeBaseRecord_connections1: WebExpand<KnowledgeBaseRecord_Expand, Connection_Select, Connection_Filter, { KnowledgeBaseRecord_connections1: Connection_Result[] }>;
  KnowledgeBaseRecord_connections2: WebExpand<KnowledgeBaseRecord_Expand, Connection_Select, Connection_Filter, { KnowledgeBaseRecord_connections2: Connection_Result[] }>;
  createdby: WebExpand<KnowledgeBaseRecord_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<KnowledgeBaseRecord_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<KnowledgeBaseRecord_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<KnowledgeBaseRecord_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<KnowledgeBaseRecord_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  transactioncurrencyid: WebExpand<KnowledgeBaseRecord_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface KnowledgeBaseRecord_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface KnowledgeBaseRecord_Result extends KnowledgeBaseRecord_Base, KnowledgeBaseRecord_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface KnowledgeBaseRecord_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface KnowledgeBaseRecord_RelatedMany {
  KnowledgeBaseRecord_ActivityPointers: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  KnowledgeBaseRecord_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  KnowledgeBaseRecord_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  KnowledgeBaseRecord_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  KnowledgeBaseRecord_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  KnowledgeBaseRecord_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  KnowledgeBaseRecord_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  KnowledgeBaseRecord_Emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  KnowledgeBaseRecord_Faxes: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  KnowledgeBaseRecord_Letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  KnowledgeBaseRecord_PhoneCalls: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  KnowledgeBaseRecord_PrincipalObjectAttributeAccess: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  KnowledgeBaseRecord_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  KnowledgeBaseRecord_RecurringAppointmentMasters: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  KnowledgeBaseRecord_SocialActivities: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  KnowledgeBaseRecord_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  KnowledgeBaseRecord_Tasks: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  KnowledgeBaseRecord_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  KnowledgeBaseRecord_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  KnowledgeBaseRecord_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
}
interface WebEntitiesRetrieve {
  knowledgebaserecords: WebMappingRetrieve<KnowledgeBaseRecord_Select,KnowledgeBaseRecord_Expand,KnowledgeBaseRecord_Filter,KnowledgeBaseRecord_Fixed,KnowledgeBaseRecord_Result,KnowledgeBaseRecord_FormattedResult>;
}
interface WebEntitiesRelated {
  knowledgebaserecords: WebMappingRelated<KnowledgeBaseRecord_RelatedOne,KnowledgeBaseRecord_RelatedMany>;
}
interface WebEntitiesCUDA {
  knowledgebaserecords: WebMappingCUDA<KnowledgeBaseRecord_Create,KnowledgeBaseRecord_Update,KnowledgeBaseRecord_Select>;
}
