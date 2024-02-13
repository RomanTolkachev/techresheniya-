<script setup>

import {ref, watch} from "vue";

const props = defineProps({
  ifScrolled: {
    type: Boolean,
  }
});

const opacityValue = ref(1);

watch(() => props.ifScrolled, () => {
  props.ifScrolled === false ? opacityValue.value = 1 : opacityValue.value = 0;
  if (props.ifScrolled === true) {
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
        class="hero__header flex text-base justify-between items-center h-[65px] px-[15px] text-white "
        v-bind:class="{'bg-gradient-to-b from-gray-light/95 to-gray-dark/95 backdrop-blur-sm h-[55px]': props.ifScrolled}"
    >
        <div class="header__logo">
          <a class="block" href="#">
            <img class="block" src="@/assets/svg/ЛОГО.svg" alt="logo">
          </a>
        </div>
        <nav class="header__navbar self-start md:self-center hidden md:block">
          <ul class="navbar flex flex-col gap-5">Наше производство
            <li class="navbar__product hidden hover:underline underline-offset-2"><a href="">Оборудование</a></li>
            <li class="navbar__tools hidden hover:underline underline-offset-2"><a href="">Запасне части</a></li>
          </ul>
        </nav>
        <div class="header__about-us hover:underline underline-offset-2 hidden md:block">о нас</div>
    </header>
  </div>
</template>

<style scoped>

</style>