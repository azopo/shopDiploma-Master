import { defineStore } from 'pinia'

export const itemsStore = defineStore('itemsStore', {
  state: () => ({
    page: 1,
  }),
  getters: {
    getPage: (state) => state.page,
  },
  actions: {
    changePage(page: number) {
      this.page = page
    },
    async create(
      image: File,
      name: string,
      price: string,
      characteristics: Object
    ) {
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
