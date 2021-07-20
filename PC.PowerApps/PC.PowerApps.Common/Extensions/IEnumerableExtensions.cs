using PC.PowerApps.Common.Exceptions;
using System.Collections.Generic;
using System.Linq;

namespace PC.PowerApps.Common.Extensions
{
    public static class IEnumerableExtensions
    {
        private const string CollectionEmptyText = "Collection has no elements.";
        private const string CollectionHasMultipleElementsText = "Collection has multiple elements.";

        public static T TakeSingle<T>(this IEnumerable<T> collection, string collectionEmptyText = CollectionEmptyText, string collectionHasMultipleElements = CollectionHasMultipleElementsText)
        {
            List<T> firstTwoElements = collection
                .Take(2)
                .ToList();

            switch (firstTwoElements.Count)
            {
                case 0:
                    throw new CollectionEmptyException(CollectionEmptyText);

                case 1:
                    return firstTwoElements[0];

                default:
                    throw new CollectionHasMultipleElementsException(CollectionHasMultipleElementsText);
            }
        }
    }
}
