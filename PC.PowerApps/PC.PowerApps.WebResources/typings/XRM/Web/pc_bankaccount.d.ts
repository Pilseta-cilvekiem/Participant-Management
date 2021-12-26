interface pc_BankAccount_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  pc_bankaccountid?: string | null;
  pc_lastimportedtransactiondate?: Date | null;
  pc_name?: string | null;
  pc_transactionimporterror?: string | null;
  pc_transactionimportstatus?: pc_transactionimportstatus | null;
  statecode?: pc_bankaccount_statecode | null;
  statuscode?: pc_bankaccount_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface pc_BankAccount_Relationships {
}
interface pc_BankAccount extends pc_BankAccount_Base, pc_BankAccount_Relationships {
}
interface pc_BankAccount_Create extends pc_BankAccount {
}
interface pc_BankAccount_Update extends pc_BankAccount {
}
interface pc_BankAccount_Select {
  createdby_guid: WebAttribute<pc_BankAccount_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<pc_BankAccount_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<pc_BankAccount_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<pc_BankAccount_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<pc_BankAccount_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<pc_BankAccount_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<pc_BankAccount_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<pc_BankAccount_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<pc_BankAccount_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  pc_bankaccountid: WebAttribute<pc_BankAccount_Select, { pc_bankaccountid: string | null }, {  }>;
  pc_lastimportedtransactiondate: WebAttribute<pc_BankAccount_Select, { pc_lastimportedtransactiondate: Date | null }, { pc_lastimportedtransactiondate_formatted?: string }>;
  pc_name: WebAttribute<pc_BankAccount_Select, { pc_name: string | null }, {  }>;
  pc_transactionimporterror: WebAttribute<pc_BankAccount_Select, { pc_transactionimporterror: string | null }, {  }>;
  pc_transactionimportstatus: WebAttribute<pc_BankAccount_Select, { pc_transactionimportstatus: pc_transactionimportstatus | null }, { pc_transactionimportstatus_formatted?: string }>;
  statecode: WebAttribute<pc_BankAccount_Select, { statecode: pc_bankaccount_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<pc_BankAccount_Select, { statuscode: pc_bankaccount_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<pc_BankAccount_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<pc_BankAccount_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<pc_BankAccount_Select, { versionnumber: number | null }, {  }>;
}
interface pc_BankAccount_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  pc_bankaccountid: XQW.Guid;
  pc_lastimportedtransactiondate: Date;
  pc_name: string;
  pc_transactionimporterror: string;
  pc_transactionimportstatus: pc_transactionimportstatus;
  statecode: pc_bankaccount_statecode;
  statuscode: pc_bankaccount_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface pc_BankAccount_Expand {
}
interface pc_BankAccount_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  pc_lastimportedtransactiondate_formatted?: string;
  pc_transactionimportstatus_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface pc_BankAccount_Result extends pc_BankAccount_Base, pc_BankAccount_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface pc_BankAccount_RelatedOne {
}
interface pc_BankAccount_RelatedMany {
}
interface WebEntitiesRetrieve {
  pc_bankaccounts: WebMappingRetrieve<pc_BankAccount_Select,pc_BankAccount_Expand,pc_BankAccount_Filter,pc_BankAccount_Fixed,pc_BankAccount_Result,pc_BankAccount_FormattedResult>;
}
interface WebEntitiesRelated {
  pc_bankaccounts: WebMappingRelated<pc_BankAccount_RelatedOne,pc_BankAccount_RelatedMany>;
}
interface WebEntitiesCUDA {
  pc_bankaccounts: WebMappingCUDA<pc_BankAccount_Create,pc_BankAccount_Update,pc_BankAccount_Select>;
}
