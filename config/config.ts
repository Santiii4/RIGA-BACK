import { DataSource } from "typeorm"
import  product  from "../src/persistance/Products"
import  Usuario  from "../src/persistance/User";
import Carrito from "../src/persistance/Cart";

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: '127.0.0.1',
    username: 'root',
    password: '1234',
    database: 'rigadb',
    synchronize: true,
    logging: true,
    entities: [product, Usuario, Carrito],
    subscribers: [],
    migrations: []
});

