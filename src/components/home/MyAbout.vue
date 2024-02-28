<script setup>

import {onMounted, ref} from "vue";
import {piniaStorage} from "@/stores/pinia.js";
const pinia = piniaStorage()
const aboutRef = ref(null);

onMounted(() => {
  pinia.views.aboutRef = aboutRef.value
})

</script>

<template>
  <section ref="aboutRef" class="bg-gray-light py-[100px]">
    <div class="container">
      <div class="mx-auto w-fit ">
        <div class="button-rim">
          <div class="button-rim__bg">
            <h1 class="button-rim__text">
              О нас
            </h1>
          </div>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row mt-16 justify-center gap-[20px]">
        <article class=" w-auto p-[16px] md:px-[100px] md:py-[60px] text-20px font-regular rounded-[20px] bg-white">
          <div>
            <p>«Техрешение+» возникло вследствие ликвидации одного из старейших отечественных предприятий
              машиностроения, являвшегося единственным производителем санитарного оборудования ГА (генератора аэрозольного),
              предназначенного для дезинфекции и дезинсекции птицефабрик, инкубаторов, животноводческих комплексов,
              убойных пунктов, санитарных боен, овощехранилищ, зернохранилищ и тд.
            </p> <br>
            <p>Мы смогли не только восстановить, но и усовершенствовать технологию
              производства и на сегодняшний день наш завод производит три модели
              аэрозольных генераторов горячего тумана: ГА-2; Га-3 и ГА-4. Благодаря
              оригинальной разработке конструкции генератора (патент РФ на полезную
              модель № 127432), нами достигнута максимальная производительность и эффективность,
              а уменьшение дисперсности тумана улучшило проникающие характеристики и позволило
              снизить расход дезинфицирующих растворов.
            </p>
          </div>
        </article>
        <div class="flex justify-center gap-[20px] lg:flex-col">
          <div class="w-fit lg:w-[300px] overflow-hidden mb-1.5 bg-grad rounded-[12px] p-[4px]">
            <img
                src="/img/image%202.png"
                alt=""
                class="rounded-[10px] aspect-square object-cover"
            >
          </div>
          <div class="w-fit lg:w-[300px] overflow-hidden mb-1.5 bg-grad rounded-[12px] p-[4px]">
            <img
                src="/img/image%203.png"
                alt=""
                class="rounded-[10px] aspect-square object-cover"
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



<style scoped>

</style>