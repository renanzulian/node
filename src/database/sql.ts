import { createConnection } from 'typeorm'
import 'reflect-metadata'

createConnection().then(() => {
  console.log('Database connected')
}).catch(error => {
  console.error(error)
})
