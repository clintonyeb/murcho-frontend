<template>
  <div class="w-full flex flex-wrap lg:min-h-screen bg-blue-lightest-more font-serif" id="people">
    <div class="lg:w-4/5 w-full lg:min-h-screen">
      <div class="mx-auto w-full">
        <div class="w-full church-info py-4 lg:px-8 px-4">
          <div class="w-full flex items-center justify-between">
            <div class="w-full flex flex-wrap lg:flex-no-wrap items-center lg:justify-start justify-center">
              <p class="w-full lg:w-auto flex items-center justify-center">
                <avatar :username="`${church.name}`" :src="church.photo" class="text-center" :size="180" />
              </p>
              <div class="w-full lg:w-auto lg:ml-8 mt-4 lg:mt-0">
                <div class="w-full flex flex-wrap items-center justify-between">
                  <h3 class="text-blue font-black text-xl lg:text-3xl flex-grow w-full lg:w-auto">{{church.name}}</h3>
                  <div class="w-full lg:w-auto inline-flex items-center mt-2">
                    <!-- <button class="text-blue-dark">
                      <svg version="1.1" class="h-6 w-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 55 55" style="enable-background:new 0 0 55 55;" xml:space="preserve">
                        <path d="M54.5,10c0-5.514-4.486-10-10-10c-4.469,0-8.261,2.948-9.539,7H5.735C2.849,7,0.5,9.349,0.5,12.235v37.529C0.5,52.651,2.849,55,5.735,55h37.529c2.887,0,5.235-2.349,5.235-5.235V19.159C52.027,17.612,54.5,14.091,54.5,10z M46.5,49.765c0,1.784-1.451,3.235-3.235,3.235H5.735C3.951,53,2.5,51.549,2.5,49.765V12.235C2.5,10.451,3.951,9,5.735,9h28.815C34.518,9.329,34.5,9.662,34.5,10c0,5.514,4.486,10,10,10c0.685,0,1.354-0.07,2-0.202V49.765z M47.154,17.538c-0.198,0.07-0.398,0.13-0.599,0.185c-0.036,0.01-0.073,0.019-0.109,0.028c-0.177,0.045-0.355,0.084-0.534,0.117c-0.092,0.017-0.186,0.029-0.279,0.043c-0.134,0.02-0.269,0.04-0.403,0.053C44.989,17.985,44.746,18,44.5,18c-4.411,0-8-3.589-8-8c0-0.58,0.069-1.177,0.206-1.777C37.517,4.665,40.7,2,44.5,2c4.411,0,8,3.589,8,8C52.5,13.48,50.262,16.44,47.154,17.538z" />
                      </svg>
                    </button> -->

                    <button class="text-blue-dark" @click="editChurch">
                      <svg class="fill-current h-6 w-6" viewBox="0 -1 401.52289 401" xmlns="http://www.w3.org/2000/svg">
                        <path d="m370.589844 250.972656c-5.523438 0-10 4.476563-10 10v88.789063c-.019532 16.5625-13.4375 29.984375-30 30h-280.589844c-16.5625-.015625-29.980469-13.4375-30-30v-260.589844c.019531-16.558594 13.4375-29.980469 30-30h88.789062c5.523438 0 10-4.476563 10-10 0-5.519531-4.476562-10-10-10h-88.789062c-27.601562.03125-49.96875 22.398437-50 50v260.59375c.03125 27.601563 22.398438 49.96875 50 50h280.589844c27.601562-.03125 49.96875-22.398437 50-50v-88.792969c0-5.523437-4.476563-10-10-10zm0 0" />
                        <path d="m376.628906 13.441406c-17.574218-17.574218-46.066406-17.574218-63.640625 0l-178.40625 178.40625c-1.222656 1.222656-2.105469 2.738282-2.566406 4.402344l-23.460937 84.699219c-.964844 3.472656.015624 7.191406 2.5625 9.742187 2.550781 2.546875 6.269531 3.527344 9.742187 2.566406l84.699219-23.464843c1.664062-.460938 3.179687-1.34375 4.402344-2.566407l178.402343-178.410156c17.546875-17.585937 17.546875-46.054687 0-63.640625zm-220.257812 184.90625 146.011718-146.015625 47.089844 47.089844-146.015625 146.015625zm-9.40625 18.875 37.621094 37.625-52.039063 14.417969zm227.257812-142.546875-10.605468 10.605469-47.09375-47.09375 10.609374-10.605469c9.761719-9.761719 25.589844-9.761719 35.351563 0l11.738281 11.734375c9.746094 9.773438 9.746094 25.589844 0 35.359375zm0 0" /></svg>
                    </button>

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


    <transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
      <div class="bg-white p-6 fixed pin-t pin-r w-1/3 h-screen shadow-lg z-20 overflow-y-auto" v-if="drawer.state"
        style="animation-duration: 500ms;">
        <div class="w-full inline-flex items-center justify-between">
          <p class="inline-flex text-grey ml-2">
            <!-- <span v-html="icons.sms" class="mr-2"></span> -->
            <span>Editing Church Details..</span>
          </p>

          <svg class="cursor-pointer fill-current h-5 w-5 text-blue-light float-right mr-2" role="button" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20" @click="hideActionDrawer">
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"></path>
          </svg>

        </div>

        <div class="mt-8">
          <edit-church :church="church" @updated="churchUpdated" @cancel="hideActionDrawer"></edit-church>
        </div>
      </div>
    </transition>

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
    data() {
      return {
        drawer: {
          state: false,
          action: null,
          cancel: null,
          data: null,
          loading: false,
          results: null
        },
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
    created() {
      this.readyCallbacks([this.refresh])
    },
    metaInfo: {
      title: 'Home',
      meta: [{
        name: 'description',
        content: 'Dashboard Page for the Murcho Platform. Have an overview of people, events and church groups.'
      }]
    },
    components: {
      Updates,
      Actions,
      Analytics,
      'edit-church': () => import('@/components/home/EditChurch'),
    },
    methods: {
      churchUpdated(church){
        this.church = church
        this.hideActionDrawer()
      },
      editChurch(){
         this.drawer.state = true
      },
      hideActionDrawer() {
        this.drawer.data = null
        this.activeAction = null
        this.drawer.state = false
      },
      refresh() {
        this.getChurchInfo(this.$store.state.user.church_id)
        this.loadUpcomingEvents()
      },
      async loadUpcomingEvents() {
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
      async getChurchInfo(churchId) {
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
