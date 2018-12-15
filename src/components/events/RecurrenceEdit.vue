<template>
  <div class="container mx-auto mt-8" style="width: 550px;">
    <div>
      <h4 class="text-grey font-bold text-3xl text-center">
        This is a repeating event.
      </h4>

      <p class="font-medium text-grey-dark text-lg text-center mt-4">
        Do you want to edit this event only or all future events.
      </p>

      <div class="mt-8  inline-flex justify-start w-full">
        <div class="w-full flex flex-wrap justify-between items-center">
          <button class="w-full inline-flex flex-auto items-center justify-center h-10 bg-blue-light rounded-sm text-white shadow-md mr-2"
            @click="$emit('edit', {type: 'all', data: data})">
            <span class="font-bold uppercase">EDIT ALL FUTURE EVENTS</span>
          </button>

          <button class="w-full mt-2 inline-flex flex-auto items-center justify-center h-10 bg-blue-light rounded-sm text-white shadow-md mr-2"
            @click="$emit('edit', {type: 'one', data: data})">
            <span class="font-bold uppercase">EDIT THIS EVENT ONLY</span>
          </button>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    props: ['data', 'loading']
  }

</script>
