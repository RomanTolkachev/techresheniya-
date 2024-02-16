<script setup>
import eventBus from "@/eventBus.js";
import {onMounted, ref} from "vue";

const props = defineProps({
  menu: {
    required: true,
  }
});

const ifOpen = ref(false)

defineExpose({
  ifOpen
});

</script>

<template>
  <div class="fixed z-[2] top-0 bg-white w-full">
    <header class="flex text-base justify-between items-center h-[65px] px-[15px] text-black shadow-lg">
        <div
            class="header__logo"
            v-on:click="eventBus.emit('scrollTo', 'hero')">
            <img class="block transition-all hover:scale-[1.05]" src="@/assets/svg/ЛОГО.svg" alt="logo">
        </div>

        <nav>
          <ul class="hidden md:flex text-center w-fit gap-5">
            <li
                v-for="item in props.menu"
                v-on:click="eventBus.emit('scrollTo', item.scrollId)"
                class="hover:-translate-y-0.5 hover:drop-shadow-[-2px_13px_23px_rgba(59,56,92,1)] text-center transition-all">
                {{ item.name }}
            </li>
          </ul>
        </nav>
    </header>
  </div>

  <button v-on:click="ifOpen = !ifOpen" class="overflow-hidden h-[65px] md:hidden fixed top-0 right-0 z-[3] p-[15px] w-[65px] text-center">
    <span :class="{'translate-x-[90px]': ifOpen}" class="duration-500 w-[35px] h-[2px] top-[25px] left-[15px] bg-gray-dark absolute"></span>
    <span :class="{'rotate-45': ifOpen}" class="duration-500 w-[35px] h-[2px] top-[25px] left-[15px] bg-gray-dark absolute translate-y-[7px]"></span>
    <span :class="{'-rotate-45': ifOpen}" class="duration-500 w-[35px] h-[2px] top-[25px] left-[15px] bg-gray-dark absolute translate-y-[7px]"></span>
    <span :class="{'translate-x-[-90px]': ifOpen}" class="duration-500 w-[35px] h-[2px] top-[25px] left-[15px] bg-gray-dark absolute translate-y-[14px]"></span>
  </button>

</template>

<style scoped>

</style>