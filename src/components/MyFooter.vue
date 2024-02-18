<script setup>

</script>

<template>
  <section class="bg-black py-[86px]">
    <div class="container text-gray-dark flex flex-col lg:flex-row md:justify-between h-fit gap-[97px] lg:gap-[150px]">
      <div class="logo">
        <img src="/svg/logo_gray.svg" alt="logo" class="w-[106px]">
      </div>
      <div class="info flex flex-col gap-[90px] md:flex-row">
        <div class="sections">
          <h4 class="text-20px pb-[20px]">РАЗДЕЛЫ</h4>
          <ul class="text-12px [&>li:not(:last-child)]:pb-[10px] pb-[37px]">
            <li><a href="#">О нас</a></li>
            <li><a href="#">Оставить заявку</a></li>
            <li><a href="#">Наше оборудование</a></li>
            <li><a href="#">запасные части</a></li>
          </ul>
          <h4 class="text-15px pb-[25px]">АВТОРЫ САЙТА</h4>
          <div class="flex gap-[82px]">
            <div class="flex flex-col">
              <h5 class="text-12px pb-[7px]">UX/UI Дизайн</h5>
              <p>Никита Усенко</p>
            </div>
            <div class="flex flex-col">
              <h5 class="text-12px pb-[7px]">Frontend</h5>
              <p>Роман Римский</p>
            </div>
          </div>
        </div>
        <div class="address">
          <h4 class="text-20px pb-[20px]">АДРЕС</h4>
          <p class="text-12px pb-[10px]">Московская обл., г. Коломна, пос.Радужный, д. 53</p>
          <p class="text-12px pb-[10px]">texreschenie.plus@yandex.ru</p>
        </div>
        <div class="contacts">
          <h4 class="text-20px pb-[20px]">КОНТАКТЫ</h4>
          <p>+7 (926) 596 58 55</p>
          <p>+7 (915) 351 95 65</p>
        </div>
      </div>
    </div>
  </section>
</template>



<style scoped>

</style>