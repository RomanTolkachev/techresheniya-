<script setup>

</script>

<template>
  <div>
    <header class="hero__header flex header text-base justify-between items-center h-[75px] px-[15px] pt-10 md:pt-0 container text-white">
      <div class="header__logo">
        <a class="block" href="#">
          <img class="block" src="@/assets/svg/ЛОГО.svg" alt="logo">
        </a>
      </div>
      <nav class="header__navbar self-start md:self-center hidden md:contents">
        <ul class="navbar flex flex-col gap-5 mt-[8px]">Наше производство
          <li class="navbar__product hidden hover:underline underline-offset-2"><a href="">Оборудование</a></li>
          <li class="navbar__tools hidden hover:underline underline-offset-2"><a href="">Запасне части</a></li>
        </ul>
      </nav>
      <div class="header__about-us hover:underline underline-offset-2 hidden md:contents">о нас</div>
    </header>
  </div>
</template>

<style scoped>

</style>