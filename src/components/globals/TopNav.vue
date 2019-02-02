<template>
  <nav class="flex items-center justify-between flex-wrap p-3 shadow-md lg:shadow font-sans bg-white">
    <div class="flex items-center flex-no-shrink mr-24 h-8">
      <img src="https://s3.ap-south-1.amazonaws.com/murch-assets/murcho_color.png" alt="Murch Logo" class="h-8">
    </div>
    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-blue-light border-blue-light hover:text-blue hover:border-blue"
        @click="hideNavBar = !hideNavBar">
        <transition name="custom-classes-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
           <svg class="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" v-if="hideNavBar">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg class="fill-current h-4 w-4" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" v-else style="transform: scale(1.5);">
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"></path>
          </svg>
         
        </transition>
      </button>
    </div>
    <div class="nav-items-container w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:h-8 bg-white z-10 shadow lg:shadow-none animated zoomIn is-sm pt-4 lg:pt-0 mt-2 lg:mt-0"
      :class="hideNavBar ? 'hidden' : '' ">
      <div class="text-sm lg:flex-grow nav-items">
        <router-link :to="{name: 'home'}" class="flex lg:inline-flex items-center justify-center lg:mt-0 mr-10 no-underline font-bold py-2 lg:py-0 relative">
          <span v-html="icons.home" class="mr-1"></span>
          <span>My Home</span>
        </router-link>
        <router-link :to="{name: 'people'}" class="flex lg:inline-flex items-center justify-center lg:mt-0 mr-10 no-underline font-bold py-2 lg:py-0 relative">
          <span v-html="icons.people" class="mr-1"></span>
          <span>My People</span>
        </router-link>
        <router-link :to="{name: 'groups'}" class="flex lg:inline-flex items-center justify-center lg:mt-0 mr-10 no-underline font-bold py-2 lg:py-0 relative">
          <span v-html="icons.group" class="mr-1"></span>
          <span>My Groups</span>
        </router-link>
        <router-link :to="{name: 'events'}" class="flex lg:inline-flex items-center justify-center lg:mt-0 mr-10 no-underline font-bold py-2 lg:py-0 relative">
          <span v-html="icons.event" class="mr-1"></span>
          <span>My Events</span>
        </router-link>
      </div>
      <div class="relative lg:inline-flex flex items-center justify-center h-12 mt-4 lg:mt-0">

        <div class="lg:mr-12 w-full lg:w-64 inline-flex items-center justify-center relative p-1">
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
            type="text" placeholder="Type in to Search..">
        </div>

        <button class="p-1 h-12 lg:w-12 lg:ml-6">
          <svg class="h-8 w-8 fill-current text-red font-bold bg-red-lightest rounded-full flex items-center justify-center p-2"
            version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
            <g>
              <g>
                <path d="M467.819,431.851l-36.651-61.056c-16.896-28.181-25.835-60.437-25.835-93.312V224c0-82.325-67.008-149.333-149.333-149.333S106.667,141.675,106.667,224v53.483c0,32.875-8.939,65.131-25.835,93.312l-36.651,61.056c-1.984,3.285-2.027,7.403-0.149,10.731c1.899,3.349,5.461,5.419,9.301,5.419h405.333c3.84,0,7.403-2.069,9.301-5.419C469.845,439.253,469.803,435.136,467.819,431.851z M72.171,426.667l26.944-44.907C118.016,350.272,128,314.219,128,277.483V224c0-70.592,57.408-128,128-128s128,57.408,128,128v53.483c0,36.736,9.984,72.789,28.864,104.277l26.965,44.907H72.171z"
                  stroke-width="10" />
              </g>
            </g>
            <g>
              <g>
                <path d="M256,0c-23.531,0-42.667,19.136-42.667,42.667v42.667C213.333,91.221,218.112,96,224,96s10.667-4.779,10.667-10.667V42.667c0-11.776,9.557-21.333,21.333-21.333s21.333,9.557,21.333,21.333v42.667C277.333,91.221,282.112,96,288,96s10.667-4.779,10.667-10.667V42.667C298.667,19.136,279.531,0,256,0z"
                  stroke-width="10" />
              </g>
            </g>
            <g>
              <g>
                <path d="M302.165,431.936c-3.008-5.077-9.515-6.741-14.613-3.819c-5.099,2.987-6.805,9.536-3.819,14.613c2.773,4.715,4.288,10.368,4.288,15.936c0,17.643-14.357,32-32,32c-17.643,0-32-14.357-32-32c0-5.568,1.515-11.221,4.288-15.936c2.965-5.099,1.259-11.627-3.819-14.613c-5.141-2.923-11.627-1.259-14.613,3.819c-4.715,8.064-7.211,17.301-7.211,26.731C202.667,488.085,226.581,512,256,512s53.333-23.915,53.376-53.333C309.376,449.237,306.88,440,302.165,431.936z"
                  stroke-width="10" />
              </g>
            </g>
          </svg>
        </button>

        <on-click-outside :do="handleClickOutside" :active="userMenu">
          <div class="ml-4 relative mx-auto">
            <div class="inline-flex items-center justify-center cursor-pointer" @click="userMenu = !userMenu">
              <img :src="adminIcon" class="rounded-full w-8 h-8 flex items-center justify-center border-2 border-blue-light p-1">

              <svg class="h-2 w-2 fill-current text-grey-dark ml-2" version="1.1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="292.362px" height="292.362px" viewBox="0 0 292.362 292.362"
                style="enable-background:new 0 0 292.362 292.362;" xml:space="preserve">
                <g>
                  <path d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z" />
                </g>
              </svg>
            </div>

            <div v-show="userMenu" class="mt-px text-sm text-center shadow-md text-grey-darker leading-normal rounded bg-white absolute pin-r animated zoomIn flex flex-col overflow-hidden z-20"
              style="min-width: 200px;">
              <a v-for="menu in userMenuItems" :key="menu.id" class="text-xs cursor-pointer no-underline flex items-center justify-start px-4 py-2 whitespace-no-wrap group hover:text-white hover:bg-blue-light"
                @click="menu.handler">
                <span v-html="menu.icon" class="mr-2 group-hover:text-white"></span>
                <span class="group-hover:text-white">{{menu.text}}</span>
              </a>
            </div>

          </div>
        </on-click-outside>

      </div>
    </div>
  </nav>
