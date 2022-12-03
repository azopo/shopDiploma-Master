<template>
  <div class="container mt-ad-[20]">
    <div
      v-for="(order, i) in ordersInfo"
      :key="i"
      class="border p-ad-[10] rounded bg-primary-1 text-secondary-1 text-ad-[20]"
    >
      <p>
        ПІБ: <span class="font-semibold">{{ order.name }}</span>
      </p>
      <p>
        Номер телефону: <span class="font-semibold"> {{ order.phone }}</span>
      </p>
      <p>
        Електронна пошта: <span class="font-semibold">{{ order.email }}</span>
      </p>
      <p>
        Спосіб доставки: <span class="font-semibold">{{ order.delivery }}</span>
      </p>
      <p>
        Спосіб оплати: <span class="font-semibold">{{ order.pay }}</span>
      </p>
      <p>
        Номер замовлення: <span class="font-semibold">{{ order.orderId }}</span>
      </p>
      <div class="mt-ad-[20]">
        <button
          class="bg-success-1 text-secondary-1 rounded p-ad-[10] mr-ad-[20] hover:bg-success-0 hover:text-secondary-0"
        >
          Приняти
        </button>
        <button
          class="bg-danger-1 text-secondary-1 rounded p-ad-[10] hover:bg-danger-0 hover:text-secondary-0"
        >
          Видалити
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'admin',
})
const { data: orders } = await useAsyncData('orderInfo', () =>
  $fetch(`/api/pages/by/order`, { method: 'GET' })
)
const ordersInfo = computed(() => {
  return orders.value
})
</script>
