import 'reflect-metadata'
import { DataSource } from 'typeorm';
import { Product } from './persistance/Products';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: '127.0.0.1',
    username: 'root',
    password: '1234',
    database: 'AromataDB',
    synchronize: true,
    logging: true,
    entities: [Product],
    subscribers: [],
    migrations: []
});

type Producto = {
    id: number
    name: string
    price: number
    image: string
}

export const db: Array<Producto> = [
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