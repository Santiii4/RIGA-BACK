import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class product {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name: string

    @Column()
    descripcion: string

    @Column()
    price: number

    @Column()
    image: string

    @Column()
    quanty: number
    
constructor(name:string,descripcion: string,price:number,image:string,quanty: number){
    this.name=name
    this.descripcion=descripcion
    this.price=price 
    this.image=image
    this.quanty=quanty
}
}


// "name": "12 Pallets",
//       "descripcion": "Este servicio implica el transporte de carga desde el origen hasta un punto intermedio o desde un punto intermedio hasta el destino final. El transportista es responsable del transporte y la descarga en el punto intermedio.",
//       "price": 1.631,
//       "img": "https://cdn-icons-png.flaticon.com/128/776/776588.png",
//       "quanty": 1