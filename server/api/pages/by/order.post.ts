import { defineEventHandler, readBody } from 'h3'
import Model from '~/server/models/pages/by/customer'

export default defineEventHandler(async (event) => {
  const { name, phone, email, delivery, pay, orderId } = await readBody(event)
  const item = new Model({
    name,
    phone,
    email,
    delivery,
    pay,
    orderId,
  })
  await item.save()
  return { success: true, response: 'Saved!' }
})
