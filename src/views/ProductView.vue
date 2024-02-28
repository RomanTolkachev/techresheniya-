<script setup>
import {piniaStorage} from "@/stores/pinia.js";
import {ref} from "vue";
import {products} from '@/assets/products/spare_parts.js'
import {useRoute, useRouter} from "vue-router";


const pinia = piniaStorage();
const prodInfo = ref(null);

const route = useRoute();
const router = useRouter();
const item = products.find((item) => item.id === route.params.id)



</script>

<template>
  <div class="w-full">
          <button v-on:click="router.go(-1)" class="block w-fit self-end rounded-xl  p-3.5 z-30 ">
            <span class="text-20px w-full select-none text-black">назад</span>
          </button>
          <div class="">
              <img class="min-h-full object-cover"
                   v-bind:src="item.img" alt="">
          </div>
  </div>
</template>

<style scoped>

</style>