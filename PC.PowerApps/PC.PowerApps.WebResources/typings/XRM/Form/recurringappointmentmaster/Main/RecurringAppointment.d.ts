declare namespace Form.recurringappointmentmaster.Main {
  namespace RecurringAppointment {
    namespace Tabs {
      interface SUMMARY_TAB extends Xrm.SectionCollectionBase {
        get(name: "appointment description"): Xrm.PageSection;
        get(name: "general information"): Xrm.PageSection;
        get(name: "tab_2_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "location"): Xrm.Attribute<string>;
      get(name: "optionalattendees"): Xrm.LookupAttribute<"account" | "contact" | "systemuser">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "prioritycode"): Xrm.OptionSetAttribute<recurringappointmentmaster_prioritycode>;
      get(name: "regardingobjectid"): Xrm.LookupAttribute<"account" | "contact" | "knowledgearticle" | "knowledgebaserecord">;
      get(name: "requiredattendees"): Xrm.LookupAttribute<"account" | "contact" | "systemuser">;
      get(name: "statecode"): Xrm.OptionSetAttribute<recurringappointmentmaster_statecode>;
      get(name: "subject"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "description"): Xrm.StringControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_prioritycode"): Xrm.OptionSetControl<recurringappointmentmaster_prioritycode>;
      get(name: "header_statecode"): Xrm.OptionSetControl<recurringappointmentmaster_statecode>;
      get(name: "location"): Xrm.StringControl;
      get(name: "optionalattendees"): Xrm.LookupControl<"account" | "contact" | "systemuser">;
      get(name: "regardingobjectid"): Xrm.LookupControl<"account" | "contact" | "knowledgearticle" | "knowledgebaserecord">;
      get(name: "requiredattendees"): Xrm.LookupControl<"account" | "contact" | "systemuser">;
      get(name: "subject"): Xrm.StringControl;
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
  interface RecurringAppointment extends Xrm.PageBase<RecurringAppointment.Attributes,RecurringAppointment.Tabs,RecurringAppointment.Controls> {
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "location"): Xrm.Attribute<string>;
    getAttribute(attributeName: "optionalattendees"): Xrm.LookupAttribute<"account" | "contact" | "systemuser">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "prioritycode"): Xrm.OptionSetAttribute<recurringappointmentmaster_prioritycode>;
    getAttribute(attributeName: "regardingobjectid"): Xrm.LookupAttribute<"account" | "contact" | "knowledgearticle" | "knowledgebaserecord">;
    getAttribute(attributeName: "requiredattendees"): Xrm.LookupAttribute<"account" | "contact" | "systemuser">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<recurringappointmentmaster_statecode>;
    getAttribute(attributeName: "subject"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_prioritycode"): Xrm.OptionSetControl<recurringappointmentmaster_prioritycode>;
    getControl(controlName: "header_statecode"): Xrm.OptionSetControl<recurringappointmentmaster_statecode>;
    getControl(controlName: "location"): Xrm.StringControl;
    getControl(controlName: "optionalattendees"): Xrm.LookupControl<"account" | "contact" | "systemuser">;
    getControl(controlName: "regardingobjectid"): Xrm.LookupControl<"account" | "contact" | "knowledgearticle" | "knowledgebaserecord">;
    getControl(controlName: "requiredattendees"): Xrm.LookupControl<"account" | "contact" | "systemuser">;
    getControl(controlName: "subject"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
