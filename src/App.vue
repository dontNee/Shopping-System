<script setup lang="ts">
import ShoppingHead from "./components/shoppinghead/ShoppingHead.vue"
import ShoppingFoot from "./components/shoppingfoot/ShoppingFoot.vue"
import { watch, computed } from "vue";
import { useRouter, useRoute } from 'vue-router'

// 获取路由信息
const route = useRoute();

// 是否需要页头页脚
const hasHeaderFooter = computed(() => !route.meta.fullPage);

</script>

<template>
  <header v-show="hasHeaderFooter">
    <shopping-head></shopping-head>
  </header>

  <main>
    <RouterView></RouterView>
  </main>

  <footer v-show="hasHeaderFooter">
    <shopping-foot></shopping-foot>
  </footer>
</template>

<style scoped>
</style>
