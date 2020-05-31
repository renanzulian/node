import Express from '../../src/express'
import http from 'http'
import 'dotenv/config'

const HOST = process.env.NODE_HOST || 'localhost'
const PORT = parseInt(process.env.NODE_PORT) || 3000
const express = new Express()
const server = http.createServer(express.application)
server.listen(PORT, HOST)
