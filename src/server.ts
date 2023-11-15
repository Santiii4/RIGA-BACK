import express from "express";
import  router  from './router/ProductRoutes';
import controllerProducts from './router/ProductRoutes'
import cors from 'cors'

import { AppDataSource } from './persistance/config';

const app = express();
const PORT = 8080

app.use(express.json());
app.use(cors({origin: '*'}));

app.use('/', router)

app.use('/ecommerce', controllerProducts);

app.use('/api', router);
AppDataSource.initialize()
    .then(() => {
        console.log('DB connected');
        app.listen(PORT, () => {
            console.log('Server on port: ' + PORT);
        });
    })
    .catch(err => {throw err});
