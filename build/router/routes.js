"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainRouter = void 0;
const express_1 = __importDefault(require("express"));
const mainRouter = express_1.default.Router();
exports.mainRouter = mainRouter;
mainRouter.get('/', (_, res) => {
    res.send('Funciona');
});
const app = (0, express_1.default)();
app.use(express_1.default.json());
const productos = [
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
app.get("/productos", (_, res) => {
    res.json(productos);
});
app.post("/productos", (req, res) => {
    const nuevoProducto = req.body;
    productos.push(nuevoProducto);
    res.json({ message: "Producto agregado correctamente", producto: nuevoProducto });
});
const puerto = 8080;
app.listen(puerto, () => {
    console.log(`Servidor Express TypeScript escuchando en el puerto ${puerto}`);
});
app.get("/productos", (_, res) => {
    res.json(productos);
});
app.post("/productos", (req, res) => {
    const nuevoProducto = req.body;
    productos.push(nuevoProducto);
    res.json({ message: "Producto agregado correctamente", producto: nuevoProducto });
});
app.put("/productos/:modelo", (req, res) => {
    const modelo = req.params.modelo;
    const nuevoProducto = req.body;
    const indice = productos.findIndex((producto) => producto.modelo === modelo);
    if (indice !== -1) {
        productos[indice] = nuevoProducto;
        res.json({ message: "Producto modificado correctamente", producto: nuevoProducto });
    }
    else {
        res.status(404).json({ message: "Producto no encontrado" });
    }
});
