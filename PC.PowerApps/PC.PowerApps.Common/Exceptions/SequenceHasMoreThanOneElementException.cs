using System;

namespace PC.PowerApps.Common.Exceptions
{
    internal class SequenceHasMoreThanOneElementException : Exception
    {
        public SequenceHasMoreThanOneElementException(string message) : base(message)
        {
        }
    }
}
