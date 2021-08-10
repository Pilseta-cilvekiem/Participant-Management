using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Tooling.Connector;
using PC.PowerApps.ClientBase;
using PC.PowerApps.Common;
using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Repositories;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Threading.Tasks;

namespace PC.PowerApps.TestConsoleApp
{
    [SuppressMessage("CodeQuality", "IDE0051:Remove unused private members", Justification = "<Pending>")]
    [SuppressMessage("CodeQuality", "IDE0052:Remove unread private members", Justification = "<Pending>")]
    [SuppressMessage("CodeQuality", "IDE0079:Remove unnecessary suppression", Justification = "<Pending>")]
    internal class TestApp
    {
        private readonly Lazy<CrmServiceClientContext> context;
        private readonly Lazy<ScheduledJobProcessor> scheduledJobProcessor;
        private readonly IConfiguration configuration;

        private CrmServiceClientContext Context => context.Value;

        public TestApp(Lazy<CrmServiceClientContext> context, Lazy<ScheduledJobProcessor> scheduledJobProcessor, IConfiguration configuration)
        {
            this.context = context;
            this.scheduledJobProcessor = scheduledJobProcessor;
            this.configuration = configuration;
        }

#pragma warning disable CS1998 // Async method lacks 'await' operators and will run synchronously
        public async Task Execute()
#pragma warning restore CS1998 // Async method lacks 'await' operators and will run synchronously
        {
            //transactionRepository.Value.ImportFromAnnotation(new Guid("56E11FE7-CE69-9BCC-B230-B2820280DED5"));

            //await scheduledJobProcessor.Value.ExecuteAll();

            //List<string> attributeNames = Utils.GetAttributeNames<Annotation>(a => new Annotation { DocumentBody = a.DocumentBody, IsDocument = a.IsDocument });

            //Annotation annotation = new Annotation { };
            //AnnotationRepository.ScheduleImportSwedbankTransactions(Context, annotation);

            //List<pc_Transaction> transactions = Context.ServiceContext.pc_TransactionSet.ToList();

            //List<pc_Transaction> transactions = Context.ServiceContext.pc_TransactionSet
            //    .Where(t => t.StateCode == pc_TransactionState.Active && t.pc_Name == "2021080200010469")
            //    .ToList();

            //foreach (pc_Transaction transaction in transactions)
            //{
            //    //TransactionRepository.Process(Context, transaction);
            //    //TransactionRepository.SetDefaults(transaction);
            //    TransactionRepository.CalculatePaymentTotalAmount(Context, transaction.Id);
            //    //Console.Write("+");
            //}

            //Console.WriteLine(Utils.IsInNamespaces(GetType(), "Microsoft.Xrm.Sdk", nameof(System)));

            //await ContactRepository.UpdateRequiredParticipationFee(Context);

            //Contact contact = Context.ServiceContext.Retrieve<Contact>(new Guid("1c9490aa-40ed-eb11-bacb-000d3a3a2279"));
            //ContactRepository.UpdateRequiredParticipationFee(Context, contact);

            //Contact contact = Context.ServiceContext.Retrieve<Contact>(new Guid("0d5e1852-00e8-eb11-bacb-000d3abb9ce3"));
            ////Context.ServiceContext.ClearChanges();
            //contact = Context.ServiceContext.Retrieve<Contact>(new Guid("0d5e1852-00e8-eb11-bacb-000d3abb9ce3"));
            //_ = Context.ServiceContext.UpdateModifiedAttributes<Contact>(contact.ToEntityReference());

            //ContactRepository.SendDebtReminder(Context, new Guid("1a9490aa-40ed-eb11-bacb-000d3a3a2279"));

            //await GoogleGroupMemberRepository.SynchronizeSupporters(Context);

            //List<Contact> contacts = Context.ServiceContext.ContactSet.ToList();

            //foreach (Contact contact in contacts)
            //{
            //    ContactRepository.CalculatePaidParticipationFee(Context, contact.Id);
            //}

            //CrmServiceClient crmServiceClient = new(configuration.GetConnectionString("Dataverse"));
            ////QueryExpression queryExpression = new(SystemUser.EntityLogicalName);
            ////queryExpression.Criteria.AddCondition("systemuserid", ConditionOperator.EqualUserId);
            //Stopwatch stopwatch = Stopwatch.StartNew();
            //_ = crmServiceClient.GetMyCrmUserId();
            ////crmServiceClient.RetrieveMultiple(queryExpression);
            //Console.WriteLine($"{stopwatch.Elapsed.TotalMilliseconds}");

            //Contact contact = Context.ServiceContext.Retrieve<Contact>(new Guid("0d5e1852-00e8-eb11-bacb-000d3abb9ce3"));
            //contact.FirstName = "Test";
            //Context.ServiceContext.UpdateModifiedAttributes(contact);

            //ContactRepository.UpdateParticipationLevels(Context);

            //pc_Payment payment = Context.ServiceContext.Retrieve<pc_Payment>(new Guid("04a7a7b1-d3f9-eb11-94ef-000d3a4bfac3"));
            //payment.pc_Amount = new(-1);
            //_ = Context.ServiceContext.UpdateModifiedAttributes(payment);

            pc_Participation participation = new()
            {
                pc_Contact = new EntityReference(Contact.EntityLogicalName, new Guid("0d5e1852-00e8-eb11-bacb-000d3abb9ce3")),
                pc_From = new DateTime(2017, 9, 25),
                pc_Till = new DateTime(2021, 9, 26),
            };
            _ = ParticipationRepository.GetParticipationWithinSamePeriod(Context, participation);
        }
    }
}
