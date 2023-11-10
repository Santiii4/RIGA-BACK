import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../persistance/User';

export const registerUser = async (req: Request, res: Response) => {
  try {
    // Obtener datos del cuerpo de la solicitud
    const { username, email, password } = req.body;

    // Validar datos obligatorios
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    // Verificar si el usuario ya existe
    const userRepository = getRepository(User);
    const existingUser = await userRepository.findOne({ where: { email } });

    if (existingUser) {
      return res.status(409).json({ message: 'El usuario ya existe' });
    }

    // Crear una nueva instancia del usuario
    const newUser = new User();
    newUser.username = username;
    newUser.email = email;
    newUser.password = password; // En una aplicación real, deberías almacenar las contraseñas de manera segura (por ejemplo, mediante hash)

    // Guardar el usuario en la base de datos
    const savedUser = await userRepository.save(newUser);

    // No devolver la contraseña en la respuesta por razones de seguridad
    savedUser.password = '';
// Responder con el usuario recién registrado
res.status(201).json(savedUser);
} catch (error) {
    console.error('Error al registrar el usuario:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};