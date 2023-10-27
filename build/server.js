"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./router/routes");
const app = (0, express_1.default)();
const PORT = 8080;
app.get("/", (_, res) => {
    res.send("Hola, mundo");
});
app.listen(PORT, () => {
    console.log("Servidor iniciado en el puerto 8080");
});
app.use('/', routes_1.mainRouter);
app.listen(PORT, () => {
    console.log(`El servidor se ejecuta en http://localhost:${PORT}`);
});
