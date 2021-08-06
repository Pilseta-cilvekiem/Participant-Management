declare namespace Form.knowledgearticle.Quick {
  namespace RelatedArticles {
    namespace Tabs {
      interface general extends Xrm.SectionCollectionBase {
        get(name: "Articles"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "expirationdate"): Xrm.DateAttribute | null;
      get(name: "expiredreviewoptions"): Xrm.OptionSetAttribute<knowledgearticle_expiredreviewoptions> | null;
      get(name: "keywords"): Xrm.Attribute<string> | null;
      get(name: "languagelocaleid"): Xrm.LookupAttribute<"languagelocale"> | null;
      get(name: "primaryauthorid"): Xrm.LookupAttribute<"systemuser"> | null;
      get(name: "readyforreview"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: "review"): Xrm.OptionSetAttribute<knowledgearticle_review> | null;
      get(name: "subjectid"): Xrm.LookupAttribute<"subject"> | null;
      get(name: "updatecontent"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "RelatedArticlesGrid"): Xrm.SubGridControl<"connection">;
      get(name: "header_process_expirationdate"): Xrm.DateControl | null;
      get(name: "header_process_expirationdate_1"): Xrm.DateControl | null;
      get(name: "header_process_expirationdate_2"): Xrm.DateControl | null;
      get(name: "header_process_expirationdate_3"): Xrm.DateControl | null;
      get(name: "header_process_expiredreviewoptions"): Xrm.OptionSetControl<knowledgearticle_expiredreviewoptions> | null;
      get(name: "header_process_keywords"): Xrm.StringControl | null;
      get(name: "header_process_languagelocaleid"): Xrm.LookupControl<"languagelocale"> | null;
      get(name: "header_process_primaryauthorid"): Xrm.LookupControl<"systemuser"> | null;
      get(name: "header_process_readyforreview"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_review"): Xrm.OptionSetControl<knowledgearticle_review> | null;
      get(name: "header_process_subjectid"): Xrm.LookupControl<"subject"> | null;
      get(name: "header_process_updatecontent"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_updatecontent_1"): Xrm.OptionSetControl<boolean> | null;
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
  interface RelatedArticles extends Xrm.PageBase<RelatedArticles.Attributes,RelatedArticles.Tabs,RelatedArticles.Controls> {
    getAttribute(attributeName: "expirationdate"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "expiredreviewoptions"): Xrm.OptionSetAttribute<knowledgearticle_expiredreviewoptions> | null;
    getAttribute(attributeName: "keywords"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "languagelocaleid"): Xrm.LookupAttribute<"languagelocale"> | null;
    getAttribute(attributeName: "primaryauthorid"): Xrm.LookupAttribute<"systemuser"> | null;
    getAttribute(attributeName: "readyforreview"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: "review"): Xrm.OptionSetAttribute<knowledgearticle_review> | null;
    getAttribute(attributeName: "subjectid"): Xrm.LookupAttribute<"subject"> | null;
    getAttribute(attributeName: "updatecontent"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "RelatedArticlesGrid"): Xrm.SubGridControl<"connection">;
    getControl(controlName: "header_process_expirationdate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_expirationdate_1"): Xrm.DateControl | null;
    getControl(controlName: "header_process_expirationdate_2"): Xrm.DateControl | null;
    getControl(controlName: "header_process_expirationdate_3"): Xrm.DateControl | null;
    getControl(controlName: "header_process_expiredreviewoptions"): Xrm.OptionSetControl<knowledgearticle_expiredreviewoptions> | null;
    getControl(controlName: "header_process_keywords"): Xrm.StringControl | null;
    getControl(controlName: "header_process_languagelocaleid"): Xrm.LookupControl<"languagelocale"> | null;
    getControl(controlName: "header_process_primaryauthorid"): Xrm.LookupControl<"systemuser"> | null;
    getControl(controlName: "header_process_readyforreview"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_review"): Xrm.OptionSetControl<knowledgearticle_review> | null;
    getControl(controlName: "header_process_subjectid"): Xrm.LookupControl<"subject"> | null;
    getControl(controlName: "header_process_updatecontent"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_updatecontent_1"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
