<template>
  <div class="w-full flex align-center justify-between mt-8 flex-wrap grid-view" name="fade" is="transition-group"
    enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutUp">

    <div class="w-1/3 p-1" v-for="(person, index) in people" :key="person.id" @click="personRowClicked(person.id)">
      <div class="w-full shadow-md p-6 rounded-sm cursor-pointer person-item hover:text-grey-darkest hover:bg-blue-lightest select-none"
        :class="{'bg-blue-lightest text-grey-darkest': (selectedPeople.indexOf(person.id) !== -1 || activePerson === person.id)}">
        <div class="w-full  inline-flex items-start justify-between">
          <div class="w-full inline-flex items-center">
            <avatar :username="`${person.first_name} ${person.last_name}`" :src="person.thumbnail" class="mr-3" :size="40" />
            <div>
              <p class="text-grey-darker flex">
                {{person.first_name}} {{person.last_name}}
              </p>
              <p class="text-xs text-grey-dark mt-1">
                {{person.phone_number || person.email}}
              </p>
            </div>
          </div>

          <div @click.stop="activePerson = person.id">
            <on-click-outside :do="() => activePerson = null" :active="activePerson !== null">
              <div class="inline-flex items-center justify-center cursor-pointer relative">

                <svg aria-hidden="true" data-prefix="fas" data-icon="ellipsis-h" class="h-6 p-1 cursor-pointer  text-grey-dark hover:bg-grey-light rounded-full"
                  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"
                    style="padding: .5rem;"></path>
                </svg>

                <div v-show="activePerson === person.id" class="mt-px text-sm text-center shadow-md text-grey-darker leading-normal rounded bg-white border absolute animated zoomIn flex flex-col overflow-hidden z-10"
                  style="min-width: 200px; top: 100%; right: -100%;">
                  <a v-for="action in personActions" :key="action.id" class="cursor-pointer no-underline flex items-center justify-start px-4 py-3 border-b whitespace-no-wrap group hover:text-white hover:bg-blue-light"
                    @click="activePerson = null; $emit('action', {action: action.value, person: person.id, index: index});">
                    <span v-html="action.icon" class="mr-2 group-hover:text-white"></span>
                    <span class="group-hover:text-white">{{action.text}}</span>
                  </a>
                </div>

              </div>
            </on-click-outside>
          </div>

        </div>

        <div class="w-full mt-4 inline-flex align-center justify-between">
          <div>
            <!-- Tags -->
          </div>

          <div class="relative">
            <label class="container checkbox relative">
              <input type="checkbox" v-model="selectedPeople" :value="person.id">
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
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
  mailIconNew,
  smsIcon,
  fileIcon
} from '@/utils/icons'

export default {
  props: ['page', 'pagesEnded', 'people'],
  name: 'GridView',
  data () {
    return {
      selectedPeople: [],
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
        icon: mailIconNew
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
    selectAll () {
      const el = this.$refs['select-all']
      const state = el.checked

      this.selectedPeople = []
      if (state) this.selectedPeople = this.people.map(person => person.id)
    },
    personRowClicked (personId) {
      const index = this.selectedPeople.indexOf(personId)
      const checked = index !== -1
      if (checked) {
        this.selectedPeople.splice(index, 1)
      } else {
        this.selectedPeople.push(personId)
      }
    }
  },
  watch: {
    selectedPeople (val) {
      this.$emit('selected', val.length)
    }
  }
}

</script>
