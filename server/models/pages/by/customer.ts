import mongoose from 'mongoose'

const pagesByCustomer = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  delivery: {
    type: String,
    required: true,
  },
  pay: {
    type: String,
    required: true,
  },
  orderId: {
    type: String,
    required: true,
  },
})

export default mongoose.model('pages_by_customer', pagesByCustomer)
