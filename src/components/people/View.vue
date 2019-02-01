<template>
  <div class="lg:p-4 p-2" @keyup.esc="$emit('close')">
    <div class="w-full flex">
      <div class="w-full lg:w-1/3 pr-2">
        <div class="flex justify-start items-center">
          <avatar :username="`${person.first_name} ${person.last_name}`" :src="person.photo" :rounded="false" class="cursor-pointer hover:shadow-lg rounded"
            :size="160" />

          <div class="flex flex-col justify-around ml-4" style="height: 160px;">
            <h3 class="text-blue-light font-black text-2xl ">{{person.first_name}} {{person.last_name}}</h3>
            <p class="text-grey-darker font-bold ">
              Joined on {{person.date_joined | formatDate}}
            </p>
            <p class="text-grey font-bold ">
              {{person.membership_status | fromKebabToString}}
            </p>

            <div class="" v-if="person.groups.length">
              <span v-for="group in person.groups" :key="group.id" class="inline-flex items-center justify-between bg-grey-lighter font-hairline text-grey-darker mr-1 p-1 rounded">
                <p class="truncate">
                  {{group.name}}
                </p>
              </span>
            </div>

            <p class="text-grey-light  italic" v-else>
              Not belonging to any groups.
            </p>

            <p>
              <svg class="spinner ml-2 h-6 w-6 text-grey-dark fill-current animated fadeIn mr-4" version="1.1" xmlns="http://www.w3.org/2000/svg"
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
            </p>

          </div>
        </div>

        <div>
          <h3 class="text-blue-light font-black text-2xl mt-2 lg:mt-8 bg-grey-lighter p-2 rounded">Personal Information</h3>

          <div class="mt-8 flex flex-wrap items-center justify-between">

            <div class="control w-full">
              <label class="block text-grey text-sm font-bold mb-2" for="Church Name">
                Member ID: <span class="text-grey-dark text-lg">{{person.member_id}}</span>
              </label>
            </div>
            <div class="control w-full">
              <label class="block text-grey text-sm font-bold mb-2" for="Church Name">
                First Name: <span class="text-grey-dark text-lg">{{person.first_name}}</span>
              </label>
            </div>
            <div class="control w-full">
              <label class="block text-grey text-sm font-bold mb-2" for="Church Name">
                Last Name: <span class="text-grey-dark text-lg">{{person.last_name}}</span>
              </label>
            </div>
            <div class="control w-full">
              <label class="block text-grey text-sm font-bold mb-2" for="Church Name">
                Other Name(s): <span class="text-grey-dark text-lg">{{personDetails.other_names || 'Not specified'}}</span>
              </label>
            </div>
            <div class="control w-full">
              <label class="block text-grey text-sm font-bold mb-2" for="Church Name">
                Date of Birth: <span class="text-grey-dark text-lg">{{personDetails.date_of_birth || 'Not specified'}}</span>
              </label>
            </div>
            <div class="control w-full">
              <label class="block text-grey text-sm font-bold mb-2" for="Church Name">
                Age: <span class="text-grey-dark text-lg">{{personDetails.age || 'Not specified'}}</span>
              </label>
            </div>
            <div class="control w-full">
              <label class="block text-grey text-sm font-bold mb-2" for="Church Name">
                Day Born: <span class="text-grey-dark text-lg">{{personDetails.day_born || 'Not specified'}}</span>
              </label>
            </div>
            <div class="control w-full">
              <label class="block text-grey text-sm font-bold mb-2" for="Church Name">
                Gender: <span class="text-grey-dark text-lg">{{personDetails.gender || 'Not specified'}}</span>
              </label>
            </div>
            <div class="control w-full">
              <label class="block text-grey text-sm font-bold mb-2" for="Church Name">
                House Number: <span class="text-grey-dark text-lg">{{personDetails.house_number || 'Not specified'}}</span>
              </label>
            </div>
            <div class="control w-full">
              <label class="block text-grey text-sm font-bold mb-2" for="Church Name">
                Street Name: <span class="text-grey-dark text-lg">{{personDetails.street_name || 'Not specified'}}</span>
              </label>
            </div>
            <div class="control w-full">
              <label class="block text-grey text-sm font-bold mb-2" for="Church Name">
                Location: <span class="text-grey-dark text-lg">{{personDetails.location || 'Not specified'}}</span>
              </label>
            </div>
            <div class="control w-full">
              <label class="block text-grey text-sm font-bold mb-2" for="Church Name">
                HomeTown Address: <span class="text-grey-dark text-lg">
                  {{personDetails.hometown_address || 'Not specified'}}</span>
              </label>
            </div>
            <div class="control w-full">
              <label class="block text-grey text-sm font-bold mb-2" for="Church Name">
                Education Level: <span class="text-grey-dark text-lg">
                  {{personDetails.education_level || 'Not specified'}}</span>
              </label>
            </div>
            <div class="control w-full">
              <label class="block text-grey text-sm font-bold mb-2" for="Church Name">
                Occupation: <span class="text-grey-dark text-lg">{{personDetails.occupation || 'Not specified'}}</span>
              </label>
            </div>
            <div class="control w-full">
              <label class="block text-grey text-sm font-bold mb-2" for="Church Name">
                Cell Phone I: <span class="text-grey-dark text-lg">{{personDetails.cell_phone_1 || 'Not specified'}}</span>
              </label>
            </div>
            <div class="control w-full">
              <label class="block text-grey text-sm font-bold mb-2" for="Church Name">
                Cell Phone II: <span class="text-grey-dark text-lg">{{personDetails.cell_phone_2 || 'Not specified'}}</span>
              </label>
            </div>
            <div class="control w-full">
              <label class="block text-grey text-sm font-bold mb-2" for="Church Name">
                Email Address: <span class="text-grey-dark text-lg">{{personDetails.email || 'Not specified'}}</span>
              </label>
            </div>
          </div>

        </div>
      </div>

      <div class="w-full lg:w-1/3 pl-2">
        <h3 class="text-blue-light font-black text-2xl bg-grey-lighter p-2 rounded">Church Information</h3>

        <div class="mt-8 flex flex-wrap items-center justify-between">

          <div class="control w-full">
            <label class="block text-grey text-sm font-bold mb-2" for="Church Name">
              Date of Baptism: <span class="text-grey-dark text-lg">{{person.date_of_baptism || 'Not specified'}}</span>
            </label>
          </div>
          <div class="control w-full">
            <label class="block text-grey text-sm font-bold mb-2" for="Church Name">
              Place of Baptism: <span class="text-grey-dark text-lg">{{person.place_of_baptism || 'Not specified'}}</span>
            </label>
          </div>
          <div class="control w-full">
            <label class="block text-grey text-sm font-bold mb-2" for="Church Name">
              Pastor or Minister: <span class="text-grey-dark text-lg">{{person.pastor_or_ministry || 'Not specified'}}</span>
            </label>
          </div>
          <div class="control w-full">
            <label class="block text-grey text-sm font-bold mb-2" for="Church Name">
              Confirmation Date: <span class="text-grey-dark text-lg">
                {{personDetails.confirmation_date || 'Not specified'}}</span>
            </label>
          </div>
          <div class="control w-full">
            <label class="block text-grey text-sm font-bold mb-2" for="Church Name">
              Place of Confirmation: <span class="text-grey-dark text-lg">
                {{personDetails.place_of_confirmation || 'Not specified'}}</span>
            </label>
          </div>
          <div class="control w-full">
            <label class="block text-grey text-sm font-bold mb-2" for="Church Name">
              Communicant Status: <span class="text-grey-dark text-lg">
                {{personDetails.communicant_status || 'Not specified'}}</span>
            </label>
          </div>
          <div class="control w-full">
            <label class="block text-grey text-sm font-bold mb-2" for="Church Name">
              Generational Group: <span class="text-grey-dark text-lg">
                {{personDetails.generational_group || 'Not specified'}}</span>
            </label>
          </div>
          <div class="control w-full">
            <label class="block text-grey text-sm font-bold mb-2" for="Church Name">
              Interest Group: <span class="text-grey-dark text-lg">{{personDetails.interest_group || 'Not specified'}}</span>
            </label>
          </div>
          <div class="control w-full">
            <label class="block text-grey text-sm font-bold mb-2" for="Church Name">
              Special Interest: <span class="text-grey-dark text-lg">
                {{personDetails.special_interests || 'Not specified'}}</span>
            </label>
          </div>
          <div class="control w-full">
            <label class="block text-grey text-sm font-bold mb-2" for="Church Name">
              Position In Church: <span class="text-grey-dark text-lg">
                {{personDetails.position_in_church || 'Not specified'}}</span>
            </label>
          </div>
          <div class="control w-full">
            <label class="block text-grey text-sm font-bold mb-2" for="Church Name">
              Position Period: <span class="text-grey-dark text-lg">
                {{personDetails.church_position_period || 'Not specified'}}</span>
            </label>
          </div>

        </div>

      </div>

      <div class="w-full lg:w-1/3 pl-2">
        <h3 class="text-blue-light font-black text-2xl bg-grey-lighter p-2 rounded">Family Information</h3>

        <div class="mt-8 flex flex-wrap items-center justify-between">

          <div class="control w-full">
            <label class="block text-grey text-sm font-bold mb-2" for="Church Name">
              Name of Mother: <span class="text-grey-dark text-lg">{{person.name_of_mother || 'Not specified'}}</span>
            </label>
          </div>
          <div class="control w-full">
            <label class="block text-grey text-sm font-bold mb-2" for="Church Name">
              Name of Father: <span class="text-grey-dark text-lg">{{person.name_of_father || 'Not specified'}}</span>
            </label>
          </div>
          <div class="control w-full">
            <label class="block text-grey text-sm font-bold mb-2" for="Church Name">
              Marital Status: <span class="text-grey-dark text-lg">{{person.marital_status || 'Not specified'}}</span>
            </label>
          </div>
          <div class="control w-full">
            <label class="block text-grey text-sm font-bold mb-2" for="Church Name">
              Name of Spouse: <span class="text-grey-dark text-lg">{{personDetails.name_of_spouse || 'Not specified'}}</span>
            </label>
          </div>
          <div class="control w-full">
            <label class="block text-grey text-sm font-bold mb-2" for="Church Name">
              Spouse Contact: <span class="text-grey-dark text-lg">{{personDetails.spouse_contact || 'Not specified'}}</span>
            </label>
          </div>
          <div class="control w-full">
            <label class="block text-grey text-sm font-bold mb-2" for="Church Name">
              Names of Children (if any): <span class="text-grey-dark text-lg">{{personDetails.names_of_children ||
                'Not specified'}}</span>
            </label>
          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script>
  import {
    backIcon
  } from '@/utils/icons'

  export default {
    props: ['person'],
    name: 'ViewPerson',
    data() {
      return {
        hoveredPhoto: false,
        icons: {
          back: backIcon
        },
        personDetails: {},
        loadingForm: false
      }
    },
    created() {
      this.refresh()
    },
    methods: {
      refresh() {
        this.getPersonDetails()
      },
      async getPersonDetails() {
        this.loadingForm = true

        const path = `get_person_details/${this.person.id}`

        try {
          const response = await this.$http.get(path, this.authToken)
          this.personDetails = response
        } catch (err) {
          console.log(err)
        } finally {
          this.loadingForm = false
        }
      }
    }
  }

</script>


<style scoped>
  .vue-avatar--wrapper {
    border-radius: 10px !important;
  }

</style>
