<script setup lang="ts">
// 创建一个ref数组
const products = ref<Product[]>([])

// 创建一个页码
const pageNumber = ref(1)

// 获取路径
const route = useRoute()
const props = defineProps<{
  keyword?: string
}>()
// 加载数据
const url = computed(() => {
  if (route.params.categoryId) {
    return `products/category/${route.params.categoryId}`
  } else if (props.keyword) {
    return `products/search?name=${props.keyword}`
  } else {
    return `products?page=${pageNumber.value}`
  }
}

)
const { data, isFetching } = useFetch(url).json<Page<Product>>()
// 注入依赖
const scrollEle = inject<Ref<HTMLDivElement>>(SCROLL_ELE)

watchEffect(() => {
  if (data.value) {
    if (data.value.currentPage === 1) {
      products.value = data.value.data
    } else {
      products.value.push(...data.value.data)
    }
  }
})
watch(() => props.keyword, () => {
  pageNumber.value = 1
})
onBeforeRouteUpdate(() => {
  pageNumber.value = 1
})

useInfiniteScroll(scrollEle, () => {
  if (data.value && pageNumber.value < data.value.totalPages) {
    // 判断是否达到最后一页
    pageNumber.value++
  }
}, {
  distance: 10,
  // 节流
  interval: 200
})
// 回到顶部
const { y } = useScroll(scrollEle, { behavior: 'smooth' })
const showBtn = computed(() => y.value > 400)

</script>

<template>
  <svg-icon class="goUp" @click="y = 0" name="up" v-if="showBtn"></svg-icon>
  <div>
    <div class="product-list">
      <!-- /products/2 -->
      <router-link class="product" v-for="item in products" :to='`/products/${item.id}`' :key="item.id">
        <div class="img-wrap">
          <img :src="item.image_url" :alt="item.name" />
        </div>
        <h2 class="name">{{ item.name }}</h2>
        <h3 class="price">{{ item.price }}</h3>
      </router-link>
    </div>
    <p class="msg" v-show="products.length === 0">没有数据！</p>
    <p class="msg" v-show="isFetching">---- 加载中 ----</p>
    <p class="msg" v-show="!isFetching && data?.totalPages === pageNumber">
      ---- 已经加载到最后 ----
    </p>

  </div>
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

      img {
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
}

.goUp {
  position: fixed;
  bottom: 80rem;
  right: 10rem;
  border: 1px solid #000;
  color: var(--height-color);
  cursor: pointer;
  border-radius: 8rem;
  font-size: 30rem
}
</style>
