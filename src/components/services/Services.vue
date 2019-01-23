<template>
  <div class="w-full flex flex-wrap lg:min-h-screen bg-blue-lightest-more font-serif" id="services">
    <div class="w-full h-full">
      <div class="mx-auto py-4 container">
        <div class="flex items-stretch justify-between flex-wrap">

          <div class="flex items-center justify-center w-full lg:w-1/3  p-1" @click="$router.push({name: 'email-services'})">
            <div class="bg-white p-4 rounded cursor-pointer group hover:bg-blue-light shadow hover:shadow-md is-slow">
              <div class="h-full w-64  flex justify-center items-center">
                <div class="flex items-center justify-center w-32 h-32">
                  <svg version="1.1" class="fill-current h-24 w-24 text-blue-light p-2 border-blue-light group-hover:text-white group-hover:border-white"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 31.012 31.012" style="enable-background:new 0 0 31.012 31.012;" xml:space="preserve">
                    <path d="M25.109,21.51c-0.123,0-0.246-0.045-0.342-0.136l-5.754-5.398c-0.201-0.188-0.211-0.505-0.022-0.706c0.189-0.203,0.504-0.212,0.707-0.022l5.754,5.398c0.201,0.188,0.211,0.505,0.022,0.706C25.375,21.457,25.243,21.51,25.109,21.51z" />
                    <path d="M5.902,21.51c-0.133,0-0.266-0.053-0.365-0.158c-0.189-0.201-0.179-0.518,0.022-0.706l5.756-5.398c0.202-0.188,0.519-0.18,0.707,0.022c0.189,0.201,0.179,0.518-0.022,0.706l-5.756,5.398C6.148,21.465,6.025,21.51,5.902,21.51z" />
                    <path d="M28.512,26.529H2.5c-1.378,0-2.5-1.121-2.5-2.5V6.982c0-1.379,1.122-2.5,2.5-2.5h26.012c1.378,0,2.5,1.121,2.5,2.5v17.047C31.012,25.408,29.89,26.529,28.512,26.529z M2.5,5.482c-0.827,0-1.5,0.673-1.5,1.5v17.047c0,0.827,0.673,1.5,1.5,1.5h26.012c0.827,0,1.5-0.673,1.5-1.5V6.982c0-0.827-0.673-1.5-1.5-1.5H2.5z" />
                    <path d="M15.506,18.018c-0.665,0-1.33-0.221-1.836-0.662L0.83,6.155C0.622,5.974,0.6,5.658,0.781,5.449c0.183-0.208,0.498-0.227,0.706-0.048l12.84,11.2c0.639,0.557,1.719,0.557,2.357,0L29.508,5.419c0.207-0.181,0.522-0.161,0.706,0.048c0.181,0.209,0.16,0.524-0.048,0.706L17.342,17.355C16.835,17.797,16.171,18.018,15.506,18.018z" />
                  </svg>
                </div>
              </div>
              <div class="h-48 w-full">
                <h4 class="text-blue-light font-black text-2xl group-hover:text-white text-center">
                  Email Services
                </h4>

                <div class="mt-4 text-grey-dark">
                  <div class="mt-2 w-full flex items-start">
                    <p class="w-3 h-2 rounded-over bg-blue-lighter mr-3 mt-1 group-hover:bg-white"></p>
                    <p class="group-hover:text-white">Create and manage people in your Church.</p>
                  </div>
                  <div class="mt-2 w-full flex items-center">
                    <p class="w-3 h-2 rounded-full bg-blue-lighter mr-3 mt-1 group-hover:bg-white"></p>
                    <p class="group-hover:text-white">Create and manage people in your Church.</p>
                  </div>
                  <div class="mt-2 w-full flex items-center">
                    <p class="w-3 h-2 rounded-full bg-blue-lighter mr-3 mt-1 group-hover:bg-white"></p>
                    <p class="group-hover:text-white">Create and manage people in your Church.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div class="flex items-center justify-center w-full lg:w-1/3 px-1" @click="$router.push({name: 'sms-services'})">
            <div class="bg-white p-4 rounded cursor-pointer group hover:bg-blue-light shadow hover:shadow-md is-slow">
              <div class="h-full w-64  flex justify-center items-center">
                <div class="flex items-center justify-center w-32 h-32">
                  <svg version="1.1" class="fill-current h-24 w-24 text-blue-light p-2 border-blue-light group-hover:text-white group-hover:border-white" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px" y="0px" width="30.743px" height="30.744px" viewBox="0 0 30.743 30.744" style="enable-background:new 0 0 30.743 30.744;"
                    xml:space="preserve">
                    <path d="M28.585,9.67h-0.842v9.255c0,1.441-0.839,2.744-2.521,2.744H8.743v0.44c0,1.274,1.449,2.56,2.937,2.56h12.599l4.82,2.834L28.4,24.669h0.185c1.487,0,2.158-1.283,2.158-2.56V11.867C30.743,10.593,30.072,9.67,28.585,9.67z" />
                    <path d="M22.762,3.24H3.622C1.938,3.24,0,4.736,0,6.178v11.6c0,1.328,1.642,2.287,3.217,2.435l-1.025,3.891L8.76,20.24h14.002c1.684,0,3.238-1.021,3.238-2.462V8.393V6.178C26,4.736,24.445,3.24,22.762,3.24z M6.542,13.032c-0.955,0-1.729-0.774-1.729-1.729s0.774-1.729,1.729-1.729c0.954,0,1.729,0.774,1.729,1.729S7.496,13.032,6.542,13.032z M13,13.032c-0.955,0-1.729-0.774-1.729-1.729S12.045,9.574,13,9.574s1.729,0.774,1.729,1.729S13.955,13.032,13,13.032z M19.459,13.032c-0.955,0-1.73-0.774-1.73-1.729s0.775-1.729,1.73-1.729c0.953,0,1.729,0.774,1.729,1.729S20.412,13.032,19.459,13.032z" />
                  </svg>
                </div>
              </div>
              <div class="h-48 w-full">
                <h4 class="text-blue-light font-black text-2xl group-hover:text-white text-center">
                  SMS Services
                </h4>

                <div class="mt-4 text-grey-dark">
                  <div class="mt-2 w-full flex items-start">
                    <p class="w-3 h-2 rounded-over bg-blue-lighter mr-3 mt-1 group-hover:bg-white"></p>
                    <p class="group-hover:text-white">Create and manage people in your Church.</p>
                  </div>
                  <div class="mt-2 w-full flex items-center">
                    <p class="w-3 h-2 rounded-full bg-blue-lighter mr-3 mt-1 group-hover:bg-white"></p>
                    <p class="group-hover:text-white">Create and manage people in your Church.</p>
                  </div>
                  <div class="mt-2 w-full flex items-center">
                    <p class="w-3 h-2 rounded-full bg-blue-lighter mr-3 mt-1 group-hover:bg-white"></p>
                    <p class="group-hover:text-white">Create and manage people in your Church.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div class="flex items-center justify-center w-full lg:w-1/3 p-1" @click="$router.push({name: 'import-services'})">
            <div class="bg-white p-4 rounded cursor-pointer group hover:bg-blue-light shadow hover:shadow-md is-slow">
              <div class="h-full w-64  flex justify-center items-center">
                <div class="flex items-center justify-center w-32 h-32">
                  <svg class="fill-current h-24 w-24 text-blue-light p-2 border-blue-light group-hover:text-white group-hover:border-white" viewBox="0 -64 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m330.667969 320c-2.730469 0-5.460938-1.046875-7.554688-3.113281l-64-64c-4.160156-4.160157-4.160156-10.925781 0-15.085938 4.160157-4.15625 10.925781-4.15625 15.085938 0l56.445312 56.449219 56.449219-56.449219c4.160156-4.15625 10.921875-4.15625 15.082031 0 4.160157 4.160157 4.160157 10.925781 0 15.085938l-64 64c-2.046875 2.066406-4.777343 3.113281-7.507812 3.113281zm0 0"/><path d="m501.332031 384h-490.664062c-5.890625 0-10.667969-4.777344-10.667969-10.667969 0-5.886719 4.777344-10.664062 10.667969-10.664062h490.664062c5.890625 0 10.667969 4.777343 10.667969 10.664062 0 5.890625-4.777344 10.667969-10.667969 10.667969zm0 0"/><path d="m330.667969 320c-5.890625 0-10.667969-4.777344-10.667969-10.667969v-106.664062c0-99.992188-81.34375-181.335938-181.332031-181.335938-5.890625 0-10.667969-4.777343-10.667969-10.664062 0-5.890625 4.777344-10.667969 10.667969-10.667969 111.742187 0 202.664062 90.921875 202.664062 202.667969v106.664062c0 5.890625-4.777343 10.667969-10.664062 10.667969zm0 0"/></svg>
                </div>
              </div>
              <div class="h-48 w-full">
                <h4 class="text-blue-light font-black text-2xl group-hover:text-white text-center">
                  Import Data
                </h4>

                <div class="mt-4 text-grey-dark">
                  <div class="mt-2 w-full flex items-start">
                    <p class="w-3 h-2 rounded-over bg-blue-lighter mr-3 mt-1 group-hover:bg-white"></p>
                    <p class="group-hover:text-white">Create and manage people in your Church.</p>
                  </div>
                  <div class="mt-2 w-full flex items-center">
                    <p class="w-3 h-2 rounded-full bg-blue-lighter mr-3 mt-1 group-hover:bg-white"></p>
                    <p class="group-hover:text-white">Create and manage people in your Church.</p>
                  </div>
                  <div class="mt-2 w-full flex items-center">
                    <p class="w-3 h-2 rounded-full bg-blue-lighter mr-3 mt-1 group-hover:bg-white"></p>
                    <p class="group-hover:text-white">Create and manage people in your Church.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div class="flex items-center justify-center w-full lg:w-1/3 p-1" @click="$router.push({name: 'export-services'})">
            <div class="bg-white p-4 rounded cursor-pointer group hover:bg-blue-light shadow hover:shadow-md is-slow">
              <div class="h-full w-64  flex justify-center items-center">
                <div class="flex items-center justify-center w-32 h-32">
                  <svg class="fill-current h-24 w-24 text-blue-light p-2 border-blue-light group-hover:text-white group-hover:border-white" viewBox="0 -28 453.99791 453" xmlns="http://www.w3.org/2000/svg"><path d="m345.375 3.410156c-2.863281-2.847656-7.160156-3.695312-10.890625-2.144531s-6.164063 5.195313-6.164063 9.234375v53.359375c-54.011718 2.148437-81.058593 24.539063-85.191406 28.261719-27.25 22.363281-45.855468 53.527344-52.613281 88.121094-3.378906 16.714843-3.984375 33.871093-1.785156 50.78125l.007812.058593c.019531.148438.042969.300781.066407.449219l2.125 12.214844c.714843 4.113281 3.914062 7.351562 8.019531 8.117187 4.109375.765625 8.257812-1.105469 10.40625-4.6875l6.367187-10.613281c19.5625-32.527344 43.941406-54.089844 72.46875-64.085938 12.867188-4.550781 26.5-6.546874 40.128906-5.882812v55.265625c0 4.046875 2.441407 7.699219 6.183594 9.242187 3.746094 1.546876 8.050782.679688 10.90625-2.191406l105.675782-106.210937c3.894531-3.914063 3.878906-10.246094-.035157-14.140625zm2.949219 194.214844v-40.027344c0-4.90625-3.5625-9.089844-8.410157-9.871094-8.554687-1.378906-31.371093-3.570312-58.335937 5.878907-28.765625 10.078125-53.652344 29.910156-74.148437 59.050781-.058594-9.574219.847656-19.132812 2.707031-28.527344 6.078125-30.730468 21.515625-56.542968 45.878906-76.710937.214844-.175781.417969-.359375.617187-.554688.699219-.648437 26.097657-23.578125 81.609376-23.164062h.074218c5.523438 0 10.003906-4.480469 10.007813-10.003907v-39.136718l81.535156 81.125zm0 0"/><path d="m417.351562 294.953125c-5.519531 0-10 4.476563-10 10v42.261719c-.015624 16.5625-13.4375 29.980468-30 30h-327.351562c-16.5625-.019532-29.980469-13.4375-30-30v-238.242188c.019531-16.5625 13.4375-29.980468 30-30h69.160156c5.523438 0 10-4.476562 10-10 0-5.523437-4.476562-10-10-10h-69.160156c-27.601562.03125-49.96875 22.398438-50 50v238.242188c.03125 27.601562 22.398438 49.96875 50 50h327.351562c27.601563-.03125 49.96875-22.398438 50-50v-42.261719c0-5.523437-4.476562-10-10-10zm0 0"/></svg>
                </div>
              </div>
              <div class="h-48 w-full">
                <h4 class="text-blue-light font-black text-2xl group-hover:text-white text-center">
                  Export Data
                </h4>

                <div class="mt-4 text-grey-dark">
                  <div class="mt-2 w-full flex items-start">
                    <p class="w-3 h-2 rounded-over bg-blue-lighter mr-3 mt-1 group-hover:bg-white"></p>
                    <p class="group-hover:text-white">Create and manage people in your Church.</p>
                  </div>
                  <div class="mt-2 w-full flex items-center">
                    <p class="w-3 h-2 rounded-full bg-blue-lighter mr-3 mt-1 group-hover:bg-white"></p>
                    <p class="group-hover:text-white">Create and manage people in your Church.</p>
                  </div>
                  <div class="mt-2 w-full flex items-center">
                    <p class="w-3 h-2 rounded-full bg-blue-lighter mr-3 mt-1 group-hover:bg-white"></p>
                    <p class="group-hover:text-white">Create and manage people in your Church.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    metaInfo: {
      title: 'Services',
      meta: [{
        name: 'description',
        content: 'Services Page for the Murcho Platform. Gain access to vast number of services to manage your church.'
      }]
    },
  }

</script>
