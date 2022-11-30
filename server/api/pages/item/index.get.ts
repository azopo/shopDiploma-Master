import { defineEventHandler } from 'h3'
import Model from '~/server/models/pages/edit/admin/item'

export default defineEventHandler(async (event) => {
  try {
    const { id } = getQuery(event)
    return await Model.findById(id)
  } catch (e) {
    return {
      code: 500,
      message: e.message,
    }
  }
})
