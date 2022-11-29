import mongoose from 'mongoose'

const pagesEditAdminItem = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  characteristics: [
    {
      name: {
        type: String,
      },
      fields: [
        {
          key: {
            type: String,
          },
          value: {
            type: String,
          },
        },
      ],
    },
  ],
})

export default mongoose.model('pages_edit_admin_item', pagesEditAdminItem)
