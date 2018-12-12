<template>
  <div class="filters" id="filters">
    <div>
      <div class="w-full mb-4">
        <p class="text-grey text-xs">Name Search: (press enter to search)</p>
        <div class="mt-2 w-full">
          <div class="w-full inline-flex items-center justify-center relative p-1">
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
              type="text" v-model="search_input" placeholder="Enter Name Here To Search.." @keyup.enter="filterPeople">
          </div>
        </div>
      </div>

      <!-- <hr class="border border-grey-light my-8"> -->

      <div class="w-full inline-flex justify-between justify-center mt-8">
        <p class="text-grey-dark font-bold">Apply Filters</p>
      </div>

      <div class="w-full mt-6">
        <p class="text-grey text-xs">Required Fields:</p>
        <div class="mt-2 w-full">
          <div class="mt-2 w-full inline-flex relative" v-for="field in requiredFields" :key="field.id">
            <p class="flex-grow text-grey font-bold">{{field.text}}</p>
            <label class="checkbox-container checkbox" :for="field.value">
              <input type="checkbox" v-model="selectedFields" :value="field.value" :id="field.value">
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
      </div>

      <div class="w-full mt-6">
        <p class="text-grey text-xs">Date Joined:</p>
        <div class="mt-2 w-full inline-flex items-center justify-between">
          <div class="mt-2 w-1/2 mr-1">
            <label class="block text-grey text-sm font-bold mb-2" for="Start Date">Start Date</label>
            <input type="text" placeholder="Start Date" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2"
              name="Start Date" ref="start_date_joined" id="Start Date" :class="getInputColor('Start Date')">
            <p class="text-red-light text-xs italic pt-1 animated shake h-4" v-show="getInputState('Start Date')">
              {{getInputErrorMessage('Start Date')}}</p>
          </div>
          <div class="mt-2 w-1/2 ml-1">
            <label class="block text-grey text-sm font-bold mb-2" for="End Date">End Date</label>
            <input type="text" placeholder="End Date" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2"
              name="End Date" ref="end_date_joined" id="End Date" :class="getInputColor('End Date')">
            <p class="text-red-light text-xs italic pt-1 animated shake h-4" v-show="getInputState('End Date')">
              {{getInputErrorMessage('End Date')}}</p>
          </div>
        </div>
      </div>

      <div class="w-full mt-6">
        <p class="text-grey text-xs">Groups:</p>
        <div class="mt-2 w-full">
          <on-click-outside :do="handleGroupSearchOutside" :active="groups.searched.length">
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
                  type="text" placeholder="Search and Add Groups.." @input="searchGroups" v-model="groups.search">
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

        <div class="mt-8 inline-flex justify-start w-full">
          <div class="w-full inline-flex justify-between items-center">
            <button class="inline-flex flex-auto items-center justify-center h-10 bg-blue rounded-sm text-white mr-2"
              @click="filterPeople">
              <span v-html="icons.filter" class="mr-1"></span>
              <span class="font-bold">SAVE FILTERS</span>
              <svg class="spinner ml-2 h-6 w-6 text-grey-light fill-current animated fadeIn" version="1.1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 26.349 26.35" style="enable-background:new 0 0 26.349 26.35;"
                xml:space="preserve" v-if="loadingForm">
                <g>
                  <circle cx="13.792" cy="3.082" r="3.082"></circle>
                  <circle cx="13.792" cy="24.501" r="1.849"></circle>
                  <circle cx="6.219" cy="6.218" r="2.774"></circle>
                  <circle cx="21.365" cy="21.363" r="1.541"></circle>
                  <circle cx="3.082" cy="13.792" r="2.465"></circle>
                  <circle cx="24.501" cy="13.791" r="1.232"></circle>
                  <path d="M4.694,19.84c-0.843,0.843-0.843,2.207,0,3.05c0.842,0.843,2.208,0.843,3.05,0c0.843-0.843,0.843-2.207,0-3.05C6.902,18.996,5.537,18.988,4.694,19.84z"></path>
                  <circle cx="21.364" cy="6.218" r="0.924"></circle>
                </g>
              </svg>
            </button>

            <button class="inline-flex flex-auto items-center justify-center h-10 rounded-sm text-blue-light underline ml-2"
              @click="clearFilters">
              <span class="font-bold">CLEAR</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  tickIcon,
  filterIcon
} from '@/utils/icons'

