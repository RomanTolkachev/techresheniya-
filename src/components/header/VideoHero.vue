<script setup>
import {piniaStorage} from "@/stores/pinia.js";
import {onClickOutside} from "@vueuse/core";
import {ref} from "vue";
import {storeToRefs} from "pinia";


const pinia = piniaStorage();
const toggleVideoOpen = pinia.toggleVideoOpen;
const { isVideoOpen } = storeToRefs(pinia);
const videoRef = ref(null);

onClickOutside(videoRef, () => {
  if (isVideoOpen.value === true) {
    isVideoOpen.value = false;
  }
})

</script>

<template>
  <section class="h-[calc(100svh-65px)] min-h-[500px] w-full fixed left-1/2 -translate-x-1/2 container py-6">
    <div ref="videoRef" class=" flex flex-col bg-gray-burger mx-auto w-full max-w-xl h-full  rounded-xl p-4">
        <div class="flex justify-end">
          <button v-on:click="toggleVideoOpen" class="rounded-xl active:bg-gray-light md:active:bg-gray-burger w-fit p-2.5">
            <span class="w-fit select-none text-gray-dark">закрыть</span>
          </button>
        </div>
    </div>
  </section>
</template>

<style scoped>

</style>