<template>
  <div class="container">
    <div class="flex flex-wrap justify-between">
      <lazy-pages-index-card v-for="i in 9" :key="i" />
    </div>

    <lazy-pages-index-pagination />
  </div>
</template>
