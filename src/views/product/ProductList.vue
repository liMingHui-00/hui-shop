<script setup lang="ts">
// 创建一个ref数组
const products = ref<Product[]>([])

// 创建一个页码
const pageNumber = ref(1)

// 加载数据
const url = computed(() => `products?page=${pageNumber.value}`)
const { data, isFetching } = useFetch(url).json<Page<Product>>()
// 注入依赖
const scrollEle = inject<Ref<HTMLDivElement>>(SCROLL_ELE)

watchEffect(() => {
  if (data.value) {
    products.value.push(...data.value.data)
  }
})

useInfiniteScroll(scrollEle, () => {
  if (data.value && pageNumber.value < data.value.totalPages) {
    // 判断是否达到最后一页
    pageNumber.value++
  }
}, {
  distance: 10,
  // 节流
  interval:200
})

</script>

<template>
  <div>
  <div class="product-list">
    <div class="product" v-for="item in products" :key="item.id">
      <div class="img-wrap">
        <img :src="item.image_url" :alt="item.name" />
      </div>
      <h2 class="name">{{ item.name }}</h2>
      <h3 class="price">{{ item.price }}</h3>
    </div>
  </div>
  <p class="msg" v-show="isFetching">---- 加载中 ----</p>
  <p class="msg" v-show="!isFetching && data?.totalPages === pageNumber">
    ---- 已经加载到最后 ----
  </p>  </div>
</template>

<style lang="scss" scoped>
.product-list {
  display: grid;
  grid-template-columns: 1fr 1fr;

  .product {
    padding: 20rem;

    .img-wrap {
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      img{
        width: 100%;
      }
    }

    .name {
      font-size: 15rem;
      color: var(--light-color);
    }

    .price {
      &::before {
        content: '￥';
      }
    }
  }
}

.msg {
  text-align: center;
  font-size: 14rem;
}</style>
