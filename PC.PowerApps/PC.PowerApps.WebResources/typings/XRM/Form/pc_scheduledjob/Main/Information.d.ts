declare namespace Form.pc_scheduledjob.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "createdon"): Xrm.DateAttribute;
      get(name: "pc_completedon"): Xrm.DateAttribute;
      get(name: "pc_error"): Xrm.Attribute<string>;
      get(name: "pc_executeevery"): Xrm.NumberAttribute;
      get(name: "pc_executeon"): Xrm.DateAttribute;
      get(name: "pc_failures"): Xrm.NumberAttribute;
      get(name: "pc_name"): Xrm.Attribute<string>;
      get(name: "pc_parameters"): Xrm.Attribute<string>;
      get(name: "pc_postponeuntil"): Xrm.DateAttribute;
      get(name: "pc_recurrence"): Xrm.OptionSetAttribute<pc_recurrence>;
      get(name: "pc_startedon"): Xrm.DateAttribute;
      get(name: "statuscode"): Xrm.OptionSetAttribute<pc_scheduledjob_statuscode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "createdon"): Xrm.DateControl;
      get(name: "pc_completedon"): Xrm.DateControl;
      get(name: "pc_error"): Xrm.StringControl;
      get(name: "pc_executeevery"): Xrm.NumberControl;
      get(name: "pc_executeon"): Xrm.DateControl;
      get(name: "pc_failures"): Xrm.NumberControl;
      get(name: "pc_name"): Xrm.StringControl;
      get(name: "pc_parameters"): Xrm.StringControl;
      get(name: "pc_postponeuntil"): Xrm.DateControl;
      get(name: "pc_recurrence"): Xrm.OptionSetControl<pc_recurrence>;
      get(name: "pc_startedon"): Xrm.DateControl;
      get(name: "statuscode"): Xrm.OptionSetControl<pc_scheduledjob_statuscode>;
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
    getAttribute(attributeName: "createdon"): Xrm.DateAttribute;
    getAttribute(attributeName: "pc_completedon"): Xrm.DateAttribute;
    getAttribute(attributeName: "pc_error"): Xrm.Attribute<string>;
    getAttribute(attributeName: "pc_executeevery"): Xrm.NumberAttribute;
    getAttribute(attributeName: "pc_executeon"): Xrm.DateAttribute;
    getAttribute(attributeName: "pc_failures"): Xrm.NumberAttribute;
    getAttribute(attributeName: "pc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "pc_parameters"): Xrm.Attribute<string>;
    getAttribute(attributeName: "pc_postponeuntil"): Xrm.DateAttribute;
    getAttribute(attributeName: "pc_recurrence"): Xrm.OptionSetAttribute<pc_recurrence>;
    getAttribute(attributeName: "pc_startedon"): Xrm.DateAttribute;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<pc_scheduledjob_statuscode>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "createdon"): Xrm.DateControl;
    getControl(controlName: "pc_completedon"): Xrm.DateControl;
    getControl(controlName: "pc_error"): Xrm.StringControl;
    getControl(controlName: "pc_executeevery"): Xrm.NumberControl;
    getControl(controlName: "pc_executeon"): Xrm.DateControl;
    getControl(controlName: "pc_failures"): Xrm.NumberControl;
    getControl(controlName: "pc_name"): Xrm.StringControl;
    getControl(controlName: "pc_parameters"): Xrm.StringControl;
    getControl(controlName: "pc_postponeuntil"): Xrm.DateControl;
    getControl(controlName: "pc_recurrence"): Xrm.OptionSetControl<pc_recurrence>;
    getControl(controlName: "pc_startedon"): Xrm.DateControl;
    getControl(controlName: "statuscode"): Xrm.OptionSetControl<pc_scheduledjob_statuscode>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
