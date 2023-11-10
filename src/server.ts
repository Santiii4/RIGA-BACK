import express from "express";
import  router  from './router/ProductRoutes';

const app = express();

const PORT = 8080

app.use('/', router);

app.listen(PORT, () => {
    console.log(`El servidor se ejecuta en http://localhost:${PORT}`);
});

app.use('/api', router);

