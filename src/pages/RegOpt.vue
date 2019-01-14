<template>
  <div class="flex flex-wrap h-screen w-screen font-sans" id="register-opts">
    <div class="w-full lg:w-1/2 lg:h-screen bg-grey-lightest relative lg:p-10 flex items-center justify-center bg-pattern" id="form-section">
      <div class="lg:h-full shadow-md bg-white w-full max-w-md rounded">

      </div>
    </div>

    <div class="w-full lg:w-1/2 lg:h-screen bg-grey-lightest relative lg:p-10 flex items-center justify-center bg-pattern" id="form-section">
      <div class="lg:h-full shadow-md bg-white w-full max-w-md rounded">
        
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RegOpt',
    data() {
      return {
        loadingForm: false,
      }
    },
    metaInfo: {
      title: 'Sign Up',
      meta: [{
        name: 'description',
        content: 'Sign Up Options Page for the Murcho Platform. Register your church on the platform to access our platform.'
      }]
    },
    methods: {
    }
  }

</script>
