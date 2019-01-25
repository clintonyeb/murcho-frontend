<template>
  <div class="w-full flex align-center justify-between list-view" id="group-list-view">
    <table class="w-full border-separate table-auto relative" style="border-spacing: 0 .4rem;">
      <thead>
        <tr class="text-grey text-xs text-left">
          <th class="w-8 h-6 flex items-start justify-center">
            <label class="checkbox-container checkbox">
              <input type="checkbox" @click="selectAll" ref="select-all">
              <span class="checkmark"></span>
            </label>
          </th>
          <th class="pb-4"></th>
          <th class="pb-4">FIRST NAME</th>
          <th class="pb-4">SECOND NAME</th>
          <th class="pb-4">EMAIL</th>
          <th class="pb-4">PHONE</th>
          <th class="pb-4">STATUS</th>
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
          <td class="w-8 h-6 flex items-center justify-center">
            <label class="checkbox-container checkbox">
              <input type="checkbox" v-model="selectedPeople" :value="person.id">
              <span class="checkmark"></span>
            </label>
          </td>
          <td class="w-6 h-6 text-right px-2 py-2 mr-4" @click="people.selected = true">
            <avatar :username="`${person.first_name} ${person.last_name}`" :src="person.thumbnail" class="" :size="25" />
          </td>
          <td class="px-1 py-2">{{person.first_name}}</td>
          <td class="px-1 py-2">{{person.last_name}}</td>
          <td class="px-1 py-2">{{person.email}}</td>
          <td class="px-1 py-2">{{person.phone_number}}</td>
          <td class="px-1 py-2">{{person.membership_status | fromKebabToString}}</td>
          <td class="w-1 text-center" @click.stop="activePerson = person.id">
            <span class="hover:bg-grey-light rounded h-4 w-4" @click.stop="removePersonFromGroup(person.id, index)">
              <svg class="fill-current h-4 w-4 text-grey-dark" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          </td>
        </tr>
      </tbody>

    </table>
  </div>
</template>

<script>
export default {
  props: ['page', 'pagesEnded', 'people', 'group_id'],
  name: 'GridView',
  data () {
    return {
      selectedPeople: [],
      activePerson: null
    }
  },
  methods: {
    async removePersonFromGroup (personId, personIndex) {
      const path = 'remove_person_groups'

      try {
        const response = await this.$http.post(path, {
          person_id: personId,
          group_id: this.group_id
        }, this.authToken)

        this.$emit('action', {
          action: 'removed-group',
          person: null,
          index: personIndex
        })
      } catch (error) {
        console.log(error)
      } finally {
        this.loadingForm = false
      }
    },
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
  }
}

</script>
