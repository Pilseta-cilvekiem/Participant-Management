declare namespace Form.fax.Main {
  namespace Fax {
    namespace Tabs {
      interface SUMMARY_TAB extends Xrm.SectionCollectionBase {
        get(name: "Letter description"): Xrm.PageSection;
        get(name: "Letter details"): Xrm.PageSection;
        get(name: "general information"): Xrm.PageSection;
        get(name: "tab_2_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "actualdurationminutes"): Xrm.NumberAttribute;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "directioncode"): Xrm.OptionSetAttribute<boolean>;
      get(name: "faxnumber"): Xrm.Attribute<string>;
      get(name: "from"): Xrm.LookupAttribute<"account" | "contact" | "queue" | "systemuser">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "prioritycode"): Xrm.OptionSetAttribute<fax_prioritycode>;
      get(name: "regardingobjectid"): Xrm.LookupAttribute<"account" | "contact" | "knowledgearticle" | "knowledgebaserecord">;
      get(name: "scheduledend"): Xrm.DateAttribute;
      get(name: "statecode"): Xrm.OptionSetAttribute<fax_statecode>;
      get(name: "subject"): Xrm.Attribute<string>;
      get(name: "to"): Xrm.LookupAttribute<"account" | "contact" | "queue" | "systemuser">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "actualdurationminutes"): Xrm.NumberControl;
      get(name: "description"): Xrm.StringControl;
      get(name: "directioncode"): Xrm.OptionSetControl<boolean>;
      get(name: "faxnumber"): Xrm.StringControl;
      get(name: "from"): Xrm.LookupControl<"account" | "contact" | "queue" | "systemuser">;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_priority"): Xrm.OptionSetControl<fax_prioritycode>;
      get(name: "header_scheduledend"): Xrm.DateControl;
      get(name: "header_statecode"): Xrm.OptionSetControl<fax_statecode>;
      get(name: "regardingobjectid"): Xrm.LookupControl<"account" | "contact" | "knowledgearticle" | "knowledgebaserecord">;
      get(name: "subject"): Xrm.StringControl;
      get(name: "to"): Xrm.LookupControl<"account" | "contact" | "queue" | "systemuser">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "SUMMARY_TAB"): Xrm.PageTab<Tabs.SUMMARY_TAB>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Fax extends Xrm.PageBase<Fax.Attributes,Fax.Tabs,Fax.Controls> {
    getAttribute(attributeName: "actualdurationminutes"): Xrm.NumberAttribute;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "directioncode"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "faxnumber"): Xrm.Attribute<string>;
    getAttribute(attributeName: "from"): Xrm.LookupAttribute<"account" | "contact" | "queue" | "systemuser">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "prioritycode"): Xrm.OptionSetAttribute<fax_prioritycode>;
    getAttribute(attributeName: "regardingobjectid"): Xrm.LookupAttribute<"account" | "contact" | "knowledgearticle" | "knowledgebaserecord">;
    getAttribute(attributeName: "scheduledend"): Xrm.DateAttribute;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<fax_statecode>;
    getAttribute(attributeName: "subject"): Xrm.Attribute<string>;
    getAttribute(attributeName: "to"): Xrm.LookupAttribute<"account" | "contact" | "queue" | "systemuser">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "actualdurationminutes"): Xrm.NumberControl;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "directioncode"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "faxnumber"): Xrm.StringControl;
    getControl(controlName: "from"): Xrm.LookupControl<"account" | "contact" | "queue" | "systemuser">;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_priority"): Xrm.OptionSetControl<fax_prioritycode>;
    getControl(controlName: "header_scheduledend"): Xrm.DateControl;
    getControl(controlName: "header_statecode"): Xrm.OptionSetControl<fax_statecode>;
    getControl(controlName: "regardingobjectid"): Xrm.LookupControl<"account" | "contact" | "knowledgearticle" | "knowledgebaserecord">;
    getControl(controlName: "subject"): Xrm.StringControl;
    getControl(controlName: "to"): Xrm.LookupControl<"account" | "contact" | "queue" | "systemuser">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
