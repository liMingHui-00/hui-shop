<template>
  <template v-if="!error">
    <button class="back" @click="$router.back()">
      <SvgIcon name="back"></SvgIcon>
    </button>
    <div v-if="data" class="product">
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
        <SvgIcon name="remove" @click="subCount"></SvgIcon> <input type="text" v-model="count">
        <SvgIcon name="plus" @click="count++"></SvgIcon>
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
const count = ref(0)
const subCount = () => {
  if (count.value > 0) {
    count.value = count.value - 1

  } else {
    count.value = 0
  }
}
</script>

<style scoped lang="scss">
.product {
  padding: 25rem;

  .product-wrap {
    img {
      width: 100%;
    }
  }

  .desc-wrap {
    .name {
      font-size: 20rem;
    }

    .price {
      &::before {
        content: "$";
      }

      color:var(--height-color);
      font-size: 16rem;
    }

    .desc {
      color: var(--text-color);
    }
  }

  .cart {
    margin: 20rem 0;
    display: flex;
    align-items: center;

    svg {
      font-size: 16rem;
      border: 1px solid #000;
      border-radius: 5rem;
      padding: 0;
      cursor: pointer;
    }

    input {
      outline: none;
      border: none;
      width: 25rem;
      font-size: 18rem;
      text-align: center;
    }

    button {
      margin-left: 150rem;
      font-size: 16rem;
      cursor: pointer;
    }
  }
}

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