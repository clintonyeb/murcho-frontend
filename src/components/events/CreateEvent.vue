<template>
  <div class="w-full">
    <div class="w-full p-6 relative">

      <div class="w-full control mb-6">
        <label class="block text-grey text-sm font-bold mb-2 h-4" for="Subject">
          Event Title
        </label>
        <div class="h-8 inline-flex border w-full rounded-sm relative" :class="getInputColor('Subject')">
          <input type="text" placeholder="Event Title" class="ml-2" v-model="title" name="Title" v-validate="{required: true}"
            tabindex="1" v-autofocus>
        </div>
        <p class="text-red-light text-xs italic pt-1 animated shake h-4" v-show="getInputState('Title')">
          {{getInputErrorMessage('Title')}}
        </p>
      </div>

      <div class="w-full control mt-4 mb-6">
        <div>
          <label class="block text-grey text-sm font-bold mb-2" for="Description">
            Event Description (optional)
          </label>
          <div class="inline-flex border max-w-full w-full rounded-sm relative" :class="getInputColor('Description')">

            <textarea name="Description" placeholder="Event Description.." class="ml-2 w-full h-24 p-1 resize-none"
              v-model="description" tabindex="2"></textarea>
          </div>
          <p class="text-red-light text-xs pt-1 h-1 italic pt-1 animated shake" v-show="getInputState('Description')">
            {{getInputErrorMessage('Description')}}
          </p>
        </div>
      </div>

      <div class="w-full control mt-4 mb-6">
        <label class="block text-grey text-sm font-bold mb-2" for="Start Date">
          Start Date &amp; Time
        </label>
        <div class="h-8 inline-flex border w-full rounded-sm relative" :class="getInputColor('Start Date')">
          <input type="text" placeholder="Event Start Date" class="ml-2 w-full" name="Start Date" v-validate="{required: true}"
            tabindex="3" id="start_date" ref="start_date">
        </div>
        <p class="text-red-light text-xs italic pt-1 animated shake" v-show="getInputState('Start Date')">
          {{getInputErrorMessage('Start Date')}}
        </p>
      </div>

      <div class="w-full control mt-4 mb-6">
        <label class="block text-grey text-sm font-bold mb-2" for="Duration Format">
          Event Duration
        </label>
        <div class="w-full inline-flex items-top justify-between">
          <div class="flex-grow w-full">
            <div class="w-full h-8 inline-flex border w-full rounded-sm relative mr-1" :class="getInputColor('Duration Format')">
              <select name="Duration Format" v-model="duration_format" class="w-full bg-white select-none" v-validate="{required: true}" tabindex="4">
                <option v-for="dur in durations" :key="dur.id" :value="dur.value">{{dur.text}}</option>
              </select>
            </div>
            <p class="text-red-light text-xs italic pt-1 animated shake" v-show="getInputState('Duration Format')">
              {{getInputErrorMessage('Duration Format')}}
            </p>
          </div>

          <div class="flex-grow w-full">
            <div class="h-8 inline-flex border w-full rounded-sm relative ml-1" :class="getInputColor('Duration')">
              <input type="number" placeholder="Event Duration" v-model="duration" class="pl-2 w-full" name="Duration"
                v-validate="{required: true, numeric: true}" tabindex="5">
            </div>
            <p class="text-red-light text-xs italic pt-1 animated shake" v-show="getInputState('Duration')">
              {{getInputErrorMessage('Duration')}}
            </p>
          </div>

        </div>
      </div>

      <div class="w-full control mt-4 mb-6">
        <label class="block text-grey text-sm font-bold mb-2" for="Location">
          Event Location (optional)
        </label>
        <div class="h-8 inline-flex border w-full rounded-sm relative" :class="getInputColor('Location')">
          <input type="text" placeholder="Event Location" v-model="location" class="ml-2 w-full" name="Location"
            tabindex="6">
        </div>
        <p class="text-red-light text-xs italic pt-1 animated shake" v-show="getInputState('Location')">
          {{getInputErrorMessage('Location')}}
        </p>
      </div>

      <div class="w-full control mt-4">
        <label class="block text-grey text-sm font-bold mb-2" for="Color">
          Color Category
        </label>
        <div class="w-full inline-flex items-top justify-between">
          <div class="flex-grow w-full">
            <div class="w-full h-8 inline-flex border w-full rounded-sm relative mr-1" :class="getInputColor('Color')">
              <select name="Color" v-model="color" class="w-full bg-white select-none" v-validate="{required: true}" tabindex="4">
                <option v-for="col in colors" :key="col.id" :value="col.value">{{col.text}}</option>
              </select>
            </div>
            <p class="text-red-light text-xs italic pt-1 animated shake" v-show="getInputState('Color')">
              {{getInputErrorMessage('Color')}}
            </p>
          </div>

        </div>
      </div>

      
    </div>
    

    <div class="w-full mt-4 inline-flex items-center">
      <button class=" h-8 flex-grow bg-blue-light inline-flex items-center justify-center text-white rounded-bl" @click="createEvent">
        <span v-html="icons.event" class="mr-2"></span>
        <span>CREATE EVENT</span>
      </button>
      <button class="h-8 flex-grow bg-red inline-flex items-center justify-center text-white  rounded-br" @click="$emit('close')">
        <span v-html="icons.cancel" class="mr-2"></span>
        <span>
          CANCEL
        </span>
      </button>
    </div>

  </div>
