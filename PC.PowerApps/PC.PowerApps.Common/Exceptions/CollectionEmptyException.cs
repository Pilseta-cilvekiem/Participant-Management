using System;

namespace PC.PowerApps.Common.Exceptions
{
    internal class CollectionEmptyException : Exception
    {
        public CollectionEmptyException(string message) : base(message)
        {
        }
    }
}
