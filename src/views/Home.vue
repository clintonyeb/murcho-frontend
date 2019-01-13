<template>
  <div class="w-full flex flex-wrap lg:min-h-screen bg-blue-lightest-more font-serif" id="people">
    <div class="lg:w-4/5 w-full lg:min-h-screen">
      <div class="mx-auto w-full">
        <div class="w-full church-info py-4 lg:px-8 px-4">
          <div class="w-full flex items-center justify-between">
            <div class="w-full flex flex-wrap items-center lg:justify-start justify-center">
              <p class="w-full lg:w-auto flex items-center justify-center">
                <avatar :username="`${church.name}`" :src="church.photo" class="text-center" :size="180" />
              </p>
              <div class="w-full lg:w-auto lg:ml-8 mt-4 lg:mt-0">
                <div class="w-full flex flex-wrap items-center justify-between">
                  <h3 class="text-blue font-black text-xl lg:text-3xl flex-grow w-full lg:w-auto">{{church.name}}</h3>
                  <div class="w-full lg:w-auto inline-flex items-center mt-2">
                    <button class="h-8 w-8 p-2 bg-grey-light rounded-full text-grey-dark font-bold">
                      <svg version="1.1" class="h-4 w-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 55 55" style="enable-background:new 0 0 55 55;" xml:space="preserve">
                        <path d="M54.5,10c0-5.514-4.486-10-10-10c-4.469,0-8.261,2.948-9.539,7H5.735C2.849,7,0.5,9.349,0.5,12.235v37.529C0.5,52.651,2.849,55,5.735,55h37.529c2.887,0,5.235-2.349,5.235-5.235V19.159C52.027,17.612,54.5,14.091,54.5,10z M46.5,49.765c0,1.784-1.451,3.235-3.235,3.235H5.735C3.951,53,2.5,51.549,2.5,49.765V12.235C2.5,10.451,3.951,9,5.735,9h28.815C34.518,9.329,34.5,9.662,34.5,10c0,5.514,4.486,10,10,10c0.685,0,1.354-0.07,2-0.202V49.765z M47.154,17.538c-0.198,0.07-0.398,0.13-0.599,0.185c-0.036,0.01-0.073,0.019-0.109,0.028c-0.177,0.045-0.355,0.084-0.534,0.117c-0.092,0.017-0.186,0.029-0.279,0.043c-0.134,0.02-0.269,0.04-0.403,0.053C44.989,17.985,44.746,18,44.5,18c-4.411,0-8-3.589-8-8c0-0.58,0.069-1.177,0.206-1.777C37.517,4.665,40.7,2,44.5,2c4.411,0,8,3.589,8,8C52.5,13.48,50.262,16.44,47.154,17.538z" />
                      </svg>
                    </button>

                    <on-click-outside :do="() => showChurchMore = false" :active="showChurchMore === true">
                      <div class="inline-flex items-center justify-center cursor-pointer relative">

                        <button class="h-8 w-8 ml-4 text-grey-dark font-bold bg-grey-light rounded-full p-2" @click="showChurchMore = true">
                          <svg aria-hidden="true" data-prefix="fas" data-icon="ellipsis-h" class="h-4 w-4 fill-current"
                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" @click.stop="activeHiddenGroup = activeHiddenGroup ? null : person.id">
                            <path fill="currentColor" d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"
                              style="padding: .5rem;"></path>
                          </svg>
                        </button>

                        <div v-show="showChurchMore === true" class="inline-flex mt-px shadow-md rounded bg-white border absolute animated zoomIn flex flex-col z-10"
                          style="min-width: 250px; top: 100%; right: 0;">
                          <div class="inline-flex flex-wrap p-2">

                            <a v-for="menu in churchMore" :key="menu.id" class="w-full text-xs cursor-pointer no-underline flex items-center justify-start px-4 py-2 whitespace-no-wrap group hover:text-grey-darker hover:bg-blue-lightest rounded">
                              <span v-html="menu.icon" class="mr-2 hover:text-grey-darker"></span>
                              <span class="hover:text-grey-darker text-grey-dark">{{menu.text}}</span>
                            </a>
                          </div>
                        </div>

                      </div>
                    </on-click-outside>

                  </div>
                </div>
                <p class="mt-2 text-grey-dark font-medium text-xl italic">
                  {{church.motto}}
                </p>
                <div class="inline-flex items-center justify-between mt-3">
                  <p class="text-grey-dark">
                    <span class="font-black mr-1">{{churchInfo.members}}</span> <span class="text-xs">Members</span>
                  </p>
                  <p class="mx-2 text-grey-light">
                    &middot;
                  </p>
                  <p class="text-grey-dark">
                    <span class="font-black mr-1">{{churchInfo.guests}}</span> <span class="text-xs">Quests</span>
                  </p>
                  <p class="mx-2 text-grey-light">
                    &middot;
                  </p>
                  <p class="text-grey-dark">
                    <span class="font-black mr-1">0</span> <span class="text-xs">Followers</span>
                  </p>
                </div>
                <p class="mt-3 text-grey-dark" v-if="church.website_link">
                  <a :href="church.website_link" target="_blank">{{church.website_link}}</a>
                </p>
                <p class="mt-2 text-grey-dark" v-if="church.location">
                  <span class="font-black mr-1">Location:</span> <span>{{church.location}}</span>
                </p>
                <p class="mt-2 text-grey-dark" v-if="church.more_info">
                  <span class="font-black mr-1">More Information:</span> <span>{{church.more_info}}</span>
                </p>
              </div>
            </div>
            <div>

            </div>
          </div>
        </div>

      </div>

      <div class=" mt-4 lg:m-8">
        <updates></updates>
        <analytics></analytics>
        <!-- <actions class="mt-4"></actions> -->
      </div>

    </div>
    <div class="w-full lg:w-1/5 overflow-hidden">
      <div class="mx-auto py-4 px-2 w-full">
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
  </div>
