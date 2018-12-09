<template>
  <div class="container mx-auto md:p-10 sm:p-8" @keyup.esc="$emit('close')" style="width: 650px;">
    <template v-if="mode === 'text'">
      <div class="w-full flex items-center justify-center">
        <div class="w-1/3">
          <div class="flex-col justify-center items-center">
            <avatar :username="`${person.first_name} ${person.last_name}`" :src="person.photo" :rounded="false" class="cursor-pointer hover:shadow-lg"
            :size="100" @click.native="avatarClicked" @mouseenter="hoveredPhoto = true" @mouseleave="hoveredPhoto = false" />
            <p class="text-grey text-xs mt-1" v-show="hoveredPhoto">
              Click To View
            </p>
          </div>
        </div>
        <div class="w-2/3">
          <div class="w-full inline-flex justify-between items-center ml-4">
            <p class="text-grey">
              First Name
            </p>
            <p class="text-grey-darker">
              {{person.first_name}}
            </p>
          </div>
          <div class="w-full inline-flex justify-between items-center ml-4">
            <p class="text-grey">
              Last Name
            </p>
            <p class="text-grey-darker">
              {{person.last_name}}
            </p>
          </div>
          <div class="w-full inline-flex justify-between items-center ml-4 mt-2" v-if="person.email">
            <p class="text-grey">
              Email Address
            </p>
            <p class="text-grey-darker">
              {{person.email}}
            </p>
          </div>
          <div class="w-full inline-flex justify-between items-center ml-4 mt-2" v-if="person.phone_number">
            <p class="text-grey">
              Phone Number
            </p>
            <p class="text-grey-darker">
              {{person.phone_number}}
            </p>
          </div>
        </div>
      </div>

      <div class="w-full mt-8">
        <div class="w-full inline-flex justify-between items-center mt-4">
          <p class="text-grey">
            Date Joined Church
          </p>
          <p class="text-grey-darker">
            {{person.date_joined | formatDate}}
          </p>
        </div>

        <div class="w-full inline-flex justify-between items-center mt-4">
          <p class="text-grey">
            Membership Status
          </p>
          <p class="text-grey-darker">
            {{person.membership_status | fromKebabToString}}
          </p>
        </div>

        <div class="w-full inline-flex justify-between items-center mt-4">
          <p class="text-grey">
            Date Person Created
          </p>
          <p class="text-grey-darker">
            {{person.created_at | formatDate}}
          </p>
        </div>

        <div class="w-full inline-flex justify-between items-center mt-4">
          <p class="text-grey">
            Date Updated
          </p>
          <p class="text-grey-darker">
            {{person.updated_at | formatDate}}
          </p>
        </div>

        <div class="w-full inline-flex justify-between items-center mt-4" v-if="person.groups.length">
          <p class="text-grey">
            Groups
          </p>
          <p class="text-grey-darker">
            {{person.groups.join(', ')}}
          </p>
        </div>

      </div>
    </template>

    <template v-if="mode === 'photo'">
      <span v-html="icons.back" class="text-blue cursor-pointer" @click="mode = 'text'"></span>
      <img :src="person.photo" alt="Profile Image" width="100%">
    </template>

  </div>
</template>

<script>
import {
  backIcon
} from '@/utils/icons'

export default {
  props: ['person'],
  name: 'ViewPerson',
  data () {
    return {
      mode: 'text', // photo,
      hoveredPhoto: false,
      icons: {
        back: backIcon
      }
    }
  },
  methods: {
    avatarClicked () {
      if (!this.person.photo) return false

      this.mode = 'photo'
    }
  }
}

</script>
