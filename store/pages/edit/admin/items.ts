import { defineStore } from 'pinia'

export const itemsStore = defineStore('itemsStore', {
  actions: {
    async create(email: string, password: string, role: string) {
      try {
        await $fetch('/api/pages/edit/admin/items', {
          method: 'POST',
          body: {
            email,
            password,
            role,
          },
        }).then((data) => {
          console.log(data)
        })
      } catch (e: any) {
        console.log(e)
      }
    },
  },
})
