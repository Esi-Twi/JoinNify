import { UserRoles } from "@database/enum";
import { PrimaryGeneratedColumn, CreateDateColumn, Column, Entity } from "typeorm";

@Entity()
export class User {
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

    @Column({ default: false })
    is_verified!: boolean

    @Column({ default: false })
    deleted!: false

    @CreateDateColumn({type: "timestamp"})
    created_at!: Date

    @CreateDateColumn({type: "timestamp"})
    updated_at!: Date
}


