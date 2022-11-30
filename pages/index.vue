<template>
  <div class="container flex flex-col items-center">
    <div class="flex flex-wrap justify-between">
      <lazy-pages-index-card v-for="(item, i) in items" :key="i" :item="item" />
    </div>

    <lazy-pages-index-pagination />
  </div>
</template>
<script setup lang="ts">
import { itemsStore } from '~/store/pages/edit/admin/items'

const from = (itemsStore().getPage - 1) * 10
const to = (itemsStore().getPage - 1 + 10) * 10
const query = new URLSearchParams({ from, to }).toString()
const { data } = await useAsyncData('items', () =>
  $fetch(`/api/pages/edit/admin/items?${query}`, { method: 'GET' })
)
const items = computed(() => {
  return data.value
})
</script>
