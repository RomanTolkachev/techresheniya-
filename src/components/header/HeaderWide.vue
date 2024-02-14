<script setup>
import eventBus from "@/eventBus.js";

const props = defineProps({
  menu: {
    required: true,
  }
})

</script>

<template>
  <div
      class="z-[100] fixed top-0 bg-white w-full"
  >
    <header class="flex text-base justify-between items-center h-[65px] px-[15px] text-black shadow-lg">
        <div
            class="header__logo"
            v-on:click="eventBus.emit('scrollTo', 'hero')"
        >
            <img class="block transition-all hover:scale-[1.05]" src="@/assets/svg/ЛОГО.svg" alt="logo">
        </div>
        <nav
            class=""
        >
          <ul class="flex text-center w-fit gap-5">
            <li
                v-for="item in props.menu"
                v-on:click="eventBus.emit('scrollTo', item.scrollId)"
                class="hover:-translate-y-0.5 hover:drop-shadow-[-2px_13px_23px_rgba(59,56,92,1)] text-center transition-all">
                {{ item.name }} {{ item.scrollId }}
            </li>
          </ul>
        </nav>
    </header>
  </div>
</template>

<style scoped>

</style>