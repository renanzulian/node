export interface UserState {
    userId?: number
    privilegeId?: number
    name: string
    email: string
    password: string
    createdBy?: number
    createdAt?: Date
    updatedAt?: Date
}

export default class User implements UserState {
    userId?: number
    privilegeId?: number
    name: string
    email: string
    password: string
    createdBy?: number
    createdAt?: Date
    updatedAt?: Date

    constructor(user: UserState) {
        this.userId = user.userId
        this.privilegeId = user.privilegeId
        this.name = user.name
        this.email = user.email
        this.password = user.password
        this.createdBy = user.createdBy
        this.createdAt = user.createdAt
        this.updatedAt = user.updatedAt
    }
}