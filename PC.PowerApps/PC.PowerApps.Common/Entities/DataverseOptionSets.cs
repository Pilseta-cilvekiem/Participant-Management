
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
// Created via this command line: "C:\Users\Mihails\AppData\Roaming\MscrmTools\XrmToolBox\Plugins\DLaB.EarlyBoundGenerator\crmsvcutil.exe" /namespace:"PC.PowerApps.Common.Entities.Dataverse" /SuppressGeneratedCodeAttribute /out:"C:\Users\Mihails\source\repos\Power-Apps\PC.PowerApps\PC.PowerApps.Common\Entities\DataverseOptionSets.cs" /codecustomization:"DLaB.CrmSvcUtilExtensions.OptionSet.CustomizeCodeDomService,DLaB.CrmSvcUtilExtensions" /codegenerationservice:"DLaB.CrmSvcUtilExtensions.OptionSet.CustomCodeGenerationService,DLaB.CrmSvcUtilExtensions" /codewriterfilter:"DLaB.CrmSvcUtilExtensions.OptionSet.CodeWriterFilterService,DLaB.CrmSvcUtilExtensions" /namingservice:"DLaB.CrmSvcUtilExtensions.NamingService,DLaB.CrmSvcUtilExtensions" /metadataproviderservice:"DLaB.CrmSvcUtilExtensions.BaseMetadataProviderService,DLaB.CrmSvcUtilExtensions" /connectionstring:"AuthType=OAuth;Username=mihails.simvulidi@pilsetacilvekiem.lv;Url=https://pilsetacilvekiem.api.crm4.dynamics.com;AppId=51f81489-12ee-4a9e-aaae-a2591f45987d;RedirectUri=app://58145b91-0c36-4500-8554-080854f2ac97/;TokenCacheStorePath=C:\Users\Mihails\AppData\Local\Temp\{bba94f33-cdc2-4ed2-9161-9b8bc593c537};LoginPrompt=Auto" 
//------------------------------------------------------------------------------

namespace PC.PowerApps.Common.Entities.Dataverse
{
	
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Contact_AccountRoleCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Decision Maker", 0)]
		DecisionMaker = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Employee", 1)]
		Employee = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Influencer", 2)]
		Influencer = 3,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Contact_Address1_AddressTypeCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Bill To", 0)]
		BillTo = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Other", 3)]
		Other = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Primary", 2)]
		Primary = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Ship To", 1)]
		ShipTo = 2,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Contact_Address1_FreightTermsCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("FOB", 0)]
		FOB = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("No Charge", 1)]
		NoCharge = 2,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Contact_Address1_ShippingMethodCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Airborne", 0)]
		Airborne = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("DHL", 1)]
		DHL = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("FedEx", 2)]
		FedEx = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Full Load", 5)]
		FullLoad = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Postal Mail", 4)]
		PostalMail = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("UPS", 3)]
		UPS = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Will Call", 6)]
		WillCall = 7,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Contact_Address2_AddressTypeCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Default Value", 0)]
		DefaultValue = 1,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Contact_Address2_FreightTermsCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Default Value", 0)]
		DefaultValue = 1,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Contact_Address2_ShippingMethodCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Default Value", 0)]
		DefaultValue = 1,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Contact_Address3_AddressTypeCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Default Value", 0)]
		DefaultValue = 1,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Contact_Address3_FreightTermsCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Default Value", 0)]
		DefaultValue = 1,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Contact_Address3_ShippingMethodCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Default Value", 0)]
		DefaultValue = 1,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Contact_CustomerSizeCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Default Value", 0)]
		DefaultValue = 1,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Contact_CustomerTypeCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Default Value", 0)]
		DefaultValue = 1,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Contact_EducationCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Default Value", 0)]
		DefaultValue = 1,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Contact_FamilyStatusCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Divorced", 2)]
		Divorced = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Married", 1)]
		Married = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Single", 0)]
		Single = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Widowed", 3)]
		Widowed = 4,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Contact_GenderCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Female", 1)]
		Female = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Male", 0)]
		Male = 1,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Contact_HasChildrenCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Default Value", 0)]
		DefaultValue = 1,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Contact_LeadSourceCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Default Value", 0)]
		DefaultValue = 1,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Contact_PaymentTermsCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("2% 10, Net 30", 1)]
		_210Net30 = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Net 30", 0)]
		Net30 = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Net 45", 2)]
		Net45 = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Net 60", 3)]
		Net60 = 4,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Contact_PreferredAppointmentDayCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Friday", 5)]
		Friday = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Monday", 1)]
		Monday = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Saturday", 6)]
		Saturday = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Sunday", 0)]
		Sunday = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Thursday", 4)]
		Thursday = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Tuesday", 2)]
		Tuesday = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Wednesday", 3)]
		Wednesday = 3,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Contact_PreferredAppointmentTimeCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Afternoon", 1)]
		Afternoon = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Evening", 2)]
		Evening = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Morning", 0)]
		Morning = 1,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Contact_PreferredContactMethodCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Any", 0)]
		Any = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Email", 1)]
		Email = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Fax", 3)]
		Fax = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Mail", 4)]
		Mail = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Phone", 2)]
		Phone = 3,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Contact_ShippingMethodCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Default Value", 0)]
		DefaultValue = 1,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Contact_StatusCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Active", 0)]
		Active = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Inactive", 1)]
		Inactive = 2,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Contact_TerritoryCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Default Value", 0)]
		DefaultValue = 1,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum pc_BankAccount_StatusCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Active", 0)]
		Active = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Inactive", 1)]
		Inactive = 2,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum pc_Payment_StatusCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Active", 0)]
		Active = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Inactive", 1)]
		Inactive = 2,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum pc_ParticipationLevel
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Member", 0, "#0000ff")]
		Member = 947970000,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Supporter", 1, "#0000ff")]
		Supporter = 947970001,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum pc_ScheduledJob_StatusCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Completed", 3, "#0000ff")]
		Completed = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Failed", 0, "#0000ff")]
		Failed = 947970001,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("In Progress", 1, "#0000ff")]
		InProgress = 947970000,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Pending", 2, "#0000ff")]
		Pending = 1,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum pc_Settings_StatusCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Active", 0)]
		Active = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Inactive", 1)]
		Inactive = 2,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum pc_Transaction_StatusCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Active", 0)]
		Active = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Inactive", 1)]
		Inactive = 2,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum TransactionCurrency_StatusCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Active", 0)]
		Active = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Inactive", 1)]
		Inactive = 2,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum appaction_ClientType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Browser", 0, "#0000ff")]
		Browser = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Mobile", 1, "#0000ff")]
		Mobile = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		[OptionSetMetadataAttribute("Mail App", 2, "#0000ff")]
		MailApp = 2,
	}
}