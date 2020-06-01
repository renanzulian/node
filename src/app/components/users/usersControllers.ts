import { User } from './user'
import DataAccessLayerUser from './usersDAL'

class UserController {
  DAL: DataAccessLayerUser

  constructor () {
    this.DAL = new DataAccessLayerUser()
  }

  public findAllUsers ():User[] {
    throw new Error('It was not implemented yet')
  }

  public findUserById (id: number):User {
    throw new Error('It was not implemented yet')
  }

  public addNewUser (user: User):User {
    throw new Error('It was not implemented yet')
  }

  public resetUser (user: User):User {
    throw new Error('It was not implemented yet')
  }

  public deactivateUser (user: User):User {
    throw new Error('It was not implemented yet')
  }

  public deleteUser (user: User):void {
    throw new Error('It was not implemented yet')
  }
}

export default UserController
