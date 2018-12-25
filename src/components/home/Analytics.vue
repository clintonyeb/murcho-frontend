<template>
  <div class="mb-20">
    <h4 class="text-grey font-bold pl-5">Church Analytics</h4>
    <div class="mt-4 flex items-stretch justify-between flex-wrap p-4">
      <div class="w-1/3" @click="$router.push({name: 'people'})">
        <div class="h-full bg-white shadow p-4 m-1 rounded">

          <div class="text-grey-light w-full inline-flex justify-between items-center mb-4">
            <h4 class="text-xs flex-grow">Recent People</h4>
            <router-link :to="{name: 'people'}" class="no-underline text-grey-light text-xs hover:text-grey-dark hover:bg-grey-lighter border rounded-sm p-1 h-5 flex items-center">
              See People
            </router-link>
          </div>

          <table class="w-full">
            <tbody class="w-full">
              <tr v-for="person in people" :key="person.id" class="group text-grey-dark text-xs hover:bg-grey-lightest rounded cursor-pointer select-none">
                <td class="w-6 h-6 text-right px-1 py-2">
                  <avatar :username="`${person.first_name} ${person.last_name}`" :src="person.thumbnail" class="" :size="23" />
                </td>
                <td class="px-1 py-2 group-hover:text-grey-darker">{{person.first_name}} {{person.last_name}}</td>
                <td class="px-1 py-2 group-hover:text-grey-darker">{{person.membership_status | capitalize}}</td>
                <td class="px-1 py-2 text-right text-grey-light group-hover:text-grey-darker">
                  {{person.date_joined | formatDate }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="w-1/3" @click="$router.push({name: 'groups'})">
        <div class="h-full bg-white shadow p-4 m-1 rounded">

          <div class="text-grey-light w-full inline-flex justify-between items-center mb-4">
            <h4 class="text-xs flex-grow">Recent Groups</h4>
            <router-link :to="{name: 'groups'}" class="no-underline text-grey-light text-xs hover:text-grey-dark hover:bg-grey-lighter border rounded-sm p-1 h-5 flex items-center">
              See Groups
            </router-link>
          </div>

          <table class="w-full">
            <tbody class="w-full">
              <tr v-for="group in groups" :key="group.id" class="group text-grey-dark text-xs hover:bg-grey-lightest rounded cursor-pointer select-none">
                <td class="w-6 h-6 text-right px-1 py-2">
                  <span v-html="icons.group" class="h-5 w-5 inline-block"></span>
                </td>
                <td class="px-1 py-2 group-hover:text-grey-darker">{{group.name}}</td>
                <td class="px-1 py-2 group-hover:text-grey-darker">{{group.people_count}} {{pluralize('person',
                  group.people_count)}}</td>
                <td class="px-1 py-2 text-right text-grey-light group-hover:text-grey-darker">
                  {{group.updated_at | formatDate }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="w-1/3" @click="$router.push({name: 'events'})">
        <div class="h-full bg-white shadow p-4 m-1 rounded">

          <div class="text-grey-light w-full inline-flex justify-between items-center mb-4">
            <h4 class="text-xs flex-grow">Recent Events</h4>
            <router-link :to="{name: 'events'}" class="no-underline text-grey-light text-xs hover:text-grey-dark hover:bg-grey-lighter border rounded-sm p-1 h-5 flex items-center">
              See Events
            </router-link>
          </div>

          <table class="w-full">
            <tbody class="w-full">
              <tr v-for="event in events" :key="event.id" class="group text-grey-dark text-xs hover:bg-grey-lightest rounded cursor-pointer select-none">
                <td class="w-6 h-6 text-right px-1 py-2">
                  <p :class="`bg-${event.color}-lighter`" class="w-4 h-4 rounded-full"></p>
                </td>
                <td class="px-1 py-2 group-hover:text-grey-darker">{{event.title}}</td>
                <td class="px-1 py-2 group-hover:text-grey-darker">{{formatDuration(event.duration)}}</td>
                <td class="px-1 py-2 text-right text-grey-light group-hover:text-grey-darker">
                  {{event.start_date | formatDate }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>

    <div class="mt-4 flex items-stretch justify-between flex-wrap p-4">
      <div class="flex items-center justify-center w-1/3" @click="$router.push({name: 'people'})">
        <div class="bg-white shadow p-4 rounded cursor-pointer group hover:bg-blue-light">
          <div class="h-full w-64  flex justify-center items-center">
            <div class="flex items-center justify-center w-32 h-32">
              <svg version="1.1" class="fill-current h-24 w-24 text-blue-light border-2 p-2 rounded-full border-blue-light group-hover:text-white group-hover:border-white"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 350 350"
                style="enable-background:new 0 0 350 350;" xml:space="preserve">
                <path d="M175,171.173c38.914,0,70.463-38.318,70.463-85.586C245.463,38.318,235.105,0,175,0s-70.465,38.318-70.465,85.587C104.535,132.855,136.084,171.173,175,171.173z" />
                <path d="M41.909,301.853C41.897,298.971,41.885,301.041,41.909,301.853L41.909,301.853z" />
                <path d="M308.085,304.104C308.123,303.315,308.098,298.63,308.085,304.104L308.085,304.104z" />
                <path d="M307.935,298.397c-1.305-82.342-12.059-105.805-94.352-120.657c0,0-11.584,14.761-38.584,14.761s-38.586-14.761-38.586-14.761c-81.395,14.69-92.803,37.805-94.303,117.982c-0.123,6.547-0.18,6.891-0.202,6.131c0.005,1.424,0.011,4.058,0.011,8.651c0,0,19.592,39.496,133.08,39.496c113.486,0,133.08-39.496,133.08-39.496c0-2.951,0.002-5.003,0.005-6.399C308.062,304.575,308.018,303.664,307.935,298.397z" />
              </svg>
            </div>
          </div>
          <div class="">
            <h4 class="text-blue-light group-hover:text-white font-semibold text-base text-center">Manage Your People</h4>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center w-1/3" @click="$router.push({name: 'groups'})">
        <div class="bg-white shadow p-4 rounded cursor-pointer group hover:bg-blue-light">
          <div class="h-full w-64  flex justify-center items-center">
            <div class="flex items-center justify-center w-32 h-32">
              <svg version="1.1" class="fill-current h-24 w-24 text-blue-light border-2 p-2 rounded-full border-blue-light group-hover:text-white group-hover:border-white" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px" y="0px" viewBox="0 0 80.13 80.13" style="enable-background:new 0 0 80.13 80.13;" xml:space="preserve">
                <path d="M48.355,17.922c3.705,2.323,6.303,6.254,6.776,10.817c1.511,0.706,3.188,1.112,4.966,1.112c6.491,0,11.752-5.261,11.752-11.751c0-6.491-5.261-11.752-11.752-11.752C53.668,6.35,48.453,11.517,48.355,17.922z M40.656,41.984c6.491,0,11.752-5.262,11.752-11.752s-5.262-11.751-11.752-11.751c-6.49,0-11.754,5.262-11.754,11.752S34.166,41.984,40.656,41.984z M45.641,42.785h-9.972c-8.297,0-15.047,6.751-15.047,15.048v12.195l0.031,0.191l0.84,0.263c7.918,2.474,14.797,3.299,20.459,3.299c11.059,0,17.469-3.153,17.864-3.354l0.785-0.397h0.084V57.833C60.688,49.536,53.938,42.785,45.641,42.785z M65.084,30.653h-9.895c-0.107,3.959-1.797,7.524-4.47,10.088c7.375,2.193,12.771,9.032,12.771,17.11v3.758c9.77-0.358,15.4-3.127,15.771-3.313l0.785-0.398h0.084V45.699C80.13,37.403,73.38,30.653,65.084,30.653z M20.035,29.853c2.299,0,4.438-0.671,6.25-1.814c0.576-3.757,2.59-7.04,5.467-9.276c0.012-0.22,0.033-0.438,0.033-0.66c0-6.491-5.262-11.752-11.75-11.752c-6.492,0-11.752,5.261-11.752,11.752C8.283,24.591,13.543,29.853,20.035,29.853z M30.589,40.741c-2.66-2.551-4.344-6.097-4.467-10.032c-0.367-0.027-0.73-0.056-1.104-0.056h-9.971C6.75,30.653,0,37.403,0,45.699v12.197l0.031,0.188l0.84,0.265c6.352,1.983,12.021,2.897,16.945,3.185v-3.683C17.818,49.773,23.212,42.936,30.589,40.741z" />
              </svg>
            </div>
          </div>
          <div class="">
            <h4 class="text-blue-light group-hover:text-white font-semibold text-base text-center">Manage Your Groups</h4>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center w-1/3" @click="$router.push({name: 'events'})">
        <div class="bg-white shadow p-4 rounded cursor-pointer group hover:bg-blue-light">
          <div class="h-full w-64  flex justify-center items-center">
            <div class="flex items-center justify-center w-32 h-32">
              <svg version="1.1" class="fill-current h-24 w-24 text-blue-light border-2 p-2 rounded-full border-blue-light group-hover:text-white group-hover:border-white" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px" y="0px" viewBox="0 0 488.152 488.152" style="enable-background:new 0 0 488.152 488.152;"
                xml:space="preserve">
                <path d="M177.854,269.311c0-6.115-4.96-11.069-11.08-11.069h-38.665c-6.113,0-11.074,4.954-11.074,11.069v38.66c0,6.123,4.961,11.079,11.074,11.079h38.665c6.12,0,11.08-4.956,11.08-11.079V269.311L177.854,269.311z" />
                <path d="M274.483,269.311c0-6.115-4.961-11.069-11.069-11.069h-38.67c-6.113,0-11.074,4.954-11.074,11.069v38.66c0,6.123,4.961,11.079,11.074,11.079h38.67c6.108,0,11.069-4.956,11.069-11.079V269.311z" />
                <path d="M371.117,269.311c0-6.115-4.961-11.069-11.074-11.069h-38.665c-6.12,0-11.08,4.954-11.08,11.069v38.66c0,6.123,4.96,11.079,11.08,11.079h38.665c6.113,0,11.074-4.956,11.074-11.079V269.311z" />
                <path d="M177.854,365.95c0-6.125-4.96-11.075-11.08-11.075h-38.665c-6.113,0-11.074,4.95-11.074,11.075v38.653c0,6.119,4.961,11.074,11.074,11.074h38.665c6.12,0,11.08-4.956,11.08-11.074V365.95L177.854,365.95z" />
                <path d="M274.483,365.95c0-6.125-4.961-11.075-11.069-11.075h-38.67c-6.113,0-11.074,4.95-11.074,11.075v38.653c0,6.119,4.961,11.074,11.074,11.074h38.67c6.108,0,11.069-4.956,11.069-11.074V365.95z" />
                <path d="M371.117,365.95c0-6.125-4.961-11.075-11.069-11.075h-38.67c-6.12,0-11.08,4.95-11.08,11.075v38.653c0,6.119,4.96,11.074,11.08,11.074h38.67c6.108,0,11.069-4.956,11.069-11.074V365.95L371.117,365.95z" />
                <path d="M440.254,54.354v59.05c0,26.69-21.652,48.198-48.338,48.198h-30.493c-26.688,0-48.627-21.508-48.627-48.198V54.142h-137.44v59.262c0,26.69-21.938,48.198-48.622,48.198H96.235c-26.685,0-48.336-21.508-48.336-48.198v-59.05C24.576,55.057,5.411,74.356,5.411,98.077v346.061c0,24.167,19.588,44.015,43.755,44.015h389.82c24.131,0,43.755-19.889,43.755-44.015V98.077C482.741,74.356,463.577,55.057,440.254,54.354z M426.091,422.588c0,10.444-8.468,18.917-18.916,18.917H80.144c-10.448,0-18.916-8.473-18.916-18.917V243.835c0-10.448,8.467-18.921,18.916-18.921h327.03c10.448,0,18.916,8.473,18.916,18.921L426.091,422.588L426.091,422.588z" />
                <path d="M96.128,129.945h30.162c9.155,0,16.578-7.412,16.578-16.567V16.573C142.868,7.417,135.445,0,126.29,0H96.128C86.972,0,79.55,7.417,79.55,16.573v96.805C79.55,122.533,86.972,129.945,96.128,129.945z" />
                <path d="M361.035,129.945h30.162c9.149,0,16.572-7.412,16.572-16.567V16.573C407.77,7.417,400.347,0,391.197,0h-30.162c-9.154,0-16.577,7.417-16.577,16.573v96.805C344.458,122.533,351.881,129.945,361.035,129.945z" />
              </svg>
            </div>
          </div>
          <div class="">
            <h4 class="text-blue-light group-hover:text-white font-semibold text-base text-center">Manage Your Events</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    formatRelative
  } from 'date-fns'

  const today = new Date()

  import {
    eventIcon,
    groupIcon,
    peopleIcon,
    servicesIcon,
    homeIcon,
  } from '@/utils/icons'

  export default {
    name: 'Analytics',
    data() {
      return {
        people: [],
        groups: [],
        events: [],
        icons: {
          event: eventIcon,
          group: groupIcon,
          people: peopleIcon,
          service: servicesIcon,
          home: homeIcon
        }
      }
    },
    created() {
      // this.readyCallbacks([this.refresh])
    },
    methods: {
      refresh() {
        this.getPeopleUpdates()
        this.getGroupsUpdates()
        this.getEventsUpdates()
      },
      async getPeopleUpdates() {
        try {
          const path = 'get_people_updates'
          const response = await this.$http.get(path, this.authToken)
          this.people = response
        } catch (error) {} finally {}
      },
      async getGroupsUpdates() {
        try {
          const path = 'get_groups_updates'
          const response = await this.$http.get(path, this.authToken)
          this.groups = response
        } catch (error) {} finally {}
      },
      async getEventsUpdates() {
        try {
          const path = 'get_events_updates'
          const response = await this.$http.get(path, this.authToken)
          this.events = response
        } catch (error) {} finally {}
      },
      formatDuration(seconds) {
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
      formatDate(dateString) {
        const date = new Date(dateString)
        return formatRelative(date, today)
      },
    }
  }

</script>
