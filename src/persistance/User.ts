import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    username!: string

    @Column()
    gmail!: string

    @Column()
    password!: boolean
}