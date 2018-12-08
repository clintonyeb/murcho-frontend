<template>
  <div class="w-full m-2 rounded">
    <div class="bg-grey-lightest w-full inline-flex items-center justify-between p-2">
      <p class="text-blue-light font-medium">
        Groups
      </p>

      <p class="text-grey-dark text-xs leading-loose">
        {{totalGroup}} groups
      </p>

      <div>
        Navigation
      </div>

    </div>

    <div class="mt-4">
      <div class="mb-1 bg-white p-4 shadow rounded-sm cursor-pointer person-item hover:text-grey-darkest hover:bg-blue-lightest select-none max-h-screen overflow-y-auto" :class="{'bg-blue-lightest text-grey-darkest': activeGroup === group.id}" v-for="group in groups" :key="group.id" @click="$emit('click', group.id)">
        <p class="text-grey-darker">
          {{group.name}}
        </p>
        <p class="mt-1 text-grey-dark text-xs truncate">
            {{group.description}}
          </p>
      </div>
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
    fileIcon,
  } from '@/utils/icons'

  export default {
    props: ['page', 'pagesEnded', 'groups', 'totalGroup', 'activeGroup'],
    name: 'ListView',
    data() {
      return {
        personActions: [{
            text: 'Edit Person',
            value: 'edit',
            icon: editIcon
          },
          {
            id: 1,
            text: 'Add Group',
            value: 'add-group',
            icon: groupIcon
          },
          {
            id: 2,
            text: 'Remove Groups',
            value: 'remove-groups',
            icon: removeGroupIcon
          },
          {
            id: 3,
            text: 'Send Email',
            value: 'email',
            icon: mailIcon
          },
          {
            id: 5,
            text: 'Send SMS',
            value: 'sms',
            icon: smsIcon
          },
          {
            id: 6,
            text: 'Export As CSV',
            value: 'export',
            icon: fileIcon
          },
          {
            id: 4,
            text: 'Delete',
            value: 'delete',
            icon: trashIcon
          }
        ],
        activePerson: null
      }
    },
    methods: {
      personRowClicked(personId) {
        const index = this.selectedPeople.indexOf(personId)
        const checked = index !== -1
        if (checked) {
          this.selectedPeople.splice(index, 1)
        } else {
          this.selectedPeople.push(personId)
        }
      },
    },
  }

</script>
