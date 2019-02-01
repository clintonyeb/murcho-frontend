<template>
  <div class="w-full">
    <h3 class="text-blue-light font-black text-2xl text-center">Church Information</h3>

    <p class="mt-2 text-grey text-center">
      Enter church information of the church member.
    </p>

    <div class="mt-8 flex flex-wrap items-center justify-between">
      <div class="control mb-4 w-full">
        <label class="block text-grey text-sm font-bold mb-2" for="Date of Baptism">
          Date of Baptism
        </label>
        <input type="text" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2" v-model="date_of_baptism"
          name="Date of Baptism" tabindex="1" id="Date of Baptism" :class="getInputColor('Date of Baptism')" pattern="\d{1,2}/\d{1,2}/\d{4}"
          v-validate="{ regex: /\d{1,2}\/\d{1,2}\/\d{4}/, validateDate: true }">
        <p class="text-red-light text-xs  pt-1 animated shake h-4" v-if="getInputState('Date of Baptism')">
          {{getInputErrorMessage('Date of Baptism')}}
        </p>
        <p class="text-grey text-xs  pt-1 animated shake h-4" v-else>
          Use pattern: 'DD/MM/YYYY', example: 01/02/2016
        </p>
      </div>

      <div class="control mb-4 w-full">
        <label class="block text-grey text-sm font-bold mb-2" for="Place of Baptism">
          Place of Baptism
        </label>
        <input type="text" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2" v-model="place_of_baptism"
          name="Place of Baptism" id="Place of Baptism" :class="getInputColor('Place of Baptism')">
        <p class="text-red-light text-xs  pt-1 animated shake h-4" v-show="getInputState('Place of Baptism')">
          {{getInputErrorMessage('Place of Baptism')}}
        </p>
      </div>

      <div class="control mb-4 w-full">
        <label class="block text-grey text-sm font-bold mb-2" for="Minister">
          Pastor or Minister
        </label>
        <input type="text" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2" v-model="pastor_or_ministry"
          name="Minister" id="Minister" :class="getInputColor('Minister')">
        <p class="text-red-light text-xs  pt-1 animated shake h-4" v-show="getInputState('Minister')">
          {{getInputErrorMessage('Minister')}}
        </p>
      </div>

      <div class="control mb-4 w-full">
        <label class="block text-grey text-sm font-bold mb-2" for="Confirmation Date">
          Confirmation Date
        </label>
        <input type="text" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2" v-model="date_of_baptism"
          name="Confirmation Date" id="Confirmation Date" :class="getInputColor('Confirmation Date')" pattern="\d{1,2}/\d{1,2}/\d{4}"
          v-validate="{ regex: /\d{1,2}\/\d{1,2}\/\d{4}/, validateDate: true }">
        <p class="text-red-light text-xs  pt-1 animated shake h-4" v-if="getInputState('Confirmation Date')">
          {{getInputErrorMessage('Confirmation Date')}}
        </p>
        <p class="text-grey text-xs  pt-1 animated shake h-4" v-else>
          Use pattern: 'DD/MM/YYYY', example: 01/02/2016
        </p>
      </div>

      <div class="control mb-4 w-full">
        <label class="block text-grey text-sm font-bold mb-2" for="Place of Confirmation">
          Place of Confirmation
        </label>
        <input type="text" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2" v-model="place_of_confirmation"
          name="Place of Confirmation" id="Place of Confirmation" :class="getInputColor('Place of Confirmation')">
        <p class="text-red-light text-xs  pt-1 animated shake h-4" v-show="getInputState('Place of Confirmation')">
          {{getInputErrorMessage('Place of Confirmation')}}
        </p>
      </div>

      <div class="w-full control mb-4 flex items-center justify-between">
        <label class="block text-grey text-sm font-bold mb-2 w-1/2" for="Communicant Status">
          Communicant Status:
        </label>
        <div class="inline-flex items-center justify-start w-1/2 relative" :class="getInputColor('Communicant Status')">
          <label class="radio-container radio mr-3">
            <input type="radio" name="Communicant Status True" id="Communicant Status" :value="true" v-model="communicant_status"
              class="text-grey">
            <span class="checkmark"></span>
            <span class="text-grey-dark text-lg ml-1 text">Communicant</span>
          </label>
          <label class="radio-container radio ml-3">
            <input type="radio" name="Communicant Status False" :value="false" v-model="communicant_status">
            <span class="checkmark"></span>
            <span class="text-grey-dark text-lg ml-1 text">Non Communicant</span>
          </label>
        </div>
        <p class="text-red-light text-xs  pt-1 animated shake" v-show="getInputState('Communicant Status')">
          {{getInputErrorMessage('Communicant Status')}}
        </p>
      </div>

      <div class="control mb-4 w-full">
        <label class="block text-grey text-sm font-bold mb-2" for="Generational Group">
          Generational Group
        </label>
        <input type="text" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2" v-model="generational_group"
          name="Generational Group" id="Generational Group" :class="getInputColor('Generational Group')">
        <p class="text-red-light text-xs  pt-1 animated shake h-4" v-show="getInputState('Generational Group')">
          {{getInputErrorMessage('Generational Group')}}
        </p>
      </div>

      <div class="control mb-4 w-full">
        <label class="block text-grey text-sm font-bold mb-2" for="Interest Group">
          Interest Group
        </label>
        <input type="text" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2" v-model="interest_group"
          name="Interest Group" id="Interest Group" :class="getInputColor('Interest Group')">
        <p class="text-red-light text-xs  pt-1 animated shake h-4" v-show="getInputState('Interest Group')">
          {{getInputErrorMessage('Interest Group')}}
        </p>
      </div>

      <div class="control mb-4 w-full">
        <label class="block text-grey text-sm font-bold mb-2" for="Special Interest">
          Special Interest
        </label>
        <input type="text" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2" v-model="special_interests"
          name="Special Interest" id="Special Interest" :class="getInputColor('Special Interest')">
        <p class="text-red-light text-xs  pt-1 animated shake h-4" v-if="getInputState('Special Interest')">
          {{getInputErrorMessage('Special Interest')}}
        </p>
        <p class="text-grey text-xs  pt-1 animated shake h-4" v-else>
          Example: Preaching
        </p>
      </div>

      <div class="control mb-4 w-full">
        <label class="block text-grey text-sm font-bold mb-2" for="Church Position">
          Position In Church
        </label>
        <input type="text" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2" v-model="position_in_church"
          name="Church Position" id="Church Position" :class="getInputColor('Church Position')">
        <p class="text-red-light text-xs  pt-1 animated shake h-4" v-if="getInputState('Church Position')">
          {{getInputErrorMessage('Church Position')}}
        </p>
      </div>

      <div class="control mb-4 w-full">
        <label class="block text-grey text-sm font-bold mb-2" for="Position Period">
          Position Period
        </label>
        <input type="text" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2" v-model="church_position_period"
          name="Position Period" id="Position Period" :class="getInputColor('Position Period')">
        <p class="text-red-light text-xs  pt-1 animated shake h-4" v-if="getInputState('Position Period')">
          {{getInputErrorMessage('Position Period')}}
        </p>
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
            <span class="font-bold">SUBMIT</span>
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

          <button class="inline-flex flex-auto items-center justify-center h-10 rounded-sm text-yellow-light underline ml-2"
            @click="goBack">
            <span class="font-bold">PREVIOUS</span>
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
    name: 'ChurchInfo',
    props: ['person', 'personDetails'],
    data() {
      return {
        loadingForm: false,
        date_of_baptism: '',
        place_of_baptism: '',
        pastor_or_ministry: '',
        confirmation_date: '',
        place_of_confirmation: '',
        minister: '',
        communicant_status: '',
        generational_group: '',
        interest_group: '',
        special_interests: '',
        position_in_church: '',
        church_position_period: ''
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
    created(){
      this.setPersonDetails()
    },
    watch: {
      personDetails(){
        this.setPersonDetails()
      }
    },
    methods: {
      setPersonDetails(){
        this.date_of_baptism = this.personDetails.date_of_baptism
        this.place_of_baptism = this.personDetails.place_of_baptism
        this.pastor_or_ministry = this.personDetails.pastor_or_ministry
        this.confirmation_date = this.personDetails.confirmation_date
        this.place_of_confirmation = this.personDetails.place_of_confirmation
        this.minister = this.personDetails.minister
        this.communicant_status = this.personDetails.communicant_status
        this.generational_group = this.personDetails.generational_group
        this.interest_group = this.personDetails.interest_group
        this.special_interests = this.personDetails.special_interests
        this.position_in_church = this.personDetails.position_in_church
        this.church_position_period = this.personDetails.church_position_period
      },
      saveInfo() {
        if (this.loadingForm) return false
        this.validateForm(async state => {
          if (!state) return false

          this.loadingForm = true

          const fields = {
            person_id: this.person.id,
            date_of_baptism: this.date_of_baptism,
            place_of_baptism: this.place_of_baptism,
            pastor_or_ministry: this.pastor_or_ministry,
            confirmation_date: this.confirmation_date,
            place_of_confirmation: this.place_of_baptism,
            communicant_status: this.communicant_status,
            generational_group: this.generational_group,
            interest_group: this.interest_group,
            special_interests: this.special_interests,
            position_in_church: this.position_in_church,
            church_position_period: this.church_position_period
          }

          const path = `update_person_details`

          try {
            const response = await this.$http.post(path, fields, this.authToken)
            this.$emit('updated', {
              response: response,
              current: 'church',
              next: 'family',
            })
          } catch (err) {
            console.log(err)
          } finally {
            this.loadingForm = false
          }
        })
      },
      goBack() {
        this.$emit('previous', {
          current: 'church',
          previous: 'personal'
        })
      }
    },
  }

</script>

<style>

</style>
