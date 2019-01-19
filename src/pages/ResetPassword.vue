<template>
  <div class="w-full lg:h-screen font-sans">
    <nav class="flex items-center justify-between flex-wrap p-4 h-16  bg-white lg:fixed mb-4 lg:mb-0">
      <div class="flex items-center flex-no-shrink h-8">
        <img src="https://s3.ap-south-1.amazonaws.com/murch-assets/murcho_color.png" alt="Murch Logo" class="h-8">
      </div>
    </nav>

    <div class="absolute flex items-center text-white text-sm font-bold px-4 py-3 w-full mb-4 animated tada" role="alert"
      v-if="shouldDisplayMessage" :class="alertClass" style="animation-delay: 1s;">
      <svg class="h-4 w-4 fill-current text-white mr-4" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px" y="0px" viewBox="0 0 483.537 483.537" style="enable-background:new 0 0 483.537 483.537;" xml:space="preserve"
        v-if="displayMessageType === MESSAGE_TYPES.error">
        <path d="M479.963,425.047L269.051,29.854c-5.259-9.88-15.565-16.081-26.782-16.081h-0.03c-11.217,0-21.492,6.171-26.782,16.051L3.603,425.016c-5.046,9.485-4.773,20.854,0.699,29.974c5.502,9.15,15.413,14.774,26.083,14.774H453.12c10.701,0,20.58-5.594,26.083-14.774C484.705,445.84,484.979,434.471,479.963,425.047z M242.239,408.965c-16.781,0-30.399-13.619-30.399-30.399c0-16.78,13.619-30.399,30.399-30.399c16.75,0,30.399,13.619,30.399,30.399C272.638,395.346,259.02,408.965,242.239,408.965zM272.669,287.854c0,16.811-13.649,30.399-30.399,30.399c-16.781,0-30.399-13.589-30.399-30.399V166.256c0-16.781,13.619-30.399,30.399-30.399c16.75,0,30.399,13.619,30.399,30.399V287.854z" />
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

    <div class="container mx-auto lg:p-20 p-4 h-screen">

      <div class="my-8 text-grey-dark font-medium text-2xl">
        Reset Account Password.
      </div>
      <form @submit.prevent="resetPassword">
        <div class="mt-8 lg:mt-16">
          <div class="control mb-4 mt-4">
            <label class="block text-grey text-sm font-bold mb-2" for="Account Password">
              Account Password
            </label>
            <input type="password" placeholder="Account Password" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2"
              v-model="password" name="Account Password" tabindex="8" id="Account Password" :class="getInputColor('Account Password')"
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
              v-model="confirm_password" name="Confirm Password" tabindex="9" id="Confirm Password" :class="getInputColor('Confirm Password')"
              v-validate="{required: true, confirmed: 'Account Password'}">
            <p class="text-red-light text-xs  pt-1 animated shake h-4" v-show="getInputState('Confirm Password')">
              {{getInputErrorMessage('Confirm Password')}}
            </p>
          </div>
        </div>

        <div class="mt-4 mb-4 flex flex-wrap-reverse justify-between w-full">
          <router-link style="line-height: 3;" class="cursor-pointer text-blue-light hover:text-blue-light underline w-full lg:w-1/2 text-center lg:text-left mt-4 lg:mt-0"
            :to="{name: 'login'}">
            Take me to login
          </router-link>
          <div class="w-full lg:w-1/2 text-center lg:text-right">
            <button class="inline-flex items-center justify-center p-2 px-5 h-12 bg-blue rounded-sm text-white shadow-md"
              @click.prevent.stop="resetPassword" type="submit">
              RESET PASSWORD
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
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import {
    MESSAGE_TYPES
  } from '@/utils'

  export default {
    name: 'ResetPassword',
    props: ['password_token'],
    data() {
      return {
        password: '',
        confirm_password: '',
        loadingForm: false,
        displayMessage: '',
        displayMessageType: MESSAGE_TYPES.info,
        shouldDisplayMessage: false,
        MESSAGE_TYPES: MESSAGE_TYPES
      }
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
      resetPassword() {
        if (this.loadingForm) return false
        this.shouldDisplayMessage = false

        this.validateForm(async state => {
          if (!state) return false
          this.loadingForm = true

          try {
            const path = 'reset_password'
            const response = await this.$http.post(path, {
              password: this.password,
              token: this.password_token
            })

            this.password = ''
            this.confirm_password = ''

            this.displayMessage =
              'Password reset was successful. Please Login to continue.'
            this.displayMessageType = MESSAGE_TYPES.info
            this.shouldDisplayMessage = true

          } catch (err) {
            console.log(JSON.parse(err.response))
            const message = err.response ? JSON.parse(err.response).error :
              'There was an error processing your request.'
            this.displayMessage = message
            this.displayMessageType = MESSAGE_TYPES.error
            this.shouldDisplayMessage = true
          } finally {
            this.loadingForm = false
          }
        })
      },
    }
  }

</script>

<style>

</style>
