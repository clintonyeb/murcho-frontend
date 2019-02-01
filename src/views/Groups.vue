<template>
  <div class="flex min-h-screen bg-blue-lightest-more font-serif mx-auto p-4 px-8 w-full" id="people">
    <div class="w-4/5 min-h-screen flex">
      <div class="w-1/3 min-h-screen pr-4">
        <div class="mx-auto w-full">

          <list-view :page="groupPage" :pagesEnded="groupEnded" @back="goBack" @forward="goForward" :groups="groups"
            @action="handleGroupAction" :totalGroup="groupCount" :activeGroup="groupId" @click="groupItemClicked"
            @create="createNewGroup" />

        </div>
      </div>
      <div class="w-2/3 max-w-full min-h-screen pl-4 pr-4">
        <div class="mx-auto w-full">

          <div class="w-full inline-flex justify-between items-top">
            <div class="inline-flex items-top">
              <h3 class="text-blue-light font-black text-2xl mr-4">People</h3>
              <p class="text-grey font-bold text-xs mr-4 mt-2">
                {{groupPeople.length}} {{pluralize('people', groupPeople.length)}} in group.
              </p>
            </div>

            <on-click-outside :do="handleSearchOutside" :active="searchedPeople.length" v-if="showAddPersonSearch">
              <div class="relative flex-grow">

                <div class="w-full inline-flex items-center justify-center relative max-w-sm float-right">
                  <button class="h-6 w-6 absolute pin-l ml-2 mr-2">

                    <svg class="h-4 w-4 fill-current text-grey relative" version="1.1" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 129 129"
                      enable-background="new 0 0 129 129" style="top: 3px;">
                      <g>
                        <path d="M51.6,96.7c11,0,21-3.9,28.8-10.5l35,35c0.8,0.8,1.8,1.2,2.9,1.2s2.1-0.4,2.9-1.2c1.6-1.6,1.6-4.2,0-5.8l-35-35   c6.5-7.8,10.5-17.9,10.5-28.8c0-24.9-20.2-45.1-45.1-45.1C26.8,6.5,6.5,26.8,6.5,51.6C6.5,76.5,26.8,96.7,51.6,96.7z M51.6,14.7   c20.4,0,36.9,16.6,36.9,36.9C88.5,72,72,88.5,51.6,88.5c-20.4,0-36.9-16.6-36.9-36.9C14.7,31.3,31.3,14.7,51.6,14.7z" />
                      </g>
                    </svg>

                  </button>

                  <input class="appearance-none w-full p-1 h-10 pl-8 text-grey bg-grey-lighter rounded border focus:bg-white border-transparent focus:border-blue-light border-animated"
                    type="text" placeholder="Search and Add People To Group.." @input="searchPeople" v-model="search" v-autofocus>
                </div>

                <div v-show="searchedPeople.length" class="mt-px text-sm text-center shadow-md text-grey-darker leading-normal rounded bg-white border absolute pin-l animated zoomIn flex flex-col overflow-hidden w-full max-w-sm z-10">
                  <a v-for="person in searchedPeople" :key="person.id" class="cursor-pointer no-underline flex items-center px-4 py-3 border-b whitespace-no-wrap group hover:text-white hover:bg-blue-light"
                    @click="searchPersonClicked(person.id)">
                    <avatar :username="`${person.first_name} ${person.last_name}`" :src="person.thumbnail" class="mr-3"
                      :size="40" />
                    <span class="group-hover:text-white">{{person.first_name}} {{person.last_name}}</span>
                  </a>
                </div>

              </div>
            </on-click-outside>

            <button class="bg-blue text-white h-8 px-3 inline-flex items-center justify-between rounded" @click="showAddPersonSearch = true" v-else>
              <span v-html="icons.plus" class="mr-2 text-white"></span>
              <span class="mr-2">Add Person</span>
            </button>

          </div>

          <div class="w-full h-screen" v-if="peopleLoaded && !groupPeople.length">
            <div class="container m-auto h-full relative">
              <div class="absolute mx-4 my-10">
                <h4 class="text-grey font-bold text-3xl text-center">
                  This group has no people.
                </h4>
                <h4 class="text-grey text-xl text-center mt-4">
                  You have not added any person to this group.
                  Please use the search above to add people here.
                </h4>
              </div>
            </div>
          </div>
          <people :people="groupPeople" :pagesEnded="peopleEnded" :page="peoplePage" class="mt-2" v-if="groupPeople.length"
            :group_id="groupId" @action="handleGroupAction" />

        </div>
      </div>
    </div>
    <div class="w-1/5 min-h-screen">
      <div class="mx-auto px-2 w-full">
        <div class="inline-flex w-full items-center justify-between">
          <h3 class="text-blue-light font-semibold text-base h-10 flex items-center">Upcoming Events</h3>
          <button class="text-blue-light rounded-full hover:text-blue inline-flex items-center pr-4" @click="getEventsForGroup(groupId)">
            <svg class="spinner ml-2 h-5 w-5 fill-current animated fadeIn" version="1.1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 26.349 26.35" style="enable-background:new 0 0 26.349 26.35;"
              xml:space="preserve" v-if="events.loading">
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

        <div class="w-full h-screen" v-if="events.loaded && !events.data.length">
          <div class="container m-auto h-full relative">
            <div class="absolute">
              <p class="font-medium text-grey text-lg text-center mt-4">
                No upcoming events.
              </p>
            </div>
          </div>
        </div>

        <event v-for="event in events.data" :key="event.id" :event="event" :loading="events.loading" class="mt-6"></event>
      </div>
    </div>

    <transition enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
      <div class="bg-white p-6 fixed shadow-lg z-20" style="top: 50%; left: 50%; transform: translate(-50%, -50%); animation-duration: 500ms;"
        v-if="modal.state" @keyup.esc.stop="closeModal">
        <!-- <div class="background-tint fixed w-full h-full bg-black"></div> -->
        <svg class="cursor-pointer fill-current h-5 w-5 text-blue-light float-right mr-2" role="button" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20" @click="hideActionDrawer">
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"></path>
        </svg>

        <confirm-delete v-if="activeAction === 'delete'" :action="modal.action" :group="modal.data" :cancel="modal.cancel" />

      </div>
    </transition>

    <transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
      <div class="bg-white p-6 fixed pin-t pin-r w-1/3 h-screen shadow-lg z-20" v-show="drawer.state" style="animation-duration: 500ms;">
        <div class="w-full inline-flex items-center justify-between">
          <p class="inline-flex text-grey" v-if="activeAction === 'email'">
            <span>
              <svg version="1.1" class="w-5 h5 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                <path d="M510.576,264.536l-58.431-157.94c-2.122-5.739-6.353-10.307-11.913-12.863c-5.559-2.556-11.78-2.796-17.519-0.672L137.796,198.467c-5.739,2.123-10.307,6.354-12.864,11.912c-2.556,5.559-2.795,11.781-0.672,17.519l58.431,157.94c2.122,5.739,6.353,10.307,11.913,12.864c3.05,1.403,6.299,2.107,9.559,2.107c2.682,0,5.37-0.476,7.961-1.435l284.918-105.406h0.001C508.886,289.585,514.958,276.382,510.576,264.536z M407.052,123.279l-88.377,126.344l-149.327-38.405L407.052,123.279zM200.044,366.731l-50.683-137l117.382,30.192L200.044,366.731z M224.863,370.237l65.152-104.33l30.642,7.882c0.951,0.241,1.913,0.367,2.852,0.367c3.688,0,7.216-1.787,9.392-4.891l18.133-25.944l117.369,36.818L224.863,370.237zM364.814,223.638l69.463-99.324l50.703,137.019L364.814,223.638z"></path>
                <path d="M133.44,388.976c-2.194-5.933-8.786-8.961-14.715-6.768l-43.162,15.968c-5.933,2.196-8.962,8.784-6.768,14.716c1.71,4.623,6.086,7.482,10.743,7.482c1.319,0,2.663-0.23,3.973-0.715l43.16-15.968C132.606,401.498,135.635,394.909,133.44,388.976z"></path>
                <path d="M75.023,282.646c-2.196-5.933-8.785-8.96-14.716-6.768l-26.643,9.857c-5.933,2.196-8.962,8.783-6.768,14.716c1.71,4.622,6.087,7.482,10.743,7.482c1.319,0,2.663-0.23,3.973-0.715l26.643-9.857C74.188,295.168,77.218,288.579,75.023,282.646z"></path>
                <path d="M41.995,369.408c-2.196-5.933-8.785-8.962-14.716-6.768l-19.797,7.324c-5.933,2.196-8.962,8.784-6.768,14.716c1.71,4.622,6.086,7.482,10.743,7.482c1.319,0,2.663-0.23,3.973-0.715l19.797-7.324C41.161,381.929,44.19,375.341,41.995,369.408z"></path>
              </svg>
            </span>
            <span>Sending Email..</span>
          </p>

          <p class="inline-flex text-grey" v-if="activeAction === 'sms'">
            <span v-html="icons.sms" class="mr-2"></span>
            <span>Sending SMS..</span>
          </p>

          <p class="inline-flex text-grey" v-if="activeAction === 'edit-person'">
            <span v-html="icons.edit" class="mr-2"></span>
            <span>Editing Group..</span>
          </p>

          <svg class="fill-current h-6 w-6 text-blue-light" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
            @click="hideActionDrawer">
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"></path>
          </svg>
        </div>

        <div class="mt-16 pa-4">

          <message :info="info" />

          <email v-if="activeAction === 'email'" :group_id="drawer.data" @sent="hideActionDrawer" />
          <sms v-if="activeAction === 'sms'" :group_id="drawer.data" @sent="hideActionDrawer" />
          <edit-group v-if="activeAction === 'edit-group'" :group="drawer.data" :action="drawer.action" @cancel="hideActionDrawer"
            @updated="groupUpdated" />
          <create-group v-if="activeAction === 'create'" @close="hideActionDrawer" @created="groupCreated" />
          <export-people v-if="activeAction === 'export-people'" :action="drawer.action" :group_id="drawer.data"
            @cancel="hideActionDrawer" @results="groupExported" />
          <download-export v-if="activeAction === 'download-export'" :export_file_url="drawer.data" @cancel="hideActionDrawer" />
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
import {
  filterIcon,
  userPlusIcon
} from '@/utils/icons'

