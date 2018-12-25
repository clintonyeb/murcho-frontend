<template>
  <div class="w-full flex align-center justify-between mt-8 list-view bg-white shadow rounded p-2">
    <table class="w-full border-collapse table-fixed relative">
      <thead>
        <tr class="text-grey-dark text-xs text-center uppercase">
          <th class="py-6 w-16" v-for="(day, i) in days" :key="i">{{day}}</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(week, i) in daysInSelectedMonth" :key="i" class="h-48">
          <td v-for="day in week" :key="day.id" class="border h-48 align-top w-16 select-none relative" @mouseover="hoveredDay = day.id"
            @mouseleave="hoveredDay = null" @dragover="allowEventDrop($event, day)" @drop="dropEvent($event, day)"
            :class="{'border-4 border-grey shadow-inner' : draggingOverId === day.id}">
            <div class="w-full inline-flex items-center justify-between h-6 p-4 text-xs" :class="day.isToday ? 'text-blue-light' : 'text-grey'">
              <p :class="{'underline': day.isToday}">
                {{day.text}}
              </p>

              <!-- <button v-show="hoveredDay === day.id" class="text-xs animated fadeIn" :class="day.isToday ? 'text-blue-light hover:text-blue-dark' : 'text-grey hover:text-grey-dark'"
                @click.stop="addingEventDay = day.id">
                Add Event
              </button> -->
            </div>

            <div class="my-6 relative">
              <on-click-outside :do="() => selectedEvent = null" :active="selectedEvent !== null">
                <div>
                  <div v-if="eventsLoaded && !day.events.length" v-show="hoveredDay === day.id">
                    <p class="text-grey-light text-center italic text-xs animated fadeIn">
                      No Events.
                    </p>
                  </div>
                  <div v-for="event in showMore(day, day.events)" :key="event.id" class="relative  mx-1 my-2 p-2 rounded-r"
                    :class="[`bg-${event.color}-lightest text-${event.color}-dark`, {'opacity-0' : draggingEventId === event.id && draggingEventDayId === day.id}, 
                    {'shadow cursor-move hover:shadow-md': !day.isPast}, !day.isPast ? `border-l-4 border-${event.color}-dark` : 'rounded-l' ]"
                    @click.stop="selectedEvent = selectedEvent ? null : `${event.id}${day.id}`" :draggable="!day.isPast"
                    @dragstart="dragEvent($event, event, day)" v-else>
                    <p class="truncate font-bold">
                      {{event.title}}
                    </p>
                    <p class="text-xs font-thin">
                      {{event.start_date | formatDate}}
                    </p>

                    <div v-if="selectedEvent === `${event.id}${day.id}`" class="event-detail mt-px text-sm shadow-lg text-grey-darker leading-normal rounded bg-white border absolute animated zoomIn flex flex-col z-20 flex flex-col"
                      style="top: 0; left: 105%; width: 20rem;">
                      <event :event="event" :day="day" @edit-event="selectedEvent = null, $emit('edit-event', {event, day})"
                        @close="selectedEvent = null"></event>
                    </div>

                  </div>
                  <div class="mt-2 cursor-pointer text-grey hover:text-grey-darker text-xs inline-flex items-center justify-center w-full">
                    <p v-if="(len = day.events.length) > 2 && showingMoreDay !== day.id" class="" @click="showingMoreDay = day.id">
                      &#43; {{len - 2}} more {{pluralize('event', len - 2)}}
                    </p>
                    <p v-if="(len = day.events.length) > 2 && showingMoreDay === day.id" @click="showingMoreDay = null">
                      &#8722; Hide extra events
                    </p>
                  </div>
                </div>
              </on-click-outside>
            </div>

            <!-- <div v-if="addingEventDay === day.id" class="event-detail mt-px text-sm shadow-lg text-grey-darker leading-normal rounded bg-white border absolute animated zoomIn flex flex-col z-20 flex flex-col"
              style="top: 0; left: 105%; width: 20rem;">
              <create-event :start_date="day.value" @close="addingEventDay = null" :calendar_id="calendar.id" @saved="eventCreated"></create-event>
            </div> -->

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
    isSameDay,
    differenceInDays,
    setHours,
    setMinutes
  } from 'date-fns'

  import Event from '@/components/events/Event'

  const daysInWeekFormat = 'E'
  const daysInMonthFormat = 'd'
  const nonDaysInMonthFormat = 'LLL d'
  const dateFormat = 'hh:mm a'
  const today = new Date()

  export default {
    props: ['selectedMonth'],
    data() {
      return {
        days: [],
        selectedDay: null,
        selectedEvent: null,
        events: [],
        showingMoreDay: null,
        hoveredDay: null,
        addingEventDay: null,
        calendar: {},
        eventsLoaded: false,
        activeAction: null,
        draggingOverId: null,
        draggingEventId: null,
        draggingEventDayId: null
      }
    },
    created() {
      this.daysInAWeek()
      this.readyCallbacks([this.refresh])
    },
    components: {
      Event,
      // CreateEvent,
    },
    computed: {
      daysInSelectedMonth() {
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
            const isPast = differenceInDays(date, today) < 0
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
              isPast,
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
      allowEventDrop($event, day) {
        $event.preventDefault()
        if (!day.isPast) {
          this.draggingOverId = day.id
        }
      },
      dropEvent($event, day) {
        this.draggingOverId = null

        const event = JSON.parse($event.dataTransfer.getData("event"));
        const eventDayId = Number($event.dataTransfer.getData("day"));
        const previousDayDate = $event.dataTransfer.getData("day_date");

        if (day.isPast || eventDayId === day.id) {
          this.draggingEventId = null
          return
        }

        // check if day doesn't already contain similar events
        if (event.is_recurring) {
          const similar = day.events.find(ev => ev.id === event.id)
          if (similar) {
            this.draggingEventId = null
            return
          }
        }

        let startDate = day.value
        startDate = setHours(startDate, new Date(event.start_date).getHours())
        startDate = setMinutes(startDate, new Date(event.start_date).getMinutes())

        $event.preventDefault()

        // for UI update
        event._start_date = previousDayDate

        this.$emit('reschedule', {
          event,
          startDate
        })

      },
      dragEvent($event, event, day) {
        this.draggingEventId = event.id
        this.draggingEventDayId = day.id
        $event.dataTransfer.setData("event", JSON.stringify(event));
        $event.dataTransfer.setData("day", day.id);
        $event.dataTransfer.setData("day_date", day.value.toISOString());
      },
      getDaysMatchingEvent(event) {
        return this.events.filter(e => e.id === event.id).map(e => e.start_date)
      },
      refresh() {
        this.getEventsForSelectedMonth(this.selectedMonth)
      },
      update(event){
        const index = this.events.findIndex(ev => (ev.id === event.id))
        this.events.splice(index, 1, event)
        this.draggingEventId = null
      },
      updateRecurring(event){
        const index = this.events.findIndex(ev => (ev.id === event.id && isSameDay(ev.start_date, event._start_date)))
        // this.events.findIndex(ev => (ev.id === event.id && console.log(isSameDay(ev.start_date, event._start_date), event._start_date, ev.start_date)))
        if(index === -1){
          this.draggingEventId = null
          return  
        }
        this.events.splice(index, 1, event)
        this.draggingEventId = null
      },
      addEvents(events) {
        this.events = events.concat(this.events)
      },
      removeEventsAfterDate(event, endDate) {
        this.events = this.events.filter(ev => !(ev.id === event.id && new Date(ev.start_date) > endDate))
      },
      removeEventWithStartDate(event) {
        this.events = this.events.filter(ev => !(ev.id === event.id && ev.start_date === event.start_date))
      },
      removeEvent(event) {
        this.events = this.events.filter(ev => ev.id !== event.id)
      },
      updateEvents(events) {
        this.refresh()
      },
      eventCreated(event) {
        this.events.unshift(event)
        this.addingEventDay = null
      },
      async getCalendar() {
        const path = `calendars`

        try {
          const response = await this.$http.get(path, this.authToken)
          this.calendar = response[0]
        } catch (err) {

        } finally {
          // this.loadingMore = false
        }
      },
      showMore(day, events) {
        if (day.id === this.showingMoreDay) {
          return events
        } else {
          return events.slice(0, 2)
        }
      },
      eventsInDay(day) {
        return this.events.filter(event => isSameDay(event.start_date, day))
      },
      daysInAWeek() {
        let startDate = startOfWeek(this.selectedMonth)
        for (let i = 0; i < 7; i++) {
          let day = format(addDays(startDate, i), daysInWeekFormat, {
            awareOfUnicodeTokens: true
          })
          this.days.push(day)
        }
      },
      getDateSettings(month = this.month) {
        const monthStartDate = startOfMonth(month)
        const monthEndDate = endOfMonth(month)
        const startDate = startOfWeek(monthStartDate)
        const endDate = endOfWeek(monthEndDate)

        return {
          monthStartDate,
          monthEndDate,
          startDate,
          endDate
        }
      },
      async getEventsForSelectedMonth(month) {
        this.events = []
        const settings = this.getDateSettings(month)

        const path = `event_schemas?start_date=${settings.startDate}&end_date=${settings.endDate}`
        // this.loadingMore = true

        try {
          const response = await this.$http.get(path, this.authToken)
          this.events = response
          this.eventsLoaded = true
        } catch (err) {

        } finally {
          // this.loadingMore = false
        }
      }
    },
    watch: {
      selectedMonth(month) {
        if (month) {
          this.getEventsForSelectedMonth(month)
        }
      },
      calendar(val) {
        if (val) this.$emit('calendar', val)
      }
    },
    filters: {
      formatDate(dateString) {
        const date = new Date(dateString)
        return format(date, dateFormat, {
          awareOfUnicodeTokens: true
        })
      }
    }
  }

</script>
