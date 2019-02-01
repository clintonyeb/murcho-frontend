<template>
  <div class="w-full">
    <h3 class="text-blue-light font-black text-2xl text-center">Personal Information</h3>

    <p class="mt-2 text-grey text-center">
      Enter personal information of the church member.
    </p>

    <div class="mt-8 flex flex-wrap items-center justify-between">
      <div class="control mb-4 w-full">
        <label class="block text-grey text-sm font-bold mb-2" for="Church Name">
          Member ID: <span class="text-grey-dark text-lg">{{person.member_id}}</span>
        </label>
      </div>

      <div class="control mb-4 w-1/2 pr-1">
        <label class="block text-grey text-sm font-bold mb-2" for="First Name">
          First Name: <span class="text-grey-dark text-lg">{{person.first_name}}</span>
        </label>
      </div>

      <div class="control mb-4 w-1/2 pl-1">
        <label class="block text-grey text-sm font-bold mb-2" for="Last Name">
          Last Name: <span class="text-grey-dark text-lg">{{person.last_name}}</span>
        </label>
      </div>

      <div class="control mb-4 w-full">
        <label class="block text-grey text-sm font-bold mb-2" for="Other Name">
          Other Name(s)
        </label>
        <input type="text" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2" v-model="other_names"
          name="Other Name" tabindex="1" v-autofocus id="Other Name" :class="getInputColor('Other Name')">
        <p class="text-red-light text-xs  pt-1 animated shake h-4" v-show="getInputState('Other Name')">
          {{getInputErrorMessage('Other Name')}}
        </p>
      </div>

      <div class="control mb-4 w-full">
        <label class="block text-grey text-sm font-bold mb-2" for="Date of Birth">
          Date of Birth
        </label>
        <input type="text" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2" v-model="date_of_birth"
          name="Date of Birth" tabindex="2" id="Date of Birth" :class="getInputColor('Date of Birth')" pattern="\d{1,2}/\d{1,2}/\d{4}"
          v-validate="{ regex: /\d{1,2}\/\d{1,2}\/\d{4}/, validateDate: true }">
        <p class="text-red-light text-xs  pt-1 animated shake h-4" v-if="getInputState('Date of Birth')">
          {{getInputErrorMessage('Date of Birth')}}
        </p>
        <p class="text-grey text-xs  pt-1 animated shake h-4" v-else>
          Use pattern: 'DD/MM/YYYY', example: 01/02/2016
        </p>
      </div>

      <div class="control mb-4 w-1/2 pr-1">
        <label class="block text-grey text-sm font-bold mb-2" for="Day Born">
          Age: <span class="text-grey-dark text-lg">{{personAge || 'Not specified'}}</span>
        </label>
      </div>

      <div class="control mb-4 w-1/2 pl-1">
        <label class="block text-grey text-sm font-bold mb-2" for="Day Born">
          Day Born: <span class="text-grey-dark text-lg">{{personDayBorn || 'Not specified'}}</span>
        </label>
      </div>

      <div class="w-full control mb-4 flex items-center justify-between">
        <label class="block text-grey text-sm font-bold mb-2 w-1/2" for="Gender">
          Gender:
        </label>
        <div class="inline-flex items-center justify-start w-1/2 relative" :class="getInputColor('Gender')">
          <label class="radio-container radio mr-3">
            <input type="radio" name="Gender Male" id="Gender" value="male" v-model="gender" class="text-grey">
            <span class="checkmark"></span>
            <span class="text-grey-dark text-lg ml-1 text">Male</span>
          </label>
          <label class="radio-container radio ml-3">
            <input type="radio" name="Gender Female" value="female" v-model="gender">
            <span class="checkmark"></span>
            <span class="text-grey-dark text-lg ml-1 text">Female</span>
          </label>
        </div>
        <p class="text-red-light text-xs  pt-1 animated shake" v-show="getInputState('Gender')">
          {{getInputErrorMessage('Gender')}}
        </p>
      </div>

      <div class="control mb-4 w-full">
        <label class="block text-grey text-sm font-bold mb-2" for="House Number">
          House Number
        </label>
        <input type="text" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2" v-model="house_number"
          name="House Number" id="House Number" :class="getInputColor('House Number')">
        <p class="text-red-light text-xs  pt-1 animated shake h-4" v-show="getInputState('House Number')">
          {{getInputErrorMessage('House Number')}}
        </p>
      </div>

      <div class="control mb-4 w-full">
        <label class="block text-grey text-sm font-bold mb-2" for="Street Name">
          Street Name
        </label>
        <input type="text" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2" v-model="street_name"
          name="Street Name" id="Street Name" :class="getInputColor('Street Name')">
        <p class="text-red-light text-xs  pt-1 animated shake h-4" v-show="getInputState('Street Name')">
          {{getInputErrorMessage('Street Name')}}
        </p>
      </div>

      <div class="control mb-4 w-full">
        <label class="block text-grey text-sm font-bold mb-2" for="Location">
          Location
        </label>
        <input type="text" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2" v-model="location"
          name="Location" id="Location" :class="getInputColor('Location')">
        <p class="text-red-light text-xs  pt-1 animated shake h-4" v-show="getInputState('Location')">
          {{getInputErrorMessage('Location')}}
        </p>
      </div>

      <div class="control mb-4 w-full">
        <label class="block text-grey text-sm font-bold mb-2" for="HomeTown Address">
          HomeTown Address
        </label>
        <input type="text" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2" v-model="hometown"
          name="HomeTown Address" id="HomeTown Address" :class="getInputColor('HomeTown Address')">
        <p class="text-red-light text-xs  pt-1 animated shake h-4" v-show="getInputState('HomeTown Address')">
          {{getInputErrorMessage('HomeTown Address')}}
        </p>
      </div>

      <div class="control mb-4 w-full">
        <label class="block text-grey text-sm font-bold mb-2" for="Education Level">
          Education Level
        </label>
        <input type="text" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2" v-model="education_level"
          name="Education Level" id="Education Level" :class="getInputColor('Education Level')">
        <p class="text-red-light text-xs  pt-1 animated shake h-4" v-show="getInputState('Education Level')">
          {{getInputErrorMessage('Education Level')}}
        </p>
      </div>

      <div class="control mb-4 w-full">
        <label class="block text-grey text-sm font-bold mb-2" for="Occupation">
          Occupation
        </label>
        <input type="text" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2" v-model="occupation"
          name="Occupation" id="Occupation" :class="getInputColor('Occupation')">
        <p class="text-red-light text-xs  pt-1 animated shake h-4" v-show="getInputState('Occupation')">
          {{getInputErrorMessage('Occupation')}}
        </p>
      </div>

      <div class="control mb-4 w-full">
        <label class="block text-grey text-sm font-bold mb-2" for="Cell Phone I">
          Cell Phone I
        </label>
        <input type="text" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2" v-model="cell_phone_1"
          name="Cell Phone I" id="Cell Phone I" :class="getInputColor('Cell Phone I')">
        <p class="text-red-light text-xs  pt-1 animated shake h-4" v-show="getInputState('Cell Phone I')">
          {{getInputErrorMessage('Cell Phone I')}}
        </p>
      </div>

      <div class="control mb-4 w-full">
        <label class="block text-grey text-sm font-bold mb-2" for="Cell Phone II">
          Cell Phone II
        </label>
        <input type="text" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2" v-model="cell_phone_2"
          name="Cell Phone II" id="Cell Phone II" :class="getInputColor('Cell Phone II')">
        <p class="text-red-light text-xs  pt-1 animated shake h-4" v-show="getInputState('Cell Phone II')">
          {{getInputErrorMessage('Cell Phone II')}}
        </p>
      </div>

      <div class="control mb-4 w-full">
        <label class="block text-grey text-sm font-bold mb-2" for="Email Address">
          Email Address
        </label>
        <input type="email" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2" v-model="email"
          name="Email Address" id="Email Address" :class="getInputColor('Email Address')">
        <p class="text-red-light text-xs  pt-1 animated shake h-4" v-show="getInputState('Email Address')">
          {{getInputErrorMessage('Email Address')}}
        </p>
      </div>


      <div class="w-full inline-flex items-center mt-4">
        <div class="w-2/3 control mr-1">
          <div>
            <label class="block text-grey text-sm font-bold mb-2">
              Profile Photo
            </label>
            <div class="h-32 relative" :class="getInputColor('Profile Photo')">
              <input type="file" id="Profile Photo" placeholder="Upload Profile Photo" class="text-grey-darker is-custom"
                name="Profile Photo" @change="photoUploaded" v-validate.continues="{image: true, ext: ['jpeg', 'jpg', 'png', 'svg']}"
                ref="avatar-input">
              <label class="cursor-pointer hover:shadow w-full h-24 bg-grey-lighter p-2 rounded-lg absolute inline-flex items-center justify-center text-grey hover:text-grey-dark"
                for="Profile Photo">
                Click to choose a photo
              </label>
              <p class="text-red-light text-xs  animated shake absolute pin-b" v-show="getInputState('Profile Photo')">
                {{getInputErrorMessage('Profile Photo')}}
              </p>
            </div>
          </div>
        </div>

        <div class="w-1/3 control" v-if="photo">
          <div class="w-full flex-col items-center justify-center">
            <avatar :username="`${first_name} ${last_name}`" :src="photo" class="m-auto" :size="70" :rounded="false"
              ref="avatar" />
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
          @click="saveInfo">
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
          <span class="font-bold">SAVE AND CONTINUE</span>
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
          @click="$emit('cancel')">
          <span class="font-bold">CANCEL</span>
        </button>

      </div>
    </div>

    </div>
  </div>
