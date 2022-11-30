<template>
  <nav aria-label="Page navigation example">
    <ul class="inline-flex items-center -space-x-px">
      <li
        v-if="currentPage !== 1"
        class="py-ad-[15] px-ad-[10] border rounded cursor-pointer bg-primary-1 text-secondary-1 hover:bg-primary-0 hover:text-secondary-0"
        @click="prevPage"
      >
        <Icon name="ic:baseline-navigate-before" />
      </li>
      <li
        v-for="(page, i) in pages"
        :key="i"
        class="py-ad-[15] px-ad-[10] border rounded cursor-pointer"
        :class="
          currentPage === page
            ? 'bg-secondary-1 text-primary-1 hover:bg-secondary-0 hover:text-primary-0'
            : 'bg-primary-1 text-secondary-1 hover:bg-primary-0 hover:text-secondary-0'
        "
        @click="changePage(page)"
      >
        {{ page }}
      </li>
      <li
        v-if="currentPage !== pages"
        class="py-ad-[15] px-ad-[10] border rounded cursor-pointer bg-primary-1 text-secondary-1 hover:bg-primary-0 hover:text-secondary-0"
        @click="nextPage"
      >
        <Icon name="ic:baseline-navigate-next" />
      </li>
    </ul>
  </nav>
</template>
<script setup lang="ts">
import { itemsStore } from '~/store/pages/edit/admin/items'

const { data } = await useAsyncData('pages', () =>
  $fetch('/api/pages/edit/admin/itemsLength')
)
const pages = computed(() => {
  return Math.ceil(data.value / 10)
})
const changePage = (page: number) => {
  itemsStore().changePage(page)
}
const prevPage = () => {
  itemsStore().changePage(itemsStore().getPage - 1)
}
const nextPage = () => {
  itemsStore().changePage(itemsStore().getPage + 1)
}
const currentPage = computed(() => itemsStore().getPage)
</script>
