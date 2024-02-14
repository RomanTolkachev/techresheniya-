<script setup>

</script>

<template>
  <div
      class="z-[100] fixed top-0 bg-white w-full"
  >
    <header
        class="flex text-base justify-between items-center h-[65px] px-[15px] text-black shadow-lg"
    >
        <div class="header__logo">
          <a class="block" href="#">
            <img class="block" src="@/assets/svg/ЛОГО.svg" alt="logo">
          </a>
        </div>
        <nav
            class="self-start md:self-center hidden md:block relative -ml-[60px]"
        >
          <h4>Наше производство</h4>
          <ul class=" text-center absolute transition-all w-full hidden">
            <li class="hover:underline underline-offset-2 h-fit text-center"><a href="">Оборудование</a></li>
            <li class="hover:underline underline-offset-2 h-fit text-center"><a href="">Запасные части</a></li>
          </ul>
        </nav>
        <div class="header__about-us hover:underline underline-offset-2 hidden md:block">о нас</div>
    </header>
  </div>
</template>

<style scoped>

</style>