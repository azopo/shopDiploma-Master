import mongoose from 'mongoose'

mongoose.Promise = global.Promise

mongoose.connection.on('connected', () => {
  // eslint-disable-next-line no-console
  console.log('\x1B[32m', 'Database connected', '\x1B[0m')
})

mongoose.connection.on('disconnected', () => {
  // eslint-disable-next-line no-console
  console.log('\x1B[31m', 'Database disconnected', '\x1B[0m')
})

mongoose.connection.on('reconnected', () => {
  // eslint-disable-next-line no-console
  console.log('\x1B[32m', 'Database reconnected', '\x1B[0m')
})

mongoose.connect(
  // @ts-ignore
  process.env.MONGO_URI,
  { useNewUrlParser: true },
  function (e) {
    // eslint-disable-next-line no-console
    if (e) console.error(e)
  }
)

export default () => mongoose.connection.readyState === 1
