declare namespace Form.pc_payment.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "pc_amount"): Xrm.NumberAttribute;
      get(name: "pc_contact"): Xrm.LookupAttribute<"contact">;
      get(name: "pc_date"): Xrm.DateAttribute;
      get(name: "pc_name"): Xrm.Attribute<string>;
      get(name: "pc_transaction"): Xrm.LookupAttribute<"pc_transaction">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "pc_amount"): Xrm.NumberControl;
      get(name: "pc_contact"): Xrm.LookupControl<"contact">;
      get(name: "pc_date"): Xrm.DateControl;
      get(name: "pc_name"): Xrm.StringControl;
      get(name: "pc_transaction"): Xrm.LookupControl<"pc_transaction">;
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
    getAttribute(attributeName: "pc_amount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "pc_contact"): Xrm.LookupAttribute<"contact">;
    getAttribute(attributeName: "pc_date"): Xrm.DateAttribute;
    getAttribute(attributeName: "pc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "pc_transaction"): Xrm.LookupAttribute<"pc_transaction">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "pc_amount"): Xrm.NumberControl;
    getControl(controlName: "pc_contact"): Xrm.LookupControl<"contact">;
    getControl(controlName: "pc_date"): Xrm.DateControl;
    getControl(controlName: "pc_name"): Xrm.StringControl;
    getControl(controlName: "pc_transaction"): Xrm.LookupControl<"pc_transaction">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
