require_relative "../lib/active_support_extensions/date_and_time/calculations"

module UpcomingDates
  WEEK_DAYS = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
  }

  def upcoming_dates(day_of_week, num_of_weeks)
    upcoming_dates = []
    date = Date.today
    if WEEK_DAYS.fetch(day_of_week) == date.wday
      upcoming_dates.push(date)
      num_of_weeks = num_of_weeks - 1
    end
    num_of_weeks.times do
      date = date.next_occurring(day_of_week)
      upcoming_dates.push(date)
    end
    return upcoming_dates
  end
end
