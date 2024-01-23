<template>
  <main><router-view></router-view></main>
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
main {
  height: calc(100vh - var(--bottom-nav-height));
  overflow: auto;
}

.bottom-nav {
  height: var(--bottom-nav-height);
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 375rem;
  border-top: 1px #ddd solid;
  bottom: 0;
}
a{
  font-size: 26rem;
  color: #999;
}
.router-link-active{
  color:#000
}
</style>