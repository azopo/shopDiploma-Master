<template>
  <div
    class="bg-primary-1 text-secondary-1 h-ad-[50] flex items-center justify-center"
  >
    <nuxt-link
      class="text-ad-[26] hover:text-secondary-0 mr-ad-[20]"
      to="/edit/admin"
      >Редагувати</nuxt-link
    >
    <nuxt-link
      class="text-ad-[26] hover:text-secondary-0"
      to="/edit/admin/orders"
      >Замовлення</nuxt-link
    >
  </div>
</template>
<style scoped>
.router-link-active {
  border-bottom: 1px solid #fff;
}
</style>
