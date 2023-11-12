import express from 'express';
import { getProducts, getProductImage, addProduct } from '../controllers/controllerProducts'
import { Router } from 'express';

const router = express.Router();

const controllerProducts = Router();

router.get('/', (_, res) => {
    res.send ('Funciona');
});
controllerProducts.get('/products', getProducts);
controllerProducts.get('/productImage/:image', getProductImage);
controllerProducts.post('/addProduct', addProduct);

export default router;