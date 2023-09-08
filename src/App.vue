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
}
html,
body {
  width: 100vw;
  height: 999999px;
  overflow-x: hidden;
}
</style>
