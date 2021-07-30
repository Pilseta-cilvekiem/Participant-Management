using System;

namespace PC.PowerApps.Common.Exceptions
{
    internal class SequenceEmptyException : Exception
    {
        public SequenceEmptyException(string message) : base(message)
        {
        }
    }
}
