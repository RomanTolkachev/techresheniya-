import {computed, onMounted, ref, watch} from 'vue'
import { defineStore } from 'pinia'

export const piniaStorage = defineStore('mobileIsOpen', () => {

  // burger
  const isBurgerOpen = ref(false);
  function toggle() {
    isBurgerOpen.value = !isBurgerOpen.value
  }

  // scroll into view via scroll bar
  const views = ref({})
  const scrollTo = (to) => {
    views.value[to].scrollIntoView({behavior: "smooth"})
  }


  // scroll blocker

  // если данное вычисляемое свойство возвращает true, то происходит блокировка скролла body
  const isScrollLocked = computed(() => { // тут через "||" добавить любую переменную, в зависимости от которой будет блокировка
      return isOrderOpen.value || isVideoOpen.value || isProductInfoOpen.value
  })


  // вотчер снизу анализирует isScrollLocked и если он true, то произойдет блокировка
  const scrollPosition = ref(0);

    onMounted(() => {
        watch(() => isScrollLocked.value, () => {
            if (isScrollLocked.value === true) {
                scrollPosition.value = window.scrollY;
                document.documentElement.classList.add('start-scrolling')
                document.body.classList.add('stop-scrolling')
                document.body.scroll(0, scrollPosition.value)
            } else {
                document.body.classList.remove('stop-scrolling')
                document.documentElement.classList.remove('start-scrolling')
                document.documentElement.scroll(0, scrollPosition.value)
            }
        })
    })


  //order
  const isOrderOpen = ref(false);
  const toggleOrderWindow = () => {
    isOrderOpen.value = !isOrderOpen.value;
  }

  //video open
      const isVideoOpen = ref(false);
      const toggleVideoOpen = () => {
        isVideoOpen.value = !isVideoOpen.value;
      }

  //productInfoOpen
        const isProductInfoOpen = ref(false);
        const productDetails = ref(null)
        const toggleProductInfo = () => {
            isProductInfoOpen.value = !isProductInfoOpen.value;
        }
        const getProductInfo = (data) => {
            productDetails.value = data;
        }


  return { piniaStorage, isBurgerOpen, toggle, scrollTo, views, isOrderOpen, toggleOrderWindow, isVideoOpen, toggleVideoOpen, isScrollLocked, isProductInfoOpen, productDetails, toggleProductInfo, getProductInfo}

},
  {
    persist: true,
  }
)
