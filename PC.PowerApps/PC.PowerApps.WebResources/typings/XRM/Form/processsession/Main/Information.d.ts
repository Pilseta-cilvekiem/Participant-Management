declare namespace Form.processsession.Main {
  namespace Information {
    namespace Tabs {
      interface Comments extends Xrm.SectionCollectionBase {
        get(name: "Comments"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface Details extends Xrm.SectionCollectionBase {
        get(name: "Details_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface LinkedSessions extends Xrm.SectionCollectionBase {
        get(name: "Linked Sessions"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface Summary extends Xrm.SectionCollectionBase {
        get(name: "Summary"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface _474B8A52CB224194A5A6F21FD40B7417 extends Xrm.SectionCollectionBase {
        get(name: "Details"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "canceledby"): Xrm.LookupAttribute<"systemuser">;
      get(name: "canceledon"): Xrm.DateAttribute;
      get(name: "comments"): Xrm.Attribute<string>;
      get(name: "completedby"): Xrm.LookupAttribute<"systemuser">;
      get(name: "completedon"): Xrm.DateAttribute;
      get(name: "createdon"): Xrm.DateAttribute;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "nextlinkedsessionid"): Xrm.LookupAttribute<"processsession">;
      get(name: "originatingsessionid"): Xrm.LookupAttribute<"processsession">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "previouslinkedsessionid"): Xrm.LookupAttribute<"processsession">;
      get(name: "processid"): Xrm.LookupAttribute<"workflow">;
      get(name: "regardingobjectid"): Xrm.LookupAttribute<"account" | "activityfileattachment" | "annotation" | "appaction" | "appelement" | "applicationuser" | "appmodulecomponentedge" | "appmodulecomponentnode" | "appointment" | "appsetting" | "appusersetting" | "bot" | "botcomponent" | "businessunit" | "businessunitnewsarticle" | "canvasappextendedmetadata" | "cascadegrantrevokeaccessrecordstracker" | "cascadegrantrevokeaccessversiontracker" | "catalog" | "catalogassignment" | "channelaccessprofile" | "channelaccessprofilerule" | "connection" | "connectionreference" | "connectionrole" | "connector" | "contact" | "conversationtranscript" | "convertrule" | "customapi" | "customapirequestparameter" | "customapiresponseproperty" | "customeraddress" | "customerrelationship" | "datalakefolder" | "datalakefolderpermission" | "datalakeworkspace" | "datalakeworkspacepermission" | "email" | "environmentvariabledefinition" | "environmentvariablevalue" | "expiredprocess" | "exportsolutionupload" | "externalparty" | "externalpartyitem" | "fax" | "featurecontrolsetting" | "flowmachine" | "flowmachinegroup" | "goal" | "goalrollupquery" | "holidaywrapper" | "internalcatalogassignment" | "kbarticle" | "kbarticlecomment" | "kbarticletemplate" | "keyvaultreference" | "knowledgearticle" | "knowledgebaserecord" | "letter" | "mailbox" | "mailmergetemplate" | "managedidentity" | "mbs_pluginprofile" | "metric" | "msdynce_botcontent" | "msdyn_aibdataset" | "msdyn_aibdatasetfile" | "msdyn_aibdatasetrecord" | "msdyn_aibdatasetscontainer" | "msdyn_aibfile" | "msdyn_aibfileattacheddata" | "msdyn_aiconfiguration" | "msdyn_aifptrainingdocument" | "msdyn_aimodel" | "msdyn_aiodimage" | "msdyn_aiodlabel" | "msdyn_aiodtrainingboundingbox" | "msdyn_aiodtrainingimage" | "msdyn_aitemplate" | "msdyn_analysiscomponent" | "msdyn_analysisjob" | "msdyn_analysisresult" | "msdyn_analysisresultdetail" | "msdyn_dataflow" | "msdyn_federatedarticle" | "msdyn_federatedarticleincident" | "msdyn_helppage" | "msdyn_kalanguagesetting" | "msdyn_kmfederatedsearchconfig" | "msdyn_kmpersonalizationsetting" | "msdyn_knowledgearticleimage" | "msdyn_knowledgearticletemplate" | "msdyn_knowledgeinteractioninsight" | "msdyn_knowledgepersonalfilter" | "msdyn_knowledgesearchfilter" | "msdyn_knowledgesearchinsight" | "msdyn_pminferredtask" | "msdyn_pmrecording" | "msdyn_richtextfile" | "msdyn_serviceconfiguration" | "msdyn_slakpi" | "msdyn_solutionhealthrule" | "msdyn_solutionhealthruleargument" | "msdyn_solutionhealthruleset" | "msdyn_tour" | "newprocess" | "organizationdatasyncsubscription" | "organizationdatasyncsubscriptionentity" | "organizationsetting" | "package" | "pc_bankaccount" | "pc_participation" | "pc_participationfeeexemption" | "pc_payment" | "pc_scheduledjob" | "pc_settings" | "pc_transaction" | "pdfsetting" | "phonecall" | "position" | "processstageparameter" | "provisionlanguageforuser" | "queue" | "queueitem" | "recurringappointmentmaster" | "relationshiprole" | "report" | "revokeinheritedaccessrecordstracker" | "rollupfield" | "routingrule" | "routingruleitem" | "serviceplan" | "serviceplanmapping" | "settingdefinition" | "sharepointdocumentlocation" | "sharepointsite" | "sla" | "socialactivity" | "socialprofile" | "solutioncomponentattributeconfiguration" | "solutioncomponentbatchconfiguration" | "solutioncomponentconfiguration" | "solutioncomponentrelationshipconfiguration" | "stagesolutionupload" | "subject" | "systemuser" | "systemuserauthorizationchangetracker" | "task" | "team" | "teammobileofflineprofilemembership" | "template" | "territory" | "theme" | "transactioncurrency" | "translationprocess" | "usermapping" | "usermobileofflineprofilemembership" | "virtualentitymetadata" | "workflowbinary">;
      get(name: "startedby"): Xrm.LookupAttribute<"systemuser">;
      get(name: "startedon"): Xrm.DateAttribute;
      get(name: "statecode"): Xrm.OptionSetAttribute<processsession_statecode>;
      get(name: "statuscode"): Xrm.OptionSetAttribute<processsession_statuscode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "canceledby"): Xrm.LookupControl<"systemuser">;
      get(name: "canceledon"): Xrm.DateControl;
      get(name: "comments"): Xrm.StringControl;
      get(name: "completedby"): Xrm.LookupControl<"systemuser">;
      get(name: "completedon"): Xrm.DateControl;
      get(name: "createdon"): Xrm.DateControl;
      get(name: "footer_statecode"): Xrm.OptionSetControl<processsession_statecode>;
      get(name: "name"): Xrm.StringControl;
      get(name: "nextlinkedsessionid"): Xrm.LookupControl<"processsession">;
      get(name: "originatingsessionid"): Xrm.LookupControl<"processsession">;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "previouslinkedsessionid"): Xrm.LookupControl<"processsession">;
      get(name: "processid"): Xrm.LookupControl<"workflow">;
      get(name: "regardingobjectid"): Xrm.LookupControl<"account" | "activityfileattachment" | "annotation" | "appaction" | "appelement" | "applicationuser" | "appmodulecomponentedge" | "appmodulecomponentnode" | "appointment" | "appsetting" | "appusersetting" | "bot" | "botcomponent" | "businessunit" | "businessunitnewsarticle" | "canvasappextendedmetadata" | "cascadegrantrevokeaccessrecordstracker" | "cascadegrantrevokeaccessversiontracker" | "catalog" | "catalogassignment" | "channelaccessprofile" | "channelaccessprofilerule" | "connection" | "connectionreference" | "connectionrole" | "connector" | "contact" | "conversationtranscript" | "convertrule" | "customapi" | "customapirequestparameter" | "customapiresponseproperty" | "customeraddress" | "customerrelationship" | "datalakefolder" | "datalakefolderpermission" | "datalakeworkspace" | "datalakeworkspacepermission" | "email" | "environmentvariabledefinition" | "environmentvariablevalue" | "expiredprocess" | "exportsolutionupload" | "externalparty" | "externalpartyitem" | "fax" | "featurecontrolsetting" | "flowmachine" | "flowmachinegroup" | "goal" | "goalrollupquery" | "holidaywrapper" | "internalcatalogassignment" | "kbarticle" | "kbarticlecomment" | "kbarticletemplate" | "keyvaultreference" | "knowledgearticle" | "knowledgebaserecord" | "letter" | "mailbox" | "mailmergetemplate" | "managedidentity" | "mbs_pluginprofile" | "metric" | "msdynce_botcontent" | "msdyn_aibdataset" | "msdyn_aibdatasetfile" | "msdyn_aibdatasetrecord" | "msdyn_aibdatasetscontainer" | "msdyn_aibfile" | "msdyn_aibfileattacheddata" | "msdyn_aiconfiguration" | "msdyn_aifptrainingdocument" | "msdyn_aimodel" | "msdyn_aiodimage" | "msdyn_aiodlabel" | "msdyn_aiodtrainingboundingbox" | "msdyn_aiodtrainingimage" | "msdyn_aitemplate" | "msdyn_analysiscomponent" | "msdyn_analysisjob" | "msdyn_analysisresult" | "msdyn_analysisresultdetail" | "msdyn_dataflow" | "msdyn_federatedarticle" | "msdyn_federatedarticleincident" | "msdyn_helppage" | "msdyn_kalanguagesetting" | "msdyn_kmfederatedsearchconfig" | "msdyn_kmpersonalizationsetting" | "msdyn_knowledgearticleimage" | "msdyn_knowledgearticletemplate" | "msdyn_knowledgeinteractioninsight" | "msdyn_knowledgepersonalfilter" | "msdyn_knowledgesearchfilter" | "msdyn_knowledgesearchinsight" | "msdyn_pminferredtask" | "msdyn_pmrecording" | "msdyn_richtextfile" | "msdyn_serviceconfiguration" | "msdyn_slakpi" | "msdyn_solutionhealthrule" | "msdyn_solutionhealthruleargument" | "msdyn_solutionhealthruleset" | "msdyn_tour" | "newprocess" | "organizationdatasyncsubscription" | "organizationdatasyncsubscriptionentity" | "organizationsetting" | "package" | "pc_bankaccount" | "pc_participation" | "pc_participationfeeexemption" | "pc_payment" | "pc_scheduledjob" | "pc_settings" | "pc_transaction" | "pdfsetting" | "phonecall" | "position" | "processstageparameter" | "provisionlanguageforuser" | "queue" | "queueitem" | "recurringappointmentmaster" | "relationshiprole" | "report" | "revokeinheritedaccessrecordstracker" | "rollupfield" | "routingrule" | "routingruleitem" | "serviceplan" | "serviceplanmapping" | "settingdefinition" | "sharepointdocumentlocation" | "sharepointsite" | "sla" | "socialactivity" | "socialprofile" | "solutioncomponentattributeconfiguration" | "solutioncomponentbatchconfiguration" | "solutioncomponentconfiguration" | "solutioncomponentrelationshipconfiguration" | "stagesolutionupload" | "subject" | "systemuser" | "systemuserauthorizationchangetracker" | "task" | "team" | "teammobileofflineprofilemembership" | "template" | "territory" | "theme" | "transactioncurrency" | "translationprocess" | "usermapping" | "usermobileofflineprofilemembership" | "virtualentitymetadata" | "workflowbinary">;
      get(name: "startedby"): Xrm.LookupControl<"systemuser">;
      get(name: "startedon"): Xrm.DateControl;
      get(name: "statuscode"): Xrm.OptionSetControl<processsession_statuscode>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "Comments"): Xrm.PageTab<Tabs.Comments>;
      get(name: "Details"): Xrm.PageTab<Tabs.Details>;
      get(name: "Linked Sessions"): Xrm.PageTab<Tabs.LinkedSessions>;
      get(name: "Summary"): Xrm.PageTab<Tabs.Summary>;
      get(name: "{474B8A52-CB22-4194-A5A6-F21FD40B7417}"): Xrm.PageTab<Tabs._474B8A52CB224194A5A6F21FD40B7417>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "canceledby"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "canceledon"): Xrm.DateAttribute;
    getAttribute(attributeName: "comments"): Xrm.Attribute<string>;
    getAttribute(attributeName: "completedby"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "completedon"): Xrm.DateAttribute;
    getAttribute(attributeName: "createdon"): Xrm.DateAttribute;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "nextlinkedsessionid"): Xrm.LookupAttribute<"processsession">;
    getAttribute(attributeName: "originatingsessionid"): Xrm.LookupAttribute<"processsession">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "previouslinkedsessionid"): Xrm.LookupAttribute<"processsession">;
    getAttribute(attributeName: "processid"): Xrm.LookupAttribute<"workflow">;
    getAttribute(attributeName: "regardingobjectid"): Xrm.LookupAttribute<"account" | "activityfileattachment" | "annotation" | "appaction" | "appelement" | "applicationuser" | "appmodulecomponentedge" | "appmodulecomponentnode" | "appointment" | "appsetting" | "appusersetting" | "bot" | "botcomponent" | "businessunit" | "businessunitnewsarticle" | "canvasappextendedmetadata" | "cascadegrantrevokeaccessrecordstracker" | "cascadegrantrevokeaccessversiontracker" | "catalog" | "catalogassignment" | "channelaccessprofile" | "channelaccessprofilerule" | "connection" | "connectionreference" | "connectionrole" | "connector" | "contact" | "conversationtranscript" | "convertrule" | "customapi" | "customapirequestparameter" | "customapiresponseproperty" | "customeraddress" | "customerrelationship" | "datalakefolder" | "datalakefolderpermission" | "datalakeworkspace" | "datalakeworkspacepermission" | "email" | "environmentvariabledefinition" | "environmentvariablevalue" | "expiredprocess" | "exportsolutionupload" | "externalparty" | "externalpartyitem" | "fax" | "featurecontrolsetting" | "flowmachine" | "flowmachinegroup" | "goal" | "goalrollupquery" | "holidaywrapper" | "internalcatalogassignment" | "kbarticle" | "kbarticlecomment" | "kbarticletemplate" | "keyvaultreference" | "knowledgearticle" | "knowledgebaserecord" | "letter" | "mailbox" | "mailmergetemplate" | "managedidentity" | "mbs_pluginprofile" | "metric" | "msdynce_botcontent" | "msdyn_aibdataset" | "msdyn_aibdatasetfile" | "msdyn_aibdatasetrecord" | "msdyn_aibdatasetscontainer" | "msdyn_aibfile" | "msdyn_aibfileattacheddata" | "msdyn_aiconfiguration" | "msdyn_aifptrainingdocument" | "msdyn_aimodel" | "msdyn_aiodimage" | "msdyn_aiodlabel" | "msdyn_aiodtrainingboundingbox" | "msdyn_aiodtrainingimage" | "msdyn_aitemplate" | "msdyn_analysiscomponent" | "msdyn_analysisjob" | "msdyn_analysisresult" | "msdyn_analysisresultdetail" | "msdyn_dataflow" | "msdyn_federatedarticle" | "msdyn_federatedarticleincident" | "msdyn_helppage" | "msdyn_kalanguagesetting" | "msdyn_kmfederatedsearchconfig" | "msdyn_kmpersonalizationsetting" | "msdyn_knowledgearticleimage" | "msdyn_knowledgearticletemplate" | "msdyn_knowledgeinteractioninsight" | "msdyn_knowledgepersonalfilter" | "msdyn_knowledgesearchfilter" | "msdyn_knowledgesearchinsight" | "msdyn_pminferredtask" | "msdyn_pmrecording" | "msdyn_richtextfile" | "msdyn_serviceconfiguration" | "msdyn_slakpi" | "msdyn_solutionhealthrule" | "msdyn_solutionhealthruleargument" | "msdyn_solutionhealthruleset" | "msdyn_tour" | "newprocess" | "organizationdatasyncsubscription" | "organizationdatasyncsubscriptionentity" | "organizationsetting" | "package" | "pc_bankaccount" | "pc_participation" | "pc_participationfeeexemption" | "pc_payment" | "pc_scheduledjob" | "pc_settings" | "pc_transaction" | "pdfsetting" | "phonecall" | "position" | "processstageparameter" | "provisionlanguageforuser" | "queue" | "queueitem" | "recurringappointmentmaster" | "relationshiprole" | "report" | "revokeinheritedaccessrecordstracker" | "rollupfield" | "routingrule" | "routingruleitem" | "serviceplan" | "serviceplanmapping" | "settingdefinition" | "sharepointdocumentlocation" | "sharepointsite" | "sla" | "socialactivity" | "socialprofile" | "solutioncomponentattributeconfiguration" | "solutioncomponentbatchconfiguration" | "solutioncomponentconfiguration" | "solutioncomponentrelationshipconfiguration" | "stagesolutionupload" | "subject" | "systemuser" | "systemuserauthorizationchangetracker" | "task" | "team" | "teammobileofflineprofilemembership" | "template" | "territory" | "theme" | "transactioncurrency" | "translationprocess" | "usermapping" | "usermobileofflineprofilemembership" | "virtualentitymetadata" | "workflowbinary">;
    getAttribute(attributeName: "startedby"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "startedon"): Xrm.DateAttribute;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<processsession_statecode>;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<processsession_statuscode>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "canceledby"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "canceledon"): Xrm.DateControl;
    getControl(controlName: "comments"): Xrm.StringControl;
    getControl(controlName: "completedby"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "completedon"): Xrm.DateControl;
    getControl(controlName: "createdon"): Xrm.DateControl;
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<processsession_statecode>;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "nextlinkedsessionid"): Xrm.LookupControl<"processsession">;
    getControl(controlName: "originatingsessionid"): Xrm.LookupControl<"processsession">;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "previouslinkedsessionid"): Xrm.LookupControl<"processsession">;
    getControl(controlName: "processid"): Xrm.LookupControl<"workflow">;
    getControl(controlName: "regardingobjectid"): Xrm.LookupControl<"account" | "activityfileattachment" | "annotation" | "appaction" | "appelement" | "applicationuser" | "appmodulecomponentedge" | "appmodulecomponentnode" | "appointment" | "appsetting" | "appusersetting" | "bot" | "botcomponent" | "businessunit" | "businessunitnewsarticle" | "canvasappextendedmetadata" | "cascadegrantrevokeaccessrecordstracker" | "cascadegrantrevokeaccessversiontracker" | "catalog" | "catalogassignment" | "channelaccessprofile" | "channelaccessprofilerule" | "connection" | "connectionreference" | "connectionrole" | "connector" | "contact" | "conversationtranscript" | "convertrule" | "customapi" | "customapirequestparameter" | "customapiresponseproperty" | "customeraddress" | "customerrelationship" | "datalakefolder" | "datalakefolderpermission" | "datalakeworkspace" | "datalakeworkspacepermission" | "email" | "environmentvariabledefinition" | "environmentvariablevalue" | "expiredprocess" | "exportsolutionupload" | "externalparty" | "externalpartyitem" | "fax" | "featurecontrolsetting" | "flowmachine" | "flowmachinegroup" | "goal" | "goalrollupquery" | "holidaywrapper" | "internalcatalogassignment" | "kbarticle" | "kbarticlecomment" | "kbarticletemplate" | "keyvaultreference" | "knowledgearticle" | "knowledgebaserecord" | "letter" | "mailbox" | "mailmergetemplate" | "managedidentity" | "mbs_pluginprofile" | "metric" | "msdynce_botcontent" | "msdyn_aibdataset" | "msdyn_aibdatasetfile" | "msdyn_aibdatasetrecord" | "msdyn_aibdatasetscontainer" | "msdyn_aibfile" | "msdyn_aibfileattacheddata" | "msdyn_aiconfiguration" | "msdyn_aifptrainingdocument" | "msdyn_aimodel" | "msdyn_aiodimage" | "msdyn_aiodlabel" | "msdyn_aiodtrainingboundingbox" | "msdyn_aiodtrainingimage" | "msdyn_aitemplate" | "msdyn_analysiscomponent" | "msdyn_analysisjob" | "msdyn_analysisresult" | "msdyn_analysisresultdetail" | "msdyn_dataflow" | "msdyn_federatedarticle" | "msdyn_federatedarticleincident" | "msdyn_helppage" | "msdyn_kalanguagesetting" | "msdyn_kmfederatedsearchconfig" | "msdyn_kmpersonalizationsetting" | "msdyn_knowledgearticleimage" | "msdyn_knowledgearticletemplate" | "msdyn_knowledgeinteractioninsight" | "msdyn_knowledgepersonalfilter" | "msdyn_knowledgesearchfilter" | "msdyn_knowledgesearchinsight" | "msdyn_pminferredtask" | "msdyn_pmrecording" | "msdyn_richtextfile" | "msdyn_serviceconfiguration" | "msdyn_slakpi" | "msdyn_solutionhealthrule" | "msdyn_solutionhealthruleargument" | "msdyn_solutionhealthruleset" | "msdyn_tour" | "newprocess" | "organizationdatasyncsubscription" | "organizationdatasyncsubscriptionentity" | "organizationsetting" | "package" | "pc_bankaccount" | "pc_participation" | "pc_participationfeeexemption" | "pc_payment" | "pc_scheduledjob" | "pc_settings" | "pc_transaction" | "pdfsetting" | "phonecall" | "position" | "processstageparameter" | "provisionlanguageforuser" | "queue" | "queueitem" | "recurringappointmentmaster" | "relationshiprole" | "report" | "revokeinheritedaccessrecordstracker" | "rollupfield" | "routingrule" | "routingruleitem" | "serviceplan" | "serviceplanmapping" | "settingdefinition" | "sharepointdocumentlocation" | "sharepointsite" | "sla" | "socialactivity" | "socialprofile" | "solutioncomponentattributeconfiguration" | "solutioncomponentbatchconfiguration" | "solutioncomponentconfiguration" | "solutioncomponentrelationshipconfiguration" | "stagesolutionupload" | "subject" | "systemuser" | "systemuserauthorizationchangetracker" | "task" | "team" | "teammobileofflineprofilemembership" | "template" | "territory" | "theme" | "transactioncurrency" | "translationprocess" | "usermapping" | "usermobileofflineprofilemembership" | "virtualentitymetadata" | "workflowbinary">;
    getControl(controlName: "startedby"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "startedon"): Xrm.DateControl;
    getControl(controlName: "statuscode"): Xrm.OptionSetControl<processsession_statuscode>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
