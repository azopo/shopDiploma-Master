<template>
  <div class="container flex flex-col items-center px-ad-[50]">
    <div class="flex flex-wrap justify-between">
      <lazy-pages-index-card v-for="i in 9" :key="i" admin />
    </div>
    <lazy-pages-index-pagination />
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'admin',
})
</script>
