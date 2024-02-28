<script setup>
import {piniaStorage} from "@/stores/pinia.js";
import {onClickOutside} from "@vueuse/core";
import {ref} from "vue";
import {storeToRefs} from "pinia";
import { usePlayer } from '@vue-youtube/core';
const youtube = ref();
usePlayer('bnVUHWCynig', youtube);


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
    <div ref="videoRef" class="bg-gray-burger h-full mx-auto rounded-xl p-4">
        <div class="mx-auto w-full h-full flex flex-col">
          <button v-on:click="toggleVideoOpen" class="block h-fit w-fit self-end rounded-xl active:bg-gray-light md:active:bg-gray-burger p-2.5">
            <span class="w-full select-none text-gray-dark">закрыть</span>
          </button>
          <div class=" w-full h-full rounded-xl" ref="youtube" />
        </div>
    </div>
  </section>
</template>

<style scoped>

</style>