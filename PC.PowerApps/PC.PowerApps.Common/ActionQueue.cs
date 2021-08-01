using Microsoft.Extensions.Logging;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PC.PowerApps.Common
{
    public class ActionQueue
    {
        private readonly Context context;
        private readonly ConcurrentQueue<Func<Task>> queue = new ConcurrentQueue<Func<Task>>();

        public ActionQueue(Context context)
        {
            this.context = context;
        }

        public void Add(Func<Task> action)
        {
            queue.Enqueue(action);
        }

        public void AddForAll<T>(IEnumerable<T> sequence, Func<T, Task> action)
        {
            foreach (T element in sequence)
            {
                Add(() => action(element));
            }
        }

        public async Task ExecuteAll()
        {
            List<Exception> exceptions = new();

            while (queue.TryDequeue(out Func<Task> action))
            {
                try
                {
                    await action();
                }
                catch (Exception e)
                {
                    context.Logger.LogError(e, "Error occured while executing action.");
                    exceptions.Add(e);
                }
            }

            if (exceptions.Count > 0)
            {
                throw new AggregateException(exceptions);
            }
        }
    }
}
