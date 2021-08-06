declare namespace Form.appointment.Main {
  namespace Wizard {
    namespace Tabs {
      interface appointment extends Xrm.SectionCollectionBase {
        get(name: "Hidden Section"): Xrm.PageSection;
        get(name: "appointment description"): Xrm.PageSection;
        get(name: "attachments"): Xrm.PageSection;
        get(name: "general information"): Xrm.PageSection;
        get(name: "scheduling information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "isalldayevent"): Xrm.OptionSetAttribute<boolean>;
      get(name: "location"): Xrm.Attribute<string>;
      get(name: "optionalattendees"): Xrm.LookupAttribute<"account" | "contact" | "knowledgearticle" | "queue" | "systemuser" | "unresolvedaddress">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "prioritycode"): Xrm.OptionSetAttribute<appointment_prioritycode>;
      get(name: "regardingobjectid"): Xrm.LookupAttribute<"account" | "contact" | "knowledgearticle" | "knowledgebaserecord">;
      get(name: "requiredattendees"): Xrm.LookupAttribute<"account" | "contact" | "knowledgearticle" | "queue" | "systemuser" | "unresolvedaddress">;
      get(name: "scheduleddurationminutes"): Xrm.NumberAttribute;
      get(name: "scheduledend"): Xrm.DateAttribute;
      get(name: "scheduledstart"): Xrm.DateAttribute;
      get(name: "statuscode"): Xrm.OptionSetAttribute<appointment_statuscode>;
      get(name: "subject"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "attachmentsGrid"): Xrm.SubGridControl<"activitymimeattachment">;
      get(name: "description"): Xrm.StringControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_prioritycode"): Xrm.OptionSetControl<appointment_prioritycode>;
      get(name: "isalldayevent"): Xrm.OptionSetControl<boolean>;
      get(name: "location"): Xrm.StringControl;
      get(name: "optionalattendees"): Xrm.LookupControl<"account" | "contact" | "knowledgearticle" | "queue" | "systemuser" | "unresolvedaddress">;
      get(name: "regardingobjectid"): Xrm.LookupControl<"account" | "contact" | "knowledgearticle" | "knowledgebaserecord">;
      get(name: "requiredattendees"): Xrm.LookupControl<"account" | "contact" | "knowledgearticle" | "queue" | "systemuser" | "unresolvedaddress">;
      get(name: "scheduleddurationminutes"): Xrm.NumberControl;
      get(name: "scheduledend"): Xrm.DateControl;
      get(name: "scheduledstart"): Xrm.DateControl;
      get(name: "statuscode"): Xrm.OptionSetControl<appointment_statuscode>;
      get(name: "subject"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "appointment"): Xrm.PageTab<Tabs.appointment>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Wizard extends Xrm.PageBase<Wizard.Attributes,Wizard.Tabs,Wizard.Controls> {
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "isalldayevent"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "location"): Xrm.Attribute<string>;
    getAttribute(attributeName: "optionalattendees"): Xrm.LookupAttribute<"account" | "contact" | "knowledgearticle" | "queue" | "systemuser" | "unresolvedaddress">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "prioritycode"): Xrm.OptionSetAttribute<appointment_prioritycode>;
    getAttribute(attributeName: "regardingobjectid"): Xrm.LookupAttribute<"account" | "contact" | "knowledgearticle" | "knowledgebaserecord">;
    getAttribute(attributeName: "requiredattendees"): Xrm.LookupAttribute<"account" | "contact" | "knowledgearticle" | "queue" | "systemuser" | "unresolvedaddress">;
    getAttribute(attributeName: "scheduleddurationminutes"): Xrm.NumberAttribute;
    getAttribute(attributeName: "scheduledend"): Xrm.DateAttribute;
    getAttribute(attributeName: "scheduledstart"): Xrm.DateAttribute;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<appointment_statuscode>;
    getAttribute(attributeName: "subject"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "attachmentsGrid"): Xrm.SubGridControl<"activitymimeattachment">;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_prioritycode"): Xrm.OptionSetControl<appointment_prioritycode>;
    getControl(controlName: "isalldayevent"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "location"): Xrm.StringControl;
    getControl(controlName: "optionalattendees"): Xrm.LookupControl<"account" | "contact" | "knowledgearticle" | "queue" | "systemuser" | "unresolvedaddress">;
    getControl(controlName: "regardingobjectid"): Xrm.LookupControl<"account" | "contact" | "knowledgearticle" | "knowledgebaserecord">;
    getControl(controlName: "requiredattendees"): Xrm.LookupControl<"account" | "contact" | "knowledgearticle" | "queue" | "systemuser" | "unresolvedaddress">;
    getControl(controlName: "scheduleddurationminutes"): Xrm.NumberControl;
    getControl(controlName: "scheduledend"): Xrm.DateControl;
    getControl(controlName: "scheduledstart"): Xrm.DateControl;
    getControl(controlName: "statuscode"): Xrm.OptionSetControl<appointment_statuscode>;
    getControl(controlName: "subject"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
