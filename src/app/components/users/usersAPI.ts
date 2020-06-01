import { Router } from 'express'

class UserRoutes {
    router: Router
    constructor() {
        this.router = Router()

        this.branches()
        this.root()
    }

    private root(): void {
        this.router.get('/', (req, res) => {
            res.status(200).send({ message: 'Get user works' })
        })
    }

    private branches(): void {
        
    }
}

export default UserRoutes
