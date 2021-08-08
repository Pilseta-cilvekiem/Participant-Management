declare namespace Form.knowledgearticle.Main {
  namespace KnowledgeArticleforInteractiveexperience {
    namespace Tabs {
      interface analytics extends Xrm.SectionCollectionBase {
        get(name: "Feedback"): Xrm.PageSection;
        get(name: "Views"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface general extends Xrm.SectionCollectionBase {
        get(name: "Content"): Xrm.PageSection;
        get(name: "Knowledge Information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface summary extends Xrm.SectionCollectionBase {
        get(name: "Portal Settings"): Xrm.PageSection;
        get(name: "Publish Settings"): Xrm.PageSection;
        get(name: "Timeline"): Xrm.PageSection;
        get(name: "ref_pan_Related"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "articlepublicnumber"): Xrm.Attribute<string>;
      get(name: "content"): Xrm.Attribute<string>;
      get(name: "createdby"): Xrm.LookupAttribute<"systemuser">;
      get(name: "createdon"): Xrm.DateAttribute;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "expirationdate"): Xrm.DateAttribute;
      get(name: "expiredreviewoptions"): Xrm.OptionSetAttribute<knowledgearticle_expiredreviewoptions> | null;
      get(name: "isinternal"): Xrm.OptionSetAttribute<boolean>;
      get(name: "keywords"): Xrm.Attribute<string>;
      get(name: "knowledgearticleviews"): Xrm.NumberAttribute;
      get(name: "languagelocaleid"): Xrm.LookupAttribute<"languagelocale">;
      get(name: "majorversionnumber"): Xrm.NumberAttribute;
      get(name: "minorversionnumber"): Xrm.NumberAttribute;
      get(name: "modifiedby"): Xrm.LookupAttribute<"systemuser">;
      get(name: "modifiedon"): Xrm.DateAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "parentarticlecontentid"): Xrm.LookupAttribute<"knowledgearticle">;
      get(name: "primaryauthorid"): Xrm.LookupAttribute<"systemuser">;
      get(name: "publishon"): Xrm.DateAttribute;
      get(name: "rating"): Xrm.NumberAttribute;
      get(name: "readyforreview"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: "review"): Xrm.OptionSetAttribute<knowledgearticle_review> | null;
      get(name: "rootarticleid"): Xrm.LookupAttribute<"knowledgearticle">;
      get(name: "statuscode"): Xrm.OptionSetAttribute<knowledgearticle_statuscode>;
      get(name: "subjectid"): Xrm.LookupAttribute<"subject">;
      get(name: "title"): Xrm.Attribute<string>;
      get(name: "updatecontent"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "Feedback"): Xrm.SubGridControl<"feedback">;
      get(name: "KnowledgearticleviewsGrid"): Xrm.SubGridControl<"knowledgearticleviews">;
      get(name: "RelatedCategoriesGrid"): Xrm.BaseControl;
      get(name: "RelatedTranslationsGrid"): Xrm.BaseControl;
      get(name: "articlepublicnumber"): Xrm.StringControl;
      get(name: "content"): Xrm.StringControl;
      get(name: "creadedon"): Xrm.DateControl;
      get(name: "createdname"): Xrm.LookupControl<"systemuser">;
      get(name: "description"): Xrm.StringControl;
      get(name: "expirationdate"): Xrm.DateControl;
      get(name: "header_languagelocaleid"): Xrm.LookupControl<"languagelocale">;
      get(name: "header_majorversionnumber"): Xrm.NumberControl;
      get(name: "header_majorversionnumber1"): Xrm.NumberControl;
      get(name: "header_minorversionnumber"): Xrm.NumberControl;
      get(name: "header_minorversionnumber1"): Xrm.NumberControl;
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
      get(name: "header_statuscode"): Xrm.OptionSetControl<knowledgearticle_statuscode>;
      get(name: "isinternal"): Xrm.OptionSetControl<boolean>;
      get(name: "keywords"): Xrm.StringControl;
      get(name: "knowledgearticleviews"): Xrm.NumberControl;
      get(name: "languagelocaleid"): Xrm.LookupControl<"languagelocale">;
      get(name: "modifiedname"): Xrm.LookupControl<"systemuser">;
      get(name: "modifiedon"): Xrm.DateControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "primaryauthorid"): Xrm.LookupControl<"systemuser">;
      get(name: "publishon"): Xrm.DateControl;
      get(name: "rating"): Xrm.NumberControl;
      get(name: "relatedarticlequickform"): Xrm.LookupControl<"knowledgearticle">;
      get(name: "relatedversionsquickform"): Xrm.LookupControl<"knowledgearticle">;
      get(name: "statuscode"): Xrm.OptionSetControl<knowledgearticle_statuscode>;
      get(name: "subjectid"): Xrm.LookupControl<"subject">;
      get(name: "title"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "analytics"): Xrm.PageTab<Tabs.analytics>;
      get(name: "general"): Xrm.PageTab<Tabs.general>;
      get(name: "summary"): Xrm.PageTab<Tabs.summary>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface KnowledgeArticleforInteractiveexperience extends Xrm.PageBase<KnowledgeArticleforInteractiveexperience.Attributes,KnowledgeArticleforInteractiveexperience.Tabs,KnowledgeArticleforInteractiveexperience.Controls> {
    getAttribute(attributeName: "articlepublicnumber"): Xrm.Attribute<string>;
    getAttribute(attributeName: "content"): Xrm.Attribute<string>;
    getAttribute(attributeName: "createdby"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "createdon"): Xrm.DateAttribute;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "expirationdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "expiredreviewoptions"): Xrm.OptionSetAttribute<knowledgearticle_expiredreviewoptions> | null;
    getAttribute(attributeName: "isinternal"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "keywords"): Xrm.Attribute<string>;
    getAttribute(attributeName: "knowledgearticleviews"): Xrm.NumberAttribute;
    getAttribute(attributeName: "languagelocaleid"): Xrm.LookupAttribute<"languagelocale">;
    getAttribute(attributeName: "majorversionnumber"): Xrm.NumberAttribute;
    getAttribute(attributeName: "minorversionnumber"): Xrm.NumberAttribute;
    getAttribute(attributeName: "modifiedby"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "modifiedon"): Xrm.DateAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "parentarticlecontentid"): Xrm.LookupAttribute<"knowledgearticle">;
    getAttribute(attributeName: "primaryauthorid"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "publishon"): Xrm.DateAttribute;
    getAttribute(attributeName: "rating"): Xrm.NumberAttribute;
    getAttribute(attributeName: "readyforreview"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: "review"): Xrm.OptionSetAttribute<knowledgearticle_review> | null;
    getAttribute(attributeName: "rootarticleid"): Xrm.LookupAttribute<"knowledgearticle">;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<knowledgearticle_statuscode>;
    getAttribute(attributeName: "subjectid"): Xrm.LookupAttribute<"subject">;
    getAttribute(attributeName: "title"): Xrm.Attribute<string>;
    getAttribute(attributeName: "updatecontent"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "Feedback"): Xrm.SubGridControl<"feedback">;
    getControl(controlName: "KnowledgearticleviewsGrid"): Xrm.SubGridControl<"knowledgearticleviews">;
    getControl(controlName: "RelatedCategoriesGrid"): Xrm.BaseControl;
    getControl(controlName: "RelatedTranslationsGrid"): Xrm.BaseControl;
    getControl(controlName: "articlepublicnumber"): Xrm.StringControl;
    getControl(controlName: "content"): Xrm.StringControl;
    getControl(controlName: "creadedon"): Xrm.DateControl;
    getControl(controlName: "createdname"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "expirationdate"): Xrm.DateControl;
    getControl(controlName: "header_languagelocaleid"): Xrm.LookupControl<"languagelocale">;
    getControl(controlName: "header_majorversionnumber"): Xrm.NumberControl;
    getControl(controlName: "header_majorversionnumber1"): Xrm.NumberControl;
    getControl(controlName: "header_minorversionnumber"): Xrm.NumberControl;
    getControl(controlName: "header_minorversionnumber1"): Xrm.NumberControl;
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
    getControl(controlName: "header_statuscode"): Xrm.OptionSetControl<knowledgearticle_statuscode>;
    getControl(controlName: "isinternal"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "keywords"): Xrm.StringControl;
    getControl(controlName: "knowledgearticleviews"): Xrm.NumberControl;
    getControl(controlName: "languagelocaleid"): Xrm.LookupControl<"languagelocale">;
    getControl(controlName: "modifiedname"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "modifiedon"): Xrm.DateControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "primaryauthorid"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "publishon"): Xrm.DateControl;
    getControl(controlName: "rating"): Xrm.NumberControl;
    getControl(controlName: "relatedarticlequickform"): Xrm.LookupControl<"knowledgearticle">;
    getControl(controlName: "relatedversionsquickform"): Xrm.LookupControl<"knowledgearticle">;
    getControl(controlName: "statuscode"): Xrm.OptionSetControl<knowledgearticle_statuscode>;
    getControl(controlName: "subjectid"): Xrm.LookupControl<"subject">;
    getControl(controlName: "title"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}