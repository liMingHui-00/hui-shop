<template>
  <div class="product_list">
    <div v-for="item in productsWithCorrectImage" :key="item.id">
      <div class="img-wrap">
        <img :src="item.correctImageUrl">
      </div>
      <div class="product_name_price">
        <h2 class="name">{{ item.name }}</h2>
        <h3 class="price">{{ item.price }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

// 创建一个ref数组
const products = ref<Product[]>([])

// 加载数据
fetch(import.meta.env.VITE_BASE_API + '/products')
  .then(res => res.json() as Promise<Page<Product>>)
  .then(data => products.value = data.data)

// 计算属性处理图片地址
const productsWithCorrectImage = computed(() => {
  return products.value.map(item => {
    return {
      ...item,
      correctImageUrl: item.image_url.replace(".avif", "")
    };
  });
});
</script>
<style scoped lang="scss">
.product_list {
  display: flex;
  flex-wrap: wrap;
  padding: 10rem;

  .img-wrap {
    overflow: hidden;
    display: flex;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba($color: #000000, $alpha: .2);
    justify-content: center;
  }

  .product_name_price {
    display: flex;
    flex-direction: column;
  }

  .name {
    color: var(--text-color);
    font-size: 5rem;
    text-align: center;
  }

  .price {
    text-align: center;
    &::before {
      content: '$';
      text-align: center;
    }
  }
}</style>
