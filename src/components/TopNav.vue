<template>
  <nav class="flex items-center justify-between flex-wrap p-4 shadow h-16 font-sans">
    <div class="flex items-center flex-no-shrink mr-32 h-8">
      <img src="https://s3.ap-south-1.amazonaws.com/murch-assets/murch.png" alt="Murch Logo" class="h-6">
    </div>
    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto h-8">
      <div class="text-sm lg:flex-grow nav-items">
        <router-link :to="{name: 'overview'}" class="block mt-4 lg:inline-block lg:mt-0 mr-10 no-underline font-bold py-6">
          Dashboard
        </router-link>
        <router-link :to="{name: 'people'}" class="block mt-4 lg:inline-block lg:mt-0 mr-10 no-underline font-bold py-6">
          My People
        </router-link>
        <router-link :to="{name: 'groups'}" class="block mt-4 lg:inline-block lg:mt-0 mr-10 no-underline font-bold py-6">
          My Groups
        </router-link>
        <router-link :to="{name: 'events'}" class="block mt-4 lg:inline-block lg:mt-0 mr-10 no-underline font-bold py-6">
          My Events
        </router-link>
        <router-link :to="{name: 'services'}" class="block mt-4 lg:inline-block lg:mt-0 mr-10 no-underline font-bold py-6">
          All Services
        </router-link>
      </div>
      <div class="block">
        <div class="inline-block relative inline-flex items-center justify-center h-12">

          <div class="mr-12 w-64 inline-flex items-center justify-center relative p-1">
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

          <button class="p-1 h-12 w-12 ml-6">
            <svg class="h-8 w-8 fill-current text-red font-bold bg-red-lightest rounded-full flex items-center justify-center p-2" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
              <g>
                <g>
                  <path d="M467.819,431.851l-36.651-61.056c-16.896-28.181-25.835-60.437-25.835-93.312V224c0-82.325-67.008-149.333-149.333-149.333S106.667,141.675,106.667,224v53.483c0,32.875-8.939,65.131-25.835,93.312l-36.651,61.056c-1.984,3.285-2.027,7.403-0.149,10.731c1.899,3.349,5.461,5.419,9.301,5.419h405.333c3.84,0,7.403-2.069,9.301-5.419C469.845,439.253,469.803,435.136,467.819,431.851z M72.171,426.667l26.944-44.907C118.016,350.272,128,314.219,128,277.483V224c0-70.592,57.408-128,128-128s128,57.408,128,128v53.483c0,36.736,9.984,72.789,28.864,104.277l26.965,44.907H72.171z" stroke-width="10" />
                </g>
              </g>
              <g>
                <g>
                  <path d="M256,0c-23.531,0-42.667,19.136-42.667,42.667v42.667C213.333,91.221,218.112,96,224,96s10.667-4.779,10.667-10.667V42.667c0-11.776,9.557-21.333,21.333-21.333s21.333,9.557,21.333,21.333v42.667C277.333,91.221,282.112,96,288,96s10.667-4.779,10.667-10.667V42.667C298.667,19.136,279.531,0,256,0z" stroke-width="10" />
                </g>
              </g>
              <g>
                <g>
                  <path d="M302.165,431.936c-3.008-5.077-9.515-6.741-14.613-3.819c-5.099,2.987-6.805,9.536-3.819,14.613c2.773,4.715,4.288,10.368,4.288,15.936c0,17.643-14.357,32-32,32c-17.643,0-32-14.357-32-32c0-5.568,1.515-11.221,4.288-15.936c2.965-5.099,1.259-11.627-3.819-14.613c-5.141-2.923-11.627-1.259-14.613,3.819c-4.715,8.064-7.211,17.301-7.211,26.731C202.667,488.085,226.581,512,256,512s53.333-23.915,53.376-53.333C309.376,449.237,306.88,440,302.165,431.936z" stroke-width="10" />
                </g>
              </g>
            </svg>
          </button>

          <on-click-outside :do="handleClickOutside">
            <div class="ml-4 relative mx-auto">
              <div class="inline-flex items-center justify-center cursor-pointer" @click="userMenu = !userMenu">
                <img src="../assets/img/man.svg" class="rounded-full w-8 h-8 flex items-center justify-center border-2 border-blue-light p-1">

                <svg class="h-2 w-2 fill-current text-grey-dark ml-2" version="1.1" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="292.362px" height="292.362px"
                  viewBox="0 0 292.362 292.362" style="enable-background:new 0 0 292.362 292.362;" xml:space="preserve">
                  <g>
                    <path d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z" />
                  </g>
                </svg>
              </div>

              <div v-show="userMenu" class="mt-px text-sm text-center shadow-md text-grey-darker leading-normal rounded bg-white border absolute pin-r animated bounceIn flex flex-col overflow-hidden"
                style="min-width: 200px;">
                <a v-for="menu in userMenuItems" :key="menu.id" class="cursor-pointer no-underline flex items-center justify-center px-4 py-3 border-b whitespace-no-wrap group hover:text-white hover:bg-blue-light" @click="menu.handler">
                  <span v-html="menu.icon" class="mr-2 group-hover:text-white"></span>
                  <span class="group-hover:text-white">{{menu.text}}</span>
                </a>
              </div>

            </div>
          </on-click-outside>

        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import OnClickOutside from '@/components/OnClickOutside'

  const logoutIcon =
    `
  <svg class="h-4 w-4 fill-current text-red relative group-hover:text-white" version="1.1 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 511.989 511.989" style="enable-background:new 0 0 511.989 511.989; top: 3px" xml:space="preserve">
    <g>
			<path d="M110.933,221.782c-4.71,0-8.533,3.823-8.533,8.533v51.2c0,4.71,3.823,8.533,8.533,8.533s8.533-3.823,8.533-8.533v-51.2
				C119.467,225.605,115.644,221.782,110.933,221.782z"/>
			<path d="M111.855,2.304L31.172,34.586C8.448,43,0,54.418,0,76.715v358.477c0,22.298,8.448,33.715,30.959,42.061l81.058,32.427
				c4.011,1.519,8.038,2.287,11.981,2.287c17.152,0,29.602-14.336,29.602-34.091V34.049C153.6,9.78,134.246-6.126,111.855,2.304z
				 M136.533,477.876c0,10.18-5.035,17.024-12.535,17.024c-1.869,0-3.883-0.401-5.803-1.118L37.103,461.33
				c-16.102-5.965-20.036-11.102-20.036-26.138V76.715c0-15.036,3.934-20.164,20.241-26.206l80.725-32.29
				c2.082-0.785,4.087-1.186,5.956-1.186c7.501,0,12.544,6.835,12.544,17.016V477.876z"/>
			<path d="M178.133,51.115h120.533c14.114,0,25.6,11.486,25.6,25.6v128c0,4.71,3.814,8.533,8.533,8.533
				c4.719,0,8.533-3.823,8.533-8.533v-128c0-23.526-19.14-42.667-42.667-42.667H178.133c-4.71,0-8.533,3.823-8.533,8.533
				S173.423,51.115,178.133,51.115z"/>
			<path d="M332.8,298.582c-4.719,0-8.533,3.823-8.533,8.533v128c0,14.114-11.486,25.6-25.6,25.6H179.2
				c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533h119.467c23.526,0,42.667-19.14,42.667-42.667v-128
				C341.333,302.405,337.519,298.582,332.8,298.582z"/>
			<path d="M511.343,252.655c-0.435-1.05-1.058-1.988-1.852-2.782l-85.325-85.333c-3.337-3.336-8.73-3.336-12.066,0
				c-3.337,3.337-3.337,8.73,0,12.066l70.767,70.775H196.267c-4.71,0-8.533,3.823-8.533,8.533c0,4.71,3.823,8.533,8.533,8.533
				h286.601L412.1,335.215c-3.337,3.337-3.337,8.73,0,12.066c1.664,1.664,3.849,2.5,6.033,2.5c2.185,0,4.369-0.836,6.033-2.5
				l85.325-85.325c0.794-0.794,1.417-1.732,1.852-2.782C512.205,257.093,512.205,254.738,511.343,252.655z"/>
    </g>
    </svg>
  `

  export default {
    name: 'TopBar',
    data() {
      return {
        userMenu: false,
        userMenuItems: [{
          id: 1,
          text: 'Logout',
          icon: logoutIcon,
          handler: this.logout
        }, ]
      }
    },
    components: {
      OnClickOutside
    },
    methods: {
      handleClickOutside() {
        if (this.userMenu) {
          this.userMenu = false;
        }
      },
      logout() {
        this.$store.commit('SET_TOKEN', '')

        sessionStorage.removeItem('auth_token')
        sessionStorage.removeItem('email')

        this.$store.commit('SET_LOGIN_DATA', {
          message: 'You have successfully logged out.',
          type: 'info',
        })

        this.$router.replace({
          name: 'login'
        })
      }
    }
  }

</script>

<style>

</style>
