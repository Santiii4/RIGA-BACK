import express from 'express';
import { Request, Response } from 'express';

const mainRouter = express.Router();

mainRouter.get('/', (_, res) => {
    res.send ('Funciona');
});

const app = express();
app.use(express.json());


type Producto = {
    nombre: string;
    modelo: string;
    precio: number;
    paisDeOrigen: string;
};
  

const productos: Producto[] = [
{
  nombre: "Teléfono",
  modelo: "XYZ-123",
  precio: 499.99,
  paisDeOrigen: "China",
},
{
  nombre: "Laptop",
  modelo: "ABC-456",
  precio: 899.99,
  paisDeOrigen: "Taiwán",
},
{
  nombre: "Tablet",
  modelo: "PQR-789",
  precio: 299.99,
  paisDeOrigen: "Corea del Sur",
},
],

const mercancia: Producto[] = [
{
    nombre: "Camion 1",
    modelo: "RFG-001",
    precio: 699.99,
    paisDeOrigen: "México",
},
{
    nombre: "Camion 2",
    modelo: "AAA 123",
    precio: 799.99,
    paisDeOrigen: "Japón",
},
{
    nombre: "camion 3",
    modelo: "CAM-200",
    precio: 199.99,
    paisDeOrigen: "Alemania",
},
];

app.get('/productos', (req: Request, res: Response) => {
    res.json(productos);
});

app.get('/productos-precio-mayor-100', (req: Request, res: Response) => {
    const productosPrecioMayor100 = productos.filter((producto) => producto.precio > 100);
    res.json(productosPrecioMayor100);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`El servidor está escuchando en el puerto ${PORT}`);
});

export { mainRouter };