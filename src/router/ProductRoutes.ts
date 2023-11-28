import express from 'express';
import { GetProducts, eliminarProducto, login, register, GetUsuarios, registerCart } from '../controllers/controller'

const router = express.Router();

router.use(express.json());


router.get('/', (_, res) => {
    res.send ('Funciona');
});

router.get('/products', GetProducts)
router.get("/usuarios", GetUsuarios)

router.delete('/products/deleteP/:name', eliminarProducto);

router.post('/login', login)
router.post('/registrarse', register)

router.post('/comprar', registerCart)

export default router;