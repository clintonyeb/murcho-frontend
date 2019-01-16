<template>
  <div class="w-full lg:h-screen font-sans">
    <nav class="flex items-center justify-between flex-wrap p-4 h-16  bg-white lg:fixed mb-4 lg:mb-0">
      <div class="flex items-center flex-no-shrink h-8">
        <img src="https://s3.ap-south-1.amazonaws.com/murch-assets/murcho_color.png" alt="Murch Logo" class="h-8">
      </div>
    </nav>

    <div class="container h-full mx-auto flex flex-wrap">
      <div class="w-full lg:w-1/2 hidden lg:flex flex items-center justify-center lg:h-screen relative">
        <img src="https://s3.ap-south-1.amazonaws.com/murch-assets/not-found.png" alt="Not Found">
      </div>

      <div class="w-full text-center lg:h-screen lg:w-1/2 p-2 px-4 flex justify-center items-center">
        <div class="ml-8">
          <h2 class="text-black font-black text-5xl tracking-wide w-full leading-loose">404</h2>
          <p class="font-bold text-grey-darker text-lg">
            Page Not Found.
          </p>

          <p class="mt-4 text-grey-dark">
            This page is missing or you assembled the link incorrectly.
          </p>

          <p class="mt-8">
            <router-link :to="{name: 'home'}" class="inline-flex items-center text-blue-light no-underline hover:text-blue">
              Go to website
              <svg aria-hidden="true" data-prefix="fas" data-icon="hand-point-right" class="ml-2 h-6 w-6 fill-current animated fadeIn"
                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M512 199.652c0 23.625-20.65 43.826-44.8 43.826h-99.851c16.34 17.048 18.346 49.766-6.299 70.944 14.288 22.829 2.147 53.017-16.45 62.315C353.574 425.878 322.654 448 272 448c-2.746 0-13.276-.203-16-.195-61.971.168-76.894-31.065-123.731-38.315C120.596 407.683 112 397.599 112 385.786V214.261l.002-.001c.011-18.366 10.607-35.889 28.464-43.845 28.886-12.994 95.413-49.038 107.534-77.323 7.797-18.194 21.384-29.084 40-29.092 34.222-.014 57.752 35.098 44.119 66.908-3.583 8.359-8.312 16.67-14.153 24.918H467.2c23.45 0 44.8 20.543 44.8 43.826zM96 200v192c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V200c0-13.255 10.745-24 24-24h48c13.255 0 24 10.745 24 24zM68 368c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z"></path>
              </svg>
            </router-link>
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {

  }

</script>
