<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
   metaInfo: {
      title: 'Home',
      titleTemplate: '%s | Murcho',
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato|Roboto');
@import "assets/styles.scss";
</style>
