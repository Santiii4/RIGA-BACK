// src/routes/userRoutes.ts
import express from 'express';
import { registerUser } from '../controllers/controllerUser';

const router = express.Router();

// Ruta para registrar un nuevo usuario
router.post('/register', registerUser);

export default router;