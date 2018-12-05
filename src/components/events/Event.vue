<template>
  <div>
    <div class="w-full p-6">
      <div class="w-full inline-flex items-center justify-between">
        <p class="font-bold text-base flex-grow" :class="`text-${event.color}-dark`">
          {{event.title}}
        </p>
        <!-- <p v-for="(key, color) in colors" :key="key" class="cursor-pointer inline-block mr-1 rounded-full relative" style="height: 20px; width: 20px; padding: 1px;" 
      :class="color === event.color ? `border border-${color}` : ''">
        <span class="inline-block rounded-full absolute" :class="`bg-${color}`" style="width: 15px; height: 15px; right: 50%; left: 11.3%; bottom: 50%; top: 11.25%;"></span>
      </p> -->
        <!-- <p class="inline-flex items-center">
          <button class="text-xs" :class="`text-${event.color}-light hover:text-${event.color}-dark`">
            Edit
          </button>
        </p> -->
      </div>

      <div class="w-full mt-2">
        <p class="text-grey">
          {{eventDetail.description}}
        </p>
      </div>

      <div class="w-full mt-6">
        <p class="w-full inline-flex items-center justify-between mb-1">
          <span class="font-black mr-2" :class="`text-${event.color}-lighter`">FROM</span>
          <span class="text-grey-dark">{{eventDetail.start_date | formatDate}}</span>
        </p>
        <p class="w-full inline-flex items-center justify-between mb-1">
          <span class="font-black mr-2" :class="`text-${event.color}-lighter`">TO</span>
          <span class="text-grey-dark">{{eventDetail.end_date | formatDate}}</span>
        </p>
      </div>


      <div class="w-full mt-6">
        <p class="w-full inline-flex items-center justify-between mb-1">
          <span class="font-black mr-2" :class="`text-${event.color}-lighter`">Duration</span>
          <span class="text-grey-dark">{{eventDetail.duration | formatDuration}}</span>
          <span v-if="eventDetail.is_all_day" class="text-grey-dark">- All Day Event</span>
        </p>
      </div>

      <div class="w-full mt-6" v-if="eventDetail.location">
        <p class="w-full inline-flex items-center justify-between mb-1">
          <span class="font-black mr-2" :class="`text-${event.color}-lighter`">Location</span>
          <span class="text-grey-dark">{{eventDetail.location}}</span>
        </p>
      </div>

      <div class="w-full mt-4" v-if="eventDetail.hosts">
        <p class="uppercase">
          Performing
        </p>
        <p class="text-grey">
          {{eventDetail.hosts}}
        </p>
      </div>

    </div>

    <div class="w-full mt-4 inline-flex items-center">
      <button class=" h-8 flex-grow bg-blue-light inline-flex items-center justify-center text-white">
        <span v-html="icons.edit" class="mr-2"></span>
        <span>EDIT</span>
      </button>
      <button class="h-8 flex-grow bg-red inline-flex items-center justify-center text-white">
        <span v-html="icons.delete" class="mr-2"></span>
        <span>
          REMOVE
        </span>
      </button>
    </div>
  </div>
</template>

<script>
  import {
    format,
  } from 'date-fns'
  import {
    COLORS
  } from '@/utils'
  import {
    trashIcon,
    editIcon,
  } from '@/utils/icons'

  const dateFormat = "EEEE, do; h:m a"
  const pluralize = require('pluralize')

  export default {
    props: ['event'],
    data() {
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
    created() {
      this.getEventDetails(this.event.id)
    },
    methods: {
      async getEventDetails(id) {
        const path = `event_schemas/${id}`
        const url = this.$http.url(path)
        this.loadingEvent = true

        try {
          const response = await this.$http.get(url, this.authToken)
          this.eventDetail = response
        } catch (err) {

        } finally {
          this.loadingEvent = false
        }
      }
    },
    filters: {
      formatDuration(seconds) {
        if (!seconds) return ''

        seconds = Number(seconds);
        let time;

        time = Math.floor(seconds / (60 * 60 * 24 * 7 * 4));
        if (time >= 1) return `${time} ${pluralize('month', time)}`;

        time = Math.floor(seconds / (60 * 60 * 24 * 7));
        if (time >= 1) return `${time} ${pluralize('week', time)}`;

        time = Math.floor(seconds / (60 * 60 * 24));
        if (time >= 1) return `${time} ${pluralize('day', time)}`;

        time = Math.floor(seconds / (60 * 60));
        if (time >= 1) return `${time} ${pluralize('hour', time)}`;

        time = Math.floor(seconds / (60));
        if (time >= 1) return `${time} ${pluralize('minute', time)}`;

        return `${time} ${pluralize('second', time)}`;

      },
      formatDate(dateString) {
        const date = new Date(dateString)
        return format(date, dateFormat, {
          awareOfUnicodeTokens: true
        })
      }
    }
  }

</script>
