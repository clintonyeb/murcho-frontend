<template>
  <div class="flex min-h-screen bg-blue-lightest-more font-serif" id="people">
    <div class="w-1/3 min-h-screen pr-10">
      <div class="mx-auto w-full">

        <groups :page="groupPage" :pagesEnded="groupEnded" @back="goBack" @forward="goForward" :groups="groups" @action="handleGroupAction"
          :totalGroup="groupCount" :activeGroup="groupId" @click="groupItemClicked" />

      </div>
    </div>
    <div class="w-1/3 h-screen pr-4">
      <div class="mx-auto w-full m-2">


        <on-click-outside :do="handleSearchOutside">
          <div class="relative mx-auto">

            <div class="w-full inline-flex items-center justify-center relative">
              <button class="h-6 w-6 absolute pin-l ml-2 mr-2">

                <svg class="h-4 w-4 fill-current text-grey relative" version="1.1" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 129 129" enable-background="new 0 0 129 129"
                  style="top: 3px;">
                  <g>
                    <path d="M51.6,96.7c11,0,21-3.9,28.8-10.5l35,35c0.8,0.8,1.8,1.2,2.9,1.2s2.1-0.4,2.9-1.2c1.6-1.6,1.6-4.2,0-5.8l-35-35   c6.5-7.8,10.5-17.9,10.5-28.8c0-24.9-20.2-45.1-45.1-45.1C26.8,6.5,6.5,26.8,6.5,51.6C6.5,76.5,26.8,96.7,51.6,96.7z M51.6,14.7   c20.4,0,36.9,16.6,36.9,36.9C88.5,72,72,88.5,51.6,88.5c-20.4,0-36.9-16.6-36.9-36.9C14.7,31.3,31.3,14.7,51.6,14.7z" />
                  </g>
                </svg>

              </button>

              <input class="appearance-none w-full p-1 h-10 pl-8 text-grey bg-grey-lighter rounded border focus:bg-white border-transparent focus:border-blue-light border-animated"
                type="text" placeholder="Search and Add People To Group.." @input="searchPeople" v-model="search">
            </div>

            <div v-show="searchedPeople.length" class="mt-px text-sm text-center shadow-md text-grey-darker leading-normal rounded bg-white border absolute pin-l animated zoomIn flex flex-col overflow-hidden w-full max-w-sm z-10"
              style="animation-duration: 300ms;">
              <a v-for="person in searchedPeople" :key="person.id" class="cursor-pointer no-underline flex items-center px-4 py-3 border-b whitespace-no-wrap group hover:text-white hover:bg-blue-light"
                @click="searchPersonClicked(person.id)">
                <avatar :username="`${person.first_name} ${person.last_name}`" :src="person.photo" class="mr-3" :size="40" />
                <span class="group-hover:text-white">{{person.first_name}} {{person.last_name}}</span>
              </a>
            </div>

          </div>
        </on-click-outside>

        <people :people="groupPeople" :pagesEnded="peopleEnded" :page="peoplePage" class="mt-2" v-if="groupPeople.length" />
        <div v-if="!loadingGroups && !groupPeople.length">
          There are no people here. Use the search box to add people.
        </div>
      </div>
    </div>
    <div class="w-1/3 h-screen">
      <div class="mx-auto w-full">
        <events />
      </div>
    </div>
  </div>
</template>

