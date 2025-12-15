import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import { Users } from "./users";
import { EventCategories } from "../enum";


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

    @Column({ type: "enum", enum: EventCategories, nullable: true })
    category!: EventCategories

    @CreateDateColumn()
    start_date!: Date

    @CreateDateColumn()
    end_date!: Date

    //images should be nullable false
    @Column("text",{ array: true, nullable: true })
    images!: string[]

    @ManyToMany(() => Users)
    @JoinTable({
        name: "event_attendees",
        joinColumn: { name: "event_id" }, 
        inverseJoinColumn: { name: "user_id" }
    })
    attendees!: Users[]

    @Column({ nullable: true, default: 0})
    ticketsSold!: Number

    @Column({ default: false})
    is_approved!: boolean

    @Column({ default: false})
    feature_event!: boolean

    @Column({ default: false})
    deleted!: boolean

    @CreateDateColumn({type: "timestamp" })
    created_at!: Date

    @CreateDateColumn({ type: "timestamp" })
    updated_at!: Date
}
  



