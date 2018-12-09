<template>
  <div class="w-full container mx-auto md:p-10 sm:p-8">
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
            type="text" placeholder="Search and Add Groups.." @input="searchGroups" v-model="search">
        </div>

        <div v-show="searchedGroups.length" class="mt-px text-sm text-center shadow-md text-grey-darker leading-normal rounded bg-white border absolute pin-l animated zoomIn flex flex-col overflow-hidden w-full max-w-sm z-10">
          <a v-for="group in searchedGroups" :key="group.id" class="cursor-pointer no-underline flex items-center px-4 py-3 border-b whitespace-no-wrap group hover:text-white hover:bg-blue-light"
            @click="searchedItemClicked(group)">
            <span class="group-hover:text-white">{{group.name}}</span>
          </a>
        </div>

      </div>
    </on-click-outside>

    <div class="mt-16" style="height: 40vh; overflow-y: auto;">
      <p class="text-grey-dark">
        Selected Groups:
      </p>
      <div v-for="(group, i) in selectedGroups" :key="group.id" class="inline-flex items-center justify-between w-64 shadow hover:shadow-md mx-1 my-3 p-2 border-l-4 rounded-r">
        <p class="truncate cursor-pointer">
          {{group.name}}
        </p>
        <span class="hover:bg-grey rounded" @click="selectedGroups.splice(i, 1)">
          <svg class="fill-current h-4 w-4 text-grey-dark" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </div>
    </div>

    <div class="mt-8 mb-4 inline-flex justify-start w-full" v-if="selectedGroups.length">
      <div class="w-full inline-flex justify-between items-center">
        <button class="inline-flex flex-auto items-center justify-center h-10 bg-blue rounded-sm text-white shadow-md"
          @click="saveChanges">
          <svg version="1.1" class="h-6 w-6 fill-current mr-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
            <path d="M506.955,1.314c-3.119-1.78-6.955-1.75-10.045,0.078L313.656,109.756c-4.754,2.811-6.329,8.943-3.518,13.697c2.81,4.753,8.942,6.328,13.697,3.518l131.482-77.749L210.411,303.335L88.603,266.069l158.965-94c4.754-2.812,6.329-8.944,3.518-13.698c-2.81-4.753-8.943-6.33-13.697-3.518L58.91,260.392c-3.41,2.017-5.309,5.856-4.84,9.791s3.216,7.221,7.004,8.38l145.469,44.504L270.72,439.88c0.067,0.121,0.136,0.223,0.207,0.314c1.071,1.786,2.676,3.245,4.678,4.087c1.253,0.527,2.57,0.784,3.878,0.784c2.563,0,5.086-0.986,6.991-2.849l73.794-72.12l138.806,42.466c0.96,0.293,1.945,0.438,2.925,0.438c2.116,0,4.206-0.672,5.948-1.961C510.496,409.153,512,406.17,512,403V10C512,6.409,510.074,3.093,506.955,1.314z M271.265,329.23c-1.158,1.673-1.779,3.659-1.779,5.694v61.171l-43.823-79.765l193.921-201.21L271.265,329.23z M289.486,411.309v-62.867l48.99,14.988L289.486,411.309z M492,389.483l-196.499-60.116L492,45.704V389.483z" />
            <path d="M164.423,347.577c-3.906-3.905-10.236-3.905-14.143,0l-93.352,93.352c-3.905,3.905-3.905,10.237,0,14.143C58.882,457.024,61.441,458,64,458s5.118-0.976,7.071-2.929l93.352-93.352C168.328,357.815,168.328,351.483,164.423,347.577z" />
            <path d="M40.071,471.928c-3.906-3.903-10.236-3.903-14.142,0.001l-23,23c-3.905,3.905-3.905,10.237,0,14.143C4.882,511.024,7.441,512,10,512s5.118-0.977,7.071-2.929l23-23C43.976,482.166,43.976,475.834,40.071,471.928z" />
            <path d="M142.649,494.34c-1.859-1.86-4.439-2.93-7.069-2.93c-2.641,0-5.21,1.07-7.07,2.93c-1.86,1.86-2.93,4.43-2.93,7.07c0,2.63,1.069,5.21,2.93,7.07c1.86,1.86,4.44,2.93,7.07,2.93s5.21-1.07,7.069-2.93c1.86-1.86,2.931-4.44,2.931-7.07C145.58,498.77,144.51,496.2,142.649,494.34z" />
            <path d="M217.051,419.935c-3.903-3.905-10.233-3.905-14.142,0l-49.446,49.445c-3.905,3.905-3.905,10.237,0,14.142c1.953,1.953,4.512,2.929,7.071,2.929s5.118-0.977,7.071-2.929l49.446-49.445C220.956,430.172,220.956,423.84,217.051,419.935z" />
            <path d="M387.704,416.139c-3.906-3.904-10.236-3.904-14.142,0l-49.58,49.58c-3.905,3.905-3.905,10.237,0,14.143c1.953,1.952,4.512,2.929,7.071,2.929s5.118-0.977,7.071-2.929l49.58-49.58C391.609,426.377,391.609,420.045,387.704,416.139z" />
            <path d="M283.5,136.31c-1.86-1.86-4.44-2.93-7.07-2.93s-5.21,1.07-7.07,2.93c-1.859,1.86-2.93,4.44-2.93,7.08c0,2.63,1.07,5.2,2.93,7.06c1.86,1.87,4.44,2.93,7.07,2.93s5.21-1.06,7.07-2.93c1.859-1.86,2.93-4.43,2.93-7.06C286.43,140.75,285.36,138.17,283.5,136.31z" />
          </svg>
          <span class="font-bold">SAVE CHANGES</span>
          <svg class="spinner ml-2 h-6 w-6 text-grey-light fill-current animated fadeIn" version="1.1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 26.349 26.35" style="enable-background:new 0 0 26.349 26.35;"
            xml:space="preserve" v-if="loadingForm">
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

        <a class="flex-grow text-right text-grey hover:text-grey-dark hover:underline cursor-pointer">
          Want More Options?
        </a>

      </div>
    </div>

  </div>
</template>

<script>
import {
  debounce
} from 'debounce'

export default {
  props: ['people'],
  data () {
    return {
      searching: false,
      searchedGroups: [],
      search: '',
      selectedGroups: [],
      loadingForm: false
    }
  },
  methods: {
    async saveChanges () {
      if (!this.selectedGroups.length) return false
      this.loadingForm = true

      const path = 'add_people_to_groups'
      const url = this.$http.url(path)
      this.searching = true

      try {
        const response = await this.$http.post(url, {
          people: this.people,
          groups: this.selectedGroups.map(g => g.id)
        }, this.authToken)
        this.$emit('groups-added')
      } catch (error) {
        console.log(error)
      } finally {
        this.loadingForm = false
      }
    },
    searchedItemClicked (group) {
      this.searchedGroups = []
      this.search = ''
      this.searching = false

      this.selectedGroups.unshift(group)
    },
    handleSearchOutside () {
      this.searchedGroups = []
      this.search = ''
      this.searching = false
    },
    searchGroups: debounce(function (e) {
      this.doGroupsSearch(e.target.value)
    }, 200),
    async doGroupsSearch (name) {
      if (!name) {
        this.searching = false
        return
      }

      const search = name.toLowerCase()
      const path = `search_groups/${search}`
      const url = this.$http.url(path)
      this.searching = true

      try {
        const response = await this.$http.get(url, this.authToken)
        this.searchedGroups = response
      } catch (error) {
        console.log(error)
      } finally {
        this.searchings = false
      }
    }
  }
}

</script>
