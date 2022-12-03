<template>
  <nuxt-link
    :to="admin ? undefined : '/item/' + item._id"
    class="relative group hover:shadow-2xl h-full w-ad-[320] border border-gray-200 rounded-lg shadow-md flex flex-col items-center justify-center p-ad-[10] transition-all mb-ad-[20]"
  >
    <span
      class="absolute top-[10px] left-[10px] uppercase rounded bg-primary-1 p-ad-[5] text-ad-[12] text-light-1"
      >Акція</span
    >

    <Icon
      class="absolute top-[10px] right-[10px] uppercase rounded text-ad-[20] text-primary-1 hover:text-primary-0"
      name="ph:heart-thin"
    />
    <div class="h-full w-ad-[200] mb-ad-[20]">
      <nuxt-img
        alt="logo"
        class="w-[100%] h-[100%] object-cover object-center"
        preset="image"
        :src="`/${item.image}`"
      />
    </div>
    <p
      class="text-primary-0 text-ad-[18] text-center mb-ad-[20] transition-all group-hover:text-primary-1"
    >
      {{ item.name }}
    </p>
    <p
      class="text-primary-0 font-semibold text-ad-[16] mb-ad-[10] transition-all group-hover:text-primary-1"
    >
      {{ item.price }}
    </p>
    <button
      v-if="!admin"
      class="bg-primary-0 text-light-0 rounded w-ad-[200] h-ad-[50] uppercase text-ad-[20] font-semibold transition-all group-hover:bg-primary-1 group-hover:text-light-1 hover:font-bold"
      @click.prevent="$router.push('/by/' + item._id)"
    >
      Купити
    </button>

    <lazy-pages-edit-admin-create v-else :item="item" />
  </nuxt-link>
</template>
<script setup lang="ts">
defineProps({
  admin: {
    type: Boolean,
    default: false,
  },
  item: {
    type: Object,
    required: true,
  },
})
</script>
