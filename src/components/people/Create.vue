<template>
  <div class="w-full container mx-auto md:p-10 sm:p-8">
    <div class="w-full inline-flex">
      <div class="w-full control mr-1">
        <div>
          <label class="block text-grey text-sm font-bold mb-2" for="First Name">
            First Name
          </label>
          <input type="text" placeholder="Enter First Name" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2"
            v-model="first_name" name="First Name" v-validate="{required: true}" tabindex="1" v-autofocus id="First Name"
            :class="getInputColor('First Name')">
          <p class="text-red-light text-xs italic pt-1 animated shake h-4" v-show="getInputState('First Name')">
            {{getInputErrorMessage('First Name')}}
          </p>
        </div>
      </div>

      <div class="w-full control mb-1 ml-1">
        <div>
          <label class="block text-grey text-sm font-bold mb-2" for="Last Name">
            Last Name
          </label>
          <input type="text" placeholder="Enter Last Name" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2"
            v-model="last_name" name="Last Name" v-validate="{required: true}" tabindex="2" id="Last Name" :class="getInputColor('Last Name')">
          <p class="text-red-light text-xs italic pt-1 animated shake h-4" v-show="getInputState('Last Name')">
            {{getInputErrorMessage('Last Name')}}
          </p>
        </div>
      </div>

    </div>

    <div class="w-full inline-flex mt-4">
      <div class="w-full control mr-1">
        <div>
          <label class="block text-grey text-sm font-bold mb-2" for="Email Address">
            Email Address
          </label>
          <input type="email" placeholder="Enter Email Address" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2"
            v-model="email" name="Email Address" tabindex="3" id="Email Address" :class="getInputColor('Email Address')">
          <p class="text-red-light text-xs italic pt-1 animated shake h-4" v-show="getInputState('Email Address')">
            {{getInputErrorMessage('Email Address')}}
          </p>
        </div>
      </div>

      <div class="w-full control ml-1">
        <div>
          <label class="block text-grey text-sm font-bold mb-2" for="Phone Number">
            Phone Number
          </label>
          <input type="text" placeholder="Enter Phone Number" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2"
            v-model="phone_number" name="Phone Number" tabindex="4" id="Phone Number" :class="getInputColor('Phone Number')">
          <p class="text-red-light text-xs italic pt-1 animated shake h-4" v-show="getInputState('Phone Number')">
            {{getInputErrorMessage('Phone Number')}}
          </p>
        </div>
      </div>

    </div>

    <div class="w-full inline-flex mt-4">
      <div class="w-full control mr-1">
        <div>
          <label class="block text-grey text-sm font-bold mb-2" for="Date Joined">
            Date Person Joined
          </label>
          <input type="text" placeholder="Enter Date Person Joined" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2"
            name="Date Joined" tabindex="5" ref="date_joined" id="Date Joined" :class="getInputColor('Date Joined')">
          <p class="text-red-light text-xs italic pt-1 animated shake h-4" v-show="getInputState('Date Joined')">
            {{getInputErrorMessage('Date Joined')}}
          </p>
        </div>
      </div>

      <div class="w-full control ml-1">
        <div class="w-full">
          <label class="block text-grey text-sm font-bold mb-2" for="Membership Status">
            Membership Status
          </label>
          <select name="Membership Status" v-model="membership_status" class="w-full bg-white text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2"
            v-validate="{required: true}" tabindex="6" id="Membership Status" :class="getInputColor('Membership Status')">
            <option v-for="status in membershipStatuses" :key="status.id" :value="status.value">{{status.text}}</option>
          </select>
          <p class="text-red-light text-xs italic pt-1 animated shake" v-show="getInputState('Membership Status')">
            {{getInputErrorMessage('Membership Status')}}
          </p>
        </div>
      </div>

    </div>

    <div class="w-full inline-flex items-center mt-4">
      <div class="w-2/3 control mr-1">
        <div>
          <label class="block text-grey text-sm font-bold mb-2">
            Profile Photo
          </label>
          <div class="h-32 relative" :class="getInputColor('Profile Photo')">
            <input type="file" id="Profile Photo" placeholder="Upload Profile Photo" class="text-grey-darker is-custom"
              name="Profile Photo" tabindex="6" @change="photoUploaded" v-validate.continues="{image: true, ext: ['jpeg', 'jpg', 'png', 'svg']}"
              ref="avatar-input">
            <label class="cursor-pointer hover:shadow w-full h-24 bg-grey-lighter p-2 rounded-lg absolute inline-flex items-center justify-center text-grey hover:text-grey-dark"
              for="Profile Photo">
              Click to choose a photo
            </label>
            <p class="text-red-light text-xs italic animated shake absolute pin-b" v-show="getInputState('Profile Photo')">
              {{getInputErrorMessage('Profile Photo')}}
            </p>
          </div>
        </div>
      </div>

      <div class="w-1/3 control" v-if="photo">
        <div class="w-full flex-col items-center justify-center">
          <avatar :username="`${first_name} ${last_name}`" :src="photo" class="m-auto" :size="70" :rounded="false" ref="avatar" />
          <p class="text-xs text-grey hover:underline cursor-pointer mt-1 text-center hover:text-grey-dark" @click="photo = null"
            v-if="photo">
            Remove
          </p>
        </div>
      </div>

    </div>

    <div class="mt-8 mb-4 inline-flex justify-start w-full">
      <div class="w-full inline-flex justify-between items-center">
        <button class="inline-flex flex-auto items-center justify-center h-10 bg-blue rounded-sm text-white shadow-md mr-2"
          @click="submit">
          <svg version="1.1" class="h-6 w-6 fill-current mr-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
            <path d="M506.955,1.314c-3.119-1.78-6.955-1.75-10.045,0.078L313.656,109.756c-4.754,2.811-6.329,8.943-3.518,13.697c2.81,4.753,8.942,6.328,13.697,3.518l131.482-77.749L210.411,303.335L88.603,266.069l158.965-94c4.754-2.812,6.329-8.944,3.518-13.698c-2.81-4.753-8.943-6.33-13.697-3.518L58.91,260.392c-3.41,2.017-5.309,5.856-4.84,9.791s3.216,7.221,7.004,8.38l145.469,44.504L270.72,439.88c0.067,0.121,0.136,0.223,0.207,0.314c1.071,1.786,2.676,3.245,4.678,4.087c1.253,0.527,2.57,0.784,3.878,0.784c2.563,0,5.086-0.986,6.991-2.849l73.794-72.12l138.806,42.466c0.96,0.293,1.945,0.438,2.925,0.438c2.116,0,4.206-0.672,5.948-1.961C510.496,409.153,512,406.17,512,403V10C512,6.409,510.074,3.093,506.955,1.314z M271.265,329.23c-1.158,1.673-1.779,3.659-1.779,5.694v61.171l-43.823-79.765l193.921-201.21L271.265,329.23z M289.486,411.309v-62.867l48.99,14.988L289.486,411.309z M492,389.483l-196.499-60.116L492,45.704V389.483z" />
            <path d="M164.423,347.577c-3.906-3.905-10.236-3.905-14.143,0l-93.352,93.352c-3.905,3.905-3.905,10.237,0,14.143C58.882,457.024,61.441,458,64,458s5.118-0.976,7.071-2.929l93.352-93.352C168.328,357.815,168.328,351.483,164.423,347.577z" />
            <path d="M40.071,471.928c-3.906-3.903-10.236-3.903-14.142,0.001l-23,23c-3.905,3.905-3.905,10.237,0,14.143C4.882,511.024,7.441,512,10,512s5.118-0.977,7.071-2.929l23-23C43.976,482.166,43.976,475.834,40.071,471.928z" />
            <path d="M142.649,494.34c-1.859-1.86-4.439-2.93-7.069-2.93c-2.641,0-5.21,1.07-7.07,2.93c-1.86,1.86-2.93,4.43-2.93,7.07c0,2.63,1.069,5.21,2.93,7.07c1.86,1.86,4.44,2.93,7.07,2.93s5.21-1.07,7.069-2.93c1.86-1.86,2.931-4.44,2.931-7.07C145.58,498.77,144.51,496.2,142.649,494.34z" />
            <path d="M217.051,419.935c-3.903-3.905-10.233-3.905-14.142,0l-49.446,49.445c-3.905,3.905-3.905,10.237,0,14.142c1.953,1.953,4.512,2.929,7.071,2.929s5.118-0.977,7.071-2.929l49.446-49.445C220.956,430.172,220.956,423.84,217.051,419.935z" />
            <path d="M387.704,416.139c-3.906-3.904-10.236-3.904-14.142,0l-49.58,49.58c-3.905,3.905-3.905,10.237,0,14.143c1.953,1.952,4.512,2.929,7.071,2.929s5.118-0.977,7.071-2.929l49.58-49.58C391.609,426.377,391.609,420.045,387.704,416.139z" />
            <path d="M283.5,136.31c-1.86-1.86-4.44-2.93-7.07-2.93s-5.21,1.07-7.07,2.93c-1.859,1.86-2.93,4.44-2.93,7.08c0,2.63,1.07,5.2,2.93,7.06c1.86,1.87,4.44,2.93,7.07,2.93s5.21-1.06,7.07-2.93c1.859-1.86,2.93-4.43,2.93-7.06C286.43,140.75,285.36,138.17,283.5,136.31z" />
          </svg>
          <span class="font-bold">ADD PERSON</span>
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

        <button class="inline-flex flex-auto items-center justify-center h-10 rounded-sm text-red-light underline ml-2"
          @click="$emit('close')">
          <span class="font-bold">CANCEL</span>
        </button>

      </div>
    </div>

  </div>