<script>
  import Groups from '@/components/groups/ListView'
  import People from '@/components/groups/People'
  import Events from '@/components/groups/Events'
  import Avatar from '@/components/Avatar'

  import {
    filterIcon,
    userPlusIcon
  } from '@/utils/icons'

  import {
    debounce
  } from 'debounce'

  export default {
    name: 'GroupDetail',
    props: ['id'],
    data() {
      return {
        groups: [],
        groupCount: null,
        groupPage: 1,
        groupEnded: false,
        loadingGroups: false,
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
          plus: userPlusIcon
        },
        groupPeople: [],
        groupId: null,
        searching: false,
        searchedPeople: [],
        search: '',
        peopleEnded: false,
        peoplePage: 1
      }
    },
    created() {
      const id = this.$route.params.id
      this.groupId = this.decodeHash(id)

      this.setUpGroupUI()
      this.readyCallbacks([this.fetchGroups, this.refresh])
      this.setPageTitle('Groups')
    },
    components: {
      Groups,
      People,
      Events,
      Avatar
    },
    methods: {
      groupItemClicked(groupId) {
        this.$router.push({
          name: 'group-items',
          params: {
            id: this.encodeId(groupId)
          }
        })
      },
      async searchPersonClicked(personId) {
        const path = `add_person_to_group`
        const url = this.$http.url(path)

        try {
          const response = await this.$http.post(url, {
            person_id: personId,
            group_id: this.groupId
          }, this.authToken)

          this.groupPeople.unshift(response)
          this.searchedPeople = []
          this.searching = false
        } catch (err) {

        } finally {}
      },
      handleSearchOutside() {
        this.searchedPeople = []
        this.search = ''
      },
      searchPeople: debounce(function (e) {
        this.doPeopleSearch(e.target.value)
      }, 200),
      async doPeopleSearch(name) {
        if (!name) {
          this.searching = false
          return
        }

        const search = name.toLowerCase()
        const path = `search_people/${search}`
        const url = this.$http.url(path)
        this.searching = true

        try {
          const response = await this.$http.get(url, this.authToken)
          this.searchedPeople = response
        } catch (error) {
          console.log(error)
        } finally {
          // this.loadingMore = false
        }
      },
      fetchGroups() {
        this.getPeopleForGroup(this.groupId)
      },
      refresh(isNew = true) {
        this.getGroups()
        if (isNew) this.getGroupsCount()
      },
      goToDetail(groupId) {
        this.$router.push({
          name: 'group-items',
          params: {
            id: this.encodeId(groupId)
          }
        })
      },
      goBack() {
        if (this.page === 1) return false
        const page = this.page - 1;
        this.getPeople(page)
      },
      goForward() {
        if (this.ended) return false
        const page = this.page + 1;
        this.getPeople(page)
      },
      handleGroupAction(data) {
        switch (data.action) {
          case 'delete':
            this.deleteGroup(data.group, data.index)
            break;

          default:
            break;
        }
      },
      async deleteGroup(groupId, index) {
        const path = `groups/${groupId}`
        const url = this.$http.url(path)

        try {
          await this.$http.delete(url, this.authToken)
          this.groups.splice(index, 1)
          this.totalGroups--
        } catch (err) {

        } finally {}
      },
      setUpGroupUI() {
        if (!this.order) {
          const order = localStorage.getItem('group-order')
          this.order = this.groupOrders.find(o => o.value === order) || this.groupOrders[0]
        }

        if (!this.sort) {
          const sort = localStorage.getItem('group-sort')
          this.sort = this.groupSorts.find(s => s.value === sort) || this.groupSorts[0]
        }
      },
      async getGroups(page = 1, size = 100) {
        const path = `groups?page=${page}&size=${size}`
        const url = this.$http.url(path)
        this.loadingGroups = true

        try {
          const response = await this.$http.get(url, this.authToken)

          if (response.length) {
            this.groups = response
            this.page = page
          }

          if (response.length < size) this.ended = true
          else this.ended = false
        } catch (err) {

        } finally {
          this.loadingGroups = false
        }
      },
      async getGroupsCount() {
        const path = 'total_groups'
        const url = this.$http.url(path)

        try {
          const response = await this.$http.get(url, this.authToken)
          this.groupCount = response
        } catch (error) {}
      },
      async getPeopleForGroup(groupId, page = 1, size = 100) {
        const path = `get_people/${groupId}?page=${page}&size=${size}`
        const url = this.$http.url(path)
        this.loadingMore = true

        try {
          const response = await this.$http.get(url, this.authToken)

          this.groupPeople = response
        } catch (err) {

        } finally {
          this.loadingMore = false
        }
      }
    },
    watch: {
      '$route.params.id': function (id) {
        if (!id) return false

        this.groupId = this.decodeHash(id)
        this.getPeopleForGroup(this.groupId)
      }
    }
  }

</script>

<style>

</style>
