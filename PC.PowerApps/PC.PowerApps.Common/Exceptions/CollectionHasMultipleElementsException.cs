using System;

namespace PC.PowerApps.Common.Exceptions
{
    internal class CollectionHasMultipleElementsException : Exception
    {
        public CollectionHasMultipleElementsException(string message) : base(message)
        {
        }
    }
}
