<template>
  <div>
    <div v-for="item in products" :key="item.id">
    <div class="img-wrap">
      <img :src="item.image_url">
    </div>
    <h2 class="name">{{ item.name }}</h2>
    <h3 class="price">{{ item.price }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
// 创建一个ref数组
const products = ref<Product[]>([])
// 加载数据
fetch(import.meta.env.VITE_BASE_API+'/products')
.then(res => res.json() as Promise<Page<Product>>)
.then(data => products.value=data.data
)

</script>

<style scoped>

</style>