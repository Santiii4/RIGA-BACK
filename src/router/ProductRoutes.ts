import express from 'express';
// import { addProduct } from '../controllers/controllerProducts'
// import { Router } from 'express';

const router = express.Router();

// const controllerProducts = Router();

router.get('/', (_, res) => {
    res.send ('Funciona');
});
// controllerProducts.post('/addProduct', addProduct);

export default router;