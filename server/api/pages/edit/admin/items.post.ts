import { defineEventHandler, readBody } from 'h3'
import Model from '~/server/models/pages/edit/admin/item'

export default defineEventHandler(async (event) => {
  const { image, name, price, characteristics } = await readBody(event)
  const item = new Model({
    image,
    name,
    price,
    characteristics,
  })
  await item.save()
  return { success: true, response: 'Saved!' }
})
