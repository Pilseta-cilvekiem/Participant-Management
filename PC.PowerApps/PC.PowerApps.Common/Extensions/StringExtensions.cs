namespace PC.PowerApps.Common.Extensions
{
    public static class StringExtensions
    {
        public static string TakeFirst(this string @string, int maxLength)
        {
            const string Dots = "...";
            return @string is null || @string.Length <= maxLength ? @string : $"{@string.Substring(0, maxLength - Dots.Length).TrimEnd()}{Dots}";
        }
    }
}
