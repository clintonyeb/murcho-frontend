<template>
  <div class="w-full lg:h-screen font-sans">
    <page-nav></page-nav>
    <div class="container mx-auto">
      <div v-if="message.length" class="lg:mt-8 mt-4 flex items-center justify-center flex-wrap">
        <p v-html="icon" class="text-center w-full"></p>
        <div class="my-8 text-grey-dark font-medium text-2xl text-center w-full">
          {{message}}
        </div>
      </div>
      <div v-if="loadingForm" class="w-full">
        <div class="flex flex-wrap w-full items-center justify-center lg:mt-8 mt-4">
          <svg class="spinner h-24 w-24 text-blue-light fill-current text-center" version="1.1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 26.349 26.35" style="enable-background:new 0 0 26.349 26.35;"
            xml:space="preserve">
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

          <div class="my-8 text-grey-dark font-medium text-2xl text-center w-full">
            Please wait, validating email...
          </div>

        </div>
      </div>

      <p class="mt-8 text-center" v-if="message.length">
        <router-link :to="{name: 'home'}" class="inline-flex items-center text-blue-light no-underline hover:text-blue">
          Go to website
          <svg aria-hidden="true" data-prefix="fas" data-icon="hand-point-right" class="ml-2 h-6 w-6 fill-current animated fadeIn"
            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M512 199.652c0 23.625-20.65 43.826-44.8 43.826h-99.851c16.34 17.048 18.346 49.766-6.299 70.944 14.288 22.829 2.147 53.017-16.45 62.315C353.574 425.878 322.654 448 272 448c-2.746 0-13.276-.203-16-.195-61.971.168-76.894-31.065-123.731-38.315C120.596 407.683 112 397.599 112 385.786V214.261l.002-.001c.011-18.366 10.607-35.889 28.464-43.845 28.886-12.994 95.413-49.038 107.534-77.323 7.797-18.194 21.384-29.084 40-29.092 34.222-.014 57.752 35.098 44.119 66.908-3.583 8.359-8.312 16.67-14.153 24.918H467.2c23.45 0 44.8 20.543 44.8 43.826zM96 200v192c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V200c0-13.255 10.745-24 24-24h48c13.255 0 24 10.745 24 24zM68 368c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z"></path>
          </svg>
        </router-link>
      </p>

    </div>
  </div>
</template>

<script>
  const successIcon =
    `
  <svg version="1.1" class="h-24 text-blue-light fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 52 52" style="enable-background:new 0 0 52 52;" xml:space="preserve">
	<path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M40.495,17.329l-16,18
		C24.101,35.772,23.552,36,22.999,36c-0.439,0-0.88-0.144-1.249-0.438l-10-8c-0.862-0.689-1.002-1.948-0.312-2.811
		c0.689-0.863,1.949-1.003,2.811-0.313l8.517,6.813l14.739-16.581c0.732-0.826,1.998-0.9,2.823-0.166
		C41.154,15.239,41.229,16.503,40.495,17.329z"/>
</svg>
`;

  const errorIcon =
    `
  <svg version="1.1" class="h-24 text-blue-light fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
    props: ['email_token'],
    name: 'ValidateEmail',
    data() {
      return {
        loadingForm: true,
        message: '',
        icon: null
      }
    },
    created() {
      this.validateEmail()
    },
    methods: {
      async validateEmail() {
        this.loadingForm = true

        try {
          const path = 'confirm_email'
          const response = await this.$http.post(path, {
            token: this.email_token
          })

          this.message = 'Email address verification successful.'
          this.icon = successIcon

        } catch (err) {
          this.message = err.response ? JSON.parse(err.response).error :
            'There was an error processing your request.'
          this.icon = errorIcon
        } finally {
          this.loadingForm = false
        }
      }
    }
  }

</script>
