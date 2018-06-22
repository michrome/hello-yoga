require "active_support/core_ext/date/calculations"

# Monkey patch to add next_occurring to older ActiveSupport version

module ActiveSupportExtensions
  module DateAndTime
    module Calculations
      DAYS_INTO_WEEK = {
        monday: 0,
        tuesday: 1,
        wednesday: 2,
        thursday: 3,
        friday: 4,
        saturday: 5,
        sunday: 6,
      }
      # Returns a new date/time representing the next occurrence of the specified day of week.
      #
      #   today = Date.today               # => Thu, 14 Dec 2017
      #   today.next_occurring(:monday)    # => Mon, 18 Dec 2017
      #   today.next_occurring(:thursday)  # => Thu, 21 Dec 2017
      def next_occurring(day_of_week)
        current_day_number = wday != 0 ? wday - 1 : 6
        from_now = DAYS_INTO_WEEK.fetch(day_of_week) - current_day_number
        from_now += 7 unless from_now > 0
        advance(days: from_now)
      end
    end
  end

  Date.include ActiveSupportExtensions::DateAndTime::Calculations
end
