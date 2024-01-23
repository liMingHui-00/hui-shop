<template>
<main><router-view></router-view></main>
<div class="bottom-nav">
 <router-link to="home">主页</router-link>
 <router-link to="search">搜索框</router-link>
  <router-link to="cart">购物车</router-link>
 <router-link to="user">用户</router-link>
</div>

</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>

main{
height:calc(100vh - var(--bottom-nav-height));
overflow: auto;
}
.bottom-nav{
  height: var(--bottom-nav-height);
  background-color: aqua;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 375rem;
  bottom: 0;
  border: 1px solid #000;
}
a{
  border: 1px solid #000;

}
</style>