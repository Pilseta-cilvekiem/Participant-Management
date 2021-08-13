using System;

namespace PC.PowerApps.Common.Extensions
{
    public static class DateTimeExtensions
    {
        public static DateTime GetFirstDayOfMonth(this DateTime dateTime)
        {
            return new DateTime(dateTime.Year, dateTime.Month, 1, 0, 0, 0, dateTime.Kind);
        }

        public static DateTime GetLastDayOfMonth(this DateTime dateTime)
        {
            int daysInMonth = DateTime.DaysInMonth(dateTime.Year, dateTime.Month);
            return new DateTime(dateTime.Year, dateTime.Month, daysInMonth, 0, 0, 0, dateTime.Kind);
        }

        public static bool IsLastDayOfMonth(this DateTime dateTime)
        {
            int daysInMonth = DateTime.DaysInMonth(dateTime.Year, dateTime.Month);
            return dateTime.Day == daysInMonth;
        }
    }
}
