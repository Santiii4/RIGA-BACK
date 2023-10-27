import express from 'express';
import { Request, Response } from 'express';

const mainRouter = express.Router();

type Producto = {
  nombre: string;
  modelo: string;
  precio: number;
  paisDeOrigen: string;
};

const productos: Producto[] = [
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
    nombre: "Camion 3",
    modelo: "CAM-200",
    precio: 199.99,
    paisDeOrigen: "Alemania",
  },
];

mainRouter.get('/', (_, res) => {
    res.send ('Funciona');
});

// Obtener todos los productos

mainRouter.get("/productos", (_: Request, res: Response) => {
  res.json(productos);
});

// Modificar un producto

mainRouter.put("/productos/:modelo", (req: Request, res: Response) => {
const modelo = req.params.modelo;
const nuevoProducto: Producto = req.body;
const indice = productos.findIndex((producto) => producto.modelo === modelo);
if (indice !== -1) {
  productos[indice] = nuevoProducto;
  res.json({ message: "Producto modificado correctamente", producto: nuevoProducto });
} else {
  res.status(404).json({ message: "Producto no encontrado" });
}
});

// Eliminar un producto por su modelo 

mainRouter.delete("/productos/:modelo", (req: Request, res: Response) => {
  const modelo = req.params.modelo;
  const indice = productos.findIndex((producto) => producto.modelo === modelo);

  if (indice !== -1) {
    productos.splice(indice, 1);
    res.json({ message: "Producto eliminado correctamente" });
  } else {
    res.status(404).json({ message: "Producto no encontrado" });
  }
});

// Obtener un producto por su país de origen

mainRouter.get("/productos/pais", (req: Request, res: Response) => {
  const paisOrigen = req.query.pais as string;

  const productosPorPais = productos.filter((producto) => producto.paisDeOrigen.toLowerCase() === paisOrigen.toLowerCase());

  if (productosPorPais.length > 0) {
    res.json(productosPorPais);
  } else {
    res.status(404).json({ message: "No se encontraron productos para el país de origen especificado" });
  }
});

// Obtener un producto por su país de origen (método GET)

mainRouter.get("/productos/pais", (req: Request, res: Response) => {
const paisOrigen = req.query.pais as string;
const productoEncontrado = obtenerProductoPorPais(paisOrigen);  
if (productoEncontrado) {
    res.json(productoEncontrado);
} else {
    res.status(404).json({ message: "No se encontró un producto para el país de origen especificado" });
}  
});

export { mainRouter };