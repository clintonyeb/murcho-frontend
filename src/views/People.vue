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
                    style="min-width: 200px; top: 100%;">
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
                    style="min-width: 200px; top: 100%;">
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
                      style="min-width: 200px; right: 25%; top: 100%;">
                      <a v-for="view in PeopleViews" :key="view.id" class="cursor-pointer no-underline flex items-center justify-start px-4 py-3 border-b whitespace-no-wrap group hover:text-white hover:bg-blue-light"
                        @click="setPeopleView(view)">
                        <span v-html="view.icon" class="mr-2 group-hover:text-white"></span>
                        <span class="group-hover:text-white">{{view.text}}</span>
                      </a>
                    </div>
                  </div>
                </on-click-outside>

                <button class="bg-white text-grey-dark mr-4 h-8 rounded p-3 inline-flex items-center justify-between" @click="sideView = sideViewOptions.filters">
                  <span class="mr-2">Filter</span>
                  <span v-html="icons.filter"></span>
                </button>

                <button class="bg-blue text-white h-8 p-3 inline-flex items-center justify-between rounded-l" @click="createPerson">
                  <span v-html="icons.plus" class="mr-2 text-white"></span>
                  <span class="mr-2">Add Person</span>
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

                    <div v-show="moreMenu" class="z-10 mt-px text-sm text-center shadow-md text-grey-darker leading-normal rounded bg-white border absolute animated zoomIn flex flex-col overflow-hidden"
                      style="min-width: 200px; right: 0; top: 100%;">
                      <a v-for="more in peopleMores" :key="more.id" class="cursor-pointer no-underline flex items-center justify-start px-4 py-3 border-b whitespace-no-wrap group hover:text-white hover:bg-blue-light"
                        @click="setPeopleMore(more)">
                        <span v-html="more.icon" class="mr-2 group-hover:text-white"></span>
                        <span class="group-hover:text-white">{{more.text}}</span>
                      </a>
                    </div>
                  </div>
                </on-click-outside>
              </div>
            </div>
          </div>
        </div>

        <list-view v-if="view.value === 'list-view'" :people="people" :page="page" :pagesEnded="ended" @back="goBack"
          @forward="goForward" @action="handlePersonAction" @selected="selectedPeople = $event" :activePeople="selectedPeople"></list-view>
        <grid-view v-else-if="view.value === 'grid-view'" :page="page" :pagesEnded="ended" @back="goBack" @forward="goForward"
          :people="people" @action="handlePersonAction" @selected="selectedPeople = $event"></grid-view>

      </div>
    </div>
    <div class="w-1/5 h-screen max-w-xs">
      <template v-if="sideView === sideViewOptions.actions && selectedPeople.length">
        <p class="mx-auto p-4 px-8 w-full relative inline-flex items-center justify-center">
          <span class="mt-2" @click="$store.commit('CLEAR_ALERT')">
            <svg class="fill-current h-4 w-4 text-grey-darker" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </p>

        <div class="mt-6 py-1">
          <div class="w-full inline-flex justify-between justify-center">
            <p class="text-grey">
              Bulk Actions
            </p>
            <p class="">
              <span class="text-grey-darker mr-1">{{selectedPeople.length}}</span> <span class="text-grey-dark">{{pluralize('person',
                selectedPeople.length)}} selected.</span>
            </p>
          </div>

          <div class="mt-8 animated zoomIn">
            <div v-for="action in bulkActions" :key="action.id" class="cursor-pointer mb-2 p-3 bg-white text-grey-dark rounded hover:shadow hover:text-grey-darker hover:bg-blue-lighter select-none"
              @click="actionHandler(action.value)">
              <p class="inline-flex">
                <span v-html="action.icon" class="mr-2 group-hover:text-white"></span>
                <span>{{action.text}}</span>
              </p>
            </div>
          </div>
        </div>
      </template>

      <template v-else>
        <div class="mt-6">
          <filters></filters>
        </div>
      </template>

    </div>

    <transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
      <div class="bg-white p-6 fixed pin-t pin-r w-1/3 h-screen shadow-lg z-20" v-show="takingAction" style="animation-duration: 500ms;">
        <div class="w-full inline-flex items-center justify-between">
          <p class="inline-flex text-grey" v-if="activeAction === 'email'">
            <span>
              <svg version="1.1" class="w-5 h5 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                <path d="M510.576,264.536l-58.431-157.94c-2.122-5.739-6.353-10.307-11.913-12.863c-5.559-2.556-11.78-2.796-17.519-0.672L137.796,198.467c-5.739,2.123-10.307,6.354-12.864,11.912c-2.556,5.559-2.795,11.781-0.672,17.519l58.431,157.94c2.122,5.739,6.353,10.307,11.913,12.864c3.05,1.403,6.299,2.107,9.559,2.107c2.682,0,5.37-0.476,7.961-1.435l284.918-105.406h0.001C508.886,289.585,514.958,276.382,510.576,264.536z M407.052,123.279l-88.377,126.344l-149.327-38.405L407.052,123.279zM200.044,366.731l-50.683-137l117.382,30.192L200.044,366.731z M224.863,370.237l65.152-104.33l30.642,7.882c0.951,0.241,1.913,0.367,2.852,0.367c3.688,0,7.216-1.787,9.392-4.891l18.133-25.944l117.369,36.818L224.863,370.237zM364.814,223.638l69.463-99.324l50.703,137.019L364.814,223.638z" />
                <path d="M133.44,388.976c-2.194-5.933-8.786-8.961-14.715-6.768l-43.162,15.968c-5.933,2.196-8.962,8.784-6.768,14.716c1.71,4.623,6.086,7.482,10.743,7.482c1.319,0,2.663-0.23,3.973-0.715l43.16-15.968C132.606,401.498,135.635,394.909,133.44,388.976z" />
                <path d="M75.023,282.646c-2.196-5.933-8.785-8.96-14.716-6.768l-26.643,9.857c-5.933,2.196-8.962,8.783-6.768,14.716c1.71,4.622,6.087,7.482,10.743,7.482c1.319,0,2.663-0.23,3.973-0.715l26.643-9.857C74.188,295.168,77.218,288.579,75.023,282.646z" />
                <path d="M41.995,369.408c-2.196-5.933-8.785-8.962-14.716-6.768l-19.797,7.324c-5.933,2.196-8.962,8.784-6.768,14.716c1.71,4.622,6.086,7.482,10.743,7.482c1.319,0,2.663-0.23,3.973-0.715l19.797-7.324C41.161,381.929,44.19,375.341,41.995,369.408z" />
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
            <span>Editing Person..</span>
          </p>

          <svg class="fill-current h-6 w-6 text-blue-light" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
            @click="takingAction = false">
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </div>

        <div class="mt-16 pa-4">
          <div class="absolute flex items-center text-white text-sm font-bold px-4 py-3 w-full mb-4 animated tada" role="alert"
            v-if="shouldDisplayMessage" :class="alertClass" style="animation-delay: 1s;">
            <svg class="h-4 w-4 fill-current text-white mr-4" version="1.1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 483.537 483.537" style="enable-background:new 0 0 483.537 483.537;"
              xml:space="preserve" v-if="displayMessageType === MESSAGE_TYPES.error">
              <g>
                <path d="M479.963,425.047L269.051,29.854c-5.259-9.88-15.565-16.081-26.782-16.081h-0.03c-11.217,0-21.492,6.171-26.782,16.051L3.603,425.016c-5.046,9.485-4.773,20.854,0.699,29.974c5.502,9.15,15.413,14.774,26.083,14.774H453.12c10.701,0,20.58-5.594,26.083-14.774C484.705,445.84,484.979,434.471,479.963,425.047z M242.239,408.965c-16.781,0-30.399-13.619-30.399-30.399c0-16.78,13.619-30.399,30.399-30.399c16.75,0,30.399,13.619,30.399,30.399C272.638,395.346,259.02,408.965,242.239,408.965zM272.669,287.854c0,16.811-13.649,30.399-30.399,30.399c-16.781,0-30.399-13.589-30.399-30.399V166.256c0-16.781,13.619-30.399,30.399-30.399c16.75,0,30.399,13.619,30.399,30.399V287.854z" />
              </g>
            </svg>

            <svg class="fill-current h-4 w-4 text-white mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
              v-else-if="displayMessageType === MESSAGE_TYPES.warning">
              <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg>

            <svg class="fill-current text-white h-4 w-4 text-white mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
              v-else>
              <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>

            <p>{{displayMessage}}</p>

            <span class="absolute pin-t pin-b pin-r px-4 py-3" @click="shouldDisplayMessage = false">
              <svg class="fill-current h-4 w-4 text-white" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>

          </div>

          <email v-if="activeAction === 'email'" :people_ids="actionablePeople" @sent=" hideActionDrawer" />
          <sms v-if="activeAction === 'sms'" :people_ids="actionablePeople" @sent=" hideActionDrawer" />
          <edit-person v-if="activeAction === 'edit-person'" :person="editingPerson" @updated="updatePerson"></edit-person>
          <add-groups v-if="activeAction === 'add-groups' && actionablePeople.length" :people="actionablePeople"
            @groups-added="groupsCreated"></add-groups>
        </div>
      </div>
    </transition>

    <transition enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
      <div class="bg-white p-6 fixed shadow-lg z-20" style="top: 50%; left: 50%; transform: translate(-50%, -50%); animation-duration: 500ms;"
        v-if="modal" @keyup.esc.stop="closeModal">
        <!-- <div class="background-tint fixed w-full h-full bg-black"></div> -->

        <svg class="cursor-pointer fill-current h-5 w-5 text-blue-light float-right mr-2" role="button" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20" @click="closeModal">
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </svg>

        <create v-if="activeAction === 'create'" @close="closeModal" @created="personCreated"></create>
        <view-person v-if="activeAction === 'view'" :person="editingPerson" @close="closeModal"></view-person>
        <confirm-delete v-if="activeAction === 'delete'" :action="modalAction" :people_ids="actionablePeople" :cancel="modalCancel"></confirm-delete>
        <export-people v-if="activeAction === 'export'" :action="modalAction" :people_ids="actionablePeople" :cancel="modalCancel"
          @change="modalData = $event" :loading="modalLoading"></export-people>
        <download-export v-if="activeAction === 'download-export'" :action="modalAction" :export_file_url="export_file_url"
          :cancel="modalCancel" :loading="modalLoading" />
      </div>
    </transition>
  </div>
