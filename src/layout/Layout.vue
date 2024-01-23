<template>
 <router-view class="main"></router-view>
  <div class="bottom-nav">
    <router-link to="home">
      <svg-icon name="home"></svg-icon>
    </router-link>
    <router-link to="search">
      <svg-icon name="search"></svg-icon>
    </router-link>
    <router-link to="cart">
      <svg-icon name="cart"></svg-icon>
    </router-link>
    <router-link to="user">
      <svg-icon name="user"></svg-icon>
    </router-link>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.main {
  height: calc(100vh - var(--bottom-nav-height));
  overflow: auto;
}
.bottom-nav {
  height: var(--bottom-nav-height);
  display: flex;
  justify-content: space-around;
  position: fixed;
  width: 375rem;
  border-top: 1px var(--border-top-color) solid;
  bottom: 0;
}
a{
  font-size: 26rem;
  display: flex;
  width: 25%;
  justify-content: center;
  align-items: center;
  color:var(--text-color);
  -webkit-tap-highlight-color: transparent;
}
.router-link-active{
  color:var(--primary-color)
}

</style>