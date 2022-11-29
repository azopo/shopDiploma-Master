import { defineStore } from 'pinia'

export const itemsStore = defineStore('itemsStore', {
  actions: {
    async create(image, name, price, characteristics) {
      try {
        const formData = new FormData()
        formData.append('files', image)
        await useFetch('/api/pages/edit/admin/upload', {
          method: 'POST',
          body: formData,
        }).then(() => {
          useFetch('/api/pages/edit/admin/items', {
            method: 'POST',
            body: {
              image: image.name,
              name,
              price,
              characteristics,
            },
          })
        })
      } catch (e: any) {
        console.log(e)
      }
    },
  },
})
