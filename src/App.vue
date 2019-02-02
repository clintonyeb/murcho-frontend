<template>
  <div id="app">
    <router-view />

    <div class="p-2 bg-blue-darker items-center text-blue-lightest leading-none lg:rounded-full flex lg:inline-flex fixed pin-b pin-r z-10 font-sans shadow-lg rounded-full mr-2 mb-2"
      role="alert" v-if="showUpdate">
      <span class="text-left flex-auto">New updates available for the platform.</span>
      <span class="flex rounded-full bg-blue hover:bg-blue-dark uppercase px-2 py-2 text-xs font-bold mx-3 cursor-pointer" @click="updateApp">Get Updates</span>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'App',
    metaInfo: {
      title: 'Home',
      titleTemplate: '%s | Murcho',
    },
    computed: {
      showUpdate(){
        return this.$store.state.layout.cacheState === 'UPDATED'
      }
    },
    methods: {
      updateApp(){
        window.location.reload(true)
      }
    }
  }

</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Lato|Roboto');
  @import "assets/styles.scss";

</style>
