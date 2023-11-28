import { Request, Response } from 'express';
import  product  from '../persistance/Products'
import  Usuario  from "../persistance/User";
import Carrito from "../persistance/Cart";
import { AppDataSource } from '../../config/config';
import Db from '../../db';
import * as bcrypt from 'bcrypt'

export const getAll= async() => {
  await Db.getAll();
}


// Productos


export const GetProducts = async (_: Request, res: Response) => {
  try {
      const products = await AppDataSource.manager.find(product);
      res.json(products);
  } catch (error) {
      console.error('Error al obtener producto:', error);
        res.status(500).json({ error: 'Error al obtener producto' });
  }
}

export const eliminarProducto = async (req: Request, res: Response) => {
  const { nombre } = req.params;

  try {
  const entityManager = AppDataSource.manager;
  const products = await entityManager.findOne(product, { where: { nombre } });

  if (!products) {
      return res.status(404).send('products ${name} not found');
  }

      await entityManager.remove(products);
      return res.send('products ${name} deleted successfully');
} catch (error) {
  console.error(error);
  return res.status(500).send('Internal Server Error');
}
};


// Usuarios

export const GetUsuarios = async(_: Request, res: Response) => {
  try {
    const usuarios = await AppDataSource.manager.find(Usuario);
    res.json(usuarios);
} catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
}
};

export const register = async (req: Request, res: Response) => {
  const { nombre, email, contraseña, confirmPassword } = req.body;

  if (contraseña !== confirmPassword) {
    return res.status(400).send('Las contraseñas no coinciden');
  }

  const usuarioRepository = AppDataSource.getRepository(Usuario);

  try {
    const hashedContraseña = await bcrypt.hash(contraseña, 10);
    const nuevoUsuario = usuarioRepository.create({ nombre, email, contraseña: hashedContraseña });
    await usuarioRepository.save(nuevoUsuario);
    return res.status(201).send('Usuario registrado correctamente');
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    return res.status(500).send('Error interno del servidor');
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, contraseña } = req.body;

  const usuarioRepository = AppDataSource.getRepository(Usuario);

  try {
    const usuario = await usuarioRepository.findOne({ where: { email } });

    if (!usuario) {
      return res.status(401).send('Usuario no encontrado');
    }

    const match = await bcrypt.compare(contraseña, usuario.contraseña);

    if (match) {
      return res.status(200).send('Inicio de sesión exitoso');
    } else {
      return res.status(401).send('Contraseña incorrecta');
    }
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    return res.status(500).send('Error interno del servidor');
  }
};


// Carrito


export const registerCart = async (req: Request, res: Response) => {
  const { cartJson } = req.body;

  try {

      const cartEntity = new Carrito(cartJson);

      await AppDataSource.manager.save(Carrito, cartEntity);

      return res.status(201).json({ message: 'Carrito registrado exitosamente' });

  } catch (err) {
      console.error('Error al registrar el carrito:', err);
      return res.status(500).json({ error: 'Error interno del servidor' });
  }  
};













// export const addProduct = async (req: Request, res: Response) => {
//   console.log(req.body);
  
//   const { name, price, image } = req.body;
//   const newProduct = new product();
//   newProduct.name = name;
//   newProduct.image = image;
//   newProduct.price = price;

//   await AppDataSource.manager.save(newProduct);

//   res.send('ProductAdded')
// }