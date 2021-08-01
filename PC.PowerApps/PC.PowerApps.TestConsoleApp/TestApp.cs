﻿using PC.PowerApps.ClientBase;
using PC.PowerApps.Common;
using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PC.PowerApps.TestConsoleApp
{
    internal class TestApp
    {
        private readonly Lazy<CrmServiceClientContext> context;
        private readonly Lazy<ScheduledJobProcessor> scheduledJobProcessor;

        private CrmServiceClientContext Context => context.Value;

        public TestApp(Lazy<CrmServiceClientContext> context, Lazy<ScheduledJobProcessor> scheduledJobProcessor)
        {
            this.context = context;
            this.scheduledJobProcessor = scheduledJobProcessor;
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

            List<pc_Transaction> transactions = Context.ServiceContext.pc_TransactionSet.ToList();

            foreach (pc_Transaction transaction in transactions)
            {
                //TransactionRepository.Process(Context, transaction);
                TransactionRepository.SetDefaults(transaction);
                TransactionRepository.CalculateRemainingAmount(transaction);
                _ = Context.ServiceContext.UpdateModifiedAttributes(transaction);
                Console.Write("+");
            }
        }
    }
}