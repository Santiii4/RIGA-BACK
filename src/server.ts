import express from "express";
import  router  from './router/ProductRoutes';
import controllerProducts from './router/ProductRoutes'
import cors from 'cors'
import { product } from './persistance/Products'

import { AppDataSource } from './persistance/config';

const app = express();
const PORT = 8080

app.use(express.json());
app.use(cors({origin: '*'}));

app.use('/', router)

app.use('/ecommerce', controllerProducts);

app.use('/api', router);

AppDataSource.initialize()
    .then(async() => {
        console.log('DB connected');
        const product1 = new product('camion1',1000,'')
        const product2 = new product('camion2',2000,'')
        AppDataSource.manager.save([product1,product2])
        app.listen(PORT, () => {
            console.log('Server on port: ' + PORT);
        });
    })
    .catch(err => {throw err});
