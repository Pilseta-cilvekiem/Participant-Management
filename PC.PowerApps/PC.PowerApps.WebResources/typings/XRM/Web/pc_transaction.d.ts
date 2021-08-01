interface pc_Transaction_Base extends WebEntity {
  createdon?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  pc_amount?: number | null;
  pc_amount_base?: number | null;
  pc_date?: Date | null;
  pc_details?: string | null;
  pc_name?: string | null;
  pc_nonpaymentamount?: number | null;
  pc_nonpaymentamount_base?: number | null;
  pc_payerid?: string | null;
  pc_payername?: string | null;
  pc_paymenttotalamount?: number | null;
  pc_paymenttotalamount_base?: number | null;
  pc_remainingamount?: number | null;
  pc_remainingamount_base?: number | null;
  pc_transactionid?: string | null;
  statecode?: pc_transaction_statecode | null;
  statuscode?: pc_transaction_statuscode | null;
  timezoneruleversionnumber?: number | null;
  transactioncurrencyid_guid?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface pc_Transaction_Relationships {
}
interface pc_Transaction extends pc_Transaction_Base, pc_Transaction_Relationships {
  pc_BankAccount_bind$pc_bankaccounts?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface pc_Transaction_Create extends pc_Transaction {
}
interface pc_Transaction_Update extends pc_Transaction {
}
interface pc_Transaction_Select {
  createdby_guid: WebAttribute<pc_Transaction_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<pc_Transaction_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<pc_Transaction_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<pc_Transaction_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<pc_Transaction_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<pc_Transaction_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<pc_Transaction_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<pc_Transaction_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<pc_Transaction_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<pc_Transaction_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  pc_amount: WebAttribute<pc_Transaction_Select, { pc_amount: number | null; transactioncurrencyid_guid: string | null }, { pc_amount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  pc_amount_base: WebAttribute<pc_Transaction_Select, { pc_amount_base: number | null; transactioncurrencyid_guid: string | null }, { pc_amount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  pc_bankaccount_guid: WebAttribute<pc_Transaction_Select, { pc_bankaccount_guid: string | null }, { pc_bankaccount_formatted?: string }>;
  pc_date: WebAttribute<pc_Transaction_Select, { pc_date: Date | null }, { pc_date_formatted?: string }>;
  pc_details: WebAttribute<pc_Transaction_Select, { pc_details: string | null }, {  }>;
  pc_name: WebAttribute<pc_Transaction_Select, { pc_name: string | null }, {  }>;
  pc_nonpaymentamount: WebAttribute<pc_Transaction_Select, { pc_nonpaymentamount: number | null; transactioncurrencyid_guid: string | null }, { pc_nonpaymentamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  pc_nonpaymentamount_base: WebAttribute<pc_Transaction_Select, { pc_nonpaymentamount_base: number | null; transactioncurrencyid_guid: string | null }, { pc_nonpaymentamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  pc_payerid: WebAttribute<pc_Transaction_Select, { pc_payerid: string | null }, {  }>;
  pc_payername: WebAttribute<pc_Transaction_Select, { pc_payername: string | null }, {  }>;
  pc_paymenttotalamount: WebAttribute<pc_Transaction_Select, { pc_paymenttotalamount: number | null; transactioncurrencyid_guid: string | null }, { pc_paymenttotalamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  pc_paymenttotalamount_base: WebAttribute<pc_Transaction_Select, { pc_paymenttotalamount_base: number | null; transactioncurrencyid_guid: string | null }, { pc_paymenttotalamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  pc_remainingamount: WebAttribute<pc_Transaction_Select, { pc_remainingamount: number | null; transactioncurrencyid_guid: string | null }, { pc_remainingamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  pc_remainingamount_base: WebAttribute<pc_Transaction_Select, { pc_remainingamount_base: number | null; transactioncurrencyid_guid: string | null }, { pc_remainingamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  pc_transactionid: WebAttribute<pc_Transaction_Select, { pc_transactionid: string | null }, {  }>;
  statecode: WebAttribute<pc_Transaction_Select, { statecode: pc_transaction_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<pc_Transaction_Select, { statuscode: pc_transaction_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<pc_Transaction_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<pc_Transaction_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<pc_Transaction_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<pc_Transaction_Select, { versionnumber: number | null }, {  }>;
}
interface pc_Transaction_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  exchangerate: any;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  pc_amount: number;
  pc_amount_base: number;
  pc_bankaccount_guid: XQW.Guid;
  pc_date: Date;
  pc_details: string;
  pc_name: string;
  pc_nonpaymentamount: number;
  pc_nonpaymentamount_base: number;
  pc_payerid: string;
  pc_payername: string;
  pc_paymenttotalamount: number;
  pc_paymenttotalamount_base: number;
  pc_remainingamount: number;
  pc_remainingamount_base: number;
  pc_transactionid: XQW.Guid;
  statecode: pc_transaction_statecode;
  statuscode: pc_transaction_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface pc_Transaction_Expand {
}
interface pc_Transaction_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  pc_amount_base_formatted?: string;
  pc_amount_formatted?: string;
  pc_bankaccount_formatted?: string;
  pc_date_formatted?: string;
  pc_nonpaymentamount_base_formatted?: string;
  pc_nonpaymentamount_formatted?: string;
  pc_paymenttotalamount_base_formatted?: string;
  pc_paymenttotalamount_formatted?: string;
  pc_remainingamount_base_formatted?: string;
  pc_remainingamount_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface pc_Transaction_Result extends pc_Transaction_Base, pc_Transaction_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  pc_bankaccount_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface pc_Transaction_RelatedOne {
}
interface pc_Transaction_RelatedMany {
}
interface WebEntitiesRetrieve {
  pc_transactions: WebMappingRetrieve<pc_Transaction_Select,pc_Transaction_Expand,pc_Transaction_Filter,pc_Transaction_Fixed,pc_Transaction_Result,pc_Transaction_FormattedResult>;
}
interface WebEntitiesRelated {
  pc_transactions: WebMappingRelated<pc_Transaction_RelatedOne,pc_Transaction_RelatedMany>;
}
interface WebEntitiesCUDA {
  pc_transactions: WebMappingCUDA<pc_Transaction_Create,pc_Transaction_Update,pc_Transaction_Select>;
}
