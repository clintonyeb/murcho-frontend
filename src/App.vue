<template>
  <div id="app">
    <router-view />

    <div class="p-2 bg-blue-darker items-center text-blue-lightest leading-none lg:rounded-full flex lg:inline-flex fixed pin-b pin-r z-10 font-sans shadow-lg rounded-full mr-2 mb-2"
      role="alert" v-if="showUpdate">
      <svg class="cursor-pointer fill-current h-5 w-5 text-white float-right m-2 rounded-full mx-3"
        role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <title>Close</title>
        <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"></path>
      </svg>
      <span class="text-left flex-auto">New updates available for the platform.</span>
      <span class="flex rounded-full bg-blue uppercase px-2 py-2 text-xs font-bold mx-3" @click="updateApp">Get Updates</span>
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
        window.reload(true)
      }
    }
  }

</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Lato|Roboto');
  @import "assets/styles.scss";

</style>
