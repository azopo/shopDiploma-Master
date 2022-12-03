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
  <!--  <button-->
  <!--    class="flex justify-center items-center rounded w-ad-[60] h-auto text-danger-1 hover:text-danger-0 ml-ad-[2] text-ad-[30]"-->
  <!--  >-->
  <!--    <Icon name="material-symbols:exit-to-app" />-->
  <!--  </button>-->
</template>
<style>
.router-link-active {
  border-bottom: 1px solid #fff;
}
</style>
