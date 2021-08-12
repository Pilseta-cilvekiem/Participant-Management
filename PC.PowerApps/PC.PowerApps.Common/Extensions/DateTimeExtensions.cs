using System;

namespace PC.PowerApps.Common.Extensions
{
    public static class DateTimeExtensions
    {
        public static bool IsLastDayOfMonth(this DateTime dateTime)
        {
            int daysInMonth = DateTime.DaysInMonth(dateTime.Year, dateTime.Month);
            return dateTime.Day == daysInMonth;
        }
    }
}
