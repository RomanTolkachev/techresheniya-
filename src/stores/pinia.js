import {onMounted, ref, watch} from 'vue'
import { defineStore } from 'pinia'

export const piniaStorage = defineStore('mobileIsOpen', () => {

  // burger
  const piniaIfOpen = ref(false);
  function toggle() {
    piniaIfOpen.value = !piniaIfOpen.value
  }

  // scroll
  const views = ref({})
  const scrollTo = (to) => {
    views.value[to].scrollIntoView({behavior: "smooth"})
  }
  const isScrollLocked = ref(false);
  const scrollPosition = ref(0)

    onMounted(() => {
        watch(() => isOrderOpen.value, () => {
            if (isOrderOpen.value === true) {
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

  return { piniaStorage, piniaIfOpen, toggle, scrollTo, views, isOrderOpen, toggleOrderWindow, isVideoOpen, toggleVideoOpen}

},
  {
    persist: true,
  }
)
