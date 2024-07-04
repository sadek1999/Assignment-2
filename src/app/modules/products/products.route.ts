
import  express, { Request, Response }  from 'express';
import { productsCollections } from './products.collection';
import { productsValidationSchema } from './products.valiation';
import validatedRequest from '../middlewares/validateRequest';


const router=express.Router()


router.post('/products',validatedRequest(productsValidationSchema),productsCollections.createProduct)
router.get('/',productsCollections.getAllProducts)
// router.post('/products',productsCollections.test)



export const productsRoutes=router;