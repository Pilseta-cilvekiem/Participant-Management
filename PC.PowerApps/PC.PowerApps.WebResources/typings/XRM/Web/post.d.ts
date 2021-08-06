interface Post_Base extends WebEntity {
  createdon?: Date | null;
  largetext?: string | null;
  modifiedon?: Date | null;
  postid?: string | null;
  posttoyammer?: boolean | null;
  source?: post_source | null;
  text?: string | null;
  timezoneruleversionnumber?: number | null;
  type?: post_type | null;
  utcconversiontimezonecode?: number | null;
  yammerpoststate?: number | null;
  yammerretrycount?: number | null;
}
interface Post_Relationships {
  Post_Comments?: PostComment_Result[] | null;
  Post_Likes?: PostLike_Result[] | null;
  postRole_Post?: PostRole_Result[] | null;
  post_AsyncOperations?: AsyncOperation_Result[] | null;
  post_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  post_activity_file_attachment?: activityfileattachment_Result[] | null;
}
interface Post extends Post_Base, Post_Relationships {
}
interface Post_Create extends Post {
}
interface Post_Update extends Post {
}
interface Post_Select {
  createdby_guid: WebAttribute<Post_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<Post_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<Post_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  largetext: WebAttribute<Post_Select, { largetext: string | null }, {  }>;
  modifiedby_guid: WebAttribute<Post_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<Post_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<Post_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<Post_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  postid: WebAttribute<Post_Select, { postid: string | null }, {  }>;
  postregardingid_guid: WebAttribute<Post_Select, { postregardingid_guid: string | null }, { postregardingid_formatted?: string }>;
  posttoyammer: WebAttribute<Post_Select, { posttoyammer: boolean | null }, {  }>;
  regardingobjectid_guid: WebAttribute<Post_Select, { regardingobjectid_guid: string | null }, { regardingobjectid_formatted?: string }>;
  regardingobjectownerid_guid: WebAttribute<Post_Select, { regardingobjectownerid_guid: string | null }, { regardingobjectownerid_formatted?: string }>;
  regardingobjectowningbusinessunit_guid: WebAttribute<Post_Select, { regardingobjectowningbusinessunit_guid: string | null }, { regardingobjectowningbusinessunit_formatted?: string }>;
  source: WebAttribute<Post_Select, { source: post_source | null }, { source_formatted?: string }>;
  text: WebAttribute<Post_Select, { text: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<Post_Select, { timezoneruleversionnumber: number | null }, {  }>;
  type: WebAttribute<Post_Select, { type: post_type | null }, { type_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<Post_Select, { utcconversiontimezonecode: number | null }, {  }>;
  yammerpoststate: WebAttribute<Post_Select, { yammerpoststate: number | null }, {  }>;
  yammerretrycount: WebAttribute<Post_Select, { yammerretrycount: number | null }, {  }>;
}
interface Post_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  largetext: string;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  postid: XQW.Guid;
  postregardingid_guid: XQW.Guid;
  posttoyammer: boolean;
  regardingobjectid_guid: XQW.Guid;
  regardingobjectownerid_guid: XQW.Guid;
  regardingobjectowningbusinessunit_guid: XQW.Guid;
  source: post_source;
  text: string;
  timezoneruleversionnumber: number;
  type: post_type;
  utcconversiontimezonecode: number;
  yammerpoststate: number;
  yammerretrycount: number;
}
interface Post_Expand {
  Post_Comments: WebExpand<Post_Expand, PostComment_Select, PostComment_Filter, { Post_Comments: PostComment_Result[] }>;
  Post_Likes: WebExpand<Post_Expand, PostLike_Select, PostLike_Filter, { Post_Likes: PostLike_Result[] }>;
  createdby: WebExpand<Post_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<Post_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<Post_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<Post_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<Post_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  postRole_Post: WebExpand<Post_Expand, PostRole_Select, PostRole_Filter, { postRole_Post: PostRole_Result[] }>;
  post_AsyncOperations: WebExpand<Post_Expand, AsyncOperation_Select, AsyncOperation_Filter, { post_AsyncOperations: AsyncOperation_Result[] }>;
  post_BulkDeleteFailures: WebExpand<Post_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { post_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  post_activity_file_attachment: WebExpand<Post_Expand, activityfileattachment_Select, activityfileattachment_Filter, { post_activity_file_attachment: activityfileattachment_Result[] }>;
  postregardingid: WebExpand<Post_Expand, PostRegarding_Select, PostRegarding_Filter, { postregardingid: PostRegarding_Result }>;
}
interface Post_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  postregardingid_formatted?: string;
  regardingobjectid_formatted?: string;
  regardingobjectownerid_formatted?: string;
  regardingobjectowningbusinessunit_formatted?: string;
  source_formatted?: string;
  type_formatted?: string;
}
interface Post_Result extends Post_Base, Post_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  postregardingid_guid: string | null;
  regardingobjectid_guid: string | null;
  regardingobjectownerid_guid: string | null;
  regardingobjectowningbusinessunit_guid: string | null;
}
interface Post_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  postregardingid: WebMappingRetrieve<PostRegarding_Select,PostRegarding_Expand,PostRegarding_Filter,PostRegarding_Fixed,PostRegarding_Result,PostRegarding_FormattedResult>;
}
interface Post_RelatedMany {
  Post_Comments: WebMappingRetrieve<PostComment_Select,PostComment_Expand,PostComment_Filter,PostComment_Fixed,PostComment_Result,PostComment_FormattedResult>;
  Post_Likes: WebMappingRetrieve<PostLike_Select,PostLike_Expand,PostLike_Filter,PostLike_Fixed,PostLike_Result,PostLike_FormattedResult>;
  postRole_Post: WebMappingRetrieve<PostRole_Select,PostRole_Expand,PostRole_Filter,PostRole_Fixed,PostRole_Result,PostRole_FormattedResult>;
  post_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  post_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  post_activity_file_attachment: WebMappingRetrieve<activityfileattachment_Select,activityfileattachment_Expand,activityfileattachment_Filter,activityfileattachment_Fixed,activityfileattachment_Result,activityfileattachment_FormattedResult>;
}
interface WebEntitiesRetrieve {
  posts: WebMappingRetrieve<Post_Select,Post_Expand,Post_Filter,Post_Fixed,Post_Result,Post_FormattedResult>;
}
interface WebEntitiesRelated {
  posts: WebMappingRelated<Post_RelatedOne,Post_RelatedMany>;
}
interface WebEntitiesCUDA {
  posts: WebMappingCUDA<Post_Create,Post_Update,Post_Select>;
}
