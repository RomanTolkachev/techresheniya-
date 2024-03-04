<script setup>
import {piniaStorage} from "@/stores/pinia.js";
import {computed, onMounted, ref, watch} from "vue";
import {products} from '@/assets/products/spare_parts.js'
import {useRoute, useRouter} from "vue-router";
import ArrowLeft from "@/components/svg/ArrowLeft.vue";
import PhoneIcon from "@/components/svg/PhoneIcon.vue";

const pinia = piniaStorage();

const route = useRoute();
const router = useRouter();
const prodInfo = products.find((item) => item.id === route.params.id);

// carousel
const currenSlideIndex = ref(0)
const startX = ref(0);
const currentX = ref(0);
const deltaX = ref(0);
const sliderRef = ref(null);
const transitionValue = computed(() => {
  return -currenSlideIndex.value * slideWidth.value - deltaX.value;
});
const slideWidth = ref(0)

const prevSlide = () => {
  currenSlideIndex.value--;
  currenSlideIndex.value < 0 ? currenSlideIndex.value = prodInfo.img.length - 1 : currenSlideIndex.value;
}
const nextSlide = () => {
  currenSlideIndex.value++;
  currenSlideIndex.value > prodInfo.img.length - 1 ? currenSlideIndex.value = 0 : currenSlideIndex.value;
}

onMounted(() => {

  // сначала получаем ширину слайда, потом следим за изменением ширины слайдера и перезаписываем значение ширины слайдера
  slideWidth.value = sliderRef.value.offsetWidth;
  const handleResize = (entries) => {
    for (const entry of entries) {
      slideWidth.value = entry.target.offsetWidth
    }
  }
  const observer = new ResizeObserver(handleResize);
  observer.observe(sliderRef.value, { attributes: true,})

  // получаем точку касания и убираем со слайдов задержку transition, чтобы картинка перемещалась быстро
  const handleTouchstart = (event) => {
    startX.value = event.touches[0].clientX
    const slides = document.querySelectorAll('.dynamic-transition');
    slides.forEach(item => {
      item.classList.remove('transition-duration')
    })
  };

  // отслеживаем разницу между первоначальной точкой касания и текущим положением пальца. Свойство transitionX развно этой разнице
  const handleTouchmove = (event) => {
    currentX.value = event.touches[0].clientX;
    deltaX.value = startX.value - currentX.value
  };

  // когда отпускаем палец, убирается задерка на transition свойстве слайдов. Если переместили вбок меньше чем на 70 пикселей, то не свайпнется
  const handleTouchend = () => {
    const slides = document.querySelectorAll('.dynamic-transition');
    slides.forEach(item => {
      item.classList.add('transition-duration')
    })
    if (deltaX.value < 70 && deltaX.value >= 0 || deltaX.value < 0 && deltaX.value > -70) {
      deltaX.value = 0;
    } else if (deltaX.value > 70) {
      nextSlide();
      deltaX.value = 0;
    } else {
      prevSlide();
      deltaX.value = 0;
    }
  }

  // добавляем слушатели на ref слайдера
  sliderRef.value.addEventListener('touchstart', handleTouchstart);
  sliderRef.value.addEventListener('touchmove', handleTouchmove);
  sliderRef.value.addEventListener('touchend', handleTouchend)
})


</script>

<template>
  <div class="w-full h-full flex flex-col font-Onest bg-gray-light pb-20">
    <div class="flex justify-between w-full max-w-lg mx-auto">
      <button v-on:click="router.go(-1)" class="p-2">
        <ArrowLeft class=""></ArrowLeft>
      </button>
      <button class="p-2 flex">
        <span class="leading-3 font-bold text-gray-dark self-center">задать вопрос <br> оператору</span>
        <PhoneIcon></PhoneIcon>
      </button>
    </div>
    <div ref="sliderRef" class="slider w-full max-w-lg aspect-video min-h-80 mx-auto flex overflow-hidden">
      <div v-for="picture in prodInfo.img"
           class="dynamic-transition transition-duration slide-wrapper w-full aspect-[1.3] h-full mx-auto flex shrink-0 relative">
        <div
            v-bind:style="{backgroundImage: `url(${picture})`}"
            class="custom-background h-full w-full blur-[60px] brightness-125"></div>
        <img
            class="h-full mx-auto object-cover absolute right-1/2 translate-x-1/2"
            :src="picture" alt="">
      </div>
    </div>
    <div class="flex justify-center gap-5">
      <button @click="prevSlide">prev</button>
      <button @click="nextSlide">next</button>
    </div>
    <div class="px-5 w-full max-w-lg mx-auto [&>h4]:text-32px [&>h4]:font-bold [&>h4]:py-3
               [&>span]:font-bold">
      <h4>
        {{ prodInfo.price }} ₽
      </h4>
      <span>{{ prodInfo.name }}</span>
      <h4>Описание</h4>
      <span>{{ prodInfo.description }}</span>
      <h4>Характеристики</h4>
      <ul class="list-disc [&>li]:ml-5">
        <li v-for="item in prodInfo.advantages">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.dynamic-transition {
  transform:v-bind(`translateX(${transitionValue}px)`);

}
.transition-duration {
  transition-duration: 300ms;
}

.custom-background {
  background-size: 100% 100%;
}
</style>