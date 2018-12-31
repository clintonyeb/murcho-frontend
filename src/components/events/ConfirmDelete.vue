<template>
  <div class="container mx-auto mt-8" style="width: 550px;">
    <div v-if="event.is_recurring">
      <h4 class="text-grey font-bold text-3xl text-center">
        This is a repeating event.
      </h4>

      <p class="font-medium text-grey-dark text-lg text-center mt-4">
        Do you want to delete this instance or all future instances.
      </p>

      <div class="mt-8  inline-flex justify-start w-full">
        <div class="w-full inline-flex justify-between items-center">
           <button class="w-full inline-flex flex-auto items-center justify-center h-10 bg-yellow-dark rounded-sm text-white shadow-md mr-2"
            @click="$emit('delete', {type: 'one', event: event})">
            <span class="font-bold uppercase">DELETE THIS EVENT</span>
          </button>

          <button class="w-full inline-flex flex-auto items-center justify-center h-10 bg-red-light rounded-sm text-white shadow-md mr-2"
            @click="$emit('delete', {type: 'all', event: event})">
            <span class="font-bold uppercase">DELETE ALL EVENTS</span>
          </button>

        </div>
      </div>

    </div>
    <div v-else>
      <h4 class="text-grey font-bold text-3xl text-center">
        Delete event &#34;<span class="underline">{{event.title}}</span>&#34;.
      </h4>

      <p class="font-medium text-grey-dark text-lg text-center mt-4">
        Are you sure you want to delete this event?
      </p>

      <div class="mt-8  inline-flex justify-start w-full">
        <div class="w-full inline-flex justify-between items-center">
          <button class="inline-flex flex-auto items-center justify-center h-10 bg-red-light rounded-sm text-white shadow-md mr-2"
            @click="$emit('delete', {type: 'one', event: event})">
            <span class="font-bold uppercase">DELETE EVENT</span>
          </button>

          <button class="inline-flex flex-auto items-center justify-center h-10 rounded-sm text-blue-light underline ml-2"
            @click="$emit('cancel')">
            <span class="font-bold">CANCEL</span>
          </button>

        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  props: ['event', 'loading']
}

</script>
