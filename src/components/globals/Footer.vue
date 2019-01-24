<template>
  <footer class="w-full font-sans pt-4 bg-blue-lightest-more" id="footer">
    <div class="w-full flex flex-wrap bg-grey-darker text-white p-4">
      <div class="w-full lg:w-1/2 flex flex-wrap items-center justify-center lg:justify-start">
        <nav class="w-full lg:w-1/2 flex items-center justify-between">
          <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto h-8">
            <div class="text-sm lg:flex-grow text-white">
              <router-link :to="{name: 'home'}" class="text-blue-light hover:text-blue lg:mt-0 mr-5 no-underline">
                <span>Home</span>
              </router-link>
              <router-link :to="{name: 'people'}" class="text-blue-light hover:text-blue lg:mt-0 mr-5 no-underline">
                <span>People</span>
              </router-link>
              <router-link :to="{name: 'groups'}" class="text-blue-light hover:text-blue lg:mt-0 mr-5 no-underline">
                <span>Groups</span>
              </router-link>
              <router-link :to="{name: 'events'}" class="text-blue-light hover:text-blue lg:mt-0 mr-5 no-underline">
                <span>Events</span>
              </router-link>
            </div>
          </div>
        </nav>

        <div class="w-full inline-flex justify-start items-center mt-4">
          <h4 class="mr-2 lg:mr-6">Connect With Us:</h4>
          <!-- <a href="" class="mr-6" target="_blank">
            <svg version="1.1" class="text-white hover:text-blue-light fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;"
              xml:space="preserve">
              <title>Facebook</title>
              <path d="M288,176v-64c0-17.664,14.336-32,32-32h32V0h-64c-53.024,0-96,42.976-96,96v80h-64v80h64v256h96V256h64l32-80H288z" />
            </svg>
          </a> -->
          <a href="https://twitter.com/murcho_platform" class="mr-6" target="_blank">
            <svg version="1.1" class="text-white hover:text-blue-light fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512.002px" height="512.002px" viewBox="0 0 512.002 512.002"
              style="enable-background:new 0 0 512.002 512.002;" xml:space="preserve">
              <title>Twitter</title>
              <path d="M512.002,97.211c-18.84,8.354-39.082,14.001-60.33,16.54c21.686-13,38.342-33.585,46.186-58.115c-20.299,12.039-42.777,20.78-66.705,25.49c-19.16-20.415-46.461-33.17-76.674-33.17c-58.011,0-105.042,47.029-105.042,105.039c0,8.233,0.929,16.25,2.72,23.939c-87.3-4.382-164.701-46.2-216.509-109.753c-9.042,15.514-14.223,33.558-14.223,52.809c0,36.444,18.544,68.596,46.73,87.433c-17.219-0.546-33.416-5.271-47.577-13.139c-0.01,0.438-0.01,0.878-0.01,1.321c0,50.894,36.209,93.348,84.261,103c-8.813,2.399-18.094,3.687-27.674,3.687c-6.769,0-13.349-0.66-19.764-1.888c13.368,41.73,52.16,72.104,98.126,72.949c-35.95,28.176-81.243,44.967-130.458,44.967c-8.479,0-16.84-0.496-25.058-1.471c46.486,29.807,101.701,47.197,161.021,47.197c193.211,0,298.868-160.062,298.868-298.872c0-4.554-0.104-9.084-0.305-13.59C480.111,136.775,497.92,118.275,512.002,97.211z" />
            </svg>
          </a>
          <a href="https://www.youtube.com/channel/UC1C0yNyYAzYgaicHBDcxWZg" class="mr-6" target="_blank">
            <svg version="1.1" class="text-white hover:text-blue-light fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 310 310" style="enable-background:new 0 0 310 310;"
              xml:space="preserve">
              <title>Youtube</title>
              <path id="XMLID_823_" d="M297.917,64.645c-11.19-13.302-31.85-18.728-71.306-18.728H83.386c-40.359,0-61.369,5.776-72.517,19.938C0,79.663,0,100.008,0,128.166v53.669c0,54.551,12.896,82.248,83.386,82.248h143.226c34.216,0,53.176-4.788,65.442-16.527C304.633,235.518,310,215.863,310,181.835v-53.669C310,98.471,309.159,78.006,297.917,64.645z M199.021,162.41l-65.038,33.991c-1.454,0.76-3.044,1.137-4.632,1.137c-1.798,0-3.592-0.484-5.181-1.446c-2.992-1.813-4.819-5.056-4.819-8.554v-67.764c0-3.492,1.822-6.732,4.808-8.546c2.987-1.814,6.702-1.938,9.801-0.328l65.038,33.772c3.309,1.718,5.387,5.134,5.392,8.861C204.394,157.263,202.325,160.684,199.021,162.41z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/murcho_platform" class="mr-4" target="_blank">
            <svg version="1.1" class="text-white hover:text-blue-light fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;"
              xml:space="preserve">
              <title>Instagram</title>
              <path d="M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192c88.352,0,160-71.648,160-160V160C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112V160C48,98.24,98.24,48,160,48h192c61.76,0,112,50.24,112,112V352z" />
              <path d="M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128S326.688,128,256,128z M256,336c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80C336,300.096,300.096,336,256,336z" />
              <circle cx="393.6" cy="118.4" r="17.056" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/murcho-platform-a60a74179" class="mr-4" target="_blank">
            <svg version="1.1" class="text-white hover:text-blue-light fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 430.117 430.117" style="enable-background:new 0 0 430.117 430.117;"
              xml:space="preserve">
              <title>Linkedin</title>
              <path id="LinkedIn" d="M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z M5.477,420.56h92.184v-277.32H5.477V420.56z" />
            </svg>
          </a>
        </div>

      </div>
      <div class="w-full lg:w-1/2 flex flex-wrap items-center mt-4 lg:mt-0">
        <div class="w-full lg:w-1/4 flex items-center h-8">
          <img src="https://s3.ap-south-1.amazonaws.com/murch-assets/murcho_color.png" alt="Murch Logo" class="h-8">
        </div>

        <div class="w-full lg:w-3/4 mt-4 lg:mt-0">
          <h4>Hear From Us</h4>
          <form class="inline-flex items-center justify-center relative mt-4" @submit.prevent="sendFeedback">
            <input class="appearance-none w-full h-8 p-2 text-grey bg-grey-lighter rounded-l border border-blue focus:bg-white border-transparent focus:border-blue-light border-animated"
              type="email" placeholder="Enter email address..." v-model="user_email" v-validate="{required: true, email: true}" name="Feedback">
            <button class="hover:bg-blue hover:text-white text-blue border border-blue hover:bg-blue-dark text-white font-bold p-2 rounded-r h-8 flex items-center"
              @click="sendFeedback" type="submit">
              SEND
              <spinner v-if="loadingForm" />
            </button>
          </form>
        </div>

      </div>
    </div>
    <div class="w-full text-xs bg-black w-full p-4 text-white flex flex-wrap justify-between">
      <div class="flex w-full lg:w-1/2 items-center justify-between lg:justify-start">
        <p class="lg:mr-2 w-1/2">
          New Delhi, India.
        </p>
        <p class="text-right lg:text-left w-1/2">
          +91 9152105353, info@murcho.com
        </p>
      </div>
      <div class="flex w-full lg:w-1/2 items-center justify-between lg:justify-end mt-4 lg:mt-0">
        <p class="lg:mr-2 w-1/2">
          <a href="" class="text-grey-light no-underline hover:text-blue">Site Terms</a>
          &#124;
          <a href="" class="text-grey-light no-underline hover:text-blue">Privacy</a>
        </p>
        <p class="w-1/2">
          &copy; 2019, Murcho.com. All rights reserved.
        </p>
      </div>
    </div>

    <transition enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
      <div class="bg-white fixed shadow-lg z-20 w-full max-w-md rounded" style="top: 30%; left: 50%; transform: translate(-50%, -50%); animation-duration: 500ms;"
        v-if="modal.state" @keyup.esc.stop="closeModal">
        <!-- <div class="background-tint fixed w-full h-full bg-black"></div> -->
        <svg class="cursor-pointer fill-current h-5 w-5 text-blue-light float-right m-2 rounded-full bg-white" role="button" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20" @click="closeModal">
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"></path>
        </svg>

        <div class="w-full container mx-auto">
          <div class="bg-grey-light">
            <h3 class="text-blue-light font-black text-2xl mr-4 p-2">{{modal.title}}</h3>
          </div>

          <div class="inline-flex p-3 items-center">
            <p v-html="modal.icon" class="mr-2"></p>
            <p class="text-grey-darker">{{modal.message}}</p>
          </div>



        </div>
      </div>
    </transition>


  </footer>
