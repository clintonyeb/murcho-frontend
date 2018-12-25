<template>
  <div class="w-full rounded">
    <div class="w-full inline-flex items-center justify-between">
      <div class="inline-flex items-center">
        <h3 class="text-blue-light font-black text-2xl mr-4">Groups</h3>
        <p class="text-grey font-bold text-xs mr-4">
          {{totalGroup}} {{pluralize('group', totalGroup)}} in total.
        </p>
      </div>

      <button class="bg-blue text-white h-8 p-3 inline-flex items-center justify-between rounded" @click="$emit('create')">
        <span v-html="icons.plus" class="mr-2 text-white"></span>
        <span class="mr-2">Add Group</span>
      </button>

    </div>

    <div class="mt-4">
      <div class="mb-1 bg-white p-4 shadow rounded-sm cursor-pointer person-item hover:text-grey-darkest hover:bg-blue-lightest select-none max-h-screen relative"
        :class="{'bg-blue-lightest text-grey-darkest': activeGroup === group.id}" v-for="(group, groupIndex) in groups"
        :key="group.id" @click="$emit('click', group.id)">
        <div class="w-full inline-flex justify-between items-center">
          <p class="text-grey-darker">
            {{group.name}}
          </p>
          <on-click-outside :do="() => actionGroup = null" :active="actionGroup !== null">
            <div class="relative">

              <svg aria-hidden="true" data-prefix="fas" data-icon="ellipsis-h" class="h-3 cursor-pointer text-grey-dark hover:bg-grey-light rounded-full align-middle"
                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" @click.stop="actionGroup = group.id">
                <path fill="currentColor" d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path>
              </svg>

              <div v-if="actionGroup === group.id" class="mt-px text-sm text-center shadow-md text-grey-darker leading-normal rounded bg-white border absolute animated zoomIn flex flex-col overflow-hidden z-10 pin-r"
                style="min-width: 200px;">
                <a v-for="action in groupActions" :key="action.id" class="cursor-pointer no-underline flex items-center justify-start px-4 py-3 border-b whitespace-no-wrap group hover:text-white hover:bg-blue-light"
                  @click.stop="actionClicked(action, group, groupIndex)">
                  <span v-html="action.icon" class="mr-2 group-hover:text-white"></span>
                  <span class="group-hover:text-white">{{action.text}}</span>
                </a>
              </div>
            </div>
          </on-click-outside>
        </div>
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
    mailIconNew,
    userPlusIcon,
    smsIcon,
    fileIcon
  } from '@/utils/icons'

  export default {
    props: ['page', 'pagesEnded', 'groups', 'totalGroup', 'activeGroup'],
    name: 'ListView',
    data() {
      return {
        icons: {
          plus: userPlusIcon,
        },
        actionGroup: null,
        groupActions: [{
            id: 1,
            text: 'Edit Group',
            value: 'edit-group',
            icon: editIcon
          },
          {
            id: 3,
            text: 'Email Group',
            value: 'email',
            icon: mailIconNew
          },
          {
            id: 4,
            text: 'SMS Group',
            value: 'sms',
            icon: smsIcon
          },
          {
            id: 5,
            text: 'Export Group',
            value: 'export-people',
            icon: fileIcon
          },
          {
            id: 2,
            text: 'Delete',
            value: 'delete',
            icon: trashIcon
          },
        ]
      }
    },
    methods: {
      actionClicked(action, group, groupIndex) {
        this.actionGroup = null

        this.$emit('action', {
          action: action.value,
          group: group,
          index: groupIndex
        })
      },
      createGroup() {
        this.activeAction = 'create'
        this.modal = true
      },
      personRowClicked(personId) {
        const index = this.selectedPeople.indexOf(personId)
        const checked = index !== -1
        if (checked) {
          this.selectedPeople.splice(index, 1)
        } else {
          this.selectedPeople.push(personId)
        }
      }
    }
  }

</script>
