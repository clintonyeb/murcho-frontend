<template>
  <div class="flex min-h-screen bg-blue-lightest-more font-serif" id="people">
    <div class="w-4/5 min-h-screen">
      <div class="mx-auto p-4 px-8 w-full">

        <div class="w-full flex align-center justify-between">
          <div class="flex items-center justify-between w-full">
            <div class="flex items-baseline justify-between">
              <h3 class="text-blue-light font-medium text-2xl mr-6">
                Calendar &amp; Events
              </h3>
            </div>

            <div class="flex items-baseline justify-between">
              <div class="inline-flex items-center">

                <div class="mr-4 inline-flex items-center">
                  <button class="bg-white text-grey-dark h-8 p-3 inline-flex items-center border border-grey-light rounded-l" @click="previousMonth">
                  <span v-html="icons.back" class="text-grey"></span>
                </button>
                <button class="bg-white text-grey-dark h-8 p-3 inline-flex items-center justify-between border border-grey-light w-48">
                  <span class="mr-2">{{displayedMonth}}</span>
                  <svg class="h-2 w-2 fill-current text-grey ml-2" version="1.1" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="292.362px" height="292.362px"
                  viewBox="0 0 292.362 292.362" style="enable-background:new 0 0 292.362 292.362;" xml:space="preserve">
                  <g>
                    <path d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z" />
                  </g>
                </svg>
                </button>
                <button class="bg-white text-grey-dark h-8 p-3 inline-flex items-center border border-grey-light rounded-r" @click="nextMonth">
                  <span v-html="icons.forward"></span>
                </button>
                </div>

                <button class="bg-blue text-white h-8 p-3 inline-flex items-center justify-between rounded-l">
                  <span v-html="icons.plus" class="mr-2 text-white"></span>
                  <span class="mr-2">Create Event</span>
                </button>

                <on-click-outside :do="() => moreMenu = false">
                  <div class="inline-flex items-center justify-center cursor-pointer relative">

                    <button class="bg-blue-light text-white h-8 w-8 hover:bg-grey-light hover:text-white rounded-r"
                      @click="moreMenu = !moreMenu">
                      <svg aria-hidden="true" data-prefix="fas" data-icon="ellipsis-h" class="h-6 p-1 cursor-pointer hover:bg-grey-light rounded-full align-middle"
                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"
                          style="padding: .5rem;"></path>
                      </svg>
                    </button>
                  </div>
                </on-click-outside>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex align-center justify-between mt-8">
          <calendar :selectedMonth="selectedMonth"></calendar>
        </div>

      </div>
    </div>
    <div class="w-1/5 h-screen max-w-xs">
      
    </div>
  </div>
</template>

<script>
  import Calendar from '@/components/events/Calendar'

  import {
    leftIcon,
    rightIcon
  } from '@/utils/icons'
    import {
    MESSAGE_TYPES
  } from '@/utils'
  import { 
    format,
    addMonths,
    subMonths
  } from 'date-fns'

  // const pluralize = require('pluralize')
  const dateFormat = "MMMM YYYY";

  export default {
    name: 'People',
    data() {
      return {
        currentMonth: new Date(),
        selectedMonth: new Date(),
        icons: {
          back: leftIcon,
          forward: rightIcon
        }
      }
    },
    components: {
      Calendar
    },
    created() {
      // this.setUpPeopleUI()
      // this.readyCallbacks([this.refresh])
      this.setPageTitle('Events')
    },
    computed: {
      displayedMonth(){
        return format(this.selectedMonth, dateFormat, {
          awareOfUnicodeTokens: true
        })
      },
    },
    methods: {
      previousMonth(){
        this.selectedMonth = subMonths(this.selectedMonth, 1)
      },
      nextMonth(){
        this.selectedMonth = addMonths(this.selectedMonth, 1)
      },
      actionHandler(value) {
        this.activeAction = value
        this.takingAction = true;
      },
      setUpPeopleUI() {},
    },
  }
</script>