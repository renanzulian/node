import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { IsEmail, Min } from 'class-validator'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    privilegeId: number

    @Column()
    name: string

    @Column()
    @IsEmail()
    email: string

    @Column()
    @Min(6)
    password: string

    @Column()
    createdAt: Date

    @Column()
    updatedAt: Date
}
