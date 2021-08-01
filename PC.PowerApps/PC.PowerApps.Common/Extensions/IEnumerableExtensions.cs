using System;
using System.Collections.Generic;
using System.Linq;

namespace PC.PowerApps.Common.Extensions
{
    public static class IEnumerableExtensions
    {
        private const string SequenceEmptyText = "Sequence has no elements.";
        private const string SequenceHasMoreThanOneElementText = "Sequence has more than one element.";

        public static T TakeSingle<T>(this IEnumerable<T> collection, string sequenceEmpty = SequenceEmptyText, string sequenceHasMoreThanOneElement = SequenceHasMoreThanOneElementText)
        {
            List<T> firstTwoElements = collection
                .Take(2)
                .ToList();

            switch (firstTwoElements.Count)
            {
                case 0:
                    throw new InvalidOperationException(sequenceEmpty);

                case 1:
                    return firstTwoElements[0];

                default:
                    throw new InvalidOperationException(sequenceHasMoreThanOneElement);
            }
        }

        public static T TakeSingleOrDefault<T>(this IEnumerable<T> collection, string sequenceHasMoreThanOneElement = SequenceHasMoreThanOneElementText)
        {
            List<T> firstTwoElements = collection
                .Take(2)
                .ToList();

            switch (firstTwoElements.Count)
            {
                case 0:
                    return default;

                case 1:
                    return firstTwoElements[0];

                default:
                    throw new InvalidOperationException(sequenceHasMoreThanOneElement);
            }
        }
    }
}
