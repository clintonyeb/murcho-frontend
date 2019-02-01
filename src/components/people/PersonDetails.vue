<template>
  <div class="w-full flex flex-wrap lg:min-h-screen bg-blue-lightest-more font-serif" id="people-details">
    <div class="container mx-auto">
      <div class="w-full shadow bg-grey-lightest max-w-md mx-auto rounded flex-col justify-between items-start">
        <div class="mt-6 p-4 flex-col justify-between lg:px-12">
          <transition name="slide-fade" mode="out-in">
            <keep-alive>
              <component :is="stage" :person="person" ref="component" @updated="personUpdated" @cancel="personUpdatedCancel" @previous="goBackPersonUpdate"></component>
            </keep-alive>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Personal from '@/components/people/PersonalInfo'
  import Church from '@/components/people/ChurchInfo'
  import Family from '@/components/people/FamilyInfo'

  export default {
    name: 'PersonDetails',
    props: ['person'],
    data() {
      return {
        stage: 'personal',
        steps: ['personal', 'church', 'family']
      }
    },
    methods: {
      personUpdatedCancel(){
        this.$router.replace({name: 'people'})
      },
      personUpdated(data){
        if(data.done === true) {
          this.$router.push({name: 'people'})
        } else {
          this.stage = data.next
        }
      },
      goBackPersonUpdate(data){
        this.stage = data.previous
      }
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
