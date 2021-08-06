declare namespace Form.team.Main {
  namespace Team {
    namespace Tabs {
      interface general extends Xrm.SectionCollectionBase {
        get(name: "Description"): Xrm.PageSection;
        get(name: "General"): Xrm.PageSection;
        get(name: "TeamMembers"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "administratorid"): Xrm.LookupAttribute<"systemuser">;
      get(name: "azureactivedirectoryobjectid"): Xrm.Attribute<string>;
      get(name: "businessunitid"): Xrm.LookupAttribute<"businessunit">;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "membershiptype"): Xrm.OptionSetAttribute<team_membershiptype>;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "queueid"): Xrm.LookupAttribute<"queue">;
      get(name: "teamtype"): Xrm.OptionSetAttribute<team_type>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "Members"): Xrm.SubGridControl<"systemuser">;
      get(name: "administratorid"): Xrm.LookupControl<"systemuser">;
      get(name: "azureactivedirectoryobjectid"): Xrm.StringControl;
      get(name: "businessunitid"): Xrm.LookupControl<"businessunit">;
      get(name: "description"): Xrm.StringControl;
      get(name: "header_queueid"): Xrm.LookupControl<"queue">;
      get(name: "membershiptype"): Xrm.OptionSetControl<team_membershiptype>;
      get(name: "name"): Xrm.StringControl;
      get(name: "teamtype"): Xrm.OptionSetControl<team_type>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "general"): Xrm.PageTab<Tabs.general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Team extends Xrm.PageBase<Team.Attributes,Team.Tabs,Team.Controls> {
    getAttribute(attributeName: "administratorid"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "azureactivedirectoryobjectid"): Xrm.Attribute<string>;
    getAttribute(attributeName: "businessunitid"): Xrm.LookupAttribute<"businessunit">;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "membershiptype"): Xrm.OptionSetAttribute<team_membershiptype>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "queueid"): Xrm.LookupAttribute<"queue">;
    getAttribute(attributeName: "teamtype"): Xrm.OptionSetAttribute<team_type>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "Members"): Xrm.SubGridControl<"systemuser">;
    getControl(controlName: "administratorid"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "azureactivedirectoryobjectid"): Xrm.StringControl;
    getControl(controlName: "businessunitid"): Xrm.LookupControl<"businessunit">;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "header_queueid"): Xrm.LookupControl<"queue">;
    getControl(controlName: "membershiptype"): Xrm.OptionSetControl<team_membershiptype>;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "teamtype"): Xrm.OptionSetControl<team_type>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
