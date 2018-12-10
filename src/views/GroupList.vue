<template>
  <div class="flex min-h-screen bg-blue-lightest-more font-serif" id="groups">
    <div class="w-full min-h-screen">
      <div class="mx-auto p-4 px-8 w-full container">

        <div class="w-full flex align-center justify-between">
          <div class="flex items-center justify-between w-full">
            <div class="flex items-baseline justify-between">
              <h3 class="text-blue-light font-medium text-2xl mr-6">
                Groups
              </h3>
              <p class="text-grey-dark text-xs mr-6 leading-loose">
                {{totalGroups}} Total
              </p>

              <on-click-outside :do="() => orderMenu = false" :active="orderMenu">
                <div class="inline-flex items-center justify-center cursor-pointer relative mr-4" @click="orderMenu = !orderMenu">
                  <div class="self-end">
                    <p class="text-grey-dark text-xs font-hairline">
                      Sort by:
                    </p>
                  </div>
                  <div class="inline-flex items-center">
                    <p class="text-xs ml-1 font-hairline">
                      {{order.text}}
                    </p>
                    <svg class="h-2 w-2 fill-current text-grey-dark ml-1 self-center" version="1.1" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="292.362px" height="292.362px"
                      viewBox="0 0 292.362 292.362" style="enable-background:new 0 0 292.362 292.362;" xml:space="preserve">
                      <g>
                        <path d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z" />
                      </g>
                    </svg>
                  </div>

                  <div v-show="orderMenu" class="z-10 mt-px text-sm text-center shadow-md text-grey-darker leading-normal rounded bg-white border absolute animated zoomIn flex flex-col overflow-hidden"
                    style="min-width: 200px; top: 100%;">
                    <a v-for="order in groupOrders" :key="order.id" class="cursor-pointer no-underline flex items-center justify-start px-4 py-3 border-b whitespace-no-wrap group hover:text-white hover:bg-blue-light"
                      @click="setGroupOrder(order)">
                      <span class="group-hover:text-white">{{order.text}}</span>
                    </a>
                  </div>

                </div>
              </on-click-outside>

              <on-click-outside :do="() => sortMenu = false" :active="sortMenu">
                <div class="inline-flex items-center justify-center cursor-pointer relative" @click="sortMenu = !sortMenu">
                  <div class="self-end">
                    <p class="text-grey-dark text-xs font-hairline">
                      Order:
                    </p>
                  </div>
                  <div class="inline-flex items-center">
                    <p class="text-xs ml-1 font-hairline">
                      {{sort.text}}
                    </p>
                    <svg class="h-2 w-2 fill-current text-grey-dark ml-1 self-center" version="1.1" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="292.362px" height="292.362px"
                      viewBox="0 0 292.362 292.362" style="enable-background:new 0 0 292.362 292.362;" xml:space="preserve">
                      <g>
                        <path d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z" />
                      </g>
                    </svg>
                  </div>

                  <div v-show="sortMenu" class="z-10 mt-px text-sm text-center shadow-md text-grey-darker leading-normal rounded bg-white border absolute animated zoomIn flex flex-col overflow-hidden"
                    style="min-width: 200px; top: 100%;">
                    <a v-for="sort in groupSorts" :key="sort.id" class="cursor-pointer no-underline flex items-center justify-start px-4 py-3 border-b whitespace-no-wrap group hover:text-white hover:bg-blue-light"
                      @click="setGroupSort(sort)">
                      <span class="group-hover:text-white">{{sort.text}}</span>
                    </a>
                  </div>
                </div>
              </on-click-outside>

            </div>

            <div class="flex items-baseline justify-between">
              <div class="inline-flex">

                <button class="bg-white text-grey-dark mr-4 h-8 rounded p-3 inline-flex items-center justify-between">
                  <span class="mr-2">Filter</span>
                  <span v-html="icons.filter"></span>
                </button>

                <button class="bg-blue text-white mr-4 h-8 rounded p-3 inline-flex items-center justify-between">
                  <span v-html="icons.group" class="mr-2 text-white"></span>
                  <span class="mr-2">Add Group</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        <div>
          <grid-view :page="page" :pagesEnded="ended" @back="goBack" @forward="goForward"
          :groups="groups" @action="handleGroupAction" @click="goToDetail"></grid-view>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import GridView from '@/components/groups/GridView'
import {
  filterIcon,
  groupIcon
} from '@/utils/icons'

export default {
  name: 'Groups',
  data () {
    return {
      groups: [],
      page: 1,
      ended: false,
      totalGroups: null,
      loadingMore: false,
      order: null,
      groupOrders: [{
        id: 1,
        text: 'Date Updated',
        value: 'updated_at'
      },
      {
        id: 2,
        text: 'Date Created',
        value: 'created_at'
      },
      {
        id: 3,
        text: 'First Name',
        value: 'first_name'
      },
      {
        id: 4,
        text: 'Last Name',
        value: 'last_name'
      },
      {
        id: 5,
        text: 'Phone Number',
        value: 'phone_number'
      },
      {
        id: 6,
        text: 'Email Address',
        value: 'email'
      },
      {
        id: 7,
        text: 'Membership Status',
        value: 'membership_status'
      },
      {
        id: 8,
        text: 'Date Joined',
        value: 'date_joined'
      }
      ],
      orderMenu: false,
      sort: null,
      sortMenu: false,
      groupSorts: [{
        id: 1,
        text: 'Descending',
        value: 'DESC'
      },
      {
        id: 2,
        text: 'Ascending',
        value: 'ASC'
      }
      ],
      icons: {
        filter: filterIcon,
        group: groupIcon
      }
    }
  },
  created () {
    this.setUpGroupUI()
    this.readyCallbacks([this.refresh])
    this.setPageTitle('Groups')
  },
  components: {
    GridView
  },
  methods: {
    goToDetail (groupId) {
      this.$router.push({ name: 'group-items', params: { id: this.encodeId(groupId) } })
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
          this.deleteGroup(data.group, data.index)
          break

        default:
          break
      }
    },
    async deleteGroup (groupId, index) {
      const path = `groups/${groupId}`

      try {
        await this.$http.delete(path, this.authToken)
        this.groups.splice(index, 1)
        this.totalGroups--
      } catch (err) {

      } finally {}
    },
    setUpGroupUI () {
      if (!this.order) {
        const order = localStorage.getItem('group-order')
        this.order = this.groupOrders.find(o => o.value === order) || this.groupOrders[0]
      }

      if (!this.sort) {
        const sort = localStorage.getItem('group-sort')
        this.sort = this.groupSorts.find(s => s.value === sort) || this.groupSorts[0]
      }
    },
    refresh (isNew = true) {
      this.getGroups()
      if (isNew) this.getGroupsCount()
    },
    async getGroups (page = 1, size = 100) {
      const path = `groups?page=${page}&size=${size}`
      this.loadingMore = true

      try {
        const response = await this.$http.get(path, this.authToken)

        if (response.length) {
          this.groups = response
          this.page = page
        }

        if (response.length < size) this.ended = true
        else this.ended = false
      } catch (err) {

      } finally {
        this.loadingMore = false
      }
    },
    async getGroupsCount () {
      const path = 'total_groups'

      try {
        const response = await this.$http.get(path, this.authToken)
        this.totalGroups = response
      } catch (error) {}
    }
  }
}

</script>
