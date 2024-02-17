import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const store = defineStore('mobileIsOpen', () => {
  const ifOpen = ref(false);
  function toggle() {
    ifOpen.value = !ifOpen.value
  }

  return { store, ifOpen, toggle }
})
