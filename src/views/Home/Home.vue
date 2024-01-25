<template>

  <div ref="scrollEle">
<h1 class="title">辉店</h1>
<!-- 分类列表 -->
<Category></Category>
<!-- 商品列表 -->
<ProductList></ProductList>
  </div>
</template>

<script setup lang="ts">
// 创建一个变量来接收div
const scrollEle = ref(null)
// 把div传递给product List组件
provide(SCROLL_ELE,scrollEle)
</script>

<style lang="scss" scoped>
.title{
  text-align: center;
}
</style>