</template>

<script>
  import {
    parse,
    differenceInYears,
    format
  } from 'date-fns'

  const dateFormat = 'dd/MM/yyyy'
  const today = new Date()
  const invalidDate = 'Invalid Date'

  export default {
    name: 'PersonalInfo',
    props: ['person'],
    data() {
      return {
        loadingForm: false,
        other_names: '',
        date_of_birth: '',
        place_pf_birth: '',
        gender: '',
        house_number: '',
        street_name: '',
        location: '',
        hometown: '',
        hometown_address: '',
        education_level: '',
        occupation: '',
        cell_phone_1: '',
        cell_phone_2: '',
        email: '',
        photo: ''
      }
    },
    computed: {
      dateOfBirth() {
        const date = this.date_of_birth

        if (!date) return ''
        const parsed = parse(date, dateFormat, today)
        if (parsed.toString() === invalidDate) return ''
        return parsed
      },
      personAge() {
        if (!this.dateOfBirth) return 0
        return `${differenceInYears(today, this.dateOfBirth)} years old.`
      },
      personDayBorn() {
        if (!this.dateOfBirth) return ''
        const form = "EEEE"
        return `Born on: ${format(this.dateOfBirth, form, {awareOfUnicodeTokens: true})}.`
      }
    },
    methods: {
      saveInfo() {
        if (this.loadingForm) return false
        this.validateForm(state => {
          if (!state) return false

          this.loadingForm = true

          this.uploadPhoto(async (err, fileURL) => {
            if (err) {
              return false
            }

            const fields = {
              person_id: this.person.id,
              other_names: this.other_names,
              date_of_birth: this.date_of_birth,
              place_pf_birth: this.place_pf_birth,
              age: this.personAge,
              day_born: this.personDayBorn,
              gender: this.gender,
              house_number: this.house_number,
              street_name: this.street_name,
              location: this.location,
              hometown: this.hometown,
              hometown_address: this.hometown_address,
              education_level: this.education_level,
              occupation: this.occupation,
              cell_phone_1: this.cell_phone_1,
              cell_phone_2: this.cell_phone_2,
              email: this.email,
              photo: fileURL || null,
            }

            const path = `update_person_details`

            try {
              const response = await this.$http.post(path, fields, this.authToken)
              this.$emit('updated', {
                response: response,
                current: 'personal',
                next: 'church',
              })
            } catch (err) {
              console.log(err)
            } finally {
              this.loadingForm = false
            }
          })
        })
      },
      photoUploaded(event) {
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
      async uploadPhoto(cb) {
        const file = this.$refs['avatar-input'].files && this.$refs['avatar-input'].files[0]

        if (file) {
          try {
            const file_url = await this.$http.uploadFile(file)
            cb(null, file_url)
          } catch (error) {
            cb(error)
          }
        } else {
          cb(null, false)
        }
      },
    },
  }

</script>

<style>

</style>
