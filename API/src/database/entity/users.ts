import { UserRoles } from "../enum";
import { PrimaryGeneratedColumn, CreateDateColumn, Column, Entity } from "typeorm";

@Entity("users")
export class Users {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({nullable: true}) 
    name!: string

    @Column()
    email!: string

    @Column() 
    password!: string

    @Column({ type: "enum",  enum: UserRoles, default: UserRoles.ATTENDEE, nullable: false})
    role!: UserRoles

    @Column({ nullable: true })
    phone_number!: string

    @Column({nullable: true})
    location!: string

    @Column({ default: false })
    is_verified!: boolean

    @Column({ default: false })
    deleted!: boolean

    @CreateDateColumn({type: "timestamp"})
    created_at!: Date

    @CreateDateColumn({type: "timestamp"})
    updated_at!: Date
}


