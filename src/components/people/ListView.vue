<template>
  <div class="w-full flex align-center justify-between mt-8 list-view">
    <table class="w-full border-separate table-auto relative" style="border-spacing: 0 .4rem;">
      <thead>
        <tr class="text-grey text-xs text-left">
          <th class="pb-4 pl-4">
            <label class="container checkbox">
              <input type="checkbox" @click="selectAll" ref="select-all">
              <span class="checkmark"></span>
            </label>
          </th>
          <th class="pb-4"></th>
          <th class="pb-4">FIRST NAME</th>
          <th class="pb-4">LAST NAME</th>
          <th class="pb-4">EMAIL</th>
          <th class="pb-4">PHONE</th>
          <th class="pb-4">STATUS</th>
          <th class="pb-4">GROUPS</th>
          <th class="pb-4">CREATED AT</th>
          <th class="pb-4">
            <div class="inline-flex">
              <button class="bg-white text-grey-dark mr-1 h-6 w-6 rounded" :class="page === 1 ? '' : 'hover:bg-grey-light hover:text-white'"
                :disabled="page === 1" @click="$emit('back')">
                <svg aria-hidden="true" data-prefix="fas" data-icon="caret-left" class="h-4 w-4 align-middle" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
                  <path fill="currentColor" d="M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z"></path>
                </svg>
              </button>
              <button class="bg-white text-grey-dark mr-1 h-6 w-6 rounded" @click="$emit('forward')" :class="pagesEnded ? '' : 'hover:bg-grey-light hover:text-white'"
                :disabled="pagesEnded">
                <svg aria-hidden="true" data-prefix="fas" data-icon="caret-right" class="h-4 w-4 align-middle" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
                  <path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path>
                </svg>
              </button>
            </div>
          </th>
        </tr>
      </thead>

      <tbody name="fade" is="transition-group" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutUp">
        <tr v-for="(person, index) in people" :key="person.id" class="text-grey-dark text-xs bg-white my-2 rounded shadow cursor-pointer person-item hover:text-grey-darkest hover:bg-blue-lightest select-none"
          :class="{'bg-blue-lightest text-grey-darkest': (selectedPeople.indexOf(person.id) !== -1 || activePerson === person.id)}"
          @click="personRowClicked(person.id)">
          <td class="w-14 px-4 py-2">
            <label class="container checkbox">
              <input type="checkbox" v-model="selectedPeople" :value="person.id">
              <span class="checkmark"></span>
            </label>
          </td>
          <td class="w-6 h-6 text-right px-1 py-2" @click="people.selected = true">
            <avatar :username="`${person.first_name} ${person.last_name}`" :src="person.thumbnail" class="" :size="25" />
          </td>
          <td class="px-1 py-2">{{person.first_name}}</td>
          <td class="px-1 py-2">{{person.last_name}}</td>
          <td class="px-1 py-2">{{person.email || '-'}}</td>
          <td class="px-1 py-2">{{person.phone_number || '-'}}</td>
          <td class="px-1 py-2">{{person.membership_status | fromKebabToString}}</td>
          <td class="px-1 py-2 w-64">
            <div class="inline-flex">
              <div class="truncate mr-2" style="width: 18rem;">
                <span v-for="group in person.groups.slice(0, 3)" :key="group.id" class="inline-flex items-center justify-between bg-grey-lighter font-hairline text-grey-darker mr-1 p-1 rounded w-24 truncate">
                  <p>
                    {{group.name}}
                  </p>
                  <span class="hover:bg-grey rounded" @click.stop="removeGroupFromPerson(group.id, person.id)">
                    <svg class="fill-current h-4 w-4 text-grey-dark" role="button" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20">
                      <title>Close</title>
                      <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                    </svg>
                  </span>
                </span>
              </div>

              <on-click-outside :do="() => activeHiddenGroup = null" v-if="(hidden = person.groups.slice(3)).length">
                <div class="inline-flex items-center justify-center cursor-pointer relative">

                  <svg aria-hidden="true" data-prefix="fas" data-icon="ellipsis-h" class="h-4 p-1 cursor-pointer bg-grey-lighter font-hairline text-grey-darker rounded"
                    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" @click.stop="activeHiddenGroup = activeHiddenGroup ? null : person.id">
                    <path fill="currentColor" d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"
                      style="padding: .5rem;"></path>
                  </svg>

                  <div v-show="activeHiddenGroup === person.id" class="inline-flex mt-px shadow-md rounded bg-white border absolute animated zoomIn flex flex-col z-10"
                    style="min-width: 250px; top: 100%; right: -70%;">
                    <div class="inline-flex flex-wrap">
                      <span v-for="group in hidden" :key="group.id" class="h-6 text-sm bg-grey-lighter font-hairline text-grey-darker m-2 p-1 rounded whitespace-no-wrap">
                        {{group.name}}
                      </span>
                    </div>
                  </div>

                </div>
              </on-click-outside>

            </div>
          </td>
          <td class="px-1 py-2">{{person.created_at | formatDate}}</td>
          <td class="w-1 text-center" @click.stop="activePerson = person.id">

            <on-click-outside :do="() => activePerson = null">
              <div class="inline-flex items-center justify-center cursor-pointer relative">

                <svg aria-hidden="true" data-prefix="fas" data-icon="ellipsis-h" class="h-6 p-1 cursor-pointer hover:bg-grey-light rounded-full align-middle"
                  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"
                    style="padding: .5rem;"></path>
                </svg>

                <div v-if="activePerson === person.id" class="mt-px text-sm text-center shadow-md text-grey-darker leading-normal rounded bg-white border absolute animated zoomIn flex flex-col overflow-hidden z-10"
                  style="min-width: 200px; top: 100%; right: -70%;">
                  <a v-for="action in personActions" :key="action.id" class="cursor-pointer no-underline flex items-center justify-start px-4 py-3 border-b whitespace-no-wrap group hover:text-white hover:bg-blue-light"
                    @click.stop="actionClicked(action, person, index)">
                    <span v-html="action.icon" class="mr-2 group-hover:text-white"></span>
                    <span class="group-hover:text-white">{{action.text}}</span>
                  </a>
                </div>

              </div>
            </on-click-outside>

          </td>
        </tr>
      </tbody>

    </table>
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
    viewIcon
  } from '@/utils/icons'

  export default {
    props: ['page', 'pagesEnded', 'people'],
    name: 'ListView',
    data() {
      return {
        selectedPeople: [],
        personActions: [
          {
            text: 'View Person',
            value: 'view',
            icon: viewIcon
          },
          {
            text: 'Edit Person',
            value: 'edit',
            icon: editIcon
          },
          {
            id: 1,
            text: 'Add Groups',
            value: 'add-groups',
            icon: groupIcon
          },
          {
            id: 2,
            text: 'Send Email',
            value: 'email',
            icon: mailIcon
          },
          {
            id: 3,
            text: 'Send SMS',
            value: 'sms',
            icon: smsIcon
          },
          {
            id: 4,
            text: 'Delete',
            value: 'delete',
            icon: trashIcon
          }
        ],
        activePerson: null,
        activeHiddenGroup: null,
      }
    },
    methods: {
      async removeGroupFromPerson(groupId, personId, personIndex){
        const path = 'remove_person_groups'
        const url = this.$http.url(path)

        try {
          const response = await this.$http.post(url, {
            person_id: personId,
            group_id: groupId
          }, this.authToken)
          
          this.$emit('action', {
            action: 'removed-group',
            person: response,
            personIndex: personIndex
          })
        } catch (error) {
          console.log(error)
        } finally {
          this.loadingForm = false
        }
      },
      actionClicked(action, person, index) {
        this.activePerson = null;
        this.$emit('action', {
          action: action.value,
          person: person,
          index: index
        })
      },
      fullyVisible(el) {
        const container = el.parent.width
        const rightPos = el.style.right
        console.log(container, rightPos)
        return true
      },
      selectAll() {
        const el = this.$refs['select-all']
        const state = el.checked

        this.selectedPeople = []
        if (state) this.selectedPeople = this.people.map(person => person.id)
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
    },
    watch: {
      selectedPeople(val) {
        this.$emit('selected', val)
      }
    }
  }

</script>