</template>

<script>
  import {
    format,
    subDays,
  } from 'date-fns'
  import {
    COLORS
  } from '@/utils'

  import {
    tickIcon,
    eventIcon,
    closeIcon,
  } from '@/utils/icons'

  const dateFormat = "EEEE, do; h:m a"
  const pluralize = require('pluralize')

  import flatpickr from "flatpickr";
  require("flatpickr/dist/flatpickr.min.css")
  import confirmDatePlugin from "flatpickr/dist/plugins/confirmDate/confirmDate.js"

  let startDateComp = null;

  export default {
    props: ['start_date', 'calendar_id'],
    data() {
      return {
        colors: COLORS,
        title: '',
        description: '',
        duration: '',
        location: '',
        duration_format: 'hrs',
        color: 0,
        icons: {
          event: eventIcon,
          cancel: closeIcon
        },
        creatingEvent: false,
        durations: [{
          id: 1,
            text: 'Minutes',
            value: 'mins',
          },
          {
            id: 2,
            text: 'Hours',
            value: 'hrs'
          },
          {
            id: 3,
            text: 'Days',
            value: 'days'
          },
          {
            id: 4,
            text: 'Weeks',
            value: 'wks'
          },
          {
            id: 5,
            text: 'Months',
            value: 'mnths'
          }
        ],
        colors: [
          {
            id: 1,
            text: 'Blue',
            value: 0
          },
          {
            id: 2,
            text: 'Green',
            value: 1
          },
          {
            id: 3,
            text: 'Yellow',
            value: 2
          },
          {
            id: 4,
            text: 'Purple',
            value: 3
          },
          {
            id: 5,
            text: 'Red',
            value: 4
          }
        ]
      }
    },
    mounted() {
      this.initializeDatePickers()
    },
    methods: {
      createEvent() {
        if (this.creatingEvent) return false

        this.validateForm(async state => {
          if (!state) return false
          this.creatingEvent = true

          const startDate = startDateComp.selectedDates[0]
          const duration = this.getDurationInSeconds(this.duration_format, this.duration)

          const path = 'event_schemas'
          const url = this.$http.url(path)

          try {
            const response = await this.$http.post(url, {
              title: this.title,
              description: this.description,
              calendar_id: this.calendar_id,
              duration: duration,
              start_date: startDate,
              location: this.location,
              color: this.color
            }, this.authToken)

            this.$emit('saved', response)
          } catch(err) {
            console.log(err);
          } finally {
            this.creatingEvent = false
          }
        })
      },
      getDurationInSeconds(format, duration){
        // convert duration to seconds based on format chosen
        duration = Number(duration)
        switch (format) {
          case 'mins':
            return  duration * 60;
          case 'hrs':
            return  duration * 3600;
          case 'days':
            return  duration * 86400;
          case 'wks':
            return  duration * 604800;
          case 'mnths':
            return  duration * 2.628e+6;
          default:
            throw new Error("Invalid date format given");
        }
      },
      initializeDatePickers() {
        const startDate = this.start_date

        startDateComp = flatpickr(this.$refs['start_date'], {
          enableTime: true,
          dateFormat: "J M, Y; h i K",
          defaultDate: startDate,
          plugins: [new confirmDatePlugin({
            confirmIcon: tickIcon,
            confirmText: "Done",
            showAlways: true,
          })]
        });
      },
      getInputErrorMessage(name) {
        return this.errors.first(name)
      },
      getInputColor(name) {
        return this.getInputState(name) ? 'border-red-light' : 'border-grey-light'
      },
      getInputState(name) {
        return this.errors.has(name)
      },
    },
    beforeDestroy() {
      if (startDateComp !== null) startDateComp.destroy()
    }
  }

</script>
