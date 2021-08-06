declare namespace Form.appointment.TaskFlowForm {
  namespace AfterMeeting {
    namespace Tabs {
      interface Step_105 extends Xrm.SectionCollectionBase {
        get(name: "Step_105_section1"): Xrm.PageSection;
        get(name: "Step_105_section2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface Step_19 extends Xrm.SectionCollectionBase {
        get(name: "Step_19_section1"): Xrm.PageSection;
        get(name: "step_2_section2_2"): Xrm.PageSection;
        get(name: "step_2_section3_3"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface Step_39 extends Xrm.SectionCollectionBase {
        get(name: "Step_39_section1"): Xrm.PageSection;
        get(name: "Step_39_section2"): Xrm.PageSection;
        get(name: "Step_39_section3"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface Step_55 extends Xrm.SectionCollectionBase {
        get(name: "Step_55_section1"): Xrm.PageSection;
        get(name: "Step_55_section2"): Xrm.PageSection;
        get(name: "Step_55_section3"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface Step_77 extends Xrm.SectionCollectionBase {
        get(name: "Step_77_section1"): Xrm.PageSection;
        get(name: "Step_77_section2"): Xrm.PageSection;
        get(name: "Step_77_section3"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface step_2 extends Xrm.SectionCollectionBase {
        get(name: "step_2_section1"): Xrm.PageSection;
        get(name: "step_2_section2"): Xrm.PageSection;
        get(name: "step_2_section3"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "3b7a919d-1026-8192-2002-1e661ebc5186_back"): Xrm.Attribute<any>;
      get(name: "3b7a919d-1026-8192-2002-1e661ebc5186_next"): Xrm.Attribute<any>;
      get(name: "4287b58e-3ad0-a041-301b-1e16babd016a_back"): Xrm.Attribute<any>;
      get(name: "4287b58e-3ad0-a041-301b-1e16babd016a_next"): Xrm.Attribute<any>;
      get(name: "7d07e69e-2ccc-d0b3-8c99-6607691d1d08_back"): Xrm.Attribute<any>;
      get(name: "7d07e69e-2ccc-d0b3-8c99-6607691d1d08_next"): Xrm.Attribute<any>;
      get(name: "7e7288cc-d628-b81c-da38-ed2b33c5c86e_back"): Xrm.Attribute<any>;
      get(name: "7e7288cc-d628-b81c-da38-ed2b33c5c86e_next"): Xrm.Attribute<any>;
      get(name: "aef4ae7d-1d23-445c-a685-f99933e81b5a_next"): Xrm.Attribute<any>;
      get(name: "birthdate"): Xrm.DateAttribute;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "e575e2e6-5c66-0528-1de1-968159bdc8a8_back"): Xrm.Attribute<any>;
      get(name: "e575e2e6-5c66-0528-1de1-968159bdc8a8_next"): Xrm.Attribute<any>;
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<number>;
      get(name: "firstname"): Xrm.Attribute<string>;
      get(name: "lastname"): Xrm.Attribute<string>;
      get(name: "location"): Xrm.Attribute<string>;
      get(name: "mobilephone"): Xrm.Attribute<string>;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "optionalattendees"): Xrm.LookupAttribute<"account" | "contact" | "knowledgearticle" | "queue" | "systemuser" | "unresolvedaddress">;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"accounts">;
      get(name: "parentcustomerid"): Xrm.LookupAttribute<"contacts">;
      get(name: "primarycontactid"): Xrm.LookupAttribute<"accounts">;
      get(name: "regardingobjectid"): Xrm.LookupAttribute<"account" | "contact" | "knowledgearticle" | "knowledgebaserecord">;
      get(name: "requiredattendees"): Xrm.LookupAttribute<"account" | "contact" | "knowledgearticle" | "queue" | "systemuser" | "unresolvedaddress">;
      get(name: "scheduledend"): Xrm.DateAttribute;
      get(name: "scheduledstart"): Xrm.DateAttribute;
      get(name: "spousesname"): Xrm.Attribute<string>;
      get(name: "subject"): Xrm.Attribute<string>;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "websiteurl"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "3b7a919d-1026-8192-2002-1e661ebc5186_back"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "3b7a919d-1026-8192-2002-1e661ebc5186_next"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "4287b58e-3ad0-a041-301b-1e16babd016a_back"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "4287b58e-3ad0-a041-301b-1e16babd016a_next"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "7d07e69e-2ccc-d0b3-8c99-6607691d1d08_back"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "7d07e69e-2ccc-d0b3-8c99-6607691d1d08_next"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "7e7288cc-d628-b81c-da38-ed2b33c5c86e_back"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "7e7288cc-d628-b81c-da38-ed2b33c5c86e_next"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "Account_Appointments:description"): Xrm.StringControl;
      get(name: "Account_Appointments:name"): Xrm.StringControl;
      get(name: "Account_Appointments:parentaccountid"): Xrm.LookupControl<"accounts">;
      get(name: "Account_Appointments:primarycontactid"): Xrm.LookupControl<"accounts">;
      get(name: "Account_Appointments:telephone1"): Xrm.StringControl;
      get(name: "Account_Appointments:websiteurl"): Xrm.StringControl;
      get(name: "Contact_Appointments:birthdate"): Xrm.DateControl;
      get(name: "Contact_Appointments:description"): Xrm.StringControl;
      get(name: "Contact_Appointments:emailaddress1"): Xrm.StringControl;
      get(name: "Contact_Appointments:familystatuscode"): Xrm.OptionSetControl<number>;
      get(name: "Contact_Appointments:firstname"): Xrm.StringControl;
      get(name: "Contact_Appointments:lastname"): Xrm.StringControl;
      get(name: "Contact_Appointments:mobilephone"): Xrm.StringControl;
      get(name: "Contact_Appointments:parentcustomerid"): Xrm.LookupControl<"contacts">;
      get(name: "Contact_Appointments:spousesname"): Xrm.StringControl;
      get(name: "Contact_Appointments:telephone1"): Xrm.StringControl;
      get(name: "aef4ae7d-1d23-445c-a685-f99933e81b5a_next"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "description"): Xrm.StringControl;
      get(name: "e575e2e6-5c66-0528-1de1-968159bdc8a8_back"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "e575e2e6-5c66-0528-1de1-968159bdc8a8_next"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "location"): Xrm.StringControl;
      get(name: "optionalattendees"): Xrm.LookupControl<"account" | "contact" | "knowledgearticle" | "queue" | "systemuser" | "unresolvedaddress">;
      get(name: "regardingobjectid"): Xrm.LookupControl<"account" | "contact" | "knowledgearticle" | "knowledgebaserecord">;
      get(name: "requiredattendees"): Xrm.LookupControl<"account" | "contact" | "knowledgearticle" | "queue" | "systemuser" | "unresolvedaddress">;
      get(name: "scheduledend"): Xrm.DateControl;
      get(name: "scheduledstart"): Xrm.DateControl;
      get(name: "subject"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "Step_105"): Xrm.PageTab<Tabs.Step_105>;
      get(name: "Step_19"): Xrm.PageTab<Tabs.Step_19>;
      get(name: "Step_39"): Xrm.PageTab<Tabs.Step_39>;
      get(name: "Step_55"): Xrm.PageTab<Tabs.Step_55>;
      get(name: "Step_77"): Xrm.PageTab<Tabs.Step_77>;
      get(name: "step_2"): Xrm.PageTab<Tabs.step_2>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface AfterMeeting extends Xrm.PageBase<AfterMeeting.Attributes,AfterMeeting.Tabs,AfterMeeting.Controls> {
    getAttribute(attributeName: "3b7a919d-1026-8192-2002-1e661ebc5186_back"): Xrm.Attribute<any>;
    getAttribute(attributeName: "3b7a919d-1026-8192-2002-1e661ebc5186_next"): Xrm.Attribute<any>;
    getAttribute(attributeName: "4287b58e-3ad0-a041-301b-1e16babd016a_back"): Xrm.Attribute<any>;
    getAttribute(attributeName: "4287b58e-3ad0-a041-301b-1e16babd016a_next"): Xrm.Attribute<any>;
    getAttribute(attributeName: "7d07e69e-2ccc-d0b3-8c99-6607691d1d08_back"): Xrm.Attribute<any>;
    getAttribute(attributeName: "7d07e69e-2ccc-d0b3-8c99-6607691d1d08_next"): Xrm.Attribute<any>;
    getAttribute(attributeName: "7e7288cc-d628-b81c-da38-ed2b33c5c86e_back"): Xrm.Attribute<any>;
    getAttribute(attributeName: "7e7288cc-d628-b81c-da38-ed2b33c5c86e_next"): Xrm.Attribute<any>;
    getAttribute(attributeName: "aef4ae7d-1d23-445c-a685-f99933e81b5a_next"): Xrm.Attribute<any>;
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "e575e2e6-5c66-0528-1de1-968159bdc8a8_back"): Xrm.Attribute<any>;
    getAttribute(attributeName: "e575e2e6-5c66-0528-1de1-968159bdc8a8_next"): Xrm.Attribute<any>;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<number>;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "location"): Xrm.Attribute<string>;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "optionalattendees"): Xrm.LookupAttribute<"account" | "contact" | "knowledgearticle" | "queue" | "systemuser" | "unresolvedaddress">;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"accounts">;
    getAttribute(attributeName: "parentcustomerid"): Xrm.LookupAttribute<"contacts">;
    getAttribute(attributeName: "primarycontactid"): Xrm.LookupAttribute<"accounts">;
    getAttribute(attributeName: "regardingobjectid"): Xrm.LookupAttribute<"account" | "contact" | "knowledgearticle" | "knowledgebaserecord">;
    getAttribute(attributeName: "requiredattendees"): Xrm.LookupAttribute<"account" | "contact" | "knowledgearticle" | "queue" | "systemuser" | "unresolvedaddress">;
    getAttribute(attributeName: "scheduledend"): Xrm.DateAttribute;
    getAttribute(attributeName: "scheduledstart"): Xrm.DateAttribute;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "subject"): Xrm.Attribute<string>;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "3b7a919d-1026-8192-2002-1e661ebc5186_back"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "3b7a919d-1026-8192-2002-1e661ebc5186_next"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "4287b58e-3ad0-a041-301b-1e16babd016a_back"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "4287b58e-3ad0-a041-301b-1e16babd016a_next"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "7d07e69e-2ccc-d0b3-8c99-6607691d1d08_back"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "7d07e69e-2ccc-d0b3-8c99-6607691d1d08_next"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "7e7288cc-d628-b81c-da38-ed2b33c5c86e_back"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "7e7288cc-d628-b81c-da38-ed2b33c5c86e_next"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "Account_Appointments:description"): Xrm.StringControl;
    getControl(controlName: "Account_Appointments:name"): Xrm.StringControl;
    getControl(controlName: "Account_Appointments:parentaccountid"): Xrm.LookupControl<"accounts">;
    getControl(controlName: "Account_Appointments:primarycontactid"): Xrm.LookupControl<"accounts">;
    getControl(controlName: "Account_Appointments:telephone1"): Xrm.StringControl;
    getControl(controlName: "Account_Appointments:websiteurl"): Xrm.StringControl;
    getControl(controlName: "Contact_Appointments:birthdate"): Xrm.DateControl;
    getControl(controlName: "Contact_Appointments:description"): Xrm.StringControl;
    getControl(controlName: "Contact_Appointments:emailaddress1"): Xrm.StringControl;
    getControl(controlName: "Contact_Appointments:familystatuscode"): Xrm.OptionSetControl<number>;
    getControl(controlName: "Contact_Appointments:firstname"): Xrm.StringControl;
    getControl(controlName: "Contact_Appointments:lastname"): Xrm.StringControl;
    getControl(controlName: "Contact_Appointments:mobilephone"): Xrm.StringControl;
    getControl(controlName: "Contact_Appointments:parentcustomerid"): Xrm.LookupControl<"contacts">;
    getControl(controlName: "Contact_Appointments:spousesname"): Xrm.StringControl;
    getControl(controlName: "Contact_Appointments:telephone1"): Xrm.StringControl;
    getControl(controlName: "aef4ae7d-1d23-445c-a685-f99933e81b5a_next"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "e575e2e6-5c66-0528-1de1-968159bdc8a8_back"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "e575e2e6-5c66-0528-1de1-968159bdc8a8_next"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "location"): Xrm.StringControl;
    getControl(controlName: "optionalattendees"): Xrm.LookupControl<"account" | "contact" | "knowledgearticle" | "queue" | "systemuser" | "unresolvedaddress">;
    getControl(controlName: "regardingobjectid"): Xrm.LookupControl<"account" | "contact" | "knowledgearticle" | "knowledgebaserecord">;
    getControl(controlName: "requiredattendees"): Xrm.LookupControl<"account" | "contact" | "knowledgearticle" | "queue" | "systemuser" | "unresolvedaddress">;
    getControl(controlName: "scheduledend"): Xrm.DateControl;
    getControl(controlName: "scheduledstart"): Xrm.DateControl;
    getControl(controlName: "subject"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
