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
        const validation_product= AppDataSource.manager.getRepository(product)
        const product_exist= await validation_product.find()

        if (product_exist.length == 0){

        
        console.log('DB connected');
        const product1 = new product('24 Pallets','Desde el origen hasta el destino final',2000,'https://cdn-icons-png.flaticon.com/128/819/819489.png',1)
        const product2 = new product('12 Pallets','Desde el origen hasta un punto intermedio',1000,'https://cdn-icons-png.flaticon.com/128/776/776588.png',1)
        AppDataSource.manager.save([product1,product2])
        console.log(product_exist)
    }
        app.listen(PORT, () => {
            console.log('Server on port: ' + PORT);
        });
    })
    .catch(err => {throw err});
