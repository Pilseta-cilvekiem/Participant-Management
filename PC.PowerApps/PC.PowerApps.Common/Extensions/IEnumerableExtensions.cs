using PC.PowerApps.Common.Exceptions;
using System.Collections.Generic;
using System.Linq;

namespace PC.PowerApps.Common.Extensions
{
    public static class IEnumerableExtensions
    {
        private const string SequenceEmptyText = "Sequence has no elements.";
        private const string SequenceHasMoreThanOneElementText = "Sequence has more than one element.";

        public static T TakeFirst<T>(this IEnumerable<T> collection, string sequenceEmptyText = SequenceEmptyText)
        {
            T firstElement = collection.FirstOrDefault();

            if (firstElement is null)
            {
                throw new SequenceEmptyException(sequenceEmptyText);
            }

            return firstElement;
        }

        public static T TakeSingle<T>(this IEnumerable<T> collection, string sequenceEmptyText = SequenceEmptyText, string sequenceHasMoreThanOneElementText = SequenceHasMoreThanOneElementText)
        {
            List<T> firstTwoElements = collection
                .Take(2)
                .ToList();

            switch (firstTwoElements.Count)
            {
                case 0:
                    throw new SequenceEmptyException(sequenceEmptyText);

                case 1:
                    return firstTwoElements[0];

                default:
                    throw new SequenceHasMoreThanOneElementException(sequenceHasMoreThanOneElementText);
            }
        }

        public static T TakeSingleOrDefault<T>(this IEnumerable<T> collection, string sequenceHasMoreThanOneElementText = SequenceHasMoreThanOneElementText)
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
                    throw new SequenceHasMoreThanOneElementException(sequenceHasMoreThanOneElementText);
            }
        }
    }
}
