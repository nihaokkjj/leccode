<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
//这两个的样式自己在首页里面去扣吧(Home)

</script>

<template>
<div>
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
</div>
</template>
