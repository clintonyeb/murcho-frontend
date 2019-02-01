<template>
  <div class="w-full">
    <h3 class="text-blue-light font-black text-2xl text-center">Church Information</h3>

    <p class="mt-2 text-grey text-center">
      Enter church information of the church member.
    </p>

    <div class="mt-8 flex flex-wrap items-center justify-between">
      <div class="control mb-4 w-full">
        <label class="block text-grey text-sm font-bold mb-2" for="Name of Mother">
          Name of Mother
        </label>
        <input type="text" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2" v-model="name_of_mother"
          name="eName of Mother" id="Name of Mother" :class="getInputColor('Name of Mother')">
        <p class="text-red-light text-xs  pt-1 animated shake h-4" v-show="getInputState('Name of Mother')">
          {{getInputErrorMessage('Name of Mother')}}
        </p>
      </div>

      <div class="control mb-4 w-full">
        <label class="block text-grey text-sm font-bold mb-2" for="Name of Father">
          Name of Father
        </label>
        <input type="text" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2" v-model="name_of_father"
          name="Name of Father" id="Name of Father" :class="getInputColor('Name of Father')">
        <p class="text-red-light text-xs  pt-1 animated shake h-4" v-show="getInputState('Name of Father')">
          {{getInputErrorMessage('Name of Father')}}
        </p>
      </div>

      <div class="control mb-4 w-full">
        <label class="block text-grey text-sm font-bold mb-2" for="Marital Status">
          Marital Status
        </label>
        <input type="text" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2" v-model="marital_status"
          name="Marital Status" id="Marital Status" :class="getInputColor('Marital Status')">
        <p class="text-red-light text-xs  pt-1 animated shake h-4" v-show="getInputState('Marital Status')">
          {{getInputErrorMessage('Marital Status')}}
        </p>
      </div>

      <div class="control mb-4 w-full">
        <label class="block text-grey text-sm font-bold mb-2" for="Name of Spouse">
          Name of Spouse
        </label>
        <input type="text" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2" v-model="name_of_spouse"
          name="Name of Spouse" id="Name of Spouse" :class="getInputColor('Name of Spouse')">
        <p class="text-red-light text-xs  pt-1 animated shake h-4" v-show="getInputState('Name of Spouse')">
          {{getInputErrorMessage('Name of Spouse')}}
        </p>
      </div>

      <div class="control mb-4 w-full">
        <label class="block text-grey text-sm font-bold mb-2" for="Spouse Contact">
          Spouse Contact
        </label>
        <input type="text" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2" v-model="spouse_contact"
          name="Spouse Contact" id="Spouse Contact" :class="getInputColor('Spouse Contact')">
        <p class="text-red-light text-xs  pt-1 animated shake h-4" v-show="getInputState('Spouse Contact')">
          {{getInputErrorMessage('Spouse Contact')}}
        </p>
      </div>

      <div class="control mb-4 w-full">
        <label class="block text-grey text-sm font-bold mb-2" for="Names of Children">
          Names of Children (if any)
        </label>
        <input type="text" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2" v-model="names_of_children"
          name="Names of Children" id="Names of Children" :class="getInputColor('Names of Children')">
        <p class="text-red-light text-xs  pt-1 animated shake h-4" v-show="getInputState('Names of Children')">
          {{getInputErrorMessage('Names of Children')}}
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
    name: 'FamilyInfo',
    props: ['person', 'personDetails'],
    data() {
      return {
        loadingForm: false,
        name_of_mother: '',
        name_of_father: '',
        marital_status: '',
        name_of_spouse: '',
        spouse_contact: '',
        names_of_children: ''
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
    created() {
      this.setPersonDetails()
    },
    watch: {
      personDetails() {
        this.setPersonDetails()
      }
    },
    methods: {
      setPersonDetails() {
        this.name_of_mother = this.personDetails.name_of_mother
        this.name_of_father = this.personDetails.name_of_father
        this.marital_status = this.personDetails.marital_status
        this.name_of_spouse = this.personDetails.name_of_spouse
        this.spouse_contact = this.personDetails.spouse_contact
        this.names_of_children = this.personDetails.names_of_children
      },
      saveInfo() {
        if (this.loadingForm) return false
        this.validateForm(async state => {
          if (!state) return false

          this.loadingForm = true

          const fields = {
            person_id: this.person.id,
            name_of_mother: this.name_of_mother,
            name_of_father: this.name_of_father,
            marital_status: this.marital_status,
            name_of_spouse: this.name_of_spouse,
            spouse_contact: this.spouse_contact,
            names_of_children: this.names_of_children
          }

          const path = `update_person_details`

          try {
            const response = await this.$http.post(path, fields, this.authToken)
            this.$emit('updated', {
              response: response,
              current: 'family',
              done: true
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
          current: 'family',
          previous: 'church'
        })
      }
    },
  }

</script>

<style>

</style>
