using System;

namespace PC.PowerApps.Common.Exceptions
{
    public class SequenceHasMoreThanOneElementException : Exception
    {
        public SequenceHasMoreThanOneElementException(string message) : base(message)
        {
        }
    }
}
