declare namespace Form.pc_participation.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "pc_contact"): Xrm.LookupAttribute<"contact">;
      get(name: "pc_from"): Xrm.DateAttribute;
      get(name: "pc_level"): Xrm.OptionSetAttribute<pc_participationlevel>;
      get(name: "pc_name"): Xrm.Attribute<string>;
      get(name: "pc_till"): Xrm.DateAttribute;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "pc_contact"): Xrm.LookupControl<"contact">;
      get(name: "pc_from"): Xrm.DateControl;
      get(name: "pc_level"): Xrm.OptionSetControl<pc_participationlevel>;
      get(name: "pc_name"): Xrm.StringControl;
      get(name: "pc_till"): Xrm.DateControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "pc_contact"): Xrm.LookupAttribute<"contact">;
    getAttribute(attributeName: "pc_from"): Xrm.DateAttribute;
    getAttribute(attributeName: "pc_level"): Xrm.OptionSetAttribute<pc_participationlevel>;
    getAttribute(attributeName: "pc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "pc_till"): Xrm.DateAttribute;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "pc_contact"): Xrm.LookupControl<"contact">;
    getControl(controlName: "pc_from"): Xrm.DateControl;
    getControl(controlName: "pc_level"): Xrm.OptionSetControl<pc_participationlevel>;
    getControl(controlName: "pc_name"): Xrm.StringControl;
    getControl(controlName: "pc_till"): Xrm.DateControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
