

import { productsCollections } from './products.collection';
import { productsValidationSchema } from './products.valiation';
import validatedRequest from '../middlewares/validateRequest';
import  express  from 'express';


const router=express.Router()


router.post('/',validatedRequest(productsValidationSchema),productsCollections.createProduct)
router.get('/',productsCollections.getAllProducts)
router.get("/:productID",productsCollections.getSingleProductById)
router.patch('/:productID',productsCollections.updateProductById)
router.delete("/:productID",productsCollections.deleteProduct)
// router.post('/products',productsCollections.test)



export const productsRoutes=router;