<template>
  <div class="flex min-h-screen bg-blue-lightest-more font-serif" id="people">
    <div class="w-4/5 min-h-screen">
      <div class="mx-auto p-4 px-8 w-full">

        <div class="w-full flex align-center justify-between">
          <div class="flex items-center justify-between w-full">
            <div class="inline-flex items-center justify-between">
              <h3 class="text-blue-light font-black text-2xl mr-4">Events</h3>
              <div class="inline-flex items-center">
                <button class="bg-white text-grey-dark h-8 p-3 inline-flex items-center border border-grey-light rounded-l"
                  @click="previousMonth">
                  <span v-html="icons.back" class="text-grey"></span>
                </button>
                <button class="bg-white text-grey-dark h-8 p-3 inline-flex items-center justify-between border border-grey-light w-48">
                  <span class="mr-2">{{displayedMonth}}</span>
                  <svg class="h-2 w-2 fill-current text-grey ml-2" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="292.362px" height="292.362px"
                    viewBox="0 0 292.362 292.362" style="enable-background:new 0 0 292.362 292.362;" xml:space="preserve">
                    <path d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z" />
                  </svg>
                </button>
                <button class="bg-white text-grey-dark h-8 p-3 inline-flex items-center border border-grey-light rounded-r"
                  @click="nextMonth">
                  <span v-html="icons.forward"></span>
                </button>
              </div>
            </div>

            <div class="flex items-baseline justify-between">
              <div class="inline-flex">

                <on-click-outside :do="() => viewsActive = false" :active="viewsActive">
                  <div class="inline-flex items-center justify-center cursor-pointer relative mr-4" @click="viewsActive = !viewsActive">
                    <div class="inline-flex items-center border justify-center border-blue p-2 rounded bg-white-dark text-white w-24">
                      <p class="text-xs ml-1 text-blue font-bold">{{viewMode.text}}</p>
                      <svg class="h-2 w-2 fill-current text-blue ml-1 self-center" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="292.362px" height="292.362px"
                        viewBox="0 0 292.362 292.362" style="enable-background:new 0 0 292.362 292.362;" xml:space="preserve">
                        <g>
                          <path d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"></path>
                        </g>
                      </svg>
                    </div>

                    <div v-show="viewsActive" class="z-10 mt-px text-sm text-center shadow-md text-grey-darker leading-normal rounded bg-white border absolute animated zoomIn flex flex-col overflow-hidden"
                      style="min-width: 200px; top: 100%;">
                      <a v-for="view in viewModes" :key="view.id" class="cursor-pointer no-underline flex items-center justify-start px-4 py-3 whitespace-no-wrap group hover:text-white hover:bg-blue-light"
                        @click="viewMode = view">
                        <span class="group-hover:text-white">{{view.text}}</span>
                      </a>
                    </div>
                  </div>
                </on-click-outside>

                <button class="bg-blue text-white h-8 p-3 inline-flex items-center justify-between rounded" @click="createEvent">
                  <span v-html="icons.plus" class="mr-2 text-white"></span>
                  <span class="mr-2">Create Event</span>
                </button>

              </div>

            </div>
          </div>
        </div>

        <div class="w-full mt-2">
          <calendar :selectedMonth="selectedMonth" @calendar="activeCalendar = $event" ref="calendar" @edit-event="showEditEvent"
            @reschedule="rescheduleEvent"></calendar>
        </div>

      </div>
    </div>
    <div class="w-1/5 overflow-y-hidden">
      <div class="mx-auto py-4 pr-2 w-full">
        <div class="inline-flex w-full items-center justify-between">
          <h3 class="text-blue-light font-semibold text-base h-10 flex items-center">Upcoming Events</h3>
          <button class="text-blue-light rounded-full hover:text-blue inline-flex items-center pr-4" @click="loadUpcomingEvents">
            <svg class="spinner ml-2 h-5 w-5 fill-current animated fadeIn" version="1.1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 26.349 26.35" style="enable-background:new 0 0 26.349 26.35;"
            xml:space="preserve" v-if="loadingUpcomingEvents">
            <g>
              <circle cx="13.792" cy="3.082" r="3.082" />
              <circle cx="13.792" cy="24.501" r="1.849" />
              <circle cx="6.219" cy="6.218" r="2.774" />
              <circle cx="21.365" cy="21.363" r="1.541" />
              <circle cx="3.082" cy="13.792" r="2.465" />
              <circle cx="24.501" cy="13.791" r="1.232" />
              <path d="M4.694,19.84c-0.843,0.843-0.843,2.207,0,3.05c0.842,0.843,2.208,0.843,3.05,0c0.843-0.843,0.843-2.207,0-3.05C6.902,18.996,5.537,18.988,4.694,19.84z" />
              <circle cx="21.364" cy="6.218" r="0.924" />
            </g>
          </svg>
          <svg v-else class="ml-2 h-5 w-5 fill-current animated fadeIn" version="1.1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 26.349 26.35" style="enable-background:new 0 0 26.349 26.35;"
            xml:space="preserve">
            <g>
              <circle cx="13.792" cy="3.082" r="3.082" />
              <circle cx="13.792" cy="24.501" r="1.849" />
              <circle cx="6.219" cy="6.218" r="2.774" />
              <circle cx="21.365" cy="21.363" r="1.541" />
              <circle cx="3.082" cy="13.792" r="2.465" />
              <circle cx="24.501" cy="13.791" r="1.232" />
              <path d="M4.694,19.84c-0.843,0.843-0.843,2.207,0,3.05c0.842,0.843,2.208,0.843,3.05,0c0.843-0.843,0.843-2.207,0-3.05C6.902,18.996,5.537,18.988,4.694,19.84z" />
              <circle cx="21.364" cy="6.218" r="0.924" />
            </g>
          </svg>
          </button>
        </div>

        <div class="w-full h-screen" v-if="upcomingLoaded && !upcomingEvents.length">
          <div class="container m-auto h-full relative">
            <div class="absolute my-10">
              <p class="font-medium text-grey text-lg text-center mt-4">
                No upcoming events.
              </p>
            </div>
          </div>
        </div>

        <event v-for="event in upcomingEvents" :key="event.id" :event="event" :loading="loadingUpcomingEvents" class="mt-6"></event>
      </div>
    </div>

    <transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
      <div class="bg-white p-6 fixed pin-t pin-r w-1/3 h-screen shadow-lg z-20 overflow-y-auto" v-show="drawer.state"
        style="animation-duration: 500ms;">
        <div class="w-full inline-flex items-center justify-between">
          <p class="inline-flex text-grey" v-if="activeAction === 'email'">
            <span>
              <svg version="1.1" class="w-5 h5 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                <path d="M510.576,264.536l-58.431-157.94c-2.122-5.739-6.353-10.307-11.913-12.863c-5.559-2.556-11.78-2.796-17.519-0.672L137.796,198.467c-5.739,2.123-10.307,6.354-12.864,11.912c-2.556,5.559-2.795,11.781-0.672,17.519l58.431,157.94c2.122,5.739,6.353,10.307,11.913,12.864c3.05,1.403,6.299,2.107,9.559,2.107c2.682,0,5.37-0.476,7.961-1.435l284.918-105.406h0.001C508.886,289.585,514.958,276.382,510.576,264.536z M407.052,123.279l-88.377,126.344l-149.327-38.405L407.052,123.279zM200.044,366.731l-50.683-137l117.382,30.192L200.044,366.731z M224.863,370.237l65.152-104.33l30.642,7.882c0.951,0.241,1.913,0.367,2.852,0.367c3.688,0,7.216-1.787,9.392-4.891l18.133-25.944l117.369,36.818L224.863,370.237zM364.814,223.638l69.463-99.324l50.703,137.019L364.814,223.638z"></path>
                <path d="M133.44,388.976c-2.194-5.933-8.786-8.961-14.715-6.768l-43.162,15.968c-5.933,2.196-8.962,8.784-6.768,14.716c1.71,4.623,6.086,7.482,10.743,7.482c1.319,0,2.663-0.23,3.973-0.715l43.16-15.968C132.606,401.498,135.635,394.909,133.44,388.976z"></path>
                <path d="M75.023,282.646c-2.196-5.933-8.785-8.96-14.716-6.768l-26.643,9.857c-5.933,2.196-8.962,8.783-6.768,14.716c1.71,4.622,6.087,7.482,10.743,7.482c1.319,0,2.663-0.23,3.973-0.715l26.643-9.857C74.188,295.168,77.218,288.579,75.023,282.646z"></path>
                <path d="M41.995,369.408c-2.196-5.933-8.785-8.962-14.716-6.768l-19.797,7.324c-5.933,2.196-8.962,8.784-6.768,14.716c1.71,4.622,6.086,7.482,10.743,7.482c1.319,0,2.663-0.23,3.973-0.715l19.797-7.324C41.161,381.929,44.19,375.341,41.995,369.408z"></path>
              </svg>
            </span>
            <span>Sending Email..</span>
          </p>

          <p class="inline-flex text-grey" v-else-if="activeAction === 'sms'">
            <span v-html="icons.sms" class="mr-2"></span>
            <span>Sending SMS..</span>
          </p>

          <p class="inline-flex text-grey" v-else-if="activeAction === 'edit-person'">
            <span v-html="icons.edit" class="mr-2"></span>
            <span>Editing Group..</span>
          </p>

          <p class="inline-flex text-grey" v-else>
            <span v-html="icons.edit" class="mr-2"></span>
            <span>Editing Group..</span>
          </p>

          <svg class="cursor-pointer fill-current h-5 w-5 text-blue-light float-right mr-2" role="button" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20" @click="hideActionDrawer">
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"></path>
          </svg>

        </div>

        <div class="mt-8">
          <message :info="info" />
          <create v-if="activeAction === 'create'" :calendar_id="activeCalendar.id" @done="eventsCreated" :startDate="startDate"
            :endDate="endDate" @cancel="hideActionDrawer" />
          <edit-event v-if="activeAction === 'edit-event'" :calendar_id="activeCalendar.id" @edit="editEvent"
            :startDate="startDate" :endDate="endDate" :data="drawer.data" @cancel="hideActionDrawer" @delete="deleteEvent" />
        </div>
      </div>
    </transition>

    <!-- <transition enter-active-class="animated zoomIn" leave-active-class="animated zoomOut"> -->
    <div class="" v-if="modal.state" style="animation-duration: 500ms;">
      <div class="bg-black fixed h-full w-full pin-t pin-l opacity-25"></div>
      <div class="bg-white p-6 fixed shadow-lg z-20" style="top: 50%; left: 50%; transform: translate(-50%, -50%);"
        @keyup.esc.stop="closeModal">
        <!-- <div class="background-tint fixed w-full h-full bg-black"></div> -->
        <svg class="cursor-pointer fill-current h-5 w-5 text-blue-light float-right mr-2" role="button" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20" @click="closeModal">
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"></path>
        </svg>

        <confirm-delete v-if="activeAction === 'delete'" :event="modal.data" @cancel="closeModal" @delete="doEventDelete"
          :loading="modal.loading" />

      </div>
    </div>
    <!-- </transition> -->

  </div>
