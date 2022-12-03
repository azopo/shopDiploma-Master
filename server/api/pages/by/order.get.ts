import { defineEventHandler } from 'h3'
import Model from '~/server/models/pages/by/customer'

export default defineEventHandler(() => {
  return Model.find()
})