</template>

<script>
import {
  tickIcon
} from '@/utils/icons'

import flatpickr from 'flatpickr'
import confirmDatePlugin from 'flatpickr/dist/plugins/confirmDate/confirmDate.js'
const dateFormat = 'EEEE, do; h:m a'
require('flatpickr/dist/flatpickr.min.css')

let dateJoinedComp = null

export default {
  name: 'Create',
  data () {
    return {
      loadingForm: false,
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      membership_status: 'member',
      photo: '',
      membershipStatuses: [{
        text: 'Member',
        value: 'member'
      },
      {
        text: 'Guest',
        value: 'guest'
      },
      {
        text: 'Former Member',
        value: 'former_member'
      }
      ]
    }
  },
  mounted () {
    this.initializeDatePickers()
  },
  beforeDestroy () {
    if (dateJoinedComp !== null) dateJoinedComp.destroy()
  },
  methods: {
    photoUploaded (event) {
      const file = event.target.files && event.target.files[0]

      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.photo = e.target.result
        }

        reader.readAsDataURL(file)
      } else {
        this.photo = null
      }
    },
    submit () {
      if (this.loadingForm) return false
      this.validateForm(state => {
        if (!state) return false

        this.loadingForm = true

        this.uploadPhoto(async (err, fileURL) => {
          if (err) {
            return false
          }

          const fields = {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            phone_number: this.phone_number,
            date_joined: dateJoinedComp.selectedDates[0],
            membership_status: this.membership_status,
            photo: fileURL || null,
            thumbnail: fileURL || null
          }

          const path = `people`
          const url = this.$http.url(path)

          try {
            const response = await this.$http.post(url, fields, this.authToken)
            this.$emit('created', response)
          } catch (err) {
            console.log(err)
          } finally {
            this.loadingForm = false
          }
        })
      })
    },
    getSignedURL (fileName, contentType) {
      return new Promise(async (resolve, reject) => {
        const path = 'sign_url_for_upload'
        const url = this.$http.url(path)

        try {
          const response = await this.$http.post(
            url, {
              file_name: fileName,
              content_type: contentType
            },
            this.authToken
          )
          resolve(response)
        } catch (err) {
          reject(err)
        } finally {}
      })
    },
    getFileURL (name) {
      return `https://s3.ap-south-1.amazonaws.com/murch-app/${name}`
    },
    uploadFile (file) {
      return new Promise(async (resolve, reject) => {
        try {
          const data = await this.getSignedURL(file.name, file.type)

          const request = new XMLHttpRequest()
          request.open('PUT', data.signed_url, true)
          request.setRequestHeader('Content-Type', file.type)
          request.setRequestHeader('Access-Control-Allow-Origin', '*')
          request.setRequestHeader('Accept', 'application/json')

          request.onload = () => {
            if (request.status >= 200 && request.status < 300) {
              resolve(this.getFileURL(data.file_name))
            } else {
              reject('Error uploading file')
            }
          }

          request.send(file)
        } catch (error) {
          reject(error)
        }
      })
    },
    async uploadPhoto (cb) {
      const file = this.$refs['avatar-input'].files && this.$refs['avatar-input'].files[0]

      if (file) {
        try {
          const file_url = await this.uploadFile(file)
          cb(null, file_url)
        } catch (error) {
          cb(error)
        }
      } else {
        cb(null, false)
      }
    },
    initializeDatePickers () {
      const defaultDate = new Date()

      dateJoinedComp = flatpickr(this.$refs['date_joined'], {
        dateFormat: 'J M, Y',
        defaultDate: defaultDate,
        plugins: [new confirmDatePlugin({
          confirmIcon: tickIcon,
          confirmText: 'Done',
          showAlways: true
        })]
      })
    },
  },
  watch: {
    person (val) {
      this.setup(val)
    }
  }
}

</script>
