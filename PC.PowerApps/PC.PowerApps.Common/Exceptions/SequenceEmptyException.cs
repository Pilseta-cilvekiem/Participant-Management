using System;

namespace PC.PowerApps.Common.Exceptions
{
    class SequenceEmptyException : Exception
    {
        public SequenceEmptyException(string message) : base(message)
        {
        }
    }
}
