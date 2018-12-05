<template>
  <div class="w-full p-6">
    <div class="w-full relative">
      <button class="text-xs text-red-light absolute pin-r pin-t" @click="$emit('close')">
        Close
      </button>

      <div class="w-full control mb-8 h-16 pt-6">
        <label class="block text-grey text-sm font-bold mb-2 h-4" for="username">
          Event Title
        </label>
        <div class="h-8 inline-flex border w-full rounded-sm relative" :class="getInputColor('Subject')">
          <input type="text" placeholder="Event Title" class="ml-2" v-model="title" name="Title" v-validate="{required: true}"
            tabindex="1" v-autofocus>
        </div>
        <p class="text-red-light text-xs italic pt-1 animated shake h-4" v-show="getInputState('Title')">
          {{getInputErrorMessage('Title')}}
        </p>
      </div>

      <div class="w-full control mt-12 mb-4">
        <div>
          <label class="block text-grey text-sm font-bold mb-2" for="username">
            Description
          </label>
          <div class="inline-flex border max-w-full w-full rounded-sm relative" :class="getInputColor('Description')">

            <textarea name="Description" placeholder="Event Description.." class="ml-2 w-full h-24 p-1 resize-none"
              v-model="description" tabindex="2"></textarea>
          </div>
          <p class="text-red-light text-xs pt-1 h-1 italic pt-1 animated shake" v-show="getInputState('Description')">
            {{getInputErrorMessage('Description')}}
          </p>
        </div>
      </div>

      <div class="w-full control mb-8 h-16">
        <label class="block text-grey text-sm font-bold mb-2" for="username">
          Start Date &amp; Time
        </label>
        <div class="h-8 inline-flex border w-full rounded-sm relative" :class="getInputColor('Subject')">
          <input type="text" placeholder="Event Title" class="ml-2" v-model="title" name="Title" v-validate="{required: true}"
            tabindex="3">
        </div>
        <p class="text-red-light text-xs italic pt-1 animated shake" v-show="getInputState('Title')">
          {{getInputErrorMessage('Title')}}
        </p>
      </div>

    </div>
  </div>
</template>

<script>
  import {
    format,
  } from 'date-fns'
  import {
    COLORS
  } from '@/utils'

  const dateFormat = "EEEE, do; h:m a"
  const pluralize = require('pluralize')

  export default {
    props: ['start_date'],
    data() {
      return {
        colors: COLORS,
        title: '',
        description: ''
      }
    },
    created() {},
    methods: {
      getInputErrorMessage(name) {
        return this.errors.first(name)
      },
      getInputColor(name) {
        return this.getInputState(name) ? 'border-red-light' : 'border-grey-light'
      },
      getInputState(name) {
        return this.errors.has(name)
      },
    }
  }

</script>
