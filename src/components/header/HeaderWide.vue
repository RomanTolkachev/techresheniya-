<script setup>

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
        <div class="header__logo">
          <a class="block" href="#">
            <img class="block transition-all hover:scale-[1.05]" src="@/assets/svg/ЛОГО.svg" alt="logo">
          </a>
        </div>
        <nav
            class="-ml-[60px]"
        >
          <ul class="flex text-center w-fit gap-5">
            <li
                v-for="item in props.menu"
                class="hover:-translate-y-0.5 hover:drop-shadow-[-2px_13px_23px_rgba(59,56,92,1)] text-center transition-all">
              <a href="#">{{ item.name }}</a>
            </li>
          </ul>
        </nav>
    </header>
  </div>
</template>

<style scoped>

</style>