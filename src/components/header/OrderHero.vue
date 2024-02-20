<script setup>
import {piniaStorage} from "@/stores/pinia.js";
import {onClickOutside} from "@vueuse/core";
import {ref} from "vue";
import {storeToRefs} from "pinia";


const pinia = piniaStorage();
const toggleOrderWindow = pinia.toggleOrderWindow;
const { isOrderOpen } = storeToRefs(pinia);
const orderRef = ref(null);

onClickOutside(orderRef, () => {
  if (isOrderOpen.value === true) {
    isOrderOpen.value = false;
  }
})

</script>

<template>
  <section class="h-[calc(100svh-65px)] w-full fixed left-1/2 -translate-x-1/2 container py-6">
    <div ref="orderRef" class=" flex flex-col bg-gray-burger mx-auto w-full max-w-xl h-full rounded-xl p-4">
        <div class="flex justify-end">
          <button v-on:click="toggleOrderWindow" class="rounded-xl active:bg-gray-light md:active:bg-gray-burger w-fit p-2.5">
            <span class="w-fit select-none text-gray-dark">закрыть</span>
          </button>
        </div>
        <form class="flex [&>*>textarea]:resize-none flex-col w-full [&>*>textarea]:text-gray-dark [&>*>textarea]:border-2 [&>*>textarea]:border-white [&>*>textarea:focus]:border-gray-dark [&>*>textarea:focus]:outline-none [&>*>textarea]:focus:border-pink-500 [&>*>textarea]:w-full [&>*>textarea]:rounded-xl [&>*>textarea]:p-2.5 gap-5" action="">
          <label class="mt-2.5" for="">
            <textarea class="" type="text" placeholder="имя"></textarea>
          </label>
          <label for="">
            <textarea type="text" placeholder="номер телефона"></textarea>
          </label>
          <label for="">
            <textarea class="" type="text" placeholder="дополнительная информация"></textarea>
          </label>
        </form>
        <button class="bg-grad p-2.5 mt-auto rounded-xl w-full text-white hover:drop-shadow-[-2px_13px_23px_rgba(59,56,92,0.2)] hover:scale-[1.01] transition-all">отправить</button>
    </div>
  </section>
</template>

<style scoped>

</style>