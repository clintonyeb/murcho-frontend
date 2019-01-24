<template>
  <form name="church-update" class="w-full container mx-auto md:px-10 sm:px-8" style="min-width: 500px" @submit.prevent="updateChurch">

    <div class="control mb-4">
      <label class="block text-grey text-sm font-bold mb-2" for="Church Name">
        Church Name
      </label>
      <input type="text" placeholder="Enter Church Name" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2"
        v-model="church_name" name="Church Name" v-validate="{required: true}" tabindex="1" v-autofocus id="Church Name"
        :class="getInputColor('Church Name')">
      <p class="text-red-light text-xs  pt-1 animated shake h-4" v-show="getInputState('Church Name')">
        {{getInputErrorMessage('Church Name')}}
      </p>
    </div>

    <div class="control mb-4 mt-4">
      <label class="block text-grey text-sm font-bold mb-2" for="Church Location">
        Church Location
      </label>
      <input type="text" placeholder="Enter Church Location" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2"
        v-model="church_location" name="Church Location" tabindex="2" id="Church Location" :class="getInputColor('Church Location')">
      <p class="text-red-light text-xs  pt-1 animated shake h-4" v-show="getInputState('Church Location')">
        {{getInputErrorMessage('Church Location')}}
      </p>
    </div>

    <div class="control mb-4 mt-4">
      <label class="block text-grey text-sm font-bold mb-2" for="Church Motto">
        Church Tagline/Motto/Description
      </label>
      <input type="text" placeholder="Enter Church Motto" class="w-full text-grey-darker h-10 inline-flex border rounded-sm mb-1 pl-2"
        v-model="church_motto" name="Church Motto" tabindex="3" id="Church Motto" :class="getInputColor('Church Motto')">
      <p class="text-red-light text-xs  pt-1 animated shake h-4" v-show="getInputState('Church Motto')">
        {{getInputErrorMessage('Church Motto')}}
      </p>
    </div>

    <div class="w-full relative">
      <div class="w-full">
        <div class="w-full control mb-4 mt-4 relative">
          <label class="block text-grey text-sm font-bold mb-2">
            Church Logo
          </label>
          <div class="w-full flex items-top justify-between">

            <div class="w-full relative pr-1 h-16">
              <input type="file" id="Church Logo" placeholder="Upload Church Logo" class="text-grey-darker is-custom"
                name="Church Logo" tabindex="4" @change="photoUploaded" v-validate.continues="{image: true, ext: ['jpeg', 'jpg', 'png', 'svg']}"
                ref="church-photo">
              <label class="cursor-pointer hover:shadow w-full h-16 bg-grey-lighter p-2 rounded-lg absolute inline-flex items-center justify-center text-grey hover:text-grey-dark"
                for="Church Logo">
                Click to choose a photo
              </label>
              <p class="text-red-light text-xs  animated shake" v-show="getInputState('Church Logo')">
                {{getInputErrorMessage('Church Logo')}}
              </p>
            </div>

            <div class="w-1/3 pl-1 self-end" v-show="church_photo">
              <div class="w-full flex-col items-center justify-center">
                <img :src="church_photo" alt="Church Logo" width="90px" class="center">
                <p class="text-xs text-grey hover:underline cursor-pointer mt-1 text-center hover:text-grey-dark"
                  @click="church_photo = null" v-show="church_photo">
                  Remove
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div class="mt-8 mb-4 inline-flex justify-start w-full">
      <div class="w-full inline-flex justify-between items-center">
        <button class="inline-flex flex-auto items-center justify-center h-10 bg-blue rounded-sm text-white shadow-md mr-2"
          @click="updateChurch" tabindex="19">
          <svg version="1.1" class="h-6 w-6 fill-current mr-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
            <path d="M506.955,1.314c-3.119-1.78-6.955-1.75-10.045,0.078L313.656,109.756c-4.754,2.811-6.329,8.943-3.518,13.697c2.81,4.753,8.942,6.328,13.697,3.518l131.482-77.749L210.411,303.335L88.603,266.069l158.965-94c4.754-2.812,6.329-8.944,3.518-13.698c-2.81-4.753-8.943-6.33-13.697-3.518L58.91,260.392c-3.41,2.017-5.309,5.856-4.84,9.791s3.216,7.221,7.004,8.38l145.469,44.504L270.72,439.88c0.067,0.121,0.136,0.223,0.207,0.314c1.071,1.786,2.676,3.245,4.678,4.087c1.253,0.527,2.57,0.784,3.878,0.784c2.563,0,5.086-0.986,6.991-2.849l73.794-72.12l138.806,42.466c0.96,0.293,1.945,0.438,2.925,0.438c2.116,0,4.206-0.672,5.948-1.961C510.496,409.153,512,406.17,512,403V10C512,6.409,510.074,3.093,506.955,1.314z M271.265,329.23c-1.158,1.673-1.779,3.659-1.779,5.694v61.171l-43.823-79.765l193.921-201.21L271.265,329.23z M289.486,411.309v-62.867l48.99,14.988L289.486,411.309z M492,389.483l-196.499-60.116L492,45.704V389.483z" />
            <path d="M164.423,347.577c-3.906-3.905-10.236-3.905-14.143,0l-93.352,93.352c-3.905,3.905-3.905,10.237,0,14.143C58.882,457.024,61.441,458,64,458s5.118-0.976,7.071-2.929l93.352-93.352C168.328,357.815,168.328,351.483,164.423,347.577z" />
            <path d="M40.071,471.928c-3.906-3.903-10.236-3.903-14.142,0.001l-23,23c-3.905,3.905-3.905,10.237,0,14.143C4.882,511.024,7.441,512,10,512s5.118-0.977,7.071-2.929l23-23C43.976,482.166,43.976,475.834,40.071,471.928z" />
            <path d="M142.649,494.34c-1.859-1.86-4.439-2.93-7.069-2.93c-2.641,0-5.21,1.07-7.07,2.93c-1.86,1.86-2.93,4.43-2.93,7.07c0,2.63,1.069,5.21,2.93,7.07c1.86,1.86,4.44,2.93,7.07,2.93s5.21-1.07,7.069-2.93c1.86-1.86,2.931-4.44,2.931-7.07C145.58,498.77,144.51,496.2,142.649,494.34z" />
            <path d="M217.051,419.935c-3.903-3.905-10.233-3.905-14.142,0l-49.446,49.445c-3.905,3.905-3.905,10.237,0,14.142c1.953,1.953,4.512,2.929,7.071,2.929s5.118-0.977,7.071-2.929l49.446-49.445C220.956,430.172,220.956,423.84,217.051,419.935z" />
            <path d="M387.704,416.139c-3.906-3.904-10.236-3.904-14.142,0l-49.58,49.58c-3.905,3.905-3.905,10.237,0,14.143c1.953,1.952,4.512,2.929,7.071,2.929s5.118-0.977,7.071-2.929l49.58-49.58C391.609,426.377,391.609,420.045,387.704,416.139z" />
            <path d="M283.5,136.31c-1.86-1.86-4.44-2.93-7.07-2.93s-5.21,1.07-7.07,2.93c-1.859,1.86-2.93,4.44-2.93,7.08c0,2.63,1.07,5.2,2.93,7.06c1.86,1.87,4.44,2.93,7.07,2.93s5.21-1.06,7.07-2.93c1.859-1.86,2.93-4.43,2.93-7.06C286.43,140.75,285.36,138.17,283.5,136.31z" />
          </svg>
          <span class="font-bold">UPDATE CHURCH</span>
          <spinner v-if="loadingChurchForm" />
        </button>

        <button class="inline-flex flex-auto items-center justify-center h-10 rounded-sm text-red-light underline ml-2"
          @click="$emit('cancel')" tabindex="20">
          <span class="font-bold">CANCEL</span>
        </button>

      </div>
    </div>

  </form>
