import { Request, Response } from 'express';
import { AppDataSource } from '../persistance/config'
import { product } from '../persistance/Products'
import { join } from 'path'
import Db from '../persistance/db';

export const getAll= async() => {
  await Db.getAll();
}

// export const getProductImage = (req: Request, res: Response) => {
//   res.sendFile(join(__dirname, '..', 'images', req.params.image))
// }

export const addProduct = async (req: Request, res: Response) => {
  console.log(req.body);
  
  const { name, price, image } = req.body;
  const newProduct = new product();
  newProduct.name = name;
  newProduct.image = image;
  newProduct.price = price;

  await AppDataSource.manager.save(newProduct);

  res.send('ProductAdded')
}