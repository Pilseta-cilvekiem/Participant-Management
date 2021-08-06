interface Goal_Base extends WebEntity {
  actualdecimal?: number | null;
  actualinteger?: number | null;
  actualmoney?: number | null;
  actualmoney_base?: number | null;
  actualstring?: string | null;
  amountdatatype?: metric_goaltype | null;
  computedtargetasoftodaydecimal?: number | null;
  computedtargetasoftodayinteger?: number | null;
  computedtargetasoftodaymoney?: number | null;
  computedtargetasoftodaymoney_base?: number | null;
  computedtargetasoftodaypercentageachieved?: number | null;
  consideronlygoalownersrecords?: boolean | null;
  createdon?: Date | null;
  customrollupfielddecimal?: number | null;
  customrollupfieldinteger?: number | null;
  customrollupfieldmoney?: number | null;
  customrollupfieldmoney_base?: number | null;
  customrollupfieldstring?: string | null;
  depth?: number | null;
  entityimageid?: string | null;
  exchangerate?: number | null;
  fiscalperiod?: goal_fiscalperiod | null;
  fiscalyear?: goal_fiscalyear | null;
  goalenddate?: Date | null;
  goalid?: string | null;
  goalstartdate?: Date | null;
  importsequencenumber?: number | null;
  inprogressdecimal?: number | null;
  inprogressinteger?: number | null;
  inprogressmoney?: number | null;
  inprogressmoney_base?: number | null;
  inprogressstring?: string | null;
  isamount?: boolean | null;
  isfiscalperiodgoal?: boolean | null;
  isoverridden?: boolean | null;
  isoverride?: boolean | null;
  lastrolledupdate?: Date | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  percentage?: number | null;
  rolluperrorcode?: number | null;
  rolluponlyfromchildgoals?: boolean | null;
  statecode?: goal_statecode | null;
  statuscode?: goal_statuscode | null;
  stretchtargetdecimal?: number | null;
  stretchtargetinteger?: number | null;
  stretchtargetmoney?: number | null;
  stretchtargetmoney_base?: number | null;
  stretchtargetstring?: string | null;
  targetdecimal?: number | null;
  targetinteger?: number | null;
  targetmoney?: number | null;
  targetmoney_base?: number | null;
  targetstring?: string | null;
  timezoneruleversionnumber?: number | null;
  title?: string | null;
  transactioncurrencyid_guid?: string | null;
  treeid?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface Goal_Relationships {
  Goal_Annotation?: Annotation_Result[] | null;
  Goal_AsyncOperations?: AsyncOperation_Result[] | null;
  Goal_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  Goal_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  Goal_ProcessSessions?: ProcessSession_Result[] | null;
  Goal_RollupError_Goal?: Goal_Result[] | null;
  Goal_SyncErrors?: SyncError_Result[] | null;
  entityimageid_imagedescriptor?: ImageDescriptor_Result | null;
  goal_connections1?: Connection_Result[] | null;
  goal_connections2?: Connection_Result[] | null;
  goal_parent_goal?: Goal_Result[] | null;
  goal_principalobjectattributeaccess?: PrincipalObjectAttributeAccess_Result[] | null;
  goalownerid_systemuser?: SystemUser_Result | null;
  goalownerid_team?: Team_Result | null;
  userentityinstancedata_goal?: UserEntityInstanceData_Result[] | null;
}
interface Goal extends Goal_Base, Goal_Relationships {
  goalownerid_systemuser_bind$systemusers?: string | null;
  goalownerid_team_bind$teams?: string | null;
  metricid_bind$metrics?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  parentgoalid_bind$goals?: string | null;
  rollupqueryactualdecimalid_bind$goalrollupqueries?: string | null;
  rollupqueryactualintegerid_bind$goalrollupqueries?: string | null;
  rollupqueryactualmoneyid_bind$goalrollupqueries?: string | null;
  rollupquerycustomdecimalid_bind$goalrollupqueries?: string | null;
  rollupquerycustomintegerid_bind$goalrollupqueries?: string | null;
  rollupquerycustommoneyid_bind$goalrollupqueries?: string | null;
  rollupqueryinprogressdecimalid_bind$goalrollupqueries?: string | null;
  rollupqueryinprogressintegerid_bind$goalrollupqueries?: string | null;
  rollupqueryinprogressmoneyid_bind$goalrollupqueries?: string | null;
}
interface Goal_Create extends Goal {
}
interface Goal_Update extends Goal {
  goalwitherrorid_bind$goals?: string | null;
}
interface Goal_Select {
  actualdecimal: WebAttribute<Goal_Select, { actualdecimal: number | null }, {  }>;
  actualinteger: WebAttribute<Goal_Select, { actualinteger: number | null }, {  }>;
  actualmoney: WebAttribute<Goal_Select, { actualmoney: number | null; transactioncurrencyid_guid: string | null }, { actualmoney_formatted?: string; transactioncurrencyid_formatted?: string }>;
  actualmoney_base: WebAttribute<Goal_Select, { actualmoney_base: number | null; transactioncurrencyid_guid: string | null }, { actualmoney_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  actualstring: WebAttribute<Goal_Select, { actualstring: string | null }, {  }>;
  amountdatatype: WebAttribute<Goal_Select, { amountdatatype: metric_goaltype | null }, { amountdatatype_formatted?: string }>;
  computedtargetasoftodaydecimal: WebAttribute<Goal_Select, { computedtargetasoftodaydecimal: number | null }, {  }>;
  computedtargetasoftodayinteger: WebAttribute<Goal_Select, { computedtargetasoftodayinteger: number | null }, {  }>;
  computedtargetasoftodaymoney: WebAttribute<Goal_Select, { computedtargetasoftodaymoney: number | null; transactioncurrencyid_guid: string | null }, { computedtargetasoftodaymoney_formatted?: string; transactioncurrencyid_formatted?: string }>;
  computedtargetasoftodaymoney_base: WebAttribute<Goal_Select, { computedtargetasoftodaymoney_base: number | null; transactioncurrencyid_guid: string | null }, { computedtargetasoftodaymoney_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  computedtargetasoftodaypercentageachieved: WebAttribute<Goal_Select, { computedtargetasoftodaypercentageachieved: number | null }, {  }>;
  consideronlygoalownersrecords: WebAttribute<Goal_Select, { consideronlygoalownersrecords: boolean | null }, {  }>;
  createdby_guid: WebAttribute<Goal_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<Goal_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<Goal_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  customrollupfielddecimal: WebAttribute<Goal_Select, { customrollupfielddecimal: number | null }, {  }>;
  customrollupfieldinteger: WebAttribute<Goal_Select, { customrollupfieldinteger: number | null }, {  }>;
  customrollupfieldmoney: WebAttribute<Goal_Select, { customrollupfieldmoney: number | null; transactioncurrencyid_guid: string | null }, { customrollupfieldmoney_formatted?: string; transactioncurrencyid_formatted?: string }>;
  customrollupfieldmoney_base: WebAttribute<Goal_Select, { customrollupfieldmoney_base: number | null; transactioncurrencyid_guid: string | null }, { customrollupfieldmoney_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  customrollupfieldstring: WebAttribute<Goal_Select, { customrollupfieldstring: string | null }, {  }>;
  depth: WebAttribute<Goal_Select, { depth: number | null }, {  }>;
  entityimageid: WebAttribute<Goal_Select, { entityimageid: string | null }, {  }>;
  exchangerate: WebAttribute<Goal_Select, { exchangerate: number | null }, {  }>;
  fiscalperiod: WebAttribute<Goal_Select, { fiscalperiod: goal_fiscalperiod | null }, { fiscalperiod_formatted?: string }>;
  fiscalyear: WebAttribute<Goal_Select, { fiscalyear: goal_fiscalyear | null }, { fiscalyear_formatted?: string }>;
  goalenddate: WebAttribute<Goal_Select, { goalenddate: Date | null }, { goalenddate_formatted?: string }>;
  goalid: WebAttribute<Goal_Select, { goalid: string | null }, {  }>;
  goalownerid_guid: WebAttribute<Goal_Select, { goalownerid_guid: string | null }, { goalownerid_formatted?: string }>;
  goalstartdate: WebAttribute<Goal_Select, { goalstartdate: Date | null }, { goalstartdate_formatted?: string }>;
  goalwitherrorid_guid: WebAttribute<Goal_Select, { goalwitherrorid_guid: string | null }, { goalwitherrorid_formatted?: string }>;
  importsequencenumber: WebAttribute<Goal_Select, { importsequencenumber: number | null }, {  }>;
  inprogressdecimal: WebAttribute<Goal_Select, { inprogressdecimal: number | null }, {  }>;
  inprogressinteger: WebAttribute<Goal_Select, { inprogressinteger: number | null }, {  }>;
  inprogressmoney: WebAttribute<Goal_Select, { inprogressmoney: number | null; transactioncurrencyid_guid: string | null }, { inprogressmoney_formatted?: string; transactioncurrencyid_formatted?: string }>;
  inprogressmoney_base: WebAttribute<Goal_Select, { inprogressmoney_base: number | null; transactioncurrencyid_guid: string | null }, { inprogressmoney_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  inprogressstring: WebAttribute<Goal_Select, { inprogressstring: string | null }, {  }>;
  isamount: WebAttribute<Goal_Select, { isamount: boolean | null }, {  }>;
  isfiscalperiodgoal: WebAttribute<Goal_Select, { isfiscalperiodgoal: boolean | null }, {  }>;
  isoverridden: WebAttribute<Goal_Select, { isoverridden: boolean | null }, {  }>;
  isoverride: WebAttribute<Goal_Select, { isoverride: boolean | null }, {  }>;
  lastrolledupdate: WebAttribute<Goal_Select, { lastrolledupdate: Date | null }, { lastrolledupdate_formatted?: string }>;
  metricid_guid: WebAttribute<Goal_Select, { metricid_guid: string | null }, { metricid_formatted?: string }>;
  modifiedby_guid: WebAttribute<Goal_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<Goal_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<Goal_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<Goal_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<Goal_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<Goal_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<Goal_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<Goal_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  parentgoalid_guid: WebAttribute<Goal_Select, { parentgoalid_guid: string | null }, { parentgoalid_formatted?: string }>;
  percentage: WebAttribute<Goal_Select, { percentage: number | null }, {  }>;
  rolluperrorcode: WebAttribute<Goal_Select, { rolluperrorcode: number | null }, {  }>;
  rolluponlyfromchildgoals: WebAttribute<Goal_Select, { rolluponlyfromchildgoals: boolean | null }, {  }>;
  rollupqueryactualdecimalid_guid: WebAttribute<Goal_Select, { rollupqueryactualdecimalid_guid: string | null }, { rollupqueryactualdecimalid_formatted?: string }>;
  rollupqueryactualintegerid_guid: WebAttribute<Goal_Select, { rollupqueryactualintegerid_guid: string | null }, { rollupqueryactualintegerid_formatted?: string }>;
  rollupqueryactualmoneyid_guid: WebAttribute<Goal_Select, { rollupqueryactualmoneyid_guid: string | null }, { rollupqueryactualmoneyid_formatted?: string }>;
  rollupquerycustomdecimalid_guid: WebAttribute<Goal_Select, { rollupquerycustomdecimalid_guid: string | null }, { rollupquerycustomdecimalid_formatted?: string }>;
  rollupquerycustomintegerid_guid: WebAttribute<Goal_Select, { rollupquerycustomintegerid_guid: string | null }, { rollupquerycustomintegerid_formatted?: string }>;
  rollupquerycustommoneyid_guid: WebAttribute<Goal_Select, { rollupquerycustommoneyid_guid: string | null }, { rollupquerycustommoneyid_formatted?: string }>;
  rollupqueryinprogressdecimalid_guid: WebAttribute<Goal_Select, { rollupqueryinprogressdecimalid_guid: string | null }, { rollupqueryinprogressdecimalid_formatted?: string }>;
  rollupqueryinprogressintegerid_guid: WebAttribute<Goal_Select, { rollupqueryinprogressintegerid_guid: string | null }, { rollupqueryinprogressintegerid_formatted?: string }>;
  rollupqueryinprogressmoneyid_guid: WebAttribute<Goal_Select, { rollupqueryinprogressmoneyid_guid: string | null }, { rollupqueryinprogressmoneyid_formatted?: string }>;
  statecode: WebAttribute<Goal_Select, { statecode: goal_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<Goal_Select, { statuscode: goal_statuscode | null }, { statuscode_formatted?: string }>;
  stretchtargetdecimal: WebAttribute<Goal_Select, { stretchtargetdecimal: number | null }, {  }>;
  stretchtargetinteger: WebAttribute<Goal_Select, { stretchtargetinteger: number | null }, {  }>;
  stretchtargetmoney: WebAttribute<Goal_Select, { stretchtargetmoney: number | null; transactioncurrencyid_guid: string | null }, { stretchtargetmoney_formatted?: string; transactioncurrencyid_formatted?: string }>;
  stretchtargetmoney_base: WebAttribute<Goal_Select, { stretchtargetmoney_base: number | null; transactioncurrencyid_guid: string | null }, { stretchtargetmoney_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  stretchtargetstring: WebAttribute<Goal_Select, { stretchtargetstring: string | null }, {  }>;
  targetdecimal: WebAttribute<Goal_Select, { targetdecimal: number | null }, {  }>;
  targetinteger: WebAttribute<Goal_Select, { targetinteger: number | null }, {  }>;
  targetmoney: WebAttribute<Goal_Select, { targetmoney: number | null; transactioncurrencyid_guid: string | null }, { targetmoney_formatted?: string; transactioncurrencyid_formatted?: string }>;
  targetmoney_base: WebAttribute<Goal_Select, { targetmoney_base: number | null; transactioncurrencyid_guid: string | null }, { targetmoney_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  targetstring: WebAttribute<Goal_Select, { targetstring: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<Goal_Select, { timezoneruleversionnumber: number | null }, {  }>;
  title: WebAttribute<Goal_Select, { title: string | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<Goal_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  treeid: WebAttribute<Goal_Select, { treeid: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<Goal_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<Goal_Select, { versionnumber: number | null }, {  }>;
}
interface Goal_Filter {
  actualdecimal: any;
  actualinteger: number;
  actualmoney: number;
  actualmoney_base: number;
  actualstring: string;
  amountdatatype: metric_goaltype;
  computedtargetasoftodaydecimal: any;
  computedtargetasoftodayinteger: number;
  computedtargetasoftodaymoney: number;
  computedtargetasoftodaymoney_base: number;
  computedtargetasoftodaypercentageachieved: any;
  consideronlygoalownersrecords: boolean;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  customrollupfielddecimal: any;
  customrollupfieldinteger: number;
  customrollupfieldmoney: number;
  customrollupfieldmoney_base: number;
  customrollupfieldstring: string;
  depth: number;
  entityimageid: XQW.Guid;
  exchangerate: any;
  fiscalperiod: goal_fiscalperiod;
  fiscalyear: goal_fiscalyear;
  goalenddate: Date;
  goalid: XQW.Guid;
  goalownerid_guid: XQW.Guid;
  goalstartdate: Date;
  goalwitherrorid_guid: XQW.Guid;
  importsequencenumber: number;
  inprogressdecimal: any;
  inprogressinteger: number;
  inprogressmoney: number;
  inprogressmoney_base: number;
  inprogressstring: string;
  isamount: boolean;
  isfiscalperiodgoal: boolean;
  isoverridden: boolean;
  isoverride: boolean;
  lastrolledupdate: Date;
  metricid_guid: XQW.Guid;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  parentgoalid_guid: XQW.Guid;
  percentage: any;
  rolluperrorcode: number;
  rolluponlyfromchildgoals: boolean;
  rollupqueryactualdecimalid_guid: XQW.Guid;
  rollupqueryactualintegerid_guid: XQW.Guid;
  rollupqueryactualmoneyid_guid: XQW.Guid;
  rollupquerycustomdecimalid_guid: XQW.Guid;
  rollupquerycustomintegerid_guid: XQW.Guid;
  rollupquerycustommoneyid_guid: XQW.Guid;
  rollupqueryinprogressdecimalid_guid: XQW.Guid;
  rollupqueryinprogressintegerid_guid: XQW.Guid;
  rollupqueryinprogressmoneyid_guid: XQW.Guid;
  statecode: goal_statecode;
  statuscode: goal_statuscode;
  stretchtargetdecimal: any;
  stretchtargetinteger: number;
  stretchtargetmoney: number;
  stretchtargetmoney_base: number;
  stretchtargetstring: string;
  targetdecimal: any;
  targetinteger: number;
  targetmoney: number;
  targetmoney_base: number;
  targetstring: string;
  timezoneruleversionnumber: number;
  title: string;
  transactioncurrencyid_guid: XQW.Guid;
  treeid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface Goal_Expand {
  Goal_Annotation: WebExpand<Goal_Expand, Annotation_Select, Annotation_Filter, { Goal_Annotation: Annotation_Result[] }>;
  Goal_AsyncOperations: WebExpand<Goal_Expand, AsyncOperation_Select, AsyncOperation_Filter, { Goal_AsyncOperations: AsyncOperation_Result[] }>;
  Goal_DuplicateBaseRecord: WebExpand<Goal_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { Goal_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  Goal_DuplicateMatchingRecord: WebExpand<Goal_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { Goal_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  Goal_ProcessSessions: WebExpand<Goal_Expand, ProcessSession_Select, ProcessSession_Filter, { Goal_ProcessSessions: ProcessSession_Result[] }>;
  Goal_RollupError_Goal: WebExpand<Goal_Expand, Goal_Select, Goal_Filter, { Goal_RollupError_Goal: Goal_Result[] }>;
  Goal_SyncErrors: WebExpand<Goal_Expand, SyncError_Select, SyncError_Filter, { Goal_SyncErrors: SyncError_Result[] }>;
  createdby: WebExpand<Goal_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<Goal_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  entityimageid_imagedescriptor: WebExpand<Goal_Expand, ImageDescriptor_Select, ImageDescriptor_Filter, { entityimageid_imagedescriptor: ImageDescriptor_Result }>;
  goal_connections1: WebExpand<Goal_Expand, Connection_Select, Connection_Filter, { goal_connections1: Connection_Result[] }>;
  goal_connections2: WebExpand<Goal_Expand, Connection_Select, Connection_Filter, { goal_connections2: Connection_Result[] }>;
  goal_parent_goal: WebExpand<Goal_Expand, Goal_Select, Goal_Filter, { goal_parent_goal: Goal_Result[] }>;
  goal_principalobjectattributeaccess: WebExpand<Goal_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { goal_principalobjectattributeaccess: PrincipalObjectAttributeAccess_Result[] }>;
  goalownerid_systemuser: WebExpand<Goal_Expand, SystemUser_Select, SystemUser_Filter, { goalownerid_systemuser: SystemUser_Result }>;
  goalownerid_team: WebExpand<Goal_Expand, Team_Select, Team_Filter, { goalownerid_team: Team_Result }>;
  goalwitherrorid: WebExpand<Goal_Expand, Goal_Select, Goal_Filter, { goalwitherrorid: Goal_Result }>;
  metricid: WebExpand<Goal_Expand, Metric_Select, Metric_Filter, { metricid: Metric_Result }>;
  modifiedby: WebExpand<Goal_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<Goal_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<Goal_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<Goal_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<Goal_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<Goal_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  parentgoalid: WebExpand<Goal_Expand, Goal_Select, Goal_Filter, { parentgoalid: Goal_Result }>;
  rollupqueryactualdecimalid: WebExpand<Goal_Expand, GoalRollupQuery_Select, GoalRollupQuery_Filter, { rollupqueryactualdecimalid: GoalRollupQuery_Result }>;
  rollupqueryactualintegerid: WebExpand<Goal_Expand, GoalRollupQuery_Select, GoalRollupQuery_Filter, { rollupqueryactualintegerid: GoalRollupQuery_Result }>;
  rollupqueryactualmoneyid: WebExpand<Goal_Expand, GoalRollupQuery_Select, GoalRollupQuery_Filter, { rollupqueryactualmoneyid: GoalRollupQuery_Result }>;
  rollupquerycustomdecimalid: WebExpand<Goal_Expand, GoalRollupQuery_Select, GoalRollupQuery_Filter, { rollupquerycustomdecimalid: GoalRollupQuery_Result }>;
  rollupquerycustomintegerid: WebExpand<Goal_Expand, GoalRollupQuery_Select, GoalRollupQuery_Filter, { rollupquerycustomintegerid: GoalRollupQuery_Result }>;
  rollupquerycustommoneyid: WebExpand<Goal_Expand, GoalRollupQuery_Select, GoalRollupQuery_Filter, { rollupquerycustommoneyid: GoalRollupQuery_Result }>;
  rollupqueryinprogressdecimalid: WebExpand<Goal_Expand, GoalRollupQuery_Select, GoalRollupQuery_Filter, { rollupqueryinprogressdecimalid: GoalRollupQuery_Result }>;
  rollupqueryinprogressintegerid: WebExpand<Goal_Expand, GoalRollupQuery_Select, GoalRollupQuery_Filter, { rollupqueryinprogressintegerid: GoalRollupQuery_Result }>;
  rollupqueryinprogressmoneyid: WebExpand<Goal_Expand, GoalRollupQuery_Select, GoalRollupQuery_Filter, { rollupqueryinprogressmoneyid: GoalRollupQuery_Result }>;
  transactioncurrencyid: WebExpand<Goal_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
  userentityinstancedata_goal: WebExpand<Goal_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_goal: UserEntityInstanceData_Result[] }>;
}
interface Goal_FormattedResult {
  actualmoney_base_formatted?: string;
  actualmoney_formatted?: string;
  amountdatatype_formatted?: string;
  computedtargetasoftodaymoney_base_formatted?: string;
  computedtargetasoftodaymoney_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  customrollupfieldmoney_base_formatted?: string;
  customrollupfieldmoney_formatted?: string;
  fiscalperiod_formatted?: string;
  fiscalyear_formatted?: string;
  goalenddate_formatted?: string;
  goalownerid_formatted?: string;
  goalstartdate_formatted?: string;
  goalwitherrorid_formatted?: string;
  inprogressmoney_base_formatted?: string;
  inprogressmoney_formatted?: string;
  lastrolledupdate_formatted?: string;
  metricid_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  parentgoalid_formatted?: string;
  rollupqueryactualdecimalid_formatted?: string;
  rollupqueryactualintegerid_formatted?: string;
  rollupqueryactualmoneyid_formatted?: string;
  rollupquerycustomdecimalid_formatted?: string;
  rollupquerycustomintegerid_formatted?: string;
  rollupquerycustommoneyid_formatted?: string;
  rollupqueryinprogressdecimalid_formatted?: string;
  rollupqueryinprogressintegerid_formatted?: string;
  rollupqueryinprogressmoneyid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  stretchtargetmoney_base_formatted?: string;
  stretchtargetmoney_formatted?: string;
  targetmoney_base_formatted?: string;
  targetmoney_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface Goal_Result extends Goal_Base, Goal_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  goalownerid_guid: string | null;
  goalwitherrorid_guid: string | null;
  metricid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  parentgoalid_guid: string | null;
  rollupqueryactualdecimalid_guid: string | null;
  rollupqueryactualintegerid_guid: string | null;
  rollupqueryactualmoneyid_guid: string | null;
  rollupquerycustomdecimalid_guid: string | null;
  rollupquerycustomintegerid_guid: string | null;
  rollupquerycustommoneyid_guid: string | null;
  rollupqueryinprogressdecimalid_guid: string | null;
  rollupqueryinprogressintegerid_guid: string | null;
  rollupqueryinprogressmoneyid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface Goal_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  entityimageid_imagedescriptor: WebMappingRetrieve<ImageDescriptor_Select,ImageDescriptor_Expand,ImageDescriptor_Filter,ImageDescriptor_Fixed,ImageDescriptor_Result,ImageDescriptor_FormattedResult>;
  goalownerid_systemuser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  goalownerid_team: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  goalwitherrorid: WebMappingRetrieve<Goal_Select,Goal_Expand,Goal_Filter,Goal_Fixed,Goal_Result,Goal_FormattedResult>;
  metricid: WebMappingRetrieve<Metric_Select,Metric_Expand,Metric_Filter,Metric_Fixed,Metric_Result,Metric_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  parentgoalid: WebMappingRetrieve<Goal_Select,Goal_Expand,Goal_Filter,Goal_Fixed,Goal_Result,Goal_FormattedResult>;
  rollupqueryactualdecimalid: WebMappingRetrieve<GoalRollupQuery_Select,GoalRollupQuery_Expand,GoalRollupQuery_Filter,GoalRollupQuery_Fixed,GoalRollupQuery_Result,GoalRollupQuery_FormattedResult>;
  rollupqueryactualintegerid: WebMappingRetrieve<GoalRollupQuery_Select,GoalRollupQuery_Expand,GoalRollupQuery_Filter,GoalRollupQuery_Fixed,GoalRollupQuery_Result,GoalRollupQuery_FormattedResult>;
  rollupqueryactualmoneyid: WebMappingRetrieve<GoalRollupQuery_Select,GoalRollupQuery_Expand,GoalRollupQuery_Filter,GoalRollupQuery_Fixed,GoalRollupQuery_Result,GoalRollupQuery_FormattedResult>;
  rollupquerycustomdecimalid: WebMappingRetrieve<GoalRollupQuery_Select,GoalRollupQuery_Expand,GoalRollupQuery_Filter,GoalRollupQuery_Fixed,GoalRollupQuery_Result,GoalRollupQuery_FormattedResult>;
  rollupquerycustomintegerid: WebMappingRetrieve<GoalRollupQuery_Select,GoalRollupQuery_Expand,GoalRollupQuery_Filter,GoalRollupQuery_Fixed,GoalRollupQuery_Result,GoalRollupQuery_FormattedResult>;
  rollupquerycustommoneyid: WebMappingRetrieve<GoalRollupQuery_Select,GoalRollupQuery_Expand,GoalRollupQuery_Filter,GoalRollupQuery_Fixed,GoalRollupQuery_Result,GoalRollupQuery_FormattedResult>;
  rollupqueryinprogressdecimalid: WebMappingRetrieve<GoalRollupQuery_Select,GoalRollupQuery_Expand,GoalRollupQuery_Filter,GoalRollupQuery_Fixed,GoalRollupQuery_Result,GoalRollupQuery_FormattedResult>;
  rollupqueryinprogressintegerid: WebMappingRetrieve<GoalRollupQuery_Select,GoalRollupQuery_Expand,GoalRollupQuery_Filter,GoalRollupQuery_Fixed,GoalRollupQuery_Result,GoalRollupQuery_FormattedResult>;
  rollupqueryinprogressmoneyid: WebMappingRetrieve<GoalRollupQuery_Select,GoalRollupQuery_Expand,GoalRollupQuery_Filter,GoalRollupQuery_Fixed,GoalRollupQuery_Result,GoalRollupQuery_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface Goal_RelatedMany {
  Goal_Annotation: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  Goal_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  Goal_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  Goal_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  Goal_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  Goal_RollupError_Goal: WebMappingRetrieve<Goal_Select,Goal_Expand,Goal_Filter,Goal_Fixed,Goal_Result,Goal_FormattedResult>;
  Goal_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  goal_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  goal_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  goal_parent_goal: WebMappingRetrieve<Goal_Select,Goal_Expand,Goal_Filter,Goal_Fixed,Goal_Result,Goal_FormattedResult>;
  goal_principalobjectattributeaccess: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  userentityinstancedata_goal: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  goals: WebMappingRetrieve<Goal_Select,Goal_Expand,Goal_Filter,Goal_Fixed,Goal_Result,Goal_FormattedResult>;
}
interface WebEntitiesRelated {
  goals: WebMappingRelated<Goal_RelatedOne,Goal_RelatedMany>;
}
interface WebEntitiesCUDA {
  goals: WebMappingCUDA<Goal_Create,Goal_Update,Goal_Select>;
}
