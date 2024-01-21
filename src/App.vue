<script setup lang="ts">
const num = ref(10)
onMounted(()=>{
  console.log(11111);
  
})
const n = computed(()=>num)
</script>

<template>
  <div>app--{{ n }}</div>
</template>

