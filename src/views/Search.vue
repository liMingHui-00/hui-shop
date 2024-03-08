<template>
  <div>
    <div class="input-wrap">
      <input type="text" v-model="keyword">
    </div>
    <ProductList :keyword="debounced"></ProductList>
  </div>
</template>

<script setup lang="ts">
const keyword = ref('')
const debounced = refDebounced(keyword, 300)
</script>

<style lang="scss" scoped></style>