</template>

<script>
  import {
    closeIcon
  } from '@/utils/icons'
  export default {
    name: 'Edit-Church',
    props: ['church'],
    data() {
      return {
        loadingForm: false,
        icons: {
          cancel: closeIcon
        },
        creatingEvent: false,
        loadingChurchForm: false,
        church_name: '',
        church_location: '',
        church_motto: '',
        church_photo: '',
      }
    },
    mounted() {
      this.setup()
    },
    methods: {
      setup() {
        this.church_name = this.church.name
        this.church_location = this.church.location
        this.church_motto = this.church.motto
        this.church_photo = this.church.photo
      },
      photoUploaded(event) {
        const file = event.target.files && event.target.files[0]

        if (file) {
          const reader = new FileReader()
          reader.onload = (e) => {
            this.church_photo = e.target.result
          }

          reader.readAsDataURL(file)
        } else {
          this.church_photo = null
        }
      },
      updateChurch() {
        if (this.loadingChurchForm) return false
        this.shouldDisplayMessage = false

        this.validateScope('church-update', state => {
          if (!state) return false
          this.loadingChurchForm = true

          const fields = {
            name: this.church_name,
            location: this.church_location,
            motto: this.church_motto,
            photo: this.church_photo
          }
          try {

            this.getChangedFields(fields, this.church, async (err, changedFields) => {
              if (err || !Object.keys(changedFields).length) {
                this.loadingChurchForm = false
                return false
              }

              let path = `churches/${this.church.id}`

              const church = await this.$http.put(path, changedFields, this.authToken)
              this.$emit('updated', church)
            })

          } catch (error) {

          }
          finally {
            this.loadingChurchForm = false
          }
        })
      },
      async getChangedFields(object, original, cb) {
        const fields = {}

        for (const key in object) {
          if (object.hasOwnProperty(key)) {
            const ori = original[key]
            const ob = object[key]

            if (ori instanceof Date) {
              if (ori.getTime() !== ob.getTime()) fields[key] = object[key]
            } else {
              if (ori !== ob) {
                if (key === 'photo') {
                  // upload photo and assign url here
                  const file = this.$refs['church-photo'].files && this.$refs['church-photo'].files[0]
                  if (file) {
                    try {
                      const file_url = await this.$http.uploadFile(file)

                      fields['photo'] = file_url
                    } catch (error) {
                      fields['photo'] = null
                      cb(error)
                    }
                  } else {
                    fields['photo'] = null
                  }
                } else {
                  fields[key] = object[key]
                }
              }
            }
          }
        }

        cb(null, fields)
      },
    },
  }

</script>
