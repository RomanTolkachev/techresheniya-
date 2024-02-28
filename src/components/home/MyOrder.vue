<script setup>


</script>

<template>
  <section class="bg-grad py-[86px]">
    <div class="container">
      <div class="bg-white flex flex-col lg:flex-row items-center rounded-[20px] py-[75px] md:px-[105px] justify-center gap-[25px] lg:gap-[124px]">
        <div class="lg:self-start">
          <h3 class="text-order-header font-regular mb-[15px] lg:mb-10 text-center">
            Есть вопросы или хотите <br> оставить заявку?
          </h3>
          <p class="text-15-20 text-center">Заполните форму и мы свяжемся с вами.</p>
        </div>
        <form class="flex flex-col gap-[25px] md:w-[313px]">
          <input
              type="text"
              placeholder="Ваше имя"
              class="px-[42px] py-[35px] bg-gray-light rounded-[10px] text-15-20"
          >
          <input
              type="text"
              placeholder="Номер телефона"
              class="px-[42px] py-[35px] bg-gray-light rounded-[10px] text-15-20"
          >
          <button class="w-full bg-grad p-px rounded-[10px] h-[100px]">
          <span class="bg-white w-full h-full rounded-[9px] flex flex-col justify-center group hover:bg-gradient-to-r hover:from-gradient-darker hover:to-gradient-lighter transition-all">
            <span class="w-fit mx-auto bg-grad bg-clip-text text-20px font-regular text-transparent group-hover:text-white transition-all">ОСТАВИТЬ ЗАЯВКУ</span>
          </span>
          </button>
        </form>
      </div>
    </div>

  </section>
</template>



<style scoped>

</style>