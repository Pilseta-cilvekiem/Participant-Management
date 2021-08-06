declare namespace Form.pc_transaction.Main {
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
      get(name: "createdon"): Xrm.DateAttribute;
      get(name: "pc_amount"): Xrm.NumberAttribute;
      get(name: "pc_bankaccount"): Xrm.LookupAttribute<"pc_bankaccount">;
      get(name: "pc_date"): Xrm.DateAttribute;
      get(name: "pc_details"): Xrm.Attribute<string>;
      get(name: "pc_name"): Xrm.Attribute<string>;
      get(name: "pc_nonpaymentamount"): Xrm.NumberAttribute;
      get(name: "pc_payerid"): Xrm.Attribute<string>;
      get(name: "pc_payername"): Xrm.Attribute<string>;
      get(name: "pc_paymenttotalamount"): Xrm.NumberAttribute;
      get(name: "pc_remainingamount"): Xrm.NumberAttribute;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "Subgrid_1"): Xrm.SubGridControl<"pc_payment">;
      get(name: "createdon"): Xrm.DateControl;
      get(name: "pc_amount"): Xrm.NumberControl;
      get(name: "pc_bankaccount"): Xrm.LookupControl<"pc_bankaccount">;
      get(name: "pc_date"): Xrm.DateControl;
      get(name: "pc_details"): Xrm.StringControl;
      get(name: "pc_name"): Xrm.StringControl;
      get(name: "pc_nonpaymentamount"): Xrm.NumberControl;
      get(name: "pc_payerid"): Xrm.StringControl;
      get(name: "pc_payername"): Xrm.StringControl;
      get(name: "pc_paymenttotalamount"): Xrm.NumberControl;
      get(name: "pc_remainingamount"): Xrm.NumberControl;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
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
    getAttribute(attributeName: "createdon"): Xrm.DateAttribute;
    getAttribute(attributeName: "pc_amount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "pc_bankaccount"): Xrm.LookupAttribute<"pc_bankaccount">;
    getAttribute(attributeName: "pc_date"): Xrm.DateAttribute;
    getAttribute(attributeName: "pc_details"): Xrm.Attribute<string>;
    getAttribute(attributeName: "pc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "pc_nonpaymentamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "pc_payerid"): Xrm.Attribute<string>;
    getAttribute(attributeName: "pc_payername"): Xrm.Attribute<string>;
    getAttribute(attributeName: "pc_paymenttotalamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "pc_remainingamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "Subgrid_1"): Xrm.SubGridControl<"pc_payment">;
    getControl(controlName: "createdon"): Xrm.DateControl;
    getControl(controlName: "pc_amount"): Xrm.NumberControl;
    getControl(controlName: "pc_bankaccount"): Xrm.LookupControl<"pc_bankaccount">;
    getControl(controlName: "pc_date"): Xrm.DateControl;
    getControl(controlName: "pc_details"): Xrm.StringControl;
    getControl(controlName: "pc_name"): Xrm.StringControl;
    getControl(controlName: "pc_nonpaymentamount"): Xrm.NumberControl;
    getControl(controlName: "pc_payerid"): Xrm.StringControl;
    getControl(controlName: "pc_payername"): Xrm.StringControl;
    getControl(controlName: "pc_paymenttotalamount"): Xrm.NumberControl;
    getControl(controlName: "pc_remainingamount"): Xrm.NumberControl;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
