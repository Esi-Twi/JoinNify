import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity("events")
export class Events {
    @PrimaryGeneratedColumn()
    id!: Number

    @Column()
    creatorId!: number

    @Column()
    title!: string

    @Column()
    location!: string

    @Column()
    capacity!: Number

    @Column()
    ticket_price!: number

    @CreateDateColumn()
    start_date!: Date

    @CreateDateColumn()
    end_date!: Date

    // @Column()
    // images!: Date

    // @Column()
    // attendees!: Date

    @Column()
    ticketsSold!: Number

    @Column()
    is_approved!: boolean

    @Column()
    feature_event!: boolean

    @Column()
    deleted!: boolean

    @CreateDateColumn({type: "timestamp" })
    created_at!: Date

    @CreateDateColumn({ type: "timestamp" })
    updated_at!: Date
}
  