</template>

<script>
  const successIcon =
    `
  <svg version="1.1" class="h-6 text-blue-light fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 52 52" style="enable-background:new 0 0 52 52;" xml:space="preserve">
	<path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M40.495,17.329l-16,18
		C24.101,35.772,23.552,36,22.999,36c-0.439,0-0.88-0.144-1.249-0.438l-10-8c-0.862-0.689-1.002-1.948-0.312-2.811
		c0.689-0.863,1.949-1.003,2.811-0.313l8.517,6.813l14.739-16.581c0.732-0.826,1.998-0.9,2.823-0.166
		C41.154,15.239,41.229,16.503,40.495,17.329z"/>
</svg>
`;

  const errorIcon =
    `
  <svg version="1.1" class="h-6 text-blue-light fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 497.472 497.472" style="enable-background:new 0 0 497.472 497.472;" xml:space="preserve">
<g transform="matrix(1.25 0 0 -1.25 0 45)">
			<path style="fill:#FFCC4D;" d="M24.374-357.857c-20.958,0-30.197,15.223-20.548,33.826L181.421,17.928
				c9.648,18.603,25.463,18.603,35.123,0L394.14-324.031c9.671-18.603,0.421-33.826-20.548-33.826H24.374z"/>
			<path style="fill:#231F20;" d="M173.605-80.922c0,14.814,10.934,23.984,25.395,23.984c14.12,0,25.407-9.512,25.407-23.984
				V-216.75c0-14.461-11.287-23.984-25.407-23.984c-14.461,0-25.395,9.182-25.395,23.984V-80.922z M171.489-289.056
				c0,15.167,12.345,27.511,27.511,27.511c15.167,0,27.523-12.345,27.523-27.511c0-15.178-12.356-27.523-27.523-27.523
				C183.834-316.579,171.489-304.234,171.489-289.056"/>
  </g>
  </svg>
`;

  export default {
    name: 'Footer',
    data() {
      return {
        userMenu: false,
        user_email: '',
        loadingForm: false,
        modal: {
          state: false,
          title: '',
          message: '',
          error: false,
          icon: null
        }
      }
    },
    methods: {
      closeModal() {
        this.modal.state = false
        this.modal.title = ''
        this.modal.message = ''
        this.modal.error = false
        this.modal.icon = null
      },
      sendFeedback() {
        if (this.loadingForm) return false
        this.shouldDisplayMessage = false

        this.validateForm(async state => {
          if (!state) return false
          this.loadingForm = true

          try {
            const path = 'app_feedback'
            const response = await this.$http.post(path, {
              email: this.user_email,
            })

            this.user_email = ''
            this.modal.title = 'Feedback submitted successfully'
            this.modal.message =
              'Thank you for submitting your feedback. You will hear from us in 1-2 working days.'
            this.modal.error = false
            this.modal.icon = successIcon
            this.modal.state = true
          } catch (err) {
            this.modal.title = 'Error submitting feedback'
            this.modal.message = this.$http.getErrorMessage(err)
            this.modal.error = true
            this.modal.icon = errorIcon
            this.modal.state = true
          } finally {
            this.loadingForm = false
          }
        })
      }
    }
  }

</script>
