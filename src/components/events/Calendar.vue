<template>
  <div class="w-full flex align-center justify-between mt-8 list-view bg-white shadow rounded-lg">
    <table class="w-full border-collapse table-fixed relative">
      <thead>
        <tr class="text-grey-dark text-xs text-center uppercase">
          <th class="py-6 w-16" v-for="(day, i) in days" :key="i">{{day}}</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(week, i) in daysInSelectedMonth" :key="i" class="h-48">
          <td v-for="day in week" :key="day.id" class="border h-48 align-top w-16 select-none relative" @mouseover="hoveredDay = day.id"
            @mouseleave="hoveredDay = null">
            <div class="w-full inline-flex items-center justify-between h-6 p-4 text-xs" :class="day.isToday ? 'text-blue-light' : 'text-grey'">
              <p>
                {{day.text}}
              </p>
              <button v-show="hoveredDay === day.id" class="text-xs"
              :class="day.isToday ? 'text-blue-light hover:text-blue-dark' : 'text-grey hover:text-grey-dark'"
              @click.stop="addingEventDay = day.id">
                Add Event
              </button>
            </div>

            <div class="my-6 relative">
              <on-click-outside :do="() => selectedEvent = null">
                <div>
                  <div v-for="event in showMore(day, day.events)" :key="event.id" class="relative shadow hover:shadow-md mx-1 my-3 p-2 border-l-4 rounded-r"
                    :class="`bg-${event.color}-lightest text-${event.color}-dark border-${event.color}-dark`"
                    @click.stop="selectedEvent = selectedEvent ? null : event.id">
                    <p class="truncate cursor-pointer">
                      {{event.title}}
                    </p>

                    <div v-if="selectedEvent === event.id" class="event-detail mt-px text-sm shadow-lg text-grey-darker leading-normal rounded bg-white border absolute animated zoomIn flex flex-col z-20 flex flex-col"
                      style="top: 0; left: 105%; width: 20rem;">
                      <event :event="event"></event>
                    </div>

                  </div>
                  <p v-if="(len = day.events.length) > 2 && showingMoreDay !== day.id" class="cursor-pointer text-grey hover:text-grey-darker text-xs inline-flex items-center justify-center w-full"
                    @click="showingMoreDay = day.id">
                    &#43; {{len - 2}} more {{pluralize('event', len - 2)}}
                  </p>
                  <p v-if="(len = day.events.length) > 2 && showingMoreDay === day.id" class="cursor-pointer text-grey hover:text-grey-darker text-xs inline-flex items-center justify-center w-full"
                    @click="showingMoreDay = null">
                    &#8722; Hide extra events
                  </p>
                </div>
              </on-click-outside>
            </div>

            <div v-if="addingEventDay === day.id" class="event-detail mt-px text-sm shadow-lg text-grey-darker leading-normal rounded bg-white border absolute animated zoomIn flex flex-col z-20 flex flex-col"
              style="top: 0; left: 105%; width: 20rem;">
              <create-event :start_date="day.value" @close="addingEventDay = null" :calendar_id="calendar.id" @saved="eventCreated"></create-event>
            </div>

          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {
  format,
  startOfWeek,
  endOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  isSameMonth,
  isSameDay
} from 'date-fns'

import Event from '@/components/events/Event'
import CreateEvent from '@/components/events/CreateEvent'

const daysInWeekFormat = 'E'
const daysInMonthFormat = 'd'
const nonDaysInMonthFormat = 'LLL d'
const today = new Date()

export default {
  props: ['selectedMonth'],
  data () {
    return {
      days: [],
      selectedDay: null,
      selectedEvent: null,
      events: [],
      showingMoreDay: null,
      hoveredDay: null,
      addingEventDay: null,
      calendar: {}
    }
  },
  created () {
    this.daysInAWeek()
    this.readyCallbacks([() => this.getEventsForSelectedMonth(this.selectedMonth), this.getCalendar])
  },
  components: {
    Event,
    CreateEvent
  },
  computed: {
    daysInSelectedMonth () {
      const daysInMonth = []

      const monthStartDate = startOfMonth(this.selectedMonth)
      const monthEndDate = endOfMonth(this.selectedMonth)
      const startDate = startOfWeek(monthStartDate)
      const endDate = endOfWeek(monthEndDate)

      let day = startDate
      let id = 0

      while (day < endDate) {
        const week = []
        for (let i = 0; i < 7; i++) {
          const date = addDays(day, i)
          const inCurrentMonth = isSameMonth(date, monthStartDate)
          const isSelected = isSameDay(date, this.selectedDay)
          const isToday = isSameDay(date, today)
          const events = this.eventsInDay(date)
          const isFirstOrLast = isSameDay(date, startDate) || isSameDay(date, endDate)

          let form = null

          if (isFirstOrLast) {
            form = nonDaysInMonthFormat
          } else {
            form = daysInMonthFormat
          }

          const formattedDay = format(date, form, {
            awareOfUnicodeTokens: true
          })

          week.push({
            id: ++id,
            text: formattedDay,
            value: date,
            inCurrentMonth,
            isSelected,
            isToday,
            events
          })
        }

        day = addDays(day, 7)
        daysInMonth.push(week)
      }

      return daysInMonth
    }
  },
  methods: {
    eventCreated (event) {
      this.events.unshift(event)
      this.addingEventDay = null
    },
    async getCalendar () {
      const path = `calendars`
      const url = this.$http.url(path)

      try {
        const response = await this.$http.get(url, this.authToken)
        this.calendar = response[0]
      } catch (err) {

      } finally {
        // this.loadingMore = false
      }
    },
    showMore (day, events) {
      if (day.id === this.showingMoreDay) {
        return events
      } else {
        return events.slice(0, 2)
      }
    },
    eventsInDay (day) {
      return this.events.filter(event => isSameDay(event.start_date, day))
    },
    daysInAWeek () {
      let startDate = startOfWeek(this.selectedMonth)
      for (let i = 0; i < 7; i++) {
        let day = format(addDays(startDate, i), daysInWeekFormat, {
          awareOfUnicodeTokens: true
        })
        this.days.push(day)
      }
    },
    async getEventsForSelectedMonth (month) {
      this.events = []

      const monthStartDate = startOfMonth(month)
      const monthEndDate = endOfMonth(month)
      const startDate = startOfWeek(monthStartDate)
      const endDate = endOfWeek(monthEndDate)

      const path = `event_schemas?start_date=${startDate}&end_date=${endDate}`
      const url = this.$http.url(path)
      // this.loadingMore = true

      try {
        const response = await this.$http.get(url, this.authToken)
        this.events = response
      } catch (err) {

      } finally {
        // this.loadingMore = false
      }
    }
  },
  watch: {
    selectedMonth (month) {
      if (month) {
        this.getEventsForSelectedMonth(month)
      }
    }
  }
}

</script>
