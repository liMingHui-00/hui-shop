<template>
  <div class="category-list">
    <div class="category-item" v-for="item in categoryData" :key="item.id">
      <SvgIcon :name="item.icon"></SvgIcon>
      <span>{{ item.name }}</span>
    </div>
  </div>

</template>

<script setup lang="ts">
import { type SvgName } from '~virtual/svg-component';
let categoryData: Array<{
  id: number
  name: string
  icon: SvgName
}> = [{
  id: 1,
  name: '手机数码',
  icon: 'phone'
}, {
  id: 2,
  name: '家居生活',
  icon: 'chair'
}, {
  id: 3,
  name: '服饰鞋帽',
  icon: 'clothing'
}, {
  id: 4,
  name: '电脑办公',
  icon: 'computer'
}, {
  id: 5,
  name: '个护化妆',
  icon: 'person'
}, {
  id: 6,
  name: '母婴用品',
  icon: 'baby'
}, {
  id: 7,
  name: '食品饮料',
  icon: 'food'
}, {
  id: 8,
  name: '运动户外',
  icon: 'outdoor'
}]

</script>

<style scoped lang="scss">
.category-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 16rem;

  .category-item {
    width: 25%;
    margin-bottom: 10px;
    text-align: center;

    span {
      display: block;
    }
  }

}</style>