<script setup>
import {piniaStorage} from "@/stores/pinia.js";
import {onClickOutside} from "@vueuse/core";
import {ref} from "vue";
import {storeToRefs} from "pinia";
import { usePlayer } from '@vue-youtube/core';

const props = defineProps({
  details: Object,
})

const pinia = piniaStorage();
const { toggleProductInfo } = pinia;
const { isProductInfoOpen, productDetails } = storeToRefs(pinia);
const prodInfo = ref(null);

onClickOutside(prodInfo, () => {
  if (isProductInfoOpen.value === true) {
    isProductInfoOpen.value = false;
  }
})

</script>

<template>
  <div class="h-[calc(100svh-65px)] w-full fixed landscape:left-1/2 top-[65px] landscape:-translate-x-1/2 landscape:container py-6 portrait:py-0">
    <div ref="prodInfo" class="landscape:h-full w-fit mx-auto rounded-xl">
        <div class="mx-auto w-full landscape:h-full flex flex-col">
          <button v-on:click="toggleProductInfo" class="block w-fit self-end rounded-xl active:bg-gray-light md:active:bg-gray-burger p-3.5 z-30 absolute">
            <span class="text-20px w-full select-none text-black">закрыть</span>
          </button>
          <div class="overflow-hidden landscape:min-h-full portrait:min-w-full portrait:aspect-square">
              <img class="min-h-full object-cover"
                   v-bind:src="productDetails.img" alt="">
          </div>
        </div>
    </div>
  </div>
</template>

<style scoped>

</style>