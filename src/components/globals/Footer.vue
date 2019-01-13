<template>
  <footer class="w-full font-sans pt-4 bg-blue-lightest-more" id="people">
    <div class="w-full flex bg-grey-darker text-white p-4">
      <div class="w-1/2">
        <nav class="flex items-center justify-between">
          <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
              <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto h-8">
            <div class="text-sm lg:flex-grow text-white">
              <router-link :to="{name: 'home'}" class="text-blue-light hover:text-blue lg:mt-0 mr-5 no-underline">
                <span>Home</span>
              </router-link>
              <router-link :to="{name: 'people'}" class="text-blue-light hover:text-blue lg:mt-0 mr-5 no-underline">
                <span>People</span>
              </router-link>
              <router-link :to="{name: 'groups'}" class="text-blue-light hover:text-blue lg:mt-0 mr-5 no-underline">
                <span>Groups</span>
              </router-link>
              <router-link :to="{name: 'events'}" class="text-blue-light hover:text-blue lg:mt-0 mr-5 no-underline">
                <span>Events</span>
              </router-link>
            </div>
          </div>
        </nav>

        <div class="inline-flex justify-between items-center mt-4">
          <h4 class="mr-10">Connect</h4>
          <a href="" class="mr-6">
            <svg version="1.1" class="text-white hover:text-blue-light fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
              <path d="M288,176v-64c0-17.664,14.336-32,32-32h32V0h-64c-53.024,0-96,42.976-96,96v80h-64v80h64v256h96V256h64l32-80H288z" />
            </svg>
          </a>
          <a href="" class="mr-6">
            <svg version="1.1" class="text-white hover:text-blue-light fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px" y="0px" width="512.002px" height="512.002px" viewBox="0 0 512.002 512.002" style="enable-background:new 0 0 512.002 512.002;"
              xml:space="preserve">
              <path d="M512.002,97.211c-18.84,8.354-39.082,14.001-60.33,16.54c21.686-13,38.342-33.585,46.186-58.115c-20.299,12.039-42.777,20.78-66.705,25.49c-19.16-20.415-46.461-33.17-76.674-33.17c-58.011,0-105.042,47.029-105.042,105.039c0,8.233,0.929,16.25,2.72,23.939c-87.3-4.382-164.701-46.2-216.509-109.753c-9.042,15.514-14.223,33.558-14.223,52.809c0,36.444,18.544,68.596,46.73,87.433c-17.219-0.546-33.416-5.271-47.577-13.139c-0.01,0.438-0.01,0.878-0.01,1.321c0,50.894,36.209,93.348,84.261,103c-8.813,2.399-18.094,3.687-27.674,3.687c-6.769,0-13.349-0.66-19.764-1.888c13.368,41.73,52.16,72.104,98.126,72.949c-35.95,28.176-81.243,44.967-130.458,44.967c-8.479,0-16.84-0.496-25.058-1.471c46.486,29.807,101.701,47.197,161.021,47.197c193.211,0,298.868-160.062,298.868-298.872c0-4.554-0.104-9.084-0.305-13.59C480.111,136.775,497.92,118.275,512.002,97.211z" />
            </svg>
          </a>
          <a href="" class="mr-6">
            <svg version="1.1" class="text-white hover:text-blue-light fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px" y="0px" viewBox="0 0 310 310" style="enable-background:new 0 0 310 310;" xml:space="preserve">
              <path id="XMLID_823_" d="M297.917,64.645c-11.19-13.302-31.85-18.728-71.306-18.728H83.386c-40.359,0-61.369,5.776-72.517,19.938C0,79.663,0,100.008,0,128.166v53.669c0,54.551,12.896,82.248,83.386,82.248h143.226c34.216,0,53.176-4.788,65.442-16.527C304.633,235.518,310,215.863,310,181.835v-53.669C310,98.471,309.159,78.006,297.917,64.645z M199.021,162.41l-65.038,33.991c-1.454,0.76-3.044,1.137-4.632,1.137c-1.798,0-3.592-0.484-5.181-1.446c-2.992-1.813-4.819-5.056-4.819-8.554v-67.764c0-3.492,1.822-6.732,4.808-8.546c2.987-1.814,6.702-1.938,9.801-0.328l65.038,33.772c3.309,1.718,5.387,5.134,5.392,8.861C204.394,157.263,202.325,160.684,199.021,162.41z" />
            </svg>
          </a>
          <a href="" class="mr-4">
            <svg version="1.1" class="text-white hover:text-blue-light fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
              <path d="M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192c88.352,0,160-71.648,160-160V160C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112V160C48,98.24,98.24,48,160,48h192c61.76,0,112,50.24,112,112V352z" />
              <path d="M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128S326.688,128,256,128z M256,336c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80C336,300.096,300.096,336,256,336z" />
              <circle cx="393.6" cy="118.4" r="17.056" />
            </svg>
          </a>
          <a href="" class="mr-4">
            <svg version="1.1" class="text-white hover:text-blue-light fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px" y="0px" viewBox="0 0 430.117 430.117" style="enable-background:new 0 0 430.117 430.117;"
              xml:space="preserve">
                <path id="LinkedIn" d="M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z M5.477,420.56h92.184v-277.32H5.477V420.56z" />
            </svg>
          </a>
        </div>

      </div>
      <div class="w-1/2 inline-flex items-center">
        <div class="flex items-center flex-no-shrink mr-24 h-8">
          <img src="https://s3.ap-south-1.amazonaws.com/murch-assets/murcho_color.png" alt="Murch Logo" class="h-8">
        </div>

        <div>
          <h4>Hear From Us</h4>
          <div class="inline-flex items-center justify-center relative mt-4">
            <input class="appearance-none w-full h-8 p-2 text-grey bg-grey-lighter rounded-l border border-blue focus:bg-white border-transparent focus:border-blue-light border-animated"
              type="email" placeholder="Enter email address...">
            <button class="hover:bg-blue hover:text-white text-blue border border-blue hover:bg-blue-dark text-white font-bold p-2 rounded-r h-8 flex items-center">
              SEND
            </button>
          </div>
        </div>

      </div>
    </div>
    <div class="text-xs bg-black w-full p-4 text-white flex justify-between">
      <div>
        <p>
          New Delhi, India.
        </p>
      </div>
      <div class="text-right">
        <p>
          +91 9152105353, info@murcho.com
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      userMenu: false
    }
  }
}

</script>
