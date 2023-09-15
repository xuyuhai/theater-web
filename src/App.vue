<script setup>
import Header from '../src/components/common/Header.vue'
</script>

<template>
  <Header />
  <router-view />
</template>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}
img {
  display: block;
}
html,
body {
  width: 100vw;
  overflow-x: hidden;
}
</style>
