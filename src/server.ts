import express from "express";
import  router  from './router/ProductRoutes';
import controllerProducts from './router/ProductRoutes'
import cors from 'cors'
import product from './persistance/Products'
import User from './persistance/User';

import { AppDataSource } from '../config/config';

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
        const product1 = new product('24 Pallets','Desde el origen hasta el destino final',2000,1)
        const product2 = new product('12 Pallets','Desde el origen hasta un punto intermedio',1000,1)
        AppDataSource.manager.save([product1,product2])
        console.log(product_exist)
    }
        const validationUser = AppDataSource.manager.getRepository(User);
        const usersExist = await validationUser.find();

        if (usersExist.length === 0) {
        console.log('Adding default users');

        const user1 = new User('santi', 'santi@gmail.com', 'contraseña1');
        const user2 = new User('mateo', 'mateo@gmail.com', 'contraseña2');
        await AppDataSource.manager.save([user1, user2]);

        console.log(usersExist);
        }

        app.listen(PORT, () => {
            console.log('Server on port: ' + PORT);
        });
    })
    .catch(err => {throw err});