import {
  debounce
} from 'debounce'

import flatpickr from 'flatpickr'
import confirmDatePlugin from 'flatpickr/dist/plugins/confirmDate/confirmDate.js'
const dateFormat = 'EEEE, do; h:m a'
require('flatpickr/dist/flatpickr.min.css')

let startDateJoinedComp = null
let endDateJoinedComp = null

export default {
  name: 'Filters',
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
      requiredFields: [{
        id: 1,
        text: 'Email Address',
        value: 'email'
      },
      {
        id: 2,
        text: 'Phone Number',
        value: 'phone_number'
      },
      {
        id: 3,
        text: 'Profile Photo',
        value: 'photo'
      }
      ],
      icons: {
        filter: filterIcon
      }
    }
  },
  mounted () {
    this.initializeDatePickers()
    this.getSavedFilters()
  },
  beforeDestroy () {
    if (startDateJoinedComp !== null) startDateJoinedComp.destroy()
    if (endDateJoinedComp !== null) endDateJoinedComp.destroy()
  },
  methods: {
    clearFilters () {
      this.search_input = ''
      this.selectedFields = []
      startDateJoinedComp.setDate(null)
      endDateJoinedComp.setDate(null)
      this.groups.pickedFromSelected = []

      const filters = this.getDefaultFilters()
      sessionStorage.setItem('people-filters', JSON.stringify(filters))
      this.$emit('filters', filters)
    },
    getSavedFilters () {
      const savedFilters = sessionStorage.getItem('people-filters')
      let filters = null
      if (savedFilters) {
        filters = JSON.parse(savedFilters)
      } else {
        filters = this.getDefaultFilters()
      }

      sessionStorage.setItem('people-filters', JSON.stringify(filters))
      // this.$emit('filters', filters)
      this.setUpUI(filters)
    },
    setUpUI (savedFilters) {
      this.search_input = savedFilters.name

      savedFilters.fields.forEach(field => {
        this.selectedFields.push(field)
      })

      // add date_joined
      const startDate = savedFilters.date_joined.start_joined || null
      startDateJoinedComp.setDate(startDate)
      const endDate = savedFilters.date_joined.end_joined || null
      endDateJoinedComp.setDate(endDate)

      this.groups.selected = savedFilters.groups
      this.groups.pickedFromSelected = savedFilters.groups
    },
    getDefaultFilters () {
      const filters = {}

      // get required fields
      filters.fields = []

      // get joined interval
      filters.date_joined = {
        start_joined: null,
        end_joined: null
      }

      // get groups
      filters.groups = []

      return filters
    },
    getActiveFilters () {
      const filters = {}

      // name filter search input
      filters.name = this.search_input

      // get required fields
      filters.fields = this.selectedFields

      // get joined interval
      filters.date_joined = {
        start_joined: startDateJoinedComp.selectedDates[0],
        end_joined: endDateJoinedComp.selectedDates[0]
      }

      // get groups
      filters.groups = this.groups.pickedFromSelected

      return filters
    },
    filterPeople () {
      const filters = this.getActiveFilters()
      sessionStorage.setItem('people-filters', JSON.stringify(filters))
      this.$emit('filters', filters)
    },
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
    handleGroupSearchOutside () {
      console.log('here')
      this.clearGroupSearch()
    },
    clearGroupSearch () {
      this.groups.searched = []
      this.groups.search = ''
      this.groups.searching = false
    },
    initializeDatePickers () {
      // const defaultDate = new Date()

      startDateJoinedComp = flatpickr(this.$refs['start_date_joined'], {
        dateFormat: 'J M, Y',
        // defaultDate: defaultDate,
        plugins: [
          new confirmDatePlugin({
            confirmIcon: tickIcon,
            confirmText: 'Done',
            showAlways: true
          })
        ]
      })

      endDateJoinedComp = flatpickr(this.$refs['end_date_joined'], {
        dateFormat: 'J M, Y',
        // defaultDate: defaultDate,
        plugins: [
          new confirmDatePlugin({
            confirmIcon: tickIcon,
            confirmText: 'Done',
            showAlways: true
          })
        ]
      })
    }
  }
}

</script>
