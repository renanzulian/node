import express from 'express'
import morgan from 'morgan'
import 'reflect-metadata'
import cors from 'cors'

class Application {
    public server: express.Application

    constructor () {
      this.server = express()
      this.middlewares()
      this.routes()
      this.exceptionHandler()
    }

    private middlewares (): void {
      this.server.use(morgan('dev'))
      this.server.use(cors())
      this.server.use(express.urlencoded({ extended: false }))
      this.server.use(express.json())
    }

    private routes (): void {
      this.server.use('/works', (req, res) => {
        return res.status(200).send({ message: 'It works' })
      })
    }

    private exceptionHandler (): void {
      this.server.use('*', (req, res) => {
        return res.status(404).send({
          message: 'Method does not found.'
        })
      })
    }
}

export default Application
