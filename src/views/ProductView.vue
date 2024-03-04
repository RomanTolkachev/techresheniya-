<script setup>
import {piniaStorage} from "@/stores/pinia.js";
import {computed, onMounted, ref, watch} from "vue";
import {products} from '@/assets/products/spare_parts.js'
import {useRoute, useRouter} from "vue-router";
import ArrowLeft from "@/components/svg/ArrowLeft.vue";
import PhoneIcon from "@/components/svg/PhoneIcon.vue";
import SliderArrow from "@/components/svg/SliderArrow.vue";
import OrderBlack from "@/components/buttons/OrderBlack.vue";

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
  <div class="w-full justify-center h-full min-h-svh flex flex-col lg:flex-row font-Onest bg-gray-light py-20">
    <div class="fixed top-0 flex z-10 justify-between w-full bg-gray-light shadow-lg">
      <button v-on:click="router.go(-1)" class="p-2">
        <ArrowLeft class=""></ArrowLeft>
      </button>
      <button class="p-2 flex">
        <span class="lg:hidden leading-3 font-bold text-gray-dark self-center">задать вопрос <br> оператору</span>
        <a href="tel:81234567890" class="hidden lg:inline leading-3 font-bold text-gray-dark self-center mr-5">8-123-456-78-90</a>
        <PhoneIcon></PhoneIcon>
      </button>
    </div>
    <div class="flex flex-col justify-start">
      <h2 class="hidden lg:block text-20px font-bold py-3 max-w-lg w-fit ml-10 text-center">{{ prodInfo.name }}</h2>
      <div ref="sliderRef" class="slider w-full max-w-lg xl:w-[1280px] xl:max-w-3xl aspect-video min-h-80 mx-auto flex overflow-hidden relative">
        <div v-for="picture in prodInfo.img"
             class="dynamic-transition transition-duration slide-wrapper w-full aspect-[1.3] h-full mx-auto flex shrink-0 relative">
          <div
              v-bind:style="{backgroundImage: `url(${picture})`}"
              class="custom-background h-full w-full blur-[60px] brightness-125"></div>
          <img
              class="h-full mx-auto object-cover absolute right-1/2 translate-x-1/2"
              :src="picture" alt="">
        </div>
        <div class="hidden sm:flex w-full justify-between absolute h-full">
          <button @click="prevSlide"><SliderArrow></SliderArrow></button>
          <button @click="nextSlide"><SliderArrow class="rotate-180"></SliderArrow></button>
        </div>
      </div>
      <h4 class="hidden lg:block text-32px font-bold py-3 ml-10">{{ prodInfo.price }} ₽</h4>
      <OrderBlack class="hidden mx-auto !mt-5 lg:block max-w-96"></OrderBlack>
    </div>

    <div class="px-5 w-full max-w-lg mx-auto lg:mx-0 [&>h4]:text-32px [&>h4]:font-bold [&>h4]:py-3
               [&>span]:font-bold">
      <h4 class="md:hidden">
        {{ prodInfo.price }} ₽
      </h4>
      <span class="md:hidden">{{ prodInfo.name }}</span>
      <h4>Описание</h4>
      <span>{{ prodInfo.description }}</span>
      <h4>Характеристики</h4>
      <ul class="list-disc [&>li]:ml-5">
        <li v-for="item in prodInfo.advantages">
          {{ item }}
        </li>
      </ul>
      <h4>Тут можно добавить подробную информацию</h4>
      <article>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, autem dicta dignissimos ea eveniet fugiat, illo laborum magni non quo ratione recusandae repellat, reprehenderit sequi veritatis. Accusantium aliquam architecto consequatur laudantium natus perferendis quia sunt! Eaque sit sunt totam voluptatem.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae dicta dignissimos ex excepturi facilis ipsam ipsum, obcaecati officia perferendis quidem ratione reiciendis tempore. Ab aliquam distinctio molestias pariatur quidem sapiente sit! Aliquam architecto, dolores doloribus nemo quisquam ratione! Commodi, consectetur eaque eveniet officia rem veniam. Adipisci asperiores, autem dignissimos earum illo incidunt ipsam laboriosam magni modi molestiae molestias nam nulla officiis omnis quae quisquam quod repellat, soluta sunt ullam vero vitae voluptate. Adipisci aliquid consequatur eaque eum ex hic, itaque magni, minima molestiae necessitatibus nemo nesciunt nisi nulla numquam officiis placeat qui quidem quo rerum sint totam, ut voluptatibus?</article>
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