import { defineEventHandler } from 'h3'
import Model from '~/server/models/pages/edit/admin/item'

export default defineEventHandler(async (event) => {
  try {
    const { from, to } = getQuery(event)
    return await Model.find().skip(from).limit(to)
  } catch (e) {
    return {
      code: 500,
      message: e.message,
    }
  }
})
