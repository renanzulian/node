import express from 'express'
// import morgan from 'morgan'
import cors from 'cors'


class Express {
    public application: express.Application

    constructor() {
        this.application = express()

        this.middlewares()
        this.routes()
        this.exceptionHandler()
    }

    private middlewares(): void {
        // this.application.use(morgan('dev'))
        this.application.use(cors())
        this.application.use(express.urlencoded({ extended: false }))
        this.application.use(express.json())
    }

    private routes(): void {
        this.application.use('/works', (req, res) => {
            return res.status(200).send({ message: 'It works' })
        })
    }

    private exceptionHandler(): void {
        this.application.use('*', (req, res) => {
            return res.status(404).send({
                message: 'Method does not found.'
            })
        })
    }
}

export default Express
