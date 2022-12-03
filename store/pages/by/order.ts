import { defineStore } from 'pinia'

export const orderStore = defineStore('orderStore', {
  actions: {
    async createOrder(
      name: string,
      phone: string,
      email: string,
      delivery: string,
      pay: string,
      orderId: string
    ) {
      try {
        await useFetch('/api/pages/by/order', {
          method: 'POST',
          body: {
            name,
            phone,
            email,
            delivery,
            pay,
            orderId,
          },
        })
      } catch (e: any) {
        console.log(e)
      }
    },
  },
})
