import 'reflect-metadata'
import { AppDataSource } from './config'
import { product } from './Products'



export default class Db{
    constructor(){}
    static getAll(){
        AppDataSource.getRepository(product).find();
    }    
}

type Product = {
    id: number
    name: string
    price: number
    image: string
}

export const db: Array<Product> = [
    {
        id: 1,
        name: 'Camion 1',
        price: 1500,
        image: ''
    },
    {
        id: 2,
        name: 'Camion 2',
        price: 1200,
        image: ''
    },
]