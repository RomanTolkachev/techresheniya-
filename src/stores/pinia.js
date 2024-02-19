import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const piniaStorage = defineStore('mobileIsOpen', () => {
  const piniaIfOpen = ref(false);
  function toggle() {
    piniaIfOpen.value = !piniaIfOpen.value
  }

  return { piniaStorage, piniaIfOpen, toggle }
})
