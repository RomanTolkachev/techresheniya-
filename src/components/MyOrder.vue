<script setup>


</script>

<template>
  <section class="bg-grad py-[86px]">
    <div class="bg-white flex flex-col md:flex-row container rounded-[20px] p-[16px] md:py-[75px] md:px-[105px] justify-between gap-[124px]">
      <div>
        <h3 class="text-32px font-regular mb-10">
          Есть вопросы или хотите <br> оставить заявку?
        </h3>
        <p class="text-20px">Заполните форму и мы свяжемся с вами.</p>
      </div>
      <form class="flex flex-col gap-[25px] md:w-[313px]">
        <input
            type="text"
            placeholder="Ваше имя"
            class="px-[42px] py-[35px] bg-gray-light rounded-[10px] text-20px"
        >
        <input
            type="text"
            placeholder="Номер телефона"
            class="px-[42px] py-[35px] bg-gray-light rounded-[10px] text-20px"
        >
        <button class="w-full bg-grad p-px rounded-[10px] h-[100px]">
          <span class="bg-white w-full h-full rounded-[9px] flex flex-col justify-center group hover:bg-gradient-to-r hover:from-gradient-darker hover:to-gradient-lighter transition-all">
            <span class="w-fit mx-auto bg-grad bg-clip-text text-20px font-regular text-transparent group-hover:text-white transition-all">ОСТАВИТЬ ЗАЯВКУ</span>
          </span>
        </button>
      </form>
    </div>
  </section>
</template>



<style scoped>

</style>