<template>
  <div class="flex min-h-screen bg-blue-lightest-more font-serif" id="people">
    <div class="w-4/5 min-h-screen">
      <div class="mx-auto p-4 px-8 w-full">
        <div class="w-full flex align-center justify-between">
          <div class="flex items-center justify-between w-full">
            <div class="flex items-baseline justify-between">
              <h3 class="text-blue-light font-medium text-2xl mr-6">
                People
              </h3>
              <p class="text-grey-dark text-xs mr-6 leading-loose">
                {{total}} Total
              </p>

              <on-click-outside :do="() => orderMenu = false">
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
                    style="min-width: 200px; animation-duration: 300ms; top: 100%;">
                    <a v-for="order in peopleOrders" :key="order.id" class="cursor-pointer no-underline flex items-center justify-start px-4 py-3 border-b whitespace-no-wrap group hover:text-white hover:bg-blue-light"
                      @click="setPeopleOrder(order)">
                      <span class="group-hover:text-white">{{order.text}}</span>
                    </a>
                  </div>

                </div>
              </on-click-outside>

              <on-click-outside :do="() => sortMenu = false">
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
                    style="min-width: 200px; animation-duration: 300ms; top: 100%;">
                    <a v-for="sort in peopleSorts" :key="sort.id" class="cursor-pointer no-underline flex items-center justify-start px-4 py-3 border-b whitespace-no-wrap group hover:text-white hover:bg-blue-light"
                      @click="setPeopleSort(sort)">
                      <span class="group-hover:text-white">{{sort.text}}</span>
                    </a>
                  </div>
                </div>
              </on-click-outside>

            </div>

            <div class="flex items-baseline justify-between">
              <div class="inline-flex">

                <on-click-outside :do="() => viewMenu = false">
                  <div class="inline-flex items-center justify-center cursor-pointer relative">

                    <button class="bg-white text-grey-dark mr-4 h-8 w-8 rounded hover:bg-grey-light hover:text-white"
                      @click="viewMenu = !viewMenu">
                      <span v-html="view.icon" class="h-4 w-4"></span>
                    </button>

                    <div v-show="viewMenu" class="z-10 mt-px text-sm text-center shadow-md text-grey-darker leading-normal rounded bg-white border absolute animated zoomIn flex flex-col overflow-hidden"
                      style="min-width: 200px; animation-duration: 300ms; right: 100%; top: 100%;">
                      <a v-for="view in PeopleViews" :key="view.id" class="cursor-pointer no-underline flex items-center justify-start px-4 py-3 border-b whitespace-no-wrap group hover:text-white hover:bg-blue-light"
                        @click="setPeopleView(view)">
                        <span v-html="view.icon" class="mr-2 group-hover:text-white"></span>
                        <span class="group-hover:text-white">{{view.text}}</span>
                      </a>
                    </div>
                  </div>
                </on-click-outside>

                <button class="bg-white text-grey-dark mr-4 h-8 rounded p-3 inline-flex items-center justify-between">
                  <span class="mr-2">Filter</span>
                  <span v-html="icons.filter"></span>
                </button>

                <button class="bg-blue text-white mr-4 h-8 rounded p-3 inline-flex items-center justify-between">
                  <span v-html="icons.plus" class="mr-2 text-white"></span>
                  <span class="mr-2">Add Person</span>
                </button>

                <on-click-outside :do="() => moreMenu = false">
                  <div class="inline-flex items-center justify-center cursor-pointer relative">

                    <button class="bg-blue-light text-white h-8 w-8 rounded hover:bg-grey-light hover:text-white" @click="moreMenu = !moreMenu">
                      <svg aria-hidden="true" data-prefix="fas" data-icon="ellipsis-h" class="h-6 p-1 cursor-pointer hover:bg-grey-light rounded-full align-middle"
                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"
                          style="padding: .5rem;"></path>
                      </svg>
                    </button>

                    <div v-show="moreMenu" class="z-10 mt-px text-sm text-center shadow-md text-grey-darker leading-normal rounded bg-white border absolute animated zoomIn flex flex-col overflow-hidden"
                      style="min-width: 200px; animation-duration: 300ms; right: 100%; top: 100%;">
                      <a v-for="more in peopleMores" :key="more.id" class="cursor-pointer no-underline flex items-center justify-start px-4 py-3 border-b whitespace-no-wrap group hover:text-white hover:bg-blue-light"
                        @click="setPeopleMore(more)">
                        <span v-html="view.icon" class="mr-2 group-hover:text-white"></span>
                        <span class="group-hover:text-white">{{more.text}}</span>
                      </a>
                    </div>
                  </div>
                </on-click-outside>
              </div>
            </div>

          </div>
        </div>

        <list-view v-if="view.value === 'list-view'" :page="page" :pagesEnded="ended" @back="goBack" @forward="goForward" :people="people" @action="handlePersonAction"></list-view>
        <grid-view v-else-if="view.value === 'grid-view'" :page="page" :pagesEnded="ended" @back="goBack" @forward="goForward" :people="people" @action="handlePersonAction"></grid-view>

      </div>
    </div>
    <div class="w-1/5 h-screen">
    </div>
  </div>
