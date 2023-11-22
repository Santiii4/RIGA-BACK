import { DataSource } from "typeorm"
import { product } from "./Products"

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: '127.0.0.1',
    username: 'root',
    password: '1234',
    database: 'rigadb',
    synchronize: true,
    logging: true,
    entities: [product],
    subscribers: [],
    migrations: []
});

