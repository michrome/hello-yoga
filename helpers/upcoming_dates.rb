require_relative "../lib/active_support_extensions/date_and_time/calculations"

module UpcomingDates
  def upcoming_dates(day_of_week, num_of_weeks)
    upcoming_dates = []
    date = Date.today
    num_of_weeks.times do
      date = date.next_occurring(day_of_week)
      upcoming_dates.push(date)
    end
    return upcoming_dates
  end
end
