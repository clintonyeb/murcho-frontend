<template>
  <div>
    <div class="container mx-auto md:p-20 sm:p-12 bg-pattern">

      <div class="mb-4">
        <img src="https://s3.ap-south-1.amazonaws.com/murch-assets/murcho_color.png" alt="Murch Logo" class="w-64">
      </div>

      <div class="mt-16 mb-2 text-grey-dark font-bold text-xl">
        Forgotten Your Password ?
      </div>

      <div class="mb-8 mt-4 text-grey-dark">
        Enter your email below, and we'll send you a Reset Link
      </div>

      <div class="mt-16">
        <div class="control mb-4 mt-4 h-16">
          <div class="h-12 inline-flex border max-w-full w-full rounded-sm relative" :class="getInputColor('Email')">
            <button class="border border-l-0 border-t-0 border-b-0 border-grey-light p-1 h-12 w-12">

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
          <p class="text-red-light text-xs ml-12 italic pt-1" v-show="getInputState('Email')">
            {{getInputErrorMessage('Email')}}
          </p>
        </div>

      </div>

      <div class="mt-4 mb-4 inline-flex justify-between w-full">
        <button class="inline-flex items-center justify-center p-1 h-12 bg-blue rounded-sm w-32 text-white shadow-md w-full"
          @click="login">
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

      <div class="mt-12 text-center">
        <a style="line-height: 3;" class="cursor-pointer text-grey-dark hover:text-blue-light underline" @click="$emit('login')">
          Remembered your Password?
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Forgotten',
  data () {
    return {
      loadingForm: false,
      email: ''
    }
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
    getInputErrorMessage (name) {
      return this.errors.first(name)
    },
    getInputColor (name) {
      return this.getInputState(name) ? 'border-red-light' : 'border-grey-light'
    },
    getInputState (name) {
      return this.errors.has(name)
    },
    login () {
      if (this.loadingForm) return false

      this.validateForm(async state => {
        if (!state) return false
        this.loadingForm = true

        const email = this.email
        const password = this.password

        const path = 'authentication'
        const url = this.$http.url(path)

        try {
          const response = await this.$http.login(url, {
            email,
            password
          })

          this.$store.commit('SET_TOKEN', response.auth_token)

          sessionStorage.setItem('auth_token', response.auth_token)
          sessionStorage.setItem('email', email)

          const route = this.reRoutePath || 'members'
          this.$router.replace({
            name: route
          })
        } catch (err) {
          this.loadingForm = false
          this.displayMessage = err.status === 401 ? 'Invalid email and password provided.'
            : 'There was an error processing your request.'
          this.displayMessageType = MESSAGE_TYPES.error
          this.shouldDisplayMessage = true
        } finally {}
      })
    }
  }
}

</script>
