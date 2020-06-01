import { Router } from 'express'
import UserController from './usersControllers'

class UserRoutes {
    router: Router
    controller: UserController

    constructor () {
      this.router = Router()
      this.controller = new UserController()

      //   this.branches()
      this.root()
    }

    private root ():void {
      this.router.get('/', (req, res) => {
        res.status(200).send({ message: 'Get user works' })
      })
    }

  // private branches (): void {
  // }
}

export default UserRoutes
