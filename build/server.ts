import express from "express";
import { mainRouter } from './router/routes';

const app = express();

const PORT = 8080

app.get("/", (_, res) => {
  res.send("Hola, mundo");
});

app.listen(PORT, () => {
  console.log("Servidor iniciado en el puerto 8080");
});

app.use('/', mainRouter);

app.listen(PORT, ()=>{
  console.log(`El servidor se ejecuta en http://localhost:${PORT}`);
})