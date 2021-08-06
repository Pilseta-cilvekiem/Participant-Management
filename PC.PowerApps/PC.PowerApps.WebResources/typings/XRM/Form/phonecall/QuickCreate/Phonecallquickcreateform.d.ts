declare namespace Form.phonecall.QuickCreate {
  namespace Phonecallquickcreateform {
    namespace Tabs {
      interface PhoneCall_Tab_1 extends Xrm.SectionCollectionBase {
        get(name: "PhoneCall_Description"): Xrm.PageSection;
        get(name: "PhoneCall_Description_2"): Xrm.PageSection;
        get(name: "PhoneCall_Description_3"): Xrm.PageSection;
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
      get(name: "from"): Xrm.LookupAttribute<"account" | "contact" | "systemuser">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "phonenumber"): Xrm.Attribute<string>;
      get(name: "prioritycode"): Xrm.OptionSetAttribute<phonecall_prioritycode>;
      get(name: "regardingobjectid"): Xrm.LookupAttribute<"account" | "contact" | "knowledgearticle" | "knowledgebaserecord">;
      get(name: "scheduledend"): Xrm.DateAttribute;
      get(name: "subject"): Xrm.Attribute<string>;
      get(name: "to"): Xrm.LookupAttribute<"account" | "contact" | "systemuser">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "actualdurationminutes"): Xrm.NumberControl;
      get(name: "description"): Xrm.StringControl;
      get(name: "directioncode"): Xrm.OptionSetControl<boolean>;
      get(name: "from"): Xrm.LookupControl<"account" | "contact" | "systemuser">;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "phonenumber"): Xrm.StringControl;
      get(name: "prioritycode"): Xrm.OptionSetControl<phonecall_prioritycode>;
      get(name: "regardingobjectid"): Xrm.LookupControl<"account" | "contact" | "knowledgearticle" | "knowledgebaserecord">;
      get(name: "scheduledend"): Xrm.DateControl;
      get(name: "subject"): Xrm.StringControl;
      get(name: "to"): Xrm.LookupControl<"account" | "contact" | "systemuser">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "PhoneCall_Tab_1"): Xrm.PageTab<Tabs.PhoneCall_Tab_1>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Phonecallquickcreateform extends Xrm.PageBase<Phonecallquickcreateform.Attributes,Phonecallquickcreateform.Tabs,Phonecallquickcreateform.Controls> {
    getAttribute(attributeName: "actualdurationminutes"): Xrm.NumberAttribute;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "directioncode"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "from"): Xrm.LookupAttribute<"account" | "contact" | "systemuser">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "phonenumber"): Xrm.Attribute<string>;
    getAttribute(attributeName: "prioritycode"): Xrm.OptionSetAttribute<phonecall_prioritycode>;
    getAttribute(attributeName: "regardingobjectid"): Xrm.LookupAttribute<"account" | "contact" | "knowledgearticle" | "knowledgebaserecord">;
    getAttribute(attributeName: "scheduledend"): Xrm.DateAttribute;
    getAttribute(attributeName: "subject"): Xrm.Attribute<string>;
    getAttribute(attributeName: "to"): Xrm.LookupAttribute<"account" | "contact" | "systemuser">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "actualdurationminutes"): Xrm.NumberControl;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "directioncode"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "from"): Xrm.LookupControl<"account" | "contact" | "systemuser">;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "phonenumber"): Xrm.StringControl;
    getControl(controlName: "prioritycode"): Xrm.OptionSetControl<phonecall_prioritycode>;
    getControl(controlName: "regardingobjectid"): Xrm.LookupControl<"account" | "contact" | "knowledgearticle" | "knowledgebaserecord">;
    getControl(controlName: "scheduledend"): Xrm.DateControl;
    getControl(controlName: "subject"): Xrm.StringControl;
    getControl(controlName: "to"): Xrm.LookupControl<"account" | "contact" | "systemuser">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
