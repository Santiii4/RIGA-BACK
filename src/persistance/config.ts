import { DataSource } from "typeorm"
import { Product } from "./Products"

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: '127.0.0.1',
    username: 'root',
    password: '1234',
    database: 'RigaDB',
    synchronize: true,
    logging: true,
    entities: [Product],
    subscribers: [],
    migrations: []
});

AppDataSource.initialize()