import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Product } from '../persistance/Products';

export const getAllProducts = async (_, res: Response) => {
  const productRepository = getRepository(Product);
  const products = await productRepository.find();
  res.json(products);
};

export const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const productRepository = getRepository(Product);
  const product = await productRepository.findOne(id);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
};