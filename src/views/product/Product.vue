<template>
  <div v-if="data">
    <!-- 单个商品的页面 -->
    <div class="product-wrap">
      <img :src="data?.image_url" :alt="data?.name">
    </div>
    <div class="desc-wrap">
      <h2 class="name">{{ data?.name }}</h2>
      <h3 class="price">{{ data?.price }}</h3>
      <p class="desc">{{ data?.description }}</p>
    </div>
    <div class="cart">
      - <input type="text"> +
      <button>加入购物车</button>
    </div>
  </div>
  <!-- 如果访问的数据不存在 -->
  <span v-else>
    数据错误...
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{ id: string }>()
let { data } = useFetch(`products/${props.id}`).json<Product>()
</script>

<style scoped></style>