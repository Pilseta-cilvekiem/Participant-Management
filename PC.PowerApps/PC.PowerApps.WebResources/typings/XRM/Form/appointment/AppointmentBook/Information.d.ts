declare namespace Form.appointment.AppointmentBook {
  namespace Information {
    namespace Tabs {
      interface appointment extends Xrm.SectionCollectionBase {
        get(name: "general information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "location"): Xrm.Attribute<string>;
      get(name: "optionalattendees"): Xrm.LookupAttribute<"account" | "contact" | "knowledgearticle" | "queue" | "systemuser" | "unresolvedaddress">;
      get(name: "requiredattendees"): Xrm.LookupAttribute<"account" | "contact" | "knowledgearticle" | "queue" | "systemuser" | "unresolvedaddress">;
      get(name: "statuscode"): Xrm.OptionSetAttribute<appointment_statuscode>;
      get(name: "subject"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "location"): Xrm.StringControl;
      get(name: "optionalattendees"): Xrm.LookupControl<"account" | "contact" | "knowledgearticle" | "queue" | "systemuser" | "unresolvedaddress">;
      get(name: "requiredattendees"): Xrm.LookupControl<"account" | "contact" | "knowledgearticle" | "queue" | "systemuser" | "unresolvedaddress">;
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
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "location"): Xrm.Attribute<string>;
    getAttribute(attributeName: "optionalattendees"): Xrm.LookupAttribute<"account" | "contact" | "knowledgearticle" | "queue" | "systemuser" | "unresolvedaddress">;
    getAttribute(attributeName: "requiredattendees"): Xrm.LookupAttribute<"account" | "contact" | "knowledgearticle" | "queue" | "systemuser" | "unresolvedaddress">;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<appointment_statuscode>;
    getAttribute(attributeName: "subject"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "location"): Xrm.StringControl;
    getControl(controlName: "optionalattendees"): Xrm.LookupControl<"account" | "contact" | "knowledgearticle" | "queue" | "systemuser" | "unresolvedaddress">;
    getControl(controlName: "requiredattendees"): Xrm.LookupControl<"account" | "contact" | "knowledgearticle" | "queue" | "systemuser" | "unresolvedaddress">;
    getControl(controlName: "statuscode"): Xrm.OptionSetControl<appointment_statuscode>;
    getControl(controlName: "subject"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
