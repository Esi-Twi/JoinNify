import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, OneToOne, ManyToOne } from "typeorm"
import { Users } from "./users"
import { Events } from "./events"

@Entity()
export class tickets {
    @PrimaryGeneratedColumn()
    id!: Number

    @ManyToOne(() => Events)
    @Column()
    event_id!: number 

    @OneToOne(() => Users)
    @Column()
    user_id!: number 

    @Column()
    unique_number!: number

    @CreateDateColumn()
    expiry!: Date

    @Column() 
    qr_code!: string

    @Column({ default: false })
    checked_in!: boolean

    @CreateDateColumn({nullable: true})
    checkin_time!: Date

    @Column({default: false})
    deleted!: boolean

    @CreateDateColumn({ type: "timestamp" })
    created_at!: Date

    @CreateDateColumn({ type: "timestamp" })
    updated_at!: Date
}


