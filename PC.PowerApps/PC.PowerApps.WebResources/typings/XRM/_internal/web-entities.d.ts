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
