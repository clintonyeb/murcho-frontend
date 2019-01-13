<template>
  <div class="w-full container mx-auto md:px-10 sm:px-8" style="min-width: 500px">

    <div class="w-full control">
      <div>
        <label class="block text-grey text-sm font-bold mb-2" for="Event Title">
          Event Title
        </label>
        <input type="text" placeholder="Enter Event Title" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2"
          v-model="title" name="Event Title" v-validate="{required: true}" tabindex="1" v-autofocus id="Event Title"
          :class="getInputColor('Event Title')">
        <p class="text-red-light text-xs  pt-1 animated shake h-4" v-show="getInputState('Event Title')">
          {{getInputErrorMessage('Event Title')}}
        </p>
      </div>
    </div>

    <div class="w-full control mt-4">
      <div>
        <label class="block text-grey text-sm font-bold mb-2" for="Event Description">
          Event Description (optional)
        </label>
        <textarea name="Group Description" placeholder="Event Description.." class="w-full h-24 p-1 pl-2 resize-none border text-grey-darker"
          v-model="description" tabindex="2" id="Event Description" :class="getInputColor('Event Description')"></textarea>
        <p class="text-red-light text-xs  pt-1 animated shake h-4" v-show="getInputState('Event Description')">
          {{getInputErrorMessage('Event Description')}}
        </p>
      </div>
    </div>

    <div class="w-full control mt-4 mb-6">
      <label class="block text-grey text-sm font-bold mb-2" for="Start Date">
        Start Date &amp; Time
      </label>
      <div class="h-8 inline-flex border w-full rounded-sm relative" :class="getInputColor('Start Date')">
        <input type="text" placeholder="Event Start Date" class="text-grey-dark pl-2 w-full" name="Start Date"
          v-validate="{required: true}" tabindex="3" ref="start_date" id="Start Date">
      </div>
      <p class="text-red-light text-xs  pt-1 animated shake" v-show="getInputState('Start Date')">
        {{getInputErrorMessage('Start Date')}}
      </p>
    </div>

    <div class="w-full control mt-4 mb-6">
      <label class="block text-grey text-sm font-bold mb-2" for="Duration Format">
        Event Duration
      </label>
      <div class="w-full inline-flex items-top justify-between">
        <div class="flex-grow w-full">
          <div class="w-full h-8 inline-flex border w-full rounded-sm relative mr-2" :class="getInputColor('Duration Format')">
            <select name="Duration Format" v-model="duration_format" class="text-grey-darker pl-2 w-full bg-white select-none"
              v-validate="{required: true}" tabindex="4" id="Duration Format">
              <option v-for="dur in durations" :key="dur.id" :value="dur.value">{{dur.text}}</option>
            </select>
          </div>
          <p class="text-red-light text-xs  pt-1 animated shake" v-show="getInputState('Duration Format')">
            {{getInputErrorMessage('Duration Format')}}
          </p>
        </div>

        <div class="flex-grow w-full">
          <div class="h-8 inline-flex border w-full rounded-sm relative ml-2" :class="getInputColor('Duration')">
            <input type="number" placeholder="Event Duration" v-model="duration" class="pl-2 w-full" name="Duration"
              v-validate="{required: true, numeric: true}" tabindex="5">
          </div>
          <p class="text-red-light text-xs  pt-1 animated shake" v-show="getInputState('Duration')">
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
        <input type="text" placeholder="Event Location" v-model="location" class="ml-2 w-full" name="Location" tabindex="6"
          id="Location">
      </div>
      <p class="text-red-light text-xs  pt-1 animated shake" v-show="getInputState('Location')">
        {{getInputErrorMessage('Location')}}
      </p>
    </div>

    <div class="w-full mt-4 mb-6">
      <p class="text-grey text-xs">Groups:</p>
      <div class="mt-2 w-full">
        <on-click-outside :do="clearGroupSearch" :active="groups.searched.length">
          <div class="mt-2 relative mx-auto">
            <div class="w-full inline-flex items-center justify-center relative">
              <button class="h-6 w-6 absolute pin-l ml-2 mr-2">
                <svg class="h-4 w-4 fill-current text-grey relative" version="1.1" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 129 129" enable-background="new 0 0 129 129"
                  style="top: 3px;">
                  <g>
                    <path d="M51.6,96.7c11,0,21-3.9,28.8-10.5l35,35c0.8,0.8,1.8,1.2,2.9,1.2s2.1-0.4,2.9-1.2c1.6-1.6,1.6-4.2,0-5.8l-35-35c6.5-7.8,10.5-17.9,10.5-28.8c0-24.9-20.2-45.1-45.1-45.1C26.8,6.5,6.5,26.8,6.5,51.6C6.5,76.5,26.8,96.7,51.6,96.7z M51.6,14.7c20.4,0,36.9,16.6,36.9,36.9C88.5,72,72,88.5,51.6,88.5c-20.4,0-36.9-16.6-36.9-36.9C14.7,31.3,31.3,14.7,51.6,14.7z"></path>
                  </g>
                </svg>
              </button>

              <input class="appearance-none w-full p-1 h-10 pl-8 text-grey bg-grey-lighter rounded border focus:bg-white border-transparent focus:border-blue-light border-animated"
                type="text" placeholder="Search and Tag Groups.." @input="searchGroups" v-model="groups.search">
            </div>

            <div v-show="groups.searched.length" class="mt-px text-sm text-center shadow-md text-grey-darker leading-normal rounded bg-white border absolute pin-l animated zoomIn flex flex-col overflow-hidden w-full max-w-sm z-10">
              <a v-for="group in groups.searched" :key="group.id" class="cursor-pointer no-underline flex items-center px-4 py-3 border-b whitespace-no-wrap group hover:text-white hover:bg-blue-light"
                @click="searchedGroupItemClicked(group)">
                <span class="group-hover:text-white">{{group.name}}</span>
              </a>
            </div>
          </div>
        </on-click-outside>
      </div>

      <div class="w-full mt-4">
        <div class="mt-2 w-full">
          <div class="mt-2 w-full inline-flex items-center justify-between" v-for="group in groups.selected" :key="group.id">
            <p class="text-grey-dark">{{group.name}}</p>
            <label class="checkbox checkbox-container">
              <input type="checkbox" v-model="groups.pickedFromSelected" :value="group">
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full control mt-4">
      <label class="block text-grey text-sm font-bold mb-2" for="Color">
        Color Category
      </label>
      <div class="w-full inline-flex items-top justify-between">
        <div class="flex-grow w-full">
          <div class="w-full h-8 inline-flex border w-full rounded-sm relative" :class="getInputColor('Color')">
            <select name="Color" v-model="color" class="text-grey-darker pl-2 w-full bg-white select-none" v-validate="{required: true}"
              tabindex="7" id="Color">
              <option v-for="col in colors" :key="col.id" :value="col.value">{{col.text}}</option>
            </select>
          </div>
          <p class="text-red-light text-xs  pt-1 animated shake" v-show="getInputState('Color')">
            {{getInputErrorMessage('Color')}}
          </p>
        </div>

      </div>
    </div>

    <div class="w-full control mt-4">
      <label class="block text-grey text-sm font-bold mb-2" for="Recurrence">
        Event Type:
      </label>
      <div class="w-full inline-flex items-top justify-between">
        <div class="flex-grow w-full">
          <div class="w-full h-8 inline-flex items-center justify-between w-full relative pl-4" :class="getInputColor('Recurrence')">
            <label class="radio-container radio">
              <input type="radio" name="Recurrence" id="Recurrence" :value="false" v-model="is_recurring" class="text-grey"
                tabindex="8" v-validate="{required: true}">
              <span class="checkmark"></span>
              <span class="text-grey-dark ml-1 text">One Time Event</span>
            </label>
            <label class="radio-container radio">
              <input type="radio" name="Recurrence_True" id="Recurrence_True" :value="true" v-model="is_recurring"
                tabindex="9">
              <span class="checkmark"></span>
              <span class="text-grey-dark ml-1 text">Is Recurring Event</span>
            </label>
          </div>
          <p class="text-red-light text-xs  pt-1 animated shake" v-show="getInputState('Recurrence')">
            {{getInputErrorMessage('Recurrence')}}
          </p>
        </div>

      </div>
    </div>

    <div v-show="is_recurring" class="mt-12 mb-8">

      <div class="w-full control">
        <div class="w-full inline-flex items-center justify-between">
          <label class="block text-grey text-sm font-bold mb-2" for="Frequency">
            Repeat Frequency:
          </label>
          <select name="Frequency" v-model="frequency" class="cursor-pointer w-64 bg-white text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2"
            v-validate="{required: true}" id="Frequency" :class="getInputColor('Frequency')" tabindex="10">
            <option value="" selected disabled>-- Pick Frequency --</option>
            <option v-for="freq in frequencies" :key="freq.id" :value="freq" class="cursor-pointer">{{freq.text}}</option>
          </select>
          <p class="text-red-light text-xs  pt-1 animated shake h-4" v-show="getInputState('Frequency')">
            {{getInputErrorMessage('Frequency')}}
          </p>
        </div>
      </div>

      <div class="w-full control mt-4">
        <div class="w-full inline-flex items-center justify-between">
          <label class="block text-grey text-sm font-bold mb-2" for="Interval">
            Repeat Interval:
          </label>
          <select name="Interval" v-model="interval" class="cursor-pointer w-64 bg-white text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2"
            v-validate="{required: true}" id="Interval" :class="getInputColor('Interval')" tabindex="11">
            <option value="" selected disabled>-- Pick Interval --</option>
            <option v-for="int in intervals" :key="int.id" :value="int" class="cursor-pointer">{{int.text}}</option>
          </select>
          <p class="text-red-light text-xs  pt-1 animated shake h-4" v-show="getInputState('Interval')">
            {{getInputErrorMessage('Interval')}}
          </p>
        </div>
      </div>

      <div class="w-full control mt-4" v-if="byDates.length">
        <div class="w-full inline-flex items-top justify-between">
          <label class="flex-grow block text-grey text-sm font-bold mb-2" for="Options">
            Options (required):
          </label>

          <div class="flex-col">
            <on-click-outside :do="() => byDayActive = false" :active="byDayActive">
              <div class="cursor-beam border rounded w-64 cursor-text relative" @click="byDayActive = !byDayActive"
                style="min-height: 2rem;">
                <div class="inline-flex items-center px-2 pb-2 justify-start flex-wrap" tabindex="12">
                  <p v-for="(date, i) in selectedByDates" :key="i" class="inline-flex items-center justify-between border border-grey-dark text-grey-dark bg-grey-lighter mr-2 p-1 mt-2 text-xs rounded">
                    <span>
                      {{date.text}}
                    </span>
                    <svg class="fill-current h-4 w-4" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                      @click.stop="date.selected = false">
                      <title>Close</title>
                      <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"></path>
                    </svg>
                  </p>
                </div>

                <div v-if="byDayActive" class="mb-8 text-sm text-center shadow text-grey-darker leading-normal rounded bg-white absolute pin-l pin-b animated zoomIn flex flex-col overflow-auto z-10 w-full"
                  style="max-height: 15rem;">
                  <a v-for="(by,i) in byDates" :key="i" class="text-xs cursor-pointer no-underline flex items-center justify-start px-4 py-2 whitespace-no-wrap"
                    :class="by.selected ? 'text-grey-light' : 'text-grey-darker hover:text-white hover:bg-blue-light'"
                    @click.stop="by.selected = true">
                    <span class="group-hover:text-white">{{by.text}}</span>
                  </a>
                </div>
              </div>
            </on-click-outside>

            <div class="w-full mt-4" v-if="byMonths.length">
              <on-click-outside :do="() => byMonthActive = false" :active="byMonthActive">
                <div class="cursor-beam border rounded w-64 cursor-text relative" @click="byMonthActive = !byMonthActive"
                  style="min-height: 2rem;" tabindex="13">
                  <div class="inline-flex items-center px-2 pb-2 justify-start flex-wrap">
                    <p class="text-grey-dark mr-2 p-1 mt-2 text-xs">
                      {{selectedByMothDate.text}}
                    </p>
                  </div>

                  <div v-if="byMonthActive" class="mb-8 text-sm text-center shadow text-grey-darker leading-normal rounded bg-white absolute pin-l pin-b animated zoomIn flex flex-col overflow-auto z-10 w-full"
                    style="max-height: 15rem;">
                    <a v-for="(month, i) in byMonths" :key="i" class="text-xs cursor-pointer no-underline flex items-center justify-start px-4 py-2 whitespace-no-wrap"
                      :class="month.selected ? 'text-grey-light' : 'text-grey-darker hover:text-white hover:bg-blue-light'"
                      @click.stop="selectedByMothDate = month, byMonthActive=false">
                      <span class="group-hover:text-white">{{month.text}}</span>
                    </a>
                  </div>
                </div>
              </on-click-outside>
            </div>
          </div>

        </div>
      </div>

      <div class="w-full control mt-4">
        <div class="w-full inline-flex items-top justify-between">
          <label class="flex-grow block text-grey text-sm font-bold mb-2" for="Repeat">
            Duration:
          </label>

          <div class="flex-col">
            <label class="radio-container radio">
              <input type="radio" name="Repeat Forever" id="Repeat Forever" value="" v-model="repeat" class="text-grey"
                tabindex="12">
              <span class="checkmark"></span>
              <span class="text-grey-dark ml-1 text">Repeat Forever</span>
            </label>
            <label class="radio-container radio">
              <input type="radio" name="Repeat Until" id="Repeat Until" value="until" v-model="repeat" tabindex="15">
              <span class="checkmark"></span>
              <span class="text-grey-dark ml-1 text">Repeat Until</span>
            </label>
            <label class="radio-container radio">
              <input type="radio" name="Repeat Count" id="Repeat Count" value="count" v-model="repeat" class="text-grey"
                tabindex="16">
              <span class="checkmark"></span>
              <span class="text-grey-dark ml-1 text">Repeat Count</span>
            </label>
          </div>

        </div>
      </div>

      <div class="w-full control mt-4" v-if="repeat">
        <div class="h-8 inline-flex border w-full rounded-sm relative" v-show="repeat === 'count'">
          <input type="number" placeholder="Number of Occurrences" class="pl-2 w-full" name="Repeat Count" v-model="repeat_value"
            id="Repeat Count" tabindex="17" min="1">
        </div>

        <div class="h-8 inline-flex border w-full rounded-sm relative" v-show="repeat === 'until'">
          <input type="text" placeholder="Repeat Until" class="pl-2 w-full text-grey-dark" name="Repeat Until" ref="repeat_until"
            id="Repeat Until" tabindex="18" v-model="repeat_date_value">
        </div>

      </div>

      <div class="w-full">
        <hr class="my-8 border border-grey-lighter">
        <p class="text-center text-grey">
          <span class="font-bold underline">Repeat Event For</span>: <span class="text-grey-dark">{{rruleMessage |
            capitalize}}.</span>
        </p>
      </div>

    </div>

    <div class="mt-8 mb-4 inline-flex justify-start w-full">
      <div class="w-full inline-flex justify-between items-center">
        <button class="inline-flex flex-auto items-center justify-center h-10 bg-blue rounded-sm text-white shadow-md mr-2"
          @click="createEvent" tabindex="19">
          <svg version="1.1" class="h-6 w-6 fill-current mr-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
            <path d="M506.955,1.314c-3.119-1.78-6.955-1.75-10.045,0.078L313.656,109.756c-4.754,2.811-6.329,8.943-3.518,13.697c2.81,4.753,8.942,6.328,13.697,3.518l131.482-77.749L210.411,303.335L88.603,266.069l158.965-94c4.754-2.812,6.329-8.944,3.518-13.698c-2.81-4.753-8.943-6.33-13.697-3.518L58.91,260.392c-3.41,2.017-5.309,5.856-4.84,9.791s3.216,7.221,7.004,8.38l145.469,44.504L270.72,439.88c0.067,0.121,0.136,0.223,0.207,0.314c1.071,1.786,2.676,3.245,4.678,4.087c1.253,0.527,2.57,0.784,3.878,0.784c2.563,0,5.086-0.986,6.991-2.849l73.794-72.12l138.806,42.466c0.96,0.293,1.945,0.438,2.925,0.438c2.116,0,4.206-0.672,5.948-1.961C510.496,409.153,512,406.17,512,403V10C512,6.409,510.074,3.093,506.955,1.314z M271.265,329.23c-1.158,1.673-1.779,3.659-1.779,5.694v61.171l-43.823-79.765l193.921-201.21L271.265,329.23z M289.486,411.309v-62.867l48.99,14.988L289.486,411.309z M492,389.483l-196.499-60.116L492,45.704V389.483z" />
            <path d="M164.423,347.577c-3.906-3.905-10.236-3.905-14.143,0l-93.352,93.352c-3.905,3.905-3.905,10.237,0,14.143C58.882,457.024,61.441,458,64,458s5.118-0.976,7.071-2.929l93.352-93.352C168.328,357.815,168.328,351.483,164.423,347.577z" />
            <path d="M40.071,471.928c-3.906-3.903-10.236-3.903-14.142,0.001l-23,23c-3.905,3.905-3.905,10.237,0,14.143C4.882,511.024,7.441,512,10,512s5.118-0.977,7.071-2.929l23-23C43.976,482.166,43.976,475.834,40.071,471.928z" />
            <path d="M142.649,494.34c-1.859-1.86-4.439-2.93-7.069-2.93c-2.641,0-5.21,1.07-7.07,2.93c-1.86,1.86-2.93,4.43-2.93,7.07c0,2.63,1.069,5.21,2.93,7.07c1.86,1.86,4.44,2.93,7.07,2.93s5.21-1.07,7.069-2.93c1.86-1.86,2.931-4.44,2.931-7.07C145.58,498.77,144.51,496.2,142.649,494.34z" />
            <path d="M217.051,419.935c-3.903-3.905-10.233-3.905-14.142,0l-49.446,49.445c-3.905,3.905-3.905,10.237,0,14.142c1.953,1.953,4.512,2.929,7.071,2.929s5.118-0.977,7.071-2.929l49.446-49.445C220.956,430.172,220.956,423.84,217.051,419.935z" />
            <path d="M387.704,416.139c-3.906-3.904-10.236-3.904-14.142,0l-49.58,49.58c-3.905,3.905-3.905,10.237,0,14.143c1.953,1.952,4.512,2.929,7.071,2.929s5.118-0.977,7.071-2.929l49.58-49.58C391.609,426.377,391.609,420.045,387.704,416.139z" />
            <path d="M283.5,136.31c-1.86-1.86-4.44-2.93-7.07-2.93s-5.21,1.07-7.07,2.93c-1.859,1.86-2.93,4.44-2.93,7.08c0,2.63,1.07,5.2,2.93,7.06c1.86,1.87,4.44,2.93,7.07,2.93s5.21-1.06,7.07-2.93c1.859-1.86,2.93-4.43,2.93-7.06C286.43,140.75,285.36,138.17,283.5,136.31z" />
          </svg>
          <span class="font-bold">ADD EVENT</span>
          <svg class="spinner ml-2 h-6 w-6 text-grey-light fill-current animated fadeIn" version="1.1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 26.349 26.35" style="enable-background:new 0 0 26.349 26.35;"
            xml:space="preserve" v-if="creatingEvent">
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

        <button class="inline-flex flex-auto items-center justify-center h-10 rounded-sm text-red-light underline ml-2"
          @click="$emit('cancel')" tabindex="20">
          <span class="font-bold">CANCEL</span>
        </button>

      </div>
    </div>

  </div>
