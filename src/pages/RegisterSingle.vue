<template>
  <div class="flex flex-wrap h-screen w-screen font-sans" id="register">
    <div class="w-full lg:w-1/2 lg:h-screen bg-grey-lightest relative border-r-2 border-dashed bg-pattern" id="form-section">
      <div>
        <div class="absolute flex items-center text-white text-sm font-bold px-4 py-3 w-full mb-4 " role="alert" v-if="shouldDisplayMessage"
          :class="alertClass" style="animation-delay: 1s;">
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

        <div class="max-w-md container mx-auto lg:p-20 p-4">

          <div class="mb-4 h-10">
            <img src="https://s3.ap-south-1.amazonaws.com/murch-assets/murcho_color.png" alt="Murch Logo" class="h-10">
          </div>

          <div class="my-8 text-grey-dark font-medium text-lg">
            Register Your Church on Our Platform
          </div>
          <div class="mt-8">

            <div class="control mb-4">
              <label class="block text-grey text-sm font-bold mb-2" for="Church Name">
                Church Name
              </label>
              <input type="text" placeholder="Enter Church Name" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2"
                v-model="church_name" name="Church Name" v-validate="{required: true}" tabindex="1" v-autofocus id="Church Name"
                :class="getInputColor('Church Name')">
              <p class="text-red-light text-xs  pt-1 animated shake h-4" v-show="getInputState('Church Name')">
                {{getInputErrorMessage('Church Name')}}
              </p>
            </div>

            <div class="control mb-4 mt-4">
              <label class="block text-grey text-sm font-bold mb-2" for="Church Location">
                Church Location
              </label>
              <input type="text" placeholder="Enter Church Location" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2"
                v-model="church_location" name="Church Location" tabindex="2" id="Church Location" :class="getInputColor('Church Location')">
              <p class="text-red-light text-xs  pt-1 animated shake h-4" v-show="getInputState('Church Location')">
                {{getInputErrorMessage('Church Location')}}
              </p>
            </div>

            <div class="control mb-4 mt-4">
              <label class="block text-grey text-sm font-bold mb-2" for="Church Motto">
                Church Tagline/Motto/Description
              </label>
              <input type="text" placeholder="Enter Church Motto" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2"
                v-model="church_motto" name="Church Motto" tabindex="3" id="Church Motto" :class="getInputColor('Church Motto')">
              <p class="text-red-light text-xs  pt-1 animated shake h-4" v-show="getInputState('Church Motto')">
                {{getInputErrorMessage('Church Motto')}}
              </p>
            </div>

            <div class="w-full relative">
              <div class="w-full">
                <div class="w-full control mb-4 mt-4 relative">
                  <label class="block text-grey text-sm font-bold mb-2">
                    Church Logo
                  </label>
                  <div class="w-full flex items-top justify-between">

                    <div class="w-full relative pr-1 h-16">
                      <input type="file" id="Church Logo" placeholder="Upload Church Logo" class="text-grey-darker is-custom"
                        name="Church Logo" tabindex="4" @change="photoUploaded" v-validate.continues="{image: true, ext: ['jpeg', 'jpg', 'png', 'svg']}"
                        ref="church-photo">
                      <label class="cursor-pointer hover:shadow w-full h-16 bg-grey-lighter p-2 rounded-lg absolute inline-flex items-center justify-center text-grey hover:text-grey-dark"
                        for="Church Logo">
                        Click to choose a photo
                      </label>
                      <p class="text-red-light text-xs  animated shake" v-show="getInputState('Church Logo')">
                        {{getInputErrorMessage('Church Logo')}}
                      </p>
                    </div>

                    <div class="w-1/3 pl-1 self-end" v-show="church_photo">
                      <div class="w-full flex-col items-center justify-center">
                        <img :src="church_photo" alt="Church Logo" width="90px" class="center">
                        <p class="text-xs text-grey hover:underline cursor-pointer mt-1 text-center hover:text-grey-dark"
                          @click="church_photo = null" v-show="church_photo">
                          Remove
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>

    <div class="w-full lg:w-1/2 lg:h-screen bg-grey-lightest bg-pattern">
      <hr class="w-full lg:hidden border border-dotted border-grey-dark">
      <div class="max-w-md container mx-auto lg:p-20 p-4">

        <div class="my-8 text-grey-dark">
          <p class="font-black text-lg">
            Login Details
          </p>
          <p class="mt-2 text-grey-dark text-xs">
            This user is your admin user. You will use his email and password to login to your account. You will be
            able to manage your account after login.
          </p>
        </div>

        <div class="mt-8">

          <div class="control mb-4">
            <label class="block text-grey text-sm font-bold mb-2" for="Email Address">
              Email Address
            </label>
            <input type="email" placeholder="Enter Email Address" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2"
              v-model="email" name="Email address" v-validate="{required: true, email: true}" tabindex="5" id="Email address"
              :class="getInputColor('Email address')">
            <p class="text-red-light text-xs  pt-1 animated shake h-4" v-show="getInputState('Email address')">
              {{getInputErrorMessage('Email address')}}
            </p>
          </div>

          <div class="control mb-4 mt-4">
            <label class="block text-grey text-sm font-bold mb-2" for="Account Password">
              Account Password
            </label>
            <input type="password" placeholder="Account Password" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2"
              v-model="password" name="Account Password" tabindex="6" id="Account Password" :class="getInputColor('Account Password')"
              ref="Account Password" v-validate="{required: true, min: 4}">
            <p class="text-red-light text-xs  pt-1 animated shake h-4" v-show="getInputState('Account Password')">
              {{getInputErrorMessage('Account Password')}}
            </p>
          </div>

          <div class="control mb-4 mt-4">
            <label class="block text-grey text-sm font-bold mb-2" for="Confirm Password">
              Confirm Password
            </label>
            <input type="password" placeholder="Confirm Password" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2"
              v-model="confirm_password" name="Confirm Password" tabindex="7" id="Confirm Password" :class="getInputColor('Confirm Password')"
              v-validate="{required: true, confirmed: 'Account Password'}">
            <p class="text-red-light text-xs  pt-1 animated shake h-4" v-show="getInputState('Confirm Password')">
              {{getInputErrorMessage('Confirm Password')}}
            </p>
          </div>

          <vue-recaptcha ref="recaptcha" @verify="onCaptchaVerified" @expired="resetCaptcha" size="invisible" :sitekey="siteKey"></vue-recaptcha>
        </div>

        <div class="mt-4 mb-4 inline-flex justify-around lg:justify-end w-full">
          <button class="inline-flex items-center justify-center p-1 px-4 h-12 bg-blue rounded-sm text-white shadow-md"
            @click="submit">
            CREATE ACCOUNT
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
        </div>

        <div class="my-8">
          <p class="is-dashed text-grey">
            <span>or</span>
          </p>
        </div>

        <div class="inline-flex w-full shadow-md" @click="$router.replace({name: 'login'})">
          <button class="bg-blue-dark h-12 w-12 p-2">

            <svg class="h-6 w-6 fill-current text-white" viewBox="-7 0 429 429.5" xmlns="http://www.w3.org/2000/svg">
              <path d="m241.148438 88.699219c0 48.988281-39.710938 88.699219-88.699219 88.699219s-88.699219-39.710938-88.699219-88.699219 39.710938-88.699219 88.699219-88.699219 88.699219 39.710938 88.699219 88.699219zm0 0" />
              <path d="m245.449219 266.800781c-26.5-20.699219-58.597657-31.601562-92.800781-31.601562h-.296876c-41.101562.101562-79.402343 16.101562-107.703124 45.101562-27.199219 28-42.898438 65.699219-44.398438 107l262.898438-.5c-11.601563-19.511719-17.71875-41.796875-17.699219-64.5zm0 0" />
              <path d="m259.449219 266.5v55.800781c.046875 44.824219 26.617187 85.371094 67.699219 103.300781l8.800781 3.898438 10.300781-4.5c41.875-17.535156 69.121094-58.503906 69.101562-103.898438v-54.601562l-79.101562-42.199219zm122.800781 35c2.425781 2.984375 1.980469 7.367188-1 9.800781l-52.800781 42.898438c-1.230469 1.035156-2.789063 1.601562-4.398438 1.601562-2.058593.019531-4.011719-.898437-5.300781-2.5l-22.699219-26.5c-2.515625-2.957031-2.15625-7.386719.800781-9.902343 2.953126-2.511719 7.386719-2.152344 9.898438.800781l18.199219 21.300781 47.5-38.601562c3.027343-2.34375 7.367187-1.855469 9.800781 1.101562zm0 0" /></svg>
          </button>
          <button class="h-12 bg-blue w-full text-white">
            LOGIN TO ACCOUNT
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VueRecaptcha from 'vue-recaptcha'

  import {
    MESSAGE_TYPES
  } from '@/utils'

  export default {
    name: 'RegisterSingle',
    data() {
      return {
        displayMessage: '',
        displayMessageType: MESSAGE_TYPES.info,
        shouldDisplayMessage: false,
        MESSAGE_TYPES: MESSAGE_TYPES,
        loadingForm: false,
        church_name: '',
        church_location: '',
        church_motto: '',
        church_photo: '',
        email: '',
        password: '',
        confirm_password: '',
        siteKey: process.env.VUE_APP_CAPTCHA_SITE_KEY
      }
    },
    metaInfo: {
      title: 'Sign Up Single',
      meta: [{
        name: 'description',
        content: 'Registration Page for the Murcho Platform. Register your church on the platform to access our platform.'
      }]
    },
    mounted() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit')
      document.head.appendChild(recaptchaScript)
    },
    computed: {
      loadingButtonClass() {
        return {
          loading: this.loadingForm
        }
      },
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
      onCaptchaVerified(token) {
        this.resetCaptcha()
        this.submitForm(token)
      },
      resetCaptcha() {
        this.$refs.recaptcha.reset()
      },
      photoUploaded(event) {
        const file = event.target.files && event.target.files[0]

        if (file) {
          const reader = new FileReader()
          reader.onload = (e) => {
            this.church_photo = e.target.result
          }

          reader.readAsDataURL(file)
        } else {
          this.church_photo = null
        }
      },
      async submitForm(token) {
        try {
          // create church

          let path = 'churches'

          const church = await this.$http.post(path, {
            name: this.church_name,
            location: this.church_location,
            photo: null, // TODO upload photo
            motto: this.church_motto,
            'g-recaptcha-response': token
          })

          // create user
          path = 'users'

          const user = await this.$http.post(path, {
            church_id: church.id,
            email: this.email,
            password: this.password,
            access_level: 'super_admin'
          })

          // return user to login

          this.$store.commit('SET_LOGIN_DATA', {
            message: 'Account successfully created. Please check your email to validate your account.',
            type: MESSAGE_TYPES.info,
            route: null
          })

          return this.$router.replace({
            name: 'login'
          })

        } catch (err) {
          this.loadingForm = false
          const message = err.response ? JSON.parse(err.response).error :
            'There was an error processing your request.'
          this.displayMessage = message
          this.displayMessageType = MESSAGE_TYPES.error
          this.shouldDisplayMessage = true
        } finally {}
      },
      submit() {
        if (this.loadingForm) return false
        this.shouldDisplayMessage = false

        this.validateForm(state => {
          if (!state) return false
          this.loadingForm = true
          this.$refs.recaptcha.execute()
        })
      }
    },
    components: {
      VueRecaptcha
    },
  }

</script>
