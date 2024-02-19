import {onMounted, ref} from 'vue'
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

  onMounted(() => console.log(views.value))

  return { piniaStorage, piniaIfOpen, toggle, scrollTo, views }
})