</template>

<script>
  import {
    logoutIcon,
    eventIcon,
    groupIcon,
    peopleIcon,
    servicesIcon,
    homeIcon,
    helpIcon,
    settingsIcon
  } from '@/utils/icons'

  import defaultAdminIcon from '@/assets/img/man.svg'

  export default {
    name: 'TopBar',
    data() {
      return {
        hideNavBar: true,
        adminIcon: defaultAdminIcon,
        userMenu: false,
        userMenuItems: [{
            id: 3,
            text: 'Settings',
            icon: settingsIcon,
            handler: () => {
              this.$router.push({name: 'user-settings'})
            }
          },
          {
            id: 2,
            text: 'Help',
            icon: helpIcon,
            handler: () => {
              this.$router.push({name: 'user-help'})
            }
          },
          {
            id: 1,
            text: 'Logout',
            icon: logoutIcon,
            handler: this.logout
          }
        ],
        icons: {
          event: eventIcon,
          group: groupIcon,
          people: peopleIcon,
          service: servicesIcon,
          home: homeIcon
        }
      }
    },
    methods: {
      handleClickOutside() {
        if (this.userMenu) {
          this.userMenu = false
        }
      },
      logout() {
        this.$store.commit('SET_TOKEN', '')

        sessionStorage.removeItem('auth_token')
        sessionStorage.removeItem('email')

        this.$store.commit('SET_LOGIN_DATA', {
          message: 'You have successfully logged out.',
          type: 'info'
        })

        this.$router.replace({
          name: 'login'
        })
      }
    }
  }

</script>
