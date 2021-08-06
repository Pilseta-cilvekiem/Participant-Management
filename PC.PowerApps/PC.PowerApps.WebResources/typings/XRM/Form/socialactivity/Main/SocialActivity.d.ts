declare namespace Form.socialactivity.Main {
  namespace SocialActivity {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "community"): Xrm.OptionSetAttribute<socialprofile_community>;
      get(name: "createdon"): Xrm.DateAttribute;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "modifiedon"): Xrm.DateAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "postedon"): Xrm.DateAttribute;
      get(name: "postfromprofileid"): Xrm.LookupAttribute<"socialprofile">;
      get(name: "postmessagetype"): Xrm.OptionSetAttribute<socialactivity_postmessagetype>;
      get(name: "posttoprofileid"): Xrm.Attribute<string>;
      get(name: "posturl"): Xrm.Attribute<string>;
      get(name: "prioritycode"): Xrm.OptionSetAttribute<socialactivity_prioritycode>;
      get(name: "regardingobjectid"): Xrm.LookupAttribute<"account" | "asyncoperation" | "contact" | "knowledgearticle" | "knowledgebaserecord">;
      get(name: "sentimentvalue"): Xrm.NumberAttribute;
      get(name: "statuscode"): Xrm.OptionSetAttribute<socialactivity_statuscode>;
      get(name: "subject"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "community"): Xrm.OptionSetControl<socialprofile_community>;
      get(name: "createdon"): Xrm.DateControl;
      get(name: "description"): Xrm.StringControl;
      get(name: "header_prioritycode"): Xrm.OptionSetControl<socialactivity_prioritycode>;
      get(name: "header_statecode"): Xrm.OptionSetControl<socialactivity_statuscode>;
      get(name: "modifiedon"): Xrm.DateControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "postedon"): Xrm.DateControl;
      get(name: "postfromprofileid"): Xrm.LookupControl<"socialprofile">;
      get(name: "postmessagetype"): Xrm.OptionSetControl<socialactivity_postmessagetype>;
      get(name: "posttoprofileid"): Xrm.StringControl;
      get(name: "posturl"): Xrm.StringControl;
      get(name: "regardingobjectid"): Xrm.LookupControl<"account" | "asyncoperation" | "contact" | "knowledgearticle" | "knowledgebaserecord">;
      get(name: "sentimentvalue"): Xrm.NumberControl;
      get(name: "subject"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface SocialActivity extends Xrm.PageBase<SocialActivity.Attributes,SocialActivity.Tabs,SocialActivity.Controls> {
    getAttribute(attributeName: "community"): Xrm.OptionSetAttribute<socialprofile_community>;
    getAttribute(attributeName: "createdon"): Xrm.DateAttribute;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "modifiedon"): Xrm.DateAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "postedon"): Xrm.DateAttribute;
    getAttribute(attributeName: "postfromprofileid"): Xrm.LookupAttribute<"socialprofile">;
    getAttribute(attributeName: "postmessagetype"): Xrm.OptionSetAttribute<socialactivity_postmessagetype>;
    getAttribute(attributeName: "posttoprofileid"): Xrm.Attribute<string>;
    getAttribute(attributeName: "posturl"): Xrm.Attribute<string>;
    getAttribute(attributeName: "prioritycode"): Xrm.OptionSetAttribute<socialactivity_prioritycode>;
    getAttribute(attributeName: "regardingobjectid"): Xrm.LookupAttribute<"account" | "asyncoperation" | "contact" | "knowledgearticle" | "knowledgebaserecord">;
    getAttribute(attributeName: "sentimentvalue"): Xrm.NumberAttribute;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<socialactivity_statuscode>;
    getAttribute(attributeName: "subject"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "community"): Xrm.OptionSetControl<socialprofile_community>;
    getControl(controlName: "createdon"): Xrm.DateControl;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "header_prioritycode"): Xrm.OptionSetControl<socialactivity_prioritycode>;
    getControl(controlName: "header_statecode"): Xrm.OptionSetControl<socialactivity_statuscode>;
    getControl(controlName: "modifiedon"): Xrm.DateControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "postedon"): Xrm.DateControl;
    getControl(controlName: "postfromprofileid"): Xrm.LookupControl<"socialprofile">;
    getControl(controlName: "postmessagetype"): Xrm.OptionSetControl<socialactivity_postmessagetype>;
    getControl(controlName: "posttoprofileid"): Xrm.StringControl;
    getControl(controlName: "posturl"): Xrm.StringControl;
    getControl(controlName: "regardingobjectid"): Xrm.LookupControl<"account" | "asyncoperation" | "contact" | "knowledgearticle" | "knowledgebaserecord">;
    getControl(controlName: "sentimentvalue"): Xrm.NumberControl;
    getControl(controlName: "subject"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
