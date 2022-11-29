import { defineEventHandler } from 'h3'
import upload from '~/server/api/uploadService'

export default defineEventHandler(async (event) => {
  await callNodeListener(upload(), event.req, event.res)
  return { success: true, response: 'Saved!' }
})
