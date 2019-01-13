<template>
  <div>
    <div class="absolute flex items-center text-white text-sm font-bold px-4 py-3 w-full mb-4 animated tada" role="alert"
      v-if="shouldDisplayMessage" :class="alertClass" style="animation-delay: 1s;">
      <svg class="h-4 w-4 fill-current text-white mr-4" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px" y="0px" viewBox="0 0 483.537 483.537" style="enable-background:new 0 0 483.537 483.537;" xml:space="preserve"
        v-if="displayMessageType === MESSAGE_TYPES.error">
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

    <div class="container mx-auto lg:p-20 p-4 h-screen bg-pattern">

      <div class="mb-4 h-10">
        <img src="https://s3.ap-south-1.amazonaws.com/murch-assets/murcho_color.png" alt="Murch Logo" class="h-10">
      </div>

      <div class="my-8 text-grey-dark font-medium text-lg">
        Welcome Back, Please Login to your account or Register
      </div>
      <form @submit.prevent="login">
      <div class="mt-8 lg:mt-16">
        <div class="control mb-4 mt-4 h-16">
          <div class="h-12 inline-flex border max-w-full w-full rounded-sm relative" :class="getInputColor('Email')">
            <button class="hidden md:flex items-center justify-center border border-l-0 border-t-0 border-b-0 border-grey-light p-1 h-12 w-12">

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
            <input type="text" placeholder="Email address" class="w-full mx-2 bg-grey-lightest" v-model="email" name="Email"
              v-validate="{required: true, email: true}" tabindex="1" v-autofocus>
          </div>
          <p class="text-red-light text-xs md:ml-12 pt-1 animated shake" v-show="getInputState('Email')">
            {{getInputErrorMessage('Email')}}
          </p>
        </div>

        <div class="control mt-4 mb-4 h-16">
          <div class="h-12 inline-flex border max-w-full w-full rounded-sm relative" :class="getInputColor('Password')">
            <button class="hidden md:flex items-center justify-center border border-l-0 border-t-0 border-b-0 border-grey-light p-1 h-12 w-12">

              <svg class="h-6 w-6 fill-current text-grey-light" version="1.1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 58 58" style="enable-background:new 0 0 50 50;"
                xml:space="preserve">
                <path d="M40,21.314V10.22C40,4.585,35.065,0,29,0S18,4.585,18,10.22v11.094C12.584,24.896,9,31.034,9,38c0,11.028,8.972,20,20,20s20-8.972,20-20C49,31.034,45.416,24.896,40,21.314z M20,20.157V10.22C20,5.688,24.037,2,29,2s9,3.688,9,8.22v9.938c-0.188-0.095-0.38-0.179-0.57-0.268c-0.393-0.184-0.792-0.356-1.198-0.515c-0.261-0.102-0.523-0.198-0.787-0.289c-0.26-0.089-0.518-0.178-0.782-0.256c-0.437-0.13-0.879-0.241-1.324-0.341c-0.193-0.043-0.387-0.084-0.582-0.122c-0.523-0.101-1.049-0.183-1.579-0.242c-0.12-0.013-0.24-0.021-0.36-0.032C30.213,18.036,29.608,18,29,18s-1.213,0.036-1.816,0.092c-0.12,0.011-0.241,0.019-0.36,0.032c-0.53,0.059-1.056,0.141-1.579,0.242c-0.195,0.037-0.389,0.079-0.582,0.122c-0.445,0.1-0.887,0.211-1.324,0.341c-0.264,0.078-0.523,0.168-0.782,0.256c-0.264,0.091-0.527,0.187-0.787,0.289c-0.407,0.158-0.805,0.331-1.198,0.515C20.38,19.978,20.188,20.062,20,20.157z M33,40c0,2.206-1.794,4-4,4s-4-1.794-4-4v-6c0-2.206,1.794-4,4-4s4,1.794,4,4V40z" />
              </svg>

            </button>
            <input :type=" showPassword ? 'text' : 'password'" placeholder="Password" class="w-full mx-2 bg-grey-lightest"
              v-model="password" name="Password" v-validate="{required: true}" tabindex="2">

            <button class="p-1 h-12 w-12 absolute pin-r" @click="showPassword = !showPassword">

              <svg class="h-6 w-6 text-grey-light fill-current" version="1.1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 488.85 488.85" style="enable-background:new 0 0 50 50;"
                xml:space="preserve" v-if="!showPassword">
                <g>
                  <path d="M244.425,98.725c-93.4,0-178.1,51.1-240.6,134.1c-5.1,6.8-5.1,16.3,0,23.1c62.5,83.1,147.2,134.2,240.6,134.2s178.1-51.1,240.6-134.1c5.1-6.8,5.1-16.3,0-23.1C422.525,149.825,337.825,98.725,244.425,98.725z M251.125,347.025c-62,3.9-113.2-47.2-109.3-109.3c3.2-51.2,44.7-92.7,95.9-95.9c62-3.9,113.2,47.2,109.3,109.3C343.725,302.225,302.225,343.725,251.125,347.025z M248.025,299.625c-33.4,2.1-61-25.4-58.8-58.8c1.7-27.6,24.1-49.9,51.7-51.7c33.4-2.1,61,25.4,58.8,58.8C297.925,275.625,275.525,297.925,248.025,299.625z" />
                </g>
              </svg>

              <svg class="h-6 w-6 text-grey-light fill-current" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 59.2 59.2" style="enable-background:new 0 0 59.2 59.2;"
                xml:space="preserve" v-else>
                <g>
                  <path d="M51.062,21.841c-2.1-2.1-4.454-3.851-6.99-5.235l9.549-9.549c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0L42.186,15.663c-3.93-1.8-8.233-2.753-12.685-2.753c-8.145,0-15.802,3.171-21.561,8.931L0,29.781l8.138,8.138c2.023,2.023,4.284,3.719,6.714,5.078l-9.145,9.145c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l9.593-9.593c4.01,1.889,8.42,2.886,12.984,2.886c8.145,0,15.802-3.171,21.561-8.931l7.941-7.941L51.062,21.841z M16.321,41.529c-2.461-1.312-4.741-2.996-6.769-5.024l-6.724-6.724l6.527-6.527c5.381-5.381,12.536-8.345,20.146-8.345c3.903,0,7.683,0.784,11.169,2.27L16.321,41.529z M49.845,36.505c-5.381,5.381-12.536,8.345-20.146,8.345c-4.015,0-7.9-0.833-11.468-2.402l24.361-24.361c2.57,1.333,4.951,3.062,7.056,5.168l6.724,6.724L49.845,36.505z" />
                  <path d="M29.572,16.85c-7.168,0-13,5.832-13,13c0,2.543,0.745,4.91,2.012,6.916l17.904-17.904C34.482,17.595,32.115,16.85,29.572,16.85z" />
                  <path d="M22.459,40.718c2.046,1.343,4.488,2.131,7.113,2.131c7.168,0,13-5.832,13-13c0-2.625-0.788-5.067-2.131-7.113L22.459,40.718z" />
                </g>
              </svg>
            </button>
          </div>

          <p class="text-red-light text-xs md:ml-12 pt-1 h-1 pt-1 animated shake" v-show="getInputState('Password')">
            {{getInputErrorMessage('Password')}}
          </p>

        </div>

      </div>

      <div class="mt-4 mb-4 flex flex-wrap-reverse justify-between w-full">
        <a style="line-height: 3;" class="cursor-pointer text-grey-dark hover:text-blue-light underline w-full lg:w-1/2 text-center lg:text-left mt-4 lg:mt-0" 
        @click="$emit('forgotten')">
          Forgot Password?
        </a>
        <div class="w-full lg:w-1/2 text-center lg:text-right">
          <button class="inline-flex items-center justify-center p-1 h-12 bg-blue rounded-sm w-32 text-white shadow-md"
            @click.prevent.stop="login" type="submit">
            LOGIN
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

      <div class="my-8">
        <p class="is-dashed text-grey">
          <span>or</span>
        </p>
      </div>

      <div class="inline-flex w-full shadow-md" @click="$router.replace({name: 'signup-options'})">
        <button class="bg-blue-dark h-12 w-12 p-2">

          <svg class="h-6 w-6 fill-current text-white" viewBox="-7 0 429 429.5" xmlns="http://www.w3.org/2000/svg">
            <path d="m241.148438 88.699219c0 48.988281-39.710938 88.699219-88.699219 88.699219s-88.699219-39.710938-88.699219-88.699219 39.710938-88.699219 88.699219-88.699219 88.699219 39.710938 88.699219 88.699219zm0 0" />
            <path d="m245.449219 266.800781c-26.5-20.699219-58.597657-31.601562-92.800781-31.601562h-.296876c-41.101562.101562-79.402343 16.101562-107.703124 45.101562-27.199219 28-42.898438 65.699219-44.398438 107l262.898438-.5c-11.601563-19.511719-17.71875-41.796875-17.699219-64.5zm0 0" />
            <path d="m259.449219 266.5v55.800781c.046875 44.824219 26.617187 85.371094 67.699219 103.300781l8.800781 3.898438 10.300781-4.5c41.875-17.535156 69.121094-58.503906 69.101562-103.898438v-54.601562l-79.101562-42.199219zm122.800781 35c2.425781 2.984375 1.980469 7.367188-1 9.800781l-52.800781 42.898438c-1.230469 1.035156-2.789063 1.601562-4.398438 1.601562-2.058593.019531-4.011719-.898437-5.300781-2.5l-22.699219-26.5c-2.515625-2.957031-2.15625-7.386719.800781-9.902343 2.953126-2.511719 7.386719-2.152344 9.898438.800781l18.199219 21.300781 47.5-38.601562c3.027343-2.34375 7.367187-1.855469 9.800781 1.101562zm0 0" /></svg>

        </button>

        <button class="h-12 bg-blue w-full text-white">
          CREATE AN ACCOUNT
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  MESSAGE_TYPES
} from '@/utils'

