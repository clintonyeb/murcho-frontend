<template>
  <div class="">
    <div class="w-full inline-flex items-center justify-start">
      <div class="event-color mr-2">
        <p :class="`bg-${event.color}-lighter`" class="w-2 h-2 rounded-full"></p>
      </div>
      <div class="flex-grow">
        <p class="text-grey-darker" :class="`text-${event.color}-dark`">
          {{event.title}}
        </p>
      </div>
    </div>

    <div class="w-full mt-2" v-if="event.description" style=" text-indent: 1rem;">
      <p class="text-grey-dark text-xs">
        {{event.description}}
      </p>
    </div>

    <div v-if="event.location" class="w-full mt-2 ml-4">
      <p class="text-grey-dark text-xs italic">{{event.location}}</p>
    </div>

      <div class="event-start-date w-full mt-2 ml-4">
      <p class="text-grey text-xs">{{event.start_date | formatDate | capitalize}}</p>
    </div>

  </div>
</template>

<script>
import {
  formatRelative
} from 'date-fns'

const today = new Date()

export default {
  props: {
    event: {
      required: true
    },
    loading: {
      required: false,
      default: false
    }
  },
  name: 'Event',
  filters: {
    formatDate (dateString) {
      const date = new Date(dateString)
      return formatRelative(date, today)
    }
  }
}

</script>
