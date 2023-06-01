<script setup lang="ts">
import ShoppingHead from "./components/shoppinghead/ShoppingHead.vue"
import ShoppingFoot from "./components/shoppingfoot/ShoppingFoot.vue"
</script>

<template>
  <header>
    <shopping-head></shopping-head>
  </header>

  <main>
    <RouterView></RouterView>
  </main>

  <footer>
    <shopping-foot></shopping-foot>
  </footer>
</template>

<style scoped>
</style>