</template>

<script>
  import Calendar from '@/components/events/Calendar'
  import Create from '@/components/events/Create'
  import EditEvent from '@/components/events/Edit'
  import ConfirmDelete from '@/components/events/ConfirmDelete'

  import {
    leftIcon,
    rightIcon,
    editIcon
  } from '@/utils/icons'
  import {
    MESSAGE_TYPES
  } from '@/utils'
  import {
    format,
    addMonths,
    subMonths,
    subMinutes,
    differenceInSeconds,
    addSeconds
  } from 'date-fns'

  const dateFormat = 'MMMM YYYY'

  export default {
    name: 'People',
    data() {
      return {
        upcomingEvents: [],
        loadingUpcomingEvents: false,
        upcomingLoaded: false,
        icons: {
          edit: editIcon
        },
        activeCalendar: null,
        activeAction: null,
        modal: {
          state: false,
          action: null,
          cancel: null,
          data: null,
          loading: false,
        },
        drawer: {
          state: false,
          action: null,
          cancel: null,
          data: null,
          loading: false,
          results: null
        },
        info: {
          message: '',
          type: MESSAGE_TYPES.info,
          state: false,
          data: null
        },
        currentMonth: new Date(),
        selectedMonth: new Date(),
        icons: {
          back: leftIcon,
          forward: rightIcon
        },
        viewsActive: false,
        viewMode: null,
        viewModes: [{
            id: 1,
            text: 'Monthly',
            value: 'monthly'
          },
          {
            id: 2,
            text: 'Weekly',
            value: 'weekly'
          },
          {
            id: 3,
            text: 'Daily',
            value: 'daily'
          }
        ],
        startDate: null,
        endDate: null
      }
    },
    components: {
      Calendar,
      Create,
      ConfirmDelete,
      EditEvent,
    },
    created() {
      this.setPageTitle('Events')
      this.viewMode = this.viewModes[0]
      this.readyCallbacks([this.loadUpcomingEvents])
    },
    computed: {
      displayedMonth() {
        return format(this.selectedMonth, dateFormat, {
          awareOfUnicodeTokens: true
        })
      }
    },
    methods: {
      async loadUpcomingEvents() {
        if(this.loadingUpcomingEvents) return

        this.loadingUpcomingEvents = true
        this.upcomingLoaded = false

        const limit = 10
        const path = `upcoming_events?limit=${limit}`
        this.loadingUpcomingEvents = true
        try {
          const response = await this.$http.get(path, this.authToken)
          this.upcomingEvents = response
          this.upcomingLoaded = true
        } catch (err) {
          console.log(err)
        } finally {
          this.loadingUpcomingEvents = false
        }
      },
      async rescheduleEvent(payload) {
        const calendarSettings = this.$refs['calendar'].getDateSettings(this.selectedMonth)
        this.startDate = calendarSettings.startDate
        this.endDate = calendarSettings.endDate

        const event = payload.event
        const startDate = payload.startDate

        let endDate = null

        if (!event.is_recurring) {
          endDate = addSeconds(startDate, event.duration)
        } else {
          const diff = differenceInSeconds(event.start_date, startDate)
          endDate = addSeconds(event.end_date, diff)
        }

        if (event.is_recurring) {
          try {
            const path = 'event_exceptions'
            const response = await this.$http.post(path, {
              event_schema_id: event.id,
              exception_date: event.is_exception ? event.start_date : null,
              start_date: startDate,
              end_date: endDate,
              is_exception: event.is_exception,
              status: 'rescheduled'
            }, this.authToken)

            event.start_date = response.start_date
            event.end_date = response.end_date
            event.is_exception = true

            this.$refs['calendar'].updateRecurring(event)
          } catch (err) {
            console.log(err)
          } finally {
            this.creatingEvent = false
          }
        } else {
          try {
            const path = `event_schemas/${event.id}`
            await this.$http.put(path, {
              start_date: startDate,
              end_date: endDate,
            }, this.authToken)
            event.start_date = startDate
            event.end_date = endDate

            this.$refs['calendar'].update(event)
          } catch (err) {
            console.log(err)
          } finally {
            // this.creatingEvent = false
          }
        }
      },
      showEditEvent(data) {
        const event = data.event
        const day = data.day

        const calendarSettings = this.$refs['calendar'].getDateSettings(this.selectedMonth)
        this.startDate = calendarSettings.startDate
        this.endDate = calendarSettings.endDate

        let daysWithEvent = []
        if (event.is_recurring) {
          daysWithEvent = this.$refs['calendar'].getDaysMatchingEvent(event)
        }

        this.drawer.data = {
          event: event,
          day,
          disabledDates: daysWithEvent
        }
        this.activeAction = 'edit-event'
        this.drawer.state = true
      },
      async doEventDelete(payload) {
        const event = payload.event
        const type = payload.type

        if (!event.is_recurring) {
          const path = `event_schemas/${event.id}`

          try {
            const response = await this.$http.delete(path, this.authToken)
            this.closeModal()
            this.$refs['calendar'].removeEvent(event)
          } catch (err) {
            console.log(err)
          } finally {
            this.creatingEvent = false
          }
        } else if (type === 'all') { // remove this event from the schema
          const path = `event_schemas/${event.id}`

          const end_date = subMinutes(new Date(), 1)
          try {
            const response = await this.$http.put(path, {
              end_date: end_date // DEC: Whether from today or from event onwards
            }, this.authToken)
            this.closeModal()
            this.$refs['calendar'].removeEventsAfterDate(event, end_date)
          } catch (err) {
            console.log(err)
          } finally {
            this.creatingEvent = false
          }
        } else { // cancel this event only
          const path = 'event_exceptions'

          try {
            const response = await this.$http.post(path, {
              event_schema_id: event.id,
              exception_date: event.start_date,
              start_date: event.start_date,
              end_date: event.end_date,
              status: 'cancelled'
            }, this.authToken)

            this.closeModal()
            this.$refs['calendar'].removeEventWithStartDate(event)
          } catch (err) {
            console.log(err)
          } finally {
            this.creatingEvent = false
          }
        }
      },
      async editEvent(payload) {
        const event = payload.event
        const data = payload.data

        if (event.is_recurring) {
          try {
            const path = 'event_exceptions'
            const response = await this.$http.post(path, {
              event_schema_id: event.id,
              exception_date: event.start_date,
              start_date: data.start_date,
              end_date: data.end_date,
              status: 'rescheduled',
              is_exception: event.is_exception,
            }, this.authToken)

            this.hideActionDrawer()
            event.start_date = data.start_date
            event.end_date = data.end_date
            event.is_exception = true
            this.$refs['calendar'].updateRecurring(event)
          } catch (err) {
            console.log(err)
          } finally {
            this.creatingEvent = false
          }
        } else {
          try {
            const path = `event_schemas/${event.id}`
            await this.$http.put(path, data, this.authToken)
            this.hideActionDrawer()

            event.start_date = data.start_date
            event.end_date = data.end_date
            this.$refs['calendar'].update(event)
          } catch (err) {
            console.log(err)
          } finally {
            // this.creatingEvent = false
          }
        }
      },
      deleteEvent(event) {
        this.hideActionDrawer()
        this.activeAction = 'delete'
        this.modal.data = event
        this.modal.state = true
      },
      eventsUpdated(events) {
        this.$refs['calendar'].updateEvents(events)
        this.hideActionDrawer()
      },
      eventsCreated(events) {
        this.$refs['calendar'].addEvents(events)
        this.hideActionDrawer()
      },
      createEvent() {
        this.activeAction = 'create'
        this.drawer.state = true
        const calendarSettings = this.$refs['calendar'].getDateSettings(this.selectedMonth)
        this.startDate = calendarSettings.startDate
        this.endDate = calendarSettings.endDate
      },
      closeModal() {
        this.modal.state = false
        this.activeAction = null
      },
      hideActionDrawer() {
        this.drawer.data = null
        this.activeAction = null
        this.drawer.state = false
      },
      previousMonth() {
        this.selectedMonth = subMonths(this.selectedMonth, 1)
      },
      nextMonth() {
        this.selectedMonth = addMonths(this.selectedMonth, 1)
      },
      actionHandler(value) {
        this.activeAction = value
        this.takingAction = true
      },
      setUpPeopleUI() {}
    }
  }

</script>
