<template>
  <div class="home">
    <!-- <bar /> -->
    <router-view />
    <notify />
  </div>
</template>

<script>
  export default {
    name: 'home',
    created() {
      this.initializeApp(err => {})
    }
  }

</script>
