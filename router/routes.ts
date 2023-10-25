import express from 'express';

const mainRouter = express.Router();

mainRouter.get('/', (_, res) => {
    res.send ('Funciona');
});

export { mainRouter };