export default {
  name: 'Login',
  data () {
    return {
      showPassword: false,
      loadingForm: false,
      email: '',
      password: '',
      displayMessage: '',
      displayMessageType: MESSAGE_TYPES.info,
      shouldDisplayMessage: false,
      reRoutePath: '',
      MESSAGE_TYPES: MESSAGE_TYPES
    }
  },
  computed: {
    loadingButtonClass () {
      return {
        loading: this.loadingForm
      }
    },
    alertClass () {
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
  created () {
    this.checkLoginPayload()
  },
  methods: {
    checkLoginPayload () {
      const loginPayload = this.$store.state.layout.login
      if (!loginPayload.state) return

      this.displayMessage = loginPayload.message
      this.displayMessageType = loginPayload.type
      this.reRoutePath = loginPayload.route
      this.shouldDisplayMessage = loginPayload.state

      this.$store.commit('CLEAR_LOGIN_DATA')
    },
    login () {
      if (this.loadingForm) return false
      this.shouldDisplayMessage = false

      this.validateForm(async state => {
        if (!state) return false
        this.loadingForm = true

        const email = this.email
        const password = this.password

        const path = 'authentication'

        try {
          const response = await this.$http.login(path, {
            email,
            password
          })

          this.$store.commit('SET_TOKEN', response.auth_token)

          sessionStorage.setItem('auth_token', response.auth_token)
          sessionStorage.setItem('email', email)

          const route = this.reRoutePath || 'home'
          this.$router.replace({
            name: route
          })
        } catch (err) {
          this.loadingForm = false
          this.displayMessage = err.status === 401
            ? 'Invalid email and password provided.'
            : 'There was an error processing your request.'
          this.displayMessageType = MESSAGE_TYPES.error
          this.shouldDisplayMessage = true
        } finally {}
      })
    }
  }
}

</script>