</template>

<script>
import {
  format,
  subDays,
  eachDayOfInterval,
  eachWeekOfInterval,
  addSeconds
} from 'date-fns'
import {
  COLORS
} from '@/utils'
import {
  debounce
} from 'debounce'

import {
  tickIcon,
  eventIcon,
  closeIcon
} from '@/utils/icons'

import flatpickr from 'flatpickr'
import confirmDatePlugin from 'flatpickr/dist/plugins/confirmDate/confirmDate.js'

import {
  RRule
} from 'rrule'

const dateFormat = 'EEEE, do; h:m a'
let startDateComp = null
let repeatDateComp = null

export default {
  name: 'Create-Event',
  props: {
    calendar_id: {
      required: true
    },
    startDate: {
      required: false
    },
    endDate: {
      required: false
    }
  },
  data () {
    return {
      search_input: '',
      selectedFields: [],
      loadingForm: false,
      groups: {
        searching: false,
        searched: [],
        search: '',
        selected: [],
        loading: false,
        pickedFromSelected: []
      },
      repeat_date_value: '',
      repeat_value: '',
      repeat: '',
      byMonthActive: false,
      selectedByMothDate: null,
      byMonths: [],
      byMonthType: null,
      byDayActive: false,
      byDates: [],
      byDateType: null,
      interval: 1,
      intervals: [],
      frequency: null,
      frequencies: [{
        id: 1,
        text: 'Daily',
        value: RRule.DAILY
      },
      {
        id: 2,
        text: 'Weekly',
        value: RRule.WEEKLY
      },
      {
        id: 3,
        text: 'Monthly by day',
        value: RRule.MONTHLY
      },
      {
        id: 4,
        text: 'Monthly by date',
        value: RRule.MONTHLY
      },
      {
        id: 5,
        text: 'Yearly by day',
        value: RRule.YEARLY
      },
      {
        id: 6,
        text: 'Yearly by date',
        value: RRule.YEARLY
      }
      ],
      loadingForm: false,
      is_recurring: false,
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
        value: 'mins'
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
      colors: [{
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
  mounted () {
    this.initializeDatePickers()
    this.frequency = this.frequencies[0]
  },
  computed: {
    rruleMessage () {
      if (!this.is_recurring) return ''
      const startDate = startDateComp && startDateComp.selectedDates[0]
      return this.createRRule(startDate).toText()
    },
    selectedByDates () {
      return this.byDates.filter(day => day.selected === true)
    }
  },
  methods: {
    searchedGroupItemClicked (group) {
      this.clearGroupSearch()
      if (this.groups.selected.find(g => g.id === group.id)) return false

      this.groups.selected.unshift(group)
      this.groups.pickedFromSelected.push(group)
    },
    searchGroups: debounce(function (e) {
      this.doGroupsSearch(e.target.value)
    }, 200),
    async doGroupsSearch (name) {
      if (!name) {
        this.groups.searching = false
        return
      }

      const search = name.toLowerCase()
      const path = `search_groups/${search}`
      this.groups.searching = true

      try {
        const response = await this.$http.get(path, this.authToken)
        this.groups.searched = response
      } catch (error) {
        console.log(error)
      } finally {
        this.groups.searchings = false
      }
    },
    clearGroupSearch () {
      this.groups.searched = []
      this.groups.search = ''
      this.groups.searching = false
    },
    createRRule (startDate) {
      const options = {
        freq: this.frequency.value,
        interval: this.interval.value
      }

      if (startDate) {
        options['dtstart'] = startDate
      }

      if (this.byDateType) {
        options[this.byDateType] = this.byDates.filter(day => day.selected).map(day => day.value)
      }

      if (this.byMonthType) {
        options[this.byMonthType] = this.selectedByMothDate.value
      }

      if (this.repeat === 'count') {
        options[this.repeat] = this.repeat_value
      } else if (this.repeat === 'until') {
        options[this.repeat] = this.repeat_date_value && repeatDateComp.selectedDates[0]
      }

      return new RRule(options)
    },
    createEvent () {
      if (this.creatingEvent) return false

      this.validateForm(async state => {
        if (!state) return false
        this.creatingEvent = true

        const startDate = startDateComp.selectedDates[0]
        const duration = this.getDurationInSeconds(this.duration_format, this.duration)
        const rrule = this.createRRule(startDate, duration)
        let endDate = null

        if (!this.is_recurring) {
          endDate = addSeconds(startDate, duration)
        } else if (!this.repeat) {
          endDate = null
        } else {
          const dates = rrule.all(function (date, i) {
            return i < 1000
          })
          endDate = dates[dates.length - 1]
        }

        try {
          let path = 'event_schemas'
          const events = await this.$http.post(path, {
            title: this.title,
            description: this.description,
            calendar_id: this.calendar_id,
            duration: duration,
            start_date: startDate,
            end_date: endDate,
            location: this.location,
            color: this.color,
            is_recurring: this.is_recurring,
            recurrence: this.is_recurring ? rrule.toString() : null,
            startDate: this.startDate,
            endDate: this.endDate
          }, this.authToken)

          // save group with event if any

          if (this.groups.pickedFromSelected.length) {
            path = 'add_event_to_groups'

            const response = await this.$http.post(path, {
              event_schema_id: events[0].id,
              group_ids: this.groups.pickedFromSelected.map(group => group.id)
            }, this.authToken)

            console.log('added groups to event', response)
          }

          this.$emit('done', events)
        } catch (err) {
          console.log(err)
        } finally {
          this.creatingEvent = false
        }
      })
    },
    getDurationInSeconds (format, duration) {
      // convert duration to seconds based on format chosen
      duration = Number(duration)
      switch (format) {
        case 'mins':
          return duration * 60
        case 'hrs':
          return duration * 3600
        case 'days':
          return duration * 86400
        case 'wks':
          return duration * 604800
        case 'mnths':
          return duration * 2.628e+6
        default:
          throw new Error('Invalid date format given')
      }
    },
    initializeDatePickers () {
      const startDate = new Date()

      startDateComp = flatpickr(this.$refs['start_date'], {
        enableTime: true,
        minDate: startDate,
        dateFormat: 'J M, Y; h i K',
        defaultDate: startDate,
        plugins: [new confirmDatePlugin({
          confirmIcon: tickIcon,
          confirmText: 'Done',
          showAlways: true
        })]
      })
    },
    mergeArrays (first, second) {
      const results = []

      for (let i = 0; i < first.length; i++) {
        for (let j = 0; j < second.length; j++) {
          results.push({
            text: `${first[i].text} ${second[j].text}`,
            selected: false,
            value: second[j].value.nth(first[i].value)
          })
        }
      }
      return results
    },
    setOptions (freq) {
      switch (freq.value) {
        case RRule.DAILY:
          this.intervals = eachDayOfInterval({
            start: new Date(2018, 8, 1),
            end: new Date(2018, 8, 30)
          }).map((date, i) => {
            const id = i + 1
            let text = format(date, 'do', {
              awareOfUnicodeTokens: true
            })
            if (text == '1st') text = ''
            else if (text === '2nd') text = 'other '
            else text = `${text} `

            return {
              id: id,
              text: `Every ${text}day`,
              value: id
            }
          })

          this.interval = this.intervals[0]
          break
        case RRule.WEEKLY:

          this.byDateType = 'byweekday'

          this.intervals = eachWeekOfInterval({
            start: new Date(2018, 0, 1),
            end: new Date(2018, 5, 30)
          }).map((date, i) => {
            const id = i + 1
            let text = format(date, 'wo', {
              awareOfUnicodeTokens: true
            })
            if (text == '1st') text = ''
            else if (text === '2nd') text = 'other '
            else text = `${text} `

            return {
              id: id,
              text: `Every ${text}week`,
              value: id
            }
          })

          this.interval = this.intervals[0]

          this.byDates = [{
            text: 'Monday',
            selected: false,
            value: RRule.MO
          },
          {
            text: 'Tuesday',
            selected: false,
            value: RRule.TU
          },
          {
            text: 'Wednesday',
            selected: false,
            value: RRule.WE
          },
          {
            text: 'Thursday',
            selected: false,
            value: RRule.TH
          },
          {
            text: 'Friday',
            selected: false,
            value: RRule.FR
          },
          {
            text: 'Saturday',
            selected: false,
            value: RRule.SA
          },
          {
            text: 'Sunday',
            selected: false,
            value: RRule.SU
          }
          ]
          break
        case RRule.MONTHLY:
          this.intervals = [{
            id: 1,
            text: 'Every month',
            value: 1
          },
          {
            id: 2,
            text: 'Every other month',
            value: 2
          },
          {
            id: 3,
            text: 'Every 3rd month',
            value: 3
          },
          {
            id: 4,
            text: 'Every 4th month',
            value: 4
          },
          {
            id: 5,
            text: 'Every 5th month',
            value: 5
          },
          {
            id: 6,
            text: 'Every 6th month',
            value: 6
          },
          {
            id: 7,
            text: 'Every 7th month',
            value: 7
          },
          {
            id: 8,
            text: 'Every 8th month',
            value: 8
          },
          {
            id: 9,
            text: 'Every 9th month',
            value: 9
          },
          {
            id: 10,
            text: 'Every 10th month',
            value: 10
          },
          {
            id: 11,
            text: 'Every 11th month',
            value: 11
          },
          {
            id: 12,
            text: 'Every 12th month',
            value: 12
          },
          {
            id: 18,
            text: 'Every 18th month',
            value: 18
          },
          {
            id: 24,
            text: 'Every 24th month',
            value: 24
          },
          {
            id: 36,
            text: 'Every 36th month',
            value: 36
          },
          {
            id: 48,
            text: 'Every 48th month',
            value: 48
          }
          ]

          this.interval = this.intervals[0]

          if (freq.id === 3) {
            this.byDateType = 'byweekday'

            const weekTime = [{
              text: 'First',
              value: 1
            },
            {
              text: 'Second',
              value: 2
            },
            {
              text: 'Third',
              value: 3
            },
            {
              text: 'Fourth',
              value: 4
            },
            {
              text: 'Fifth',
              value: 5
            },
            {
              text: 'Last',
              value: -1
            }
            ]

            const weekDay = [{
              text: 'Monday',
              value: RRule.MO
            },
            {
              text: 'Tuesday',
              value: RRule.TU
            },
            {
              text: 'Wednesday',
              value: RRule.WE
            },
            {
              text: 'Thursday',
              value: RRule.TH
            },
            {
              text: 'Friday',
              value: RRule.FR
            },
            {
              text: 'Saturday',
              value: RRule.SA
            },
            {
              text: 'Sunday',
              value: RRule.SU
            }
            ]

            this.byDates = this.mergeArrays(weekTime, weekDay)
          } else if (freq.id === 4) {
            this.byDateType = 'bymonthday'

            this.byDates = [{
              text: 'Use today\'s date',
              value: new Date().getDate()
            }]

            eachDayOfInterval({
              start: new Date(2018, 0, 1),
              end: new Date(2018, 0, 31)
            }).forEach((date, i) => {
              let text = format(date, 'do', {
                awareOfUnicodeTokens: true
              })
              this.byDates.push({
                text: `${text} day`,
                selected: false,
                value: i + 1
              })
            })
          }
          break

        case RRule.YEARLY:
          this.intervals = [{
            id: 1,
            text: 'Every year',
            value: 1
          },
          {
            id: 2,
            text: 'Every other year',
            value: 2
          },
          {
            id: 3,
            text: 'Every 3rd year',
            value: 3
          },
          {
            id: 4,
            text: 'Every 4th year',
            value: 4
          },
          {
            id: 5,
            text: 'Every 5th year',
            value: 5
          },
          {
            id: 6,
            text: 'Every 6th year',
            value: 6
          },
          {
            id: 7,
            text: 'Every 7th year',
            value: 7
          },
          {
            id: 8,
            text: 'Every 8th year',
            value: 8
          },
          {
            id: 9,
            text: 'Every 9th year',
            value: 9
          },
          {
            id: 10,
            text: 'Every 10th year',
            value: 9
          }
          ]

          this.interval = this.intervals[0]

          this.byMonthType = 'bymonth'

          this.byMonths = [{
            text: 'Use today\'s month',
            value: new Date().getMonth()
          },
          {
            text: 'January',
            value: 1
          },
          {
            text: 'February',
            value: 2
          },
          {
            text: 'March',
            value: 3
          },
          {
            text: 'April',
            value: 4
          },
          {
            text: 'May',
            value: 5
          },
          {
            text: 'June',
            value: 6
          },
          {
            text: 'July',
            value: 7
          },
          {
            text: 'August',
            value: 8
          },
          {
            text: 'September',
            value: 9
          },
          {
            text: 'October',
            value: 10
          },
          {
            text: 'November',
            value: 11
          },
          {
            text: 'December',
            value: 12
          }
          ]

          this.selectedByMothDate = this.byMonths[0]

          if (freq.id === 5) {
            this.byDateType = 'byweekday'

            const weekTime = [{
              text: 'First',
              value: 1
            },
            {
              text: 'Second',
              value: 2
            },
            {
              text: 'Third',
              value: 3
            },
            {
              text: 'Fourth',
              value: 4
            },
            {
              text: 'Fifth',
              value: 5
            },
            {
              text: 'Last',
              value: -1
            }
            ]

            const weekDay = [{
              text: 'Monday',
              value: RRule.MO
            },
            {
              text: 'Tuesday',
              value: RRule.TU
            },
            {
              text: 'Wednesday',
              value: RRule.WE
            },
            {
              text: 'Thursday',
              value: RRule.TH
            },
            {
              text: 'Friday',
              value: RRule.FR
            },
            {
              text: 'Saturday',
              value: RRule.SA
            },
            {
              text: 'Sunday',
              value: RRule.SU
            }
            ]

            this.byDates = this.mergeArrays(weekTime, weekDay)
          } else if (freq.id === 6) {
            this.byDateType = 'bymonthday'

            this.byDates = [{
              text: 'Use today\'s date',
              value: new Date().getDate()
            }]

            eachDayOfInterval({
              start: new Date(2018, 0, 1),
              end: new Date(2018, 0, 31)
            }).forEach((date, i) => {
              let text = format(date, 'do', {
                awareOfUnicodeTokens: true
              })
              this.byDates.push({
                text: `${text} day`,
                selected: false,
                value: i + 1
              })
            })
          }

          break

        default:
          break
      }
    },
    resetSettings () {
      this.byDates = []
      this.byDateType = null
      this.interval = null
      this.byDayActive = false
      this.intervals = []
      this.byMonthActive = false
      this.selectedByMothDates = []
      this.byMonths = []
      this.byMonthType = null
    }
  },
  beforeDestroy () {
    if (startDateComp !== null) startDateComp.destroy()
    if (repeatDateComp !== null) repeatDateComp.destroy()
  },
  watch: {
    frequency (val) {
      if (!val) return
      this.resetSettings()
      this.setOptions(val)
    },
    repeat (val) {
      this.repeat_value = ''

      if (!val || repeatDateComp) return

      this.$nextTick(() => {
        repeatDateComp = flatpickr(this.$refs['repeat_until'], {
          enableTime: true,
          dateFormat: 'J M, Y; h i K',
          defaultDate: new Date(),
          plugins: [new confirmDatePlugin({
            confirmIcon: tickIcon,
            confirmText: 'Done',
            showAlways: true
          })]
        })
      })
    }
  }
}

</script>
