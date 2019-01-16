<template>
  <div class="flex lg:h-screen w-screen font-sans" id="login">

    <div class="w-screen sm:w-screen md:w-2/3 lg:w-1/3 lg:h-screen bg-grey-lightest relative animated slideInRight is-lg"
      id="form-section" v-if="currentPage === 'login'">
      <login @forgotten="currentPage = 'forgotten'" />
    </div>

    <div class="hidden w-full md:flex md:w-1/3 lg:w-2/3 lg:h-screen bg-grey bg-center bg-no-repeat bg-cover z-10" id="login-cover"
      v-bind:style="style">
      <div class="bg-black w-full h-full opacity-50 flex items-end">
        <div class="text-white p-24">
          <button class="bg-blue-dark h-16 w-16 rounded-full shadow-md" @click="nextCover">

            <svg class="spinner ml-2 h-6 w-6 text-white fill-current font-black" version="1.1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 26.349 26.35" style="enable-background:new 0 0 26.349 26.35;"
              xml:space="preserve" v-if="loadingNextImage">
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

            <svg class="h-6 w-6 fill-current text-white font-black" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"
              style="enable-background:new 0 0 512 512;" xml:space="preserve" v-else>
              <path d="M481.508,210.336L68.414,38.926c-17.403-7.222-37.064-4.045-51.309,8.287C2.86,59.547-3.098,78.551,1.558,96.808L38.327,241h180.026c8.284,0,15.001,6.716,15.001,15.001c0,8.284-6.716,15.001-15.001,15.001H38.327L1.558,415.193c-4.656,18.258,1.301,37.262,15.547,49.595c14.274,12.357,33.937,15.495,51.31,8.287l413.094-171.409C500.317,293.862,512,276.364,512,256.001C512,235.638,500.317,218.139,481.508,210.336z" />
            </svg>

          </button>

          <h2 class="my-8 text-5xl font-black tracking-wide">{{cover.title}}</h2>
          <h4 class="my-8 text-lg font-light">{{cover.description}}</h4>

          <span class="solid-line" v-for="cover in coverImages" :key="cover.index" :class="{'is-active': cover.index === currentCoverIndex}"></span>
        </div>
      </div>
    </div>

    <div class="w-screen sm:w-screen md:w-2/3 lg:w-1/3 lg:h-screen bg-grey-lightest relative animated slideInLeft is-lg"
      id="form-section-forgotten" v-if="currentPage === 'forgotten'">
      <forgotten @login="currentPage = 'login'" />
    </div>

  </div>

</template>

<script>
  export default {
    name: 'LoginPage',
    data() {
      return {
        coverImages: [{
            index: 0,
            title: 'Create & Manage People',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia pariatur iste eaque numquam dolore rem commodi quod repudiandae obcaecati',
            image: 'https://s3.ap-south-1.amazonaws.com/murch-assets/cover_people.jpeg'
          },
          {
            index: 1,
            title: 'Create & Manage Groups',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia pariatur iste eaque numquam dolore rem commodi quod repudiandae obcaecati',
            image: 'https://s3.ap-south-1.amazonaws.com/murch-assets/cover_groups.jpeg'
          },
          {
            index: 2,
            title: 'Schedule Events and notifications',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia pariatur iste eaque numquam dolore rem commodi quod repudiandae obcaecati',
            image: 'https://s3.ap-south-1.amazonaws.com/murch-assets/cover_events.jpeg'
          }
        ],
        currentCoverIndex: 0,
        loadingNextImage: false,
        currentPage: 'login'
      }
    },
    computed: {
      cover() {
        return this.coverImages[this.currentCoverIndex]
      },
      style() {
        return {
          backgroundImage: `url(${this.cover.image})`
        }
      }
    },
    components: {
      'login': () => import('@/components/login/Login'),
      'forgotten': () => import('@/components/login/Forgotten')
    },
    methods: {
      nextCover() {
        if (this.loadingNextImage) return false
        const nextIndex = (this.currentCoverIndex + 1) >= (this.coverImages.length) ? 0 : (this.currentCoverIndex +
          1)

        this.loadingNextImage = true

        this.downloadImage(this.coverImages[nextIndex].image, err => {
          this.currentCoverIndex = nextIndex
          this.loadingNextImage = false
        })
      },
      downloadImage(src, cb) {
        const image = new Image()
        image.onload = function () {
          cb(null)
        }

        image.src = src
      }
    },
    metaInfo: {
      title: 'Login',
      meta: [{
        name: 'description',
        content: 'Login Page for the Murcho Platform. Login to access our platform'
      }]
    }
  }

</script>
