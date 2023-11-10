import { DataSource } from "typeorm"
import { Product } from "./Products"

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "test",
    password: "test",
    database: "test",
    entities: [Product]
})

AppDataSource.initialize()