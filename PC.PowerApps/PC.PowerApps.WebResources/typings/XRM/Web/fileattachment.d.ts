interface FileAttachment_Base extends WebEntity {
  body?: string | null;
  createdon?: Date | null;
  fileattachmentid?: string | null;
  filename?: string | null;
  filepointer?: string | null;
  filesizeinbytes?: number | null;
  iscommitted?: boolean | null;
  mimetype?: string | null;
  objecttypecode?: string | null;
  prefix?: string | null;
  regardingfieldname?: string | null;
  storagepointer?: string | null;
  versionnumber?: number | null;
}
interface FileAttachment_Relationships {
  FileAttachment_AsyncOperation_DataBlobId?: AsyncOperation_Result[] | null;
  FileAttachment_CanvasApp_Assets?: CanvasApp_Result[] | null;
  FileAttachment_CanvasApp_BackgroundImage?: CanvasApp_Result[] | null;
  FileAttachment_CanvasApp_Document?: CanvasApp_Result[] | null;
  FileAttachment_CanvasApp_LargeIcon?: CanvasApp_Result[] | null;
  FileAttachment_CanvasApp_MediumIcon?: CanvasApp_Result[] | null;
  FileAttachment_CanvasApp_SmallIcon?: CanvasApp_Result[] | null;
  FileAttachment_CanvasApp_TeamsIcon?: CanvasApp_Result[] | null;
  FileAttachment_CanvasApp_WideIcon?: CanvasApp_Result[] | null;
  FileAttachment_ExportSolutionUpload_SolutionFile?: ExportSolutionUpload_Result[] | null;
  FileAttachment_ImageDescriptor_FileId?: ImageDescriptor_Result[] | null;
  FileAttachment_Mailbox_ExchangeSyncStateXmlFileRef?: Mailbox_Result[] | null;
  FileAttachment_RibbonClientMetadata_RibbonJsonFileRef?: RibbonClientMetadata_Result[] | null;
  FileAttachment_Solution?: Solution_Result | null;
  FileAttachment_StageSolutionUpload_SolutionFile?: StageSolutionUpload_Result[] | null;
  FileAttachment_SyncErrors?: SyncError_Result[] | null;
  FileAttachment_WebResource_ContentFileRef?: WebResource_Result[] | null;
  FileAttachment_WebResource_ContentJsonFileRef?: WebResource_Result[] | null;
  FileAttachment_activityfileattachment_FileContent?: activityfileattachment_Result[] | null;
  FileAttachment_cascadegrantrevokeaccessrecordstracker_RecordsAttachment?: cascadegrantrevokeaccessrecordstracker_Result[] | null;
  FileAttachment_flowsession_AdditionalContext?: flowsession_Result[] | null;
  FileAttachment_flowsession_Outputs?: flowsession_Result[] | null;
  FileAttachment_msdyn_AIBFile_msdyn_File?: msdyn_AIBFile_Result[] | null;
  FileAttachment_msdyn_AIConfiguration_msdyn_Model?: msdyn_AIConfiguration_Result[] | null;
  FileAttachment_msdyn_knowledgearticleimage_msdyn_BlobFile?: msdyn_knowledgearticleimage_Result[] | null;
  FileAttachment_pluginpackage_Contents?: pluginpackage_Result[] | null;
  FileAttachment_revokeinheritedaccessrecordstracker_RecordsAttachment?: revokeinheritedaccessrecordstracker_Result[] | null;
  FileAttachment_workflowbinary_Data?: workflowbinary_Result[] | null;
  FileAttachment_workflowlog_Inputs?: WorkflowLog_Result[] | null;
  FileAttachment_workflowlog_Outputs?: WorkflowLog_Result[] | null;
  objectid_activityfileattachment?: activityfileattachment_Result | null;
  objectid_asyncoperation?: AsyncOperation_Result | null;
  objectid_canvasapp?: CanvasApp_Result | null;
  objectid_cascadegrantrevokeaccessrecordstracker?: cascadegrantrevokeaccessrecordstracker_Result | null;
  objectid_exportsolutionupload?: ExportSolutionUpload_Result | null;
  objectid_flowsession?: flowsession_Result | null;
  objectid_imagedescriptor?: ImageDescriptor_Result | null;
  objectid_mailbox?: Mailbox_Result | null;
  objectid_msdyn_aibfile?: msdyn_AIBFile_Result | null;
  objectid_msdyn_aiconfiguration?: msdyn_AIConfiguration_Result | null;
  objectid_msdyn_knowledgearticleimage?: msdyn_knowledgearticleimage_Result | null;
  objectid_pluginpackage?: pluginpackage_Result | null;
  objectid_revokeinheritedaccessrecordstracker?: revokeinheritedaccessrecordstracker_Result | null;
  objectid_ribbonclientmetadata?: RibbonClientMetadata_Result | null;
  objectid_stagesolutionupload?: StageSolutionUpload_Result | null;
  objectid_webresource?: WebResource_Result | null;
  objectid_workflowbinary?: workflowbinary_Result | null;
  objectid_workflowlog?: WorkflowLog_Result | null;
  solution_fileid?: Solution_Result[] | null;
  userentityinstancedata_fileattachment?: UserEntityInstanceData_Result[] | null;
}
interface FileAttachment extends FileAttachment_Base, FileAttachment_Relationships {
  FileAttachment_Solution_bind$solutions?: string | null;
  objectid_activityfileattachment_bind$activityfileattachments?: string | null;
  objectid_asyncoperation_bind$asyncoperations?: string | null;
  objectid_canvasapp_bind$canvasapps?: string | null;
  objectid_cascadegrantrevokeaccessrecordstracker_bind$cascadegrantrevokeaccessrecordstrackers?: string | null;
  objectid_exportsolutionupload_bind$exportsolutionuploads?: string | null;
  objectid_flowsession_bind$flowsessions?: string | null;
  objectid_imagedescriptor_bind$imagedescriptors?: string | null;
  objectid_mailbox_bind$mailboxes?: string | null;
  objectid_msdyn_aibfile_bind$msdyn_aibfiles?: string | null;
  objectid_msdyn_aiconfiguration_bind$msdyn_aiconfigurations?: string | null;
  objectid_msdyn_knowledgearticleimage_bind$msdyn_knowledgearticleimages?: string | null;
  objectid_pluginpackage_bind$pluginpackages?: string | null;
  objectid_revokeinheritedaccessrecordstracker_bind$revokeinheritedaccessrecordstrackers?: string | null;
  objectid_ribbonclientmetadata_bind$ribbonclientmetadata?: string | null;
  objectid_stagesolutionupload_bind$stagesolutionuploads?: string | null;
  objectid_webresource_bind$webresourceset?: string | null;
  objectid_workflowbinary_bind$workflowbinaries?: string | null;
  objectid_workflowlog_bind$workflowlogs?: string | null;
}
interface FileAttachment_Create extends FileAttachment {
}
interface FileAttachment_Update extends FileAttachment {
}
interface FileAttachment_Select {
  body: WebAttribute<FileAttachment_Select, { body: string | null }, {  }>;
  createdon: WebAttribute<FileAttachment_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  fileattachmentid: WebAttribute<FileAttachment_Select, { fileattachmentid: string | null }, {  }>;
  filename: WebAttribute<FileAttachment_Select, { filename: string | null }, {  }>;
  filepointer: WebAttribute<FileAttachment_Select, { filepointer: string | null }, {  }>;
  filesizeinbytes: WebAttribute<FileAttachment_Select, { filesizeinbytes: number | null }, {  }>;
  iscommitted: WebAttribute<FileAttachment_Select, { iscommitted: boolean | null }, {  }>;
  mimetype: WebAttribute<FileAttachment_Select, { mimetype: string | null }, {  }>;
  objectid_guid: WebAttribute<FileAttachment_Select, { objectid_guid: string | null }, { objectid_formatted?: string }>;
  objecttypecode: WebAttribute<FileAttachment_Select, { objecttypecode: string | null }, {  }>;
  prefix: WebAttribute<FileAttachment_Select, { prefix: string | null }, {  }>;
  regardingfieldname: WebAttribute<FileAttachment_Select, { regardingfieldname: string | null }, {  }>;
  storagepointer: WebAttribute<FileAttachment_Select, { storagepointer: string | null }, {  }>;
  versionnumber: WebAttribute<FileAttachment_Select, { versionnumber: number | null }, {  }>;
}
interface FileAttachment_Filter {
  body: string;
  createdon: Date;
  fileattachmentid: XQW.Guid;
  filename: string;
  filepointer: string;
  filesizeinbytes: number;
  iscommitted: boolean;
  mimetype: string;
  objectid_guid: XQW.Guid;
  objecttypecode: string;
  prefix: string;
  regardingfieldname: string;
  storagepointer: string;
  versionnumber: number;
}
interface FileAttachment_Expand {
  FileAttachment_AsyncOperation_DataBlobId: WebExpand<FileAttachment_Expand, AsyncOperation_Select, AsyncOperation_Filter, { FileAttachment_AsyncOperation_DataBlobId: AsyncOperation_Result[] }>;
  FileAttachment_CanvasApp_Assets: WebExpand<FileAttachment_Expand, CanvasApp_Select, CanvasApp_Filter, { FileAttachment_CanvasApp_Assets: CanvasApp_Result[] }>;
  FileAttachment_CanvasApp_BackgroundImage: WebExpand<FileAttachment_Expand, CanvasApp_Select, CanvasApp_Filter, { FileAttachment_CanvasApp_BackgroundImage: CanvasApp_Result[] }>;
  FileAttachment_CanvasApp_Document: WebExpand<FileAttachment_Expand, CanvasApp_Select, CanvasApp_Filter, { FileAttachment_CanvasApp_Document: CanvasApp_Result[] }>;
  FileAttachment_CanvasApp_LargeIcon: WebExpand<FileAttachment_Expand, CanvasApp_Select, CanvasApp_Filter, { FileAttachment_CanvasApp_LargeIcon: CanvasApp_Result[] }>;
  FileAttachment_CanvasApp_MediumIcon: WebExpand<FileAttachment_Expand, CanvasApp_Select, CanvasApp_Filter, { FileAttachment_CanvasApp_MediumIcon: CanvasApp_Result[] }>;
  FileAttachment_CanvasApp_SmallIcon: WebExpand<FileAttachment_Expand, CanvasApp_Select, CanvasApp_Filter, { FileAttachment_CanvasApp_SmallIcon: CanvasApp_Result[] }>;
  FileAttachment_CanvasApp_TeamsIcon: WebExpand<FileAttachment_Expand, CanvasApp_Select, CanvasApp_Filter, { FileAttachment_CanvasApp_TeamsIcon: CanvasApp_Result[] }>;
  FileAttachment_CanvasApp_WideIcon: WebExpand<FileAttachment_Expand, CanvasApp_Select, CanvasApp_Filter, { FileAttachment_CanvasApp_WideIcon: CanvasApp_Result[] }>;
  FileAttachment_ExportSolutionUpload_SolutionFile: WebExpand<FileAttachment_Expand, ExportSolutionUpload_Select, ExportSolutionUpload_Filter, { FileAttachment_ExportSolutionUpload_SolutionFile: ExportSolutionUpload_Result[] }>;
  FileAttachment_ImageDescriptor_FileId: WebExpand<FileAttachment_Expand, ImageDescriptor_Select, ImageDescriptor_Filter, { FileAttachment_ImageDescriptor_FileId: ImageDescriptor_Result[] }>;
  FileAttachment_Mailbox_ExchangeSyncStateXmlFileRef: WebExpand<FileAttachment_Expand, Mailbox_Select, Mailbox_Filter, { FileAttachment_Mailbox_ExchangeSyncStateXmlFileRef: Mailbox_Result[] }>;
  FileAttachment_RibbonClientMetadata_RibbonJsonFileRef: WebExpand<FileAttachment_Expand, RibbonClientMetadata_Select, RibbonClientMetadata_Filter, { FileAttachment_RibbonClientMetadata_RibbonJsonFileRef: RibbonClientMetadata_Result[] }>;
  FileAttachment_Solution: WebExpand<FileAttachment_Expand, Solution_Select, Solution_Filter, { FileAttachment_Solution: Solution_Result }>;
  FileAttachment_StageSolutionUpload_SolutionFile: WebExpand<FileAttachment_Expand, StageSolutionUpload_Select, StageSolutionUpload_Filter, { FileAttachment_StageSolutionUpload_SolutionFile: StageSolutionUpload_Result[] }>;
  FileAttachment_SyncErrors: WebExpand<FileAttachment_Expand, SyncError_Select, SyncError_Filter, { FileAttachment_SyncErrors: SyncError_Result[] }>;
  FileAttachment_WebResource_ContentFileRef: WebExpand<FileAttachment_Expand, WebResource_Select, WebResource_Filter, { FileAttachment_WebResource_ContentFileRef: WebResource_Result[] }>;
  FileAttachment_WebResource_ContentJsonFileRef: WebExpand<FileAttachment_Expand, WebResource_Select, WebResource_Filter, { FileAttachment_WebResource_ContentJsonFileRef: WebResource_Result[] }>;
  FileAttachment_activityfileattachment_FileContent: WebExpand<FileAttachment_Expand, activityfileattachment_Select, activityfileattachment_Filter, { FileAttachment_activityfileattachment_FileContent: activityfileattachment_Result[] }>;
  FileAttachment_cascadegrantrevokeaccessrecordstracker_RecordsAttachment: WebExpand<FileAttachment_Expand, cascadegrantrevokeaccessrecordstracker_Select, cascadegrantrevokeaccessrecordstracker_Filter, { FileAttachment_cascadegrantrevokeaccessrecordstracker_RecordsAttachment: cascadegrantrevokeaccessrecordstracker_Result[] }>;
  FileAttachment_flowsession_AdditionalContext: WebExpand<FileAttachment_Expand, flowsession_Select, flowsession_Filter, { FileAttachment_flowsession_AdditionalContext: flowsession_Result[] }>;
  FileAttachment_flowsession_Outputs: WebExpand<FileAttachment_Expand, flowsession_Select, flowsession_Filter, { FileAttachment_flowsession_Outputs: flowsession_Result[] }>;
  FileAttachment_msdyn_AIBFile_msdyn_File: WebExpand<FileAttachment_Expand, msdyn_AIBFile_Select, msdyn_AIBFile_Filter, { FileAttachment_msdyn_AIBFile_msdyn_File: msdyn_AIBFile_Result[] }>;
  FileAttachment_msdyn_AIConfiguration_msdyn_Model: WebExpand<FileAttachment_Expand, msdyn_AIConfiguration_Select, msdyn_AIConfiguration_Filter, { FileAttachment_msdyn_AIConfiguration_msdyn_Model: msdyn_AIConfiguration_Result[] }>;
  FileAttachment_msdyn_knowledgearticleimage_msdyn_BlobFile: WebExpand<FileAttachment_Expand, msdyn_knowledgearticleimage_Select, msdyn_knowledgearticleimage_Filter, { FileAttachment_msdyn_knowledgearticleimage_msdyn_BlobFile: msdyn_knowledgearticleimage_Result[] }>;
  FileAttachment_pluginpackage_Contents: WebExpand<FileAttachment_Expand, pluginpackage_Select, pluginpackage_Filter, { FileAttachment_pluginpackage_Contents: pluginpackage_Result[] }>;
  FileAttachment_revokeinheritedaccessrecordstracker_RecordsAttachment: WebExpand<FileAttachment_Expand, revokeinheritedaccessrecordstracker_Select, revokeinheritedaccessrecordstracker_Filter, { FileAttachment_revokeinheritedaccessrecordstracker_RecordsAttachment: revokeinheritedaccessrecordstracker_Result[] }>;
  FileAttachment_workflowbinary_Data: WebExpand<FileAttachment_Expand, workflowbinary_Select, workflowbinary_Filter, { FileAttachment_workflowbinary_Data: workflowbinary_Result[] }>;
  FileAttachment_workflowlog_Inputs: WebExpand<FileAttachment_Expand, WorkflowLog_Select, WorkflowLog_Filter, { FileAttachment_workflowlog_Inputs: WorkflowLog_Result[] }>;
  FileAttachment_workflowlog_Outputs: WebExpand<FileAttachment_Expand, WorkflowLog_Select, WorkflowLog_Filter, { FileAttachment_workflowlog_Outputs: WorkflowLog_Result[] }>;
  objectid_activityfileattachment: WebExpand<FileAttachment_Expand, activityfileattachment_Select, activityfileattachment_Filter, { objectid_activityfileattachment: activityfileattachment_Result }>;
  objectid_asyncoperation: WebExpand<FileAttachment_Expand, AsyncOperation_Select, AsyncOperation_Filter, { objectid_asyncoperation: AsyncOperation_Result }>;
  objectid_canvasapp: WebExpand<FileAttachment_Expand, CanvasApp_Select, CanvasApp_Filter, { objectid_canvasapp: CanvasApp_Result }>;
  objectid_cascadegrantrevokeaccessrecordstracker: WebExpand<FileAttachment_Expand, cascadegrantrevokeaccessrecordstracker_Select, cascadegrantrevokeaccessrecordstracker_Filter, { objectid_cascadegrantrevokeaccessrecordstracker: cascadegrantrevokeaccessrecordstracker_Result }>;
  objectid_exportsolutionupload: WebExpand<FileAttachment_Expand, ExportSolutionUpload_Select, ExportSolutionUpload_Filter, { objectid_exportsolutionupload: ExportSolutionUpload_Result }>;
  objectid_flowsession: WebExpand<FileAttachment_Expand, flowsession_Select, flowsession_Filter, { objectid_flowsession: flowsession_Result }>;
  objectid_imagedescriptor: WebExpand<FileAttachment_Expand, ImageDescriptor_Select, ImageDescriptor_Filter, { objectid_imagedescriptor: ImageDescriptor_Result }>;
  objectid_mailbox: WebExpand<FileAttachment_Expand, Mailbox_Select, Mailbox_Filter, { objectid_mailbox: Mailbox_Result }>;
  objectid_msdyn_aibfile: WebExpand<FileAttachment_Expand, msdyn_AIBFile_Select, msdyn_AIBFile_Filter, { objectid_msdyn_aibfile: msdyn_AIBFile_Result }>;
  objectid_msdyn_aiconfiguration: WebExpand<FileAttachment_Expand, msdyn_AIConfiguration_Select, msdyn_AIConfiguration_Filter, { objectid_msdyn_aiconfiguration: msdyn_AIConfiguration_Result }>;
  objectid_msdyn_knowledgearticleimage: WebExpand<FileAttachment_Expand, msdyn_knowledgearticleimage_Select, msdyn_knowledgearticleimage_Filter, { objectid_msdyn_knowledgearticleimage: msdyn_knowledgearticleimage_Result }>;
  objectid_pluginpackage: WebExpand<FileAttachment_Expand, pluginpackage_Select, pluginpackage_Filter, { objectid_pluginpackage: pluginpackage_Result }>;
  objectid_revokeinheritedaccessrecordstracker: WebExpand<FileAttachment_Expand, revokeinheritedaccessrecordstracker_Select, revokeinheritedaccessrecordstracker_Filter, { objectid_revokeinheritedaccessrecordstracker: revokeinheritedaccessrecordstracker_Result }>;
  objectid_ribbonclientmetadata: WebExpand<FileAttachment_Expand, RibbonClientMetadata_Select, RibbonClientMetadata_Filter, { objectid_ribbonclientmetadata: RibbonClientMetadata_Result }>;
  objectid_stagesolutionupload: WebExpand<FileAttachment_Expand, StageSolutionUpload_Select, StageSolutionUpload_Filter, { objectid_stagesolutionupload: StageSolutionUpload_Result }>;
  objectid_webresource: WebExpand<FileAttachment_Expand, WebResource_Select, WebResource_Filter, { objectid_webresource: WebResource_Result }>;
  objectid_workflowbinary: WebExpand<FileAttachment_Expand, workflowbinary_Select, workflowbinary_Filter, { objectid_workflowbinary: workflowbinary_Result }>;
  objectid_workflowlog: WebExpand<FileAttachment_Expand, WorkflowLog_Select, WorkflowLog_Filter, { objectid_workflowlog: WorkflowLog_Result }>;
  solution_fileid: WebExpand<FileAttachment_Expand, Solution_Select, Solution_Filter, { solution_fileid: Solution_Result[] }>;
  userentityinstancedata_fileattachment: WebExpand<FileAttachment_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_fileattachment: UserEntityInstanceData_Result[] }>;
}
interface FileAttachment_FormattedResult {
  createdon_formatted?: string;
  objectid_formatted?: string;
}
interface FileAttachment_Result extends FileAttachment_Base, FileAttachment_Relationships {
  "@odata.etag": string;
  objectid_guid: string | null;
}
interface FileAttachment_RelatedOne {
  FileAttachment_Solution: WebMappingRetrieve<Solution_Select,Solution_Expand,Solution_Filter,Solution_Fixed,Solution_Result,Solution_FormattedResult>;
  objectid_activityfileattachment: WebMappingRetrieve<activityfileattachment_Select,activityfileattachment_Expand,activityfileattachment_Filter,activityfileattachment_Fixed,activityfileattachment_Result,activityfileattachment_FormattedResult>;
  objectid_asyncoperation: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  objectid_canvasapp: WebMappingRetrieve<CanvasApp_Select,CanvasApp_Expand,CanvasApp_Filter,CanvasApp_Fixed,CanvasApp_Result,CanvasApp_FormattedResult>;
  objectid_cascadegrantrevokeaccessrecordstracker: WebMappingRetrieve<cascadegrantrevokeaccessrecordstracker_Select,cascadegrantrevokeaccessrecordstracker_Expand,cascadegrantrevokeaccessrecordstracker_Filter,cascadegrantrevokeaccessrecordstracker_Fixed,cascadegrantrevokeaccessrecordstracker_Result,cascadegrantrevokeaccessrecordstracker_FormattedResult>;
  objectid_exportsolutionupload: WebMappingRetrieve<ExportSolutionUpload_Select,ExportSolutionUpload_Expand,ExportSolutionUpload_Filter,ExportSolutionUpload_Fixed,ExportSolutionUpload_Result,ExportSolutionUpload_FormattedResult>;
  objectid_flowsession: WebMappingRetrieve<flowsession_Select,flowsession_Expand,flowsession_Filter,flowsession_Fixed,flowsession_Result,flowsession_FormattedResult>;
  objectid_imagedescriptor: WebMappingRetrieve<ImageDescriptor_Select,ImageDescriptor_Expand,ImageDescriptor_Filter,ImageDescriptor_Fixed,ImageDescriptor_Result,ImageDescriptor_FormattedResult>;
  objectid_mailbox: WebMappingRetrieve<Mailbox_Select,Mailbox_Expand,Mailbox_Filter,Mailbox_Fixed,Mailbox_Result,Mailbox_FormattedResult>;
  objectid_msdyn_aibfile: WebMappingRetrieve<msdyn_AIBFile_Select,msdyn_AIBFile_Expand,msdyn_AIBFile_Filter,msdyn_AIBFile_Fixed,msdyn_AIBFile_Result,msdyn_AIBFile_FormattedResult>;
  objectid_msdyn_aiconfiguration: WebMappingRetrieve<msdyn_AIConfiguration_Select,msdyn_AIConfiguration_Expand,msdyn_AIConfiguration_Filter,msdyn_AIConfiguration_Fixed,msdyn_AIConfiguration_Result,msdyn_AIConfiguration_FormattedResult>;
  objectid_msdyn_knowledgearticleimage: WebMappingRetrieve<msdyn_knowledgearticleimage_Select,msdyn_knowledgearticleimage_Expand,msdyn_knowledgearticleimage_Filter,msdyn_knowledgearticleimage_Fixed,msdyn_knowledgearticleimage_Result,msdyn_knowledgearticleimage_FormattedResult>;
  objectid_pluginpackage: WebMappingRetrieve<pluginpackage_Select,pluginpackage_Expand,pluginpackage_Filter,pluginpackage_Fixed,pluginpackage_Result,pluginpackage_FormattedResult>;
  objectid_revokeinheritedaccessrecordstracker: WebMappingRetrieve<revokeinheritedaccessrecordstracker_Select,revokeinheritedaccessrecordstracker_Expand,revokeinheritedaccessrecordstracker_Filter,revokeinheritedaccessrecordstracker_Fixed,revokeinheritedaccessrecordstracker_Result,revokeinheritedaccessrecordstracker_FormattedResult>;
  objectid_ribbonclientmetadata: WebMappingRetrieve<RibbonClientMetadata_Select,RibbonClientMetadata_Expand,RibbonClientMetadata_Filter,RibbonClientMetadata_Fixed,RibbonClientMetadata_Result,RibbonClientMetadata_FormattedResult>;
  objectid_stagesolutionupload: WebMappingRetrieve<StageSolutionUpload_Select,StageSolutionUpload_Expand,StageSolutionUpload_Filter,StageSolutionUpload_Fixed,StageSolutionUpload_Result,StageSolutionUpload_FormattedResult>;
  objectid_webresource: WebMappingRetrieve<WebResource_Select,WebResource_Expand,WebResource_Filter,WebResource_Fixed,WebResource_Result,WebResource_FormattedResult>;
  objectid_workflowbinary: WebMappingRetrieve<workflowbinary_Select,workflowbinary_Expand,workflowbinary_Filter,workflowbinary_Fixed,workflowbinary_Result,workflowbinary_FormattedResult>;
  objectid_workflowlog: WebMappingRetrieve<WorkflowLog_Select,WorkflowLog_Expand,WorkflowLog_Filter,WorkflowLog_Fixed,WorkflowLog_Result,WorkflowLog_FormattedResult>;
}
interface FileAttachment_RelatedMany {
  FileAttachment_AsyncOperation_DataBlobId: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  FileAttachment_CanvasApp_Assets: WebMappingRetrieve<CanvasApp_Select,CanvasApp_Expand,CanvasApp_Filter,CanvasApp_Fixed,CanvasApp_Result,CanvasApp_FormattedResult>;
  FileAttachment_CanvasApp_BackgroundImage: WebMappingRetrieve<CanvasApp_Select,CanvasApp_Expand,CanvasApp_Filter,CanvasApp_Fixed,CanvasApp_Result,CanvasApp_FormattedResult>;
  FileAttachment_CanvasApp_Document: WebMappingRetrieve<CanvasApp_Select,CanvasApp_Expand,CanvasApp_Filter,CanvasApp_Fixed,CanvasApp_Result,CanvasApp_FormattedResult>;
  FileAttachment_CanvasApp_LargeIcon: WebMappingRetrieve<CanvasApp_Select,CanvasApp_Expand,CanvasApp_Filter,CanvasApp_Fixed,CanvasApp_Result,CanvasApp_FormattedResult>;
  FileAttachment_CanvasApp_MediumIcon: WebMappingRetrieve<CanvasApp_Select,CanvasApp_Expand,CanvasApp_Filter,CanvasApp_Fixed,CanvasApp_Result,CanvasApp_FormattedResult>;
  FileAttachment_CanvasApp_SmallIcon: WebMappingRetrieve<CanvasApp_Select,CanvasApp_Expand,CanvasApp_Filter,CanvasApp_Fixed,CanvasApp_Result,CanvasApp_FormattedResult>;
  FileAttachment_CanvasApp_TeamsIcon: WebMappingRetrieve<CanvasApp_Select,CanvasApp_Expand,CanvasApp_Filter,CanvasApp_Fixed,CanvasApp_Result,CanvasApp_FormattedResult>;
  FileAttachment_CanvasApp_WideIcon: WebMappingRetrieve<CanvasApp_Select,CanvasApp_Expand,CanvasApp_Filter,CanvasApp_Fixed,CanvasApp_Result,CanvasApp_FormattedResult>;
  FileAttachment_ExportSolutionUpload_SolutionFile: WebMappingRetrieve<ExportSolutionUpload_Select,ExportSolutionUpload_Expand,ExportSolutionUpload_Filter,ExportSolutionUpload_Fixed,ExportSolutionUpload_Result,ExportSolutionUpload_FormattedResult>;
  FileAttachment_ImageDescriptor_FileId: WebMappingRetrieve<ImageDescriptor_Select,ImageDescriptor_Expand,ImageDescriptor_Filter,ImageDescriptor_Fixed,ImageDescriptor_Result,ImageDescriptor_FormattedResult>;
  FileAttachment_Mailbox_ExchangeSyncStateXmlFileRef: WebMappingRetrieve<Mailbox_Select,Mailbox_Expand,Mailbox_Filter,Mailbox_Fixed,Mailbox_Result,Mailbox_FormattedResult>;
  FileAttachment_RibbonClientMetadata_RibbonJsonFileRef: WebMappingRetrieve<RibbonClientMetadata_Select,RibbonClientMetadata_Expand,RibbonClientMetadata_Filter,RibbonClientMetadata_Fixed,RibbonClientMetadata_Result,RibbonClientMetadata_FormattedResult>;
  FileAttachment_StageSolutionUpload_SolutionFile: WebMappingRetrieve<StageSolutionUpload_Select,StageSolutionUpload_Expand,StageSolutionUpload_Filter,StageSolutionUpload_Fixed,StageSolutionUpload_Result,StageSolutionUpload_FormattedResult>;
  FileAttachment_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  FileAttachment_WebResource_ContentFileRef: WebMappingRetrieve<WebResource_Select,WebResource_Expand,WebResource_Filter,WebResource_Fixed,WebResource_Result,WebResource_FormattedResult>;
  FileAttachment_WebResource_ContentJsonFileRef: WebMappingRetrieve<WebResource_Select,WebResource_Expand,WebResource_Filter,WebResource_Fixed,WebResource_Result,WebResource_FormattedResult>;
  FileAttachment_activityfileattachment_FileContent: WebMappingRetrieve<activityfileattachment_Select,activityfileattachment_Expand,activityfileattachment_Filter,activityfileattachment_Fixed,activityfileattachment_Result,activityfileattachment_FormattedResult>;
  FileAttachment_cascadegrantrevokeaccessrecordstracker_RecordsAttachment: WebMappingRetrieve<cascadegrantrevokeaccessrecordstracker_Select,cascadegrantrevokeaccessrecordstracker_Expand,cascadegrantrevokeaccessrecordstracker_Filter,cascadegrantrevokeaccessrecordstracker_Fixed,cascadegrantrevokeaccessrecordstracker_Result,cascadegrantrevokeaccessrecordstracker_FormattedResult>;
  FileAttachment_flowsession_AdditionalContext: WebMappingRetrieve<flowsession_Select,flowsession_Expand,flowsession_Filter,flowsession_Fixed,flowsession_Result,flowsession_FormattedResult>;
  FileAttachment_flowsession_Outputs: WebMappingRetrieve<flowsession_Select,flowsession_Expand,flowsession_Filter,flowsession_Fixed,flowsession_Result,flowsession_FormattedResult>;
  FileAttachment_msdyn_AIBFile_msdyn_File: WebMappingRetrieve<msdyn_AIBFile_Select,msdyn_AIBFile_Expand,msdyn_AIBFile_Filter,msdyn_AIBFile_Fixed,msdyn_AIBFile_Result,msdyn_AIBFile_FormattedResult>;
  FileAttachment_msdyn_AIConfiguration_msdyn_Model: WebMappingRetrieve<msdyn_AIConfiguration_Select,msdyn_AIConfiguration_Expand,msdyn_AIConfiguration_Filter,msdyn_AIConfiguration_Fixed,msdyn_AIConfiguration_Result,msdyn_AIConfiguration_FormattedResult>;
  FileAttachment_msdyn_knowledgearticleimage_msdyn_BlobFile: WebMappingRetrieve<msdyn_knowledgearticleimage_Select,msdyn_knowledgearticleimage_Expand,msdyn_knowledgearticleimage_Filter,msdyn_knowledgearticleimage_Fixed,msdyn_knowledgearticleimage_Result,msdyn_knowledgearticleimage_FormattedResult>;
  FileAttachment_pluginpackage_Contents: WebMappingRetrieve<pluginpackage_Select,pluginpackage_Expand,pluginpackage_Filter,pluginpackage_Fixed,pluginpackage_Result,pluginpackage_FormattedResult>;
  FileAttachment_revokeinheritedaccessrecordstracker_RecordsAttachment: WebMappingRetrieve<revokeinheritedaccessrecordstracker_Select,revokeinheritedaccessrecordstracker_Expand,revokeinheritedaccessrecordstracker_Filter,revokeinheritedaccessrecordstracker_Fixed,revokeinheritedaccessrecordstracker_Result,revokeinheritedaccessrecordstracker_FormattedResult>;
  FileAttachment_workflowbinary_Data: WebMappingRetrieve<workflowbinary_Select,workflowbinary_Expand,workflowbinary_Filter,workflowbinary_Fixed,workflowbinary_Result,workflowbinary_FormattedResult>;
  FileAttachment_workflowlog_Inputs: WebMappingRetrieve<WorkflowLog_Select,WorkflowLog_Expand,WorkflowLog_Filter,WorkflowLog_Fixed,WorkflowLog_Result,WorkflowLog_FormattedResult>;
  FileAttachment_workflowlog_Outputs: WebMappingRetrieve<WorkflowLog_Select,WorkflowLog_Expand,WorkflowLog_Filter,WorkflowLog_Fixed,WorkflowLog_Result,WorkflowLog_FormattedResult>;
  solution_fileid: WebMappingRetrieve<Solution_Select,Solution_Expand,Solution_Filter,Solution_Fixed,Solution_Result,Solution_FormattedResult>;
  userentityinstancedata_fileattachment: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  fileattachments: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
}
interface WebEntitiesRelated {
  fileattachments: WebMappingRelated<FileAttachment_RelatedOne,FileAttachment_RelatedMany>;
}
interface WebEntitiesCUDA {
  fileattachments: WebMappingCUDA<FileAttachment_Create,FileAttachment_Update,FileAttachment_Select>;
}
