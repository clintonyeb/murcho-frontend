<template>
  <div class="w-full flex flex-wrap lg:min-h-screen bg-blue-lightest-more font-serif" id="people-details">
    <div class="container mx-auto">
      <div class="w-full shadow bg-grey-lightest max-w-md mx-auto rounded flex-col justify-between items-start">
        <div class="mt-6 p-4 flex-col justify-between lg:px-12">
          <transition name="slide-fade" mode="out-in">
            <keep-alive>
              <component :is="stage" :person="person" :personDetails="personDetails" ref="component" @updated="personUpdated" @cancel="personUpdatedCancel"
                @previous="goBackPersonUpdate"></component>
            </keep-alive>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Personal from '@/components/people/EditPersonalInfo'
  import Church from '@/components/people/EditChurchInfo'
  import Family from '@/components/people/EditFamilyInfo'

  export default {
    name: 'PersonDetails',
    props: ['person'],
    data() {
      return {
        stage: 'personal',
        steps: ['personal', 'church', 'family'],
        personDetails: {},
        loadingForm: false
      }
    },
    methods: {
      personUpdatedCancel() {
        this.$router.replace({
          name: 'people'
        })
      },
      personUpdated(data) {
        if (data.done === true) {
          this.$router.push({
            name: 'people'
          })
        } else {
          this.stage = data.next
        }
      },
      goBackPersonUpdate(data) {
        this.stage = data.previous
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
    },
    created() {
      this.getPersonDetails()
    },
    components: {
      personal: Personal,
      church: Church,
      family: Family,
    },
    metaInfo: {
      title: 'Member Details',
      meta: [{
        name: 'description',
        content: 'Provide person details when adding member to church.'
      }]
    }
  }

</script>