import {
  debounce
} from 'debounce'
import {
  MESSAGE_TYPES
} from '@/utils'

export default {
  name: 'Groups',
  props: ['group_id'],
  data () {
    return {
      showAddPersonSearch: false,
      info: {
        message: '',
        type: MESSAGE_TYPES.info,
        state: false,
        data: null
      },
      events: {
        data: [],
        count: 0,
        loading: false,
        loaded: false
      },
      groups: [],
      groupCount: null,
      groupPage: 1,
      groupEnded: false,
      loadingGroups: false,
      icons: {
        filter: filterIcon,
        plus: userPlusIcon
      },
      groupPeople: [],
      groupId: null,
      searching: false,
      searchedPeople: [],
      search: '',
      peopleEnded: false,
      peoplePage: 1,
      peopleLoaded: false,
      groupsLoaded: false,
      modal: {
        state: false,
        action: null,
        cancel: null,
        data: null,
        loading: false
      },
      drawer: {
        state: false,
        action: null,
        cancel: null,
        data: null,
        loading: false,
        results: null
      },
      activeAction: null
    }
  },
  created () {
    const id = this.group_id
    if (id) {
      this.groupId = this.decodeHash(id)
    } else {
      this.groupId = null
    }

    this.readyCallbacks([this.refresh])
  },
   metaInfo: {
      title: 'Groups',
      meta: [{
        name: 'description',
        content: 'Groups Page for the Murcho Platform. Create and manage groups in your church.'
      }]
    },
  components: {
    'list-view': () => import('@/components/groups/ListView'),
    'people': () => import('@/components/groups/People'),
    'create-group': () => import('@/components/groups/Create'),
    'confirm-delete': () => import('@/components/groups/ConfirmDelete'),
    'edit-group': () => import('@/components/groups/Edit'),
    'email': () => import('@/components/groups/Email'),
    'sms': () => import('@/components/groups/SMS'),
    'export-people': () => import('@/components/groups/ExportPeople'),
    'download-export': () => import('@/components/groups/DownloadExport')
  },
  methods: {
    async getEventsForGroup (groupId, page = 1, size = 100) {
      this.events.loading = true

      try {
        const path = `get_events_for_group/${groupId}`
        const response = await this.$http.get(path, this.authToken)
        this.events.data = response
        this.events.count = response.length
        this.events.loaded = true
      } catch (error) {

      } finally {
        this.events.loading = false
      }
    },
    groupExported (fileUrl) {
      this.drawer.data = fileUrl
      this.activeAction = 'download-export'
    },
    hideActionDrawer () {
      this.drawer.data = null
      this.activeAction = null
      this.drawer.state = false
    },
    groupUpdated (group, groupIndex) {
      this.groups.splice(groupIndex, 1, group)
      this.hideActionDrawer()
    },
    groupCreated (group) {
      this.groups.unshift(group)
      this.hideActionDrawer()
      this.groupId = group.id
    },
    createNewGroup () {
      this.activeAction = 'create'
      this.drawer.state = true
    },
    closeModal () {
      this.modal.state = false
      this.activeAction = null
    },
    groupItemClicked (groupId) {
      this.groupId = groupId
    },
    async searchPersonClicked (personId) {
      const path = `add_person_to_group`

      try {
        const response = await this.$http.post(path, {
          person_id: personId,
          group_id: this.groupId
        }, this.authToken)

        this.groupPeople.unshift(response)
        this.clearPeopleSearch()
      } catch (err) {

      } finally {}
    },
    clearPeopleSearch () {
      this.showAddPersonSearch = false
      this.searchedPeople = []
      this.search = ''
      this.searching = false
    },
    handleSearchOutside () {
      this.clearPeopleSearch()
    },
    searchPeople: debounce(function (e) {
      this.doPeopleSearch(e.target.value)
    }, 200),
    async doPeopleSearch (name) {
      if (!name) {
        this.searching = false
        return
      }

      const search = name.toLowerCase()
      const path = `search_people/${search}`
      this.searching = true

      try {
        const response = await this.$http.get(path, this.authToken)
        this.searchedPeople = response
      } catch (error) {
        console.log(error)
      } finally {
        // this.loadingMore = false
      }
    },
    refresh (isNew = true) {
      this.getGroups()
      if (isNew) this.getGroupsCount()
    },
    goBack () {
      if (this.page === 1) return false
      const page = this.page - 1
      this.getPeople(page)
    },
    goForward () {
      if (this.ended) return false
      const page = this.page + 1
      this.getPeople(page)
    },
    handleGroupAction (data) {
      switch (data.action) {
        case 'delete':
          this.modal.action = () => this.deleteGroup(data.group.id, data.index)
          this.modal.cancel = () => this.closeModal()
          this.modal.data = data.group
          this.activeAction = data.action
          this.modal.state = true
          break
        case 'removed-group':
          this.groupPeople.splice(data.index, 1)
          break
        case 'edit-group':
          this.drawer.data = data.group
          this.drawer.action = (group) => {
            this.groupUpdated(group, data.index)
          }
          this.activeAction = data.action
          this.drawer.state = true
          break
        case 'email':
        case 'sms':
          this.drawer.data = data.group.id
          this.activeAction = data.action
          this.drawer.state = true
          break
        case 'export-people':
          this.drawer.data = data.group.id
          this.activeAction = data.action
          this.drawer.state = true
        default:
          break
      }
    },
    async deleteGroup (groupId, index) {
      const path = `groups/${groupId}`

      try {
        await this.$http.delete(path, this.authToken)
        this.groups.splice(index, 1)
        this.groupCount--
        this.closeModal()

        if (groupId === this.groupId) this.groupId = this.groups[0].id
      } catch (err) {

      } finally {}
    },
    async getGroups (page = 1, size = 100) {
      const path = `groups?page=${page}&size=${size}`
      this.loadingGroups = true

      try {
        const response = await this.$http.get(path, this.authToken)

        if (response.length) {
          this.groups = response
          this.page = page
        }

        if (response.length < size) this.ended = true
        else this.ended = false

        if (!this.groupId) {
          this.groupId = response[0].id
        }

        this.groupsLoaded = true
      } catch (err) {

      } finally {
        this.loadingGroups = false
      }
    },
    async getGroupsCount () {
      const path = 'total_groups'

      try {
        const response = await this.$http.get(path, this.authToken)
        this.groupCount = response
      } catch (error) {}
    },
    async getPeopleForGroup (groupId, page = 1, size = 100) {
      const path = `get_people/${groupId}?page=${page}&size=${size}`
      this.loadingMore = true
      this.groupPeople = []
      this.peopleLoaded = false

      try {
        const response = await this.$http.get(path, this.authToken)

        this.groupPeople = response
        this.peopleLoaded = true
      } catch (err) {

      } finally {
        this.loadingMore = false
      }
    },
    getGroupDetails (groupId) {
      this.getPeopleForGroup(groupId)
      this.getEventsForGroup(groupId)
    }
  },
  watch: {
    groupId: function (groupId) {
      if (!groupId) return false
      if (this.appReady) {
        this.getGroupDetails(groupId)
      } else {
        this.readyCallbacks([() => this.getGroupDetails(groupId)])
      }
    }
  }
}

</script>