</template>

<script>
  import ListView from '@/components/people/ListView'
  import GridView from '@/components/people/GridView'
  import Email from '@/components/people/Email'
  import Sms from '@/components/people/SMS'
  import EditPerson from '@/components/people/Edit'
  import AddGroups from '@/components/people/AddGroups'
  import Create from '@/components/people/Create'
  import ViewPerson from '@/components/people/View'
  import ConfirmDelete from '@/components/people/ConfirmDelete'
  import ExportPeople from '@/components/people/ExportPeople'
  import DownloadExport from '@/components/people/DownloadExport'
   import Filters from '@/components/people/Filters'

  import {
    listViewIcon,
    gridViewIcon,
    smallListViewIcon,
    filterIcon,
    userPlusIcon,
    trashIcon,
    editIcon,
    groupIcon,
    removeGroupIcon,
    mailIcon,
    smsIcon,
    fileIcon,
    importIcon
  } from '@/utils/icons'
  import {
    MESSAGE_TYPES
  } from '@/utils'

  const SIDE_VIEW_OPTIONS = Object.freeze({
    actions: 0,
    filters: 1,
  })

  export default {
    name: 'People',
    data() {
      return {
        sideViewOptions: SIDE_VIEW_OPTIONS,
        sideView: SIDE_VIEW_OPTIONS.actions,
        modal: false,
        displayMessage: '',
        displayMessageType: MESSAGE_TYPES.info,
        shouldDisplayMessage: false,
        MESSAGE_TYPES: MESSAGE_TYPES,
        activeAction: null,
        takingAction: false,
        selectedPeople: [],
        people: [],
        total: 0,
        loadingMore: false,
        page: 1,
        ended: false,
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
          plus: userPlusIcon,
          sms: smsIcon,
          edit: editIcon
        },
        peopleMores: [{
          text: 'Import People',
          value: 'import',
          icon: importIcon
        }],
        moreMenu: false,
        bulkActions: [{
            id: 1,
            text: 'Email People',
            value: 'email',
            icon: mailIcon
          },
          {
            id: 2,
            text: 'SMS People',
            value: 'sms',
            icon: smsIcon
          },
          {
            id: 3,
            text: 'Assign Groups',
            value: 'add-groups',
            icon: groupIcon
          },
          {
            id: 4,
            text: 'Export People',
            value: 'export',
            icon: fileIcon
          },
          {
            id: 8,
            text: 'Delete People',
            value: 'delete',
            icon: trashIcon
          }
        ],
        editingPerson: {},
        actionablePeople: [],
        modalAction: null,
        modalCancel: null,
        modalData: null,
        modalLoading: false,
        export_file_url: null,
      }
    },
    components: {
      ListView,
      GridView,
      Email,
      Sms,
      EditPerson,
      AddGroups,
      Create,
      ViewPerson,
      ConfirmDelete,
      ExportPeople,
      DownloadExport,
      Filters
    },
    created() {
      this.setUpPeopleUI()
      this.readyCallbacks([this.refresh])
      this.setPageTitle('People')
    },
    computed: {
      alertClass() {
        switch (this.displayMessageType) {
          case MESSAGE_TYPES.warning:
            return ['bg-yellow-dark']
          case MESSAGE_TYPES.error:
            return ['bg-red-light']
          default:
            return ['bg-blue-light']
        }
      }
    },
    methods: {
      personCreated(person) {
        this.people.unshift(person)
        this.closeModal()
      },
      closeModal() {
        this.modal = false
        this.activeAction = null
      },
      createPerson() {
        this.activeAction = 'create'
        this.modal = true
      },
      hideActionDrawer() {
        this.editingPerson = null
        this.activeAction = null
        this.takingAction = false
      },
      groupsCreated() {
        this.hideActionDrawer()
        this.refresh()
      },
      updatePerson(person) {
        if (person) {
          const index = this.people.findIndex(p => person.id === p.id)
          this.people.splice(index, 1, person)
        }

        this.hideActionDrawer()
      },
      actionHandler(value) {
        this.actionablePeople = this.selectedPeople
        this.activeAction = value

        if (value === 'export') {
          this.modalAction = () => this.exportPeople(this.actionablePeople)
          this.modalCancel = () => this.closeModal()
          this.modal = true
        } else if (value === 'delete') {
          this.modalAction = () => this.deletePeople(this.actionablePeople)
          this.modalCancel = () => this.closeModal()
          this.modal = true
        } else {
          this.takingAction = true
        }
      },
      async exportPeople(peopleIds) {
        if (!this.modalData) return false

        const path = 'people_bulk_export'
        const url = this.$http.url(path)

        try {
          const response = await this.$http.post(url, {
            people_ids: peopleIds,
            export_format: this.modalData
          }, this.authToken)
          this.selectedPeople = []
          this.actionablePeople = []
          this.closeModal()

          this.export_file_url = response.file_url
          this.activeAction = 'download-export'
          this.modalAction = () => {}
          this.modalCancel = () => this.closeModal()
          this.modal = true
        } catch (err) {

        } finally {}
      },
      setUpPeopleUI() {
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
      },
      handlePersonAction(data) {
        // console.log(data.action)
        switch (data.action) {
          case 'delete':
            //this.deletePerson(data.person.id, data.index)
            // show modal for confirmation
            this.activeAction = data.action
            this.actionablePeople = [data.person.id]
            this.modalAction = () => this.deletePerson(data.person.id, data.index)
            this.modalCancel = () => this.closeModal()
            this.modal = true
            break
          case 'edit':
            this.editingPerson = data.person
            this.activeAction = 'edit-person'
            this.takingAction = true
            break
          case 'add-groups':
            this.actionablePeople = [data.person.id]

            this.activeAction = 'add-groups'
            this.takingAction = true
            break
          case 'email':
          case 'sms':
            this.actionablePeople = [data.person.id]

            this.activeAction = data.action
            this.takingAction = true
            break
          case 'removed-group':
            this.people.splice(data.personIndex, 1, data.person)
            break
          case 'view':
            this.editingPerson = data.person
            this.activeAction = 'view'
            this.modal = true
            break
          default:
            throw new Error('Invalid action provided.')
            break
        }
      },
      async deletePerson(personId, index) {
        const path = `people/${personId}`
        const url = this.$http.url(path)

        try {
          await this.$http.delete(url, this.authToken)
          this.people.splice(index, 1)
          this.total--
          this.closeModal()
        } catch (err) {

        } finally {}
      },
      async deletePeople(peopleIds) {
        const path = 'people_bulk_delete'
        const url = this.$http.url(path)

        try {
          await this.$http.post(url, {
            people_ids: peopleIds
          }, this.authToken)

          this.people = this.people.filter(p => peopleIds.indexOf(p.id) === -1)
          this.total = this.total - peopleIds.length
          this.selectedPeople = []
          this.actionablePeople = []
          this.closeModal()
        } catch (err) {

        } finally {}
      },
      async setPeopleView(view) {
        if (view.id === this.view.id) {
          this.viewMenu = false
          return
        }

        this.view = view
        await this.$nextTick()
        this.viewMenu = false

        localStorage.setItem('people-view', view.value)
      },
      async setPeopleOrder(order) {
        if (order.id === this.order.id) {
          this.orderMenu = false
          return
        }

        this.order = order
        await this.$nextTick()
        this.orderMenu = false

        localStorage.setItem('people-order', order.value)
        this.refresh(false)
      },
      async setPeopleSort(sort) {
        if (sort.id === this.sort.id) {
          this.sortMenu = false
          return
        }

        this.sort = sort
        await this.$nextTick()
        this.sortMenu = false

        localStorage.setItem('people-sort', sort.value)
        this.refresh(false)
      },
      goBack() {
        if (this.page === 1) return false
        const page = this.page - 1
        this.getPeople(page)
      },
      goForward() {
        if (this.ended) return false
        const page = this.page + 1
        this.getPeople(page)
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
    watch: {
      selectedPeople(val) {
        // if(!val.length) return
        if(this.sideView === this.sideViewOptions.filters) this.sideView = this.sideViewOptions.actions 
      }
    }
  }

</script>
