// import { Request, Response } from 'express';
// import { AppDataSource } from '../persistance/config'
// import { product } from '../persistance/Products'
import Db from '../persistance/db';

export const getAll= async() => {
  await Db.getAll();
}

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