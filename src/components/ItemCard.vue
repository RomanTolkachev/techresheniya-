<script setup>
  const props = defineProps({
    details: Object,
  })
  import {ref} from "vue";

</script>

<template>

  <div class="card bg-white w-[293px] h-full mx-auto p-2.5 rounded-[18px] flex flex-col">
    <div class="w-full overflow-hidden mb-[10px]">
      <img
          :src="details.img"
          alt=""
          class="rounded-[10px] aspect-[1] object-cover"
      >
    </div>
    <h3 class="card__header text-20px text-black font-regular text-center mb-[20px]">
      {{ details.name }}
    </h3>
    <button class="btn-order mt-auto">
      ОСТАВИТЬ ЗАЯВКУ
    </button>
  </div>

</template>

<style scoped>

</style>