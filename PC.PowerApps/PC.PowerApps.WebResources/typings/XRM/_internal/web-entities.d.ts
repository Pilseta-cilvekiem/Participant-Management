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
