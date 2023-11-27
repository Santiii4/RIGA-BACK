import express from 'express';
import { GetProducts, eliminarProducto } from '../controllers/controllerProducts'
// import { Router } from 'express';

const router = express.Router();

// const controllerProducts = Router();

router.get('/', (_, res) => {
    res.send ('Funciona');
});

router.get('/products', GetProducts)
router.delete('/products/deleteP/:name', eliminarProducto);


// controllerProducts.post('/addProduct', addProduct);

export default router;