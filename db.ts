import 'reflect-metadata'
import { AppDataSource } from './config/config'
import  product  from './src/persistance/Products'



export default class Db{
    constructor(){}
    static getAll(){
        AppDataSource.getRepository(product).find();
    }    
}