</template>

<script>
import {
  editIcon
} from '@/utils/icons'

import Updates from '@/components/home/Updates'
import Analytics from '@/components/home/Analytics'
import Actions from '@/components/home/Actions'

export default {
  name: 'dashboard',
  data () {
    return {
      upcomingEvents: [],
      loadingUpcomingEvents: false,
      upcomingLoaded: false,
      homeTabMenu: [{
        id: 1,
        text: 'Church Updates',
        value: 'Updates',
        icon: ''
      },
      {
        id: 2,
        text: 'Church Analytics',
        value: 'Analytics',
        icon: ''
      },
      {
        id: 3,
        text: 'Church Actions',
        value: 'Actions',
        icon: ''
      }
      ],
      church: {},
      churchInfo: {},
      loadingChurchInfo: false,
      showChurchMore: false,
      churchMore: [{
        id: 1,
        text: 'Edit Church',
        value: 'edit',
        icon: editIcon
      }],
      currentTabComponent: 'Updates'
    }
  },
  created () {
    this.setPageTitle('Home')
    this.readyCallbacks([this.refresh])
  },
  components: {
    Updates,
    Actions,
    Analytics
  },
  methods: {
    refresh () {
      this.getChurchInfo(this.$store.state.user.church_id)
      this.loadUpcomingEvents()
    },
    async loadUpcomingEvents () {
      if (this.loadingUpcomingEvents) return

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
    async getChurchInfo (churchId) {
      try {
        this.loadingChurchInfo = true
        const path = `get_church_info/${churchId}`
        const response = await this.$http.get(path, this.authToken)
        this.church = response.church
        this.churchInfo = response
      } catch (error) {

      } finally {
        this.loadingChurchInfo = false
      }
    }
  }
}

</script>

<style lang="scss">
@import "../assets/charts.scss";
@import "chartist/dist/scss/chartist.scss";
</style>
