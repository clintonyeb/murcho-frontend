<template>
  <div class="flex flex-wrap h-screen w-screen font-sans" id="register-opts">
    <div class="w-full lg:w-1/2 lg:h-screen relative lg:p-10 flex items-center justify-center bg-pattern" id="form-section">
      <div class="lg:h-full shadow bg-grey-lightest w-full max-w-md rounded flex-col justify-between items-start">
        <div class="w-full h-64 flex items-center justify-center">
          <img src="https://s3.ap-south-1.amazonaws.com/murch-assets/church_single.png" alt="Single Church" style="transform: scale(2);">
        </div>
        <!-- <hr class="border border-dotted my-4"> -->
        <div class="mt-6 p-4 flex-col justify-between">
          <h3 class="text-blue-light font-black text-2xl text-center">Register As a Single Church</h3>

          <p class="mt-6 text-grey-darker">
            Choose this option if you want to register on the platform as a single church.
          </p>

          <p class="italics text-xs mt-6 text-grey-dark">
            With this option you can:
          </p>

          <div class="mt-4 text-grey-darker">
            <div class="mt-2 w-full flex items-center">
              <p class="w-3 h-3 rounded-full bg-blue-light mr-3"></p>
              <p>Create and manage people in your Church.</p>
            </div>
            <div class="mt-2 w-full flex items-center">
              <p class="w-3 h-3 rounded-full bg-blue-light mr-3"></p>
              <p>Create and manage people in your Church.</p>
            </div>
            <div class="mt-2 w-full flex items-center">
              <p class="w-3 h-3 rounded-full bg-blue-light mr-3"></p>
              <p>Create and manage people in your Church.</p>
            </div>
            <div class="mt-2 w-full flex items-center">
              <p class="w-3 h-3 rounded-full bg-blue-light mr-3"></p>
              <p>Create and manage people in your Church.</p>
            </div>
            <div class="mt-2 w-full flex items-center">
              <p class="w-3 h-3 rounded-full bg-blue-light mr-3"></p>
              <p>Create and manage people in your Church.</p>
            </div>
            <div class="mt-2 w-full flex items-center">
              <p class="w-3 h-3 rounded-full bg-blue-light mr-3"></p>
              <p>Create and manage people in your Church.</p>
            </div>
          </div>

          <div class="mt-8">
            <p class="text-center">
              <button class="inline-flex items-center justify-center p-1 px-4 h-12 bg-blue rounded-sm text-white shadow-md"
              @click.prevent.stop="$router.push({name: 'signup-single'})" type="submit">
              REGISTER SINGLE CHURCH
              <svg aria-hidden="true" data-prefix="fas" data-icon="hand-point-right"  class="ml-2 h-6 w-6 fill-current animated fadeIn" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M512 199.652c0 23.625-20.65 43.826-44.8 43.826h-99.851c16.34 17.048 18.346 49.766-6.299 70.944 14.288 22.829 2.147 53.017-16.45 62.315C353.574 425.878 322.654 448 272 448c-2.746 0-13.276-.203-16-.195-61.971.168-76.894-31.065-123.731-38.315C120.596 407.683 112 397.599 112 385.786V214.261l.002-.001c.011-18.366 10.607-35.889 28.464-43.845 28.886-12.994 95.413-49.038 107.534-77.323 7.797-18.194 21.384-29.084 40-29.092 34.222-.014 57.752 35.098 44.119 66.908-3.583 8.359-8.312 16.67-14.153 24.918H467.2c23.45 0 44.8 20.543 44.8 43.826zM96 200v192c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V200c0-13.255 10.745-24 24-24h48c13.255 0 24 10.745 24 24zM68 368c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z"></path></svg>
            </button>
            </p>
          </div>

        </div>
      </div>
    </div>

       <div class="w-full lg:w-1/2 lg:h-screen relative lg:p-10 flex items-center justify-center bg-pattern" id="form-section">
      <div class="lg:h-full shadow bg-grey-lightest w-full max-w-md rounded flex-col justify-between items-start">
        <div class="w-full h-64 flex items-center justify-center">
          <img src="https://s3.ap-south-1.amazonaws.com/murch-assets/church_group.png" alt="Single Church">
        </div>
        <!-- <hr class="border border-dotted my-4"> -->
        <div class="mt-6 p-4 flex-col justify-between">
          <h3 class="text-blue-light font-black text-2xl text-center">Register As a Group of Churches</h3>

          <p class="mt-6 text-grey-darker">
            Choose this option if you want to register on the platform as a single church.
          </p>

          <p class="italics text-xs mt-6 text-grey-dark">
            With this option you can:
          </p>

          <div class="mt-4 text-grey-darker">
            <div class="mt-2 w-full flex items-center">
              <p class="w-3 h-3 rounded-full bg-blue-light mr-3"></p>
              <p>Create and manage people in your Church.</p>
            </div>
            <div class="mt-2 w-full flex items-center">
              <p class="w-3 h-3 rounded-full bg-blue-light mr-3"></p>
              <p>Create and manage people in your Church.</p>
            </div>
            <div class="mt-2 w-full flex items-center">
              <p class="w-3 h-3 rounded-full bg-blue-light mr-3"></p>
              <p>Create and manage people in your Church.</p>
            </div>
            <div class="mt-2 w-full flex items-center">
              <p class="w-3 h-3 rounded-full bg-blue-light mr-3"></p>
              <p>Create and manage people in your Church.</p>
            </div>
            <div class="mt-2 w-full flex items-center">
              <p class="w-3 h-3 rounded-full bg-blue-light mr-3"></p>
              <p>Create and manage people in your Church.</p>
            </div>
            <div class="mt-2 w-full flex items-center">
              <p class="w-3 h-3 rounded-full bg-blue-light mr-3"></p>
              <p>Create and manage people in your Church.</p>
            </div>
          </div>

          <div class="mt-8">
            <p class="text-center">
              <button class="inline-flex items-center justify-center p-1 px-4 h-12 bg-blue rounded-sm text-white shadow-md"
              @click.prevent.stop="$router.push({name: 'signup-group'})" type="submit">
              REGISTER GROUP CHURCH
              <svg aria-hidden="true" data-prefix="fas" data-icon="hand-point-right"  class="ml-2 h-6 w-6 fill-current animated fadeIn" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M512 199.652c0 23.625-20.65 43.826-44.8 43.826h-99.851c16.34 17.048 18.346 49.766-6.299 70.944 14.288 22.829 2.147 53.017-16.45 62.315C353.574 425.878 322.654 448 272 448c-2.746 0-13.276-.203-16-.195-61.971.168-76.894-31.065-123.731-38.315C120.596 407.683 112 397.599 112 385.786V214.261l.002-.001c.011-18.366 10.607-35.889 28.464-43.845 28.886-12.994 95.413-49.038 107.534-77.323 7.797-18.194 21.384-29.084 40-29.092 34.222-.014 57.752 35.098 44.119 66.908-3.583 8.359-8.312 16.67-14.153 24.918H467.2c23.45 0 44.8 20.543 44.8 43.826zM96 200v192c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V200c0-13.255 10.745-24 24-24h48c13.255 0 24 10.745 24 24zM68 368c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z"></path></svg>
            </button>
            </p>
          </div>

        </div>
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
      title: 'Sign Up Options',
      meta: [{
        name: 'description',
        content: 'Sign Up Options Page for the Murcho Platform. Register your church on the platform to access our platform.'
      }]
    },
  }

</script>
