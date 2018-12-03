<template>
  <div class="w-full flex align-center justify-between mt-8 flex-wrap grid-view" name="fade" is="transition-group"
    enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutUp">

    <div class="w-1/3 p-1" v-for="(group, index) in groups" :key="group.id" @click="$emit('click', group.id)">
      <div class="w-full shadow-md p-6 rounded-sm cursor-pointer person-item hover:text-grey-darkest hover:bg-blue-lightest select-none bg-white h-32"
        :class="{'bg-blue-lightest text-grey-darkest': (activeGroup === group.id)}">
        <div class="w-full  inline-flex items-start justify-between">
          <p class="text-grey-darker flex truncate">
            {{group.name}}
          </p>

          <div @click.stop="activeGroup = group.id">
            <on-click-outside :do="() => activeGroup = null">
              <div class="inline-flex items-center justify-center cursor-pointer relative">

                <svg aria-hidden="true" data-prefix="fas" data-icon="ellipsis-h" class="h-6 p-1 cursor-pointer  text-grey-dark hover:bg-grey-light rounded-full"
                  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"
                    style="padding: .5rem;"></path>
                </svg>

                <div v-show="activeGroup === group.id" class="mt-px text-sm text-center shadow-md text-grey-darker leading-normal rounded bg-white border absolute animated zoomIn flex flex-col overflow-hidden z-10"
                  style="min-width: 200px; top: 100%; right: -100%;">
                  <a v-for="action in groupActions" :key="action.id" class="cursor-pointer no-underline flex items-center justify-start px-4 py-3 border-b whitespace-no-wrap group hover:text-white hover:bg-blue-light"
                    @click="activeGroup = null; $emit('action', {action: action.value, group: group.id, index: index});">
                    <span v-html="action.icon" class="mr-2 group-hover:text-white"></span>
                    <span class="group-hover:text-white">{{action.text}}</span>
                  </a>
                </div>

              </div>
            </on-click-outside>
          </div>

        </div>

        <div class="w-full mt-1 inline-flex align-center justify-between">
          <p class="text-grey-dark text-xs truncate">
            {{group.description}}
          </p>
        </div>

        <div class="w-full mt-4 inline-flex align-center justify-between">
          <p class="text-grey text-xs">
            {{group.people_count}} {{pluralize('person', group.people_count)}}
          </p>
          <p class="text-grey text-xs">
            {{group.event_count || 0}} events
          </p>
          <p class="text-grey text-xs">
            Created On: {{group.created_at | formatDate}}
          </p>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import viewMixin from '@/mixins/views'

  import {
    trashIcon,
    editIcon,
    groupIcon,
    removeGroupIcon,
    mailIcon,
    smsIcon,
    fileIcon,
  } from '@/utils/icons'

  const pluralize = require('pluralize')

  export default {
    props: ['page', 'pagesEnded', 'groups'],
    name: 'GridView',
    data() {
      return {
        groupActions: [{
            text: 'Edit Group',
            value: 'edit',
            icon: editIcon
          },
          {
            id: 4,
            text: 'Delete',
            value: 'delete',
            icon: trashIcon
          }
        ],
        activeGroup: null,
        pluralize: pluralize
      }
    },
    mixins: [viewMixin]
  }

</script>
