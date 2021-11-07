interface WebResource_Base extends WebEntity {
  canbedeleted?: any | null;
  componentstate?: componentstate | null;
  content?: string | null;
  contentjson?: string | null;
  createdon?: Date | null;
  dependencyxml?: string | null;
  description?: string | null;
  displayname?: string | null;
  introducedversion?: string | null;
  isavailableformobileoffline?: boolean | null;
  iscustomizable?: any | null;
  isenabledformobileclient?: boolean | null;
  ishidden?: any | null;
  ismanaged?: boolean | null;
  languagecode?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  overwritetime?: Date | null;
  silverlightversion?: string | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
  webresourceid?: string | null;
  webresourceidunique?: string | null;
  webresourcetype?: webresource_webresourcetype | null;
}
interface WebResource_Relationships {
}
interface WebResource extends WebResource_Base, WebResource_Relationships {
}
interface WebResource_Create extends WebResource {
}
interface WebResource_Update extends WebResource {
}
interface WebResource_Select {
  canbedeleted: WebAttribute<WebResource_Select, { canbedeleted: any | null }, {  }>;
  componentstate: WebAttribute<WebResource_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  content: WebAttribute<WebResource_Select, { content: string | null }, {  }>;
  contentjson: WebAttribute<WebResource_Select, { contentjson: string | null }, {  }>;
  createdby_guid: WebAttribute<WebResource_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<WebResource_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<WebResource_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  dependencyxml: WebAttribute<WebResource_Select, { dependencyxml: string | null }, {  }>;
  description: WebAttribute<WebResource_Select, { description: string | null }, {  }>;
  displayname: WebAttribute<WebResource_Select, { displayname: string | null }, {  }>;
  introducedversion: WebAttribute<WebResource_Select, { introducedversion: string | null }, {  }>;
  isavailableformobileoffline: WebAttribute<WebResource_Select, { isavailableformobileoffline: boolean | null }, {  }>;
  iscustomizable: WebAttribute<WebResource_Select, { iscustomizable: any | null }, {  }>;
  isenabledformobileclient: WebAttribute<WebResource_Select, { isenabledformobileclient: boolean | null }, {  }>;
  ishidden: WebAttribute<WebResource_Select, { ishidden: any | null }, {  }>;
  ismanaged: WebAttribute<WebResource_Select, { ismanaged: boolean | null }, {  }>;
  languagecode: WebAttribute<WebResource_Select, { languagecode: number | null }, {  }>;
  modifiedby_guid: WebAttribute<WebResource_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<WebResource_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<WebResource_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<WebResource_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<WebResource_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<WebResource_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  silverlightversion: WebAttribute<WebResource_Select, { silverlightversion: string | null }, {  }>;
  solutionid: WebAttribute<WebResource_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<WebResource_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<WebResource_Select, { versionnumber: number | null }, {  }>;
  webresourceid: WebAttribute<WebResource_Select, { webresourceid: string | null }, {  }>;
  webresourceidunique: WebAttribute<WebResource_Select, { webresourceidunique: string | null }, {  }>;
  webresourcetype: WebAttribute<WebResource_Select, { webresourcetype: webresource_webresourcetype | null }, { webresourcetype_formatted?: string }>;
}
interface WebResource_Filter {
  canbedeleted: any;
  componentstate: componentstate;
  content: string;
  contentjson: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  dependencyxml: string;
  description: string;
  displayname: string;
  introducedversion: string;
  isavailableformobileoffline: boolean;
  iscustomizable: any;
  isenabledformobileclient: boolean;
  ishidden: any;
  ismanaged: boolean;
  languagecode: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  silverlightversion: string;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
  webresourceid: XQW.Guid;
  webresourceidunique: XQW.Guid;
  webresourcetype: webresource_webresourcetype;
}
interface WebResource_Expand {
}
interface WebResource_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overwritetime_formatted?: string;
  webresourcetype_formatted?: string;
}
interface WebResource_Result extends WebResource_Base, WebResource_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface WebResource_RelatedOne {
}
interface WebResource_RelatedMany {
}
interface WebEntitiesRetrieve {
  webresourceset: WebMappingRetrieve<WebResource_Select,WebResource_Expand,WebResource_Filter,WebResource_Fixed,WebResource_Result,WebResource_FormattedResult>;
}
interface WebEntitiesRelated {
  webresourceset: WebMappingRelated<WebResource_RelatedOne,WebResource_RelatedMany>;
}
interface WebEntitiesCUDA {
  webresourceset: WebMappingCUDA<WebResource_Create,WebResource_Update,WebResource_Select>;
}
