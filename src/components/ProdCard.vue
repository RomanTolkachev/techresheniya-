<script setup>
  const props = defineProps({
    details: Object,
  })
  import {ref} from "vue";

</script>

<template>

  <div class="card bg-white sm:w-[590px] h-full  mx-auto p-2.5 rounded-[18px] grid grid-cols-1 md:grid-cols-2  gap-[15px]">
    <div class="card__left flex flex-col">
      <div class="w-full overflow-hidden mb-1.5">
        <img
            :src="details.img"
            alt=""
            class="rounded-[10px] aspect-[1.35] object-cover"
        >
      </div>
      <button class="btn-order mt-auto">
        ОСТАВИТЬ ЗАЯВКУ
      </button>
    </div>
    <div class="card__right description flex flex-col">
      <h3 class="description__header text-black text-20px font-regular mb-[5px]">{{ details.name }}</h3>
      <p class="description__info text-black text-14px font-medium">{{ details.description }}</p>
      <h4 class="description__adv text-black text-20px font-regular mt-auto mb-[5px]">Преимущества</h4>
      <ul class="text-black text-14px font-medium list-disc pl-[20px]">
        <li
        v-for="item in details.advantages">{{ item }}}
        </li>
      </ul>
    </div>
  </div>

</template>

<style scoped>

</style>