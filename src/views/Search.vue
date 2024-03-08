<template>
  <div>
    <div class="search">
      <input type="text" v-model="keyword" placeholder="请输入关键字">
      <SvgIcon v-if="keyword" name="close" @click="keyword = ''"></SvgIcon>
    </div>
    <ProductList :keyword="debounced"></ProductList>
  </div>
</template>

<script setup lang="ts">
const keyword = ref('')
const debounced = refDebounced(keyword, 300)
</script>

<style lang="scss" scoped>
.search {
  position: relative;

  input {
    margin: 20rem;
    border: none;
    font-size: 20rem;
    outline: none;
    width: 320rem;
    height: 60rem;
    border-bottom: 1px solid tomato;
  }

  svg {
    position: absolute;
    top: 40rem;
    transform: translate(-50%);
    right: 10rem;
    margin: auto;
    font-size: 25rem;
    cursor: pointer;
  }
}
</style>