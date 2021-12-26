declare namespace Form.pc_bankaccount.Main {
  namespace Information {
    namespace Tabs {
      interface _1f2d5c2ec825497d946d06c2f0cccc14 extends Xrm.SectionCollectionBase {
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "modifiedon"): Xrm.DateAttribute;
      get(name: "pc_lastimportedtransactiondate"): Xrm.DateAttribute;
      get(name: "pc_name"): Xrm.Attribute<string>;
      get(name: "pc_transactionimporterror"): Xrm.Attribute<string>;
      get(name: "pc_transactionimportfile"): Xrm.Attribute<any>;
      get(name: "pc_transactionimportstatus"): Xrm.OptionSetAttribute<pc_transactionimportstatus>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "modifiedon"): Xrm.DateControl;
      get(name: "pc_lastimportedtransactiondate"): Xrm.DateControl;
      get(name: "pc_name"): Xrm.StringControl;
      get(name: "pc_transactionimporterror"): Xrm.StringControl;
      get(name: "pc_transactionimportfile"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "pc_transactionimportstatus"): Xrm.OptionSetControl<pc_transactionimportstatus>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{1f2d5c2e-c825-497d-946d-06c2f0cccc14}"): Xrm.PageTab<Tabs._1f2d5c2ec825497d946d06c2f0cccc14>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "modifiedon"): Xrm.DateAttribute;
    getAttribute(attributeName: "pc_lastimportedtransactiondate"): Xrm.DateAttribute;
    getAttribute(attributeName: "pc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "pc_transactionimporterror"): Xrm.Attribute<string>;
    getAttribute(attributeName: "pc_transactionimportfile"): Xrm.Attribute<any>;
    getAttribute(attributeName: "pc_transactionimportstatus"): Xrm.OptionSetAttribute<pc_transactionimportstatus>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "modifiedon"): Xrm.DateControl;
    getControl(controlName: "pc_lastimportedtransactiondate"): Xrm.DateControl;
    getControl(controlName: "pc_name"): Xrm.StringControl;
    getControl(controlName: "pc_transactionimporterror"): Xrm.StringControl;
    getControl(controlName: "pc_transactionimportfile"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "pc_transactionimportstatus"): Xrm.OptionSetControl<pc_transactionimportstatus>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
