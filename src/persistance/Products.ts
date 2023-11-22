import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class product {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name: string

    @Column()
    price: number

    @Column()
    image: string
    
constructor(name:string,price:number,image:string){
    this.name=name
    this.price=price 
    this.image=image
}
}
