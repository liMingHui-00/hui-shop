<template>
  <template v-if="!error">
    <button class="back" @click="$router.back()">
      <SvgIcon name="back"></SvgIcon>
    </button>
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
        <SvgIcon name="remove"></SvgIcon> <input type="text">
        <SvgIcon name="plus"></SvgIcon>
        <button>加入购物车</button>
      </div>
    </div>
  </template>
  <!-- 如果访问的数据不存在 -->
  <span v-else>
    数据错误...
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{ id: string }>()
let { data, error } = useFetch(`products/${props.id}`).json<Product>()
</script>

<style scoped lang="scss">
/* 回退按钮 */
.back {
  position: fixed;
  top: 10rem;
  left: 10rem;
  width: 20rem;
  height: 20rem;
  border: 1px solid #000;
  background-color: var(--primary-color);
  cursor: pointer;
  border-radius: 8rem;

  svg {
    color: var(--text-color);
    font-size: 10rem
  }
}

.product-wrap {
  border: 1px solid #000;
}
</style>