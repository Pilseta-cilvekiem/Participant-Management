declare namespace Form.appointment.Quick {
  namespace AppointmentReferencePanel {
    namespace Tabs {
      interface tab_1 extends Xrm.SectionCollectionBase {
        get(name: "tab_1_column_1_section_1"): Xrm.PageSection;
        get(name: "tab_1_section_2"): Xrm.PageSection;
        get(name: "tab_1_section_4"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "prioritycode"): Xrm.OptionSetAttribute<appointment_prioritycode>;
      get(name: "regardingobjectid"): Xrm.LookupAttribute<"account" | "contact" | "knowledgearticle" | "knowledgebaserecord">;
      get(name: "requiredattendees"): Xrm.LookupAttribute<"account" | "contact" | "knowledgearticle" | "queue" | "systemuser" | "unresolvedaddress">;
      get(name: "scheduleddurationminutes"): Xrm.NumberAttribute;
      get(name: "scheduledend"): Xrm.DateAttribute;
      get(name: "scheduledstart"): Xrm.DateAttribute;
      get(name: "statecode"): Xrm.OptionSetAttribute<appointment_statecode>;
      get(name: "subject"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "description"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "prioritycode"): Xrm.OptionSetControl<appointment_prioritycode>;
      get(name: "regardingobjectid"): Xrm.LookupControl<"account" | "contact" | "knowledgearticle" | "knowledgebaserecord">;
      get(name: "requiredattendees"): Xrm.LookupControl<"account" | "contact" | "knowledgearticle" | "queue" | "systemuser" | "unresolvedaddress">;
      get(name: "scheduleddurationminutes"): Xrm.NumberControl;
      get(name: "scheduledend"): Xrm.DateControl;
      get(name: "scheduledend1"): Xrm.DateControl;
      get(name: "scheduledstart"): Xrm.DateControl;
      get(name: "statecode"): Xrm.OptionSetControl<appointment_statecode>;
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
  interface AppointmentReferencePanel extends Xrm.PageBase<AppointmentReferencePanel.Attributes,AppointmentReferencePanel.Tabs,AppointmentReferencePanel.Controls> {
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "prioritycode"): Xrm.OptionSetAttribute<appointment_prioritycode>;
    getAttribute(attributeName: "regardingobjectid"): Xrm.LookupAttribute<"account" | "contact" | "knowledgearticle" | "knowledgebaserecord">;
    getAttribute(attributeName: "requiredattendees"): Xrm.LookupAttribute<"account" | "contact" | "knowledgearticle" | "queue" | "systemuser" | "unresolvedaddress">;
    getAttribute(attributeName: "scheduleddurationminutes"): Xrm.NumberAttribute;
    getAttribute(attributeName: "scheduledend"): Xrm.DateAttribute;
    getAttribute(attributeName: "scheduledstart"): Xrm.DateAttribute;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<appointment_statecode>;
    getAttribute(attributeName: "subject"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "prioritycode"): Xrm.OptionSetControl<appointment_prioritycode>;
    getControl(controlName: "regardingobjectid"): Xrm.LookupControl<"account" | "contact" | "knowledgearticle" | "knowledgebaserecord">;
    getControl(controlName: "requiredattendees"): Xrm.LookupControl<"account" | "contact" | "knowledgearticle" | "queue" | "systemuser" | "unresolvedaddress">;
    getControl(controlName: "scheduleddurationminutes"): Xrm.NumberControl;
    getControl(controlName: "scheduledend"): Xrm.DateControl;
    getControl(controlName: "scheduledend1"): Xrm.DateControl;
    getControl(controlName: "scheduledstart"): Xrm.DateControl;
    getControl(controlName: "statecode"): Xrm.OptionSetControl<appointment_statecode>;
    getControl(controlName: "subject"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
