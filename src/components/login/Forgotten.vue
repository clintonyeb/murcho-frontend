<template>
  <div>
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

    <div class="container mx-auto lg:p-20 p-4 bg-pattern h-screen">

      <div class="mb-4 h-10">
        <img src="https://s3.ap-south-1.amazonaws.com/murch-assets/murcho_color.png" alt="Murch Logo" class="h-10">
      </div>

      <div class="mt-16 mb-2 text-grey-dark font-bold text-xl">
        Forgotten Your Password ?
      </div>

      <div class="mb-8 mt-4 text-grey-dark">
        Enter your email below, and we'll send you a Reset Link
      </div>

      <form @submit.prevent="getResetEmail">
        <div class="mt-8 lg:mt-16">
          <div class="control mb-4 mt-4 h-16">
            <div class="h-12 inline-flex border max-w-full w-full rounded-sm relative" :class="getInputColor('Email')">
              <button disabled class="hidden md:flex items-center justify-center border border-l-0 border-t-0 border-b-0 border-grey-light p-1 h-12 w-12">

                <svg class="h-6 w-6 fill-current text-grey-light" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 350 350" style="enable-background:new 0 0 50 50;"
                  xml:space="preserve">
                  <g>
                    <path d="M175,171.173c38.914,0,70.463-38.318,70.463-85.586C245.463,38.318,235.105,0,175,0s-70.465,38.318-70.465,85.587C104.535,132.855,136.084,171.173,175,171.173z" />
                    <path d="M41.909,301.853C41.897,298.971,41.885,301.041,41.909,301.853L41.909,301.853z" />
                    <path d="M308.085,304.104C308.123,303.315,308.098,298.63,308.085,304.104L308.085,304.104z" />
                    <path d="M307.935,298.397c-1.305-82.342-12.059-105.805-94.352-120.657c0,0-11.584,14.761-38.584,14.761s-38.586-14.761-38.586-14.761c-81.395,14.69-92.803,37.805-94.303,117.982c-0.123,6.547-0.18,6.891-0.202,6.131c0.005,1.424,0.011,4.058,0.011,8.651c0,0,19.592,39.496,133.08,39.496c113.486,0,133.08-39.496,133.08-39.496c0-2.951,0.002-5.003,0.005-6.399C308.062,304.575,308.018,303.664,307.935,298.397z" />
                  </g>
                </svg>
              </button>
              <input type="text" placeholder="Email address" class="ml-4 bg-grey-lightest" v-model="email" name="Email"
                v-validate="{required: true, email: true}" tabindex="1" v-autofocus>
            </div>
            <p class="text-red-light text-xs md:ml-12 pt-1" v-show="getInputState('Email')">
              {{getInputErrorMessage('Email')}}
            </p>
          </div>

        </div>

        <div class="mt-4 mb-4 inline-flex justify-between w-full">
          <button class="inline-flex items-center justify-center p-1 h-12 bg-blue rounded-sm w-32 text-white shadow-md w-full"
            @click="getResetEmail">
            EMAIL ME RESET LINK
            <svg class="spinner ml-2 h-6 w-6 text-grey-light fill-current" version="1.1" xmlns="http://www.w3.org/2000/svg"
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
      </form>

      <div class="mt-12 text-center">
        <a style="line-height: 3;" class="cursor-pointer text-grey-dark hover:text-blue-light underline" @click="$emit('login')">
          Remembered your Password?
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    MESSAGE_TYPES
  } from '@/utils'

  export default {
    name: 'Forgotten',
    data() {
      return {
        loadingForm: false,
        email: '',
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
      getResetEmail() {
        if (this.loadingForm) return false

        this.validateForm(async state => {
          if (!state) return false
          this.loadingForm = true

          const email = this.email

          const path = 'forgot_password'

          try {
            const response = await this.$http.post(path, {
              email,
            })

            this.email = ''

            this.displayMessage =
              'Password reset link has been sent to your email. Please check your email for more instructions.'
            this.displayMessageType = MESSAGE_TYPES.info
            this.shouldDisplayMessage = true

          } catch (err) {
            this.displayMessage = this.$http.getErrorMessage(err)
            this.displayMessageType = MESSAGE_TYPES.error
            this.shouldDisplayMessage = true
          } finally {
            this.loadingForm = false
          }
        })
      }
    }
  }

</script>
