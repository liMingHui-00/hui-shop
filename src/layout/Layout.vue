<template>
  <div>
    <div class="main" ref="scrollEle">
      <router-view></router-view>
    </div>
    <nav-bottom></nav-bottom>
  </div>
</template>

<script setup lang="ts">
// 创建一个变量来接收div
const scrollEle = ref(null)
// 把div传递给product List组件
provide(SCROLL_ELE, scrollEle)
</script>

<style lang="scss" scoped>
.main {
  height: calc(100vh - var(--bottom-nav-height));
  overflow: auto;
}
</style>