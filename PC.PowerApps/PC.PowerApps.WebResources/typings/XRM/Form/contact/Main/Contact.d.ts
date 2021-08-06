declare namespace Form.contact.Main {
  namespace Contact {
    namespace Tabs {
      interface SUMMARY_TAB extends Xrm.SectionCollectionBase {
        get(name: "CONTACT_INFORMATION"): Xrm.PageSection;
        get(name: "SOCIAL_PANE_TAB"): Xrm.PageSection;
        get(name: "SUMMARY_TAB_section_6"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_2 extends Xrm.SectionCollectionBase {
        get(name: "tab_2_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_3 extends Xrm.SectionCollectionBase {
        get(name: "tab_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_4 extends Xrm.SectionCollectionBase {
        get(name: "tab_4_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "address1_city"): Xrm.Attribute<string>;
      get(name: "address1_country"): Xrm.Attribute<string>;
      get(name: "address1_county"): Xrm.Attribute<string>;
      get(name: "address1_line1"): Xrm.Attribute<string>;
      get(name: "address1_postalcode"): Xrm.Attribute<string>;
      get(name: "address1_stateorprovince"): Xrm.Attribute<string>;
      get(name: "birthdate"): Xrm.DateAttribute | null;
      get(name: "createdby"): Xrm.LookupAttribute<"systemuser">;
      get(name: "createdon"): Xrm.DateAttribute;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
      get(name: "firstname"): Xrm.Attribute<string> | null;
      get(name: "fullname"): Xrm.Attribute<string> | null;
      get(name: "industrycode"): Xrm.OptionSetAttribute<number> | null;
      get(name: "lastname"): Xrm.Attribute<string> | null;
      get(name: "middlename"): Xrm.Attribute<string> | null;
      get(name: "mobilephone"): Xrm.Attribute<string>;
      get(name: "name"): Xrm.Attribute<string> | null;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "pc_debt"): Xrm.NumberAttribute;
      get(name: "pc_isinvitedtoslack"): Xrm.OptionSetAttribute<boolean>;
      get(name: "pc_lastpaymentdate"): Xrm.DateAttribute;
      get(name: "pc_neighbourhood"): Xrm.Attribute<string>;
      get(name: "pc_paidparticipationfee"): Xrm.NumberAttribute;
      get(name: "pc_participantfrom"): Xrm.DateAttribute;
      get(name: "pc_participationlevel"): Xrm.OptionSetAttribute<pc_participationlevel>;
      get(name: "pc_personalidentitynumber"): Xrm.Attribute<string>;
      get(name: "pc_requiredparticipationfee"): Xrm.NumberAttribute;
      get(name: "pc_sentdebtreminderon"): Xrm.DateAttribute;
      get(name: "pc_sentsupporterwelcomeemailon"): Xrm.DateAttribute;
      get(name: "pc_welcomemeetingstatus"): Xrm.OptionSetAttribute<pc_welcomemeetingstatus>;
      get(name: "pc_wishestobeactive"): Xrm.OptionSetAttribute<boolean>;
      get(name: "spousesname"): Xrm.Attribute<string> | null;
      get(name: "telephone1"): Xrm.Attribute<string> | null;
      get(name: "websiteurl"): Xrm.Attribute<string> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "Subgrid_1"): Xrm.SubGridControl<"pc_participation">;
      get(name: "Subgrid_2"): Xrm.SubGridControl<"pc_payment">;
      get(name: "Subgrid_3"): Xrm.SubGridControl<"pc_participationfeeexemption">;
      get(name: "address1_city"): Xrm.StringControl;
      get(name: "address1_country"): Xrm.StringControl;
      get(name: "address1_county"): Xrm.StringControl;
      get(name: "address1_line1"): Xrm.StringControl;
      get(name: "address1_postalcode"): Xrm.StringControl;
      get(name: "address1_stateorprovince"): Xrm.StringControl;
      get(name: "createdby"): Xrm.LookupControl<"systemuser">;
      get(name: "createdon"): Xrm.DateControl;
      get(name: "description"): Xrm.StringControl;
      get(name: "emailaddress1"): Xrm.StringControl;
      get(name: "fullname"): Xrm.StringControl | null;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_process_birthdate"): Xrm.DateControl | null;
      get(name: "header_process_emailaddress1"): Xrm.StringControl | null;
      get(name: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
      get(name: "header_process_firstname"): Xrm.StringControl | null;
      get(name: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
      get(name: "header_process_lastname"): Xrm.StringControl | null;
      get(name: "header_process_middlename"): Xrm.StringControl | null;
      get(name: "header_process_mobilephone"): Xrm.StringControl | null;
      get(name: "header_process_name"): Xrm.StringControl | null;
      get(name: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_spousesname"): Xrm.StringControl | null;
      get(name: "header_process_telephone1"): Xrm.StringControl | null;
      get(name: "header_process_websiteurl"): Xrm.StringControl | null;
      get(name: "mapcontrol"): Xrm.BaseControl;
      get(name: "mobilephone"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "pc_debt"): Xrm.NumberControl;
      get(name: "pc_isinvitedtoslack"): Xrm.OptionSetControl<boolean>;
      get(name: "pc_lastpaymentdate"): Xrm.DateControl;
      get(name: "pc_neighbourhood"): Xrm.StringControl;
      get(name: "pc_paidparticipationfee"): Xrm.NumberControl;
      get(name: "pc_participantfrom"): Xrm.DateControl;
      get(name: "pc_participationlevel"): Xrm.OptionSetControl<pc_participationlevel>;
      get(name: "pc_personalidentitynumber"): Xrm.StringControl;
      get(name: "pc_requiredparticipationfee"): Xrm.NumberControl;
      get(name: "pc_sentdebtreminderon"): Xrm.DateControl;
      get(name: "pc_sentsupporterwelcomeemailon"): Xrm.DateControl;
      get(name: "pc_welcomemeetingstatus"): Xrm.OptionSetControl<pc_welcomemeetingstatus>;
      get(name: "pc_wishestobeactive"): Xrm.OptionSetControl<boolean>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "SUMMARY_TAB"): Xrm.PageTab<Tabs.SUMMARY_TAB>;
      get(name: "tab_2"): Xrm.PageTab<Tabs.tab_2>;
      get(name: "tab_3"): Xrm.PageTab<Tabs.tab_3>;
      get(name: "tab_4"): Xrm.PageTab<Tabs.tab_4>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Contact extends Xrm.PageBase<Contact.Attributes,Contact.Tabs,Contact.Controls> {
    getAttribute(attributeName: "address1_city"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_country"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_county"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_line1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_postalcode"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_stateorprovince"): Xrm.Attribute<string>;
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "createdby"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "createdon"): Xrm.DateAttribute;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "fullname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "middlename"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "pc_debt"): Xrm.NumberAttribute;
    getAttribute(attributeName: "pc_isinvitedtoslack"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "pc_lastpaymentdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "pc_neighbourhood"): Xrm.Attribute<string>;
    getAttribute(attributeName: "pc_paidparticipationfee"): Xrm.NumberAttribute;
    getAttribute(attributeName: "pc_participantfrom"): Xrm.DateAttribute;
    getAttribute(attributeName: "pc_participationlevel"): Xrm.OptionSetAttribute<pc_participationlevel>;
    getAttribute(attributeName: "pc_personalidentitynumber"): Xrm.Attribute<string>;
    getAttribute(attributeName: "pc_requiredparticipationfee"): Xrm.NumberAttribute;
    getAttribute(attributeName: "pc_sentdebtreminderon"): Xrm.DateAttribute;
    getAttribute(attributeName: "pc_sentsupporterwelcomeemailon"): Xrm.DateAttribute;
    getAttribute(attributeName: "pc_welcomemeetingstatus"): Xrm.OptionSetAttribute<pc_welcomemeetingstatus>;
    getAttribute(attributeName: "pc_wishestobeactive"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "Subgrid_1"): Xrm.SubGridControl<"pc_participation">;
    getControl(controlName: "Subgrid_2"): Xrm.SubGridControl<"pc_payment">;
    getControl(controlName: "Subgrid_3"): Xrm.SubGridControl<"pc_participationfeeexemption">;
    getControl(controlName: "address1_city"): Xrm.StringControl;
    getControl(controlName: "address1_country"): Xrm.StringControl;
    getControl(controlName: "address1_county"): Xrm.StringControl;
    getControl(controlName: "address1_line1"): Xrm.StringControl;
    getControl(controlName: "address1_postalcode"): Xrm.StringControl;
    getControl(controlName: "address1_stateorprovince"): Xrm.StringControl;
    getControl(controlName: "createdby"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "createdon"): Xrm.DateControl;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
    getControl(controlName: "fullname"): Xrm.StringControl | null;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_process_birthdate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_emailaddress1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
    getControl(controlName: "header_process_firstname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
    getControl(controlName: "header_process_lastname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_middlename"): Xrm.StringControl | null;
    getControl(controlName: "header_process_mobilephone"): Xrm.StringControl | null;
    getControl(controlName: "header_process_name"): Xrm.StringControl | null;
    getControl(controlName: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_spousesname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_telephone1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_websiteurl"): Xrm.StringControl | null;
    getControl(controlName: "mapcontrol"): Xrm.BaseControl;
    getControl(controlName: "mobilephone"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "pc_debt"): Xrm.NumberControl;
    getControl(controlName: "pc_isinvitedtoslack"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "pc_lastpaymentdate"): Xrm.DateControl;
    getControl(controlName: "pc_neighbourhood"): Xrm.StringControl;
    getControl(controlName: "pc_paidparticipationfee"): Xrm.NumberControl;
    getControl(controlName: "pc_participantfrom"): Xrm.DateControl;
    getControl(controlName: "pc_participationlevel"): Xrm.OptionSetControl<pc_participationlevel>;
    getControl(controlName: "pc_personalidentitynumber"): Xrm.StringControl;
    getControl(controlName: "pc_requiredparticipationfee"): Xrm.NumberControl;
    getControl(controlName: "pc_sentdebtreminderon"): Xrm.DateControl;
    getControl(controlName: "pc_sentsupporterwelcomeemailon"): Xrm.DateControl;
    getControl(controlName: "pc_welcomemeetingstatus"): Xrm.OptionSetControl<pc_welcomemeetingstatus>;
    getControl(controlName: "pc_wishestobeactive"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
