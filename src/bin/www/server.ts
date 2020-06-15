import Application from '../../application'
import http from 'http'

const app = new Application()
const PORT = process.env.PORT || 3333
const server = http.createServer(app.server)
server.listen(PORT)
