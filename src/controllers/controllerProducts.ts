import { Request, Response } from 'express';
// import { AppDataSource } from '../persistance/config'
import { product } from '../persistance/Products'
import { AppDataSource } from '../persistance/config';
import Db from '../persistance/db';

export const getAll= async() => {
  await Db.getAll();
}

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
  const { name } = req.params;

  try {
  const entityManager = AppDataSource.manager;
  const products = await entityManager.findOne(product, { where: { name } });

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