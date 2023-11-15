import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    total!: number

    @Column()
    object!: string

    @Column()
    image!: string
}