<template>
  <div class="cursor-auto" @click.stop>
    <div class="w-full p-6">
      <div class="w-full inline-flex items-center justify-between">
        <p class="font-bold text-base flex-grow" :class="`text-${event.color}-dark`">
          {{event.title}}
        </p>

        <p class="inline-flex items-center">
          <span v-html="icons.edit" v-if="!day.isPast" class="cursor-pointer text-grey mr-2 hover:text-grey-dark hover:bg-grey-lighter rounded-full" @click="$emit('edit-event')"></span>
          <svg class="fill-current h-6 w-6 text-grey hover:text-grey-dark hover:bg-grey-lighter rounded-full" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" @click.stop="$emit('close')">
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"></path>
          </svg>
        </p>
      </div>

      <div class="w-full mt-2">
        <p class="text-grey">
          <span v-if="event.description">{{event.description}}</span>
          <span v-else class="italic">No description given.</span>
        </p>
      </div>

      <div class="w-full mt-6">
        <p class="w-full inline-flex items-center justify-between mb-1">
          <span class="font-black mr-2" :class="`text-${event.color}-lighter`">FROM</span>
          <span class="text-grey-dark">{{event.start_date | formatDate}}</span>
        </p>
        <p class="w-full inline-flex items-center justify-between mb-1">
          <span class="font-black mr-2" :class="`text-${event.color}-lighter`">TO</span>
          <span class="text-grey-dark">{{event.end_date | formatDate}}</span>
        </p>
      </div>

      <div class="w-full">
        <p class="w-full inline-flex items-center justify-between mb-1">
          <span class="font-black mr-2" :class="`text-${event.color}-lighter`">Duration</span>
          <span class="text-grey-dark">{{formatDuration(event.duration)}}</span>
          <span v-if="eventDetail.is_all_day" class="text-grey-dark">- All Day Event</span>
        </p>
      </div>

      <div class="w-full" v-if="eventDetail.location">
        <p class="w-full inline-flex items-center justify-between mb-1">
          <span class="font-black mr-2" :class="`text-${event.color}-lighter`">Location</span>
          <span class="text-grey-dark">{{eventDetail.location}}</span>
        </p>
      </div>

      <div class="w-full" v-if="eventDetail.hosts">
        <p class="uppercase">
          Performing
        </p>
        <p class="text-grey">
          {{eventDetail.hosts}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {
  format
} from 'date-fns'
import {
  COLORS
} from '@/utils'
import {
  trashIcon,
  editIcon
} from '@/utils/icons'

const dateFormat = 'hh:mm a'

export default {
  props: ['day', 'event'],
  data () {
    return {
      loadingEvent: true,
      eventDetail: {},
      colors: COLORS,
      icons: {
        delete: trashIcon,
        edit: editIcon
      }
    }
  },
  created () {
    this.getEventDetails(this.event.id)
  },
  methods: {
    async getEventDetails (id) {
      const path = `event_schemas/${id}`
      this.loadingEvent = true

      try {
        const response = await this.$http.get(path, this.authToken)
        this.eventDetail = response
      } catch (err) {

      } finally {
        this.loadingEvent = false
      }
    },
    formatDuration (seconds) {
      if (!seconds) return ''

      seconds = Number(seconds)
      let time

      time = Math.floor(seconds / (60 * 60 * 24 * 7 * 4))
      if (time >= 1) return `${time} ${this.pluralize('month', time)}`

      time = Math.floor(seconds / (60 * 60 * 24 * 7))
      if (time >= 1) return `${time} ${this.pluralize('week', time)}`

      time = Math.floor(seconds / (60 * 60 * 24))
      if (time >= 1) return `${time} ${this.pluralize('day', time)}`

      time = Math.floor(seconds / (60 * 60))
      if (time >= 1) return `${time} ${this.pluralize('hour', time)}`

      time = Math.floor(seconds / (60))
      if (time >= 1) return `${time} ${this.pluralize('minute', time)}`

      return `${time} ${this.pluralize('second', time)}`
    }
  },
  filters: {
    formatDate (dateString) {
      const date = new Date(dateString)
      return format(date, dateFormat, {
        awareOfUnicodeTokens: true
      })
    }
  }
}

</script>
