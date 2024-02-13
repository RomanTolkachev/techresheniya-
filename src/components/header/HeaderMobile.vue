<script setup>

import {ref, watch} from "vue";

const props = defineProps({
  ifScrolled: {
    type: Boolean,
  }
})

const ifOpen = ref(false);

const opacityValue = ref(1);

watch(() => props.ifScrolled, () => {
  props.ifScrolled === false ? opacityValue.value = 1 : opacityValue.value = 0;
  if (props.ifScrolled) {
    const timerId = setInterval(() => opacityValue.value += 0.05, 35);
    watch(() => opacityValue.value, () => {
      if (opacityValue.value >= Number(1)) {
        clearInterval(timerId)
      }
    })
  }
})

</script>

<template>
  <div
      v-bind:style="{opacity: opacityValue}"
      class="z-[100]"
      v-bind:class="{'fixed': props.ifScrolled, 'w-full': props.ifScrolled,}"
  >
    <header
        class="px-[20px] h-[65px]"
        v-bind:class="{'bg-gradient-to-b from-gray-light/95 to-gray-dark/95 backdrop-blur-sm h-[65px]': props.ifScrolled}"
    >
      <div class="flex justify-between items-center h-full">
        <a class="block" href="#">
          <img class="block" src="@/assets/svg/ЛОГО.svg" alt="logo">
        </a>
        <div
            class="w-[40px]"
            v-on:click="ifOpen = !ifOpen">
          <img
              src="/svg/burger.svg"
              alt="burg">
        </div>
      </div>
      <nav
          class="absolute w-full top-0 left-0 text-20px bg-gray-burger transition-all duration-300"
          v-bind:class="[ifOpen ? 'left-0' : 'left-[-100%]']"
      >
        <div class="header__logo p-[10px] border-solid border-b-[1px] flex justify-between relative">
          <a class="block " href="#">
            <img class="block " src="@/assets/svg/ЛОГО.svg" alt="logo">
          </a>
          <div
              class="w-[40px] absolute top-0 right-0 m-[15px]"
              v-on:click="ifOpen = !ifOpen"
          >
            <img class="block"
                 src="/svg/cancel.svg"
                 alt="x">
          </div>
        </div>
<!--        <ul>-->
<!--          <li-->
<!--              v-for="item in menu"-->
<!--              class="p-[10px] border-solid border-b-[1px]"-->
<!--          >-->
<!--            <a href="">{{ item }}</a>-->
<!--          </li>-->
<!--        </ul>-->
      </nav>
    </header>
  </div>
</template>

<style scoped>

</style>