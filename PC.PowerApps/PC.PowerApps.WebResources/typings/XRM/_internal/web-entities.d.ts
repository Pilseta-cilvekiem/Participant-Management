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
