<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutMain from './components/LayoutMain.vue';
import LayoutBottom from './components/LayoutBottom.vue';
import { onBeforeMount } from 'vue';

</script>

<template>
  <div class="container">
    <LayoutNav />
    <LayoutMain />
    <LayoutBottom />
  </div>
</template>
