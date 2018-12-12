<template>
  <div class="w-full rounded">
    <div class="w-full inline-flex items-center justify-between">
      <div class="inline-flex items-center">
        <h3 class="text-blue-light font-black text-2xl mr-4">Groups</h3>
        <p class="text-grey font-bold text-xs mr-4">
          <!-- {{totalGroup}} {{pluralize('group', totalGroup)}} in total. -->
        </p>
      </div>

      <button class="bg-blue text-white h-8 p-3 inline-flex items-center justify-between rounded" @click="$emit('create')">
        <span v-html="icons.plus" class="mr-2 text-white"></span>
        <span class="mr-2">Add Group</span>
      </button>

    </div>
  </div>
</template>

<script>
  import {
    trashIcon,
    editIcon,
    groupIcon,
    removeGroupIcon,
    mailIcon,
    smsIcon,
    fileIcon
  } from '@/utils/icons'
  export default {
    props: ['events'],
    data() {
      return {
        icons: {
          plus: userPlusIcon,
        },
      }
    },
    name: 'Events'
  }

</script>
