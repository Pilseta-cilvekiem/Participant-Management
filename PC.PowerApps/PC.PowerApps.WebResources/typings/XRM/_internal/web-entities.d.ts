interface WebMappingRetrieve<ISelect, IExpand, IFilter, IFixed, Result, FormattedResult> {
}
interface WebMappingCUDA<ICreate, IUpdate, ISelect> {
}
interface WebMappingRelated<ISingle, IMultiple> {
}
interface WebEntity {
}
interface WebEntity_Fixed {
  "@odata.etag": string;
}
interface Account_Base extends WebEntity {
}
interface Account_Fixed extends WebEntity_Fixed {
  accountid: string;
}
interface Account extends Account_Base, Account_Relationships {
}
interface Account_Relationships {
}
interface Account_Result extends Account_Base, Account_Relationships {
}
interface Account_FormattedResult {
}
interface Account_Select {
}
interface Account_Expand {
}
interface Account_Filter {
}
interface Account_Create extends Account {
}
interface Account_Update extends Account {
}
interface ACIViewMapper_Base extends WebEntity {
}
interface ACIViewMapper_Fixed extends WebEntity_Fixed {
  aciviewmapperid: string;
}
interface ACIViewMapper extends ACIViewMapper_Base, ACIViewMapper_Relationships {
}
interface ACIViewMapper_Relationships {
}
interface ACIViewMapper_Result extends ACIViewMapper_Base, ACIViewMapper_Relationships {
}
interface ACIViewMapper_FormattedResult {
}
interface ACIViewMapper_Select {
}
interface ACIViewMapper_Expand {
}
interface ACIViewMapper_Filter {
}
interface ACIViewMapper_Create extends ACIViewMapper {
}
interface ACIViewMapper_Update extends ACIViewMapper {
}
interface ActionCard_Base extends WebEntity {
}
interface ActionCard_Fixed extends WebEntity_Fixed {
  actioncardid: string;
}
interface ActionCard extends ActionCard_Base, ActionCard_Relationships {
}
interface ActionCard_Relationships {
}
interface ActionCard_Result extends ActionCard_Base, ActionCard_Relationships {
}
interface ActionCard_FormattedResult {
}
interface ActionCard_Select {
}
interface ActionCard_Expand {
}
interface ActionCard_Filter {
}
interface ActionCard_Create extends ActionCard {
}
interface ActionCard_Update extends ActionCard {
}
interface ActionCardUserSettings_Base extends WebEntity {
}
interface ActionCardUserSettings_Fixed extends WebEntity_Fixed {
  actioncardusersettingsid: string;
}
interface ActionCardUserSettings extends ActionCardUserSettings_Base, ActionCardUserSettings_Relationships {
}
interface ActionCardUserSettings_Relationships {
}
interface ActionCardUserSettings_Result extends ActionCardUserSettings_Base, ActionCardUserSettings_Relationships {
}
interface ActionCardUserSettings_FormattedResult {
}
interface ActionCardUserSettings_Select {
}
interface ActionCardUserSettings_Expand {
}
interface ActionCardUserSettings_Filter {
}
interface ActionCardUserSettings_Create extends ActionCardUserSettings {
}
interface ActionCardUserSettings_Update extends ActionCardUserSettings {
}
interface ActionCardUserState_Base extends WebEntity {
}
interface ActionCardUserState_Fixed extends WebEntity_Fixed {
  actioncarduserstateid: string;
}
interface ActionCardUserState extends ActionCardUserState_Base, ActionCardUserState_Relationships {
}
interface ActionCardUserState_Relationships {
}
interface ActionCardUserState_Result extends ActionCardUserState_Base, ActionCardUserState_Relationships {
}
interface ActionCardUserState_FormattedResult {
}
interface ActionCardUserState_Select {
}
interface ActionCardUserState_Expand {
}
interface ActionCardUserState_Filter {
}
interface ActionCardUserState_Create extends ActionCardUserState {
}
interface ActionCardUserState_Update extends ActionCardUserState {
}
interface activityfileattachment_Base extends WebEntity {
}
interface activityfileattachment_Fixed extends WebEntity_Fixed {
  activityfileattachmentid: string;
}
interface activityfileattachment extends activityfileattachment_Base, activityfileattachment_Relationships {
}
interface activityfileattachment_Relationships {
}
interface activityfileattachment_Result extends activityfileattachment_Base, activityfileattachment_Relationships {
}
interface activityfileattachment_FormattedResult {
}
interface activityfileattachment_Select {
}
interface activityfileattachment_Expand {
}
interface activityfileattachment_Filter {
}
interface activityfileattachment_Create extends activityfileattachment {
}
interface activityfileattachment_Update extends activityfileattachment {
}
interface ActivityMimeAttachment_Base extends WebEntity {
}
interface ActivityMimeAttachment_Fixed extends WebEntity_Fixed {
  activitymimeattachmentid: string;
}
interface ActivityMimeAttachment extends ActivityMimeAttachment_Base, ActivityMimeAttachment_Relationships {
}
interface ActivityMimeAttachment_Relationships {
}
interface ActivityMimeAttachment_Result extends ActivityMimeAttachment_Base, ActivityMimeAttachment_Relationships {
}
interface ActivityMimeAttachment_FormattedResult {
}
interface ActivityMimeAttachment_Select {
}
interface ActivityMimeAttachment_Expand {
}
interface ActivityMimeAttachment_Filter {
}
interface ActivityMimeAttachment_Create extends ActivityMimeAttachment {
}
interface ActivityMimeAttachment_Update extends ActivityMimeAttachment {
}
interface ActivityParty_Base extends WebEntity {
}
interface ActivityParty_Fixed extends WebEntity_Fixed {
  activitypartyid: string;
}
interface ActivityParty extends ActivityParty_Base, ActivityParty_Relationships {
}
interface ActivityParty_Relationships {
}
interface ActivityParty_Result extends ActivityParty_Base, ActivityParty_Relationships {
}
interface ActivityParty_FormattedResult {
}
interface ActivityParty_Select {
}
interface ActivityParty_Expand {
}
interface ActivityParty_Filter {
}
interface ActivityParty_Create extends ActivityParty {
}
interface ActivityParty_Update extends ActivityParty {
}
interface ActivityPointer_Base extends WebEntity {
}
interface ActivityPointer_Fixed extends WebEntity_Fixed {
  activityid: string;
}
interface ActivityPointer extends ActivityPointer_Base, ActivityPointer_Relationships {
}
interface ActivityPointer_Relationships {
}
interface ActivityPointer_Result extends ActivityPointer_Base, ActivityPointer_Relationships {
}
interface ActivityPointer_FormattedResult {
}
interface ActivityPointer_Select {
}
interface ActivityPointer_Expand {
}
interface ActivityPointer_Filter {
}
interface ActivityPointer_Create extends ActivityPointer {
}
interface ActivityPointer_Update extends ActivityPointer {
}
interface AdvancedSimilarityRule_Base extends WebEntity {
}
interface AdvancedSimilarityRule_Fixed extends WebEntity_Fixed {
  advancedsimilarityruleid: string;
}
interface AdvancedSimilarityRule extends AdvancedSimilarityRule_Base, AdvancedSimilarityRule_Relationships {
}
interface AdvancedSimilarityRule_Relationships {
}
interface AdvancedSimilarityRule_Result extends AdvancedSimilarityRule_Base, AdvancedSimilarityRule_Relationships {
}
interface AdvancedSimilarityRule_FormattedResult {
}
interface AdvancedSimilarityRule_Select {
}
interface AdvancedSimilarityRule_Expand {
}
interface AdvancedSimilarityRule_Filter {
}
interface AdvancedSimilarityRule_Create extends AdvancedSimilarityRule {
}
interface AdvancedSimilarityRule_Update extends AdvancedSimilarityRule {
}
interface Annotation_Base extends WebEntity {
}
interface Annotation_Fixed extends WebEntity_Fixed {
  annotationid: string;
}
interface Annotation extends Annotation_Base, Annotation_Relationships {
}
interface Annotation_Relationships {
}
interface Annotation_Result extends Annotation_Base, Annotation_Relationships {
}
interface Annotation_FormattedResult {
}
interface Annotation_Select {
}
interface Annotation_Expand {
}
interface Annotation_Filter {
}
interface Annotation_Create extends Annotation {
}
interface Annotation_Update extends Annotation {
}
interface AnnualFiscalCalendar_Base extends WebEntity {
}
interface AnnualFiscalCalendar_Fixed extends WebEntity_Fixed {
  userfiscalcalendarid: string;
}
interface AnnualFiscalCalendar extends AnnualFiscalCalendar_Base, AnnualFiscalCalendar_Relationships {
}
interface AnnualFiscalCalendar_Relationships {
}
interface AnnualFiscalCalendar_Result extends AnnualFiscalCalendar_Base, AnnualFiscalCalendar_Relationships {
}
interface AnnualFiscalCalendar_FormattedResult {
}
interface AnnualFiscalCalendar_Select {
}
interface AnnualFiscalCalendar_Expand {
}
interface AnnualFiscalCalendar_Filter {
}
interface AnnualFiscalCalendar_Create extends AnnualFiscalCalendar {
}
interface AnnualFiscalCalendar_Update extends AnnualFiscalCalendar {
}
interface appaction_Base extends WebEntity {
}
interface appaction_Fixed extends WebEntity_Fixed {
  appactionid: string;
}
interface appaction extends appaction_Base, appaction_Relationships {
}
interface appaction_Relationships {
}
interface appaction_Result extends appaction_Base, appaction_Relationships {
}
interface appaction_FormattedResult {
}
interface appaction_Select {
}
interface appaction_Expand {
}
interface appaction_Filter {
}
interface appaction_Create extends appaction {
}
interface appaction_Update extends appaction {
}
interface AppConfig_Base extends WebEntity {
}
interface AppConfig_Fixed extends WebEntity_Fixed {
  appconfigid: string;
}
interface AppConfig extends AppConfig_Base, AppConfig_Relationships {
}
interface AppConfig_Relationships {
}
interface AppConfig_Result extends AppConfig_Base, AppConfig_Relationships {
}
interface AppConfig_FormattedResult {
}
interface AppConfig_Select {
}
interface AppConfig_Expand {
}
interface AppConfig_Filter {
}
interface AppConfig_Create extends AppConfig {
}
interface AppConfig_Update extends AppConfig {
}
interface AppConfigInstance_Base extends WebEntity {
}
interface AppConfigInstance_Fixed extends WebEntity_Fixed {
  appconfiginstanceid: string;
}
interface AppConfigInstance extends AppConfigInstance_Base, AppConfigInstance_Relationships {
}
interface AppConfigInstance_Relationships {
}
interface AppConfigInstance_Result extends AppConfigInstance_Base, AppConfigInstance_Relationships {
}
interface AppConfigInstance_FormattedResult {
}
interface AppConfigInstance_Select {
}
interface AppConfigInstance_Expand {
}
interface AppConfigInstance_Filter {
}
interface AppConfigInstance_Create extends AppConfigInstance {
}
interface AppConfigInstance_Update extends AppConfigInstance {
}
interface AppConfigMaster_Base extends WebEntity {
}
interface AppConfigMaster_Fixed extends WebEntity_Fixed {
  appconfigmasterid: string;
}
interface AppConfigMaster extends AppConfigMaster_Base, AppConfigMaster_Relationships {
}
interface AppConfigMaster_Relationships {
}
interface AppConfigMaster_Result extends AppConfigMaster_Base, AppConfigMaster_Relationships {
}
interface AppConfigMaster_FormattedResult {
}
interface AppConfigMaster_Select {
}
interface AppConfigMaster_Expand {
}
interface AppConfigMaster_Filter {
}
interface AppConfigMaster_Create extends AppConfigMaster {
}
interface AppConfigMaster_Update extends AppConfigMaster {
}
interface AppElement_Base extends WebEntity {
}
interface AppElement_Fixed extends WebEntity_Fixed {
  appelementid: string;
}
interface AppElement extends AppElement_Base, AppElement_Relationships {
}
interface AppElement_Relationships {
}
interface AppElement_Result extends AppElement_Base, AppElement_Relationships {
}
interface AppElement_FormattedResult {
}
interface AppElement_Select {
}
interface AppElement_Expand {
}
interface AppElement_Filter {
}
interface AppElement_Create extends AppElement {
}
interface AppElement_Update extends AppElement {
}
interface ApplicationFile_Base extends WebEntity {
}
interface ApplicationFile_Fixed extends WebEntity_Fixed {
  fileid: string;
}
interface ApplicationFile extends ApplicationFile_Base, ApplicationFile_Relationships {
}
interface ApplicationFile_Relationships {
}
interface ApplicationFile_Result extends ApplicationFile_Base, ApplicationFile_Relationships {
}
interface ApplicationFile_FormattedResult {
}
interface ApplicationFile_Select {
}
interface ApplicationFile_Expand {
}
interface ApplicationFile_Filter {
}
interface ApplicationFile_Create extends ApplicationFile {
}
interface ApplicationFile_Update extends ApplicationFile {
}
interface ApplicationUser_Base extends WebEntity {
}
interface ApplicationUser_Fixed extends WebEntity_Fixed {
  applicationuserid: string;
}
interface ApplicationUser extends ApplicationUser_Base, ApplicationUser_Relationships {
}
interface ApplicationUser_Relationships {
}
interface ApplicationUser_Result extends ApplicationUser_Base, ApplicationUser_Relationships {
}
interface ApplicationUser_FormattedResult {
}
interface ApplicationUser_Select {
}
interface ApplicationUser_Expand {
}
interface ApplicationUser_Filter {
}
interface ApplicationUser_Create extends ApplicationUser {
}
interface ApplicationUser_Update extends ApplicationUser {
}
interface applicationuserprofile_Base extends WebEntity {
}
interface applicationuserprofile_Fixed extends WebEntity_Fixed {
  applicationuserprofileid: string;
}
interface applicationuserprofile extends applicationuserprofile_Base, applicationuserprofile_Relationships {
}
interface applicationuserprofile_Relationships {
}
interface applicationuserprofile_Result extends applicationuserprofile_Base, applicationuserprofile_Relationships {
}
interface applicationuserprofile_FormattedResult {
}
interface applicationuserprofile_Select {
}
interface applicationuserprofile_Expand {
}
interface applicationuserprofile_Filter {
}
interface applicationuserprofile_Create extends applicationuserprofile {
}
interface applicationuserprofile_Update extends applicationuserprofile {
}
interface applicationuserrole_Base extends WebEntity {
}
interface applicationuserrole_Fixed extends WebEntity_Fixed {
  applicationuserroleid: string;
}
interface applicationuserrole extends applicationuserrole_Base, applicationuserrole_Relationships {
}
interface applicationuserrole_Relationships {
}
interface applicationuserrole_Result extends applicationuserrole_Base, applicationuserrole_Relationships {
}
interface applicationuserrole_FormattedResult {
}
interface applicationuserrole_Select {
}
interface applicationuserrole_Expand {
}
interface applicationuserrole_Filter {
}
interface applicationuserrole_Create extends applicationuserrole {
}
interface applicationuserrole_Update extends applicationuserrole {
}
interface AppModule_Base extends WebEntity {
}
interface AppModule_Fixed extends WebEntity_Fixed {
  appmoduleid: string;
}
interface AppModule extends AppModule_Base, AppModule_Relationships {
}
interface AppModule_Relationships {
}
interface AppModule_Result extends AppModule_Base, AppModule_Relationships {
}
interface AppModule_FormattedResult {
}
interface AppModule_Select {
}
interface AppModule_Expand {
}
interface AppModule_Filter {
}
interface AppModule_Create extends AppModule {
}
interface AppModule_Update extends AppModule {
}
interface AppModuleComponent_Base extends WebEntity {
}
interface AppModuleComponent_Fixed extends WebEntity_Fixed {
  appmodulecomponentid: string;
}
interface AppModuleComponent extends AppModuleComponent_Base, AppModuleComponent_Relationships {
}
interface AppModuleComponent_Relationships {
}
interface AppModuleComponent_Result extends AppModuleComponent_Base, AppModuleComponent_Relationships {
}
interface AppModuleComponent_FormattedResult {
}
interface AppModuleComponent_Select {
}
interface AppModuleComponent_Expand {
}
interface AppModuleComponent_Filter {
}
interface AppModuleComponent_Create extends AppModuleComponent {
}
interface AppModuleComponent_Update extends AppModuleComponent {
}
interface AppModuleComponentEdge_Base extends WebEntity {
}
interface AppModuleComponentEdge_Fixed extends WebEntity_Fixed {
  appmodulecomponentedgeid: string;
}
interface AppModuleComponentEdge extends AppModuleComponentEdge_Base, AppModuleComponentEdge_Relationships {
}
interface AppModuleComponentEdge_Relationships {
}
interface AppModuleComponentEdge_Result extends AppModuleComponentEdge_Base, AppModuleComponentEdge_Relationships {
}
interface AppModuleComponentEdge_FormattedResult {
}
interface AppModuleComponentEdge_Select {
}
interface AppModuleComponentEdge_Expand {
}
interface AppModuleComponentEdge_Filter {
}
interface AppModuleComponentEdge_Create extends AppModuleComponentEdge {
}
interface AppModuleComponentEdge_Update extends AppModuleComponentEdge {
}
interface AppModuleComponentNode_Base extends WebEntity {
}
interface AppModuleComponentNode_Fixed extends WebEntity_Fixed {
  appmodulecomponentnodeid: string;
}
interface AppModuleComponentNode extends AppModuleComponentNode_Base, AppModuleComponentNode_Relationships {
}
interface AppModuleComponentNode_Relationships {
}
interface AppModuleComponentNode_Result extends AppModuleComponentNode_Base, AppModuleComponentNode_Relationships {
}
interface AppModuleComponentNode_FormattedResult {
}
interface AppModuleComponentNode_Select {
}
interface AppModuleComponentNode_Expand {
}
interface AppModuleComponentNode_Filter {
}
interface AppModuleComponentNode_Create extends AppModuleComponentNode {
}
interface AppModuleComponentNode_Update extends AppModuleComponentNode {
}
interface AppModuleMetadata_Base extends WebEntity {
}
interface AppModuleMetadata_Fixed extends WebEntity_Fixed {
  appmodulemetadataid: string;
}
interface AppModuleMetadata extends AppModuleMetadata_Base, AppModuleMetadata_Relationships {
}
interface AppModuleMetadata_Relationships {
}
interface AppModuleMetadata_Result extends AppModuleMetadata_Base, AppModuleMetadata_Relationships {
}
interface AppModuleMetadata_FormattedResult {
}
interface AppModuleMetadata_Select {
}
interface AppModuleMetadata_Expand {
}
interface AppModuleMetadata_Filter {
}
interface AppModuleMetadata_Create extends AppModuleMetadata {
}
interface AppModuleMetadata_Update extends AppModuleMetadata {
}
interface AppModuleMetadataDependency_Base extends WebEntity {
}
interface AppModuleMetadataDependency_Fixed extends WebEntity_Fixed {
  appmodulemetadatadependencyid: string;
}
interface AppModuleMetadataDependency extends AppModuleMetadataDependency_Base, AppModuleMetadataDependency_Relationships {
}
interface AppModuleMetadataDependency_Relationships {
}
interface AppModuleMetadataDependency_Result extends AppModuleMetadataDependency_Base, AppModuleMetadataDependency_Relationships {
}
interface AppModuleMetadataDependency_FormattedResult {
}
interface AppModuleMetadataDependency_Select {
}
interface AppModuleMetadataDependency_Expand {
}
interface AppModuleMetadataDependency_Filter {
}
interface AppModuleMetadataDependency_Create extends AppModuleMetadataDependency {
}
interface AppModuleMetadataDependency_Update extends AppModuleMetadataDependency {
}
interface AppModuleMetadataOperationLog_Base extends WebEntity {
}
interface AppModuleMetadataOperationLog_Fixed extends WebEntity_Fixed {
  appmodulemetadataoperationlogid: string;
}
interface AppModuleMetadataOperationLog extends AppModuleMetadataOperationLog_Base, AppModuleMetadataOperationLog_Relationships {
}
interface AppModuleMetadataOperationLog_Relationships {
}
interface AppModuleMetadataOperationLog_Result extends AppModuleMetadataOperationLog_Base, AppModuleMetadataOperationLog_Relationships {
}
interface AppModuleMetadataOperationLog_FormattedResult {
}
interface AppModuleMetadataOperationLog_Select {
}
interface AppModuleMetadataOperationLog_Expand {
}
interface AppModuleMetadataOperationLog_Filter {
}
interface AppModuleMetadataOperationLog_Create extends AppModuleMetadataOperationLog {
}
interface AppModuleMetadataOperationLog_Update extends AppModuleMetadataOperationLog {
}
interface AppModuleRoles_Base extends WebEntity {
}
interface AppModuleRoles_Fixed extends WebEntity_Fixed {
  appmoduleroleid: string;
}
interface AppModuleRoles extends AppModuleRoles_Base, AppModuleRoles_Relationships {
}
interface AppModuleRoles_Relationships {
}
interface AppModuleRoles_Result extends AppModuleRoles_Base, AppModuleRoles_Relationships {
}
interface AppModuleRoles_FormattedResult {
}
interface AppModuleRoles_Select {
}
interface AppModuleRoles_Expand {
}
interface AppModuleRoles_Filter {
}
interface AppModuleRoles_Create extends AppModuleRoles {
}
interface AppModuleRoles_Update extends AppModuleRoles {
}
interface appnotification_Base extends WebEntity {
}
interface appnotification_Fixed extends WebEntity_Fixed {
  appnotificationid: string;
}
interface appnotification extends appnotification_Base, appnotification_Relationships {
}
interface appnotification_Relationships {
}
interface appnotification_Result extends appnotification_Base, appnotification_Relationships {
}
interface appnotification_FormattedResult {
}
interface appnotification_Select {
}
interface appnotification_Expand {
}
interface appnotification_Filter {
}
interface appnotification_Create extends appnotification {
}
interface appnotification_Update extends appnotification {
}
interface Appointment_Base extends WebEntity {
}
interface Appointment_Fixed extends WebEntity_Fixed {
  activityid: string;
}
interface Appointment extends Appointment_Base, Appointment_Relationships {
}
interface Appointment_Relationships {
}
interface Appointment_Result extends Appointment_Base, Appointment_Relationships {
}
interface Appointment_FormattedResult {
}
interface Appointment_Select {
}
interface Appointment_Expand {
}
interface Appointment_Filter {
}
interface Appointment_Create extends Appointment {
}
interface Appointment_Update extends Appointment {
}
interface AppSetting_Base extends WebEntity {
}
interface AppSetting_Fixed extends WebEntity_Fixed {
  appsettingid: string;
}
interface AppSetting extends AppSetting_Base, AppSetting_Relationships {
}
interface AppSetting_Relationships {
}
interface AppSetting_Result extends AppSetting_Base, AppSetting_Relationships {
}
interface AppSetting_FormattedResult {
}
interface AppSetting_Select {
}
interface AppSetting_Expand {
}
interface AppSetting_Filter {
}
interface AppSetting_Create extends AppSetting {
}
interface AppSetting_Update extends AppSetting {
}
interface AppUserSetting_Base extends WebEntity {
}
interface AppUserSetting_Fixed extends WebEntity_Fixed {
  appusersettingid: string;
}
interface AppUserSetting extends AppUserSetting_Base, AppUserSetting_Relationships {
}
interface AppUserSetting_Relationships {
}
interface AppUserSetting_Result extends AppUserSetting_Base, AppUserSetting_Relationships {
}
interface AppUserSetting_FormattedResult {
}
interface AppUserSetting_Select {
}
interface AppUserSetting_Expand {
}
interface AppUserSetting_Filter {
}
interface AppUserSetting_Create extends AppUserSetting {
}
interface AppUserSetting_Update extends AppUserSetting {
}
interface AsyncOperation_Base extends WebEntity {
}
interface AsyncOperation_Fixed extends WebEntity_Fixed {
  asyncoperationid: string;
}
interface AsyncOperation extends AsyncOperation_Base, AsyncOperation_Relationships {
}
interface AsyncOperation_Relationships {
}
interface AsyncOperation_Result extends AsyncOperation_Base, AsyncOperation_Relationships {
}
interface AsyncOperation_FormattedResult {
}
interface AsyncOperation_Select {
}
interface AsyncOperation_Expand {
}
interface AsyncOperation_Filter {
}
interface AsyncOperation_Create extends AsyncOperation {
}
interface AsyncOperation_Update extends AsyncOperation {
}
interface Attachment_Base extends WebEntity {
}
interface Attachment_Fixed extends WebEntity_Fixed {
  attachmentid: string;
}
interface Attachment extends Attachment_Base, Attachment_Relationships {
}
interface Attachment_Relationships {
}
interface Attachment_Result extends Attachment_Base, Attachment_Relationships {
}
interface Attachment_FormattedResult {
}
interface Attachment_Select {
}
interface Attachment_Expand {
}
interface Attachment_Filter {
}
interface Attachment_Create extends Attachment {
}
interface Attachment_Update extends Attachment {
}
interface Attribute_Base extends WebEntity {
}
interface Attribute_Fixed extends WebEntity_Fixed {
  attributeid: string;
}
interface Attribute extends Attribute_Base, Attribute_Relationships {
}
interface Attribute_Relationships {
}
interface Attribute_Result extends Attribute_Base, Attribute_Relationships {
}
interface Attribute_FormattedResult {
}
interface Attribute_Select {
}
interface Attribute_Expand {
}
interface Attribute_Filter {
}
interface Attribute_Create extends Attribute {
}
interface Attribute_Update extends Attribute {
}
interface AttributeImageConfig_Base extends WebEntity {
}
interface AttributeImageConfig_Fixed extends WebEntity_Fixed {
  attributeimageconfigid: string;
}
interface AttributeImageConfig extends AttributeImageConfig_Base, AttributeImageConfig_Relationships {
}
interface AttributeImageConfig_Relationships {
}
interface AttributeImageConfig_Result extends AttributeImageConfig_Base, AttributeImageConfig_Relationships {
}
interface AttributeImageConfig_FormattedResult {
}
interface AttributeImageConfig_Select {
}
interface AttributeImageConfig_Expand {
}
interface AttributeImageConfig_Filter {
}
interface AttributeImageConfig_Create extends AttributeImageConfig {
}
interface AttributeImageConfig_Update extends AttributeImageConfig {
}
interface AttributeMap_Base extends WebEntity {
}
interface AttributeMap_Fixed extends WebEntity_Fixed {
  attributemapid: string;
}
interface AttributeMap extends AttributeMap_Base, AttributeMap_Relationships {
}
interface AttributeMap_Relationships {
}
interface AttributeMap_Result extends AttributeMap_Base, AttributeMap_Relationships {
}
interface AttributeMap_FormattedResult {
}
interface AttributeMap_Select {
}
interface AttributeMap_Expand {
}
interface AttributeMap_Filter {
}
interface AttributeMap_Create extends AttributeMap {
}
interface AttributeMap_Update extends AttributeMap {
}
interface Audit_Base extends WebEntity {
}
interface Audit_Fixed extends WebEntity_Fixed {
  auditid: string;
}
interface Audit extends Audit_Base, Audit_Relationships {
}
interface Audit_Relationships {
}
interface Audit_Result extends Audit_Base, Audit_Relationships {
}
interface Audit_FormattedResult {
}
interface Audit_Select {
}
interface Audit_Expand {
}
interface Audit_Filter {
}
interface Audit_Create extends Audit {
}
interface Audit_Update extends Audit {
}
interface AuthorizationServer_Base extends WebEntity {
}
interface AuthorizationServer_Fixed extends WebEntity_Fixed {
  authorizationserverid: string;
}
interface AuthorizationServer extends AuthorizationServer_Base, AuthorizationServer_Relationships {
}
interface AuthorizationServer_Relationships {
}
interface AuthorizationServer_Result extends AuthorizationServer_Base, AuthorizationServer_Relationships {
}
interface AuthorizationServer_FormattedResult {
}
interface AuthorizationServer_Select {
}
interface AuthorizationServer_Expand {
}
interface AuthorizationServer_Filter {
}
interface AuthorizationServer_Create extends AuthorizationServer {
}
interface AuthorizationServer_Update extends AuthorizationServer {
}
interface AzureServiceConnection_Base extends WebEntity {
}
interface AzureServiceConnection_Fixed extends WebEntity_Fixed {
  azureserviceconnectionid: string;
}
interface AzureServiceConnection extends AzureServiceConnection_Base, AzureServiceConnection_Relationships {
}
interface AzureServiceConnection_Relationships {
}
interface AzureServiceConnection_Result extends AzureServiceConnection_Base, AzureServiceConnection_Relationships {
}
interface AzureServiceConnection_FormattedResult {
}
interface AzureServiceConnection_Select {
}
interface AzureServiceConnection_Expand {
}
interface AzureServiceConnection_Filter {
}
interface AzureServiceConnection_Create extends AzureServiceConnection {
}
interface AzureServiceConnection_Update extends AzureServiceConnection {
}
interface bot_Base extends WebEntity {
}
interface bot_Fixed extends WebEntity_Fixed {
  botid: string;
}
interface bot extends bot_Base, bot_Relationships {
}
interface bot_Relationships {
}
interface bot_Result extends bot_Base, bot_Relationships {
}
interface bot_FormattedResult {
}
interface bot_Select {
}
interface bot_Expand {
}
interface bot_Filter {
}
interface bot_Create extends bot {
}
interface bot_Update extends bot {
}
interface bot_botcomponent_Base extends WebEntity {
}
interface bot_botcomponent_Fixed extends WebEntity_Fixed {
  bot_botcomponentid: string;
}
interface bot_botcomponent extends bot_botcomponent_Base, bot_botcomponent_Relationships {
}
interface bot_botcomponent_Relationships {
}
interface bot_botcomponent_Result extends bot_botcomponent_Base, bot_botcomponent_Relationships {
}
interface bot_botcomponent_FormattedResult {
}
interface bot_botcomponent_Select {
}
interface bot_botcomponent_Expand {
}
interface bot_botcomponent_Filter {
}
interface bot_botcomponent_Create extends bot_botcomponent {
}
interface bot_botcomponent_Update extends bot_botcomponent {
}
interface bot_environmentvariabledefinition_Base extends WebEntity {
}
interface bot_environmentvariabledefinition_Fixed extends WebEntity_Fixed {
  bot_environmentvariabledefinitionid: string;
}
interface bot_environmentvariabledefinition extends bot_environmentvariabledefinition_Base, bot_environmentvariabledefinition_Relationships {
}
interface bot_environmentvariabledefinition_Relationships {
}
interface bot_environmentvariabledefinition_Result extends bot_environmentvariabledefinition_Base, bot_environmentvariabledefinition_Relationships {
}
interface bot_environmentvariabledefinition_FormattedResult {
}
interface bot_environmentvariabledefinition_Select {
}
interface bot_environmentvariabledefinition_Expand {
}
interface bot_environmentvariabledefinition_Filter {
}
interface bot_environmentvariabledefinition_Create extends bot_environmentvariabledefinition {
}
interface bot_environmentvariabledefinition_Update extends bot_environmentvariabledefinition {
}
interface botcomponent_Base extends WebEntity {
}
interface botcomponent_Fixed extends WebEntity_Fixed {
  botcomponentid: string;
}
interface botcomponent extends botcomponent_Base, botcomponent_Relationships {
}
interface botcomponent_Relationships {
}
interface botcomponent_Result extends botcomponent_Base, botcomponent_Relationships {
}
interface botcomponent_FormattedResult {
}
interface botcomponent_Select {
}
interface botcomponent_Expand {
}
interface botcomponent_Filter {
}
interface botcomponent_Create extends botcomponent {
}
interface botcomponent_Update extends botcomponent {
}
interface botcomponent_botcomponent_Base extends WebEntity {
}
interface botcomponent_botcomponent_Fixed extends WebEntity_Fixed {
  botcomponent_botcomponentid: string;
}
interface botcomponent_botcomponent extends botcomponent_botcomponent_Base, botcomponent_botcomponent_Relationships {
}
interface botcomponent_botcomponent_Relationships {
}
interface botcomponent_botcomponent_Result extends botcomponent_botcomponent_Base, botcomponent_botcomponent_Relationships {
}
interface botcomponent_botcomponent_FormattedResult {
}
interface botcomponent_botcomponent_Select {
}
interface botcomponent_botcomponent_Expand {
}
interface botcomponent_botcomponent_Filter {
}
interface botcomponent_botcomponent_Create extends botcomponent_botcomponent {
}
interface botcomponent_botcomponent_Update extends botcomponent_botcomponent {
}
interface botcomponent_environmentvariabledefinition_Base extends WebEntity {
}
interface botcomponent_environmentvariabledefinition_Fixed extends WebEntity_Fixed {
  botcomponent_environmentvariabledefinitionid: string;
}
interface botcomponent_environmentvariabledefinition extends botcomponent_environmentvariabledefinition_Base, botcomponent_environmentvariabledefinition_Relationships {
}
interface botcomponent_environmentvariabledefinition_Relationships {
}
interface botcomponent_environmentvariabledefinition_Result extends botcomponent_environmentvariabledefinition_Base, botcomponent_environmentvariabledefinition_Relationships {
}
interface botcomponent_environmentvariabledefinition_FormattedResult {
}
interface botcomponent_environmentvariabledefinition_Select {
}
interface botcomponent_environmentvariabledefinition_Expand {
}
interface botcomponent_environmentvariabledefinition_Filter {
}
interface botcomponent_environmentvariabledefinition_Create extends botcomponent_environmentvariabledefinition {
}
interface botcomponent_environmentvariabledefinition_Update extends botcomponent_environmentvariabledefinition {
}
interface botcomponent_workflow_Base extends WebEntity {
}
interface botcomponent_workflow_Fixed extends WebEntity_Fixed {
  botcomponent_workflowid: string;
}
interface botcomponent_workflow extends botcomponent_workflow_Base, botcomponent_workflow_Relationships {
}
interface botcomponent_workflow_Relationships {
}
interface botcomponent_workflow_Result extends botcomponent_workflow_Base, botcomponent_workflow_Relationships {
}
interface botcomponent_workflow_FormattedResult {
}
interface botcomponent_workflow_Select {
}
interface botcomponent_workflow_Expand {
}
interface botcomponent_workflow_Filter {
}
interface botcomponent_workflow_Create extends botcomponent_workflow {
}
interface botcomponent_workflow_Update extends botcomponent_workflow {
}
interface BulkDeleteFailure_Base extends WebEntity {
}
interface BulkDeleteFailure_Fixed extends WebEntity_Fixed {
  bulkdeletefailureid: string;
}
interface BulkDeleteFailure extends BulkDeleteFailure_Base, BulkDeleteFailure_Relationships {
}
interface BulkDeleteFailure_Relationships {
}
interface BulkDeleteFailure_Result extends BulkDeleteFailure_Base, BulkDeleteFailure_Relationships {
}
interface BulkDeleteFailure_FormattedResult {
}
interface BulkDeleteFailure_Select {
}
interface BulkDeleteFailure_Expand {
}
interface BulkDeleteFailure_Filter {
}
interface BulkDeleteFailure_Create extends BulkDeleteFailure {
}
interface BulkDeleteFailure_Update extends BulkDeleteFailure {
}
interface BulkDeleteOperation_Base extends WebEntity {
}
interface BulkDeleteOperation_Fixed extends WebEntity_Fixed {
  bulkdeleteoperationid: string;
}
interface BulkDeleteOperation extends BulkDeleteOperation_Base, BulkDeleteOperation_Relationships {
}
interface BulkDeleteOperation_Relationships {
}
interface BulkDeleteOperation_Result extends BulkDeleteOperation_Base, BulkDeleteOperation_Relationships {
}
interface BulkDeleteOperation_FormattedResult {
}
interface BulkDeleteOperation_Select {
}
interface BulkDeleteOperation_Expand {
}
interface BulkDeleteOperation_Filter {
}
interface BulkDeleteOperation_Create extends BulkDeleteOperation {
}
interface BulkDeleteOperation_Update extends BulkDeleteOperation {
}
interface BusinessDataLocalizedLabel_Base extends WebEntity {
}
interface BusinessDataLocalizedLabel_Fixed extends WebEntity_Fixed {
  businessdatalocalizedlabelid: string;
}
interface BusinessDataLocalizedLabel extends BusinessDataLocalizedLabel_Base, BusinessDataLocalizedLabel_Relationships {
}
interface BusinessDataLocalizedLabel_Relationships {
}
interface BusinessDataLocalizedLabel_Result extends BusinessDataLocalizedLabel_Base, BusinessDataLocalizedLabel_Relationships {
}
interface BusinessDataLocalizedLabel_FormattedResult {
}
interface BusinessDataLocalizedLabel_Select {
}
interface BusinessDataLocalizedLabel_Expand {
}
interface BusinessDataLocalizedLabel_Filter {
}
interface BusinessDataLocalizedLabel_Create extends BusinessDataLocalizedLabel {
}
interface BusinessDataLocalizedLabel_Update extends BusinessDataLocalizedLabel {
}
interface BusinessProcessFlowInstance_Base extends WebEntity {
}
interface BusinessProcessFlowInstance_Fixed extends WebEntity_Fixed {
  businessprocessflowinstanceid: string;
}
interface BusinessProcessFlowInstance extends BusinessProcessFlowInstance_Base, BusinessProcessFlowInstance_Relationships {
}
interface BusinessProcessFlowInstance_Relationships {
}
interface BusinessProcessFlowInstance_Result extends BusinessProcessFlowInstance_Base, BusinessProcessFlowInstance_Relationships {
}
interface BusinessProcessFlowInstance_FormattedResult {
}
interface BusinessProcessFlowInstance_Select {
}
interface BusinessProcessFlowInstance_Expand {
}
interface BusinessProcessFlowInstance_Filter {
}
interface BusinessProcessFlowInstance_Create extends BusinessProcessFlowInstance {
}
interface BusinessProcessFlowInstance_Update extends BusinessProcessFlowInstance {
}
interface BusinessUnit_Base extends WebEntity {
}
interface BusinessUnit_Fixed extends WebEntity_Fixed {
  businessunitid: string;
}
interface BusinessUnit extends BusinessUnit_Base, BusinessUnit_Relationships {
}
interface BusinessUnit_Relationships {
}
interface BusinessUnit_Result extends BusinessUnit_Base, BusinessUnit_Relationships {
}
interface BusinessUnit_FormattedResult {
}
interface BusinessUnit_Select {
}
interface BusinessUnit_Expand {
}
interface BusinessUnit_Filter {
}
interface BusinessUnit_Create extends BusinessUnit {
}
interface BusinessUnit_Update extends BusinessUnit {
}
interface BusinessUnitMap_Base extends WebEntity {
}
interface BusinessUnitMap_Fixed extends WebEntity_Fixed {
  businessunitmapid: string;
}
interface BusinessUnitMap extends BusinessUnitMap_Base, BusinessUnitMap_Relationships {
}
interface BusinessUnitMap_Relationships {
}
interface BusinessUnitMap_Result extends BusinessUnitMap_Base, BusinessUnitMap_Relationships {
}
interface BusinessUnitMap_FormattedResult {
}
interface BusinessUnitMap_Select {
}
interface BusinessUnitMap_Expand {
}
interface BusinessUnitMap_Filter {
}
interface BusinessUnitMap_Create extends BusinessUnitMap {
}
interface BusinessUnitMap_Update extends BusinessUnitMap {
}
interface BusinessUnitNewsArticle_Base extends WebEntity {
}
interface BusinessUnitNewsArticle_Fixed extends WebEntity_Fixed {
  businessunitnewsarticleid: string;
}
interface BusinessUnitNewsArticle extends BusinessUnitNewsArticle_Base, BusinessUnitNewsArticle_Relationships {
}
interface BusinessUnitNewsArticle_Relationships {
}
interface BusinessUnitNewsArticle_Result extends BusinessUnitNewsArticle_Base, BusinessUnitNewsArticle_Relationships {
}
interface BusinessUnitNewsArticle_FormattedResult {
}
interface BusinessUnitNewsArticle_Select {
}
interface BusinessUnitNewsArticle_Expand {
}
interface BusinessUnitNewsArticle_Filter {
}
interface BusinessUnitNewsArticle_Create extends BusinessUnitNewsArticle {
}
interface BusinessUnitNewsArticle_Update extends BusinessUnitNewsArticle {
}
interface Calendar_Base extends WebEntity {
}
interface Calendar_Fixed extends WebEntity_Fixed {
  calendarid: string;
}
interface Calendar extends Calendar_Base, Calendar_Relationships {
}
interface Calendar_Relationships {
}
interface Calendar_Result extends Calendar_Base, Calendar_Relationships {
}
interface Calendar_FormattedResult {
}
interface Calendar_Select {
}
interface Calendar_Expand {
}
interface Calendar_Filter {
}
interface Calendar_Create extends Calendar {
}
interface Calendar_Update extends Calendar {
}
interface CalendarRule_Base extends WebEntity {
}
interface CalendarRule_Fixed extends WebEntity_Fixed {
  calendarruleid: string;
}
interface CalendarRule extends CalendarRule_Base, CalendarRule_Relationships {
}
interface CalendarRule_Relationships {
}
interface CalendarRule_Result extends CalendarRule_Base, CalendarRule_Relationships {
}
interface CalendarRule_FormattedResult {
}
interface CalendarRule_Select {
}
interface CalendarRule_Expand {
}
interface CalendarRule_Filter {
}
interface CalendarRule_Create extends CalendarRule {
}
interface CalendarRule_Update extends CalendarRule {
}
interface CallbackRegistration_Base extends WebEntity {
}
interface CallbackRegistration_Fixed extends WebEntity_Fixed {
  callbackregistrationid: string;
}
interface CallbackRegistration extends CallbackRegistration_Base, CallbackRegistration_Relationships {
}
interface CallbackRegistration_Relationships {
}
interface CallbackRegistration_Result extends CallbackRegistration_Base, CallbackRegistration_Relationships {
}
interface CallbackRegistration_FormattedResult {
}
interface CallbackRegistration_Select {
}
interface CallbackRegistration_Expand {
}
interface CallbackRegistration_Filter {
}
interface CallbackRegistration_Create extends CallbackRegistration {
}
interface CallbackRegistration_Update extends CallbackRegistration {
}
interface CanvasApp_Base extends WebEntity {
}
interface CanvasApp_Fixed extends WebEntity_Fixed {
  canvasappid: string;
}
interface CanvasApp extends CanvasApp_Base, CanvasApp_Relationships {
}
interface CanvasApp_Relationships {
}
interface CanvasApp_Result extends CanvasApp_Base, CanvasApp_Relationships {
}
interface CanvasApp_FormattedResult {
}
interface CanvasApp_Select {
}
interface CanvasApp_Expand {
}
interface CanvasApp_Filter {
}
interface CanvasApp_Create extends CanvasApp {
}
interface CanvasApp_Update extends CanvasApp {
}
interface CanvasAppExtendedMetadata_Base extends WebEntity {
}
interface CanvasAppExtendedMetadata_Fixed extends WebEntity_Fixed {
  canvasappextendedmetadataid: string;
}
interface CanvasAppExtendedMetadata extends CanvasAppExtendedMetadata_Base, CanvasAppExtendedMetadata_Relationships {
}
interface CanvasAppExtendedMetadata_Relationships {
}
interface CanvasAppExtendedMetadata_Result extends CanvasAppExtendedMetadata_Base, CanvasAppExtendedMetadata_Relationships {
}
interface CanvasAppExtendedMetadata_FormattedResult {
}
interface CanvasAppExtendedMetadata_Select {
}
interface CanvasAppExtendedMetadata_Expand {
}
interface CanvasAppExtendedMetadata_Filter {
}
interface CanvasAppExtendedMetadata_Create extends CanvasAppExtendedMetadata {
}
interface CanvasAppExtendedMetadata_Update extends CanvasAppExtendedMetadata {
}
interface CardType_Base extends WebEntity {
}
interface CardType_Fixed extends WebEntity_Fixed {
  cardtypeid: string;
}
interface CardType extends CardType_Base, CardType_Relationships {
}
interface CardType_Relationships {
}
interface CardType_Result extends CardType_Base, CardType_Relationships {
}
interface CardType_FormattedResult {
}
interface CardType_Select {
}
interface CardType_Expand {
}
interface CardType_Filter {
}
interface CardType_Create extends CardType {
}
interface CardType_Update extends CardType {
}
interface cascadegrantrevokeaccessrecordstracker_Base extends WebEntity {
}
interface cascadegrantrevokeaccessrecordstracker_Fixed extends WebEntity_Fixed {
  cascadegrantrevokeaccessrecordstrackerid: string;
}
interface cascadegrantrevokeaccessrecordstracker extends cascadegrantrevokeaccessrecordstracker_Base, cascadegrantrevokeaccessrecordstracker_Relationships {
}
interface cascadegrantrevokeaccessrecordstracker_Relationships {
}
interface cascadegrantrevokeaccessrecordstracker_Result extends cascadegrantrevokeaccessrecordstracker_Base, cascadegrantrevokeaccessrecordstracker_Relationships {
}
interface cascadegrantrevokeaccessrecordstracker_FormattedResult {
}
interface cascadegrantrevokeaccessrecordstracker_Select {
}
interface cascadegrantrevokeaccessrecordstracker_Expand {
}
interface cascadegrantrevokeaccessrecordstracker_Filter {
}
interface cascadegrantrevokeaccessrecordstracker_Create extends cascadegrantrevokeaccessrecordstracker {
}
interface cascadegrantrevokeaccessrecordstracker_Update extends cascadegrantrevokeaccessrecordstracker {
}
interface cascadegrantrevokeaccessversiontracker_Base extends WebEntity {
}
interface cascadegrantrevokeaccessversiontracker_Fixed extends WebEntity_Fixed {
  cascadegrantrevokeaccessversiontrackerid: string;
}
interface cascadegrantrevokeaccessversiontracker extends cascadegrantrevokeaccessversiontracker_Base, cascadegrantrevokeaccessversiontracker_Relationships {
}
interface cascadegrantrevokeaccessversiontracker_Relationships {
}
interface cascadegrantrevokeaccessversiontracker_Result extends cascadegrantrevokeaccessversiontracker_Base, cascadegrantrevokeaccessversiontracker_Relationships {
}
interface cascadegrantrevokeaccessversiontracker_FormattedResult {
}
interface cascadegrantrevokeaccessversiontracker_Select {
}
interface cascadegrantrevokeaccessversiontracker_Expand {
}
interface cascadegrantrevokeaccessversiontracker_Filter {
}
interface cascadegrantrevokeaccessversiontracker_Create extends cascadegrantrevokeaccessversiontracker {
}
interface cascadegrantrevokeaccessversiontracker_Update extends cascadegrantrevokeaccessversiontracker {
}
interface Catalog_Base extends WebEntity {
}
interface Catalog_Fixed extends WebEntity_Fixed {
  catalogid: string;
}
interface Catalog extends Catalog_Base, Catalog_Relationships {
}
interface Catalog_Relationships {
}
interface Catalog_Result extends Catalog_Base, Catalog_Relationships {
}
interface Catalog_FormattedResult {
}
interface Catalog_Select {
}
interface Catalog_Expand {
}
interface Catalog_Filter {
}
interface Catalog_Create extends Catalog {
}
interface Catalog_Update extends Catalog {
}
interface CatalogAssignment_Base extends WebEntity {
}
interface CatalogAssignment_Fixed extends WebEntity_Fixed {
  catalogassignmentid: string;
}
interface CatalogAssignment extends CatalogAssignment_Base, CatalogAssignment_Relationships {
}
interface CatalogAssignment_Relationships {
}
interface CatalogAssignment_Result extends CatalogAssignment_Base, CatalogAssignment_Relationships {
}
interface CatalogAssignment_FormattedResult {
}
interface CatalogAssignment_Select {
}
interface CatalogAssignment_Expand {
}
interface CatalogAssignment_Filter {
}
interface CatalogAssignment_Create extends CatalogAssignment {
}
interface CatalogAssignment_Update extends CatalogAssignment {
}
interface Category_Base extends WebEntity {
}
interface Category_Fixed extends WebEntity_Fixed {
  categoryid: string;
}
interface Category extends Category_Base, Category_Relationships {
}
interface Category_Relationships {
}
interface Category_Result extends Category_Base, Category_Relationships {
}
interface Category_FormattedResult {
}
interface Category_Select {
}
interface Category_Expand {
}
interface Category_Filter {
}
interface Category_Create extends Category {
}
interface Category_Update extends Category {
}
interface ChannelAccessProfile_Base extends WebEntity {
}
interface ChannelAccessProfile_Fixed extends WebEntity_Fixed {
  channelaccessprofileid: string;
}
interface ChannelAccessProfile extends ChannelAccessProfile_Base, ChannelAccessProfile_Relationships {
}
interface ChannelAccessProfile_Relationships {
}
interface ChannelAccessProfile_Result extends ChannelAccessProfile_Base, ChannelAccessProfile_Relationships {
}
interface ChannelAccessProfile_FormattedResult {
}
interface ChannelAccessProfile_Select {
}
interface ChannelAccessProfile_Expand {
}
interface ChannelAccessProfile_Filter {
}
interface ChannelAccessProfile_Create extends ChannelAccessProfile {
}
interface ChannelAccessProfile_Update extends ChannelAccessProfile {
}
interface ChannelAccessProfileEntityAccessLevel_Base extends WebEntity {
}
interface ChannelAccessProfileEntityAccessLevel_Fixed extends WebEntity_Fixed {
  channelaccessprofileentityaccesslevelid: string;
}
interface ChannelAccessProfileEntityAccessLevel extends ChannelAccessProfileEntityAccessLevel_Base, ChannelAccessProfileEntityAccessLevel_Relationships {
}
interface ChannelAccessProfileEntityAccessLevel_Relationships {
}
interface ChannelAccessProfileEntityAccessLevel_Result extends ChannelAccessProfileEntityAccessLevel_Base, ChannelAccessProfileEntityAccessLevel_Relationships {
}
interface ChannelAccessProfileEntityAccessLevel_FormattedResult {
}
interface ChannelAccessProfileEntityAccessLevel_Select {
}
interface ChannelAccessProfileEntityAccessLevel_Expand {
}
interface ChannelAccessProfileEntityAccessLevel_Filter {
}
interface ChannelAccessProfileEntityAccessLevel_Create extends ChannelAccessProfileEntityAccessLevel {
}
interface ChannelAccessProfileEntityAccessLevel_Update extends ChannelAccessProfileEntityAccessLevel {
}
interface ChannelAccessProfileRule_Base extends WebEntity {
}
interface ChannelAccessProfileRule_Fixed extends WebEntity_Fixed {
  channelaccessprofileruleid: string;
}
interface ChannelAccessProfileRule extends ChannelAccessProfileRule_Base, ChannelAccessProfileRule_Relationships {
}
interface ChannelAccessProfileRule_Relationships {
}
interface ChannelAccessProfileRule_Result extends ChannelAccessProfileRule_Base, ChannelAccessProfileRule_Relationships {
}
interface ChannelAccessProfileRule_FormattedResult {
}
interface ChannelAccessProfileRule_Select {
}
interface ChannelAccessProfileRule_Expand {
}
interface ChannelAccessProfileRule_Filter {
}
interface ChannelAccessProfileRule_Create extends ChannelAccessProfileRule {
}
interface ChannelAccessProfileRule_Update extends ChannelAccessProfileRule {
}
interface ChannelAccessProfileRuleItem_Base extends WebEntity {
}
interface ChannelAccessProfileRuleItem_Fixed extends WebEntity_Fixed {
  channelaccessprofileruleitemid: string;
}
interface ChannelAccessProfileRuleItem extends ChannelAccessProfileRuleItem_Base, ChannelAccessProfileRuleItem_Relationships {
}
interface ChannelAccessProfileRuleItem_Relationships {
}
interface ChannelAccessProfileRuleItem_Result extends ChannelAccessProfileRuleItem_Base, ChannelAccessProfileRuleItem_Relationships {
}
interface ChannelAccessProfileRuleItem_FormattedResult {
}
interface ChannelAccessProfileRuleItem_Select {
}
interface ChannelAccessProfileRuleItem_Expand {
}
interface ChannelAccessProfileRuleItem_Filter {
}
interface ChannelAccessProfileRuleItem_Create extends ChannelAccessProfileRuleItem {
}
interface ChannelAccessProfileRuleItem_Update extends ChannelAccessProfileRuleItem {
}
interface ChannelProperty_Base extends WebEntity {
}
interface ChannelProperty_Fixed extends WebEntity_Fixed {
  channelpropertyid: string;
}
interface ChannelProperty extends ChannelProperty_Base, ChannelProperty_Relationships {
}
interface ChannelProperty_Relationships {
}
interface ChannelProperty_Result extends ChannelProperty_Base, ChannelProperty_Relationships {
}
interface ChannelProperty_FormattedResult {
}
interface ChannelProperty_Select {
}
interface ChannelProperty_Expand {
}
interface ChannelProperty_Filter {
}
interface ChannelProperty_Create extends ChannelProperty {
}
interface ChannelProperty_Update extends ChannelProperty {
}
interface ChannelPropertyGroup_Base extends WebEntity {
}
interface ChannelPropertyGroup_Fixed extends WebEntity_Fixed {
  channelpropertygroupid: string;
}
interface ChannelPropertyGroup extends ChannelPropertyGroup_Base, ChannelPropertyGroup_Relationships {
}
interface ChannelPropertyGroup_Relationships {
}
interface ChannelPropertyGroup_Result extends ChannelPropertyGroup_Base, ChannelPropertyGroup_Relationships {
}
interface ChannelPropertyGroup_FormattedResult {
}
interface ChannelPropertyGroup_Select {
}
interface ChannelPropertyGroup_Expand {
}
interface ChannelPropertyGroup_Filter {
}
interface ChannelPropertyGroup_Create extends ChannelPropertyGroup {
}
interface ChannelPropertyGroup_Update extends ChannelPropertyGroup {
}
interface ClientUpdate_Base extends WebEntity {
}
interface ClientUpdate_Fixed extends WebEntity_Fixed {
  clientupdateid: string;
}
interface ClientUpdate extends ClientUpdate_Base, ClientUpdate_Relationships {
}
interface ClientUpdate_Relationships {
}
interface ClientUpdate_Result extends ClientUpdate_Base, ClientUpdate_Relationships {
}
interface ClientUpdate_FormattedResult {
}
interface ClientUpdate_Select {
}
interface ClientUpdate_Expand {
}
interface ClientUpdate_Filter {
}
interface ClientUpdate_Create extends ClientUpdate {
}
interface ClientUpdate_Update extends ClientUpdate {
}
interface ColumnMapping_Base extends WebEntity {
}
interface ColumnMapping_Fixed extends WebEntity_Fixed {
  columnmappingid: string;
}
interface ColumnMapping extends ColumnMapping_Base, ColumnMapping_Relationships {
}
interface ColumnMapping_Relationships {
}
interface ColumnMapping_Result extends ColumnMapping_Base, ColumnMapping_Relationships {
}
interface ColumnMapping_FormattedResult {
}
interface ColumnMapping_Select {
}
interface ColumnMapping_Expand {
}
interface ColumnMapping_Filter {
}
interface ColumnMapping_Create extends ColumnMapping {
}
interface ColumnMapping_Update extends ColumnMapping {
}
interface ComplexControl_Base extends WebEntity {
}
interface ComplexControl_Fixed extends WebEntity_Fixed {
  complexcontrolid: string;
}
interface ComplexControl extends ComplexControl_Base, ComplexControl_Relationships {
}
interface ComplexControl_Relationships {
}
interface ComplexControl_Result extends ComplexControl_Base, ComplexControl_Relationships {
}
interface ComplexControl_FormattedResult {
}
interface ComplexControl_Select {
}
interface ComplexControl_Expand {
}
interface ComplexControl_Filter {
}
interface ComplexControl_Create extends ComplexControl {
}
interface ComplexControl_Update extends ComplexControl {
}
interface Connection_Base extends WebEntity {
}
interface Connection_Fixed extends WebEntity_Fixed {
  connectionid: string;
}
interface Connection extends Connection_Base, Connection_Relationships {
}
interface Connection_Relationships {
}
interface Connection_Result extends Connection_Base, Connection_Relationships {
}
interface Connection_FormattedResult {
}
interface Connection_Select {
}
interface Connection_Expand {
}
interface Connection_Filter {
}
interface Connection_Create extends Connection {
}
interface Connection_Update extends Connection {
}
interface connectionreference_Base extends WebEntity {
}
interface connectionreference_Fixed extends WebEntity_Fixed {
  connectionreferenceid: string;
}
interface connectionreference extends connectionreference_Base, connectionreference_Relationships {
}
interface connectionreference_Relationships {
}
interface connectionreference_Result extends connectionreference_Base, connectionreference_Relationships {
}
interface connectionreference_FormattedResult {
}
interface connectionreference_Select {
}
interface connectionreference_Expand {
}
interface connectionreference_Filter {
}
interface connectionreference_Create extends connectionreference {
}
interface connectionreference_Update extends connectionreference {
}
interface ConnectionRole_Base extends WebEntity {
}
interface ConnectionRole_Fixed extends WebEntity_Fixed {
  connectionroleid: string;
}
interface ConnectionRole extends ConnectionRole_Base, ConnectionRole_Relationships {
}
interface ConnectionRole_Relationships {
}
interface ConnectionRole_Result extends ConnectionRole_Base, ConnectionRole_Relationships {
}
interface ConnectionRole_FormattedResult {
}
interface ConnectionRole_Select {
}
interface ConnectionRole_Expand {
}
interface ConnectionRole_Filter {
}
interface ConnectionRole_Create extends ConnectionRole {
}
interface ConnectionRole_Update extends ConnectionRole {
}
interface ConnectionRoleAssociation_Base extends WebEntity {
}
interface ConnectionRoleAssociation_Fixed extends WebEntity_Fixed {
  connectionroleassociationid: string;
}
interface ConnectionRoleAssociation extends ConnectionRoleAssociation_Base, ConnectionRoleAssociation_Relationships {
}
interface ConnectionRoleAssociation_Relationships {
}
interface ConnectionRoleAssociation_Result extends ConnectionRoleAssociation_Base, ConnectionRoleAssociation_Relationships {
}
interface ConnectionRoleAssociation_FormattedResult {
}
interface ConnectionRoleAssociation_Select {
}
interface ConnectionRoleAssociation_Expand {
}
interface ConnectionRoleAssociation_Filter {
}
interface ConnectionRoleAssociation_Create extends ConnectionRoleAssociation {
}
interface ConnectionRoleAssociation_Update extends ConnectionRoleAssociation {
}
interface ConnectionRoleObjectTypeCode_Base extends WebEntity {
}
interface ConnectionRoleObjectTypeCode_Fixed extends WebEntity_Fixed {
  connectionroleobjecttypecodeid: string;
}
interface ConnectionRoleObjectTypeCode extends ConnectionRoleObjectTypeCode_Base, ConnectionRoleObjectTypeCode_Relationships {
}
interface ConnectionRoleObjectTypeCode_Relationships {
}
interface ConnectionRoleObjectTypeCode_Result extends ConnectionRoleObjectTypeCode_Base, ConnectionRoleObjectTypeCode_Relationships {
}
interface ConnectionRoleObjectTypeCode_FormattedResult {
}
interface ConnectionRoleObjectTypeCode_Select {
}
interface ConnectionRoleObjectTypeCode_Expand {
}
interface ConnectionRoleObjectTypeCode_Filter {
}
interface ConnectionRoleObjectTypeCode_Create extends ConnectionRoleObjectTypeCode {
}
interface ConnectionRoleObjectTypeCode_Update extends ConnectionRoleObjectTypeCode {
}
interface connector_Base extends WebEntity {
}
interface connector_Fixed extends WebEntity_Fixed {
  connectorid: string;
}
interface connector extends connector_Base, connector_Relationships {
}
interface connector_Relationships {
}
interface connector_Result extends connector_Base, connector_Relationships {
}
interface connector_FormattedResult {
}
interface connector_Select {
}
interface connector_Expand {
}
interface connector_Filter {
}
interface connector_Create extends connector {
}
interface connector_Update extends connector {
}
interface Contact_Base extends WebEntity {
}
interface Contact_Fixed extends WebEntity_Fixed {
  contactid: string;
}
interface Contact extends Contact_Base, Contact_Relationships {
}
interface Contact_Relationships {
}
interface Contact_Result extends Contact_Base, Contact_Relationships {
}
interface Contact_FormattedResult {
}
interface Contact_Select {
}
interface Contact_Expand {
}
interface Contact_Filter {
}
interface Contact_Create extends Contact {
}
interface Contact_Update extends Contact {
}
interface conversationtranscript_Base extends WebEntity {
}
interface conversationtranscript_Fixed extends WebEntity_Fixed {
  conversationtranscriptid: string;
}
interface conversationtranscript extends conversationtranscript_Base, conversationtranscript_Relationships {
}
interface conversationtranscript_Relationships {
}
interface conversationtranscript_Result extends conversationtranscript_Base, conversationtranscript_Relationships {
}
interface conversationtranscript_FormattedResult {
}
interface conversationtranscript_Select {
}
interface conversationtranscript_Expand {
}
interface conversationtranscript_Filter {
}
interface conversationtranscript_Create extends conversationtranscript {
}
interface conversationtranscript_Update extends conversationtranscript {
}
interface ConvertRule_Base extends WebEntity {
}
interface ConvertRule_Fixed extends WebEntity_Fixed {
  convertruleid: string;
}
interface ConvertRule extends ConvertRule_Base, ConvertRule_Relationships {
}
interface ConvertRule_Relationships {
}
interface ConvertRule_Result extends ConvertRule_Base, ConvertRule_Relationships {
}
interface ConvertRule_FormattedResult {
}
interface ConvertRule_Select {
}
interface ConvertRule_Expand {
}
interface ConvertRule_Filter {
}
interface ConvertRule_Create extends ConvertRule {
}
interface ConvertRule_Update extends ConvertRule {
}
interface ConvertRuleItem_Base extends WebEntity {
}
interface ConvertRuleItem_Fixed extends WebEntity_Fixed {
  convertruleitemid: string;
}
interface ConvertRuleItem extends ConvertRuleItem_Base, ConvertRuleItem_Relationships {
}
interface ConvertRuleItem_Relationships {
}
interface ConvertRuleItem_Result extends ConvertRuleItem_Base, ConvertRuleItem_Relationships {
}
interface ConvertRuleItem_FormattedResult {
}
interface ConvertRuleItem_Select {
}
interface ConvertRuleItem_Expand {
}
interface ConvertRuleItem_Filter {
}
interface ConvertRuleItem_Create extends ConvertRuleItem {
}
interface ConvertRuleItem_Update extends ConvertRuleItem {
}
interface CustomAPI_Base extends WebEntity {
}
interface CustomAPI_Fixed extends WebEntity_Fixed {
  customapiid: string;
}
interface CustomAPI extends CustomAPI_Base, CustomAPI_Relationships {
}
interface CustomAPI_Relationships {
}
interface CustomAPI_Result extends CustomAPI_Base, CustomAPI_Relationships {
}
interface CustomAPI_FormattedResult {
}
interface CustomAPI_Select {
}
interface CustomAPI_Expand {
}
interface CustomAPI_Filter {
}
interface CustomAPI_Create extends CustomAPI {
}
interface CustomAPI_Update extends CustomAPI {
}
interface CustomAPIRequestParameter_Base extends WebEntity {
}
interface CustomAPIRequestParameter_Fixed extends WebEntity_Fixed {
  customapirequestparameterid: string;
}
interface CustomAPIRequestParameter extends CustomAPIRequestParameter_Base, CustomAPIRequestParameter_Relationships {
}
interface CustomAPIRequestParameter_Relationships {
}
interface CustomAPIRequestParameter_Result extends CustomAPIRequestParameter_Base, CustomAPIRequestParameter_Relationships {
}
interface CustomAPIRequestParameter_FormattedResult {
}
interface CustomAPIRequestParameter_Select {
}
interface CustomAPIRequestParameter_Expand {
}
interface CustomAPIRequestParameter_Filter {
}
interface CustomAPIRequestParameter_Create extends CustomAPIRequestParameter {
}
interface CustomAPIRequestParameter_Update extends CustomAPIRequestParameter {
}
interface CustomAPIResponseProperty_Base extends WebEntity {
}
interface CustomAPIResponseProperty_Fixed extends WebEntity_Fixed {
  customapiresponsepropertyid: string;
}
interface CustomAPIResponseProperty extends CustomAPIResponseProperty_Base, CustomAPIResponseProperty_Relationships {
}
interface CustomAPIResponseProperty_Relationships {
}
interface CustomAPIResponseProperty_Result extends CustomAPIResponseProperty_Base, CustomAPIResponseProperty_Relationships {
}
interface CustomAPIResponseProperty_FormattedResult {
}
interface CustomAPIResponseProperty_Select {
}
interface CustomAPIResponseProperty_Expand {
}
interface CustomAPIResponseProperty_Filter {
}
interface CustomAPIResponseProperty_Create extends CustomAPIResponseProperty {
}
interface CustomAPIResponseProperty_Update extends CustomAPIResponseProperty {
}
interface CustomControl_Base extends WebEntity {
}
interface CustomControl_Fixed extends WebEntity_Fixed {
  customcontrolid: string;
}
interface CustomControl extends CustomControl_Base, CustomControl_Relationships {
}
interface CustomControl_Relationships {
}
interface CustomControl_Result extends CustomControl_Base, CustomControl_Relationships {
}
interface CustomControl_FormattedResult {
}
interface CustomControl_Select {
}
interface CustomControl_Expand {
}
interface CustomControl_Filter {
}
interface CustomControl_Create extends CustomControl {
}
interface CustomControl_Update extends CustomControl {
}
interface CustomControlDefaultConfig_Base extends WebEntity {
}
interface CustomControlDefaultConfig_Fixed extends WebEntity_Fixed {
  customcontroldefaultconfigid: string;
}
interface CustomControlDefaultConfig extends CustomControlDefaultConfig_Base, CustomControlDefaultConfig_Relationships {
}
interface CustomControlDefaultConfig_Relationships {
}
interface CustomControlDefaultConfig_Result extends CustomControlDefaultConfig_Base, CustomControlDefaultConfig_Relationships {
}
interface CustomControlDefaultConfig_FormattedResult {
}
interface CustomControlDefaultConfig_Select {
}
interface CustomControlDefaultConfig_Expand {
}
interface CustomControlDefaultConfig_Filter {
}
interface CustomControlDefaultConfig_Create extends CustomControlDefaultConfig {
}
interface CustomControlDefaultConfig_Update extends CustomControlDefaultConfig {
}
interface CustomControlResource_Base extends WebEntity {
}
interface CustomControlResource_Fixed extends WebEntity_Fixed {
  customcontrolresourceid: string;
}
interface CustomControlResource extends CustomControlResource_Base, CustomControlResource_Relationships {
}
interface CustomControlResource_Relationships {
}
interface CustomControlResource_Result extends CustomControlResource_Base, CustomControlResource_Relationships {
}
interface CustomControlResource_FormattedResult {
}
interface CustomControlResource_Select {
}
interface CustomControlResource_Expand {
}
interface CustomControlResource_Filter {
}
interface CustomControlResource_Create extends CustomControlResource {
}
interface CustomControlResource_Update extends CustomControlResource {
}
interface CustomerAddress_Base extends WebEntity {
}
interface CustomerAddress_Fixed extends WebEntity_Fixed {
  customeraddressid: string;
}
interface CustomerAddress extends CustomerAddress_Base, CustomerAddress_Relationships {
}
interface CustomerAddress_Relationships {
}
interface CustomerAddress_Result extends CustomerAddress_Base, CustomerAddress_Relationships {
}
interface CustomerAddress_FormattedResult {
}
interface CustomerAddress_Select {
}
interface CustomerAddress_Expand {
}
interface CustomerAddress_Filter {
}
interface CustomerAddress_Create extends CustomerAddress {
}
interface CustomerAddress_Update extends CustomerAddress {
}
interface CustomerRelationship_Base extends WebEntity {
}
interface CustomerRelationship_Fixed extends WebEntity_Fixed {
  customerrelationshipid: string;
}
interface CustomerRelationship extends CustomerRelationship_Base, CustomerRelationship_Relationships {
}
interface CustomerRelationship_Relationships {
}
interface CustomerRelationship_Result extends CustomerRelationship_Base, CustomerRelationship_Relationships {
}
interface CustomerRelationship_FormattedResult {
}
interface CustomerRelationship_Select {
}
interface CustomerRelationship_Expand {
}
interface CustomerRelationship_Filter {
}
interface CustomerRelationship_Create extends CustomerRelationship {
}
interface CustomerRelationship_Update extends CustomerRelationship {
}
interface datalakefolder_Base extends WebEntity {
}
interface datalakefolder_Fixed extends WebEntity_Fixed {
  datalakefolderid: string;
}
interface datalakefolder extends datalakefolder_Base, datalakefolder_Relationships {
}
interface datalakefolder_Relationships {
}
interface datalakefolder_Result extends datalakefolder_Base, datalakefolder_Relationships {
}
interface datalakefolder_FormattedResult {
}
interface datalakefolder_Select {
}
interface datalakefolder_Expand {
}
interface datalakefolder_Filter {
}
interface datalakefolder_Create extends datalakefolder {
}
interface datalakefolder_Update extends datalakefolder {
}
interface datalakefolderpermission_Base extends WebEntity {
}
interface datalakefolderpermission_Fixed extends WebEntity_Fixed {
  datalakefolderpermissionid: string;
}
interface datalakefolderpermission extends datalakefolderpermission_Base, datalakefolderpermission_Relationships {
}
interface datalakefolderpermission_Relationships {
}
interface datalakefolderpermission_Result extends datalakefolderpermission_Base, datalakefolderpermission_Relationships {
}
interface datalakefolderpermission_FormattedResult {
}
interface datalakefolderpermission_Select {
}
interface datalakefolderpermission_Expand {
}
interface datalakefolderpermission_Filter {
}
interface datalakefolderpermission_Create extends datalakefolderpermission {
}
interface datalakefolderpermission_Update extends datalakefolderpermission {
}
interface datalakeworkspace_Base extends WebEntity {
}
interface datalakeworkspace_Fixed extends WebEntity_Fixed {
  datalakeworkspaceid: string;
}
interface datalakeworkspace extends datalakeworkspace_Base, datalakeworkspace_Relationships {
}
interface datalakeworkspace_Relationships {
}
interface datalakeworkspace_Result extends datalakeworkspace_Base, datalakeworkspace_Relationships {
}
interface datalakeworkspace_FormattedResult {
}
interface datalakeworkspace_Select {
}
interface datalakeworkspace_Expand {
}
interface datalakeworkspace_Filter {
}
interface datalakeworkspace_Create extends datalakeworkspace {
}
interface datalakeworkspace_Update extends datalakeworkspace {
}
interface datalakeworkspacepermission_Base extends WebEntity {
}
interface datalakeworkspacepermission_Fixed extends WebEntity_Fixed {
  datalakeworkspacepermissionid: string;
}
interface datalakeworkspacepermission extends datalakeworkspacepermission_Base, datalakeworkspacepermission_Relationships {
}
interface datalakeworkspacepermission_Relationships {
}
interface datalakeworkspacepermission_Result extends datalakeworkspacepermission_Base, datalakeworkspacepermission_Relationships {
}
interface datalakeworkspacepermission_FormattedResult {
}
interface datalakeworkspacepermission_Select {
}
interface datalakeworkspacepermission_Expand {
}
interface datalakeworkspacepermission_Filter {
}
interface datalakeworkspacepermission_Create extends datalakeworkspacepermission {
}
interface datalakeworkspacepermission_Update extends datalakeworkspacepermission {
}
interface DataPerformance_Base extends WebEntity {
}
interface DataPerformance_Fixed extends WebEntity_Fixed {
  dataperformanceid: string;
}
interface DataPerformance extends DataPerformance_Base, DataPerformance_Relationships {
}
interface DataPerformance_Relationships {
}
interface DataPerformance_Result extends DataPerformance_Base, DataPerformance_Relationships {
}
interface DataPerformance_FormattedResult {
}
interface DataPerformance_Select {
}
interface DataPerformance_Expand {
}
interface DataPerformance_Filter {
}
interface DataPerformance_Create extends DataPerformance {
}
interface DataPerformance_Update extends DataPerformance {
}
interface DelveActionHub_Base extends WebEntity {
}
interface DelveActionHub_Fixed extends WebEntity_Fixed {
  delveactionhubid: string;
}
interface DelveActionHub extends DelveActionHub_Base, DelveActionHub_Relationships {
}
interface DelveActionHub_Relationships {
}
interface DelveActionHub_Result extends DelveActionHub_Base, DelveActionHub_Relationships {
}
interface DelveActionHub_FormattedResult {
}
interface DelveActionHub_Select {
}
interface DelveActionHub_Expand {
}
interface DelveActionHub_Filter {
}
interface DelveActionHub_Create extends DelveActionHub {
}
interface DelveActionHub_Update extends DelveActionHub {
}
interface Dependency_Base extends WebEntity {
}
interface Dependency_Fixed extends WebEntity_Fixed {
  dependencyid: string;
}
interface Dependency extends Dependency_Base, Dependency_Relationships {
}
interface Dependency_Relationships {
}
interface Dependency_Result extends Dependency_Base, Dependency_Relationships {
}
interface Dependency_FormattedResult {
}
interface Dependency_Select {
}
interface Dependency_Expand {
}
interface Dependency_Filter {
}
interface Dependency_Create extends Dependency {
}
interface Dependency_Update extends Dependency {
}
interface DependencyFeature_Base extends WebEntity {
}
interface DependencyFeature_Fixed extends WebEntity_Fixed {
  dependencyfeatureid: string;
}
interface DependencyFeature extends DependencyFeature_Base, DependencyFeature_Relationships {
}
interface DependencyFeature_Relationships {
}
interface DependencyFeature_Result extends DependencyFeature_Base, DependencyFeature_Relationships {
}
interface DependencyFeature_FormattedResult {
}
interface DependencyFeature_Select {
}
interface DependencyFeature_Expand {
}
interface DependencyFeature_Filter {
}
interface DependencyFeature_Create extends DependencyFeature {
}
interface DependencyFeature_Update extends DependencyFeature {
}
interface DependencyNode_Base extends WebEntity {
}
interface DependencyNode_Fixed extends WebEntity_Fixed {
  dependencynodeid: string;
}
interface DependencyNode extends DependencyNode_Base, DependencyNode_Relationships {
}
interface DependencyNode_Relationships {
}
interface DependencyNode_Result extends DependencyNode_Base, DependencyNode_Relationships {
}
interface DependencyNode_FormattedResult {
}
interface DependencyNode_Select {
}
interface DependencyNode_Expand {
}
interface DependencyNode_Filter {
}
interface DependencyNode_Create extends DependencyNode {
}
interface DependencyNode_Update extends DependencyNode {
}
interface DisplayString_Base extends WebEntity {
}
interface DisplayString_Fixed extends WebEntity_Fixed {
  displaystringid: string;
}
interface DisplayString extends DisplayString_Base, DisplayString_Relationships {
}
interface DisplayString_Relationships {
}
interface DisplayString_Result extends DisplayString_Base, DisplayString_Relationships {
}
interface DisplayString_FormattedResult {
}
interface DisplayString_Select {
}
interface DisplayString_Expand {
}
interface DisplayString_Filter {
}
interface DisplayString_Create extends DisplayString {
}
interface DisplayString_Update extends DisplayString {
}
interface DisplayStringMap_Base extends WebEntity {
}
interface DisplayStringMap_Fixed extends WebEntity_Fixed {
  displaystringmapid: string;
}
interface DisplayStringMap extends DisplayStringMap_Base, DisplayStringMap_Relationships {
}
interface DisplayStringMap_Relationships {
}
interface DisplayStringMap_Result extends DisplayStringMap_Base, DisplayStringMap_Relationships {
}
interface DisplayStringMap_FormattedResult {
}
interface DisplayStringMap_Select {
}
interface DisplayStringMap_Expand {
}
interface DisplayStringMap_Filter {
}
interface DisplayStringMap_Create extends DisplayStringMap {
}
interface DisplayStringMap_Update extends DisplayStringMap {
}
interface DocumentIndex_Base extends WebEntity {
}
interface DocumentIndex_Fixed extends WebEntity_Fixed {
  documentindexid: string;
}
interface DocumentIndex extends DocumentIndex_Base, DocumentIndex_Relationships {
}
interface DocumentIndex_Relationships {
}
interface DocumentIndex_Result extends DocumentIndex_Base, DocumentIndex_Relationships {
}
interface DocumentIndex_FormattedResult {
}
interface DocumentIndex_Select {
}
interface DocumentIndex_Expand {
}
interface DocumentIndex_Filter {
}
interface DocumentIndex_Create extends DocumentIndex {
}
interface DocumentIndex_Update extends DocumentIndex {
}
interface DocumentTemplate_Base extends WebEntity {
}
interface DocumentTemplate_Fixed extends WebEntity_Fixed {
  documenttemplateid: string;
}
interface DocumentTemplate extends DocumentTemplate_Base, DocumentTemplate_Relationships {
}
interface DocumentTemplate_Relationships {
}
interface DocumentTemplate_Result extends DocumentTemplate_Base, DocumentTemplate_Relationships {
}
interface DocumentTemplate_FormattedResult {
}
interface DocumentTemplate_Select {
}
interface DocumentTemplate_Expand {
}
interface DocumentTemplate_Filter {
}
interface DocumentTemplate_Create extends DocumentTemplate {
}
interface DocumentTemplate_Update extends DocumentTemplate {
}
interface DuplicateRecord_Base extends WebEntity {
}
interface DuplicateRecord_Fixed extends WebEntity_Fixed {
  duplicateid: string;
}
interface DuplicateRecord extends DuplicateRecord_Base, DuplicateRecord_Relationships {
}
interface DuplicateRecord_Relationships {
}
interface DuplicateRecord_Result extends DuplicateRecord_Base, DuplicateRecord_Relationships {
}
interface DuplicateRecord_FormattedResult {
}
interface DuplicateRecord_Select {
}
interface DuplicateRecord_Expand {
}
interface DuplicateRecord_Filter {
}
interface DuplicateRecord_Create extends DuplicateRecord {
}
interface DuplicateRecord_Update extends DuplicateRecord {
}
interface DuplicateRule_Base extends WebEntity {
}
interface DuplicateRule_Fixed extends WebEntity_Fixed {
  duplicateruleid: string;
}
interface DuplicateRule extends DuplicateRule_Base, DuplicateRule_Relationships {
}
interface DuplicateRule_Relationships {
}
interface DuplicateRule_Result extends DuplicateRule_Base, DuplicateRule_Relationships {
}
interface DuplicateRule_FormattedResult {
}
interface DuplicateRule_Select {
}
interface DuplicateRule_Expand {
}
interface DuplicateRule_Filter {
}
interface DuplicateRule_Create extends DuplicateRule {
}
interface DuplicateRule_Update extends DuplicateRule {
}
interface DuplicateRuleCondition_Base extends WebEntity {
}
interface DuplicateRuleCondition_Fixed extends WebEntity_Fixed {
  duplicateruleconditionid: string;
}
interface DuplicateRuleCondition extends DuplicateRuleCondition_Base, DuplicateRuleCondition_Relationships {
}
interface DuplicateRuleCondition_Relationships {
}
interface DuplicateRuleCondition_Result extends DuplicateRuleCondition_Base, DuplicateRuleCondition_Relationships {
}
interface DuplicateRuleCondition_FormattedResult {
}
interface DuplicateRuleCondition_Select {
}
interface DuplicateRuleCondition_Expand {
}
interface DuplicateRuleCondition_Filter {
}
interface DuplicateRuleCondition_Create extends DuplicateRuleCondition {
}
interface DuplicateRuleCondition_Update extends DuplicateRuleCondition {
}
interface Email_Base extends WebEntity {
}
interface Email_Fixed extends WebEntity_Fixed {
  activityid: string;
}
interface Email extends Email_Base, Email_Relationships {
}
interface Email_Relationships {
}
interface Email_Result extends Email_Base, Email_Relationships {
}
interface Email_FormattedResult {
}
interface Email_Select {
}
interface Email_Expand {
}
interface Email_Filter {
}
interface Email_Create extends Email {
}
interface Email_Update extends Email {
}
interface EmailHash_Base extends WebEntity {
}
interface EmailHash_Fixed extends WebEntity_Fixed {
  emailhashid: string;
}
interface EmailHash extends EmailHash_Base, EmailHash_Relationships {
}
interface EmailHash_Relationships {
}
interface EmailHash_Result extends EmailHash_Base, EmailHash_Relationships {
}
interface EmailHash_FormattedResult {
}
interface EmailHash_Select {
}
interface EmailHash_Expand {
}
interface EmailHash_Filter {
}
interface EmailHash_Create extends EmailHash {
}
interface EmailHash_Update extends EmailHash {
}
interface EmailSearch_Base extends WebEntity {
}
interface EmailSearch_Fixed extends WebEntity_Fixed {
  emailsearchid: string;
}
interface EmailSearch extends EmailSearch_Base, EmailSearch_Relationships {
}
interface EmailSearch_Relationships {
}
interface EmailSearch_Result extends EmailSearch_Base, EmailSearch_Relationships {
}
interface EmailSearch_FormattedResult {
}
interface EmailSearch_Select {
}
interface EmailSearch_Expand {
}
interface EmailSearch_Filter {
}
interface EmailSearch_Create extends EmailSearch {
}
interface EmailSearch_Update extends EmailSearch {
}
interface EmailServerProfile_Base extends WebEntity {
}
interface EmailServerProfile_Fixed extends WebEntity_Fixed {
  emailserverprofileid: string;
}
interface EmailServerProfile extends EmailServerProfile_Base, EmailServerProfile_Relationships {
}
interface EmailServerProfile_Relationships {
}
interface EmailServerProfile_Result extends EmailServerProfile_Base, EmailServerProfile_Relationships {
}
interface EmailServerProfile_FormattedResult {
}
interface EmailServerProfile_Select {
}
interface EmailServerProfile_Expand {
}
interface EmailServerProfile_Filter {
}
interface EmailServerProfile_Create extends EmailServerProfile {
}
interface EmailServerProfile_Update extends EmailServerProfile {
}
interface EmailSignature_Base extends WebEntity {
}
interface EmailSignature_Fixed extends WebEntity_Fixed {
  emailsignatureid: string;
}
interface EmailSignature extends EmailSignature_Base, EmailSignature_Relationships {
}
interface EmailSignature_Relationships {
}
interface EmailSignature_Result extends EmailSignature_Base, EmailSignature_Relationships {
}
interface EmailSignature_FormattedResult {
}
interface EmailSignature_Select {
}
interface EmailSignature_Expand {
}
interface EmailSignature_Filter {
}
interface EmailSignature_Create extends EmailSignature {
}
interface EmailSignature_Update extends EmailSignature {
}
interface Entity_Base extends WebEntity {
}
interface Entity_Fixed extends WebEntity_Fixed {
  entityid: string;
}
interface Entity extends Entity_Base, Entity_Relationships {
}
interface Entity_Relationships {
}
interface Entity_Result extends Entity_Base, Entity_Relationships {
}
interface Entity_FormattedResult {
}
interface Entity_Select {
}
interface Entity_Expand {
}
interface Entity_Filter {
}
interface Entity_Create extends Entity {
}
interface Entity_Update extends Entity {
}
interface EntityAnalyticsConfig_Base extends WebEntity {
}
interface EntityAnalyticsConfig_Fixed extends WebEntity_Fixed {
  entityanalyticsconfigid: string;
}
interface EntityAnalyticsConfig extends EntityAnalyticsConfig_Base, EntityAnalyticsConfig_Relationships {
}
interface EntityAnalyticsConfig_Relationships {
}
interface EntityAnalyticsConfig_Result extends EntityAnalyticsConfig_Base, EntityAnalyticsConfig_Relationships {
}
interface EntityAnalyticsConfig_FormattedResult {
}
interface EntityAnalyticsConfig_Select {
}
interface EntityAnalyticsConfig_Expand {
}
interface EntityAnalyticsConfig_Filter {
}
interface EntityAnalyticsConfig_Create extends EntityAnalyticsConfig {
}
interface EntityAnalyticsConfig_Update extends EntityAnalyticsConfig {
}
interface EntityDataProvider_Base extends WebEntity {
}
interface EntityDataProvider_Fixed extends WebEntity_Fixed {
  entitydataproviderid: string;
}
interface EntityDataProvider extends EntityDataProvider_Base, EntityDataProvider_Relationships {
}
interface EntityDataProvider_Relationships {
}
interface EntityDataProvider_Result extends EntityDataProvider_Base, EntityDataProvider_Relationships {
}
interface EntityDataProvider_FormattedResult {
}
interface EntityDataProvider_Select {
}
interface EntityDataProvider_Expand {
}
interface EntityDataProvider_Filter {
}
interface EntityDataProvider_Create extends EntityDataProvider {
}
interface EntityDataProvider_Update extends EntityDataProvider {
}
interface EntityDataSource_Base extends WebEntity {
}
interface EntityDataSource_Fixed extends WebEntity_Fixed {
  entitydatasourceid: string;
}
interface EntityDataSource extends EntityDataSource_Base, EntityDataSource_Relationships {
}
interface EntityDataSource_Relationships {
}
interface EntityDataSource_Result extends EntityDataSource_Base, EntityDataSource_Relationships {
}
interface EntityDataSource_FormattedResult {
}
interface EntityDataSource_Select {
}
interface EntityDataSource_Expand {
}
interface EntityDataSource_Filter {
}
interface EntityDataSource_Create extends EntityDataSource {
}
interface EntityDataSource_Update extends EntityDataSource {
}
interface EntityImageConfig_Base extends WebEntity {
}
interface EntityImageConfig_Fixed extends WebEntity_Fixed {
  entityimageconfigid: string;
}
interface EntityImageConfig extends EntityImageConfig_Base, EntityImageConfig_Relationships {
}
interface EntityImageConfig_Relationships {
}
interface EntityImageConfig_Result extends EntityImageConfig_Base, EntityImageConfig_Relationships {
}
interface EntityImageConfig_FormattedResult {
}
interface EntityImageConfig_Select {
}
interface EntityImageConfig_Expand {
}
interface EntityImageConfig_Filter {
}
interface EntityImageConfig_Create extends EntityImageConfig {
}
interface EntityImageConfig_Update extends EntityImageConfig {
}
interface EntityIndex_Base extends WebEntity {
}
interface EntityIndex_Fixed extends WebEntity_Fixed {
  indexid: string;
}
interface EntityIndex extends EntityIndex_Base, EntityIndex_Relationships {
}
interface EntityIndex_Relationships {
}
interface EntityIndex_Result extends EntityIndex_Base, EntityIndex_Relationships {
}
interface EntityIndex_FormattedResult {
}
interface EntityIndex_Select {
}
interface EntityIndex_Expand {
}
interface EntityIndex_Filter {
}
interface EntityIndex_Create extends EntityIndex {
}
interface EntityIndex_Update extends EntityIndex {
}
interface EntityKey_Base extends WebEntity {
}
interface EntityKey_Fixed extends WebEntity_Fixed {
  entitykeyid: string;
}
interface EntityKey extends EntityKey_Base, EntityKey_Relationships {
}
interface EntityKey_Relationships {
}
interface EntityKey_Result extends EntityKey_Base, EntityKey_Relationships {
}
interface EntityKey_FormattedResult {
}
interface EntityKey_Select {
}
interface EntityKey_Expand {
}
interface EntityKey_Filter {
}
interface EntityKey_Create extends EntityKey {
}
interface EntityKey_Update extends EntityKey {
}
interface EntityMap_Base extends WebEntity {
}
interface EntityMap_Fixed extends WebEntity_Fixed {
  entitymapid: string;
}
interface EntityMap extends EntityMap_Base, EntityMap_Relationships {
}
interface EntityMap_Relationships {
}
interface EntityMap_Result extends EntityMap_Base, EntityMap_Relationships {
}
interface EntityMap_FormattedResult {
}
interface EntityMap_Select {
}
interface EntityMap_Expand {
}
interface EntityMap_Filter {
}
interface EntityMap_Create extends EntityMap {
}
interface EntityMap_Update extends EntityMap {
}
interface EntityRelationship_Base extends WebEntity {
}
interface EntityRelationship_Fixed extends WebEntity_Fixed {
  entityrelationshipid: string;
}
interface EntityRelationship extends EntityRelationship_Base, EntityRelationship_Relationships {
}
interface EntityRelationship_Relationships {
}
interface EntityRelationship_Result extends EntityRelationship_Base, EntityRelationship_Relationships {
}
interface EntityRelationship_FormattedResult {
}
interface EntityRelationship_Select {
}
interface EntityRelationship_Expand {
}
interface EntityRelationship_Filter {
}
interface EntityRelationship_Create extends EntityRelationship {
}
interface EntityRelationship_Update extends EntityRelationship {
}
interface EnvironmentVariableDefinition_Base extends WebEntity {
}
interface EnvironmentVariableDefinition_Fixed extends WebEntity_Fixed {
  environmentvariabledefinitionid: string;
}
interface EnvironmentVariableDefinition extends EnvironmentVariableDefinition_Base, EnvironmentVariableDefinition_Relationships {
}
interface EnvironmentVariableDefinition_Relationships {
}
interface EnvironmentVariableDefinition_Result extends EnvironmentVariableDefinition_Base, EnvironmentVariableDefinition_Relationships {
}
interface EnvironmentVariableDefinition_FormattedResult {
}
interface EnvironmentVariableDefinition_Select {
}
interface EnvironmentVariableDefinition_Expand {
}
interface EnvironmentVariableDefinition_Filter {
}
interface EnvironmentVariableDefinition_Create extends EnvironmentVariableDefinition {
}
interface EnvironmentVariableDefinition_Update extends EnvironmentVariableDefinition {
}
interface EnvironmentVariableValue_Base extends WebEntity {
}
interface EnvironmentVariableValue_Fixed extends WebEntity_Fixed {
  environmentvariablevalueid: string;
}
interface EnvironmentVariableValue extends EnvironmentVariableValue_Base, EnvironmentVariableValue_Relationships {
}
interface EnvironmentVariableValue_Relationships {
}
interface EnvironmentVariableValue_Result extends EnvironmentVariableValue_Base, EnvironmentVariableValue_Relationships {
}
interface EnvironmentVariableValue_FormattedResult {
}
interface EnvironmentVariableValue_Select {
}
interface EnvironmentVariableValue_Expand {
}
interface EnvironmentVariableValue_Filter {
}
interface EnvironmentVariableValue_Create extends EnvironmentVariableValue {
}
interface EnvironmentVariableValue_Update extends EnvironmentVariableValue {
}
interface ExchangeSyncIdMapping_Base extends WebEntity {
}
interface ExchangeSyncIdMapping_Fixed extends WebEntity_Fixed {
  exchangesyncidmappingid: string;
}
interface ExchangeSyncIdMapping extends ExchangeSyncIdMapping_Base, ExchangeSyncIdMapping_Relationships {
}
interface ExchangeSyncIdMapping_Relationships {
}
interface ExchangeSyncIdMapping_Result extends ExchangeSyncIdMapping_Base, ExchangeSyncIdMapping_Relationships {
}
interface ExchangeSyncIdMapping_FormattedResult {
}
interface ExchangeSyncIdMapping_Select {
}
interface ExchangeSyncIdMapping_Expand {
}
interface ExchangeSyncIdMapping_Filter {
}
interface ExchangeSyncIdMapping_Create extends ExchangeSyncIdMapping {
}
interface ExchangeSyncIdMapping_Update extends ExchangeSyncIdMapping {
}
interface ExpanderEvent_Base extends WebEntity {
}
interface ExpanderEvent_Fixed extends WebEntity_Fixed {
  expandereventid: string;
}
interface ExpanderEvent extends ExpanderEvent_Base, ExpanderEvent_Relationships {
}
interface ExpanderEvent_Relationships {
}
interface ExpanderEvent_Result extends ExpanderEvent_Base, ExpanderEvent_Relationships {
}
interface ExpanderEvent_FormattedResult {
}
interface ExpanderEvent_Select {
}
interface ExpanderEvent_Expand {
}
interface ExpanderEvent_Filter {
}
interface ExpanderEvent_Create extends ExpanderEvent {
}
interface ExpanderEvent_Update extends ExpanderEvent {
}
interface ExpiredProcess_Base extends WebEntity {
}
interface ExpiredProcess_Fixed extends WebEntity_Fixed {
  businessprocessflowinstanceid: string;
}
interface ExpiredProcess extends ExpiredProcess_Base, ExpiredProcess_Relationships {
}
interface ExpiredProcess_Relationships {
}
interface ExpiredProcess_Result extends ExpiredProcess_Base, ExpiredProcess_Relationships {
}
interface ExpiredProcess_FormattedResult {
}
interface ExpiredProcess_Select {
}
interface ExpiredProcess_Expand {
}
interface ExpiredProcess_Filter {
}
interface ExpiredProcess_Create extends ExpiredProcess {
}
interface ExpiredProcess_Update extends ExpiredProcess {
}
interface ExportSolutionUpload_Base extends WebEntity {
}
interface ExportSolutionUpload_Fixed extends WebEntity_Fixed {
  exportsolutionuploadid: string;
}
interface ExportSolutionUpload extends ExportSolutionUpload_Base, ExportSolutionUpload_Relationships {
}
interface ExportSolutionUpload_Relationships {
}
interface ExportSolutionUpload_Result extends ExportSolutionUpload_Base, ExportSolutionUpload_Relationships {
}
interface ExportSolutionUpload_FormattedResult {
}
interface ExportSolutionUpload_Select {
}
interface ExportSolutionUpload_Expand {
}
interface ExportSolutionUpload_Filter {
}
interface ExportSolutionUpload_Create extends ExportSolutionUpload {
}
interface ExportSolutionUpload_Update extends ExportSolutionUpload {
}
interface ExternalParty_Base extends WebEntity {
}
interface ExternalParty_Fixed extends WebEntity_Fixed {
  externalpartyid: string;
}
interface ExternalParty extends ExternalParty_Base, ExternalParty_Relationships {
}
interface ExternalParty_Relationships {
}
interface ExternalParty_Result extends ExternalParty_Base, ExternalParty_Relationships {
}
interface ExternalParty_FormattedResult {
}
interface ExternalParty_Select {
}
interface ExternalParty_Expand {
}
interface ExternalParty_Filter {
}
interface ExternalParty_Create extends ExternalParty {
}
interface ExternalParty_Update extends ExternalParty {
}
interface ExternalPartyItem_Base extends WebEntity {
}
interface ExternalPartyItem_Fixed extends WebEntity_Fixed {
  externalpartyitemid: string;
}
interface ExternalPartyItem extends ExternalPartyItem_Base, ExternalPartyItem_Relationships {
}
interface ExternalPartyItem_Relationships {
}
interface ExternalPartyItem_Result extends ExternalPartyItem_Base, ExternalPartyItem_Relationships {
}
interface ExternalPartyItem_FormattedResult {
}
interface ExternalPartyItem_Select {
}
interface ExternalPartyItem_Expand {
}
interface ExternalPartyItem_Filter {
}
interface ExternalPartyItem_Create extends ExternalPartyItem {
}
interface ExternalPartyItem_Update extends ExternalPartyItem {
}
interface Fax_Base extends WebEntity {
}
interface Fax_Fixed extends WebEntity_Fixed {
  activityid: string;
}
interface Fax extends Fax_Base, Fax_Relationships {
}
interface Fax_Relationships {
}
interface Fax_Result extends Fax_Base, Fax_Relationships {
}
interface Fax_FormattedResult {
}
interface Fax_Select {
}
interface Fax_Expand {
}
interface Fax_Filter {
}
interface Fax_Create extends Fax {
}
interface Fax_Update extends Fax {
}
interface featurecontrolsetting_Base extends WebEntity {
}
interface featurecontrolsetting_Fixed extends WebEntity_Fixed {
  featurecontrolsettingid: string;
}
interface featurecontrolsetting extends featurecontrolsetting_Base, featurecontrolsetting_Relationships {
}
interface featurecontrolsetting_Relationships {
}
interface featurecontrolsetting_Result extends featurecontrolsetting_Base, featurecontrolsetting_Relationships {
}
interface featurecontrolsetting_FormattedResult {
}
interface featurecontrolsetting_Select {
}
interface featurecontrolsetting_Expand {
}
interface featurecontrolsetting_Filter {
}
interface featurecontrolsetting_Create extends featurecontrolsetting {
}
interface featurecontrolsetting_Update extends featurecontrolsetting {
}
interface Feedback_Base extends WebEntity {
}
interface Feedback_Fixed extends WebEntity_Fixed {
  feedbackid: string;
}
interface Feedback extends Feedback_Base, Feedback_Relationships {
}
interface Feedback_Relationships {
}
interface Feedback_Result extends Feedback_Base, Feedback_Relationships {
}
interface Feedback_FormattedResult {
}
interface Feedback_Select {
}
interface Feedback_Expand {
}
interface Feedback_Filter {
}
interface Feedback_Create extends Feedback {
}
interface Feedback_Update extends Feedback {
}
interface FieldPermission_Base extends WebEntity {
}
interface FieldPermission_Fixed extends WebEntity_Fixed {
  fieldpermissionid: string;
}
interface FieldPermission extends FieldPermission_Base, FieldPermission_Relationships {
}
interface FieldPermission_Relationships {
}
interface FieldPermission_Result extends FieldPermission_Base, FieldPermission_Relationships {
}
interface FieldPermission_FormattedResult {
}
interface FieldPermission_Select {
}
interface FieldPermission_Expand {
}
interface FieldPermission_Filter {
}
interface FieldPermission_Create extends FieldPermission {
}
interface FieldPermission_Update extends FieldPermission {
}
interface FieldSecurityProfile_Base extends WebEntity {
}
interface FieldSecurityProfile_Fixed extends WebEntity_Fixed {
  fieldsecurityprofileid: string;
}
interface FieldSecurityProfile extends FieldSecurityProfile_Base, FieldSecurityProfile_Relationships {
}
interface FieldSecurityProfile_Relationships {
}
interface FieldSecurityProfile_Result extends FieldSecurityProfile_Base, FieldSecurityProfile_Relationships {
}
interface FieldSecurityProfile_FormattedResult {
}
interface FieldSecurityProfile_Select {
}
interface FieldSecurityProfile_Expand {
}
interface FieldSecurityProfile_Filter {
}
interface FieldSecurityProfile_Create extends FieldSecurityProfile {
}
interface FieldSecurityProfile_Update extends FieldSecurityProfile {
}
interface FileAttachment_Base extends WebEntity {
}
interface FileAttachment_Fixed extends WebEntity_Fixed {
  fileattachmentid: string;
}
interface FileAttachment extends FileAttachment_Base, FileAttachment_Relationships {
}
interface FileAttachment_Relationships {
}
interface FileAttachment_Result extends FileAttachment_Base, FileAttachment_Relationships {
}
interface FileAttachment_FormattedResult {
}
interface FileAttachment_Select {
}
interface FileAttachment_Expand {
}
interface FileAttachment_Filter {
}
interface FileAttachment_Create extends FileAttachment {
}
interface FileAttachment_Update extends FileAttachment {
}
interface FilterTemplate_Base extends WebEntity {
}
interface FilterTemplate_Fixed extends WebEntity_Fixed {
  filtertemplateid: string;
}
interface FilterTemplate extends FilterTemplate_Base, FilterTemplate_Relationships {
}
interface FilterTemplate_Relationships {
}
interface FilterTemplate_Result extends FilterTemplate_Base, FilterTemplate_Relationships {
}
interface FilterTemplate_FormattedResult {
}
interface FilterTemplate_Select {
}
interface FilterTemplate_Expand {
}
interface FilterTemplate_Filter {
}
interface FilterTemplate_Create extends FilterTemplate {
}
interface FilterTemplate_Update extends FilterTemplate {
}
interface FixedMonthlyFiscalCalendar_Base extends WebEntity {
}
interface FixedMonthlyFiscalCalendar_Fixed extends WebEntity_Fixed {
  userfiscalcalendarid: string;
}
interface FixedMonthlyFiscalCalendar extends FixedMonthlyFiscalCalendar_Base, FixedMonthlyFiscalCalendar_Relationships {
}
interface FixedMonthlyFiscalCalendar_Relationships {
}
interface FixedMonthlyFiscalCalendar_Result extends FixedMonthlyFiscalCalendar_Base, FixedMonthlyFiscalCalendar_Relationships {
}
interface FixedMonthlyFiscalCalendar_FormattedResult {
}
interface FixedMonthlyFiscalCalendar_Select {
}
interface FixedMonthlyFiscalCalendar_Expand {
}
interface FixedMonthlyFiscalCalendar_Filter {
}
interface FixedMonthlyFiscalCalendar_Create extends FixedMonthlyFiscalCalendar {
}
interface FixedMonthlyFiscalCalendar_Update extends FixedMonthlyFiscalCalendar {
}
interface flowmachine_Base extends WebEntity {
}
interface flowmachine_Fixed extends WebEntity_Fixed {
  flowmachineid: string;
}
interface flowmachine extends flowmachine_Base, flowmachine_Relationships {
}
interface flowmachine_Relationships {
}
interface flowmachine_Result extends flowmachine_Base, flowmachine_Relationships {
}
interface flowmachine_FormattedResult {
}
interface flowmachine_Select {
}
interface flowmachine_Expand {
}
interface flowmachine_Filter {
}
interface flowmachine_Create extends flowmachine {
}
interface flowmachine_Update extends flowmachine {
}
interface flowmachinegroup_Base extends WebEntity {
}
interface flowmachinegroup_Fixed extends WebEntity_Fixed {
  flowmachinegroupid: string;
}
interface flowmachinegroup extends flowmachinegroup_Base, flowmachinegroup_Relationships {
}
interface flowmachinegroup_Relationships {
}
interface flowmachinegroup_Result extends flowmachinegroup_Base, flowmachinegroup_Relationships {
}
interface flowmachinegroup_FormattedResult {
}
interface flowmachinegroup_Select {
}
interface flowmachinegroup_Expand {
}
interface flowmachinegroup_Filter {
}
interface flowmachinegroup_Create extends flowmachinegroup {
}
interface flowmachinegroup_Update extends flowmachinegroup {
}
interface flowsession_Base extends WebEntity {
}
interface flowsession_Fixed extends WebEntity_Fixed {
  flowsessionid: string;
}
interface flowsession extends flowsession_Base, flowsession_Relationships {
}
interface flowsession_Relationships {
}
interface flowsession_Result extends flowsession_Base, flowsession_Relationships {
}
interface flowsession_FormattedResult {
}
interface flowsession_Select {
}
interface flowsession_Expand {
}
interface flowsession_Filter {
}
interface flowsession_Create extends flowsession {
}
interface flowsession_Update extends flowsession {
}
interface GlobalSearchConfiguration_Base extends WebEntity {
}
interface GlobalSearchConfiguration_Fixed extends WebEntity_Fixed {
  globalsearchconfigurationid: string;
}
interface GlobalSearchConfiguration extends GlobalSearchConfiguration_Base, GlobalSearchConfiguration_Relationships {
}
interface GlobalSearchConfiguration_Relationships {
}
interface GlobalSearchConfiguration_Result extends GlobalSearchConfiguration_Base, GlobalSearchConfiguration_Relationships {
}
interface GlobalSearchConfiguration_FormattedResult {
}
interface GlobalSearchConfiguration_Select {
}
interface GlobalSearchConfiguration_Expand {
}
interface GlobalSearchConfiguration_Filter {
}
interface GlobalSearchConfiguration_Create extends GlobalSearchConfiguration {
}
interface GlobalSearchConfiguration_Update extends GlobalSearchConfiguration {
}
interface Goal_Base extends WebEntity {
}
interface Goal_Fixed extends WebEntity_Fixed {
  goalid: string;
}
interface Goal extends Goal_Base, Goal_Relationships {
}
interface Goal_Relationships {
}
interface Goal_Result extends Goal_Base, Goal_Relationships {
}
interface Goal_FormattedResult {
}
interface Goal_Select {
}
interface Goal_Expand {
}
interface Goal_Filter {
}
interface Goal_Create extends Goal {
}
interface Goal_Update extends Goal {
}
interface GoalRollupQuery_Base extends WebEntity {
}
interface GoalRollupQuery_Fixed extends WebEntity_Fixed {
  goalrollupqueryid: string;
}
interface GoalRollupQuery extends GoalRollupQuery_Base, GoalRollupQuery_Relationships {
}
interface GoalRollupQuery_Relationships {
}
interface GoalRollupQuery_Result extends GoalRollupQuery_Base, GoalRollupQuery_Relationships {
}
interface GoalRollupQuery_FormattedResult {
}
interface GoalRollupQuery_Select {
}
interface GoalRollupQuery_Expand {
}
interface GoalRollupQuery_Filter {
}
interface GoalRollupQuery_Create extends GoalRollupQuery {
}
interface GoalRollupQuery_Update extends GoalRollupQuery {
}
interface HierarchyRule_Base extends WebEntity {
}
interface HierarchyRule_Fixed extends WebEntity_Fixed {
  hierarchyruleid: string;
}
interface HierarchyRule extends HierarchyRule_Base, HierarchyRule_Relationships {
}
interface HierarchyRule_Relationships {
}
interface HierarchyRule_Result extends HierarchyRule_Base, HierarchyRule_Relationships {
}
interface HierarchyRule_FormattedResult {
}
interface HierarchyRule_Select {
}
interface HierarchyRule_Expand {
}
interface HierarchyRule_Filter {
}
interface HierarchyRule_Create extends HierarchyRule {
}
interface HierarchyRule_Update extends HierarchyRule {
}
interface HierarchySecurityConfiguration_Base extends WebEntity {
}
interface HierarchySecurityConfiguration_Fixed extends WebEntity_Fixed {
  hierarchysecuritymodelingsettingid: string;
}
interface HierarchySecurityConfiguration extends HierarchySecurityConfiguration_Base, HierarchySecurityConfiguration_Relationships {
}
interface HierarchySecurityConfiguration_Relationships {
}
interface HierarchySecurityConfiguration_Result extends HierarchySecurityConfiguration_Base, HierarchySecurityConfiguration_Relationships {
}
interface HierarchySecurityConfiguration_FormattedResult {
}
interface HierarchySecurityConfiguration_Select {
}
interface HierarchySecurityConfiguration_Expand {
}
interface HierarchySecurityConfiguration_Filter {
}
interface HierarchySecurityConfiguration_Create extends HierarchySecurityConfiguration {
}
interface HierarchySecurityConfiguration_Update extends HierarchySecurityConfiguration {
}
interface holidaywrapper_Base extends WebEntity {
}
interface holidaywrapper_Fixed extends WebEntity_Fixed {
  holidaywrapperid: string;
}
interface holidaywrapper extends holidaywrapper_Base, holidaywrapper_Relationships {
}
interface holidaywrapper_Relationships {
}
interface holidaywrapper_Result extends holidaywrapper_Base, holidaywrapper_Relationships {
}
interface holidaywrapper_FormattedResult {
}
interface holidaywrapper_Select {
}
interface holidaywrapper_Expand {
}
interface holidaywrapper_Filter {
}
interface holidaywrapper_Create extends holidaywrapper {
}
interface holidaywrapper_Update extends holidaywrapper {
}
interface ImageDescriptor_Base extends WebEntity {
}
interface ImageDescriptor_Fixed extends WebEntity_Fixed {
  imagedescriptorid: string;
}
interface ImageDescriptor extends ImageDescriptor_Base, ImageDescriptor_Relationships {
}
interface ImageDescriptor_Relationships {
}
interface ImageDescriptor_Result extends ImageDescriptor_Base, ImageDescriptor_Relationships {
}
interface ImageDescriptor_FormattedResult {
}
interface ImageDescriptor_Select {
}
interface ImageDescriptor_Expand {
}
interface ImageDescriptor_Filter {
}
interface ImageDescriptor_Create extends ImageDescriptor {
}
interface ImageDescriptor_Update extends ImageDescriptor {
}
interface Import_Base extends WebEntity {
}
interface Import_Fixed extends WebEntity_Fixed {
  importid: string;
}
interface Import extends Import_Base, Import_Relationships {
}
interface Import_Relationships {
}
interface Import_Result extends Import_Base, Import_Relationships {
}
interface Import_FormattedResult {
}
interface Import_Select {
}
interface Import_Expand {
}
interface Import_Filter {
}
interface Import_Create extends Import {
}
interface Import_Update extends Import {
}
interface ImportData_Base extends WebEntity {
}
interface ImportData_Fixed extends WebEntity_Fixed {
  importdataid: string;
}
interface ImportData extends ImportData_Base, ImportData_Relationships {
}
interface ImportData_Relationships {
}
interface ImportData_Result extends ImportData_Base, ImportData_Relationships {
}
interface ImportData_FormattedResult {
}
interface ImportData_Select {
}
interface ImportData_Expand {
}
interface ImportData_Filter {
}
interface ImportData_Create extends ImportData {
}
interface ImportData_Update extends ImportData {
}
interface ImportEntityMapping_Base extends WebEntity {
}
interface ImportEntityMapping_Fixed extends WebEntity_Fixed {
  importentitymappingid: string;
}
interface ImportEntityMapping extends ImportEntityMapping_Base, ImportEntityMapping_Relationships {
}
interface ImportEntityMapping_Relationships {
}
interface ImportEntityMapping_Result extends ImportEntityMapping_Base, ImportEntityMapping_Relationships {
}
interface ImportEntityMapping_FormattedResult {
}
interface ImportEntityMapping_Select {
}
interface ImportEntityMapping_Expand {
}
interface ImportEntityMapping_Filter {
}
interface ImportEntityMapping_Create extends ImportEntityMapping {
}
interface ImportEntityMapping_Update extends ImportEntityMapping {
}
interface ImportFile_Base extends WebEntity {
}
interface ImportFile_Fixed extends WebEntity_Fixed {
  importfileid: string;
}
interface ImportFile extends ImportFile_Base, ImportFile_Relationships {
}
interface ImportFile_Relationships {
}
interface ImportFile_Result extends ImportFile_Base, ImportFile_Relationships {
}
interface ImportFile_FormattedResult {
}
interface ImportFile_Select {
}
interface ImportFile_Expand {
}
interface ImportFile_Filter {
}
interface ImportFile_Create extends ImportFile {
}
interface ImportFile_Update extends ImportFile {
}
interface ImportJob_Base extends WebEntity {
}
interface ImportJob_Fixed extends WebEntity_Fixed {
  importjobid: string;
}
interface ImportJob extends ImportJob_Base, ImportJob_Relationships {
}
interface ImportJob_Relationships {
}
interface ImportJob_Result extends ImportJob_Base, ImportJob_Relationships {
}
interface ImportJob_FormattedResult {
}
interface ImportJob_Select {
}
interface ImportJob_Expand {
}
interface ImportJob_Filter {
}
interface ImportJob_Create extends ImportJob {
}
interface ImportJob_Update extends ImportJob {
}
interface ImportLog_Base extends WebEntity {
}
interface ImportLog_Fixed extends WebEntity_Fixed {
  importlogid: string;
}
interface ImportLog extends ImportLog_Base, ImportLog_Relationships {
}
interface ImportLog_Relationships {
}
interface ImportLog_Result extends ImportLog_Base, ImportLog_Relationships {
}
interface ImportLog_FormattedResult {
}
interface ImportLog_Select {
}
interface ImportLog_Expand {
}
interface ImportLog_Filter {
}
interface ImportLog_Create extends ImportLog {
}
interface ImportLog_Update extends ImportLog {
}
interface ImportMap_Base extends WebEntity {
}
interface ImportMap_Fixed extends WebEntity_Fixed {
  importmapid: string;
}
interface ImportMap extends ImportMap_Base, ImportMap_Relationships {
}
interface ImportMap_Relationships {
}
interface ImportMap_Result extends ImportMap_Base, ImportMap_Relationships {
}
interface ImportMap_FormattedResult {
}
interface ImportMap_Select {
}
interface ImportMap_Expand {
}
interface ImportMap_Filter {
}
interface ImportMap_Create extends ImportMap {
}
interface ImportMap_Update extends ImportMap {
}
interface IndexAttributes_Base extends WebEntity {
}
interface IndexAttributes_Fixed extends WebEntity_Fixed {
  indexattributeid: string;
}
interface IndexAttributes extends IndexAttributes_Base, IndexAttributes_Relationships {
}
interface IndexAttributes_Relationships {
}
interface IndexAttributes_Result extends IndexAttributes_Base, IndexAttributes_Relationships {
}
interface IndexAttributes_FormattedResult {
}
interface IndexAttributes_Select {
}
interface IndexAttributes_Expand {
}
interface IndexAttributes_Filter {
}
interface IndexAttributes_Create extends IndexAttributes {
}
interface IndexAttributes_Update extends IndexAttributes {
}
interface IntegrationStatus_Base extends WebEntity {
}
interface IntegrationStatus_Fixed extends WebEntity_Fixed {
  integrationentryid: string;
}
interface IntegrationStatus extends IntegrationStatus_Base, IntegrationStatus_Relationships {
}
interface IntegrationStatus_Relationships {
}
interface IntegrationStatus_Result extends IntegrationStatus_Base, IntegrationStatus_Relationships {
}
interface IntegrationStatus_FormattedResult {
}
interface IntegrationStatus_Select {
}
interface IntegrationStatus_Expand {
}
interface IntegrationStatus_Filter {
}
interface IntegrationStatus_Create extends IntegrationStatus {
}
interface IntegrationStatus_Update extends IntegrationStatus {
}
interface InteractionForEmail_Base extends WebEntity {
}
interface InteractionForEmail_Fixed extends WebEntity_Fixed {
  interactionforemailid: string;
}
interface InteractionForEmail extends InteractionForEmail_Base, InteractionForEmail_Relationships {
}
interface InteractionForEmail_Relationships {
}
interface InteractionForEmail_Result extends InteractionForEmail_Base, InteractionForEmail_Relationships {
}
interface InteractionForEmail_FormattedResult {
}
interface InteractionForEmail_Select {
}
interface InteractionForEmail_Expand {
}
interface InteractionForEmail_Filter {
}
interface InteractionForEmail_Create extends InteractionForEmail {
}
interface InteractionForEmail_Update extends InteractionForEmail {
}
interface InternalAddress_Base extends WebEntity {
}
interface InternalAddress_Fixed extends WebEntity_Fixed {
  internaladdressid: string;
}
interface InternalAddress extends InternalAddress_Base, InternalAddress_Relationships {
}
interface InternalAddress_Relationships {
}
interface InternalAddress_Result extends InternalAddress_Base, InternalAddress_Relationships {
}
interface InternalAddress_FormattedResult {
}
interface InternalAddress_Select {
}
interface InternalAddress_Expand {
}
interface InternalAddress_Filter {
}
interface InternalAddress_Create extends InternalAddress {
}
interface InternalAddress_Update extends InternalAddress {
}
interface InternalCatalogAssignment_Base extends WebEntity {
}
interface InternalCatalogAssignment_Fixed extends WebEntity_Fixed {
  internalcatalogassignmentid: string;
}
interface InternalCatalogAssignment extends InternalCatalogAssignment_Base, InternalCatalogAssignment_Relationships {
}
interface InternalCatalogAssignment_Relationships {
}
interface InternalCatalogAssignment_Result extends InternalCatalogAssignment_Base, InternalCatalogAssignment_Relationships {
}
interface InternalCatalogAssignment_FormattedResult {
}
interface InternalCatalogAssignment_Select {
}
interface InternalCatalogAssignment_Expand {
}
interface InternalCatalogAssignment_Filter {
}
interface InternalCatalogAssignment_Create extends InternalCatalogAssignment {
}
interface InternalCatalogAssignment_Update extends InternalCatalogAssignment {
}
interface InterProcessLock_Base extends WebEntity {
}
interface InterProcessLock_Fixed extends WebEntity_Fixed {
  interprocesslockid: string;
}
interface InterProcessLock extends InterProcessLock_Base, InterProcessLock_Relationships {
}
interface InterProcessLock_Relationships {
}
interface InterProcessLock_Result extends InterProcessLock_Base, InterProcessLock_Relationships {
}
interface InterProcessLock_FormattedResult {
}
interface InterProcessLock_Select {
}
interface InterProcessLock_Expand {
}
interface InterProcessLock_Filter {
}
interface InterProcessLock_Create extends InterProcessLock {
}
interface InterProcessLock_Update extends InterProcessLock {
}
interface InvalidDependency_Base extends WebEntity {
}
interface InvalidDependency_Fixed extends WebEntity_Fixed {
  invaliddependencyid: string;
}
interface InvalidDependency extends InvalidDependency_Base, InvalidDependency_Relationships {
}
interface InvalidDependency_Relationships {
}
interface InvalidDependency_Result extends InvalidDependency_Base, InvalidDependency_Relationships {
}
interface InvalidDependency_FormattedResult {
}
interface InvalidDependency_Select {
}
interface InvalidDependency_Expand {
}
interface InvalidDependency_Filter {
}
interface InvalidDependency_Create extends InvalidDependency {
}
interface InvalidDependency_Update extends InvalidDependency {
}
interface IsvConfig_Base extends WebEntity {
}
interface IsvConfig_Fixed extends WebEntity_Fixed {
  isvconfigid: string;
}
interface IsvConfig extends IsvConfig_Base, IsvConfig_Relationships {
}
interface IsvConfig_Relationships {
}
interface IsvConfig_Result extends IsvConfig_Base, IsvConfig_Relationships {
}
interface IsvConfig_FormattedResult {
}
interface IsvConfig_Select {
}
interface IsvConfig_Expand {
}
interface IsvConfig_Filter {
}
interface IsvConfig_Create extends IsvConfig {
}
interface IsvConfig_Update extends IsvConfig {
}
interface KbArticle_Base extends WebEntity {
}
interface KbArticle_Fixed extends WebEntity_Fixed {
  kbarticleid: string;
}
interface KbArticle extends KbArticle_Base, KbArticle_Relationships {
}
interface KbArticle_Relationships {
}
interface KbArticle_Result extends KbArticle_Base, KbArticle_Relationships {
}
interface KbArticle_FormattedResult {
}
interface KbArticle_Select {
}
interface KbArticle_Expand {
}
interface KbArticle_Filter {
}
interface KbArticle_Create extends KbArticle {
}
interface KbArticle_Update extends KbArticle {
}
interface KbArticleComment_Base extends WebEntity {
}
interface KbArticleComment_Fixed extends WebEntity_Fixed {
  kbarticlecommentid: string;
}
interface KbArticleComment extends KbArticleComment_Base, KbArticleComment_Relationships {
}
interface KbArticleComment_Relationships {
}
interface KbArticleComment_Result extends KbArticleComment_Base, KbArticleComment_Relationships {
}
interface KbArticleComment_FormattedResult {
}
interface KbArticleComment_Select {
}
interface KbArticleComment_Expand {
}
interface KbArticleComment_Filter {
}
interface KbArticleComment_Create extends KbArticleComment {
}
interface KbArticleComment_Update extends KbArticleComment {
}
interface KbArticleTemplate_Base extends WebEntity {
}
interface KbArticleTemplate_Fixed extends WebEntity_Fixed {
  kbarticletemplateid: string;
}
interface KbArticleTemplate extends KbArticleTemplate_Base, KbArticleTemplate_Relationships {
}
interface KbArticleTemplate_Relationships {
}
interface KbArticleTemplate_Result extends KbArticleTemplate_Base, KbArticleTemplate_Relationships {
}
interface KbArticleTemplate_FormattedResult {
}
interface KbArticleTemplate_Select {
}
interface KbArticleTemplate_Expand {
}
interface KbArticleTemplate_Filter {
}
interface KbArticleTemplate_Create extends KbArticleTemplate {
}
interface KbArticleTemplate_Update extends KbArticleTemplate {
}
interface KeyVaultReference_Base extends WebEntity {
}
interface KeyVaultReference_Fixed extends WebEntity_Fixed {
  keyvaultreferenceid: string;
}
interface KeyVaultReference extends KeyVaultReference_Base, KeyVaultReference_Relationships {
}
interface KeyVaultReference_Relationships {
}
interface KeyVaultReference_Result extends KeyVaultReference_Base, KeyVaultReference_Relationships {
}
interface KeyVaultReference_FormattedResult {
}
interface KeyVaultReference_Select {
}
interface KeyVaultReference_Expand {
}
interface KeyVaultReference_Filter {
}
interface KeyVaultReference_Create extends KeyVaultReference {
}
interface KeyVaultReference_Update extends KeyVaultReference {
}
interface KnowledgeArticle_Base extends WebEntity {
}
interface KnowledgeArticle_Fixed extends WebEntity_Fixed {
  knowledgearticleid: string;
}
interface KnowledgeArticle extends KnowledgeArticle_Base, KnowledgeArticle_Relationships {
}
interface KnowledgeArticle_Relationships {
}
interface KnowledgeArticle_Result extends KnowledgeArticle_Base, KnowledgeArticle_Relationships {
}
interface KnowledgeArticle_FormattedResult {
}
interface KnowledgeArticle_Select {
}
interface KnowledgeArticle_Expand {
}
interface KnowledgeArticle_Filter {
}
interface KnowledgeArticle_Create extends KnowledgeArticle {
}
interface KnowledgeArticle_Update extends KnowledgeArticle {
}
interface KnowledgeArticlesCategories_Base extends WebEntity {
}
interface KnowledgeArticlesCategories_Fixed extends WebEntity_Fixed {
  knowledgearticlecategoryid: string;
}
interface KnowledgeArticlesCategories extends KnowledgeArticlesCategories_Base, KnowledgeArticlesCategories_Relationships {
}
interface KnowledgeArticlesCategories_Relationships {
}
interface KnowledgeArticlesCategories_Result extends KnowledgeArticlesCategories_Base, KnowledgeArticlesCategories_Relationships {
}
interface KnowledgeArticlesCategories_FormattedResult {
}
interface KnowledgeArticlesCategories_Select {
}
interface KnowledgeArticlesCategories_Expand {
}
interface KnowledgeArticlesCategories_Filter {
}
interface KnowledgeArticlesCategories_Create extends KnowledgeArticlesCategories {
}
interface KnowledgeArticlesCategories_Update extends KnowledgeArticlesCategories {
}
interface KnowledgeArticleViews_Base extends WebEntity {
}
interface KnowledgeArticleViews_Fixed extends WebEntity_Fixed {
  knowledgearticleviewsid: string;
}
interface KnowledgeArticleViews extends KnowledgeArticleViews_Base, KnowledgeArticleViews_Relationships {
}
interface KnowledgeArticleViews_Relationships {
}
interface KnowledgeArticleViews_Result extends KnowledgeArticleViews_Base, KnowledgeArticleViews_Relationships {
}
interface KnowledgeArticleViews_FormattedResult {
}
interface KnowledgeArticleViews_Select {
}
interface KnowledgeArticleViews_Expand {
}
interface KnowledgeArticleViews_Filter {
}
interface KnowledgeArticleViews_Create extends KnowledgeArticleViews {
}
interface KnowledgeArticleViews_Update extends KnowledgeArticleViews {
}
interface KnowledgeBaseRecord_Base extends WebEntity {
}
interface KnowledgeBaseRecord_Fixed extends WebEntity_Fixed {
  knowledgebaserecordid: string;
}
interface KnowledgeBaseRecord extends KnowledgeBaseRecord_Base, KnowledgeBaseRecord_Relationships {
}
interface KnowledgeBaseRecord_Relationships {
}
interface KnowledgeBaseRecord_Result extends KnowledgeBaseRecord_Base, KnowledgeBaseRecord_Relationships {
}
interface KnowledgeBaseRecord_FormattedResult {
}
interface KnowledgeBaseRecord_Select {
}
interface KnowledgeBaseRecord_Expand {
}
interface KnowledgeBaseRecord_Filter {
}
interface KnowledgeBaseRecord_Create extends KnowledgeBaseRecord {
}
interface KnowledgeBaseRecord_Update extends KnowledgeBaseRecord {
}
interface KnowledgeSearchModel_Base extends WebEntity {
}
interface KnowledgeSearchModel_Fixed extends WebEntity_Fixed {
  knowledgesearchmodelid: string;
}
interface KnowledgeSearchModel extends KnowledgeSearchModel_Base, KnowledgeSearchModel_Relationships {
}
interface KnowledgeSearchModel_Relationships {
}
interface KnowledgeSearchModel_Result extends KnowledgeSearchModel_Base, KnowledgeSearchModel_Relationships {
}
interface KnowledgeSearchModel_FormattedResult {
}
interface KnowledgeSearchModel_Select {
}
interface KnowledgeSearchModel_Expand {
}
interface KnowledgeSearchModel_Filter {
}
interface KnowledgeSearchModel_Create extends KnowledgeSearchModel {
}
interface KnowledgeSearchModel_Update extends KnowledgeSearchModel {
}
interface LanguageLocale_Base extends WebEntity {
}
interface LanguageLocale_Fixed extends WebEntity_Fixed {
  languagelocaleid: string;
}
interface LanguageLocale extends LanguageLocale_Base, LanguageLocale_Relationships {
}
interface LanguageLocale_Relationships {
}
interface LanguageLocale_Result extends LanguageLocale_Base, LanguageLocale_Relationships {
}
interface LanguageLocale_FormattedResult {
}
interface LanguageLocale_Select {
}
interface LanguageLocale_Expand {
}
interface LanguageLocale_Filter {
}
interface LanguageLocale_Create extends LanguageLocale {
}
interface LanguageLocale_Update extends LanguageLocale {
}
interface LanguageProvisioningState_Base extends WebEntity {
}
interface LanguageProvisioningState_Fixed extends WebEntity_Fixed {
  languageprovisioningstateid: string;
}
interface LanguageProvisioningState extends LanguageProvisioningState_Base, LanguageProvisioningState_Relationships {
}
interface LanguageProvisioningState_Relationships {
}
interface LanguageProvisioningState_Result extends LanguageProvisioningState_Base, LanguageProvisioningState_Relationships {
}
interface LanguageProvisioningState_FormattedResult {
}
interface LanguageProvisioningState_Select {
}
interface LanguageProvisioningState_Expand {
}
interface LanguageProvisioningState_Filter {
}
interface LanguageProvisioningState_Create extends LanguageProvisioningState {
}
interface LanguageProvisioningState_Update extends LanguageProvisioningState {
}
interface Letter_Base extends WebEntity {
}
interface Letter_Fixed extends WebEntity_Fixed {
  activityid: string;
}
interface Letter extends Letter_Base, Letter_Relationships {
}
interface Letter_Relationships {
}
interface Letter_Result extends Letter_Base, Letter_Relationships {
}
interface Letter_FormattedResult {
}
interface Letter_Select {
}
interface Letter_Expand {
}
interface Letter_Filter {
}
interface Letter_Create extends Letter {
}
interface Letter_Update extends Letter {
}
interface License_Base extends WebEntity {
}
interface License_Fixed extends WebEntity_Fixed {
  licenseid: string;
}
interface License extends License_Base, License_Relationships {
}
interface License_Relationships {
}
interface License_Result extends License_Base, License_Relationships {
}
interface License_FormattedResult {
}
interface License_Select {
}
interface License_Expand {
}
interface License_Filter {
}
interface License_Create extends License {
}
interface License_Update extends License {
}
interface LocalConfigStore_Base extends WebEntity {
}
interface LocalConfigStore_Fixed extends WebEntity_Fixed {
  id: string;
}
interface LocalConfigStore extends LocalConfigStore_Base, LocalConfigStore_Relationships {
}
interface LocalConfigStore_Relationships {
}
interface LocalConfigStore_Result extends LocalConfigStore_Base, LocalConfigStore_Relationships {
}
interface LocalConfigStore_FormattedResult {
}
interface LocalConfigStore_Select {
}
interface LocalConfigStore_Expand {
}
interface LocalConfigStore_Filter {
}
interface LocalConfigStore_Create extends LocalConfigStore {
}
interface LocalConfigStore_Update extends LocalConfigStore {
}
interface LookUpMapping_Base extends WebEntity {
}
interface LookUpMapping_Fixed extends WebEntity_Fixed {
  lookupmappingid: string;
}
interface LookUpMapping extends LookUpMapping_Base, LookUpMapping_Relationships {
}
interface LookUpMapping_Relationships {
}
interface LookUpMapping_Result extends LookUpMapping_Base, LookUpMapping_Relationships {
}
interface LookUpMapping_FormattedResult {
}
interface LookUpMapping_Select {
}
interface LookUpMapping_Expand {
}
interface LookUpMapping_Filter {
}
interface LookUpMapping_Create extends LookUpMapping {
}
interface LookUpMapping_Update extends LookUpMapping {
}
interface Mailbox_Base extends WebEntity {
}
interface Mailbox_Fixed extends WebEntity_Fixed {
  mailboxid: string;
}
interface Mailbox extends Mailbox_Base, Mailbox_Relationships {
}
interface Mailbox_Relationships {
}
interface Mailbox_Result extends Mailbox_Base, Mailbox_Relationships {
}
interface Mailbox_FormattedResult {
}
interface Mailbox_Select {
}
interface Mailbox_Expand {
}
interface Mailbox_Filter {
}
interface Mailbox_Create extends Mailbox {
}
interface Mailbox_Update extends Mailbox {
}
interface MailboxStatistics_Base extends WebEntity {
}
interface MailboxStatistics_Fixed extends WebEntity_Fixed {
  mailboxstatisticsid: string;
}
interface MailboxStatistics extends MailboxStatistics_Base, MailboxStatistics_Relationships {
}
interface MailboxStatistics_Relationships {
}
interface MailboxStatistics_Result extends MailboxStatistics_Base, MailboxStatistics_Relationships {
}
interface MailboxStatistics_FormattedResult {
}
interface MailboxStatistics_Select {
}
interface MailboxStatistics_Expand {
}
interface MailboxStatistics_Filter {
}
interface MailboxStatistics_Create extends MailboxStatistics {
}
interface MailboxStatistics_Update extends MailboxStatistics {
}
interface MailboxTrackingCategory_Base extends WebEntity {
}
interface MailboxTrackingCategory_Fixed extends WebEntity_Fixed {
  mailboxtrackingcategoryid: string;
}
interface MailboxTrackingCategory extends MailboxTrackingCategory_Base, MailboxTrackingCategory_Relationships {
}
interface MailboxTrackingCategory_Relationships {
}
interface MailboxTrackingCategory_Result extends MailboxTrackingCategory_Base, MailboxTrackingCategory_Relationships {
}
interface MailboxTrackingCategory_FormattedResult {
}
interface MailboxTrackingCategory_Select {
}
interface MailboxTrackingCategory_Expand {
}
interface MailboxTrackingCategory_Filter {
}
interface MailboxTrackingCategory_Create extends MailboxTrackingCategory {
}
interface MailboxTrackingCategory_Update extends MailboxTrackingCategory {
}
interface MailboxTrackingFolder_Base extends WebEntity {
}
interface MailboxTrackingFolder_Fixed extends WebEntity_Fixed {
  mailboxtrackingfolderid: string;
}
interface MailboxTrackingFolder extends MailboxTrackingFolder_Base, MailboxTrackingFolder_Relationships {
}
interface MailboxTrackingFolder_Relationships {
}
interface MailboxTrackingFolder_Result extends MailboxTrackingFolder_Base, MailboxTrackingFolder_Relationships {
}
interface MailboxTrackingFolder_FormattedResult {
}
interface MailboxTrackingFolder_Select {
}
interface MailboxTrackingFolder_Expand {
}
interface MailboxTrackingFolder_Filter {
}
interface MailboxTrackingFolder_Create extends MailboxTrackingFolder {
}
interface MailboxTrackingFolder_Update extends MailboxTrackingFolder {
}
interface MailMergeTemplate_Base extends WebEntity {
}
interface MailMergeTemplate_Fixed extends WebEntity_Fixed {
  mailmergetemplateid: string;
}
interface MailMergeTemplate extends MailMergeTemplate_Base, MailMergeTemplate_Relationships {
}
interface MailMergeTemplate_Relationships {
}
interface MailMergeTemplate_Result extends MailMergeTemplate_Base, MailMergeTemplate_Relationships {
}
interface MailMergeTemplate_FormattedResult {
}
interface MailMergeTemplate_Select {
}
interface MailMergeTemplate_Expand {
}
interface MailMergeTemplate_Filter {
}
interface MailMergeTemplate_Create extends MailMergeTemplate {
}
interface MailMergeTemplate_Update extends MailMergeTemplate {
}
interface ManagedIdentity_Base extends WebEntity {
}
interface ManagedIdentity_Fixed extends WebEntity_Fixed {
  managedidentityid: string;
}
interface ManagedIdentity extends ManagedIdentity_Base, ManagedIdentity_Relationships {
}
interface ManagedIdentity_Relationships {
}
interface ManagedIdentity_Result extends ManagedIdentity_Base, ManagedIdentity_Relationships {
}
interface ManagedIdentity_FormattedResult {
}
interface ManagedIdentity_Select {
}
interface ManagedIdentity_Expand {
}
interface ManagedIdentity_Filter {
}
interface ManagedIdentity_Create extends ManagedIdentity {
}
interface ManagedIdentity_Update extends ManagedIdentity {
}
interface ManagedProperty_Base extends WebEntity {
}
interface ManagedProperty_Fixed extends WebEntity_Fixed {
  managedpropertyid: string;
}
interface ManagedProperty extends ManagedProperty_Base, ManagedProperty_Relationships {
}
interface ManagedProperty_Relationships {
}
interface ManagedProperty_Result extends ManagedProperty_Base, ManagedProperty_Relationships {
}
interface ManagedProperty_FormattedResult {
}
interface ManagedProperty_Select {
}
interface ManagedProperty_Expand {
}
interface ManagedProperty_Filter {
}
interface ManagedProperty_Create extends ManagedProperty {
}
interface ManagedProperty_Update extends ManagedProperty {
}
interface mbs_pluginprofile_Base extends WebEntity {
}
interface mbs_pluginprofile_Fixed extends WebEntity_Fixed {
  mbs_pluginprofileid: string;
}
interface mbs_pluginprofile extends mbs_pluginprofile_Base, mbs_pluginprofile_Relationships {
}
interface mbs_pluginprofile_Relationships {
}
interface mbs_pluginprofile_Result extends mbs_pluginprofile_Base, mbs_pluginprofile_Relationships {
}
interface mbs_pluginprofile_FormattedResult {
}
interface mbs_pluginprofile_Select {
}
interface mbs_pluginprofile_Expand {
}
interface mbs_pluginprofile_Filter {
}
interface mbs_pluginprofile_Create extends mbs_pluginprofile {
}
interface mbs_pluginprofile_Update extends mbs_pluginprofile {
}
interface MetadataDifference_Base extends WebEntity {
}
interface MetadataDifference_Fixed extends WebEntity_Fixed {
  metadatadifferenceid: string;
}
interface MetadataDifference extends MetadataDifference_Base, MetadataDifference_Relationships {
}
interface MetadataDifference_Relationships {
}
interface MetadataDifference_Result extends MetadataDifference_Base, MetadataDifference_Relationships {
}
interface MetadataDifference_FormattedResult {
}
interface MetadataDifference_Select {
}
interface MetadataDifference_Expand {
}
interface MetadataDifference_Filter {
}
interface MetadataDifference_Create extends MetadataDifference {
}
interface MetadataDifference_Update extends MetadataDifference {
}
interface Metric_Base extends WebEntity {
}
interface Metric_Fixed extends WebEntity_Fixed {
  metricid: string;
}
interface Metric extends Metric_Base, Metric_Relationships {
}
interface Metric_Relationships {
}
interface Metric_Result extends Metric_Base, Metric_Relationships {
}
interface Metric_FormattedResult {
}
interface Metric_Select {
}
interface Metric_Expand {
}
interface Metric_Filter {
}
interface Metric_Create extends Metric {
}
interface Metric_Update extends Metric {
}
interface MobileOfflineProfile_Base extends WebEntity {
}
interface MobileOfflineProfile_Fixed extends WebEntity_Fixed {
  mobileofflineprofileid: string;
}
interface MobileOfflineProfile extends MobileOfflineProfile_Base, MobileOfflineProfile_Relationships {
}
interface MobileOfflineProfile_Relationships {
}
interface MobileOfflineProfile_Result extends MobileOfflineProfile_Base, MobileOfflineProfile_Relationships {
}
interface MobileOfflineProfile_FormattedResult {
}
interface MobileOfflineProfile_Select {
}
interface MobileOfflineProfile_Expand {
}
interface MobileOfflineProfile_Filter {
}
interface MobileOfflineProfile_Create extends MobileOfflineProfile {
}
interface MobileOfflineProfile_Update extends MobileOfflineProfile {
}
interface MobileOfflineProfileItem_Base extends WebEntity {
}
interface MobileOfflineProfileItem_Fixed extends WebEntity_Fixed {
  mobileofflineprofileitemid: string;
}
interface MobileOfflineProfileItem extends MobileOfflineProfileItem_Base, MobileOfflineProfileItem_Relationships {
}
interface MobileOfflineProfileItem_Relationships {
}
interface MobileOfflineProfileItem_Result extends MobileOfflineProfileItem_Base, MobileOfflineProfileItem_Relationships {
}
interface MobileOfflineProfileItem_FormattedResult {
}
interface MobileOfflineProfileItem_Select {
}
interface MobileOfflineProfileItem_Expand {
}
interface MobileOfflineProfileItem_Filter {
}
interface MobileOfflineProfileItem_Create extends MobileOfflineProfileItem {
}
interface MobileOfflineProfileItem_Update extends MobileOfflineProfileItem {
}
interface MobileOfflineProfileItemAssociation_Base extends WebEntity {
}
interface MobileOfflineProfileItemAssociation_Fixed extends WebEntity_Fixed {
  mobileofflineprofileitemassociationid: string;
}
interface MobileOfflineProfileItemAssociation extends MobileOfflineProfileItemAssociation_Base, MobileOfflineProfileItemAssociation_Relationships {
}
interface MobileOfflineProfileItemAssociation_Relationships {
}
interface MobileOfflineProfileItemAssociation_Result extends MobileOfflineProfileItemAssociation_Base, MobileOfflineProfileItemAssociation_Relationships {
}
interface MobileOfflineProfileItemAssociation_FormattedResult {
}
interface MobileOfflineProfileItemAssociation_Select {
}
interface MobileOfflineProfileItemAssociation_Expand {
}
interface MobileOfflineProfileItemAssociation_Filter {
}
interface MobileOfflineProfileItemAssociation_Create extends MobileOfflineProfileItemAssociation {
}
interface MobileOfflineProfileItemAssociation_Update extends MobileOfflineProfileItemAssociation {
}
interface MonthlyFiscalCalendar_Base extends WebEntity {
}
interface MonthlyFiscalCalendar_Fixed extends WebEntity_Fixed {
  userfiscalcalendarid: string;
}
interface MonthlyFiscalCalendar extends MonthlyFiscalCalendar_Base, MonthlyFiscalCalendar_Relationships {
}
interface MonthlyFiscalCalendar_Relationships {
}
interface MonthlyFiscalCalendar_Result extends MonthlyFiscalCalendar_Base, MonthlyFiscalCalendar_Relationships {
}
interface MonthlyFiscalCalendar_FormattedResult {
}
interface MonthlyFiscalCalendar_Select {
}
interface MonthlyFiscalCalendar_Expand {
}
interface MonthlyFiscalCalendar_Filter {
}
interface MonthlyFiscalCalendar_Create extends MonthlyFiscalCalendar {
}
interface MonthlyFiscalCalendar_Update extends MonthlyFiscalCalendar {
}
interface msdyn_AIBDataset_Base extends WebEntity {
}
interface msdyn_AIBDataset_Fixed extends WebEntity_Fixed {
  msdyn_aibdatasetid: string;
}
interface msdyn_AIBDataset extends msdyn_AIBDataset_Base, msdyn_AIBDataset_Relationships {
}
interface msdyn_AIBDataset_Relationships {
}
interface msdyn_AIBDataset_Result extends msdyn_AIBDataset_Base, msdyn_AIBDataset_Relationships {
}
interface msdyn_AIBDataset_FormattedResult {
}
interface msdyn_AIBDataset_Select {
}
interface msdyn_AIBDataset_Expand {
}
interface msdyn_AIBDataset_Filter {
}
interface msdyn_AIBDataset_Create extends msdyn_AIBDataset {
}
interface msdyn_AIBDataset_Update extends msdyn_AIBDataset {
}
interface msdyn_AIBDatasetFile_Base extends WebEntity {
}
interface msdyn_AIBDatasetFile_Fixed extends WebEntity_Fixed {
  msdyn_aibdatasetfileid: string;
}
interface msdyn_AIBDatasetFile extends msdyn_AIBDatasetFile_Base, msdyn_AIBDatasetFile_Relationships {
}
interface msdyn_AIBDatasetFile_Relationships {
}
interface msdyn_AIBDatasetFile_Result extends msdyn_AIBDatasetFile_Base, msdyn_AIBDatasetFile_Relationships {
}
interface msdyn_AIBDatasetFile_FormattedResult {
}
interface msdyn_AIBDatasetFile_Select {
}
interface msdyn_AIBDatasetFile_Expand {
}
interface msdyn_AIBDatasetFile_Filter {
}
interface msdyn_AIBDatasetFile_Create extends msdyn_AIBDatasetFile {
}
interface msdyn_AIBDatasetFile_Update extends msdyn_AIBDatasetFile {
}
interface msdyn_AIBDatasetRecord_Base extends WebEntity {
}
interface msdyn_AIBDatasetRecord_Fixed extends WebEntity_Fixed {
  msdyn_aibdatasetrecordid: string;
}
interface msdyn_AIBDatasetRecord extends msdyn_AIBDatasetRecord_Base, msdyn_AIBDatasetRecord_Relationships {
}
interface msdyn_AIBDatasetRecord_Relationships {
}
interface msdyn_AIBDatasetRecord_Result extends msdyn_AIBDatasetRecord_Base, msdyn_AIBDatasetRecord_Relationships {
}
interface msdyn_AIBDatasetRecord_FormattedResult {
}
interface msdyn_AIBDatasetRecord_Select {
}
interface msdyn_AIBDatasetRecord_Expand {
}
interface msdyn_AIBDatasetRecord_Filter {
}
interface msdyn_AIBDatasetRecord_Create extends msdyn_AIBDatasetRecord {
}
interface msdyn_AIBDatasetRecord_Update extends msdyn_AIBDatasetRecord {
}
interface msdyn_AIBDatasetsContainer_Base extends WebEntity {
}
interface msdyn_AIBDatasetsContainer_Fixed extends WebEntity_Fixed {
  msdyn_aibdatasetscontainerid: string;
}
interface msdyn_AIBDatasetsContainer extends msdyn_AIBDatasetsContainer_Base, msdyn_AIBDatasetsContainer_Relationships {
}
interface msdyn_AIBDatasetsContainer_Relationships {
}
interface msdyn_AIBDatasetsContainer_Result extends msdyn_AIBDatasetsContainer_Base, msdyn_AIBDatasetsContainer_Relationships {
}
interface msdyn_AIBDatasetsContainer_FormattedResult {
}
interface msdyn_AIBDatasetsContainer_Select {
}
interface msdyn_AIBDatasetsContainer_Expand {
}
interface msdyn_AIBDatasetsContainer_Filter {
}
interface msdyn_AIBDatasetsContainer_Create extends msdyn_AIBDatasetsContainer {
}
interface msdyn_AIBDatasetsContainer_Update extends msdyn_AIBDatasetsContainer {
}
interface msdyn_AIBFile_Base extends WebEntity {
}
interface msdyn_AIBFile_Fixed extends WebEntity_Fixed {
  msdyn_aibfileid: string;
}
interface msdyn_AIBFile extends msdyn_AIBFile_Base, msdyn_AIBFile_Relationships {
}
interface msdyn_AIBFile_Relationships {
}
interface msdyn_AIBFile_Result extends msdyn_AIBFile_Base, msdyn_AIBFile_Relationships {
}
interface msdyn_AIBFile_FormattedResult {
}
interface msdyn_AIBFile_Select {
}
interface msdyn_AIBFile_Expand {
}
interface msdyn_AIBFile_Filter {
}
interface msdyn_AIBFile_Create extends msdyn_AIBFile {
}
interface msdyn_AIBFile_Update extends msdyn_AIBFile {
}
interface msdyn_AIBFileAttachedData_Base extends WebEntity {
}
interface msdyn_AIBFileAttachedData_Fixed extends WebEntity_Fixed {
  msdyn_aibfileattacheddataid: string;
}
interface msdyn_AIBFileAttachedData extends msdyn_AIBFileAttachedData_Base, msdyn_AIBFileAttachedData_Relationships {
}
interface msdyn_AIBFileAttachedData_Relationships {
}
interface msdyn_AIBFileAttachedData_Result extends msdyn_AIBFileAttachedData_Base, msdyn_AIBFileAttachedData_Relationships {
}
interface msdyn_AIBFileAttachedData_FormattedResult {
}
interface msdyn_AIBFileAttachedData_Select {
}
interface msdyn_AIBFileAttachedData_Expand {
}
interface msdyn_AIBFileAttachedData_Filter {
}
interface msdyn_AIBFileAttachedData_Create extends msdyn_AIBFileAttachedData {
}
interface msdyn_AIBFileAttachedData_Update extends msdyn_AIBFileAttachedData {
}
interface msdyn_AIConfiguration_Base extends WebEntity {
}
interface msdyn_AIConfiguration_Fixed extends WebEntity_Fixed {
  msdyn_aiconfigurationid: string;
}
interface msdyn_AIConfiguration extends msdyn_AIConfiguration_Base, msdyn_AIConfiguration_Relationships {
}
interface msdyn_AIConfiguration_Relationships {
}
interface msdyn_AIConfiguration_Result extends msdyn_AIConfiguration_Base, msdyn_AIConfiguration_Relationships {
}
interface msdyn_AIConfiguration_FormattedResult {
}
interface msdyn_AIConfiguration_Select {
}
interface msdyn_AIConfiguration_Expand {
}
interface msdyn_AIConfiguration_Filter {
}
interface msdyn_AIConfiguration_Create extends msdyn_AIConfiguration {
}
interface msdyn_AIConfiguration_Update extends msdyn_AIConfiguration {
}
interface msdyn_AIFpTrainingDocument_Base extends WebEntity {
}
interface msdyn_AIFpTrainingDocument_Fixed extends WebEntity_Fixed {
  msdyn_aifptrainingdocumentid: string;
}
interface msdyn_AIFpTrainingDocument extends msdyn_AIFpTrainingDocument_Base, msdyn_AIFpTrainingDocument_Relationships {
}
interface msdyn_AIFpTrainingDocument_Relationships {
}
interface msdyn_AIFpTrainingDocument_Result extends msdyn_AIFpTrainingDocument_Base, msdyn_AIFpTrainingDocument_Relationships {
}
interface msdyn_AIFpTrainingDocument_FormattedResult {
}
interface msdyn_AIFpTrainingDocument_Select {
}
interface msdyn_AIFpTrainingDocument_Expand {
}
interface msdyn_AIFpTrainingDocument_Filter {
}
interface msdyn_AIFpTrainingDocument_Create extends msdyn_AIFpTrainingDocument {
}
interface msdyn_AIFpTrainingDocument_Update extends msdyn_AIFpTrainingDocument {
}
interface msdyn_AIModel_Base extends WebEntity {
}
interface msdyn_AIModel_Fixed extends WebEntity_Fixed {
  msdyn_aimodelid: string;
}
interface msdyn_AIModel extends msdyn_AIModel_Base, msdyn_AIModel_Relationships {
}
interface msdyn_AIModel_Relationships {
}
interface msdyn_AIModel_Result extends msdyn_AIModel_Base, msdyn_AIModel_Relationships {
}
interface msdyn_AIModel_FormattedResult {
}
interface msdyn_AIModel_Select {
}
interface msdyn_AIModel_Expand {
}
interface msdyn_AIModel_Filter {
}
interface msdyn_AIModel_Create extends msdyn_AIModel {
}
interface msdyn_AIModel_Update extends msdyn_AIModel {
}
interface msdyn_AIOdImage_Base extends WebEntity {
}
interface msdyn_AIOdImage_Fixed extends WebEntity_Fixed {
  msdyn_aiodimageid: string;
}
interface msdyn_AIOdImage extends msdyn_AIOdImage_Base, msdyn_AIOdImage_Relationships {
}
interface msdyn_AIOdImage_Relationships {
}
interface msdyn_AIOdImage_Result extends msdyn_AIOdImage_Base, msdyn_AIOdImage_Relationships {
}
interface msdyn_AIOdImage_FormattedResult {
}
interface msdyn_AIOdImage_Select {
}
interface msdyn_AIOdImage_Expand {
}
interface msdyn_AIOdImage_Filter {
}
interface msdyn_AIOdImage_Create extends msdyn_AIOdImage {
}
interface msdyn_AIOdImage_Update extends msdyn_AIOdImage {
}
interface msdyn_AIOdLabel_Base extends WebEntity {
}
interface msdyn_AIOdLabel_Fixed extends WebEntity_Fixed {
  msdyn_aiodlabelid: string;
}
interface msdyn_AIOdLabel extends msdyn_AIOdLabel_Base, msdyn_AIOdLabel_Relationships {
}
interface msdyn_AIOdLabel_Relationships {
}
interface msdyn_AIOdLabel_Result extends msdyn_AIOdLabel_Base, msdyn_AIOdLabel_Relationships {
}
interface msdyn_AIOdLabel_FormattedResult {
}
interface msdyn_AIOdLabel_Select {
}
interface msdyn_AIOdLabel_Expand {
}
interface msdyn_AIOdLabel_Filter {
}
interface msdyn_AIOdLabel_Create extends msdyn_AIOdLabel {
}
interface msdyn_AIOdLabel_Update extends msdyn_AIOdLabel {
}
interface msdyn_aiodlabel_msdyn_aiconfiguration_Base extends WebEntity {
}
interface msdyn_aiodlabel_msdyn_aiconfiguration_Fixed extends WebEntity_Fixed {
  msdyn_aiodlabel_msdyn_aiconfigurationid: string;
}
interface msdyn_aiodlabel_msdyn_aiconfiguration extends msdyn_aiodlabel_msdyn_aiconfiguration_Base, msdyn_aiodlabel_msdyn_aiconfiguration_Relationships {
}
interface msdyn_aiodlabel_msdyn_aiconfiguration_Relationships {
}
interface msdyn_aiodlabel_msdyn_aiconfiguration_Result extends msdyn_aiodlabel_msdyn_aiconfiguration_Base, msdyn_aiodlabel_msdyn_aiconfiguration_Relationships {
}
interface msdyn_aiodlabel_msdyn_aiconfiguration_FormattedResult {
}
interface msdyn_aiodlabel_msdyn_aiconfiguration_Select {
}
interface msdyn_aiodlabel_msdyn_aiconfiguration_Expand {
}
interface msdyn_aiodlabel_msdyn_aiconfiguration_Filter {
}
interface msdyn_aiodlabel_msdyn_aiconfiguration_Create extends msdyn_aiodlabel_msdyn_aiconfiguration {
}
interface msdyn_aiodlabel_msdyn_aiconfiguration_Update extends msdyn_aiodlabel_msdyn_aiconfiguration {
}
interface msdyn_AIOdTrainingBoundingBox_Base extends WebEntity {
}
interface msdyn_AIOdTrainingBoundingBox_Fixed extends WebEntity_Fixed {
  msdyn_aiodtrainingboundingboxid: string;
}
interface msdyn_AIOdTrainingBoundingBox extends msdyn_AIOdTrainingBoundingBox_Base, msdyn_AIOdTrainingBoundingBox_Relationships {
}
interface msdyn_AIOdTrainingBoundingBox_Relationships {
}
interface msdyn_AIOdTrainingBoundingBox_Result extends msdyn_AIOdTrainingBoundingBox_Base, msdyn_AIOdTrainingBoundingBox_Relationships {
}
interface msdyn_AIOdTrainingBoundingBox_FormattedResult {
}
interface msdyn_AIOdTrainingBoundingBox_Select {
}
interface msdyn_AIOdTrainingBoundingBox_Expand {
}
interface msdyn_AIOdTrainingBoundingBox_Filter {
}
interface msdyn_AIOdTrainingBoundingBox_Create extends msdyn_AIOdTrainingBoundingBox {
}
interface msdyn_AIOdTrainingBoundingBox_Update extends msdyn_AIOdTrainingBoundingBox {
}
interface msdyn_AIOdTrainingImage_Base extends WebEntity {
}
interface msdyn_AIOdTrainingImage_Fixed extends WebEntity_Fixed {
  msdyn_aiodtrainingimageid: string;
}
interface msdyn_AIOdTrainingImage extends msdyn_AIOdTrainingImage_Base, msdyn_AIOdTrainingImage_Relationships {
}
interface msdyn_AIOdTrainingImage_Relationships {
}
interface msdyn_AIOdTrainingImage_Result extends msdyn_AIOdTrainingImage_Base, msdyn_AIOdTrainingImage_Relationships {
}
interface msdyn_AIOdTrainingImage_FormattedResult {
}
interface msdyn_AIOdTrainingImage_Select {
}
interface msdyn_AIOdTrainingImage_Expand {
}
interface msdyn_AIOdTrainingImage_Filter {
}
interface msdyn_AIOdTrainingImage_Create extends msdyn_AIOdTrainingImage {
}
interface msdyn_AIOdTrainingImage_Update extends msdyn_AIOdTrainingImage {
}
interface msdyn_AITemplate_Base extends WebEntity {
}
interface msdyn_AITemplate_Fixed extends WebEntity_Fixed {
  msdyn_aitemplateid: string;
}
interface msdyn_AITemplate extends msdyn_AITemplate_Base, msdyn_AITemplate_Relationships {
}
interface msdyn_AITemplate_Relationships {
}
interface msdyn_AITemplate_Result extends msdyn_AITemplate_Base, msdyn_AITemplate_Relationships {
}
interface msdyn_AITemplate_FormattedResult {
}
interface msdyn_AITemplate_Select {
}
interface msdyn_AITemplate_Expand {
}
interface msdyn_AITemplate_Filter {
}
interface msdyn_AITemplate_Create extends msdyn_AITemplate {
}
interface msdyn_AITemplate_Update extends msdyn_AITemplate {
}
interface msdyn_analysiscomponent_Base extends WebEntity {
}
interface msdyn_analysiscomponent_Fixed extends WebEntity_Fixed {
  msdyn_analysiscomponentid: string;
}
interface msdyn_analysiscomponent extends msdyn_analysiscomponent_Base, msdyn_analysiscomponent_Relationships {
}
interface msdyn_analysiscomponent_Relationships {
}
interface msdyn_analysiscomponent_Result extends msdyn_analysiscomponent_Base, msdyn_analysiscomponent_Relationships {
}
interface msdyn_analysiscomponent_FormattedResult {
}
interface msdyn_analysiscomponent_Select {
}
interface msdyn_analysiscomponent_Expand {
}
interface msdyn_analysiscomponent_Filter {
}
interface msdyn_analysiscomponent_Create extends msdyn_analysiscomponent {
}
interface msdyn_analysiscomponent_Update extends msdyn_analysiscomponent {
}
interface msdyn_analysisjob_Base extends WebEntity {
}
interface msdyn_analysisjob_Fixed extends WebEntity_Fixed {
  msdyn_analysisjobid: string;
}
interface msdyn_analysisjob extends msdyn_analysisjob_Base, msdyn_analysisjob_Relationships {
}
interface msdyn_analysisjob_Relationships {
}
interface msdyn_analysisjob_Result extends msdyn_analysisjob_Base, msdyn_analysisjob_Relationships {
}
interface msdyn_analysisjob_FormattedResult {
}
interface msdyn_analysisjob_Select {
}
interface msdyn_analysisjob_Expand {
}
interface msdyn_analysisjob_Filter {
}
interface msdyn_analysisjob_Create extends msdyn_analysisjob {
}
interface msdyn_analysisjob_Update extends msdyn_analysisjob {
}
interface msdyn_analysisresult_Base extends WebEntity {
}
interface msdyn_analysisresult_Fixed extends WebEntity_Fixed {
  msdyn_analysisresultid: string;
}
interface msdyn_analysisresult extends msdyn_analysisresult_Base, msdyn_analysisresult_Relationships {
}
interface msdyn_analysisresult_Relationships {
}
interface msdyn_analysisresult_Result extends msdyn_analysisresult_Base, msdyn_analysisresult_Relationships {
}
interface msdyn_analysisresult_FormattedResult {
}
interface msdyn_analysisresult_Select {
}
interface msdyn_analysisresult_Expand {
}
interface msdyn_analysisresult_Filter {
}
interface msdyn_analysisresult_Create extends msdyn_analysisresult {
}
interface msdyn_analysisresult_Update extends msdyn_analysisresult {
}
interface msdyn_analysisresultdetail_Base extends WebEntity {
}
interface msdyn_analysisresultdetail_Fixed extends WebEntity_Fixed {
  msdyn_analysisresultdetailid: string;
}
interface msdyn_analysisresultdetail extends msdyn_analysisresultdetail_Base, msdyn_analysisresultdetail_Relationships {
}
interface msdyn_analysisresultdetail_Relationships {
}
interface msdyn_analysisresultdetail_Result extends msdyn_analysisresultdetail_Base, msdyn_analysisresultdetail_Relationships {
}
interface msdyn_analysisresultdetail_FormattedResult {
}
interface msdyn_analysisresultdetail_Select {
}
interface msdyn_analysisresultdetail_Expand {
}
interface msdyn_analysisresultdetail_Filter {
}
interface msdyn_analysisresultdetail_Create extends msdyn_analysisresultdetail {
}
interface msdyn_analysisresultdetail_Update extends msdyn_analysisresultdetail {
}
interface msdyn_componentlayer_Base extends WebEntity {
}
interface msdyn_componentlayer_Fixed extends WebEntity_Fixed {
  msdyn_componentlayerid: string;
}
interface msdyn_componentlayer extends msdyn_componentlayer_Base, msdyn_componentlayer_Relationships {
}
interface msdyn_componentlayer_Relationships {
}
interface msdyn_componentlayer_Result extends msdyn_componentlayer_Base, msdyn_componentlayer_Relationships {
}
interface msdyn_componentlayer_FormattedResult {
}
interface msdyn_componentlayer_Select {
}
interface msdyn_componentlayer_Expand {
}
interface msdyn_componentlayer_Filter {
}
interface msdyn_componentlayer_Create extends msdyn_componentlayer {
}
interface msdyn_componentlayer_Update extends msdyn_componentlayer {
}
interface msdyn_componentlayerdatasource_Base extends WebEntity {
}
interface msdyn_componentlayerdatasource_Fixed extends WebEntity_Fixed {
  msdyn_componentlayerdatasourceid: string;
}
interface msdyn_componentlayerdatasource extends msdyn_componentlayerdatasource_Base, msdyn_componentlayerdatasource_Relationships {
}
interface msdyn_componentlayerdatasource_Relationships {
}
interface msdyn_componentlayerdatasource_Result extends msdyn_componentlayerdatasource_Base, msdyn_componentlayerdatasource_Relationships {
}
interface msdyn_componentlayerdatasource_FormattedResult {
}
interface msdyn_componentlayerdatasource_Select {
}
interface msdyn_componentlayerdatasource_Expand {
}
interface msdyn_componentlayerdatasource_Filter {
}
interface msdyn_componentlayerdatasource_Create extends msdyn_componentlayerdatasource {
}
interface msdyn_componentlayerdatasource_Update extends msdyn_componentlayerdatasource {
}
interface msdyn_dataflow_Base extends WebEntity {
}
interface msdyn_dataflow_Fixed extends WebEntity_Fixed {
  msdyn_dataflowid: string;
}
interface msdyn_dataflow extends msdyn_dataflow_Base, msdyn_dataflow_Relationships {
}
interface msdyn_dataflow_Relationships {
}
interface msdyn_dataflow_Result extends msdyn_dataflow_Base, msdyn_dataflow_Relationships {
}
interface msdyn_dataflow_FormattedResult {
}
interface msdyn_dataflow_Select {
}
interface msdyn_dataflow_Expand {
}
interface msdyn_dataflow_Filter {
}
interface msdyn_dataflow_Create extends msdyn_dataflow {
}
interface msdyn_dataflow_Update extends msdyn_dataflow {
}
interface msdyn_federatedarticle_Base extends WebEntity {
}
interface msdyn_federatedarticle_Fixed extends WebEntity_Fixed {
  msdyn_federatedarticleid: string;
}
interface msdyn_federatedarticle extends msdyn_federatedarticle_Base, msdyn_federatedarticle_Relationships {
}
interface msdyn_federatedarticle_Relationships {
}
interface msdyn_federatedarticle_Result extends msdyn_federatedarticle_Base, msdyn_federatedarticle_Relationships {
}
interface msdyn_federatedarticle_FormattedResult {
}
interface msdyn_federatedarticle_Select {
}
interface msdyn_federatedarticle_Expand {
}
interface msdyn_federatedarticle_Filter {
}
interface msdyn_federatedarticle_Create extends msdyn_federatedarticle {
}
interface msdyn_federatedarticle_Update extends msdyn_federatedarticle {
}
interface msdyn_federatedarticleincident_Base extends WebEntity {
}
interface msdyn_federatedarticleincident_Fixed extends WebEntity_Fixed {
  msdyn_federatedarticleincidentid: string;
}
interface msdyn_federatedarticleincident extends msdyn_federatedarticleincident_Base, msdyn_federatedarticleincident_Relationships {
}
interface msdyn_federatedarticleincident_Relationships {
}
interface msdyn_federatedarticleincident_Result extends msdyn_federatedarticleincident_Base, msdyn_federatedarticleincident_Relationships {
}
interface msdyn_federatedarticleincident_FormattedResult {
}
interface msdyn_federatedarticleincident_Select {
}
interface msdyn_federatedarticleincident_Expand {
}
interface msdyn_federatedarticleincident_Filter {
}
interface msdyn_federatedarticleincident_Create extends msdyn_federatedarticleincident {
}
interface msdyn_federatedarticleincident_Update extends msdyn_federatedarticleincident {
}
interface msdyn_helppage_Base extends WebEntity {
}
interface msdyn_helppage_Fixed extends WebEntity_Fixed {
  msdyn_helppageid: string;
}
interface msdyn_helppage extends msdyn_helppage_Base, msdyn_helppage_Relationships {
}
interface msdyn_helppage_Relationships {
}
interface msdyn_helppage_Result extends msdyn_helppage_Base, msdyn_helppage_Relationships {
}
interface msdyn_helppage_FormattedResult {
}
interface msdyn_helppage_Select {
}
interface msdyn_helppage_Expand {
}
interface msdyn_helppage_Filter {
}
interface msdyn_helppage_Create extends msdyn_helppage {
}
interface msdyn_helppage_Update extends msdyn_helppage {
}
interface msdyn_kalanguagesetting_Base extends WebEntity {
}
interface msdyn_kalanguagesetting_Fixed extends WebEntity_Fixed {
  msdyn_kalanguagesettingid: string;
}
interface msdyn_kalanguagesetting extends msdyn_kalanguagesetting_Base, msdyn_kalanguagesetting_Relationships {
}
interface msdyn_kalanguagesetting_Relationships {
}
interface msdyn_kalanguagesetting_Result extends msdyn_kalanguagesetting_Base, msdyn_kalanguagesetting_Relationships {
}
interface msdyn_kalanguagesetting_FormattedResult {
}
interface msdyn_kalanguagesetting_Select {
}
interface msdyn_kalanguagesetting_Expand {
}
interface msdyn_kalanguagesetting_Filter {
}
interface msdyn_kalanguagesetting_Create extends msdyn_kalanguagesetting {
}
interface msdyn_kalanguagesetting_Update extends msdyn_kalanguagesetting {
}
interface msdyn_kmfederatedsearchconfig_Base extends WebEntity {
}
interface msdyn_kmfederatedsearchconfig_Fixed extends WebEntity_Fixed {
  msdyn_kmfederatedsearchconfigid: string;
}
interface msdyn_kmfederatedsearchconfig extends msdyn_kmfederatedsearchconfig_Base, msdyn_kmfederatedsearchconfig_Relationships {
}
interface msdyn_kmfederatedsearchconfig_Relationships {
}
interface msdyn_kmfederatedsearchconfig_Result extends msdyn_kmfederatedsearchconfig_Base, msdyn_kmfederatedsearchconfig_Relationships {
}
interface msdyn_kmfederatedsearchconfig_FormattedResult {
}
interface msdyn_kmfederatedsearchconfig_Select {
}
interface msdyn_kmfederatedsearchconfig_Expand {
}
interface msdyn_kmfederatedsearchconfig_Filter {
}
interface msdyn_kmfederatedsearchconfig_Create extends msdyn_kmfederatedsearchconfig {
}
interface msdyn_kmfederatedsearchconfig_Update extends msdyn_kmfederatedsearchconfig {
}
interface msdyn_kmpersonalizationsetting_Base extends WebEntity {
}
interface msdyn_kmpersonalizationsetting_Fixed extends WebEntity_Fixed {
  msdyn_kmpersonalizationsettingid: string;
}
interface msdyn_kmpersonalizationsetting extends msdyn_kmpersonalizationsetting_Base, msdyn_kmpersonalizationsetting_Relationships {
}
interface msdyn_kmpersonalizationsetting_Relationships {
}
interface msdyn_kmpersonalizationsetting_Result extends msdyn_kmpersonalizationsetting_Base, msdyn_kmpersonalizationsetting_Relationships {
}
interface msdyn_kmpersonalizationsetting_FormattedResult {
}
interface msdyn_kmpersonalizationsetting_Select {
}
interface msdyn_kmpersonalizationsetting_Expand {
}
interface msdyn_kmpersonalizationsetting_Filter {
}
interface msdyn_kmpersonalizationsetting_Create extends msdyn_kmpersonalizationsetting {
}
interface msdyn_kmpersonalizationsetting_Update extends msdyn_kmpersonalizationsetting {
}
interface msdyn_knowledgearticleimage_Base extends WebEntity {
}
interface msdyn_knowledgearticleimage_Fixed extends WebEntity_Fixed {
  msdyn_knowledgearticleimageid: string;
}
interface msdyn_knowledgearticleimage extends msdyn_knowledgearticleimage_Base, msdyn_knowledgearticleimage_Relationships {
}
interface msdyn_knowledgearticleimage_Relationships {
}
interface msdyn_knowledgearticleimage_Result extends msdyn_knowledgearticleimage_Base, msdyn_knowledgearticleimage_Relationships {
}
interface msdyn_knowledgearticleimage_FormattedResult {
}
interface msdyn_knowledgearticleimage_Select {
}
interface msdyn_knowledgearticleimage_Expand {
}
interface msdyn_knowledgearticleimage_Filter {
}
interface msdyn_knowledgearticleimage_Create extends msdyn_knowledgearticleimage {
}
interface msdyn_knowledgearticleimage_Update extends msdyn_knowledgearticleimage {
}
interface msdyn_knowledgearticletemplate_Base extends WebEntity {
}
interface msdyn_knowledgearticletemplate_Fixed extends WebEntity_Fixed {
  msdyn_knowledgearticletemplateid: string;
}
interface msdyn_knowledgearticletemplate extends msdyn_knowledgearticletemplate_Base, msdyn_knowledgearticletemplate_Relationships {
}
interface msdyn_knowledgearticletemplate_Relationships {
}
interface msdyn_knowledgearticletemplate_Result extends msdyn_knowledgearticletemplate_Base, msdyn_knowledgearticletemplate_Relationships {
}
interface msdyn_knowledgearticletemplate_FormattedResult {
}
interface msdyn_knowledgearticletemplate_Select {
}
interface msdyn_knowledgearticletemplate_Expand {
}
interface msdyn_knowledgearticletemplate_Filter {
}
interface msdyn_knowledgearticletemplate_Create extends msdyn_knowledgearticletemplate {
}
interface msdyn_knowledgearticletemplate_Update extends msdyn_knowledgearticletemplate {
}
interface msdyn_knowledgeinteractioninsight_Base extends WebEntity {
}
interface msdyn_knowledgeinteractioninsight_Fixed extends WebEntity_Fixed {
  msdyn_knowledgeinteractioninsightid: string;
}
interface msdyn_knowledgeinteractioninsight extends msdyn_knowledgeinteractioninsight_Base, msdyn_knowledgeinteractioninsight_Relationships {
}
interface msdyn_knowledgeinteractioninsight_Relationships {
}
interface msdyn_knowledgeinteractioninsight_Result extends msdyn_knowledgeinteractioninsight_Base, msdyn_knowledgeinteractioninsight_Relationships {
}
interface msdyn_knowledgeinteractioninsight_FormattedResult {
}
interface msdyn_knowledgeinteractioninsight_Select {
}
interface msdyn_knowledgeinteractioninsight_Expand {
}
interface msdyn_knowledgeinteractioninsight_Filter {
}
interface msdyn_knowledgeinteractioninsight_Create extends msdyn_knowledgeinteractioninsight {
}
interface msdyn_knowledgeinteractioninsight_Update extends msdyn_knowledgeinteractioninsight {
}
interface msdyn_knowledgepersonalfilter_Base extends WebEntity {
}
interface msdyn_knowledgepersonalfilter_Fixed extends WebEntity_Fixed {
  msdyn_knowledgepersonalfilterid: string;
}
interface msdyn_knowledgepersonalfilter extends msdyn_knowledgepersonalfilter_Base, msdyn_knowledgepersonalfilter_Relationships {
}
interface msdyn_knowledgepersonalfilter_Relationships {
}
interface msdyn_knowledgepersonalfilter_Result extends msdyn_knowledgepersonalfilter_Base, msdyn_knowledgepersonalfilter_Relationships {
}
interface msdyn_knowledgepersonalfilter_FormattedResult {
}
interface msdyn_knowledgepersonalfilter_Select {
}
interface msdyn_knowledgepersonalfilter_Expand {
}
interface msdyn_knowledgepersonalfilter_Filter {
}
interface msdyn_knowledgepersonalfilter_Create extends msdyn_knowledgepersonalfilter {
}
interface msdyn_knowledgepersonalfilter_Update extends msdyn_knowledgepersonalfilter {
}
interface msdyn_knowledgesearchfilter_Base extends WebEntity {
}
interface msdyn_knowledgesearchfilter_Fixed extends WebEntity_Fixed {
  msdyn_knowledgesearchfilterid: string;
}
interface msdyn_knowledgesearchfilter extends msdyn_knowledgesearchfilter_Base, msdyn_knowledgesearchfilter_Relationships {
}
interface msdyn_knowledgesearchfilter_Relationships {
}
interface msdyn_knowledgesearchfilter_Result extends msdyn_knowledgesearchfilter_Base, msdyn_knowledgesearchfilter_Relationships {
}
interface msdyn_knowledgesearchfilter_FormattedResult {
}
interface msdyn_knowledgesearchfilter_Select {
}
interface msdyn_knowledgesearchfilter_Expand {
}
interface msdyn_knowledgesearchfilter_Filter {
}
interface msdyn_knowledgesearchfilter_Create extends msdyn_knowledgesearchfilter {
}
interface msdyn_knowledgesearchfilter_Update extends msdyn_knowledgesearchfilter {
}
interface msdyn_knowledgesearchinsight_Base extends WebEntity {
}
interface msdyn_knowledgesearchinsight_Fixed extends WebEntity_Fixed {
  msdyn_knowledgesearchinsightid: string;
}
interface msdyn_knowledgesearchinsight extends msdyn_knowledgesearchinsight_Base, msdyn_knowledgesearchinsight_Relationships {
}
interface msdyn_knowledgesearchinsight_Relationships {
}
interface msdyn_knowledgesearchinsight_Result extends msdyn_knowledgesearchinsight_Base, msdyn_knowledgesearchinsight_Relationships {
}
interface msdyn_knowledgesearchinsight_FormattedResult {
}
interface msdyn_knowledgesearchinsight_Select {
}
interface msdyn_knowledgesearchinsight_Expand {
}
interface msdyn_knowledgesearchinsight_Filter {
}
interface msdyn_knowledgesearchinsight_Create extends msdyn_knowledgesearchinsight {
}
interface msdyn_knowledgesearchinsight_Update extends msdyn_knowledgesearchinsight {
}
interface msdyn_nonrelationalds_Base extends WebEntity {
}
interface msdyn_nonrelationalds_Fixed extends WebEntity_Fixed {
  msdyn_nonrelationaldsid: string;
}
interface msdyn_nonrelationalds extends msdyn_nonrelationalds_Base, msdyn_nonrelationalds_Relationships {
}
interface msdyn_nonrelationalds_Relationships {
}
interface msdyn_nonrelationalds_Result extends msdyn_nonrelationalds_Base, msdyn_nonrelationalds_Relationships {
}
interface msdyn_nonrelationalds_FormattedResult {
}
interface msdyn_nonrelationalds_Select {
}
interface msdyn_nonrelationalds_Expand {
}
interface msdyn_nonrelationalds_Filter {
}
interface msdyn_nonrelationalds_Create extends msdyn_nonrelationalds {
}
interface msdyn_nonrelationalds_Update extends msdyn_nonrelationalds {
}
interface msdyn_odatav4ds_Base extends WebEntity {
}
interface msdyn_odatav4ds_Fixed extends WebEntity_Fixed {
  msdyn_odatav4dsid: string;
}
interface msdyn_odatav4ds extends msdyn_odatav4ds_Base, msdyn_odatav4ds_Relationships {
}
interface msdyn_odatav4ds_Relationships {
}
interface msdyn_odatav4ds_Result extends msdyn_odatav4ds_Base, msdyn_odatav4ds_Relationships {
}
interface msdyn_odatav4ds_FormattedResult {
}
interface msdyn_odatav4ds_Select {
}
interface msdyn_odatav4ds_Expand {
}
interface msdyn_odatav4ds_Filter {
}
interface msdyn_odatav4ds_Create extends msdyn_odatav4ds {
}
interface msdyn_odatav4ds_Update extends msdyn_odatav4ds {
}
interface msdyn_pminferredtask_Base extends WebEntity {
}
interface msdyn_pminferredtask_Fixed extends WebEntity_Fixed {
  msdyn_pminferredtaskid: string;
}
interface msdyn_pminferredtask extends msdyn_pminferredtask_Base, msdyn_pminferredtask_Relationships {
}
interface msdyn_pminferredtask_Relationships {
}
interface msdyn_pminferredtask_Result extends msdyn_pminferredtask_Base, msdyn_pminferredtask_Relationships {
}
interface msdyn_pminferredtask_FormattedResult {
}
interface msdyn_pminferredtask_Select {
}
interface msdyn_pminferredtask_Expand {
}
interface msdyn_pminferredtask_Filter {
}
interface msdyn_pminferredtask_Create extends msdyn_pminferredtask {
}
interface msdyn_pminferredtask_Update extends msdyn_pminferredtask {
}
interface msdyn_pmrecording_Base extends WebEntity {
}
interface msdyn_pmrecording_Fixed extends WebEntity_Fixed {
  msdyn_pmrecordingid: string;
}
interface msdyn_pmrecording extends msdyn_pmrecording_Base, msdyn_pmrecording_Relationships {
}
interface msdyn_pmrecording_Relationships {
}
interface msdyn_pmrecording_Result extends msdyn_pmrecording_Base, msdyn_pmrecording_Relationships {
}
interface msdyn_pmrecording_FormattedResult {
}
interface msdyn_pmrecording_Select {
}
interface msdyn_pmrecording_Expand {
}
interface msdyn_pmrecording_Filter {
}
interface msdyn_pmrecording_Create extends msdyn_pmrecording {
}
interface msdyn_pmrecording_Update extends msdyn_pmrecording {
}
interface msdyn_richtextfile_Base extends WebEntity {
}
interface msdyn_richtextfile_Fixed extends WebEntity_Fixed {
  msdyn_richtextfileid: string;
}
interface msdyn_richtextfile extends msdyn_richtextfile_Base, msdyn_richtextfile_Relationships {
}
interface msdyn_richtextfile_Relationships {
}
interface msdyn_richtextfile_Result extends msdyn_richtextfile_Base, msdyn_richtextfile_Relationships {
}
interface msdyn_richtextfile_FormattedResult {
}
interface msdyn_richtextfile_Select {
}
interface msdyn_richtextfile_Expand {
}
interface msdyn_richtextfile_Filter {
}
interface msdyn_richtextfile_Create extends msdyn_richtextfile {
}
interface msdyn_richtextfile_Update extends msdyn_richtextfile {
}
interface msdyn_serviceconfiguration_Base extends WebEntity {
}
interface msdyn_serviceconfiguration_Fixed extends WebEntity_Fixed {
  msdyn_serviceconfigurationid: string;
}
interface msdyn_serviceconfiguration extends msdyn_serviceconfiguration_Base, msdyn_serviceconfiguration_Relationships {
}
interface msdyn_serviceconfiguration_Relationships {
}
interface msdyn_serviceconfiguration_Result extends msdyn_serviceconfiguration_Base, msdyn_serviceconfiguration_Relationships {
}
interface msdyn_serviceconfiguration_FormattedResult {
}
interface msdyn_serviceconfiguration_Select {
}
interface msdyn_serviceconfiguration_Expand {
}
interface msdyn_serviceconfiguration_Filter {
}
interface msdyn_serviceconfiguration_Create extends msdyn_serviceconfiguration {
}
interface msdyn_serviceconfiguration_Update extends msdyn_serviceconfiguration {
}
interface msdyn_slakpi_Base extends WebEntity {
}
interface msdyn_slakpi_Fixed extends WebEntity_Fixed {
  msdyn_slakpiid: string;
}
interface msdyn_slakpi extends msdyn_slakpi_Base, msdyn_slakpi_Relationships {
}
interface msdyn_slakpi_Relationships {
}
interface msdyn_slakpi_Result extends msdyn_slakpi_Base, msdyn_slakpi_Relationships {
}
interface msdyn_slakpi_FormattedResult {
}
interface msdyn_slakpi_Select {
}
interface msdyn_slakpi_Expand {
}
interface msdyn_slakpi_Filter {
}
interface msdyn_slakpi_Create extends msdyn_slakpi {
}
interface msdyn_slakpi_Update extends msdyn_slakpi {
}
interface msdyn_solutioncomponentdatasource_Base extends WebEntity {
}
interface msdyn_solutioncomponentdatasource_Fixed extends WebEntity_Fixed {
  msdyn_solutioncomponentdatasourceid: string;
}
interface msdyn_solutioncomponentdatasource extends msdyn_solutioncomponentdatasource_Base, msdyn_solutioncomponentdatasource_Relationships {
}
interface msdyn_solutioncomponentdatasource_Relationships {
}
interface msdyn_solutioncomponentdatasource_Result extends msdyn_solutioncomponentdatasource_Base, msdyn_solutioncomponentdatasource_Relationships {
}
interface msdyn_solutioncomponentdatasource_FormattedResult {
}
interface msdyn_solutioncomponentdatasource_Select {
}
interface msdyn_solutioncomponentdatasource_Expand {
}
interface msdyn_solutioncomponentdatasource_Filter {
}
interface msdyn_solutioncomponentdatasource_Create extends msdyn_solutioncomponentdatasource {
}
interface msdyn_solutioncomponentdatasource_Update extends msdyn_solutioncomponentdatasource {
}
interface msdyn_solutioncomponentsummary_Base extends WebEntity {
}
interface msdyn_solutioncomponentsummary_Fixed extends WebEntity_Fixed {
  msdyn_solutioncomponentsummaryid: string;
}
interface msdyn_solutioncomponentsummary extends msdyn_solutioncomponentsummary_Base, msdyn_solutioncomponentsummary_Relationships {
}
interface msdyn_solutioncomponentsummary_Relationships {
}
interface msdyn_solutioncomponentsummary_Result extends msdyn_solutioncomponentsummary_Base, msdyn_solutioncomponentsummary_Relationships {
}
interface msdyn_solutioncomponentsummary_FormattedResult {
}
interface msdyn_solutioncomponentsummary_Select {
}
interface msdyn_solutioncomponentsummary_Expand {
}
interface msdyn_solutioncomponentsummary_Filter {
}
interface msdyn_solutioncomponentsummary_Create extends msdyn_solutioncomponentsummary {
}
interface msdyn_solutioncomponentsummary_Update extends msdyn_solutioncomponentsummary {
}
interface msdyn_solutionhealthrule_Base extends WebEntity {
}
interface msdyn_solutionhealthrule_Fixed extends WebEntity_Fixed {
  msdyn_solutionhealthruleid: string;
}
interface msdyn_solutionhealthrule extends msdyn_solutionhealthrule_Base, msdyn_solutionhealthrule_Relationships {
}
interface msdyn_solutionhealthrule_Relationships {
}
interface msdyn_solutionhealthrule_Result extends msdyn_solutionhealthrule_Base, msdyn_solutionhealthrule_Relationships {
}
interface msdyn_solutionhealthrule_FormattedResult {
}
interface msdyn_solutionhealthrule_Select {
}
interface msdyn_solutionhealthrule_Expand {
}
interface msdyn_solutionhealthrule_Filter {
}
interface msdyn_solutionhealthrule_Create extends msdyn_solutionhealthrule {
}
interface msdyn_solutionhealthrule_Update extends msdyn_solutionhealthrule {
}
interface msdyn_solutionhealthruleargument_Base extends WebEntity {
}
interface msdyn_solutionhealthruleargument_Fixed extends WebEntity_Fixed {
  msdyn_solutionhealthruleargumentid: string;
}
interface msdyn_solutionhealthruleargument extends msdyn_solutionhealthruleargument_Base, msdyn_solutionhealthruleargument_Relationships {
}
interface msdyn_solutionhealthruleargument_Relationships {
}
interface msdyn_solutionhealthruleargument_Result extends msdyn_solutionhealthruleargument_Base, msdyn_solutionhealthruleargument_Relationships {
}
interface msdyn_solutionhealthruleargument_FormattedResult {
}
interface msdyn_solutionhealthruleargument_Select {
}
interface msdyn_solutionhealthruleargument_Expand {
}
interface msdyn_solutionhealthruleargument_Filter {
}
interface msdyn_solutionhealthruleargument_Create extends msdyn_solutionhealthruleargument {
}
interface msdyn_solutionhealthruleargument_Update extends msdyn_solutionhealthruleargument {
}
interface msdyn_solutionhealthruleset_Base extends WebEntity {
}
interface msdyn_solutionhealthruleset_Fixed extends WebEntity_Fixed {
  msdyn_solutionhealthrulesetid: string;
}
interface msdyn_solutionhealthruleset extends msdyn_solutionhealthruleset_Base, msdyn_solutionhealthruleset_Relationships {
}
interface msdyn_solutionhealthruleset_Relationships {
}
interface msdyn_solutionhealthruleset_Result extends msdyn_solutionhealthruleset_Base, msdyn_solutionhealthruleset_Relationships {
}
interface msdyn_solutionhealthruleset_FormattedResult {
}
interface msdyn_solutionhealthruleset_Select {
}
interface msdyn_solutionhealthruleset_Expand {
}
interface msdyn_solutionhealthruleset_Filter {
}
interface msdyn_solutionhealthruleset_Create extends msdyn_solutionhealthruleset {
}
interface msdyn_solutionhealthruleset_Update extends msdyn_solutionhealthruleset {
}
interface msdyn_solutionhistory_Base extends WebEntity {
}
interface msdyn_solutionhistory_Fixed extends WebEntity_Fixed {
  msdyn_solutionhistoryid: string;
}
interface msdyn_solutionhistory extends msdyn_solutionhistory_Base, msdyn_solutionhistory_Relationships {
}
interface msdyn_solutionhistory_Relationships {
}
interface msdyn_solutionhistory_Result extends msdyn_solutionhistory_Base, msdyn_solutionhistory_Relationships {
}
interface msdyn_solutionhistory_FormattedResult {
}
interface msdyn_solutionhistory_Select {
}
interface msdyn_solutionhistory_Expand {
}
interface msdyn_solutionhistory_Filter {
}
interface msdyn_solutionhistory_Create extends msdyn_solutionhistory {
}
interface msdyn_solutionhistory_Update extends msdyn_solutionhistory {
}
interface msdyn_solutionhistorydatasource_Base extends WebEntity {
}
interface msdyn_solutionhistorydatasource_Fixed extends WebEntity_Fixed {
  msdyn_solutionhistorydatasourceid: string;
}
interface msdyn_solutionhistorydatasource extends msdyn_solutionhistorydatasource_Base, msdyn_solutionhistorydatasource_Relationships {
}
interface msdyn_solutionhistorydatasource_Relationships {
}
interface msdyn_solutionhistorydatasource_Result extends msdyn_solutionhistorydatasource_Base, msdyn_solutionhistorydatasource_Relationships {
}
interface msdyn_solutionhistorydatasource_FormattedResult {
}
interface msdyn_solutionhistorydatasource_Select {
}
interface msdyn_solutionhistorydatasource_Expand {
}
interface msdyn_solutionhistorydatasource_Filter {
}
interface msdyn_solutionhistorydatasource_Create extends msdyn_solutionhistorydatasource {
}
interface msdyn_solutionhistorydatasource_Update extends msdyn_solutionhistorydatasource {
}
interface msdyn_tour_Base extends WebEntity {
}
interface msdyn_tour_Fixed extends WebEntity_Fixed {
  msdyn_tourid: string;
}
interface msdyn_tour extends msdyn_tour_Base, msdyn_tour_Relationships {
}
interface msdyn_tour_Relationships {
}
interface msdyn_tour_Result extends msdyn_tour_Base, msdyn_tour_Relationships {
}
interface msdyn_tour_FormattedResult {
}
interface msdyn_tour_Select {
}
interface msdyn_tour_Expand {
}
interface msdyn_tour_Filter {
}
interface msdyn_tour_Create extends msdyn_tour {
}
interface msdyn_tour_Update extends msdyn_tour {
}
interface msdynce_botcontent_Base extends WebEntity {
}
interface msdynce_botcontent_Fixed extends WebEntity_Fixed {
  msdynce_botcontentid: string;
}
interface msdynce_botcontent extends msdynce_botcontent_Base, msdynce_botcontent_Relationships {
}
interface msdynce_botcontent_Relationships {
}
interface msdynce_botcontent_Result extends msdynce_botcontent_Base, msdynce_botcontent_Relationships {
}
interface msdynce_botcontent_FormattedResult {
}
interface msdynce_botcontent_Select {
}
interface msdynce_botcontent_Expand {
}
interface msdynce_botcontent_Filter {
}
interface msdynce_botcontent_Create extends msdynce_botcontent {
}
interface msdynce_botcontent_Update extends msdynce_botcontent {
}
interface MultiEntitySearch_Base extends WebEntity {
}
interface MultiEntitySearch_Fixed extends WebEntity_Fixed {
  multientitysearchid: string;
}
interface MultiEntitySearch extends MultiEntitySearch_Base, MultiEntitySearch_Relationships {
}
interface MultiEntitySearch_Relationships {
}
interface MultiEntitySearch_Result extends MultiEntitySearch_Base, MultiEntitySearch_Relationships {
}
interface MultiEntitySearch_FormattedResult {
}
interface MultiEntitySearch_Select {
}
interface MultiEntitySearch_Expand {
}
interface MultiEntitySearch_Filter {
}
interface MultiEntitySearch_Create extends MultiEntitySearch {
}
interface MultiEntitySearch_Update extends MultiEntitySearch {
}
interface MultiEntitySearchEntities_Base extends WebEntity {
}
interface MultiEntitySearchEntities_Fixed extends WebEntity_Fixed {
  multientitysearchentityid: string;
}
interface MultiEntitySearchEntities extends MultiEntitySearchEntities_Base, MultiEntitySearchEntities_Relationships {
}
interface MultiEntitySearchEntities_Relationships {
}
interface MultiEntitySearchEntities_Result extends MultiEntitySearchEntities_Base, MultiEntitySearchEntities_Relationships {
}
interface MultiEntitySearchEntities_FormattedResult {
}
interface MultiEntitySearchEntities_Select {
}
interface MultiEntitySearchEntities_Expand {
}
interface MultiEntitySearchEntities_Filter {
}
interface MultiEntitySearchEntities_Create extends MultiEntitySearchEntities {
}
interface MultiEntitySearchEntities_Update extends MultiEntitySearchEntities {
}
interface MultiSelectAttributeOptionValues_Base extends WebEntity {
}
interface MultiSelectAttributeOptionValues_Fixed extends WebEntity_Fixed {
  multiselectfulltextidkey: string;
}
interface MultiSelectAttributeOptionValues extends MultiSelectAttributeOptionValues_Base, MultiSelectAttributeOptionValues_Relationships {
}
interface MultiSelectAttributeOptionValues_Relationships {
}
interface MultiSelectAttributeOptionValues_Result extends MultiSelectAttributeOptionValues_Base, MultiSelectAttributeOptionValues_Relationships {
}
interface MultiSelectAttributeOptionValues_FormattedResult {
}
interface MultiSelectAttributeOptionValues_Select {
}
interface MultiSelectAttributeOptionValues_Expand {
}
interface MultiSelectAttributeOptionValues_Filter {
}
interface MultiSelectAttributeOptionValues_Create extends MultiSelectAttributeOptionValues {
}
interface MultiSelectAttributeOptionValues_Update extends MultiSelectAttributeOptionValues {
}
interface NavigationSetting_Base extends WebEntity {
}
interface NavigationSetting_Fixed extends WebEntity_Fixed {
  navigationsettingid: string;
}
interface NavigationSetting extends NavigationSetting_Base, NavigationSetting_Relationships {
}
interface NavigationSetting_Relationships {
}
interface NavigationSetting_Result extends NavigationSetting_Base, NavigationSetting_Relationships {
}
interface NavigationSetting_FormattedResult {
}
interface NavigationSetting_Select {
}
interface NavigationSetting_Expand {
}
interface NavigationSetting_Filter {
}
interface NavigationSetting_Create extends NavigationSetting {
}
interface NavigationSetting_Update extends NavigationSetting {
}
interface NewProcess_Base extends WebEntity {
}
interface NewProcess_Fixed extends WebEntity_Fixed {
  businessprocessflowinstanceid: string;
}
interface NewProcess extends NewProcess_Base, NewProcess_Relationships {
}
interface NewProcess_Relationships {
}
interface NewProcess_Result extends NewProcess_Base, NewProcess_Relationships {
}
interface NewProcess_FormattedResult {
}
interface NewProcess_Select {
}
interface NewProcess_Expand {
}
interface NewProcess_Filter {
}
interface NewProcess_Create extends NewProcess {
}
interface NewProcess_Update extends NewProcess {
}
interface Notification_Base extends WebEntity {
}
interface Notification_Fixed extends WebEntity_Fixed {
  notificationid: string;
}
interface Notification extends Notification_Base, Notification_Relationships {
}
interface Notification_Relationships {
}
interface Notification_Result extends Notification_Base, Notification_Relationships {
}
interface Notification_FormattedResult {
}
interface Notification_Select {
}
interface Notification_Expand {
}
interface Notification_Filter {
}
interface Notification_Create extends Notification {
}
interface Notification_Update extends Notification {
}
interface OfficeDocument_Base extends WebEntity {
}
interface OfficeDocument_Fixed extends WebEntity_Fixed {
  officedocumentid: string;
}
interface OfficeDocument extends OfficeDocument_Base, OfficeDocument_Relationships {
}
interface OfficeDocument_Relationships {
}
interface OfficeDocument_Result extends OfficeDocument_Base, OfficeDocument_Relationships {
}
interface OfficeDocument_FormattedResult {
}
interface OfficeDocument_Select {
}
interface OfficeDocument_Expand {
}
interface OfficeDocument_Filter {
}
interface OfficeDocument_Create extends OfficeDocument {
}
interface OfficeDocument_Update extends OfficeDocument {
}
interface OfficeGraphDocument_Base extends WebEntity {
}
interface OfficeGraphDocument_Fixed extends WebEntity_Fixed {
  officegraphdocumentid: string;
}
interface OfficeGraphDocument extends OfficeGraphDocument_Base, OfficeGraphDocument_Relationships {
}
interface OfficeGraphDocument_Relationships {
}
interface OfficeGraphDocument_Result extends OfficeGraphDocument_Base, OfficeGraphDocument_Relationships {
}
interface OfficeGraphDocument_FormattedResult {
}
interface OfficeGraphDocument_Select {
}
interface OfficeGraphDocument_Expand {
}
interface OfficeGraphDocument_Filter {
}
interface OfficeGraphDocument_Create extends OfficeGraphDocument {
}
interface OfficeGraphDocument_Update extends OfficeGraphDocument {
}
interface OfflineCommandDefinition_Base extends WebEntity {
}
interface OfflineCommandDefinition_Fixed extends WebEntity_Fixed {
  commanddefinitionid: string;
}
interface OfflineCommandDefinition extends OfflineCommandDefinition_Base, OfflineCommandDefinition_Relationships {
}
interface OfflineCommandDefinition_Relationships {
}
interface OfflineCommandDefinition_Result extends OfflineCommandDefinition_Base, OfflineCommandDefinition_Relationships {
}
interface OfflineCommandDefinition_FormattedResult {
}
interface OfflineCommandDefinition_Select {
}
interface OfflineCommandDefinition_Expand {
}
interface OfflineCommandDefinition_Filter {
}
interface OfflineCommandDefinition_Create extends OfflineCommandDefinition {
}
interface OfflineCommandDefinition_Update extends OfflineCommandDefinition {
}
interface OptionSet_Base extends WebEntity {
}
interface OptionSet_Fixed extends WebEntity_Fixed {
  optionsetid: string;
}
interface OptionSet extends OptionSet_Base, OptionSet_Relationships {
}
interface OptionSet_Relationships {
}
interface OptionSet_Result extends OptionSet_Base, OptionSet_Relationships {
}
interface OptionSet_FormattedResult {
}
interface OptionSet_Select {
}
interface OptionSet_Expand {
}
interface OptionSet_Filter {
}
interface OptionSet_Create extends OptionSet {
}
interface OptionSet_Update extends OptionSet {
}
interface Organization_Base extends WebEntity {
}
interface Organization_Fixed extends WebEntity_Fixed {
  organizationid: string;
}
interface Organization extends Organization_Base, Organization_Relationships {
}
interface Organization_Relationships {
}
interface Organization_Result extends Organization_Base, Organization_Relationships {
}
interface Organization_FormattedResult {
}
interface Organization_Select {
}
interface Organization_Expand {
}
interface Organization_Filter {
}
interface Organization_Create extends Organization {
}
interface Organization_Update extends Organization {
}
interface organizationdatasyncsubscription_Base extends WebEntity {
}
interface organizationdatasyncsubscription_Fixed extends WebEntity_Fixed {
  organizationdatasyncsubscriptionid: string;
}
interface organizationdatasyncsubscription extends organizationdatasyncsubscription_Base, organizationdatasyncsubscription_Relationships {
}
interface organizationdatasyncsubscription_Relationships {
}
interface organizationdatasyncsubscription_Result extends organizationdatasyncsubscription_Base, organizationdatasyncsubscription_Relationships {
}
interface organizationdatasyncsubscription_FormattedResult {
}
interface organizationdatasyncsubscription_Select {
}
interface organizationdatasyncsubscription_Expand {
}
interface organizationdatasyncsubscription_Filter {
}
interface organizationdatasyncsubscription_Create extends organizationdatasyncsubscription {
}
interface organizationdatasyncsubscription_Update extends organizationdatasyncsubscription {
}
interface organizationdatasyncsubscriptionentity_Base extends WebEntity {
}
interface organizationdatasyncsubscriptionentity_Fixed extends WebEntity_Fixed {
  organizationdatasyncsubscriptionentityid: string;
}
interface organizationdatasyncsubscriptionentity extends organizationdatasyncsubscriptionentity_Base, organizationdatasyncsubscriptionentity_Relationships {
}
interface organizationdatasyncsubscriptionentity_Relationships {
}
interface organizationdatasyncsubscriptionentity_Result extends organizationdatasyncsubscriptionentity_Base, organizationdatasyncsubscriptionentity_Relationships {
}
interface organizationdatasyncsubscriptionentity_FormattedResult {
}
interface organizationdatasyncsubscriptionentity_Select {
}
interface organizationdatasyncsubscriptionentity_Expand {
}
interface organizationdatasyncsubscriptionentity_Filter {
}
interface organizationdatasyncsubscriptionentity_Create extends organizationdatasyncsubscriptionentity {
}
interface organizationdatasyncsubscriptionentity_Update extends organizationdatasyncsubscriptionentity {
}
interface OrganizationSetting_Base extends WebEntity {
}
interface OrganizationSetting_Fixed extends WebEntity_Fixed {
  organizationsettingid: string;
}
interface OrganizationSetting extends OrganizationSetting_Base, OrganizationSetting_Relationships {
}
interface OrganizationSetting_Relationships {
}
interface OrganizationSetting_Result extends OrganizationSetting_Base, OrganizationSetting_Relationships {
}
interface OrganizationSetting_FormattedResult {
}
interface OrganizationSetting_Select {
}
interface OrganizationSetting_Expand {
}
interface OrganizationSetting_Filter {
}
interface OrganizationSetting_Create extends OrganizationSetting {
}
interface OrganizationSetting_Update extends OrganizationSetting {
}
interface OrganizationStatistic_Base extends WebEntity {
}
interface OrganizationStatistic_Fixed extends WebEntity_Fixed {
  organizationstatisticid: string;
}
interface OrganizationStatistic extends OrganizationStatistic_Base, OrganizationStatistic_Relationships {
}
interface OrganizationStatistic_Relationships {
}
interface OrganizationStatistic_Result extends OrganizationStatistic_Base, OrganizationStatistic_Relationships {
}
interface OrganizationStatistic_FormattedResult {
}
interface OrganizationStatistic_Select {
}
interface OrganizationStatistic_Expand {
}
interface OrganizationStatistic_Filter {
}
interface OrganizationStatistic_Create extends OrganizationStatistic {
}
interface OrganizationStatistic_Update extends OrganizationStatistic {
}
interface OrganizationUI_Base extends WebEntity {
}
interface OrganizationUI_Fixed extends WebEntity_Fixed {
  formid: string;
}
interface OrganizationUI extends OrganizationUI_Base, OrganizationUI_Relationships {
}
interface OrganizationUI_Relationships {
}
interface OrganizationUI_Result extends OrganizationUI_Base, OrganizationUI_Relationships {
}
interface OrganizationUI_FormattedResult {
}
interface OrganizationUI_Select {
}
interface OrganizationUI_Expand {
}
interface OrganizationUI_Filter {
}
interface OrganizationUI_Create extends OrganizationUI {
}
interface OrganizationUI_Update extends OrganizationUI {
}
interface OrgInsightsMetric_Base extends WebEntity {
}
interface OrgInsightsMetric_Fixed extends WebEntity_Fixed {
  orginsightsmetricid: string;
}
interface OrgInsightsMetric extends OrgInsightsMetric_Base, OrgInsightsMetric_Relationships {
}
interface OrgInsightsMetric_Relationships {
}
interface OrgInsightsMetric_Result extends OrgInsightsMetric_Base, OrgInsightsMetric_Relationships {
}
interface OrgInsightsMetric_FormattedResult {
}
interface OrgInsightsMetric_Select {
}
interface OrgInsightsMetric_Expand {
}
interface OrgInsightsMetric_Filter {
}
interface OrgInsightsMetric_Create extends OrgInsightsMetric {
}
interface OrgInsightsMetric_Update extends OrgInsightsMetric {
}
interface OrgInsightsNotification_Base extends WebEntity {
}
interface OrgInsightsNotification_Fixed extends WebEntity_Fixed {
  orginsightsnotificationid: string;
}
interface OrgInsightsNotification extends OrgInsightsNotification_Base, OrgInsightsNotification_Relationships {
}
interface OrgInsightsNotification_Relationships {
}
interface OrgInsightsNotification_Result extends OrgInsightsNotification_Base, OrgInsightsNotification_Relationships {
}
interface OrgInsightsNotification_FormattedResult {
}
interface OrgInsightsNotification_Select {
}
interface OrgInsightsNotification_Expand {
}
interface OrgInsightsNotification_Filter {
}
interface OrgInsightsNotification_Create extends OrgInsightsNotification {
}
interface OrgInsightsNotification_Update extends OrgInsightsNotification {
}
interface Owner_Base extends WebEntity {
}
interface Owner_Fixed extends WebEntity_Fixed {
  ownerid: string;
}
interface Owner extends Owner_Base, Owner_Relationships {
}
interface Owner_Relationships {
}
interface Owner_Result extends Owner_Base, Owner_Relationships {
}
interface Owner_FormattedResult {
}
interface Owner_Select {
}
interface Owner_Expand {
}
interface Owner_Filter {
}
interface Owner_Create extends Owner {
}
interface Owner_Update extends Owner {
}
interface OwnerMapping_Base extends WebEntity {
}
interface OwnerMapping_Fixed extends WebEntity_Fixed {
  ownermappingid: string;
}
interface OwnerMapping extends OwnerMapping_Base, OwnerMapping_Relationships {
}
interface OwnerMapping_Relationships {
}
interface OwnerMapping_Result extends OwnerMapping_Base, OwnerMapping_Relationships {
}
interface OwnerMapping_FormattedResult {
}
interface OwnerMapping_Select {
}
interface OwnerMapping_Expand {
}
interface OwnerMapping_Filter {
}
interface OwnerMapping_Create extends OwnerMapping {
}
interface OwnerMapping_Update extends OwnerMapping {
}
interface package_Base extends WebEntity {
}
interface package_Fixed extends WebEntity_Fixed {
  packageid: string;
}
interface package extends package_Base, package_Relationships {
}
interface package_Relationships {
}
interface package_Result extends package_Base, package_Relationships {
}
interface package_FormattedResult {
}
interface package_Select {
}
interface package_Expand {
}
interface package_Filter {
}
interface package_Create extends package {
}
interface package_Update extends package {
}
interface package_solution_Base extends WebEntity {
}
interface package_solution_Fixed extends WebEntity_Fixed {
  package_solutionid: string;
}
interface package_solution extends package_solution_Base, package_solution_Relationships {
}
interface package_solution_Relationships {
}
interface package_solution_Result extends package_solution_Base, package_solution_Relationships {
}
interface package_solution_FormattedResult {
}
interface package_solution_Select {
}
interface package_solution_Expand {
}
interface package_solution_Filter {
}
interface package_solution_Create extends package_solution {
}
interface package_solution_Update extends package_solution {
}
interface PartnerApplication_Base extends WebEntity {
}
interface PartnerApplication_Fixed extends WebEntity_Fixed {
  partnerapplicationid: string;
}
interface PartnerApplication extends PartnerApplication_Base, PartnerApplication_Relationships {
}
interface PartnerApplication_Relationships {
}
interface PartnerApplication_Result extends PartnerApplication_Base, PartnerApplication_Relationships {
}
interface PartnerApplication_FormattedResult {
}
interface PartnerApplication_Select {
}
interface PartnerApplication_Expand {
}
interface PartnerApplication_Filter {
}
interface PartnerApplication_Create extends PartnerApplication {
}
interface PartnerApplication_Update extends PartnerApplication {
}
interface pc_BankAccount_Base extends WebEntity {
}
interface pc_BankAccount_Fixed extends WebEntity_Fixed {
  pc_bankaccountid: string;
}
interface pc_BankAccount extends pc_BankAccount_Base, pc_BankAccount_Relationships {
}
interface pc_BankAccount_Relationships {
}
interface pc_BankAccount_Result extends pc_BankAccount_Base, pc_BankAccount_Relationships {
}
interface pc_BankAccount_FormattedResult {
}
interface pc_BankAccount_Select {
}
interface pc_BankAccount_Expand {
}
interface pc_BankAccount_Filter {
}
interface pc_BankAccount_Create extends pc_BankAccount {
}
interface pc_BankAccount_Update extends pc_BankAccount {
}
interface pc_Participation_Base extends WebEntity {
}
interface pc_Participation_Fixed extends WebEntity_Fixed {
  pc_participationid: string;
}
interface pc_Participation extends pc_Participation_Base, pc_Participation_Relationships {
}
interface pc_Participation_Relationships {
}
interface pc_Participation_Result extends pc_Participation_Base, pc_Participation_Relationships {
}
interface pc_Participation_FormattedResult {
}
interface pc_Participation_Select {
}
interface pc_Participation_Expand {
}
interface pc_Participation_Filter {
}
interface pc_Participation_Create extends pc_Participation {
}
interface pc_Participation_Update extends pc_Participation {
}
interface pc_ParticipationFeeExemption_Base extends WebEntity {
}
interface pc_ParticipationFeeExemption_Fixed extends WebEntity_Fixed {
  pc_participationfeeexemptionid: string;
}
interface pc_ParticipationFeeExemption extends pc_ParticipationFeeExemption_Base, pc_ParticipationFeeExemption_Relationships {
}
interface pc_ParticipationFeeExemption_Relationships {
}
interface pc_ParticipationFeeExemption_Result extends pc_ParticipationFeeExemption_Base, pc_ParticipationFeeExemption_Relationships {
}
interface pc_ParticipationFeeExemption_FormattedResult {
}
interface pc_ParticipationFeeExemption_Select {
}
interface pc_ParticipationFeeExemption_Expand {
}
interface pc_ParticipationFeeExemption_Filter {
}
interface pc_ParticipationFeeExemption_Create extends pc_ParticipationFeeExemption {
}
interface pc_ParticipationFeeExemption_Update extends pc_ParticipationFeeExemption {
}
interface pc_Payment_Base extends WebEntity {
}
interface pc_Payment_Fixed extends WebEntity_Fixed {
  pc_paymentid: string;
}
interface pc_Payment extends pc_Payment_Base, pc_Payment_Relationships {
}
interface pc_Payment_Relationships {
}
interface pc_Payment_Result extends pc_Payment_Base, pc_Payment_Relationships {
}
interface pc_Payment_FormattedResult {
}
interface pc_Payment_Select {
}
interface pc_Payment_Expand {
}
interface pc_Payment_Filter {
}
interface pc_Payment_Create extends pc_Payment {
}
interface pc_Payment_Update extends pc_Payment {
}
interface pc_ScheduledJob_Base extends WebEntity {
}
interface pc_ScheduledJob_Fixed extends WebEntity_Fixed {
  pc_scheduledjobid: string;
}
interface pc_ScheduledJob extends pc_ScheduledJob_Base, pc_ScheduledJob_Relationships {
}
interface pc_ScheduledJob_Relationships {
}
interface pc_ScheduledJob_Result extends pc_ScheduledJob_Base, pc_ScheduledJob_Relationships {
}
interface pc_ScheduledJob_FormattedResult {
}
interface pc_ScheduledJob_Select {
}
interface pc_ScheduledJob_Expand {
}
interface pc_ScheduledJob_Filter {
}
interface pc_ScheduledJob_Create extends pc_ScheduledJob {
}
interface pc_ScheduledJob_Update extends pc_ScheduledJob {
}
interface pc_Settings_Base extends WebEntity {
}
interface pc_Settings_Fixed extends WebEntity_Fixed {
  pc_settingsid: string;
}
interface pc_Settings extends pc_Settings_Base, pc_Settings_Relationships {
}
interface pc_Settings_Relationships {
}
interface pc_Settings_Result extends pc_Settings_Base, pc_Settings_Relationships {
}
interface pc_Settings_FormattedResult {
}
interface pc_Settings_Select {
}
interface pc_Settings_Expand {
}
interface pc_Settings_Filter {
}
interface pc_Settings_Create extends pc_Settings {
}
interface pc_Settings_Update extends pc_Settings {
}
interface pc_Transaction_Base extends WebEntity {
}
interface pc_Transaction_Fixed extends WebEntity_Fixed {
  pc_transactionid: string;
}
interface pc_Transaction extends pc_Transaction_Base, pc_Transaction_Relationships {
}
interface pc_Transaction_Relationships {
}
interface pc_Transaction_Result extends pc_Transaction_Base, pc_Transaction_Relationships {
}
interface pc_Transaction_FormattedResult {
}
interface pc_Transaction_Select {
}
interface pc_Transaction_Expand {
}
interface pc_Transaction_Filter {
}
interface pc_Transaction_Create extends pc_Transaction {
}
interface pc_Transaction_Update extends pc_Transaction {
}
interface PDFSetting_Base extends WebEntity {
}
interface PDFSetting_Fixed extends WebEntity_Fixed {
  pdfsettingid: string;
}
interface PDFSetting extends PDFSetting_Base, PDFSetting_Relationships {
}
interface PDFSetting_Relationships {
}
interface PDFSetting_Result extends PDFSetting_Base, PDFSetting_Relationships {
}
interface PDFSetting_FormattedResult {
}
interface PDFSetting_Select {
}
interface PDFSetting_Expand {
}
interface PDFSetting_Filter {
}
interface PDFSetting_Create extends PDFSetting {
}
interface PDFSetting_Update extends PDFSetting {
}
interface PersonalDocumentTemplate_Base extends WebEntity {
}
interface PersonalDocumentTemplate_Fixed extends WebEntity_Fixed {
  personaldocumenttemplateid: string;
}
interface PersonalDocumentTemplate extends PersonalDocumentTemplate_Base, PersonalDocumentTemplate_Relationships {
}
interface PersonalDocumentTemplate_Relationships {
}
interface PersonalDocumentTemplate_Result extends PersonalDocumentTemplate_Base, PersonalDocumentTemplate_Relationships {
}
interface PersonalDocumentTemplate_FormattedResult {
}
interface PersonalDocumentTemplate_Select {
}
interface PersonalDocumentTemplate_Expand {
}
interface PersonalDocumentTemplate_Filter {
}
interface PersonalDocumentTemplate_Create extends PersonalDocumentTemplate {
}
interface PersonalDocumentTemplate_Update extends PersonalDocumentTemplate {
}
interface PhoneCall_Base extends WebEntity {
}
interface PhoneCall_Fixed extends WebEntity_Fixed {
  activityid: string;
}
interface PhoneCall extends PhoneCall_Base, PhoneCall_Relationships {
}
interface PhoneCall_Relationships {
}
interface PhoneCall_Result extends PhoneCall_Base, PhoneCall_Relationships {
}
interface PhoneCall_FormattedResult {
}
interface PhoneCall_Select {
}
interface PhoneCall_Expand {
}
interface PhoneCall_Filter {
}
interface PhoneCall_Create extends PhoneCall {
}
interface PhoneCall_Update extends PhoneCall {
}
interface PickListMapping_Base extends WebEntity {
}
interface PickListMapping_Fixed extends WebEntity_Fixed {
  picklistmappingid: string;
}
interface PickListMapping extends PickListMapping_Base, PickListMapping_Relationships {
}
interface PickListMapping_Relationships {
}
interface PickListMapping_Result extends PickListMapping_Base, PickListMapping_Relationships {
}
interface PickListMapping_FormattedResult {
}
interface PickListMapping_Select {
}
interface PickListMapping_Expand {
}
interface PickListMapping_Filter {
}
interface PickListMapping_Create extends PickListMapping {
}
interface PickListMapping_Update extends PickListMapping {
}
interface PluginAssembly_Base extends WebEntity {
}
interface PluginAssembly_Fixed extends WebEntity_Fixed {
  pluginassemblyid: string;
}
interface PluginAssembly extends PluginAssembly_Base, PluginAssembly_Relationships {
}
interface PluginAssembly_Relationships {
}
interface PluginAssembly_Result extends PluginAssembly_Base, PluginAssembly_Relationships {
}
interface PluginAssembly_FormattedResult {
}
interface PluginAssembly_Select {
}
interface PluginAssembly_Expand {
}
interface PluginAssembly_Filter {
}
interface PluginAssembly_Create extends PluginAssembly {
}
interface PluginAssembly_Update extends PluginAssembly {
}
interface pluginpackage_Base extends WebEntity {
}
interface pluginpackage_Fixed extends WebEntity_Fixed {
  pluginpackageid: string;
}
interface pluginpackage extends pluginpackage_Base, pluginpackage_Relationships {
}
interface pluginpackage_Relationships {
}
interface pluginpackage_Result extends pluginpackage_Base, pluginpackage_Relationships {
}
interface pluginpackage_FormattedResult {
}
interface pluginpackage_Select {
}
interface pluginpackage_Expand {
}
interface pluginpackage_Filter {
}
interface pluginpackage_Create extends pluginpackage {
}
interface pluginpackage_Update extends pluginpackage {
}
interface PluginTraceLog_Base extends WebEntity {
}
interface PluginTraceLog_Fixed extends WebEntity_Fixed {
  plugintracelogid: string;
}
interface PluginTraceLog extends PluginTraceLog_Base, PluginTraceLog_Relationships {
}
interface PluginTraceLog_Relationships {
}
interface PluginTraceLog_Result extends PluginTraceLog_Base, PluginTraceLog_Relationships {
}
interface PluginTraceLog_FormattedResult {
}
interface PluginTraceLog_Select {
}
interface PluginTraceLog_Expand {
}
interface PluginTraceLog_Filter {
}
interface PluginTraceLog_Create extends PluginTraceLog {
}
interface PluginTraceLog_Update extends PluginTraceLog {
}
interface PluginType_Base extends WebEntity {
}
interface PluginType_Fixed extends WebEntity_Fixed {
  plugintypeid: string;
}
interface PluginType extends PluginType_Base, PluginType_Relationships {
}
interface PluginType_Relationships {
}
interface PluginType_Result extends PluginType_Base, PluginType_Relationships {
}
interface PluginType_FormattedResult {
}
interface PluginType_Select {
}
interface PluginType_Expand {
}
interface PluginType_Filter {
}
interface PluginType_Create extends PluginType {
}
interface PluginType_Update extends PluginType {
}
interface PluginTypeStatistic_Base extends WebEntity {
}
interface PluginTypeStatistic_Fixed extends WebEntity_Fixed {
  plugintypestatisticid: string;
}
interface PluginTypeStatistic extends PluginTypeStatistic_Base, PluginTypeStatistic_Relationships {
}
interface PluginTypeStatistic_Relationships {
}
interface PluginTypeStatistic_Result extends PluginTypeStatistic_Base, PluginTypeStatistic_Relationships {
}
interface PluginTypeStatistic_FormattedResult {
}
interface PluginTypeStatistic_Select {
}
interface PluginTypeStatistic_Expand {
}
interface PluginTypeStatistic_Filter {
}
interface PluginTypeStatistic_Create extends PluginTypeStatistic {
}
interface PluginTypeStatistic_Update extends PluginTypeStatistic {
}
interface Position_Base extends WebEntity {
}
interface Position_Fixed extends WebEntity_Fixed {
  positionid: string;
}
interface Position extends Position_Base, Position_Relationships {
}
interface Position_Relationships {
}
interface Position_Result extends Position_Base, Position_Relationships {
}
interface Position_FormattedResult {
}
interface Position_Select {
}
interface Position_Expand {
}
interface Position_Filter {
}
interface Position_Create extends Position {
}
interface Position_Update extends Position {
}
interface Post_Base extends WebEntity {
}
interface Post_Fixed extends WebEntity_Fixed {
  postid: string;
}
interface Post extends Post_Base, Post_Relationships {
}
interface Post_Relationships {
}
interface Post_Result extends Post_Base, Post_Relationships {
}
interface Post_FormattedResult {
}
interface Post_Select {
}
interface Post_Expand {
}
interface Post_Filter {
}
interface Post_Create extends Post {
}
interface Post_Update extends Post {
}
interface PostComment_Base extends WebEntity {
}
interface PostComment_Fixed extends WebEntity_Fixed {
  postcommentid: string;
}
interface PostComment extends PostComment_Base, PostComment_Relationships {
}
interface PostComment_Relationships {
}
interface PostComment_Result extends PostComment_Base, PostComment_Relationships {
}
interface PostComment_FormattedResult {
}
interface PostComment_Select {
}
interface PostComment_Expand {
}
interface PostComment_Filter {
}
interface PostComment_Create extends PostComment {
}
interface PostComment_Update extends PostComment {
}
interface PostFollow_Base extends WebEntity {
}
interface PostFollow_Fixed extends WebEntity_Fixed {
  postfollowid: string;
}
interface PostFollow extends PostFollow_Base, PostFollow_Relationships {
}
interface PostFollow_Relationships {
}
interface PostFollow_Result extends PostFollow_Base, PostFollow_Relationships {
}
interface PostFollow_FormattedResult {
}
interface PostFollow_Select {
}
interface PostFollow_Expand {
}
interface PostFollow_Filter {
}
interface PostFollow_Create extends PostFollow {
}
interface PostFollow_Update extends PostFollow {
}
interface PostLike_Base extends WebEntity {
}
interface PostLike_Fixed extends WebEntity_Fixed {
  postlikeid: string;
}
interface PostLike extends PostLike_Base, PostLike_Relationships {
}
interface PostLike_Relationships {
}
interface PostLike_Result extends PostLike_Base, PostLike_Relationships {
}
interface PostLike_FormattedResult {
}
interface PostLike_Select {
}
interface PostLike_Expand {
}
interface PostLike_Filter {
}
interface PostLike_Create extends PostLike {
}
interface PostLike_Update extends PostLike {
}
interface PostRegarding_Base extends WebEntity {
}
interface PostRegarding_Fixed extends WebEntity_Fixed {
  postregardingid: string;
}
interface PostRegarding extends PostRegarding_Base, PostRegarding_Relationships {
}
interface PostRegarding_Relationships {
}
interface PostRegarding_Result extends PostRegarding_Base, PostRegarding_Relationships {
}
interface PostRegarding_FormattedResult {
}
interface PostRegarding_Select {
}
interface PostRegarding_Expand {
}
interface PostRegarding_Filter {
}
interface PostRegarding_Create extends PostRegarding {
}
interface PostRegarding_Update extends PostRegarding {
}
interface PostRole_Base extends WebEntity {
}
interface PostRole_Fixed extends WebEntity_Fixed {
  postroleid: string;
}
interface PostRole extends PostRole_Base, PostRole_Relationships {
}
interface PostRole_Relationships {
}
interface PostRole_Result extends PostRole_Base, PostRole_Relationships {
}
interface PostRole_FormattedResult {
}
interface PostRole_Select {
}
interface PostRole_Expand {
}
interface PostRole_Filter {
}
interface PostRole_Create extends PostRole {
}
interface PostRole_Update extends PostRole {
}
interface PrincipalAttributeAccessMap_Base extends WebEntity {
}
interface PrincipalAttributeAccessMap_Fixed extends WebEntity_Fixed {
  principalattributeaccessmapid: string;
}
interface PrincipalAttributeAccessMap extends PrincipalAttributeAccessMap_Base, PrincipalAttributeAccessMap_Relationships {
}
interface PrincipalAttributeAccessMap_Relationships {
}
interface PrincipalAttributeAccessMap_Result extends PrincipalAttributeAccessMap_Base, PrincipalAttributeAccessMap_Relationships {
}
interface PrincipalAttributeAccessMap_FormattedResult {
}
interface PrincipalAttributeAccessMap_Select {
}
interface PrincipalAttributeAccessMap_Expand {
}
interface PrincipalAttributeAccessMap_Filter {
}
interface PrincipalAttributeAccessMap_Create extends PrincipalAttributeAccessMap {
}
interface PrincipalAttributeAccessMap_Update extends PrincipalAttributeAccessMap {
}
interface PrincipalEntityBusinessUnitMap_Base extends WebEntity {
}
interface PrincipalEntityBusinessUnitMap_Fixed extends WebEntity_Fixed {
  principalentitybusinessunitmapid: string;
}
interface PrincipalEntityBusinessUnitMap extends PrincipalEntityBusinessUnitMap_Base, PrincipalEntityBusinessUnitMap_Relationships {
}
interface PrincipalEntityBusinessUnitMap_Relationships {
}
interface PrincipalEntityBusinessUnitMap_Result extends PrincipalEntityBusinessUnitMap_Base, PrincipalEntityBusinessUnitMap_Relationships {
}
interface PrincipalEntityBusinessUnitMap_FormattedResult {
}
interface PrincipalEntityBusinessUnitMap_Select {
}
interface PrincipalEntityBusinessUnitMap_Expand {
}
interface PrincipalEntityBusinessUnitMap_Filter {
}
interface PrincipalEntityBusinessUnitMap_Create extends PrincipalEntityBusinessUnitMap {
}
interface PrincipalEntityBusinessUnitMap_Update extends PrincipalEntityBusinessUnitMap {
}
interface PrincipalEntityMap_Base extends WebEntity {
}
interface PrincipalEntityMap_Fixed extends WebEntity_Fixed {
  principalentitymapid: string;
}
interface PrincipalEntityMap extends PrincipalEntityMap_Base, PrincipalEntityMap_Relationships {
}
interface PrincipalEntityMap_Relationships {
}
interface PrincipalEntityMap_Result extends PrincipalEntityMap_Base, PrincipalEntityMap_Relationships {
}
interface PrincipalEntityMap_FormattedResult {
}
interface PrincipalEntityMap_Select {
}
interface PrincipalEntityMap_Expand {
}
interface PrincipalEntityMap_Filter {
}
interface PrincipalEntityMap_Create extends PrincipalEntityMap {
}
interface PrincipalEntityMap_Update extends PrincipalEntityMap {
}
interface PrincipalObjectAccess_Base extends WebEntity {
}
interface PrincipalObjectAccess_Fixed extends WebEntity_Fixed {
  principalobjectaccessid: string;
}
interface PrincipalObjectAccess extends PrincipalObjectAccess_Base, PrincipalObjectAccess_Relationships {
}
interface PrincipalObjectAccess_Relationships {
}
interface PrincipalObjectAccess_Result extends PrincipalObjectAccess_Base, PrincipalObjectAccess_Relationships {
}
interface PrincipalObjectAccess_FormattedResult {
}
interface PrincipalObjectAccess_Select {
}
interface PrincipalObjectAccess_Expand {
}
interface PrincipalObjectAccess_Filter {
}
interface PrincipalObjectAccess_Create extends PrincipalObjectAccess {
}
interface PrincipalObjectAccess_Update extends PrincipalObjectAccess {
}
interface PrincipalObjectAccessReadSnapshot_Base extends WebEntity {
}
interface PrincipalObjectAccessReadSnapshot_Fixed extends WebEntity_Fixed {
  principalobjectaccessreadsnapshotid: string;
}
interface PrincipalObjectAccessReadSnapshot extends PrincipalObjectAccessReadSnapshot_Base, PrincipalObjectAccessReadSnapshot_Relationships {
}
interface PrincipalObjectAccessReadSnapshot_Relationships {
}
interface PrincipalObjectAccessReadSnapshot_Result extends PrincipalObjectAccessReadSnapshot_Base, PrincipalObjectAccessReadSnapshot_Relationships {
}
interface PrincipalObjectAccessReadSnapshot_FormattedResult {
}
interface PrincipalObjectAccessReadSnapshot_Select {
}
interface PrincipalObjectAccessReadSnapshot_Expand {
}
interface PrincipalObjectAccessReadSnapshot_Filter {
}
interface PrincipalObjectAccessReadSnapshot_Create extends PrincipalObjectAccessReadSnapshot {
}
interface PrincipalObjectAccessReadSnapshot_Update extends PrincipalObjectAccessReadSnapshot {
}
interface PrincipalObjectAttributeAccess_Base extends WebEntity {
}
interface PrincipalObjectAttributeAccess_Fixed extends WebEntity_Fixed {
  principalobjectattributeaccessid: string;
}
interface PrincipalObjectAttributeAccess extends PrincipalObjectAttributeAccess_Base, PrincipalObjectAttributeAccess_Relationships {
}
interface PrincipalObjectAttributeAccess_Relationships {
}
interface PrincipalObjectAttributeAccess_Result extends PrincipalObjectAttributeAccess_Base, PrincipalObjectAttributeAccess_Relationships {
}
interface PrincipalObjectAttributeAccess_FormattedResult {
}
interface PrincipalObjectAttributeAccess_Select {
}
interface PrincipalObjectAttributeAccess_Expand {
}
interface PrincipalObjectAttributeAccess_Filter {
}
interface PrincipalObjectAttributeAccess_Create extends PrincipalObjectAttributeAccess {
}
interface PrincipalObjectAttributeAccess_Update extends PrincipalObjectAttributeAccess {
}
interface PrincipalSyncAttributeMap_Base extends WebEntity {
}
interface PrincipalSyncAttributeMap_Fixed extends WebEntity_Fixed {
  principalsyncattributemapid: string;
}
interface PrincipalSyncAttributeMap extends PrincipalSyncAttributeMap_Base, PrincipalSyncAttributeMap_Relationships {
}
interface PrincipalSyncAttributeMap_Relationships {
}
interface PrincipalSyncAttributeMap_Result extends PrincipalSyncAttributeMap_Base, PrincipalSyncAttributeMap_Relationships {
}
interface PrincipalSyncAttributeMap_FormattedResult {
}
interface PrincipalSyncAttributeMap_Select {
}
interface PrincipalSyncAttributeMap_Expand {
}
interface PrincipalSyncAttributeMap_Filter {
}
interface PrincipalSyncAttributeMap_Create extends PrincipalSyncAttributeMap {
}
interface PrincipalSyncAttributeMap_Update extends PrincipalSyncAttributeMap {
}
interface Privilege_Base extends WebEntity {
}
interface Privilege_Fixed extends WebEntity_Fixed {
  privilegeid: string;
}
interface Privilege extends Privilege_Base, Privilege_Relationships {
}
interface Privilege_Relationships {
}
interface Privilege_Result extends Privilege_Base, Privilege_Relationships {
}
interface Privilege_FormattedResult {
}
interface Privilege_Select {
}
interface Privilege_Expand {
}
interface Privilege_Filter {
}
interface Privilege_Create extends Privilege {
}
interface Privilege_Update extends Privilege {
}
interface PrivilegeObjectTypeCodes_Base extends WebEntity {
}
interface PrivilegeObjectTypeCodes_Fixed extends WebEntity_Fixed {
  privilegeobjecttypecodeid: string;
}
interface PrivilegeObjectTypeCodes extends PrivilegeObjectTypeCodes_Base, PrivilegeObjectTypeCodes_Relationships {
}
interface PrivilegeObjectTypeCodes_Relationships {
}
interface PrivilegeObjectTypeCodes_Result extends PrivilegeObjectTypeCodes_Base, PrivilegeObjectTypeCodes_Relationships {
}
interface PrivilegeObjectTypeCodes_FormattedResult {
}
interface PrivilegeObjectTypeCodes_Select {
}
interface PrivilegeObjectTypeCodes_Expand {
}
interface PrivilegeObjectTypeCodes_Filter {
}
interface PrivilegeObjectTypeCodes_Create extends PrivilegeObjectTypeCodes {
}
interface PrivilegeObjectTypeCodes_Update extends PrivilegeObjectTypeCodes {
}
interface ProcessSession_Base extends WebEntity {
}
interface ProcessSession_Fixed extends WebEntity_Fixed {
  processsessionid: string;
}
interface ProcessSession extends ProcessSession_Base, ProcessSession_Relationships {
}
interface ProcessSession_Relationships {
}
interface ProcessSession_Result extends ProcessSession_Base, ProcessSession_Relationships {
}
interface ProcessSession_FormattedResult {
}
interface ProcessSession_Select {
}
interface ProcessSession_Expand {
}
interface ProcessSession_Filter {
}
interface ProcessSession_Create extends ProcessSession {
}
interface ProcessSession_Update extends ProcessSession {
}
interface ProcessStage_Base extends WebEntity {
}
interface ProcessStage_Fixed extends WebEntity_Fixed {
  processstageid: string;
}
interface ProcessStage extends ProcessStage_Base, ProcessStage_Relationships {
}
interface ProcessStage_Relationships {
}
interface ProcessStage_Result extends ProcessStage_Base, ProcessStage_Relationships {
}
interface ProcessStage_FormattedResult {
}
interface ProcessStage_Select {
}
interface ProcessStage_Expand {
}
interface ProcessStage_Filter {
}
interface ProcessStage_Create extends ProcessStage {
}
interface ProcessStage_Update extends ProcessStage {
}
interface processstageparameter_Base extends WebEntity {
}
interface processstageparameter_Fixed extends WebEntity_Fixed {
  processstageparameterid: string;
}
interface processstageparameter extends processstageparameter_Base, processstageparameter_Relationships {
}
interface processstageparameter_Relationships {
}
interface processstageparameter_Result extends processstageparameter_Base, processstageparameter_Relationships {
}
interface processstageparameter_FormattedResult {
}
interface processstageparameter_Select {
}
interface processstageparameter_Expand {
}
interface processstageparameter_Filter {
}
interface processstageparameter_Create extends processstageparameter {
}
interface processstageparameter_Update extends processstageparameter {
}
interface ProcessTrigger_Base extends WebEntity {
}
interface ProcessTrigger_Fixed extends WebEntity_Fixed {
  processtriggerid: string;
}
interface ProcessTrigger extends ProcessTrigger_Base, ProcessTrigger_Relationships {
}
interface ProcessTrigger_Relationships {
}
interface ProcessTrigger_Result extends ProcessTrigger_Base, ProcessTrigger_Relationships {
}
interface ProcessTrigger_FormattedResult {
}
interface ProcessTrigger_Select {
}
interface ProcessTrigger_Expand {
}
interface ProcessTrigger_Filter {
}
interface ProcessTrigger_Create extends ProcessTrigger {
}
interface ProcessTrigger_Update extends ProcessTrigger {
}
interface ProvisionLanguageForUser_Base extends WebEntity {
}
interface ProvisionLanguageForUser_Fixed extends WebEntity_Fixed {
  provisionlanguageforuserid: string;
}
interface ProvisionLanguageForUser extends ProvisionLanguageForUser_Base, ProvisionLanguageForUser_Relationships {
}
interface ProvisionLanguageForUser_Relationships {
}
interface ProvisionLanguageForUser_Result extends ProvisionLanguageForUser_Base, ProvisionLanguageForUser_Relationships {
}
interface ProvisionLanguageForUser_FormattedResult {
}
interface ProvisionLanguageForUser_Select {
}
interface ProvisionLanguageForUser_Expand {
}
interface ProvisionLanguageForUser_Filter {
}
interface ProvisionLanguageForUser_Create extends ProvisionLanguageForUser {
}
interface ProvisionLanguageForUser_Update extends ProvisionLanguageForUser {
}
interface Publisher_Base extends WebEntity {
}
interface Publisher_Fixed extends WebEntity_Fixed {
  publisherid: string;
}
interface Publisher extends Publisher_Base, Publisher_Relationships {
}
interface Publisher_Relationships {
}
interface Publisher_Result extends Publisher_Base, Publisher_Relationships {
}
interface Publisher_FormattedResult {
}
interface Publisher_Select {
}
interface Publisher_Expand {
}
interface Publisher_Filter {
}
interface Publisher_Create extends Publisher {
}
interface Publisher_Update extends Publisher {
}
interface PublisherAddress_Base extends WebEntity {
}
interface PublisherAddress_Fixed extends WebEntity_Fixed {
  publisheraddressid: string;
}
interface PublisherAddress extends PublisherAddress_Base, PublisherAddress_Relationships {
}
interface PublisherAddress_Relationships {
}
interface PublisherAddress_Result extends PublisherAddress_Base, PublisherAddress_Relationships {
}
interface PublisherAddress_FormattedResult {
}
interface PublisherAddress_Select {
}
interface PublisherAddress_Expand {
}
interface PublisherAddress_Filter {
}
interface PublisherAddress_Create extends PublisherAddress {
}
interface PublisherAddress_Update extends PublisherAddress {
}
interface QuarterlyFiscalCalendar_Base extends WebEntity {
}
interface QuarterlyFiscalCalendar_Fixed extends WebEntity_Fixed {
  userfiscalcalendarid: string;
}
interface QuarterlyFiscalCalendar extends QuarterlyFiscalCalendar_Base, QuarterlyFiscalCalendar_Relationships {
}
interface QuarterlyFiscalCalendar_Relationships {
}
interface QuarterlyFiscalCalendar_Result extends QuarterlyFiscalCalendar_Base, QuarterlyFiscalCalendar_Relationships {
}
interface QuarterlyFiscalCalendar_FormattedResult {
}
interface QuarterlyFiscalCalendar_Select {
}
interface QuarterlyFiscalCalendar_Expand {
}
interface QuarterlyFiscalCalendar_Filter {
}
interface QuarterlyFiscalCalendar_Create extends QuarterlyFiscalCalendar {
}
interface QuarterlyFiscalCalendar_Update extends QuarterlyFiscalCalendar {
}
interface Queue_Base extends WebEntity {
}
interface Queue_Fixed extends WebEntity_Fixed {
  queueid: string;
}
interface Queue extends Queue_Base, Queue_Relationships {
}
interface Queue_Relationships {
}
interface Queue_Result extends Queue_Base, Queue_Relationships {
}
interface Queue_FormattedResult {
}
interface Queue_Select {
}
interface Queue_Expand {
}
interface Queue_Filter {
}
interface Queue_Create extends Queue {
}
interface Queue_Update extends Queue {
}
interface QueueItem_Base extends WebEntity {
}
interface QueueItem_Fixed extends WebEntity_Fixed {
  queueitemid: string;
}
interface QueueItem extends QueueItem_Base, QueueItem_Relationships {
}
interface QueueItem_Relationships {
}
interface QueueItem_Result extends QueueItem_Base, QueueItem_Relationships {
}
interface QueueItem_FormattedResult {
}
interface QueueItem_Select {
}
interface QueueItem_Expand {
}
interface QueueItem_Filter {
}
interface QueueItem_Create extends QueueItem {
}
interface QueueItem_Update extends QueueItem {
}
interface QueueItemCount_Base extends WebEntity {
}
interface QueueItemCount_Fixed extends WebEntity_Fixed {
  queueitemcountid: string;
}
interface QueueItemCount extends QueueItemCount_Base, QueueItemCount_Relationships {
}
interface QueueItemCount_Relationships {
}
interface QueueItemCount_Result extends QueueItemCount_Base, QueueItemCount_Relationships {
}
interface QueueItemCount_FormattedResult {
}
interface QueueItemCount_Select {
}
interface QueueItemCount_Expand {
}
interface QueueItemCount_Filter {
}
interface QueueItemCount_Create extends QueueItemCount {
}
interface QueueItemCount_Update extends QueueItemCount {
}
interface QueueMemberCount_Base extends WebEntity {
}
interface QueueMemberCount_Fixed extends WebEntity_Fixed {
  queuemembercountid: string;
}
interface QueueMemberCount extends QueueMemberCount_Base, QueueMemberCount_Relationships {
}
interface QueueMemberCount_Relationships {
}
interface QueueMemberCount_Result extends QueueMemberCount_Base, QueueMemberCount_Relationships {
}
interface QueueMemberCount_FormattedResult {
}
interface QueueMemberCount_Select {
}
interface QueueMemberCount_Expand {
}
interface QueueMemberCount_Filter {
}
interface QueueMemberCount_Create extends QueueMemberCount {
}
interface QueueMemberCount_Update extends QueueMemberCount {
}
interface QueueMembership_Base extends WebEntity {
}
interface QueueMembership_Fixed extends WebEntity_Fixed {
  queuemembershipid: string;
}
interface QueueMembership extends QueueMembership_Base, QueueMembership_Relationships {
}
interface QueueMembership_Relationships {
}
interface QueueMembership_Result extends QueueMembership_Base, QueueMembership_Relationships {
}
interface QueueMembership_FormattedResult {
}
interface QueueMembership_Select {
}
interface QueueMembership_Expand {
}
interface QueueMembership_Filter {
}
interface QueueMembership_Create extends QueueMembership {
}
interface QueueMembership_Update extends QueueMembership {
}
interface RecommendedDocument_Base extends WebEntity {
}
interface RecommendedDocument_Fixed extends WebEntity_Fixed {
  recommendeddocumentid: string;
}
interface RecommendedDocument extends RecommendedDocument_Base, RecommendedDocument_Relationships {
}
interface RecommendedDocument_Relationships {
}
interface RecommendedDocument_Result extends RecommendedDocument_Base, RecommendedDocument_Relationships {
}
interface RecommendedDocument_FormattedResult {
}
interface RecommendedDocument_Select {
}
interface RecommendedDocument_Expand {
}
interface RecommendedDocument_Filter {
}
interface RecommendedDocument_Create extends RecommendedDocument {
}
interface RecommendedDocument_Update extends RecommendedDocument {
}
interface RecordCountSnapshot_Base extends WebEntity {
}
interface RecordCountSnapshot_Fixed extends WebEntity_Fixed {
  recordcountsnapshotid: string;
}
interface RecordCountSnapshot extends RecordCountSnapshot_Base, RecordCountSnapshot_Relationships {
}
interface RecordCountSnapshot_Relationships {
}
interface RecordCountSnapshot_Result extends RecordCountSnapshot_Base, RecordCountSnapshot_Relationships {
}
interface RecordCountSnapshot_FormattedResult {
}
interface RecordCountSnapshot_Select {
}
interface RecordCountSnapshot_Expand {
}
interface RecordCountSnapshot_Filter {
}
interface RecordCountSnapshot_Create extends RecordCountSnapshot {
}
interface RecordCountSnapshot_Update extends RecordCountSnapshot {
}
interface RecurrenceRule_Base extends WebEntity {
}
interface RecurrenceRule_Fixed extends WebEntity_Fixed {
  ruleid: string;
}
interface RecurrenceRule extends RecurrenceRule_Base, RecurrenceRule_Relationships {
}
interface RecurrenceRule_Relationships {
}
interface RecurrenceRule_Result extends RecurrenceRule_Base, RecurrenceRule_Relationships {
}
interface RecurrenceRule_FormattedResult {
}
interface RecurrenceRule_Select {
}
interface RecurrenceRule_Expand {
}
interface RecurrenceRule_Filter {
}
interface RecurrenceRule_Create extends RecurrenceRule {
}
interface RecurrenceRule_Update extends RecurrenceRule {
}
interface RecurringAppointmentMaster_Base extends WebEntity {
}
interface RecurringAppointmentMaster_Fixed extends WebEntity_Fixed {
  activityid: string;
}
interface RecurringAppointmentMaster extends RecurringAppointmentMaster_Base, RecurringAppointmentMaster_Relationships {
}
interface RecurringAppointmentMaster_Relationships {
}
interface RecurringAppointmentMaster_Result extends RecurringAppointmentMaster_Base, RecurringAppointmentMaster_Relationships {
}
interface RecurringAppointmentMaster_FormattedResult {
}
interface RecurringAppointmentMaster_Select {
}
interface RecurringAppointmentMaster_Expand {
}
interface RecurringAppointmentMaster_Filter {
}
interface RecurringAppointmentMaster_Create extends RecurringAppointmentMaster {
}
interface RecurringAppointmentMaster_Update extends RecurringAppointmentMaster {
}
interface Relationship_Base extends WebEntity {
}
interface Relationship_Fixed extends WebEntity_Fixed {
  relationshipid: string;
}
interface Relationship extends Relationship_Base, Relationship_Relationships {
}
interface Relationship_Relationships {
}
interface Relationship_Result extends Relationship_Base, Relationship_Relationships {
}
interface Relationship_FormattedResult {
}
interface Relationship_Select {
}
interface Relationship_Expand {
}
interface Relationship_Filter {
}
interface Relationship_Create extends Relationship {
}
interface Relationship_Update extends Relationship {
}
interface RelationshipAttribute_Base extends WebEntity {
}
interface RelationshipAttribute_Fixed extends WebEntity_Fixed {
  relationshipattributeid: string;
}
interface RelationshipAttribute extends RelationshipAttribute_Base, RelationshipAttribute_Relationships {
}
interface RelationshipAttribute_Relationships {
}
interface RelationshipAttribute_Result extends RelationshipAttribute_Base, RelationshipAttribute_Relationships {
}
interface RelationshipAttribute_FormattedResult {
}
interface RelationshipAttribute_Select {
}
interface RelationshipAttribute_Expand {
}
interface RelationshipAttribute_Filter {
}
interface RelationshipAttribute_Create extends RelationshipAttribute {
}
interface RelationshipAttribute_Update extends RelationshipAttribute {
}
interface RelationshipRole_Base extends WebEntity {
}
interface RelationshipRole_Fixed extends WebEntity_Fixed {
  relationshiproleid: string;
}
interface RelationshipRole extends RelationshipRole_Base, RelationshipRole_Relationships {
}
interface RelationshipRole_Relationships {
}
interface RelationshipRole_Result extends RelationshipRole_Base, RelationshipRole_Relationships {
}
interface RelationshipRole_FormattedResult {
}
interface RelationshipRole_Select {
}
interface RelationshipRole_Expand {
}
interface RelationshipRole_Filter {
}
interface RelationshipRole_Create extends RelationshipRole {
}
interface RelationshipRole_Update extends RelationshipRole {
}
interface RelationshipRoleMap_Base extends WebEntity {
}
interface RelationshipRoleMap_Fixed extends WebEntity_Fixed {
  relationshiprolemapid: string;
}
interface RelationshipRoleMap extends RelationshipRoleMap_Base, RelationshipRoleMap_Relationships {
}
interface RelationshipRoleMap_Relationships {
}
interface RelationshipRoleMap_Result extends RelationshipRoleMap_Base, RelationshipRoleMap_Relationships {
}
interface RelationshipRoleMap_FormattedResult {
}
interface RelationshipRoleMap_Select {
}
interface RelationshipRoleMap_Expand {
}
interface RelationshipRoleMap_Filter {
}
interface RelationshipRoleMap_Create extends RelationshipRoleMap {
}
interface RelationshipRoleMap_Update extends RelationshipRoleMap {
}
interface ReplicationBacklog_Base extends WebEntity {
}
interface ReplicationBacklog_Fixed extends WebEntity_Fixed {
  replicationbacklogid: string;
}
interface ReplicationBacklog extends ReplicationBacklog_Base, ReplicationBacklog_Relationships {
}
interface ReplicationBacklog_Relationships {
}
interface ReplicationBacklog_Result extends ReplicationBacklog_Base, ReplicationBacklog_Relationships {
}
interface ReplicationBacklog_FormattedResult {
}
interface ReplicationBacklog_Select {
}
interface ReplicationBacklog_Expand {
}
interface ReplicationBacklog_Filter {
}
interface ReplicationBacklog_Create extends ReplicationBacklog {
}
interface ReplicationBacklog_Update extends ReplicationBacklog {
}
interface Report_Base extends WebEntity {
}
interface Report_Fixed extends WebEntity_Fixed {
  reportid: string;
}
interface Report extends Report_Base, Report_Relationships {
}
interface Report_Relationships {
}
interface Report_Result extends Report_Base, Report_Relationships {
}
interface Report_FormattedResult {
}
interface Report_Select {
}
interface Report_Expand {
}
interface Report_Filter {
}
interface Report_Create extends Report {
}
interface Report_Update extends Report {
}
interface ReportCategory_Base extends WebEntity {
}
interface ReportCategory_Fixed extends WebEntity_Fixed {
  reportcategoryid: string;
}
interface ReportCategory extends ReportCategory_Base, ReportCategory_Relationships {
}
interface ReportCategory_Relationships {
}
interface ReportCategory_Result extends ReportCategory_Base, ReportCategory_Relationships {
}
interface ReportCategory_FormattedResult {
}
interface ReportCategory_Select {
}
interface ReportCategory_Expand {
}
interface ReportCategory_Filter {
}
interface ReportCategory_Create extends ReportCategory {
}
interface ReportCategory_Update extends ReportCategory {
}
interface ReportEntity_Base extends WebEntity {
}
interface ReportEntity_Fixed extends WebEntity_Fixed {
  reportentityid: string;
}
interface ReportEntity extends ReportEntity_Base, ReportEntity_Relationships {
}
interface ReportEntity_Relationships {
}
interface ReportEntity_Result extends ReportEntity_Base, ReportEntity_Relationships {
}
interface ReportEntity_FormattedResult {
}
interface ReportEntity_Select {
}
interface ReportEntity_Expand {
}
interface ReportEntity_Filter {
}
interface ReportEntity_Create extends ReportEntity {
}
interface ReportEntity_Update extends ReportEntity {
}
interface ReportLink_Base extends WebEntity {
}
interface ReportLink_Fixed extends WebEntity_Fixed {
  reportlinkid: string;
}
interface ReportLink extends ReportLink_Base, ReportLink_Relationships {
}
interface ReportLink_Relationships {
}
interface ReportLink_Result extends ReportLink_Base, ReportLink_Relationships {
}
interface ReportLink_FormattedResult {
}
interface ReportLink_Select {
}
interface ReportLink_Expand {
}
interface ReportLink_Filter {
}
interface ReportLink_Create extends ReportLink {
}
interface ReportLink_Update extends ReportLink {
}
interface ReportVisibility_Base extends WebEntity {
}
interface ReportVisibility_Fixed extends WebEntity_Fixed {
  reportvisibilityid: string;
}
interface ReportVisibility extends ReportVisibility_Base, ReportVisibility_Relationships {
}
interface ReportVisibility_Relationships {
}
interface ReportVisibility_Result extends ReportVisibility_Base, ReportVisibility_Relationships {
}
interface ReportVisibility_FormattedResult {
}
interface ReportVisibility_Select {
}
interface ReportVisibility_Expand {
}
interface ReportVisibility_Filter {
}
interface ReportVisibility_Create extends ReportVisibility {
}
interface ReportVisibility_Update extends ReportVisibility {
}
interface revokeinheritedaccessrecordstracker_Base extends WebEntity {
}
interface revokeinheritedaccessrecordstracker_Fixed extends WebEntity_Fixed {
  revokeinheritedaccessrecordstrackerid: string;
}
interface revokeinheritedaccessrecordstracker extends revokeinheritedaccessrecordstracker_Base, revokeinheritedaccessrecordstracker_Relationships {
}
interface revokeinheritedaccessrecordstracker_Relationships {
}
interface revokeinheritedaccessrecordstracker_Result extends revokeinheritedaccessrecordstracker_Base, revokeinheritedaccessrecordstracker_Relationships {
}
interface revokeinheritedaccessrecordstracker_FormattedResult {
}
interface revokeinheritedaccessrecordstracker_Select {
}
interface revokeinheritedaccessrecordstracker_Expand {
}
interface revokeinheritedaccessrecordstracker_Filter {
}
interface revokeinheritedaccessrecordstracker_Create extends revokeinheritedaccessrecordstracker {
}
interface revokeinheritedaccessrecordstracker_Update extends revokeinheritedaccessrecordstracker {
}
interface RibbonClientMetadata_Base extends WebEntity {
}
interface RibbonClientMetadata_Fixed extends WebEntity_Fixed {
  ribbonid: string;
}
interface RibbonClientMetadata extends RibbonClientMetadata_Base, RibbonClientMetadata_Relationships {
}
interface RibbonClientMetadata_Relationships {
}
interface RibbonClientMetadata_Result extends RibbonClientMetadata_Base, RibbonClientMetadata_Relationships {
}
interface RibbonClientMetadata_FormattedResult {
}
interface RibbonClientMetadata_Select {
}
interface RibbonClientMetadata_Expand {
}
interface RibbonClientMetadata_Filter {
}
interface RibbonClientMetadata_Create extends RibbonClientMetadata {
}
interface RibbonClientMetadata_Update extends RibbonClientMetadata {
}
interface RibbonCommand_Base extends WebEntity {
}
interface RibbonCommand_Fixed extends WebEntity_Fixed {
  ribboncommandid: string;
}
interface RibbonCommand extends RibbonCommand_Base, RibbonCommand_Relationships {
}
interface RibbonCommand_Relationships {
}
interface RibbonCommand_Result extends RibbonCommand_Base, RibbonCommand_Relationships {
}
interface RibbonCommand_FormattedResult {
}
interface RibbonCommand_Select {
}
interface RibbonCommand_Expand {
}
interface RibbonCommand_Filter {
}
interface RibbonCommand_Create extends RibbonCommand {
}
interface RibbonCommand_Update extends RibbonCommand {
}
interface RibbonContextGroup_Base extends WebEntity {
}
interface RibbonContextGroup_Fixed extends WebEntity_Fixed {
  ribboncontextgroupid: string;
}
interface RibbonContextGroup extends RibbonContextGroup_Base, RibbonContextGroup_Relationships {
}
interface RibbonContextGroup_Relationships {
}
interface RibbonContextGroup_Result extends RibbonContextGroup_Base, RibbonContextGroup_Relationships {
}
interface RibbonContextGroup_FormattedResult {
}
interface RibbonContextGroup_Select {
}
interface RibbonContextGroup_Expand {
}
interface RibbonContextGroup_Filter {
}
interface RibbonContextGroup_Create extends RibbonContextGroup {
}
interface RibbonContextGroup_Update extends RibbonContextGroup {
}
interface RibbonCustomization_Base extends WebEntity {
}
interface RibbonCustomization_Fixed extends WebEntity_Fixed {
  ribboncustomizationid: string;
}
interface RibbonCustomization extends RibbonCustomization_Base, RibbonCustomization_Relationships {
}
interface RibbonCustomization_Relationships {
}
interface RibbonCustomization_Result extends RibbonCustomization_Base, RibbonCustomization_Relationships {
}
interface RibbonCustomization_FormattedResult {
}
interface RibbonCustomization_Select {
}
interface RibbonCustomization_Expand {
}
interface RibbonCustomization_Filter {
}
interface RibbonCustomization_Create extends RibbonCustomization {
}
interface RibbonCustomization_Update extends RibbonCustomization {
}
interface RibbonDiff_Base extends WebEntity {
}
interface RibbonDiff_Fixed extends WebEntity_Fixed {
  ribbondiffid: string;
}
interface RibbonDiff extends RibbonDiff_Base, RibbonDiff_Relationships {
}
interface RibbonDiff_Relationships {
}
interface RibbonDiff_Result extends RibbonDiff_Base, RibbonDiff_Relationships {
}
interface RibbonDiff_FormattedResult {
}
interface RibbonDiff_Select {
}
interface RibbonDiff_Expand {
}
interface RibbonDiff_Filter {
}
interface RibbonDiff_Create extends RibbonDiff {
}
interface RibbonDiff_Update extends RibbonDiff {
}
interface RibbonMetadataToProcess_Base extends WebEntity {
}
interface RibbonMetadataToProcess_Fixed extends WebEntity_Fixed {
  ribbonmetadatarowid: string;
}
interface RibbonMetadataToProcess extends RibbonMetadataToProcess_Base, RibbonMetadataToProcess_Relationships {
}
interface RibbonMetadataToProcess_Relationships {
}
interface RibbonMetadataToProcess_Result extends RibbonMetadataToProcess_Base, RibbonMetadataToProcess_Relationships {
}
interface RibbonMetadataToProcess_FormattedResult {
}
interface RibbonMetadataToProcess_Select {
}
interface RibbonMetadataToProcess_Expand {
}
interface RibbonMetadataToProcess_Filter {
}
interface RibbonMetadataToProcess_Create extends RibbonMetadataToProcess {
}
interface RibbonMetadataToProcess_Update extends RibbonMetadataToProcess {
}
interface RibbonRule_Base extends WebEntity {
}
interface RibbonRule_Fixed extends WebEntity_Fixed {
  ribbonruleid: string;
}
interface RibbonRule extends RibbonRule_Base, RibbonRule_Relationships {
}
interface RibbonRule_Relationships {
}
interface RibbonRule_Result extends RibbonRule_Base, RibbonRule_Relationships {
}
interface RibbonRule_FormattedResult {
}
interface RibbonRule_Select {
}
interface RibbonRule_Expand {
}
interface RibbonRule_Filter {
}
interface RibbonRule_Create extends RibbonRule {
}
interface RibbonRule_Update extends RibbonRule {
}
interface RibbonTabToCommandMap_Base extends WebEntity {
}
interface RibbonTabToCommandMap_Fixed extends WebEntity_Fixed {
  ribbontabtocommandmapid: string;
}
interface RibbonTabToCommandMap extends RibbonTabToCommandMap_Base, RibbonTabToCommandMap_Relationships {
}
interface RibbonTabToCommandMap_Relationships {
}
interface RibbonTabToCommandMap_Result extends RibbonTabToCommandMap_Base, RibbonTabToCommandMap_Relationships {
}
interface RibbonTabToCommandMap_FormattedResult {
}
interface RibbonTabToCommandMap_Select {
}
interface RibbonTabToCommandMap_Expand {
}
interface RibbonTabToCommandMap_Filter {
}
interface RibbonTabToCommandMap_Create extends RibbonTabToCommandMap {
}
interface RibbonTabToCommandMap_Update extends RibbonTabToCommandMap {
}
interface Role_Base extends WebEntity {
}
interface Role_Fixed extends WebEntity_Fixed {
  roleid: string;
}
interface Role extends Role_Base, Role_Relationships {
}
interface Role_Relationships {
}
interface Role_Result extends Role_Base, Role_Relationships {
}
interface Role_FormattedResult {
}
interface Role_Select {
}
interface Role_Expand {
}
interface Role_Filter {
}
interface Role_Create extends Role {
}
interface Role_Update extends Role {
}
interface RolePrivileges_Base extends WebEntity {
}
interface RolePrivileges_Fixed extends WebEntity_Fixed {
  roleprivilegeid: string;
}
interface RolePrivileges extends RolePrivileges_Base, RolePrivileges_Relationships {
}
interface RolePrivileges_Relationships {
}
interface RolePrivileges_Result extends RolePrivileges_Base, RolePrivileges_Relationships {
}
interface RolePrivileges_FormattedResult {
}
interface RolePrivileges_Select {
}
interface RolePrivileges_Expand {
}
interface RolePrivileges_Filter {
}
interface RolePrivileges_Create extends RolePrivileges {
}
interface RolePrivileges_Update extends RolePrivileges {
}
interface RoleTemplate_Base extends WebEntity {
}
interface RoleTemplate_Fixed extends WebEntity_Fixed {
  roletemplateid: string;
}
interface RoleTemplate extends RoleTemplate_Base, RoleTemplate_Relationships {
}
interface RoleTemplate_Relationships {
}
interface RoleTemplate_Result extends RoleTemplate_Base, RoleTemplate_Relationships {
}
interface RoleTemplate_FormattedResult {
}
interface RoleTemplate_Select {
}
interface RoleTemplate_Expand {
}
interface RoleTemplate_Filter {
}
interface RoleTemplate_Create extends RoleTemplate {
}
interface RoleTemplate_Update extends RoleTemplate {
}
interface RoleTemplatePrivileges_Base extends WebEntity {
}
interface RoleTemplatePrivileges_Fixed extends WebEntity_Fixed {
  roletemplateprivilegeid: string;
}
interface RoleTemplatePrivileges extends RoleTemplatePrivileges_Base, RoleTemplatePrivileges_Relationships {
}
interface RoleTemplatePrivileges_Relationships {
}
interface RoleTemplatePrivileges_Result extends RoleTemplatePrivileges_Base, RoleTemplatePrivileges_Relationships {
}
interface RoleTemplatePrivileges_FormattedResult {
}
interface RoleTemplatePrivileges_Select {
}
interface RoleTemplatePrivileges_Expand {
}
interface RoleTemplatePrivileges_Filter {
}
interface RoleTemplatePrivileges_Create extends RoleTemplatePrivileges {
}
interface RoleTemplatePrivileges_Update extends RoleTemplatePrivileges {
}
interface RollupField_Base extends WebEntity {
}
interface RollupField_Fixed extends WebEntity_Fixed {
  rollupfieldid: string;
}
interface RollupField extends RollupField_Base, RollupField_Relationships {
}
interface RollupField_Relationships {
}
interface RollupField_Result extends RollupField_Base, RollupField_Relationships {
}
interface RollupField_FormattedResult {
}
interface RollupField_Select {
}
interface RollupField_Expand {
}
interface RollupField_Filter {
}
interface RollupField_Create extends RollupField {
}
interface RollupField_Update extends RollupField {
}
interface RollupJob_Base extends WebEntity {
}
interface RollupJob_Fixed extends WebEntity_Fixed {
  rollupjobid: string;
}
interface RollupJob extends RollupJob_Base, RollupJob_Relationships {
}
interface RollupJob_Relationships {
}
interface RollupJob_Result extends RollupJob_Base, RollupJob_Relationships {
}
interface RollupJob_FormattedResult {
}
interface RollupJob_Select {
}
interface RollupJob_Expand {
}
interface RollupJob_Filter {
}
interface RollupJob_Create extends RollupJob {
}
interface RollupJob_Update extends RollupJob {
}
interface RollupProperties_Base extends WebEntity {
}
interface RollupProperties_Fixed extends WebEntity_Fixed {
  rolluppropertiesid: string;
}
interface RollupProperties extends RollupProperties_Base, RollupProperties_Relationships {
}
interface RollupProperties_Relationships {
}
interface RollupProperties_Result extends RollupProperties_Base, RollupProperties_Relationships {
}
interface RollupProperties_FormattedResult {
}
interface RollupProperties_Select {
}
interface RollupProperties_Expand {
}
interface RollupProperties_Filter {
}
interface RollupProperties_Create extends RollupProperties {
}
interface RollupProperties_Update extends RollupProperties {
}
interface RoutingRule_Base extends WebEntity {
}
interface RoutingRule_Fixed extends WebEntity_Fixed {
  routingruleid: string;
}
interface RoutingRule extends RoutingRule_Base, RoutingRule_Relationships {
}
interface RoutingRule_Relationships {
}
interface RoutingRule_Result extends RoutingRule_Base, RoutingRule_Relationships {
}
interface RoutingRule_FormattedResult {
}
interface RoutingRule_Select {
}
interface RoutingRule_Expand {
}
interface RoutingRule_Filter {
}
interface RoutingRule_Create extends RoutingRule {
}
interface RoutingRule_Update extends RoutingRule {
}
interface RoutingRuleItem_Base extends WebEntity {
}
interface RoutingRuleItem_Fixed extends WebEntity_Fixed {
  routingruleitemid: string;
}
interface RoutingRuleItem extends RoutingRuleItem_Base, RoutingRuleItem_Relationships {
}
interface RoutingRuleItem_Relationships {
}
interface RoutingRuleItem_Result extends RoutingRuleItem_Base, RoutingRuleItem_Relationships {
}
interface RoutingRuleItem_FormattedResult {
}
interface RoutingRuleItem_Select {
}
interface RoutingRuleItem_Expand {
}
interface RoutingRuleItem_Filter {
}
interface RoutingRuleItem_Create extends RoutingRuleItem {
}
interface RoutingRuleItem_Update extends RoutingRuleItem {
}
interface RuntimeDependency_Base extends WebEntity {
}
interface RuntimeDependency_Fixed extends WebEntity_Fixed {
  dependencyid: string;
}
interface RuntimeDependency extends RuntimeDependency_Base, RuntimeDependency_Relationships {
}
interface RuntimeDependency_Relationships {
}
interface RuntimeDependency_Result extends RuntimeDependency_Base, RuntimeDependency_Relationships {
}
interface RuntimeDependency_FormattedResult {
}
interface RuntimeDependency_Select {
}
interface RuntimeDependency_Expand {
}
interface RuntimeDependency_Filter {
}
interface RuntimeDependency_Create extends RuntimeDependency {
}
interface RuntimeDependency_Update extends RuntimeDependency {
}
interface SavedOrgInsightsConfiguration_Base extends WebEntity {
}
interface SavedOrgInsightsConfiguration_Fixed extends WebEntity_Fixed {
  savedorginsightsconfigurationid: string;
}
interface SavedOrgInsightsConfiguration extends SavedOrgInsightsConfiguration_Base, SavedOrgInsightsConfiguration_Relationships {
}
interface SavedOrgInsightsConfiguration_Relationships {
}
interface SavedOrgInsightsConfiguration_Result extends SavedOrgInsightsConfiguration_Base, SavedOrgInsightsConfiguration_Relationships {
}
interface SavedOrgInsightsConfiguration_FormattedResult {
}
interface SavedOrgInsightsConfiguration_Select {
}
interface SavedOrgInsightsConfiguration_Expand {
}
interface SavedOrgInsightsConfiguration_Filter {
}
interface SavedOrgInsightsConfiguration_Create extends SavedOrgInsightsConfiguration {
}
interface SavedOrgInsightsConfiguration_Update extends SavedOrgInsightsConfiguration {
}
interface SavedQuery_Base extends WebEntity {
}
interface SavedQuery_Fixed extends WebEntity_Fixed {
  savedqueryid: string;
}
interface SavedQuery extends SavedQuery_Base, SavedQuery_Relationships {
}
interface SavedQuery_Relationships {
}
interface SavedQuery_Result extends SavedQuery_Base, SavedQuery_Relationships {
}
interface SavedQuery_FormattedResult {
}
interface SavedQuery_Select {
}
interface SavedQuery_Expand {
}
interface SavedQuery_Filter {
}
interface SavedQuery_Create extends SavedQuery {
}
interface SavedQuery_Update extends SavedQuery {
}
interface SavedQueryVisualization_Base extends WebEntity {
}
interface SavedQueryVisualization_Fixed extends WebEntity_Fixed {
  savedqueryvisualizationid: string;
}
interface SavedQueryVisualization extends SavedQueryVisualization_Base, SavedQueryVisualization_Relationships {
}
interface SavedQueryVisualization_Relationships {
}
interface SavedQueryVisualization_Result extends SavedQueryVisualization_Base, SavedQueryVisualization_Relationships {
}
interface SavedQueryVisualization_FormattedResult {
}
interface SavedQueryVisualization_Select {
}
interface SavedQueryVisualization_Expand {
}
interface SavedQueryVisualization_Filter {
}
interface SavedQueryVisualization_Create extends SavedQueryVisualization {
}
interface SavedQueryVisualization_Update extends SavedQueryVisualization {
}
interface SdkMessage_Base extends WebEntity {
}
interface SdkMessage_Fixed extends WebEntity_Fixed {
  sdkmessageid: string;
}
interface SdkMessage extends SdkMessage_Base, SdkMessage_Relationships {
}
interface SdkMessage_Relationships {
}
interface SdkMessage_Result extends SdkMessage_Base, SdkMessage_Relationships {
}
interface SdkMessage_FormattedResult {
}
interface SdkMessage_Select {
}
interface SdkMessage_Expand {
}
interface SdkMessage_Filter {
}
interface SdkMessage_Create extends SdkMessage {
}
interface SdkMessage_Update extends SdkMessage {
}
interface SdkMessageFilter_Base extends WebEntity {
}
interface SdkMessageFilter_Fixed extends WebEntity_Fixed {
  sdkmessagefilterid: string;
}
interface SdkMessageFilter extends SdkMessageFilter_Base, SdkMessageFilter_Relationships {
}
interface SdkMessageFilter_Relationships {
}
interface SdkMessageFilter_Result extends SdkMessageFilter_Base, SdkMessageFilter_Relationships {
}
interface SdkMessageFilter_FormattedResult {
}
interface SdkMessageFilter_Select {
}
interface SdkMessageFilter_Expand {
}
interface SdkMessageFilter_Filter {
}
interface SdkMessageFilter_Create extends SdkMessageFilter {
}
interface SdkMessageFilter_Update extends SdkMessageFilter {
}
interface SdkMessagePair_Base extends WebEntity {
}
interface SdkMessagePair_Fixed extends WebEntity_Fixed {
  sdkmessagepairid: string;
}
interface SdkMessagePair extends SdkMessagePair_Base, SdkMessagePair_Relationships {
}
interface SdkMessagePair_Relationships {
}
interface SdkMessagePair_Result extends SdkMessagePair_Base, SdkMessagePair_Relationships {
}
interface SdkMessagePair_FormattedResult {
}
interface SdkMessagePair_Select {
}
interface SdkMessagePair_Expand {
}
interface SdkMessagePair_Filter {
}
interface SdkMessagePair_Create extends SdkMessagePair {
}
interface SdkMessagePair_Update extends SdkMessagePair {
}
interface SdkMessageProcessingStep_Base extends WebEntity {
}
interface SdkMessageProcessingStep_Fixed extends WebEntity_Fixed {
  sdkmessageprocessingstepid: string;
}
interface SdkMessageProcessingStep extends SdkMessageProcessingStep_Base, SdkMessageProcessingStep_Relationships {
}
interface SdkMessageProcessingStep_Relationships {
}
interface SdkMessageProcessingStep_Result extends SdkMessageProcessingStep_Base, SdkMessageProcessingStep_Relationships {
}
interface SdkMessageProcessingStep_FormattedResult {
}
interface SdkMessageProcessingStep_Select {
}
interface SdkMessageProcessingStep_Expand {
}
interface SdkMessageProcessingStep_Filter {
}
interface SdkMessageProcessingStep_Create extends SdkMessageProcessingStep {
}
interface SdkMessageProcessingStep_Update extends SdkMessageProcessingStep {
}
interface SdkMessageProcessingStepImage_Base extends WebEntity {
}
interface SdkMessageProcessingStepImage_Fixed extends WebEntity_Fixed {
  sdkmessageprocessingstepimageid: string;
}
interface SdkMessageProcessingStepImage extends SdkMessageProcessingStepImage_Base, SdkMessageProcessingStepImage_Relationships {
}
interface SdkMessageProcessingStepImage_Relationships {
}
interface SdkMessageProcessingStepImage_Result extends SdkMessageProcessingStepImage_Base, SdkMessageProcessingStepImage_Relationships {
}
interface SdkMessageProcessingStepImage_FormattedResult {
}
interface SdkMessageProcessingStepImage_Select {
}
interface SdkMessageProcessingStepImage_Expand {
}
interface SdkMessageProcessingStepImage_Filter {
}
interface SdkMessageProcessingStepImage_Create extends SdkMessageProcessingStepImage {
}
interface SdkMessageProcessingStepImage_Update extends SdkMessageProcessingStepImage {
}
interface SdkMessageProcessingStepSecureConfig_Base extends WebEntity {
}
interface SdkMessageProcessingStepSecureConfig_Fixed extends WebEntity_Fixed {
  sdkmessageprocessingstepsecureconfigid: string;
}
interface SdkMessageProcessingStepSecureConfig extends SdkMessageProcessingStepSecureConfig_Base, SdkMessageProcessingStepSecureConfig_Relationships {
}
interface SdkMessageProcessingStepSecureConfig_Relationships {
}
interface SdkMessageProcessingStepSecureConfig_Result extends SdkMessageProcessingStepSecureConfig_Base, SdkMessageProcessingStepSecureConfig_Relationships {
}
interface SdkMessageProcessingStepSecureConfig_FormattedResult {
}
interface SdkMessageProcessingStepSecureConfig_Select {
}
interface SdkMessageProcessingStepSecureConfig_Expand {
}
interface SdkMessageProcessingStepSecureConfig_Filter {
}
interface SdkMessageProcessingStepSecureConfig_Create extends SdkMessageProcessingStepSecureConfig {
}
interface SdkMessageProcessingStepSecureConfig_Update extends SdkMessageProcessingStepSecureConfig {
}
interface SdkMessageRequest_Base extends WebEntity {
}
interface SdkMessageRequest_Fixed extends WebEntity_Fixed {
  sdkmessagerequestid: string;
}
interface SdkMessageRequest extends SdkMessageRequest_Base, SdkMessageRequest_Relationships {
}
interface SdkMessageRequest_Relationships {
}
interface SdkMessageRequest_Result extends SdkMessageRequest_Base, SdkMessageRequest_Relationships {
}
interface SdkMessageRequest_FormattedResult {
}
interface SdkMessageRequest_Select {
}
interface SdkMessageRequest_Expand {
}
interface SdkMessageRequest_Filter {
}
interface SdkMessageRequest_Create extends SdkMessageRequest {
}
interface SdkMessageRequest_Update extends SdkMessageRequest {
}
interface SdkMessageRequestField_Base extends WebEntity {
}
interface SdkMessageRequestField_Fixed extends WebEntity_Fixed {
  sdkmessagerequestfieldid: string;
}
interface SdkMessageRequestField extends SdkMessageRequestField_Base, SdkMessageRequestField_Relationships {
}
interface SdkMessageRequestField_Relationships {
}
interface SdkMessageRequestField_Result extends SdkMessageRequestField_Base, SdkMessageRequestField_Relationships {
}
interface SdkMessageRequestField_FormattedResult {
}
interface SdkMessageRequestField_Select {
}
interface SdkMessageRequestField_Expand {
}
interface SdkMessageRequestField_Filter {
}
interface SdkMessageRequestField_Create extends SdkMessageRequestField {
}
interface SdkMessageRequestField_Update extends SdkMessageRequestField {
}
interface SdkMessageResponse_Base extends WebEntity {
}
interface SdkMessageResponse_Fixed extends WebEntity_Fixed {
  sdkmessageresponseid: string;
}
interface SdkMessageResponse extends SdkMessageResponse_Base, SdkMessageResponse_Relationships {
}
interface SdkMessageResponse_Relationships {
}
interface SdkMessageResponse_Result extends SdkMessageResponse_Base, SdkMessageResponse_Relationships {
}
interface SdkMessageResponse_FormattedResult {
}
interface SdkMessageResponse_Select {
}
interface SdkMessageResponse_Expand {
}
interface SdkMessageResponse_Filter {
}
interface SdkMessageResponse_Create extends SdkMessageResponse {
}
interface SdkMessageResponse_Update extends SdkMessageResponse {
}
interface SdkMessageResponseField_Base extends WebEntity {
}
interface SdkMessageResponseField_Fixed extends WebEntity_Fixed {
  sdkmessageresponsefieldid: string;
}
interface SdkMessageResponseField extends SdkMessageResponseField_Base, SdkMessageResponseField_Relationships {
}
interface SdkMessageResponseField_Relationships {
}
interface SdkMessageResponseField_Result extends SdkMessageResponseField_Base, SdkMessageResponseField_Relationships {
}
interface SdkMessageResponseField_FormattedResult {
}
interface SdkMessageResponseField_Select {
}
interface SdkMessageResponseField_Expand {
}
interface SdkMessageResponseField_Filter {
}
interface SdkMessageResponseField_Create extends SdkMessageResponseField {
}
interface SdkMessageResponseField_Update extends SdkMessageResponseField {
}
interface searchtelemetry_Base extends WebEntity {
}
interface searchtelemetry_Fixed extends WebEntity_Fixed {
  searchtelemetryid: string;
}
interface searchtelemetry extends searchtelemetry_Base, searchtelemetry_Relationships {
}
interface searchtelemetry_Relationships {
}
interface searchtelemetry_Result extends searchtelemetry_Base, searchtelemetry_Relationships {
}
interface searchtelemetry_FormattedResult {
}
interface searchtelemetry_Select {
}
interface searchtelemetry_Expand {
}
interface searchtelemetry_Filter {
}
interface searchtelemetry_Create extends searchtelemetry {
}
interface searchtelemetry_Update extends searchtelemetry {
}
interface SemiAnnualFiscalCalendar_Base extends WebEntity {
}
interface SemiAnnualFiscalCalendar_Fixed extends WebEntity_Fixed {
  userfiscalcalendarid: string;
}
interface SemiAnnualFiscalCalendar extends SemiAnnualFiscalCalendar_Base, SemiAnnualFiscalCalendar_Relationships {
}
interface SemiAnnualFiscalCalendar_Relationships {
}
interface SemiAnnualFiscalCalendar_Result extends SemiAnnualFiscalCalendar_Base, SemiAnnualFiscalCalendar_Relationships {
}
interface SemiAnnualFiscalCalendar_FormattedResult {
}
interface SemiAnnualFiscalCalendar_Select {
}
interface SemiAnnualFiscalCalendar_Expand {
}
interface SemiAnnualFiscalCalendar_Filter {
}
interface SemiAnnualFiscalCalendar_Create extends SemiAnnualFiscalCalendar {
}
interface SemiAnnualFiscalCalendar_Update extends SemiAnnualFiscalCalendar {
}
interface ServiceEndpoint_Base extends WebEntity {
}
interface ServiceEndpoint_Fixed extends WebEntity_Fixed {
  serviceendpointid: string;
}
interface ServiceEndpoint extends ServiceEndpoint_Base, ServiceEndpoint_Relationships {
}
interface ServiceEndpoint_Relationships {
}
interface ServiceEndpoint_Result extends ServiceEndpoint_Base, ServiceEndpoint_Relationships {
}
interface ServiceEndpoint_FormattedResult {
}
interface ServiceEndpoint_Select {
}
interface ServiceEndpoint_Expand {
}
interface ServiceEndpoint_Filter {
}
interface ServiceEndpoint_Create extends ServiceEndpoint {
}
interface ServiceEndpoint_Update extends ServiceEndpoint {
}
interface ServicePlan_Base extends WebEntity {
}
interface ServicePlan_Fixed extends WebEntity_Fixed {
  serviceplanid: string;
}
interface ServicePlan extends ServicePlan_Base, ServicePlan_Relationships {
}
interface ServicePlan_Relationships {
}
interface ServicePlan_Result extends ServicePlan_Base, ServicePlan_Relationships {
}
interface ServicePlan_FormattedResult {
}
interface ServicePlan_Select {
}
interface ServicePlan_Expand {
}
interface ServicePlan_Filter {
}
interface ServicePlan_Create extends ServicePlan {
}
interface ServicePlan_Update extends ServicePlan {
}
interface ServicePlanAppModules_Base extends WebEntity {
}
interface ServicePlanAppModules_Fixed extends WebEntity_Fixed {
  serviceplanappmodulesid: string;
}
interface ServicePlanAppModules extends ServicePlanAppModules_Base, ServicePlanAppModules_Relationships {
}
interface ServicePlanAppModules_Relationships {
}
interface ServicePlanAppModules_Result extends ServicePlanAppModules_Base, ServicePlanAppModules_Relationships {
}
interface ServicePlanAppModules_FormattedResult {
}
interface ServicePlanAppModules_Select {
}
interface ServicePlanAppModules_Expand {
}
interface ServicePlanAppModules_Filter {
}
interface ServicePlanAppModules_Create extends ServicePlanAppModules {
}
interface ServicePlanAppModules_Update extends ServicePlanAppModules {
}
interface ServicePlanMapping_Base extends WebEntity {
}
interface ServicePlanMapping_Fixed extends WebEntity_Fixed {
  serviceplanmappingid: string;
}
interface ServicePlanMapping extends ServicePlanMapping_Base, ServicePlanMapping_Relationships {
}
interface ServicePlanMapping_Relationships {
}
interface ServicePlanMapping_Result extends ServicePlanMapping_Base, ServicePlanMapping_Relationships {
}
interface ServicePlanMapping_FormattedResult {
}
interface ServicePlanMapping_Select {
}
interface ServicePlanMapping_Expand {
}
interface ServicePlanMapping_Filter {
}
interface ServicePlanMapping_Create extends ServicePlanMapping {
}
interface ServicePlanMapping_Update extends ServicePlanMapping {
}
interface SettingDefinition_Base extends WebEntity {
}
interface SettingDefinition_Fixed extends WebEntity_Fixed {
  settingdefinitionid: string;
}
interface SettingDefinition extends SettingDefinition_Base, SettingDefinition_Relationships {
}
interface SettingDefinition_Relationships {
}
interface SettingDefinition_Result extends SettingDefinition_Base, SettingDefinition_Relationships {
}
interface SettingDefinition_FormattedResult {
}
interface SettingDefinition_Select {
}
interface SettingDefinition_Expand {
}
interface SettingDefinition_Filter {
}
interface SettingDefinition_Create extends SettingDefinition {
}
interface SettingDefinition_Update extends SettingDefinition {
}
interface SharedObjectsForRead_Base extends WebEntity {
}
interface SharedObjectsForRead_Fixed extends WebEntity_Fixed {
  sharedobjectsforreadid: string;
}
interface SharedObjectsForRead extends SharedObjectsForRead_Base, SharedObjectsForRead_Relationships {
}
interface SharedObjectsForRead_Relationships {
}
interface SharedObjectsForRead_Result extends SharedObjectsForRead_Base, SharedObjectsForRead_Relationships {
}
interface SharedObjectsForRead_FormattedResult {
}
interface SharedObjectsForRead_Select {
}
interface SharedObjectsForRead_Expand {
}
interface SharedObjectsForRead_Filter {
}
interface SharedObjectsForRead_Create extends SharedObjectsForRead {
}
interface SharedObjectsForRead_Update extends SharedObjectsForRead {
}
interface SharePointData_Base extends WebEntity {
}
interface SharePointData_Fixed extends WebEntity_Fixed {
  sharepointdataid: string;
}
interface SharePointData extends SharePointData_Base, SharePointData_Relationships {
}
interface SharePointData_Relationships {
}
interface SharePointData_Result extends SharePointData_Base, SharePointData_Relationships {
}
interface SharePointData_FormattedResult {
}
interface SharePointData_Select {
}
interface SharePointData_Expand {
}
interface SharePointData_Filter {
}
interface SharePointData_Create extends SharePointData {
}
interface SharePointData_Update extends SharePointData {
}
interface SharePointDocument_Base extends WebEntity {
}
interface SharePointDocument_Fixed extends WebEntity_Fixed {
  sharepointdocumentid: string;
}
interface SharePointDocument extends SharePointDocument_Base, SharePointDocument_Relationships {
}
interface SharePointDocument_Relationships {
}
interface SharePointDocument_Result extends SharePointDocument_Base, SharePointDocument_Relationships {
}
interface SharePointDocument_FormattedResult {
}
interface SharePointDocument_Select {
}
interface SharePointDocument_Expand {
}
interface SharePointDocument_Filter {
}
interface SharePointDocument_Create extends SharePointDocument {
}
interface SharePointDocument_Update extends SharePointDocument {
}
interface SharePointDocumentLocation_Base extends WebEntity {
}
interface SharePointDocumentLocation_Fixed extends WebEntity_Fixed {
  sharepointdocumentlocationid: string;
}
interface SharePointDocumentLocation extends SharePointDocumentLocation_Base, SharePointDocumentLocation_Relationships {
}
interface SharePointDocumentLocation_Relationships {
}
interface SharePointDocumentLocation_Result extends SharePointDocumentLocation_Base, SharePointDocumentLocation_Relationships {
}
interface SharePointDocumentLocation_FormattedResult {
}
interface SharePointDocumentLocation_Select {
}
interface SharePointDocumentLocation_Expand {
}
interface SharePointDocumentLocation_Filter {
}
interface SharePointDocumentLocation_Create extends SharePointDocumentLocation {
}
interface SharePointDocumentLocation_Update extends SharePointDocumentLocation {
}
interface SharePointSite_Base extends WebEntity {
}
interface SharePointSite_Fixed extends WebEntity_Fixed {
  sharepointsiteid: string;
}
interface SharePointSite extends SharePointSite_Base, SharePointSite_Relationships {
}
interface SharePointSite_Relationships {
}
interface SharePointSite_Result extends SharePointSite_Base, SharePointSite_Relationships {
}
interface SharePointSite_FormattedResult {
}
interface SharePointSite_Select {
}
interface SharePointSite_Expand {
}
interface SharePointSite_Filter {
}
interface SharePointSite_Create extends SharePointSite {
}
interface SharePointSite_Update extends SharePointSite {
}
interface SimilarityRule_Base extends WebEntity {
}
interface SimilarityRule_Fixed extends WebEntity_Fixed {
  similarityruleid: string;
}
interface SimilarityRule extends SimilarityRule_Base, SimilarityRule_Relationships {
}
interface SimilarityRule_Relationships {
}
interface SimilarityRule_Result extends SimilarityRule_Base, SimilarityRule_Relationships {
}
interface SimilarityRule_FormattedResult {
}
interface SimilarityRule_Select {
}
interface SimilarityRule_Expand {
}
interface SimilarityRule_Filter {
}
interface SimilarityRule_Create extends SimilarityRule {
}
interface SimilarityRule_Update extends SimilarityRule {
}
interface SiteMap_Base extends WebEntity {
}
interface SiteMap_Fixed extends WebEntity_Fixed {
  sitemapid: string;
}
interface SiteMap extends SiteMap_Base, SiteMap_Relationships {
}
interface SiteMap_Relationships {
}
interface SiteMap_Result extends SiteMap_Base, SiteMap_Relationships {
}
interface SiteMap_FormattedResult {
}
interface SiteMap_Select {
}
interface SiteMap_Expand {
}
interface SiteMap_Filter {
}
interface SiteMap_Create extends SiteMap {
}
interface SiteMap_Update extends SiteMap {
}
interface SLA_Base extends WebEntity {
}
interface SLA_Fixed extends WebEntity_Fixed {
  slaid: string;
}
interface SLA extends SLA_Base, SLA_Relationships {
}
interface SLA_Relationships {
}
interface SLA_Result extends SLA_Base, SLA_Relationships {
}
interface SLA_FormattedResult {
}
interface SLA_Select {
}
interface SLA_Expand {
}
interface SLA_Filter {
}
interface SLA_Create extends SLA {
}
interface SLA_Update extends SLA {
}
interface SLAItem_Base extends WebEntity {
}
interface SLAItem_Fixed extends WebEntity_Fixed {
  slaitemid: string;
}
interface SLAItem extends SLAItem_Base, SLAItem_Relationships {
}
interface SLAItem_Relationships {
}
interface SLAItem_Result extends SLAItem_Base, SLAItem_Relationships {
}
interface SLAItem_FormattedResult {
}
interface SLAItem_Select {
}
interface SLAItem_Expand {
}
interface SLAItem_Filter {
}
interface SLAItem_Create extends SLAItem {
}
interface SLAItem_Update extends SLAItem {
}
interface SLAKPIInstance_Base extends WebEntity {
}
interface SLAKPIInstance_Fixed extends WebEntity_Fixed {
  slakpiinstanceid: string;
}
interface SLAKPIInstance extends SLAKPIInstance_Base, SLAKPIInstance_Relationships {
}
interface SLAKPIInstance_Relationships {
}
interface SLAKPIInstance_Result extends SLAKPIInstance_Base, SLAKPIInstance_Relationships {
}
interface SLAKPIInstance_FormattedResult {
}
interface SLAKPIInstance_Select {
}
interface SLAKPIInstance_Expand {
}
interface SLAKPIInstance_Filter {
}
interface SLAKPIInstance_Create extends SLAKPIInstance {
}
interface SLAKPIInstance_Update extends SLAKPIInstance {
}
interface SocialActivity_Base extends WebEntity {
}
interface SocialActivity_Fixed extends WebEntity_Fixed {
  activityid: string;
}
interface SocialActivity extends SocialActivity_Base, SocialActivity_Relationships {
}
interface SocialActivity_Relationships {
}
interface SocialActivity_Result extends SocialActivity_Base, SocialActivity_Relationships {
}
interface SocialActivity_FormattedResult {
}
interface SocialActivity_Select {
}
interface SocialActivity_Expand {
}
interface SocialActivity_Filter {
}
interface SocialActivity_Create extends SocialActivity {
}
interface SocialActivity_Update extends SocialActivity {
}
interface SocialInsightsConfiguration_Base extends WebEntity {
}
interface SocialInsightsConfiguration_Fixed extends WebEntity_Fixed {
  socialinsightsconfigurationid: string;
}
interface SocialInsightsConfiguration extends SocialInsightsConfiguration_Base, SocialInsightsConfiguration_Relationships {
}
interface SocialInsightsConfiguration_Relationships {
}
interface SocialInsightsConfiguration_Result extends SocialInsightsConfiguration_Base, SocialInsightsConfiguration_Relationships {
}
interface SocialInsightsConfiguration_FormattedResult {
}
interface SocialInsightsConfiguration_Select {
}
interface SocialInsightsConfiguration_Expand {
}
interface SocialInsightsConfiguration_Filter {
}
interface SocialInsightsConfiguration_Create extends SocialInsightsConfiguration {
}
interface SocialInsightsConfiguration_Update extends SocialInsightsConfiguration {
}
interface SocialProfile_Base extends WebEntity {
}
interface SocialProfile_Fixed extends WebEntity_Fixed {
  socialprofileid: string;
}
interface SocialProfile extends SocialProfile_Base, SocialProfile_Relationships {
}
interface SocialProfile_Relationships {
}
interface SocialProfile_Result extends SocialProfile_Base, SocialProfile_Relationships {
}
interface SocialProfile_FormattedResult {
}
interface SocialProfile_Select {
}
interface SocialProfile_Expand {
}
interface SocialProfile_Filter {
}
interface SocialProfile_Create extends SocialProfile {
}
interface SocialProfile_Update extends SocialProfile {
}
interface Solution_Base extends WebEntity {
}
interface Solution_Fixed extends WebEntity_Fixed {
  solutionid: string;
}
interface Solution extends Solution_Base, Solution_Relationships {
}
interface Solution_Relationships {
}
interface Solution_Result extends Solution_Base, Solution_Relationships {
}
interface Solution_FormattedResult {
}
interface Solution_Select {
}
interface Solution_Expand {
}
interface Solution_Filter {
}
interface Solution_Create extends Solution {
}
interface Solution_Update extends Solution {
}
interface SolutionComponent_Base extends WebEntity {
}
interface SolutionComponent_Fixed extends WebEntity_Fixed {
  solutioncomponentid: string;
}
interface SolutionComponent extends SolutionComponent_Base, SolutionComponent_Relationships {
}
interface SolutionComponent_Relationships {
}
interface SolutionComponent_Result extends SolutionComponent_Base, SolutionComponent_Relationships {
}
interface SolutionComponent_FormattedResult {
}
interface SolutionComponent_Select {
}
interface SolutionComponent_Expand {
}
interface SolutionComponent_Filter {
}
interface SolutionComponent_Create extends SolutionComponent {
}
interface SolutionComponent_Update extends SolutionComponent {
}
interface solutioncomponentattributeconfiguration_Base extends WebEntity {
}
interface solutioncomponentattributeconfiguration_Fixed extends WebEntity_Fixed {
  solutioncomponentattributeconfigurationid: string;
}
interface solutioncomponentattributeconfiguration extends solutioncomponentattributeconfiguration_Base, solutioncomponentattributeconfiguration_Relationships {
}
interface solutioncomponentattributeconfiguration_Relationships {
}
interface solutioncomponentattributeconfiguration_Result extends solutioncomponentattributeconfiguration_Base, solutioncomponentattributeconfiguration_Relationships {
}
interface solutioncomponentattributeconfiguration_FormattedResult {
}
interface solutioncomponentattributeconfiguration_Select {
}
interface solutioncomponentattributeconfiguration_Expand {
}
interface solutioncomponentattributeconfiguration_Filter {
}
interface solutioncomponentattributeconfiguration_Create extends solutioncomponentattributeconfiguration {
}
interface solutioncomponentattributeconfiguration_Update extends solutioncomponentattributeconfiguration {
}
interface solutioncomponentbatchconfiguration_Base extends WebEntity {
}
interface solutioncomponentbatchconfiguration_Fixed extends WebEntity_Fixed {
  solutioncomponentbatchconfigurationid: string;
}
interface solutioncomponentbatchconfiguration extends solutioncomponentbatchconfiguration_Base, solutioncomponentbatchconfiguration_Relationships {
}
interface solutioncomponentbatchconfiguration_Relationships {
}
interface solutioncomponentbatchconfiguration_Result extends solutioncomponentbatchconfiguration_Base, solutioncomponentbatchconfiguration_Relationships {
}
interface solutioncomponentbatchconfiguration_FormattedResult {
}
interface solutioncomponentbatchconfiguration_Select {
}
interface solutioncomponentbatchconfiguration_Expand {
}
interface solutioncomponentbatchconfiguration_Filter {
}
interface solutioncomponentbatchconfiguration_Create extends solutioncomponentbatchconfiguration {
}
interface solutioncomponentbatchconfiguration_Update extends solutioncomponentbatchconfiguration {
}
interface solutioncomponentconfiguration_Base extends WebEntity {
}
interface solutioncomponentconfiguration_Fixed extends WebEntity_Fixed {
  solutioncomponentconfigurationid: string;
}
interface solutioncomponentconfiguration extends solutioncomponentconfiguration_Base, solutioncomponentconfiguration_Relationships {
}
interface solutioncomponentconfiguration_Relationships {
}
interface solutioncomponentconfiguration_Result extends solutioncomponentconfiguration_Base, solutioncomponentconfiguration_Relationships {
}
interface solutioncomponentconfiguration_FormattedResult {
}
interface solutioncomponentconfiguration_Select {
}
interface solutioncomponentconfiguration_Expand {
}
interface solutioncomponentconfiguration_Filter {
}
interface solutioncomponentconfiguration_Create extends solutioncomponentconfiguration {
}
interface solutioncomponentconfiguration_Update extends solutioncomponentconfiguration {
}
interface SolutionComponentDefinition_Base extends WebEntity {
}
interface SolutionComponentDefinition_Fixed extends WebEntity_Fixed {
  solutioncomponentdefinitionid: string;
}
interface SolutionComponentDefinition extends SolutionComponentDefinition_Base, SolutionComponentDefinition_Relationships {
}
interface SolutionComponentDefinition_Relationships {
}
interface SolutionComponentDefinition_Result extends SolutionComponentDefinition_Base, SolutionComponentDefinition_Relationships {
}
interface SolutionComponentDefinition_FormattedResult {
}
interface SolutionComponentDefinition_Select {
}
interface SolutionComponentDefinition_Expand {
}
interface SolutionComponentDefinition_Filter {
}
interface SolutionComponentDefinition_Create extends SolutionComponentDefinition {
}
interface SolutionComponentDefinition_Update extends SolutionComponentDefinition {
}
interface solutioncomponentrelationshipconfiguration_Base extends WebEntity {
}
interface solutioncomponentrelationshipconfiguration_Fixed extends WebEntity_Fixed {
  solutioncomponentrelationshipconfigurationid: string;
}
interface solutioncomponentrelationshipconfiguration extends solutioncomponentrelationshipconfiguration_Base, solutioncomponentrelationshipconfiguration_Relationships {
}
interface solutioncomponentrelationshipconfiguration_Relationships {
}
interface solutioncomponentrelationshipconfiguration_Result extends solutioncomponentrelationshipconfiguration_Base, solutioncomponentrelationshipconfiguration_Relationships {
}
interface solutioncomponentrelationshipconfiguration_FormattedResult {
}
interface solutioncomponentrelationshipconfiguration_Select {
}
interface solutioncomponentrelationshipconfiguration_Expand {
}
interface solutioncomponentrelationshipconfiguration_Filter {
}
interface solutioncomponentrelationshipconfiguration_Create extends solutioncomponentrelationshipconfiguration {
}
interface solutioncomponentrelationshipconfiguration_Update extends solutioncomponentrelationshipconfiguration {
}
interface SolutionHistoryData_Base extends WebEntity {
}
interface SolutionHistoryData_Fixed extends WebEntity_Fixed {
  solutionhistorydataid: string;
}
interface SolutionHistoryData extends SolutionHistoryData_Base, SolutionHistoryData_Relationships {
}
interface SolutionHistoryData_Relationships {
}
interface SolutionHistoryData_Result extends SolutionHistoryData_Base, SolutionHistoryData_Relationships {
}
interface SolutionHistoryData_FormattedResult {
}
interface SolutionHistoryData_Select {
}
interface SolutionHistoryData_Expand {
}
interface SolutionHistoryData_Filter {
}
interface SolutionHistoryData_Create extends SolutionHistoryData {
}
interface SolutionHistoryData_Update extends SolutionHistoryData {
}
interface SqlEncryptionAudit_Base extends WebEntity {
}
interface SqlEncryptionAudit_Fixed extends WebEntity_Fixed {
  createdon: string;
}
interface SqlEncryptionAudit extends SqlEncryptionAudit_Base, SqlEncryptionAudit_Relationships {
}
interface SqlEncryptionAudit_Relationships {
}
interface SqlEncryptionAudit_Result extends SqlEncryptionAudit_Base, SqlEncryptionAudit_Relationships {
}
interface SqlEncryptionAudit_FormattedResult {
}
interface SqlEncryptionAudit_Select {
}
interface SqlEncryptionAudit_Expand {
}
interface SqlEncryptionAudit_Filter {
}
interface SqlEncryptionAudit_Create extends SqlEncryptionAudit {
}
interface SqlEncryptionAudit_Update extends SqlEncryptionAudit {
}
interface StageSolutionUpload_Base extends WebEntity {
}
interface StageSolutionUpload_Fixed extends WebEntity_Fixed {
  stagesolutionuploadid: string;
}
interface StageSolutionUpload extends StageSolutionUpload_Base, StageSolutionUpload_Relationships {
}
interface StageSolutionUpload_Relationships {
}
interface StageSolutionUpload_Result extends StageSolutionUpload_Base, StageSolutionUpload_Relationships {
}
interface StageSolutionUpload_FormattedResult {
}
interface StageSolutionUpload_Select {
}
interface StageSolutionUpload_Expand {
}
interface StageSolutionUpload_Filter {
}
interface StageSolutionUpload_Create extends StageSolutionUpload {
}
interface StageSolutionUpload_Update extends StageSolutionUpload {
}
interface StatusMap_Base extends WebEntity {
}
interface StatusMap_Fixed extends WebEntity_Fixed {
  statusmapid: string;
}
interface StatusMap extends StatusMap_Base, StatusMap_Relationships {
}
interface StatusMap_Relationships {
}
interface StatusMap_Result extends StatusMap_Base, StatusMap_Relationships {
}
interface StatusMap_FormattedResult {
}
interface StatusMap_Select {
}
interface StatusMap_Expand {
}
interface StatusMap_Filter {
}
interface StatusMap_Create extends StatusMap {
}
interface StatusMap_Update extends StatusMap {
}
interface StringMap_Base extends WebEntity {
}
interface StringMap_Fixed extends WebEntity_Fixed {
  stringmapid: string;
}
interface StringMap extends StringMap_Base, StringMap_Relationships {
}
interface StringMap_Relationships {
}
interface StringMap_Result extends StringMap_Base, StringMap_Relationships {
}
interface StringMap_FormattedResult {
}
interface StringMap_Select {
}
interface StringMap_Expand {
}
interface StringMap_Filter {
}
interface StringMap_Create extends StringMap {
}
interface StringMap_Update extends StringMap {
}
interface Subject_Base extends WebEntity {
}
interface Subject_Fixed extends WebEntity_Fixed {
  subjectid: string;
}
interface Subject extends Subject_Base, Subject_Relationships {
}
interface Subject_Relationships {
}
interface Subject_Result extends Subject_Base, Subject_Relationships {
}
interface Subject_FormattedResult {
}
interface Subject_Select {
}
interface Subject_Expand {
}
interface Subject_Filter {
}
interface Subject_Create extends Subject {
}
interface Subject_Update extends Subject {
}
interface Subscription_Base extends WebEntity {
}
interface Subscription_Fixed extends WebEntity_Fixed {
  subscriptionid: string;
}
interface Subscription extends Subscription_Base, Subscription_Relationships {
}
interface Subscription_Relationships {
}
interface Subscription_Result extends Subscription_Base, Subscription_Relationships {
}
interface Subscription_FormattedResult {
}
interface Subscription_Select {
}
interface Subscription_Expand {
}
interface Subscription_Filter {
}
interface Subscription_Create extends Subscription {
}
interface Subscription_Update extends Subscription {
}
interface SubscriptionClients_Base extends WebEntity {
}
interface SubscriptionClients_Fixed extends WebEntity_Fixed {
  subscriptionclientid: string;
}
interface SubscriptionClients extends SubscriptionClients_Base, SubscriptionClients_Relationships {
}
interface SubscriptionClients_Relationships {
}
interface SubscriptionClients_Result extends SubscriptionClients_Base, SubscriptionClients_Relationships {
}
interface SubscriptionClients_FormattedResult {
}
interface SubscriptionClients_Select {
}
interface SubscriptionClients_Expand {
}
interface SubscriptionClients_Filter {
}
interface SubscriptionClients_Create extends SubscriptionClients {
}
interface SubscriptionClients_Update extends SubscriptionClients {
}
interface SubscriptionManuallyTrackedObject_Base extends WebEntity {
}
interface SubscriptionManuallyTrackedObject_Fixed extends WebEntity_Fixed {
  subscriptionmanuallytrackedobjectid: string;
}
interface SubscriptionManuallyTrackedObject extends SubscriptionManuallyTrackedObject_Base, SubscriptionManuallyTrackedObject_Relationships {
}
interface SubscriptionManuallyTrackedObject_Relationships {
}
interface SubscriptionManuallyTrackedObject_Result extends SubscriptionManuallyTrackedObject_Base, SubscriptionManuallyTrackedObject_Relationships {
}
interface SubscriptionManuallyTrackedObject_FormattedResult {
}
interface SubscriptionManuallyTrackedObject_Select {
}
interface SubscriptionManuallyTrackedObject_Expand {
}
interface SubscriptionManuallyTrackedObject_Filter {
}
interface SubscriptionManuallyTrackedObject_Create extends SubscriptionManuallyTrackedObject {
}
interface SubscriptionManuallyTrackedObject_Update extends SubscriptionManuallyTrackedObject {
}
interface SubscriptionStatisticsOffline_Base extends WebEntity {
}
interface SubscriptionStatisticsOffline_Fixed extends WebEntity_Fixed {
  subscriptionid: string;
}
interface SubscriptionStatisticsOffline extends SubscriptionStatisticsOffline_Base, SubscriptionStatisticsOffline_Relationships {
}
interface SubscriptionStatisticsOffline_Relationships {
}
interface SubscriptionStatisticsOffline_Result extends SubscriptionStatisticsOffline_Base, SubscriptionStatisticsOffline_Relationships {
}
interface SubscriptionStatisticsOffline_FormattedResult {
}
interface SubscriptionStatisticsOffline_Select {
}
interface SubscriptionStatisticsOffline_Expand {
}
interface SubscriptionStatisticsOffline_Filter {
}
interface SubscriptionStatisticsOffline_Create extends SubscriptionStatisticsOffline {
}
interface SubscriptionStatisticsOffline_Update extends SubscriptionStatisticsOffline {
}
interface SubscriptionStatisticsOutlook_Base extends WebEntity {
}
interface SubscriptionStatisticsOutlook_Fixed extends WebEntity_Fixed {
  subscriptionid: string;
}
interface SubscriptionStatisticsOutlook extends SubscriptionStatisticsOutlook_Base, SubscriptionStatisticsOutlook_Relationships {
}
interface SubscriptionStatisticsOutlook_Relationships {
}
interface SubscriptionStatisticsOutlook_Result extends SubscriptionStatisticsOutlook_Base, SubscriptionStatisticsOutlook_Relationships {
}
interface SubscriptionStatisticsOutlook_FormattedResult {
}
interface SubscriptionStatisticsOutlook_Select {
}
interface SubscriptionStatisticsOutlook_Expand {
}
interface SubscriptionStatisticsOutlook_Filter {
}
interface SubscriptionStatisticsOutlook_Create extends SubscriptionStatisticsOutlook {
}
interface SubscriptionStatisticsOutlook_Update extends SubscriptionStatisticsOutlook {
}
interface SubscriptionSyncEntryOffline_Base extends WebEntity {
}
interface SubscriptionSyncEntryOffline_Fixed extends WebEntity_Fixed {
  subscriptionid: string;
}
interface SubscriptionSyncEntryOffline extends SubscriptionSyncEntryOffline_Base, SubscriptionSyncEntryOffline_Relationships {
}
interface SubscriptionSyncEntryOffline_Relationships {
}
interface SubscriptionSyncEntryOffline_Result extends SubscriptionSyncEntryOffline_Base, SubscriptionSyncEntryOffline_Relationships {
}
interface SubscriptionSyncEntryOffline_FormattedResult {
}
interface SubscriptionSyncEntryOffline_Select {
}
interface SubscriptionSyncEntryOffline_Expand {
}
interface SubscriptionSyncEntryOffline_Filter {
}
interface SubscriptionSyncEntryOffline_Create extends SubscriptionSyncEntryOffline {
}
interface SubscriptionSyncEntryOffline_Update extends SubscriptionSyncEntryOffline {
}
interface SubscriptionSyncEntryOutlook_Base extends WebEntity {
}
interface SubscriptionSyncEntryOutlook_Fixed extends WebEntity_Fixed {
  subscriptionid: string;
}
interface SubscriptionSyncEntryOutlook extends SubscriptionSyncEntryOutlook_Base, SubscriptionSyncEntryOutlook_Relationships {
}
interface SubscriptionSyncEntryOutlook_Relationships {
}
interface SubscriptionSyncEntryOutlook_Result extends SubscriptionSyncEntryOutlook_Base, SubscriptionSyncEntryOutlook_Relationships {
}
interface SubscriptionSyncEntryOutlook_FormattedResult {
}
interface SubscriptionSyncEntryOutlook_Select {
}
interface SubscriptionSyncEntryOutlook_Expand {
}
interface SubscriptionSyncEntryOutlook_Filter {
}
interface SubscriptionSyncEntryOutlook_Create extends SubscriptionSyncEntryOutlook {
}
interface SubscriptionSyncEntryOutlook_Update extends SubscriptionSyncEntryOutlook {
}
interface SubscriptionSyncInfo_Base extends WebEntity {
}
interface SubscriptionSyncInfo_Fixed extends WebEntity_Fixed {
  subscriptionsyncinfoid: string;
}
interface SubscriptionSyncInfo extends SubscriptionSyncInfo_Base, SubscriptionSyncInfo_Relationships {
}
interface SubscriptionSyncInfo_Relationships {
}
interface SubscriptionSyncInfo_Result extends SubscriptionSyncInfo_Base, SubscriptionSyncInfo_Relationships {
}
interface SubscriptionSyncInfo_FormattedResult {
}
interface SubscriptionSyncInfo_Select {
}
interface SubscriptionSyncInfo_Expand {
}
interface SubscriptionSyncInfo_Filter {
}
interface SubscriptionSyncInfo_Create extends SubscriptionSyncInfo {
}
interface SubscriptionSyncInfo_Update extends SubscriptionSyncInfo {
}
interface SubscriptionTrackingDeletedObject_Base extends WebEntity {
}
interface SubscriptionTrackingDeletedObject_Fixed extends WebEntity_Fixed {
  timestamp: string;
}
interface SubscriptionTrackingDeletedObject extends SubscriptionTrackingDeletedObject_Base, SubscriptionTrackingDeletedObject_Relationships {
}
interface SubscriptionTrackingDeletedObject_Relationships {
}
interface SubscriptionTrackingDeletedObject_Result extends SubscriptionTrackingDeletedObject_Base, SubscriptionTrackingDeletedObject_Relationships {
}
interface SubscriptionTrackingDeletedObject_FormattedResult {
}
interface SubscriptionTrackingDeletedObject_Select {
}
interface SubscriptionTrackingDeletedObject_Expand {
}
interface SubscriptionTrackingDeletedObject_Filter {
}
interface SubscriptionTrackingDeletedObject_Create extends SubscriptionTrackingDeletedObject {
}
interface SubscriptionTrackingDeletedObject_Update extends SubscriptionTrackingDeletedObject {
}
interface SuggestionCardTemplate_Base extends WebEntity {
}
interface SuggestionCardTemplate_Fixed extends WebEntity_Fixed {
  suggestioncardtemplateid: string;
}
interface SuggestionCardTemplate extends SuggestionCardTemplate_Base, SuggestionCardTemplate_Relationships {
}
interface SuggestionCardTemplate_Relationships {
}
interface SuggestionCardTemplate_Result extends SuggestionCardTemplate_Base, SuggestionCardTemplate_Relationships {
}
interface SuggestionCardTemplate_FormattedResult {
}
interface SuggestionCardTemplate_Select {
}
interface SuggestionCardTemplate_Expand {
}
interface SuggestionCardTemplate_Filter {
}
interface SuggestionCardTemplate_Create extends SuggestionCardTemplate {
}
interface SuggestionCardTemplate_Update extends SuggestionCardTemplate {
}
interface SyncAttributeMapping_Base extends WebEntity {
}
interface SyncAttributeMapping_Fixed extends WebEntity_Fixed {
  syncattributemappingid: string;
}
interface SyncAttributeMapping extends SyncAttributeMapping_Base, SyncAttributeMapping_Relationships {
}
interface SyncAttributeMapping_Relationships {
}
interface SyncAttributeMapping_Result extends SyncAttributeMapping_Base, SyncAttributeMapping_Relationships {
}
interface SyncAttributeMapping_FormattedResult {
}
interface SyncAttributeMapping_Select {
}
interface SyncAttributeMapping_Expand {
}
interface SyncAttributeMapping_Filter {
}
interface SyncAttributeMapping_Create extends SyncAttributeMapping {
}
interface SyncAttributeMapping_Update extends SyncAttributeMapping {
}
interface SyncAttributeMappingProfile_Base extends WebEntity {
}
interface SyncAttributeMappingProfile_Fixed extends WebEntity_Fixed {
  syncattributemappingprofileid: string;
}
interface SyncAttributeMappingProfile extends SyncAttributeMappingProfile_Base, SyncAttributeMappingProfile_Relationships {
}
interface SyncAttributeMappingProfile_Relationships {
}
interface SyncAttributeMappingProfile_Result extends SyncAttributeMappingProfile_Base, SyncAttributeMappingProfile_Relationships {
}
interface SyncAttributeMappingProfile_FormattedResult {
}
interface SyncAttributeMappingProfile_Select {
}
interface SyncAttributeMappingProfile_Expand {
}
interface SyncAttributeMappingProfile_Filter {
}
interface SyncAttributeMappingProfile_Create extends SyncAttributeMappingProfile {
}
interface SyncAttributeMappingProfile_Update extends SyncAttributeMappingProfile {
}
interface SyncError_Base extends WebEntity {
}
interface SyncError_Fixed extends WebEntity_Fixed {
  syncerrorid: string;
}
interface SyncError extends SyncError_Base, SyncError_Relationships {
}
interface SyncError_Relationships {
}
interface SyncError_Result extends SyncError_Base, SyncError_Relationships {
}
interface SyncError_FormattedResult {
}
interface SyncError_Select {
}
interface SyncError_Expand {
}
interface SyncError_Filter {
}
interface SyncError_Create extends SyncError {
}
interface SyncError_Update extends SyncError {
}
interface SystemApplicationMetadata_Base extends WebEntity {
}
interface SystemApplicationMetadata_Fixed extends WebEntity_Fixed {
  systemapplicationmetadataid: string;
}
interface SystemApplicationMetadata extends SystemApplicationMetadata_Base, SystemApplicationMetadata_Relationships {
}
interface SystemApplicationMetadata_Relationships {
}
interface SystemApplicationMetadata_Result extends SystemApplicationMetadata_Base, SystemApplicationMetadata_Relationships {
}
interface SystemApplicationMetadata_FormattedResult {
}
interface SystemApplicationMetadata_Select {
}
interface SystemApplicationMetadata_Expand {
}
interface SystemApplicationMetadata_Filter {
}
interface SystemApplicationMetadata_Create extends SystemApplicationMetadata {
}
interface SystemApplicationMetadata_Update extends SystemApplicationMetadata {
}
interface SystemForm_Base extends WebEntity {
}
interface SystemForm_Fixed extends WebEntity_Fixed {
  formid: string;
}
interface SystemForm extends SystemForm_Base, SystemForm_Relationships {
}
interface SystemForm_Relationships {
}
interface SystemForm_Result extends SystemForm_Base, SystemForm_Relationships {
}
interface SystemForm_FormattedResult {
}
interface SystemForm_Select {
}
interface SystemForm_Expand {
}
interface SystemForm_Filter {
}
interface SystemForm_Create extends SystemForm {
}
interface SystemForm_Update extends SystemForm {
}
interface SystemUser_Base extends WebEntity {
}
interface SystemUser_Fixed extends WebEntity_Fixed {
  systemuserid: string;
}
interface SystemUser extends SystemUser_Base, SystemUser_Relationships {
}
interface SystemUser_Relationships {
}
interface SystemUser_Result extends SystemUser_Base, SystemUser_Relationships {
}
interface SystemUser_FormattedResult {
}
interface SystemUser_Select {
}
interface SystemUser_Expand {
}
interface SystemUser_Filter {
}
interface SystemUser_Create extends SystemUser {
}
interface SystemUser_Update extends SystemUser {
}
interface SystemUserAuthorizationChangeTracker_Base extends WebEntity {
}
interface SystemUserAuthorizationChangeTracker_Fixed extends WebEntity_Fixed {
  systemuserid: string;
}
interface SystemUserAuthorizationChangeTracker extends SystemUserAuthorizationChangeTracker_Base, SystemUserAuthorizationChangeTracker_Relationships {
}
interface SystemUserAuthorizationChangeTracker_Relationships {
}
interface SystemUserAuthorizationChangeTracker_Result extends SystemUserAuthorizationChangeTracker_Base, SystemUserAuthorizationChangeTracker_Relationships {
}
interface SystemUserAuthorizationChangeTracker_FormattedResult {
}
interface SystemUserAuthorizationChangeTracker_Select {
}
interface SystemUserAuthorizationChangeTracker_Expand {
}
interface SystemUserAuthorizationChangeTracker_Filter {
}
interface SystemUserAuthorizationChangeTracker_Create extends SystemUserAuthorizationChangeTracker {
}
interface SystemUserAuthorizationChangeTracker_Update extends SystemUserAuthorizationChangeTracker {
}
interface SystemUserBusinessUnitEntityMap_Base extends WebEntity {
}
interface SystemUserBusinessUnitEntityMap_Fixed extends WebEntity_Fixed {
  systemuserbusinessunitentitymapid: string;
}
interface SystemUserBusinessUnitEntityMap extends SystemUserBusinessUnitEntityMap_Base, SystemUserBusinessUnitEntityMap_Relationships {
}
interface SystemUserBusinessUnitEntityMap_Relationships {
}
interface SystemUserBusinessUnitEntityMap_Result extends SystemUserBusinessUnitEntityMap_Base, SystemUserBusinessUnitEntityMap_Relationships {
}
interface SystemUserBusinessUnitEntityMap_FormattedResult {
}
interface SystemUserBusinessUnitEntityMap_Select {
}
interface SystemUserBusinessUnitEntityMap_Expand {
}
interface SystemUserBusinessUnitEntityMap_Filter {
}
interface SystemUserBusinessUnitEntityMap_Create extends SystemUserBusinessUnitEntityMap {
}
interface SystemUserBusinessUnitEntityMap_Update extends SystemUserBusinessUnitEntityMap {
}
interface SystemUserLicenses_Base extends WebEntity {
}
interface SystemUserLicenses_Fixed extends WebEntity_Fixed {
  systemuserlicenseid: string;
}
interface SystemUserLicenses extends SystemUserLicenses_Base, SystemUserLicenses_Relationships {
}
interface SystemUserLicenses_Relationships {
}
interface SystemUserLicenses_Result extends SystemUserLicenses_Base, SystemUserLicenses_Relationships {
}
interface SystemUserLicenses_FormattedResult {
}
interface SystemUserLicenses_Select {
}
interface SystemUserLicenses_Expand {
}
interface SystemUserLicenses_Filter {
}
interface SystemUserLicenses_Create extends SystemUserLicenses {
}
interface SystemUserLicenses_Update extends SystemUserLicenses {
}
interface SystemUserManagerMap_Base extends WebEntity {
}
interface SystemUserManagerMap_Fixed extends WebEntity_Fixed {
  systemusermanagermapid: string;
}
interface SystemUserManagerMap extends SystemUserManagerMap_Base, SystemUserManagerMap_Relationships {
}
interface SystemUserManagerMap_Relationships {
}
interface SystemUserManagerMap_Result extends SystemUserManagerMap_Base, SystemUserManagerMap_Relationships {
}
interface SystemUserManagerMap_FormattedResult {
}
interface SystemUserManagerMap_Select {
}
interface SystemUserManagerMap_Expand {
}
interface SystemUserManagerMap_Filter {
}
interface SystemUserManagerMap_Create extends SystemUserManagerMap {
}
interface SystemUserManagerMap_Update extends SystemUserManagerMap {
}
interface SystemUserPrincipals_Base extends WebEntity {
}
interface SystemUserPrincipals_Fixed extends WebEntity_Fixed {
  systemuserprincipalid: string;
}
interface SystemUserPrincipals extends SystemUserPrincipals_Base, SystemUserPrincipals_Relationships {
}
interface SystemUserPrincipals_Relationships {
}
interface SystemUserPrincipals_Result extends SystemUserPrincipals_Base, SystemUserPrincipals_Relationships {
}
interface SystemUserPrincipals_FormattedResult {
}
interface SystemUserPrincipals_Select {
}
interface SystemUserPrincipals_Expand {
}
interface SystemUserPrincipals_Filter {
}
interface SystemUserPrincipals_Create extends SystemUserPrincipals {
}
interface SystemUserPrincipals_Update extends SystemUserPrincipals {
}
interface SystemUserProfiles_Base extends WebEntity {
}
interface SystemUserProfiles_Fixed extends WebEntity_Fixed {
  systemuserprofileid: string;
}
interface SystemUserProfiles extends SystemUserProfiles_Base, SystemUserProfiles_Relationships {
}
interface SystemUserProfiles_Relationships {
}
interface SystemUserProfiles_Result extends SystemUserProfiles_Base, SystemUserProfiles_Relationships {
}
interface SystemUserProfiles_FormattedResult {
}
interface SystemUserProfiles_Select {
}
interface SystemUserProfiles_Expand {
}
interface SystemUserProfiles_Filter {
}
interface SystemUserProfiles_Create extends SystemUserProfiles {
}
interface SystemUserProfiles_Update extends SystemUserProfiles {
}
interface SystemUserRoles_Base extends WebEntity {
}
interface SystemUserRoles_Fixed extends WebEntity_Fixed {
  systemuserroleid: string;
}
interface SystemUserRoles extends SystemUserRoles_Base, SystemUserRoles_Relationships {
}
interface SystemUserRoles_Relationships {
}
interface SystemUserRoles_Result extends SystemUserRoles_Base, SystemUserRoles_Relationships {
}
interface SystemUserRoles_FormattedResult {
}
interface SystemUserRoles_Select {
}
interface SystemUserRoles_Expand {
}
interface SystemUserRoles_Filter {
}
interface SystemUserRoles_Create extends SystemUserRoles {
}
interface SystemUserRoles_Update extends SystemUserRoles {
}
interface SystemUserSyncMappingProfiles_Base extends WebEntity {
}
interface SystemUserSyncMappingProfiles_Fixed extends WebEntity_Fixed {
  systemusersyncmappingprofileid: string;
}
interface SystemUserSyncMappingProfiles extends SystemUserSyncMappingProfiles_Base, SystemUserSyncMappingProfiles_Relationships {
}
interface SystemUserSyncMappingProfiles_Relationships {
}
interface SystemUserSyncMappingProfiles_Result extends SystemUserSyncMappingProfiles_Base, SystemUserSyncMappingProfiles_Relationships {
}
interface SystemUserSyncMappingProfiles_FormattedResult {
}
interface SystemUserSyncMappingProfiles_Select {
}
interface SystemUserSyncMappingProfiles_Expand {
}
interface SystemUserSyncMappingProfiles_Filter {
}
interface SystemUserSyncMappingProfiles_Create extends SystemUserSyncMappingProfiles {
}
interface SystemUserSyncMappingProfiles_Update extends SystemUserSyncMappingProfiles {
}
interface Task_Base extends WebEntity {
}
interface Task_Fixed extends WebEntity_Fixed {
  activityid: string;
}
interface Task extends Task_Base, Task_Relationships {
}
interface Task_Relationships {
}
interface Task_Result extends Task_Base, Task_Relationships {
}
interface Task_FormattedResult {
}
interface Task_Select {
}
interface Task_Expand {
}
interface Task_Filter {
}
interface Task_Create extends Task {
}
interface Task_Update extends Task {
}
interface Team_Base extends WebEntity {
}
interface Team_Fixed extends WebEntity_Fixed {
  teamid: string;
}
interface Team extends Team_Base, Team_Relationships {
}
interface Team_Relationships {
}
interface Team_Result extends Team_Base, Team_Relationships {
}
interface Team_FormattedResult {
}
interface Team_Select {
}
interface Team_Expand {
}
interface Team_Filter {
}
interface Team_Create extends Team {
}
interface Team_Update extends Team {
}
interface TeamMembership_Base extends WebEntity {
}
interface TeamMembership_Fixed extends WebEntity_Fixed {
  teammembershipid: string;
}
interface TeamMembership extends TeamMembership_Base, TeamMembership_Relationships {
}
interface TeamMembership_Relationships {
}
interface TeamMembership_Result extends TeamMembership_Base, TeamMembership_Relationships {
}
interface TeamMembership_FormattedResult {
}
interface TeamMembership_Select {
}
interface TeamMembership_Expand {
}
interface TeamMembership_Filter {
}
interface TeamMembership_Create extends TeamMembership {
}
interface TeamMembership_Update extends TeamMembership {
}
interface teammobileofflineprofilemembership_Base extends WebEntity {
}
interface teammobileofflineprofilemembership_Fixed extends WebEntity_Fixed {
  teammobileofflineprofilemembershipid: string;
}
interface teammobileofflineprofilemembership extends teammobileofflineprofilemembership_Base, teammobileofflineprofilemembership_Relationships {
}
interface teammobileofflineprofilemembership_Relationships {
}
interface teammobileofflineprofilemembership_Result extends teammobileofflineprofilemembership_Base, teammobileofflineprofilemembership_Relationships {
}
interface teammobileofflineprofilemembership_FormattedResult {
}
interface teammobileofflineprofilemembership_Select {
}
interface teammobileofflineprofilemembership_Expand {
}
interface teammobileofflineprofilemembership_Filter {
}
interface teammobileofflineprofilemembership_Create extends teammobileofflineprofilemembership {
}
interface teammobileofflineprofilemembership_Update extends teammobileofflineprofilemembership {
}
interface TeamProfiles_Base extends WebEntity {
}
interface TeamProfiles_Fixed extends WebEntity_Fixed {
  teamprofileid: string;
}
interface TeamProfiles extends TeamProfiles_Base, TeamProfiles_Relationships {
}
interface TeamProfiles_Relationships {
}
interface TeamProfiles_Result extends TeamProfiles_Base, TeamProfiles_Relationships {
}
interface TeamProfiles_FormattedResult {
}
interface TeamProfiles_Select {
}
interface TeamProfiles_Expand {
}
interface TeamProfiles_Filter {
}
interface TeamProfiles_Create extends TeamProfiles {
}
interface TeamProfiles_Update extends TeamProfiles {
}
interface TeamRoles_Base extends WebEntity {
}
interface TeamRoles_Fixed extends WebEntity_Fixed {
  teamroleid: string;
}
interface TeamRoles extends TeamRoles_Base, TeamRoles_Relationships {
}
interface TeamRoles_Relationships {
}
interface TeamRoles_Result extends TeamRoles_Base, TeamRoles_Relationships {
}
interface TeamRoles_FormattedResult {
}
interface TeamRoles_Select {
}
interface TeamRoles_Expand {
}
interface TeamRoles_Filter {
}
interface TeamRoles_Create extends TeamRoles {
}
interface TeamRoles_Update extends TeamRoles {
}
interface TeamSyncAttributeMappingProfiles_Base extends WebEntity {
}
interface TeamSyncAttributeMappingProfiles_Fixed extends WebEntity_Fixed {
  teamsyncattributemappingprofileid: string;
}
interface TeamSyncAttributeMappingProfiles extends TeamSyncAttributeMappingProfiles_Base, TeamSyncAttributeMappingProfiles_Relationships {
}
interface TeamSyncAttributeMappingProfiles_Relationships {
}
interface TeamSyncAttributeMappingProfiles_Result extends TeamSyncAttributeMappingProfiles_Base, TeamSyncAttributeMappingProfiles_Relationships {
}
interface TeamSyncAttributeMappingProfiles_FormattedResult {
}
interface TeamSyncAttributeMappingProfiles_Select {
}
interface TeamSyncAttributeMappingProfiles_Expand {
}
interface TeamSyncAttributeMappingProfiles_Filter {
}
interface TeamSyncAttributeMappingProfiles_Create extends TeamSyncAttributeMappingProfiles {
}
interface TeamSyncAttributeMappingProfiles_Update extends TeamSyncAttributeMappingProfiles {
}
interface TeamTemplate_Base extends WebEntity {
}
interface TeamTemplate_Fixed extends WebEntity_Fixed {
  teamtemplateid: string;
}
interface TeamTemplate extends TeamTemplate_Base, TeamTemplate_Relationships {
}
interface TeamTemplate_Relationships {
}
interface TeamTemplate_Result extends TeamTemplate_Base, TeamTemplate_Relationships {
}
interface TeamTemplate_FormattedResult {
}
interface TeamTemplate_Select {
}
interface TeamTemplate_Expand {
}
interface TeamTemplate_Filter {
}
interface TeamTemplate_Create extends TeamTemplate {
}
interface TeamTemplate_Update extends TeamTemplate {
}
interface Template_Base extends WebEntity {
}
interface Template_Fixed extends WebEntity_Fixed {
  templateid: string;
}
interface Template extends Template_Base, Template_Relationships {
}
interface Template_Relationships {
}
interface Template_Result extends Template_Base, Template_Relationships {
}
interface Template_FormattedResult {
}
interface Template_Select {
}
interface Template_Expand {
}
interface Template_Filter {
}
interface Template_Create extends Template {
}
interface Template_Update extends Template {
}
interface Territory_Base extends WebEntity {
}
interface Territory_Fixed extends WebEntity_Fixed {
  territoryid: string;
}
interface Territory extends Territory_Base, Territory_Relationships {
}
interface Territory_Relationships {
}
interface Territory_Result extends Territory_Base, Territory_Relationships {
}
interface Territory_FormattedResult {
}
interface Territory_Select {
}
interface Territory_Expand {
}
interface Territory_Filter {
}
interface Territory_Create extends Territory {
}
interface Territory_Update extends Territory {
}
interface TextAnalyticsEntityMapping_Base extends WebEntity {
}
interface TextAnalyticsEntityMapping_Fixed extends WebEntity_Fixed {
  textanalyticsentitymappingid: string;
}
interface TextAnalyticsEntityMapping extends TextAnalyticsEntityMapping_Base, TextAnalyticsEntityMapping_Relationships {
}
interface TextAnalyticsEntityMapping_Relationships {
}
interface TextAnalyticsEntityMapping_Result extends TextAnalyticsEntityMapping_Base, TextAnalyticsEntityMapping_Relationships {
}
interface TextAnalyticsEntityMapping_FormattedResult {
}
interface TextAnalyticsEntityMapping_Select {
}
interface TextAnalyticsEntityMapping_Expand {
}
interface TextAnalyticsEntityMapping_Filter {
}
interface TextAnalyticsEntityMapping_Create extends TextAnalyticsEntityMapping {
}
interface TextAnalyticsEntityMapping_Update extends TextAnalyticsEntityMapping {
}
interface Theme_Base extends WebEntity {
}
interface Theme_Fixed extends WebEntity_Fixed {
  themeid: string;
}
interface Theme extends Theme_Base, Theme_Relationships {
}
interface Theme_Relationships {
}
interface Theme_Result extends Theme_Base, Theme_Relationships {
}
interface Theme_FormattedResult {
}
interface Theme_Select {
}
interface Theme_Expand {
}
interface Theme_Filter {
}
interface Theme_Create extends Theme {
}
interface Theme_Update extends Theme {
}
interface TimeStampDateMapping_Base extends WebEntity {
}
interface TimeStampDateMapping_Fixed extends WebEntity_Fixed {
  timestampdatemappingid: string;
}
interface TimeStampDateMapping extends TimeStampDateMapping_Base, TimeStampDateMapping_Relationships {
}
interface TimeStampDateMapping_Relationships {
}
interface TimeStampDateMapping_Result extends TimeStampDateMapping_Base, TimeStampDateMapping_Relationships {
}
interface TimeStampDateMapping_FormattedResult {
}
interface TimeStampDateMapping_Select {
}
interface TimeStampDateMapping_Expand {
}
interface TimeStampDateMapping_Filter {
}
interface TimeStampDateMapping_Create extends TimeStampDateMapping {
}
interface TimeStampDateMapping_Update extends TimeStampDateMapping {
}
interface TimeZoneDefinition_Base extends WebEntity {
}
interface TimeZoneDefinition_Fixed extends WebEntity_Fixed {
  timezonedefinitionid: string;
}
interface TimeZoneDefinition extends TimeZoneDefinition_Base, TimeZoneDefinition_Relationships {
}
interface TimeZoneDefinition_Relationships {
}
interface TimeZoneDefinition_Result extends TimeZoneDefinition_Base, TimeZoneDefinition_Relationships {
}
interface TimeZoneDefinition_FormattedResult {
}
interface TimeZoneDefinition_Select {
}
interface TimeZoneDefinition_Expand {
}
interface TimeZoneDefinition_Filter {
}
interface TimeZoneDefinition_Create extends TimeZoneDefinition {
}
interface TimeZoneDefinition_Update extends TimeZoneDefinition {
}
interface TimeZoneLocalizedName_Base extends WebEntity {
}
interface TimeZoneLocalizedName_Fixed extends WebEntity_Fixed {
  timezonelocalizednameid: string;
}
interface TimeZoneLocalizedName extends TimeZoneLocalizedName_Base, TimeZoneLocalizedName_Relationships {
}
interface TimeZoneLocalizedName_Relationships {
}
interface TimeZoneLocalizedName_Result extends TimeZoneLocalizedName_Base, TimeZoneLocalizedName_Relationships {
}
interface TimeZoneLocalizedName_FormattedResult {
}
interface TimeZoneLocalizedName_Select {
}
interface TimeZoneLocalizedName_Expand {
}
interface TimeZoneLocalizedName_Filter {
}
interface TimeZoneLocalizedName_Create extends TimeZoneLocalizedName {
}
interface TimeZoneLocalizedName_Update extends TimeZoneLocalizedName {
}
interface TimeZoneRule_Base extends WebEntity {
}
interface TimeZoneRule_Fixed extends WebEntity_Fixed {
  timezoneruleid: string;
}
interface TimeZoneRule extends TimeZoneRule_Base, TimeZoneRule_Relationships {
}
interface TimeZoneRule_Relationships {
}
interface TimeZoneRule_Result extends TimeZoneRule_Base, TimeZoneRule_Relationships {
}
interface TimeZoneRule_FormattedResult {
}
interface TimeZoneRule_Select {
}
interface TimeZoneRule_Expand {
}
interface TimeZoneRule_Filter {
}
interface TimeZoneRule_Create extends TimeZoneRule {
}
interface TimeZoneRule_Update extends TimeZoneRule {
}
interface TraceAssociation_Base extends WebEntity {
}
interface TraceAssociation_Fixed extends WebEntity_Fixed {
  traceassociationid: string;
}
interface TraceAssociation extends TraceAssociation_Base, TraceAssociation_Relationships {
}
interface TraceAssociation_Relationships {
}
interface TraceAssociation_Result extends TraceAssociation_Base, TraceAssociation_Relationships {
}
interface TraceAssociation_FormattedResult {
}
interface TraceAssociation_Select {
}
interface TraceAssociation_Expand {
}
interface TraceAssociation_Filter {
}
interface TraceAssociation_Create extends TraceAssociation {
}
interface TraceAssociation_Update extends TraceAssociation {
}
interface TraceLog_Base extends WebEntity {
}
interface TraceLog_Fixed extends WebEntity_Fixed {
  tracelogid: string;
}
interface TraceLog extends TraceLog_Base, TraceLog_Relationships {
}
interface TraceLog_Relationships {
}
interface TraceLog_Result extends TraceLog_Base, TraceLog_Relationships {
}
interface TraceLog_FormattedResult {
}
interface TraceLog_Select {
}
interface TraceLog_Expand {
}
interface TraceLog_Filter {
}
interface TraceLog_Create extends TraceLog {
}
interface TraceLog_Update extends TraceLog {
}
interface TraceRegarding_Base extends WebEntity {
}
interface TraceRegarding_Fixed extends WebEntity_Fixed {
  traceregardingid: string;
}
interface TraceRegarding extends TraceRegarding_Base, TraceRegarding_Relationships {
}
interface TraceRegarding_Relationships {
}
interface TraceRegarding_Result extends TraceRegarding_Base, TraceRegarding_Relationships {
}
interface TraceRegarding_FormattedResult {
}
interface TraceRegarding_Select {
}
interface TraceRegarding_Expand {
}
interface TraceRegarding_Filter {
}
interface TraceRegarding_Create extends TraceRegarding {
}
interface TraceRegarding_Update extends TraceRegarding {
}
interface TransactionCurrency_Base extends WebEntity {
}
interface TransactionCurrency_Fixed extends WebEntity_Fixed {
  transactioncurrencyid: string;
}
interface TransactionCurrency extends TransactionCurrency_Base, TransactionCurrency_Relationships {
}
interface TransactionCurrency_Relationships {
}
interface TransactionCurrency_Result extends TransactionCurrency_Base, TransactionCurrency_Relationships {
}
interface TransactionCurrency_FormattedResult {
}
interface TransactionCurrency_Select {
}
interface TransactionCurrency_Expand {
}
interface TransactionCurrency_Filter {
}
interface TransactionCurrency_Create extends TransactionCurrency {
}
interface TransactionCurrency_Update extends TransactionCurrency {
}
interface TransformationMapping_Base extends WebEntity {
}
interface TransformationMapping_Fixed extends WebEntity_Fixed {
  transformationmappingid: string;
}
interface TransformationMapping extends TransformationMapping_Base, TransformationMapping_Relationships {
}
interface TransformationMapping_Relationships {
}
interface TransformationMapping_Result extends TransformationMapping_Base, TransformationMapping_Relationships {
}
interface TransformationMapping_FormattedResult {
}
interface TransformationMapping_Select {
}
interface TransformationMapping_Expand {
}
interface TransformationMapping_Filter {
}
interface TransformationMapping_Create extends TransformationMapping {
}
interface TransformationMapping_Update extends TransformationMapping {
}
interface TransformationParameterMapping_Base extends WebEntity {
}
interface TransformationParameterMapping_Fixed extends WebEntity_Fixed {
  transformationparametermappingid: string;
}
interface TransformationParameterMapping extends TransformationParameterMapping_Base, TransformationParameterMapping_Relationships {
}
interface TransformationParameterMapping_Relationships {
}
interface TransformationParameterMapping_Result extends TransformationParameterMapping_Base, TransformationParameterMapping_Relationships {
}
interface TransformationParameterMapping_FormattedResult {
}
interface TransformationParameterMapping_Select {
}
interface TransformationParameterMapping_Expand {
}
interface TransformationParameterMapping_Filter {
}
interface TransformationParameterMapping_Create extends TransformationParameterMapping {
}
interface TransformationParameterMapping_Update extends TransformationParameterMapping {
}
interface TranslationProcess_Base extends WebEntity {
}
interface TranslationProcess_Fixed extends WebEntity_Fixed {
  businessprocessflowinstanceid: string;
}
interface TranslationProcess extends TranslationProcess_Base, TranslationProcess_Relationships {
}
interface TranslationProcess_Relationships {
}
interface TranslationProcess_Result extends TranslationProcess_Base, TranslationProcess_Relationships {
}
interface TranslationProcess_FormattedResult {
}
interface TranslationProcess_Select {
}
interface TranslationProcess_Expand {
}
interface TranslationProcess_Filter {
}
interface TranslationProcess_Create extends TranslationProcess {
}
interface TranslationProcess_Update extends TranslationProcess {
}
interface UnresolvedAddress_Base extends WebEntity {
}
interface UnresolvedAddress_Fixed extends WebEntity_Fixed {
  unresolvedaddressid: string;
}
interface UnresolvedAddress extends UnresolvedAddress_Base, UnresolvedAddress_Relationships {
}
interface UnresolvedAddress_Relationships {
}
interface UnresolvedAddress_Result extends UnresolvedAddress_Base, UnresolvedAddress_Relationships {
}
interface UnresolvedAddress_FormattedResult {
}
interface UnresolvedAddress_Select {
}
interface UnresolvedAddress_Expand {
}
interface UnresolvedAddress_Filter {
}
interface UnresolvedAddress_Create extends UnresolvedAddress {
}
interface UnresolvedAddress_Update extends UnresolvedAddress {
}
interface UntrackedEmail_Base extends WebEntity {
}
interface UntrackedEmail_Fixed extends WebEntity_Fixed {
  activityid: string;
}
interface UntrackedEmail extends UntrackedEmail_Base, UntrackedEmail_Relationships {
}
interface UntrackedEmail_Relationships {
}
interface UntrackedEmail_Result extends UntrackedEmail_Base, UntrackedEmail_Relationships {
}
interface UntrackedEmail_FormattedResult {
}
interface UntrackedEmail_Select {
}
interface UntrackedEmail_Expand {
}
interface UntrackedEmail_Filter {
}
interface UntrackedEmail_Create extends UntrackedEmail {
}
interface UntrackedEmail_Update extends UntrackedEmail {
}
interface UserApplicationMetadata_Base extends WebEntity {
}
interface UserApplicationMetadata_Fixed extends WebEntity_Fixed {
  userapplicationmetadataid: string;
}
interface UserApplicationMetadata extends UserApplicationMetadata_Base, UserApplicationMetadata_Relationships {
}
interface UserApplicationMetadata_Relationships {
}
interface UserApplicationMetadata_Result extends UserApplicationMetadata_Base, UserApplicationMetadata_Relationships {
}
interface UserApplicationMetadata_FormattedResult {
}
interface UserApplicationMetadata_Select {
}
interface UserApplicationMetadata_Expand {
}
interface UserApplicationMetadata_Filter {
}
interface UserApplicationMetadata_Create extends UserApplicationMetadata {
}
interface UserApplicationMetadata_Update extends UserApplicationMetadata {
}
interface UserEntityInstanceData_Base extends WebEntity {
}
interface UserEntityInstanceData_Fixed extends WebEntity_Fixed {
  userentityinstancedataid: string;
}
interface UserEntityInstanceData extends UserEntityInstanceData_Base, UserEntityInstanceData_Relationships {
}
interface UserEntityInstanceData_Relationships {
}
interface UserEntityInstanceData_Result extends UserEntityInstanceData_Base, UserEntityInstanceData_Relationships {
}
interface UserEntityInstanceData_FormattedResult {
}
interface UserEntityInstanceData_Select {
}
interface UserEntityInstanceData_Expand {
}
interface UserEntityInstanceData_Filter {
}
interface UserEntityInstanceData_Create extends UserEntityInstanceData {
}
interface UserEntityInstanceData_Update extends UserEntityInstanceData {
}
interface UserEntityUISettings_Base extends WebEntity {
}
interface UserEntityUISettings_Fixed extends WebEntity_Fixed {
  userentityuisettingsid: string;
}
interface UserEntityUISettings extends UserEntityUISettings_Base, UserEntityUISettings_Relationships {
}
interface UserEntityUISettings_Relationships {
}
interface UserEntityUISettings_Result extends UserEntityUISettings_Base, UserEntityUISettings_Relationships {
}
interface UserEntityUISettings_FormattedResult {
}
interface UserEntityUISettings_Select {
}
interface UserEntityUISettings_Expand {
}
interface UserEntityUISettings_Filter {
}
interface UserEntityUISettings_Create extends UserEntityUISettings {
}
interface UserEntityUISettings_Update extends UserEntityUISettings {
}
interface UserFiscalCalendar_Base extends WebEntity {
}
interface UserFiscalCalendar_Fixed extends WebEntity_Fixed {
  userfiscalcalendarid: string;
}
interface UserFiscalCalendar extends UserFiscalCalendar_Base, UserFiscalCalendar_Relationships {
}
interface UserFiscalCalendar_Relationships {
}
interface UserFiscalCalendar_Result extends UserFiscalCalendar_Base, UserFiscalCalendar_Relationships {
}
interface UserFiscalCalendar_FormattedResult {
}
interface UserFiscalCalendar_Select {
}
interface UserFiscalCalendar_Expand {
}
interface UserFiscalCalendar_Filter {
}
interface UserFiscalCalendar_Create extends UserFiscalCalendar {
}
interface UserFiscalCalendar_Update extends UserFiscalCalendar {
}
interface UserForm_Base extends WebEntity {
}
interface UserForm_Fixed extends WebEntity_Fixed {
  userformid: string;
}
interface UserForm extends UserForm_Base, UserForm_Relationships {
}
interface UserForm_Relationships {
}
interface UserForm_Result extends UserForm_Base, UserForm_Relationships {
}
interface UserForm_FormattedResult {
}
interface UserForm_Select {
}
interface UserForm_Expand {
}
interface UserForm_Filter {
}
interface UserForm_Create extends UserForm {
}
interface UserForm_Update extends UserForm {
}
interface UserMapping_Base extends WebEntity {
}
interface UserMapping_Fixed extends WebEntity_Fixed {
  usermappingid: string;
}
interface UserMapping extends UserMapping_Base, UserMapping_Relationships {
}
interface UserMapping_Relationships {
}
interface UserMapping_Result extends UserMapping_Base, UserMapping_Relationships {
}
interface UserMapping_FormattedResult {
}
interface UserMapping_Select {
}
interface UserMapping_Expand {
}
interface UserMapping_Filter {
}
interface UserMapping_Create extends UserMapping {
}
interface UserMapping_Update extends UserMapping {
}
interface usermobileofflineprofilemembership_Base extends WebEntity {
}
interface usermobileofflineprofilemembership_Fixed extends WebEntity_Fixed {
  usermobileofflineprofilemembershipid: string;
}
interface usermobileofflineprofilemembership extends usermobileofflineprofilemembership_Base, usermobileofflineprofilemembership_Relationships {
}
interface usermobileofflineprofilemembership_Relationships {
}
interface usermobileofflineprofilemembership_Result extends usermobileofflineprofilemembership_Base, usermobileofflineprofilemembership_Relationships {
}
interface usermobileofflineprofilemembership_FormattedResult {
}
interface usermobileofflineprofilemembership_Select {
}
interface usermobileofflineprofilemembership_Expand {
}
interface usermobileofflineprofilemembership_Filter {
}
interface usermobileofflineprofilemembership_Create extends usermobileofflineprofilemembership {
}
interface usermobileofflineprofilemembership_Update extends usermobileofflineprofilemembership {
}
interface UserQuery_Base extends WebEntity {
}
interface UserQuery_Fixed extends WebEntity_Fixed {
  userqueryid: string;
}
interface UserQuery extends UserQuery_Base, UserQuery_Relationships {
}
interface UserQuery_Relationships {
}
interface UserQuery_Result extends UserQuery_Base, UserQuery_Relationships {
}
interface UserQuery_FormattedResult {
}
interface UserQuery_Select {
}
interface UserQuery_Expand {
}
interface UserQuery_Filter {
}
interface UserQuery_Create extends UserQuery {
}
interface UserQuery_Update extends UserQuery {
}
interface UserQueryVisualization_Base extends WebEntity {
}
interface UserQueryVisualization_Fixed extends WebEntity_Fixed {
  userqueryvisualizationid: string;
}
interface UserQueryVisualization extends UserQueryVisualization_Base, UserQueryVisualization_Relationships {
}
interface UserQueryVisualization_Relationships {
}
interface UserQueryVisualization_Result extends UserQueryVisualization_Base, UserQueryVisualization_Relationships {
}
interface UserQueryVisualization_FormattedResult {
}
interface UserQueryVisualization_Select {
}
interface UserQueryVisualization_Expand {
}
interface UserQueryVisualization_Filter {
}
interface UserQueryVisualization_Create extends UserQueryVisualization {
}
interface UserQueryVisualization_Update extends UserQueryVisualization {
}
interface UserSearchFacet_Base extends WebEntity {
}
interface UserSearchFacet_Fixed extends WebEntity_Fixed {
  usersearchfacetid: string;
}
interface UserSearchFacet extends UserSearchFacet_Base, UserSearchFacet_Relationships {
}
interface UserSearchFacet_Relationships {
}
interface UserSearchFacet_Result extends UserSearchFacet_Base, UserSearchFacet_Relationships {
}
interface UserSearchFacet_FormattedResult {
}
interface UserSearchFacet_Select {
}
interface UserSearchFacet_Expand {
}
interface UserSearchFacet_Filter {
}
interface UserSearchFacet_Create extends UserSearchFacet {
}
interface UserSearchFacet_Update extends UserSearchFacet {
}
interface UserSettings_Base extends WebEntity {
}
interface UserSettings_Fixed extends WebEntity_Fixed {
  systemuserid: string;
}
interface UserSettings extends UserSettings_Base, UserSettings_Relationships {
}
interface UserSettings_Relationships {
}
interface UserSettings_Result extends UserSettings_Base, UserSettings_Relationships {
}
interface UserSettings_FormattedResult {
}
interface UserSettings_Select {
}
interface UserSettings_Expand {
}
interface UserSettings_Filter {
}
interface UserSettings_Create extends UserSettings {
}
interface UserSettings_Update extends UserSettings {
}
interface VirtualEntityMetadata_Base extends WebEntity {
}
interface VirtualEntityMetadata_Fixed extends WebEntity_Fixed {
  virtualentitymetadataid: string;
}
interface VirtualEntityMetadata extends VirtualEntityMetadata_Base, VirtualEntityMetadata_Relationships {
}
interface VirtualEntityMetadata_Relationships {
}
interface VirtualEntityMetadata_Result extends VirtualEntityMetadata_Base, VirtualEntityMetadata_Relationships {
}
interface VirtualEntityMetadata_FormattedResult {
}
interface VirtualEntityMetadata_Select {
}
interface VirtualEntityMetadata_Expand {
}
interface VirtualEntityMetadata_Filter {
}
interface VirtualEntityMetadata_Create extends VirtualEntityMetadata {
}
interface VirtualEntityMetadata_Update extends VirtualEntityMetadata {
}
interface WebResource_Base extends WebEntity {
}
interface WebResource_Fixed extends WebEntity_Fixed {
  webresourceid: string;
}
interface WebResource extends WebResource_Base, WebResource_Relationships {
}
interface WebResource_Relationships {
}
interface WebResource_Result extends WebResource_Base, WebResource_Relationships {
}
interface WebResource_FormattedResult {
}
interface WebResource_Select {
}
interface WebResource_Expand {
}
interface WebResource_Filter {
}
interface WebResource_Create extends WebResource {
}
interface WebResource_Update extends WebResource {
}
interface WebWizard_Base extends WebEntity {
}
interface WebWizard_Fixed extends WebEntity_Fixed {
  webwizardid: string;
}
interface WebWizard extends WebWizard_Base, WebWizard_Relationships {
}
interface WebWizard_Relationships {
}
interface WebWizard_Result extends WebWizard_Base, WebWizard_Relationships {
}
interface WebWizard_FormattedResult {
}
interface WebWizard_Select {
}
interface WebWizard_Expand {
}
interface WebWizard_Filter {
}
interface WebWizard_Create extends WebWizard {
}
interface WebWizard_Update extends WebWizard {
}
interface WizardAccessPrivilege_Base extends WebEntity {
}
interface WizardAccessPrivilege_Fixed extends WebEntity_Fixed {
  wizardaccessprivilegeid: string;
}
interface WizardAccessPrivilege extends WizardAccessPrivilege_Base, WizardAccessPrivilege_Relationships {
}
interface WizardAccessPrivilege_Relationships {
}
interface WizardAccessPrivilege_Result extends WizardAccessPrivilege_Base, WizardAccessPrivilege_Relationships {
}
interface WizardAccessPrivilege_FormattedResult {
}
interface WizardAccessPrivilege_Select {
}
interface WizardAccessPrivilege_Expand {
}
interface WizardAccessPrivilege_Filter {
}
interface WizardAccessPrivilege_Create extends WizardAccessPrivilege {
}
interface WizardAccessPrivilege_Update extends WizardAccessPrivilege {
}
interface WizardPage_Base extends WebEntity {
}
interface WizardPage_Fixed extends WebEntity_Fixed {
  wizardpageid: string;
}
interface WizardPage extends WizardPage_Base, WizardPage_Relationships {
}
interface WizardPage_Relationships {
}
interface WizardPage_Result extends WizardPage_Base, WizardPage_Relationships {
}
interface WizardPage_FormattedResult {
}
interface WizardPage_Select {
}
interface WizardPage_Expand {
}
interface WizardPage_Filter {
}
interface WizardPage_Create extends WizardPage {
}
interface WizardPage_Update extends WizardPage {
}
interface Workflow_Base extends WebEntity {
}
interface Workflow_Fixed extends WebEntity_Fixed {
  workflowid: string;
}
interface Workflow extends Workflow_Base, Workflow_Relationships {
}
interface Workflow_Relationships {
}
interface Workflow_Result extends Workflow_Base, Workflow_Relationships {
}
interface Workflow_FormattedResult {
}
interface Workflow_Select {
}
interface Workflow_Expand {
}
interface Workflow_Filter {
}
interface Workflow_Create extends Workflow {
}
interface Workflow_Update extends Workflow {
}
interface workflowbinary_Base extends WebEntity {
}
interface workflowbinary_Fixed extends WebEntity_Fixed {
  workflowbinaryid: string;
}
interface workflowbinary extends workflowbinary_Base, workflowbinary_Relationships {
}
interface workflowbinary_Relationships {
}
interface workflowbinary_Result extends workflowbinary_Base, workflowbinary_Relationships {
}
interface workflowbinary_FormattedResult {
}
interface workflowbinary_Select {
}
interface workflowbinary_Expand {
}
interface workflowbinary_Filter {
}
interface workflowbinary_Create extends workflowbinary {
}
interface workflowbinary_Update extends workflowbinary {
}
interface WorkflowDependency_Base extends WebEntity {
}
interface WorkflowDependency_Fixed extends WebEntity_Fixed {
  workflowdependencyid: string;
}
interface WorkflowDependency extends WorkflowDependency_Base, WorkflowDependency_Relationships {
}
interface WorkflowDependency_Relationships {
}
interface WorkflowDependency_Result extends WorkflowDependency_Base, WorkflowDependency_Relationships {
}
interface WorkflowDependency_FormattedResult {
}
interface WorkflowDependency_Select {
}
interface WorkflowDependency_Expand {
}
interface WorkflowDependency_Filter {
}
interface WorkflowDependency_Create extends WorkflowDependency {
}
interface WorkflowDependency_Update extends WorkflowDependency {
}
interface WorkflowLog_Base extends WebEntity {
}
interface WorkflowLog_Fixed extends WebEntity_Fixed {
  workflowlogid: string;
}
interface WorkflowLog extends WorkflowLog_Base, WorkflowLog_Relationships {
}
interface WorkflowLog_Relationships {
}
interface WorkflowLog_Result extends WorkflowLog_Base, WorkflowLog_Relationships {
}
interface WorkflowLog_FormattedResult {
}
interface WorkflowLog_Select {
}
interface WorkflowLog_Expand {
}
interface WorkflowLog_Filter {
}
interface WorkflowLog_Create extends WorkflowLog {
}
interface WorkflowLog_Update extends WorkflowLog {
}
interface WorkflowWaitSubscription_Base extends WebEntity {
}
interface WorkflowWaitSubscription_Fixed extends WebEntity_Fixed {
  workflowwaitsubscriptionid: string;
}
interface WorkflowWaitSubscription extends WorkflowWaitSubscription_Base, WorkflowWaitSubscription_Relationships {
}
interface WorkflowWaitSubscription_Relationships {
}
interface WorkflowWaitSubscription_Result extends WorkflowWaitSubscription_Base, WorkflowWaitSubscription_Relationships {
}
interface WorkflowWaitSubscription_FormattedResult {
}
interface WorkflowWaitSubscription_Select {
}
interface WorkflowWaitSubscription_Expand {
}
interface WorkflowWaitSubscription_Filter {
}
interface WorkflowWaitSubscription_Create extends WorkflowWaitSubscription {
}
interface WorkflowWaitSubscription_Update extends WorkflowWaitSubscription {
}
