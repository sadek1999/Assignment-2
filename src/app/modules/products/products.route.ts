
import  express  from 'express';
import { productsCollections } from './products.collection';
import { productsValidationSchema } from './products.valiation';


const router=express.Router()


router.post('/products',productsCollections.createProduct)

export const productsRoutes=router;