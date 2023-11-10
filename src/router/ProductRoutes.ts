import express from 'express';
import { getAllProducts, getProductById } from '../controllers/controllerProducts';

const router = express.Router();

router.get('/', (_, res) => {
    res.send ('Funciona');
});
router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);


export default router;