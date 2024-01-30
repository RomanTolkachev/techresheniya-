<script setup>
import { RouterLink, RouterView } from 'vue-router'

import MyHero from "./components/TheHero.vue"
import MyProd from "./components/MyProduct.vue"
import MyItems from "@/components/MyItems.vue";
import MyAbout from "@/components/MyAbout.vue";
import MyOrder from "@/components/MyOrder.vue";
import MyFooter from "@/components/MyFooter.vue";

</script>

<template>
  <MyHero></MyHero>
  <MyProd></MyProd>
  <MyItems></MyItems>
  <MyAbout></MyAbout>
  <my-order></my-order>
  <MyFooter></MyFooter>
</template>

<script>

</script>