</template>

<script>
  import ListView from '@/components/people/ListView'
  import GridView from '@/components/people/GridView'
  import OnClickOutside from '@/components/OnClickOutside'
  import {
    listViewIcon,
    gridViewIcon,
    smallListViewIcon,
    filterIcon,
    userPlusIcon
  } from '@/utils/icons'

  export default {
    name: 'People',
    data() {
      return {
        people: [],
        total: 0,
        loadingMore: false,
        page: 1,
        ended: false,
        selectedPeople: [],
        order: null,
        peopleOrders: [{
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
        peopleSorts: [{
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
        viewMenu: false,
        PeopleViews: [{
            id: 1,
            text: 'List View',
            value: 'list-view',
            icon: listViewIcon
          },
          {
            id: 2,
            text: 'Grid View',
            value: 'grid-view',
            icon: gridViewIcon
          }
        ],
        view: null,
        icons: {
          filter: filterIcon,
          plus: userPlusIcon
        },
        peopleMores: [
          {
            text: 'Import From Excel',
            value: 'excel'
          }
        ],
        moreMenu: false,
      }
    },
    components: {
      ListView,
      GridView,
    },
    created() {
      if (!this.order) {
        const order = localStorage.getItem('people-order')
        this.order = this.peopleOrders.find(o => o.value === order) || this.peopleOrders[0]
      }

      if (!this.sort) {
        const sort = localStorage.getItem('people-sort')
        this.sort = this.peopleSorts.find(s => s.value === sort) || this.peopleSorts[0]
      }

      if (!this.view) {
        const view = localStorage.getItem('people-view')
        this.view = this.PeopleViews.find(v => v.value === view) || this.PeopleViews[0]
      }

      this.readyCallbacks([this.refresh])
    },
    methods: {
      handlePersonAction(data){
        switch (data.action) {
          case 'delete':
            this.deletePerson(data.person, data.index)
            break;
        
          default:
            break;
        }
      },
      async deletePerson(personId, index){
        const path = `people/${personId}`
        const url = this.$http.url(path)

        try {
          await this.$http.delete(url, this.authToken)
          this.people.splice(index, 1)
        } catch (err) {

        } finally {
        }
      },
      async setPeopleView(view) {
        if (view.id === this.view.id) {
          this.viewMenu = false;
          return
        }

        this.view = view;
        await this.$nextTick()
        this.viewMenu = false;

        localStorage.setItem('people-view', view.value)
      },
      async setPeopleOrder(order) {
        if (order.id === this.order.id) {
          this.orderMenu = false;
          return
        }

        this.order = order;
        await this.$nextTick()
        this.orderMenu = false;

        localStorage.setItem('people-order', order.value)
        this.refresh(false)
      },
      async setPeopleSort(sort) {
        if (sort.id === this.sort.id) {
          this.sortMenu = false;
          return
        }

        this.sort = sort;
        await this.$nextTick()
        this.sortMenu = false;

        localStorage.setItem('people-sort', sort.value)
        this.refresh(false)
      },
      goBack() {
        if(this.page === 1) return false
        const page = this.page - 1;
        this.getPeople(page)
      },
      goForward() {
        if(this.ended) return false
        const page = this.page + 1;
        this.getPeople(page)
      },
      selectAll() {
        const el = this.$refs['select-all']
        const state = el.checked

        this.selectedPeople = []
        if (state) this.selectedPeople = this.people.map(person => person.id)
      },
      refresh(isNew = true) {
        this.getPeople()
        if (isNew) this.getPeopleCount()
      },
      async getPeopleCount() {
        const path = 'total_people'
        const url = this.$http.url(path)

        try {
          const response = await this.$http.get(url, this.authToken)
          this.total = response
        } catch (error) {}

      },
      async getPeople(page = 1, size = 25) {
        const path = `people?page=${page}&size=${size}&order=${this.order.value}&sort=${this.sort.value}`
        const url = this.$http.url(path)
        this.loadingMore = true

        try {
          const response = await this.$http.get(url, this.authToken)

          if (response.length) {
            this.people = response
            this.page = page
          }

        if (response.length < size) this.ended = true
          else this.ended = false
        } catch (err) {

        } finally {
          this.loadingMore = false
        }
      }
    },
  }

</script>

<style>

</style>
