import { defineEventHandler } from 'h3'
import Model from '~/server/models/pages/edit/admin/item'

export default defineEventHandler(async () => {
  try {
    return await Model.count()
  } catch (e) {
    return {
      code: 500,
      // @ts-ignore
      message: e.message,
    }
  }
})
