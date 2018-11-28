<template>
  <div class="home">
    <top-nav />
    <router-view />
  </div>
</template>

<script>
import TopNav from '@/components/TopNav'

  export default {
    name: 'home',
    created() {
      this.initializeApp(err => {})
    },
    components: {
      TopNav
    }
  }

</script>
