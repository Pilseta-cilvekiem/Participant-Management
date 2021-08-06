declare namespace Form.socialactivity.Quick {
  namespace SocialActivityReferencePanel {
    namespace Tabs {
      interface tab_1 extends Xrm.SectionCollectionBase {
        get(name: "tab_1_column_1_section_1"): Xrm.PageSection;
        get(name: "tab_1_section_2"): Xrm.PageSection;
        get(name: "tab_1_section_3"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "community"): Xrm.OptionSetAttribute<socialprofile_community>;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "postedon"): Xrm.DateAttribute;
      get(name: "postfromprofileid"): Xrm.LookupAttribute<"socialprofile">;
      get(name: "postmessagetype"): Xrm.OptionSetAttribute<socialactivity_postmessagetype>;
      get(name: "posturl"): Xrm.Attribute<string>;
      get(name: "prioritycode"): Xrm.OptionSetAttribute<socialactivity_prioritycode>;
      get(name: "regardingobjectid"): Xrm.LookupAttribute<"account" | "asyncoperation" | "contact" | "knowledgearticle" | "knowledgebaserecord">;
      get(name: "sentimentvalue"): Xrm.NumberAttribute;
      get(name: "statecode"): Xrm.OptionSetAttribute<socialactivity_statecode>;
      get(name: "subject"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "community"): Xrm.OptionSetControl<socialprofile_community>;
      get(name: "description"): Xrm.StringControl;
      get(name: "postedon"): Xrm.DateControl;
      get(name: "postfromprofileid"): Xrm.LookupControl<"socialprofile">;
      get(name: "postmessagetype"): Xrm.OptionSetControl<socialactivity_postmessagetype>;
      get(name: "posturl"): Xrm.StringControl;
      get(name: "prioritycode"): Xrm.OptionSetControl<socialactivity_prioritycode>;
      get(name: "regardingobjectid"): Xrm.LookupControl<"account" | "asyncoperation" | "contact" | "knowledgearticle" | "knowledgebaserecord">;
      get(name: "sentimentvalue"): Xrm.NumberControl;
      get(name: "statecode"): Xrm.OptionSetControl<socialactivity_statecode>;
      get(name: "subject"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_1"): Xrm.PageTab<Tabs.tab_1>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface SocialActivityReferencePanel extends Xrm.PageBase<SocialActivityReferencePanel.Attributes,SocialActivityReferencePanel.Tabs,SocialActivityReferencePanel.Controls> {
    getAttribute(attributeName: "community"): Xrm.OptionSetAttribute<socialprofile_community>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "postedon"): Xrm.DateAttribute;
    getAttribute(attributeName: "postfromprofileid"): Xrm.LookupAttribute<"socialprofile">;
    getAttribute(attributeName: "postmessagetype"): Xrm.OptionSetAttribute<socialactivity_postmessagetype>;
    getAttribute(attributeName: "posturl"): Xrm.Attribute<string>;
    getAttribute(attributeName: "prioritycode"): Xrm.OptionSetAttribute<socialactivity_prioritycode>;
    getAttribute(attributeName: "regardingobjectid"): Xrm.LookupAttribute<"account" | "asyncoperation" | "contact" | "knowledgearticle" | "knowledgebaserecord">;
    getAttribute(attributeName: "sentimentvalue"): Xrm.NumberAttribute;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<socialactivity_statecode>;
    getAttribute(attributeName: "subject"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "community"): Xrm.OptionSetControl<socialprofile_community>;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "postedon"): Xrm.DateControl;
    getControl(controlName: "postfromprofileid"): Xrm.LookupControl<"socialprofile">;
    getControl(controlName: "postmessagetype"): Xrm.OptionSetControl<socialactivity_postmessagetype>;
    getControl(controlName: "posturl"): Xrm.StringControl;
    getControl(controlName: "prioritycode"): Xrm.OptionSetControl<socialactivity_prioritycode>;
    getControl(controlName: "regardingobjectid"): Xrm.LookupControl<"account" | "asyncoperation" | "contact" | "knowledgearticle" | "knowledgebaserecord">;
    getControl(controlName: "sentimentvalue"): Xrm.NumberControl;
    getControl(controlName: "statecode"): Xrm.OptionSetControl<socialactivity_statecode>;
    getControl(controlName: "subject"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
