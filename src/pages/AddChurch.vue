<template>
  <div class="flex flex-wrap min-h-screen w-screen font-sans max-w-full" id="add-church">
    <div class="w-full lg:w-1/2 lg:min-h-screen bg-grey-lightest relative border-r-2 border-dashed bg-pattern" id="form-section">
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
            Add A Local Church to <span class="text-blue-dark underline">{{church.name}}</span>
          </div>
          <div class="mt-8">

            <form name="local-form" @submit.prevent="addLocal" data-vv-scope="local-form">
              <div class="control mb-4">
                <label class="block text-grey text-sm font-bold mb-2" for="Church Name">
                  Local Church Name
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
                  Local Church Location
                </label>
                <input type="text" placeholder="Enter Church Location" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2"
                  v-model="church_location" name="Church Location" tabindex="2" id="Church Location" :class="getInputColor('Church Location')">
                <p class="text-red-light text-xs  pt-1 animated shake h-4" v-show="getInputState('Church Location')">
                  {{getInputErrorMessage('Church Location')}}
                </p>
              </div>

              <div class="control mb-4 mt-4">
                <label class="block text-grey text-sm font-bold mb-2" for="Church Motto">
                  Additional Information
                </label>
                <input type="text" placeholder="Enter Church Motto" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2"
                  v-model="church_motto" name="Church Motto" tabindex="3" id="Church Motto" :class="getInputColor('Church Motto')">
                <p class="text-red-light text-xs  pt-1 animated shake h-4" v-show="getInputState('Church Motto')">
                  {{getInputErrorMessage('Church Motto')}}
                </p>
              </div>

              <div class="mt-4 mb-4 inline-flex justify-around lg:justify-end w-full">
                <button class="inline-flex items-center justify-center p-1 px-4 h-12 bg-blue rounded-sm text-white shadow-md"
                  type="submit">
                  ADD LOCAL CHURCH
                  <svg class="spinner ml-2 h-6 w-6 text-grey-light fill-current animated fadeIn" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 26.349 26.35" style="enable-background:new 0 0 26.349 26.35;"
                    xml:space="preserve" v-if="addingLocal">
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

            <div class="my-12" v-if="locals.length">
              <p class="is-dashed text-grey">
                <span>or</span>
              </p>
            </div>

            <button class="h-12 bg-blue-dark w-full text-white shadow-md rounded animated fadeIn" @click="finalize"
              v-if="locals.length">
              FINALIZE &amp; CREATE ACCOUNT
            </button>

          </div>

        </div>

      </div>
    </div>

    <div class="w-full lg:w-1/2 lg:min-h-screen bg-grey-lightest bg-pattern">
      <hr class="w-full lg:hidden border border-dotted border-grey-dark">

      <div class="">
        <div class="w-full lg:min-h-screen" v-if="locals.length < 1">
          <div class="container m-auto h-screen relative">
            <div class="absolute" style="top: 40%; left: 50%; transform: translate(-50%, -50%);">
              <h4 class="text-grey font-bold text-3xl text-center">
                This page is empty.
              </h4>
              <h4 class="text-grey text-xl text-center mt-4">
                Add at least one local Church to your Churches. You will be able to customize these churches later on.
              </h4>
            </div>
          </div>
        </div>

        <div v-else class="max-w-md container mx-auto lg:p-20 p-4">

          <div class="my-8">
            <h3 class="text-blue-light font-black text-2xl">List of Local Churches in {{church.name}}</h3>
            <p class="text-grey-dark mt-2 text-grey-dark text-xs">
              You don't have to add all local churches now. You will be able to add more churches later on.
            </p>
          </div>

          <div v-for="(local, index) in locals" :key="local.id" class="flex-col justify-between bg-white p-2 px-4 rounded shadow mt-2 relative">
            <div class="flex justify-between items-center">
              <p class="flex-grow text-grey-darkest text-xl text-blue">
                {{local.name}}
              </p>
              <div class="flex items-center">
                <svg @click="activeUserLocal = local.id" aria-hidden="true" data-prefix="fas" data-icon="user-plus"
                  class="mr-3 fill-current h-5 w-5 text-blue-light hover:text-blue cursor-pointer" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512" v-if="!local.user">
                  <path fill="currentColor" d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                </svg>
                <svg @click="removeLocal(local, index)" class="fill-current h-6 w-6 text-red bg-grey-lighter rounded-full p-1 hover:bg-grey-light"
                  role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" :class="local.removing ? 'spinner' : ''">
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"></path>
                </svg>
              </div>
            </div>

            <p class="mt-2">
              <span class="text-grey font-hairline mr-1">Location:</span> <span class="text-grey-darkest">{{local.location}}</span>
            </p>
            <p class="mt-2">
              <span class="text-grey font-hairline mr-1">Additional Information:</span> <span class="text-grey-darkest">
                {{local.motto || 'Not Specified'}}</span>
            </p>
            <p class="mt-2" v-if="local.user">
              <span class="text-grey font-hairline mr-1">User:</span> <span class="text-grey-darkest">
                {{local.user.email}}</span>
            </p>

            <hr class="border border-dotted my-6" v-if="activeUserLocal === local.id">

            <div class="max-w-md container mx-auto px-4" v-if="activeUserLocal === local.id">

              <div class="text-grey-dark">
                <p class="font-black text-lg">
                  Login Details
                </p>
                <p class="mt-2 text-grey-dark text-xs">
                  This user is your admin user. You will use his email and password to login to your account. You will
                  be able to manage your account after login.
                </p>
              </div>

              <form class="mt-8" name="user-form" @submit.prevent="addUser(local, index)" data-vv-scope="user-form">

                <div class="control mb-4">
                  <label class="block text-grey text-sm font-bold mb-2" for="Email Address">
                    Email Address
                  </label>
                  <input type="email" placeholder="Enter Email Address" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2"
                    v-model="email" name="Email address" v-validate="{required: true, email: true}" tabindex="7" id="Email address"
                    :class="getInputColor('Email address')" v-autofocus>
                  <p class="text-red-light text-xs  pt-1 animated shake h-4" v-show="getInputState('Email address')">
                    {{getInputErrorMessage('Email address')}}
                  </p>
                </div>

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

                <div class="mt-4 mb-4 flex justify-between w-full">
                  <button class="inline-flex items-center justify-center h-8 rounded-sm text-red underline" @click="cancelAddUser"
                    type="cancel">
                    CANCEL
                  </button>

                  <button class="inline-flex items-center justify-center p-1 px-4 h-8 bg-blue rounded-sm text-white shadow-md"
                    type="submit">
                    CREATE USER
                    <svg class="spinner ml-2 h-6 w-6 text-grey-light fill-current animated fadeIn" version="1.1" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 26.349 26.35" style="enable-background:new 0 0 26.349 26.35;"
                      xml:space="preserve" v-if="local.addingUser">
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

            </div>

          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import {
    MESSAGE_TYPES
  } from '@/utils'

  export default {
    name: 'AddChurch',
    props: ['church_id'],
    data() {
      return {
        activeUserLocal: null,
        locals: [],
        addingLocal: false,
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
        church: {}
      }
    },
    created() {
      if (!this.church_id) return this.$router.replace({
        name: 'signup-options'
      })

      this.getChurch()
    },
    metaInfo: {
      title: 'Add Churches',
      meta: [{
        name: 'description',
        content: 'Add Churches Page for the Murcho Platform. Add churches to your head church on the platform.'
      }]
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
      finalize() {
        this.$store.commit('SET_LOGIN_DATA', {
          message: 'Account successfully created.',
          type: MESSAGE_TYPES.info,
          route: null
        })

        return this.$router.replace({
          name: 'login'
        })
      },
      async getChurch() {
        try {
          let path = `churches/${this.decodeHash(this.church_id)}`
          this.church = await this.$http.get(path)
          this.getLocals()
        } catch (err) {
          this.displayMessage = err.status === 401 ?
            'Invalid email and password provided.' :
            'There was an error processing your request.'
          this.displayMessageType = MESSAGE_TYPES.error
          this.shouldDisplayMessage = true
        } finally {}
      },
      async addUser(local, index) {

        this.validateScope('user-form', async state => {
          console.log(state, 'state');

          if (!state) return false
          this.$set(this.locals[index], 'addingUser', true)

          try {
            const path = 'users'

            const user = await this.$http.post(path, {
              church_id: local.id,
              email: this.email,
              password: this.password,
              access_level: 'super_admin'
            })

            this.resetUser()
            this.activeUserLocal = null
            this.$set(this.locals[index], 'user', user)
          } catch (error) {} finally {
            this.$set(this.locals[index], 'addingUser', false)
          }

        })
      },
      cancelAddUser() {
        this.resetUser()
        this.activeUserLocal = null
      },
      resetUser() {
        this.email = ''
        this.password = ''
        this.confirm_password = ''
      },
      async getLocals() {
        try {
          let path = `get_local_churches/${this.church.id}`
          const churches = await this.$http.get(path)
          this.locals.concat(churches)
        } catch (err) {
          this.displayMessage = err.status === 401 ?
            'Invalid email and password provided.' :
            'There was an error processing your request.'
          this.displayMessageType = MESSAGE_TYPES.error
          this.shouldDisplayMessage = true
        } finally {}
      },
      resetLocal() {
        this.church_name = ''
        this.church_location = ''
        this.church_motto = ''
        this.church_photo = ''
      },
      async removeLocal(local, index) {

        this.$set(this.locals[index], 'removing', true)

        try {
          let path = `delete_local_church/${local.id}`
          const churches = await this.$http.delete(path)
          this.locals.splice(index, 1)
        } catch (err) {
          this.displayMessage = err.status === 401 ?
            'Invalid email and password provided.' :
            'There was an error processing your request.'
          this.displayMessageType = MESSAGE_TYPES.error
          this.shouldDisplayMessage = true
        } finally {}
      },
      addLocal() {
        if (this.addingLocal) return false
        this.shouldDisplayMessage = false

        this.validateScope('local-form', async state => {
          if (!state) return false
          this.addingLocal = true

          try {
            let path = 'churches'

            const church = await this.$http.post(path, {
              name: this.church_name,
              location: this.church_location,
              photo: this.church.photo,
              motto: this.church_motto,
              head_office_id: this.church.id
            })

            this.resetLocal()
            this.locals.unshift(church)

          } catch (err) {
            this.displayMessage = err.status === 401 ?
              'Invalid email and password provided.' :
              'There was an error processing your request.'
            this.displayMessageType = MESSAGE_TYPES.error
            this.shouldDisplayMessage = true
          } finally {
            this.addingLocal = false
          }

        })
      },
      submit() {
        if (this.loadingForm) return false
        this.shouldDisplayMessage = false

        this.validateForm(async state => {
          if (!state) return false
          this.loadingForm = true

          try {
            // create church

            let path = 'churches'

            const church = await this.$http.post(path, {
              name: this.church_name,
              location: this.church_location,
              photo: null, // TODO upload photo
              motto: this.church_motto
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
              message: 'Account successfully created.',
              type: MESSAGE_TYPES.info,
              route: null
            })

            return this.$router.replace({
              name: 'login'
            })
          } catch (err) {
            this.loadingForm = false
            this.displayMessage = err.status === 401 ?
              'Invalid email and password provided.' :
              'There was an error processing your request.'
            this.displayMessageType = MESSAGE_TYPES.error
            this.shouldDisplayMessage = true
          } finally {}
        })
      }
    }
  }

</script>
