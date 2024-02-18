<script setup>

const props = defineProps({
  details: Object,
})

</script>

<template>

  <div class="card bg-white w-ItemCard h-full mx-auto p-2.5 rounded-[18px] flex flex-col">
    <div class="w-full overflow-hidden mb-[10px]">
      <img
          :src="props.details.img"
          alt=""
          class="rounded-[10px] aspect-[1] object-cover"
      >
    </div>
    <h3 class="card__header text-itemCard-header text-black font-regular text-center mb-[20px]">
      {{ props.details.name }}
    </h3>
    <button class="w-full h-itemCard-order py-2.5 px-[15px] mx-auto rounded-[10px] border-solid border-[1px] border-black bg-transparent hover:bg-black transition-all hover:text-white text-itemCard-order text-black font-regular mt-auto">
      ОСТАВИТЬ ЗАЯВКУ
    </button>
  </div>

</template>

<style scoped>

</style>