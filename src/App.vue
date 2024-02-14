<script setup>
import { RouterLink, RouterView } from 'vue-router'

import MyHero from "./components/TheHero.vue"
import MyProd from "./components/MyProduct.vue"
import MyItems from "@/components/MyItems.vue";
import MyAbout from "@/components/MyAbout.vue";
import MyOrder from "@/components/MyOrder.vue";
import MyFooter from "@/components/MyFooter.vue";
import {onMounted, ref} from "vue";
import eventBus from "@/eventBus.js";

const hero = ref(null);
const product = ref(null);
const items = ref(null);
const about = ref(null);

const views = ref({});

onMounted(() => {
  views.value = {
    hero: hero.value.heroRef,
    product: product.value.productRef,
    items: items.value.itemsRef,
    about: about.value.aboutRef,
  }
})

console.log(eventBus)

eventBus.$on('scrollTo', (data) => {
  console.log(data)
  scrollTo()
})

const scrollTo = (to) => {
  views.value[to].scrollIntoView({behavior: "smooth"})
}

</script>

<template>
  <MyHero ref="hero" v-on:scrollTo="scrollTo"></MyHero>
  <MyProd ref="product"></MyProd>
  <MyItems ref="items"></MyItems>
  <MyAbout ref="about"></MyAbout>
  <my-order></my-order>
  <MyFooter></MyFooter>
</template>

<script>

</script>