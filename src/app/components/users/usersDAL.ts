import { User } from './user.model'
class DataAccessLayerUser {
  public selectAllUsers ():User[] {
    throw new Error('It was not implemented yet')
  }

  public selectUserById (id: number):User {
    throw new Error('It was not implemented yet')
  }

  public insertUser (user: User):User {
    throw new Error('It was not implemented yet')
  }

  public updateUser (user: User):User {
    throw new Error('It was not implemented yet')
  }

  public updateActivity (user: User):User {
    throw new Error('It was not implemented yet')
  }

  public deleteUser (user: User):void {
    throw new Error('It was not implemented yet')
  }
}

export default DataAccessLayerUser
