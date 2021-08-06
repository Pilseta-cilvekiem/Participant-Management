declare namespace Form.pc_settings.Main {
  namespace Information {
    namespace Tabs {
      interface tab_2 extends Xrm.SectionCollectionBase {
        get(name: "tab_2_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "pc_automaticallyprocesstransactions"): Xrm.OptionSetAttribute<boolean>;
      get(name: "pc_emailsender"): Xrm.LookupAttribute<"queue">;
      get(name: "pc_googleadminemail"): Xrm.Attribute<string>;
      get(name: "pc_googleserviceaccountkey"): Xrm.Attribute<string>;
      get(name: "pc_googlesupportergroup"): Xrm.Attribute<string>;
      get(name: "pc_name"): Xrm.Attribute<string>;
      get(name: "pc_nonparticipantfeeregularexpressions"): Xrm.Attribute<string>;
      get(name: "pc_participantfeeregularexpressions"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "pc_automaticallyprocesstransactions"): Xrm.OptionSetControl<boolean>;
      get(name: "pc_emailsender"): Xrm.LookupControl<"queue">;
      get(name: "pc_googleadminemail"): Xrm.StringControl;
      get(name: "pc_googleserviceaccountkey"): Xrm.StringControl;
      get(name: "pc_googlesupportergroup"): Xrm.StringControl;
      get(name: "pc_name"): Xrm.StringControl;
      get(name: "pc_nonparticipantfeeregularexpressions"): Xrm.StringControl;
      get(name: "pc_participantfeeregularexpressions"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_2"): Xrm.PageTab<Tabs.tab_2>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "pc_automaticallyprocesstransactions"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "pc_emailsender"): Xrm.LookupAttribute<"queue">;
    getAttribute(attributeName: "pc_googleadminemail"): Xrm.Attribute<string>;
    getAttribute(attributeName: "pc_googleserviceaccountkey"): Xrm.Attribute<string>;
    getAttribute(attributeName: "pc_googlesupportergroup"): Xrm.Attribute<string>;
    getAttribute(attributeName: "pc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "pc_nonparticipantfeeregularexpressions"): Xrm.Attribute<string>;
    getAttribute(attributeName: "pc_participantfeeregularexpressions"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "pc_automaticallyprocesstransactions"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "pc_emailsender"): Xrm.LookupControl<"queue">;
    getControl(controlName: "pc_googleadminemail"): Xrm.StringControl;
    getControl(controlName: "pc_googleserviceaccountkey"): Xrm.StringControl;
    getControl(controlName: "pc_googlesupportergroup"): Xrm.StringControl;
    getControl(controlName: "pc_name"): Xrm.StringControl;
    getControl(controlName: "pc_nonparticipantfeeregularexpressions"): Xrm.StringControl;
    getControl(controlName: "pc_participantfeeregularexpressions"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
