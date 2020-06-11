import Express from '../../express'
import http from 'http'

const expressApp = new Express()
const PORT = process.env.PORT || 3333
const server = http.createServer(expressApp.application)
server.listen(PORT)
