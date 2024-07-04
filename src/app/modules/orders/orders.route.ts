
import express  from 'express';
import { orderController } from './orders.controller';
import validatedRequest from '../middlewares/validateRequest';
import { orderValidationSchema } from './orders.valiation';


const router=express.Router()


router.post('/',validatedRequest(orderValidationSchema),orderController.createOrders)

router.get("/get",orderController.getAllOrders)

// router.get('/',async(req,res)=>{res.send('okkkk')})

export const orderRoute=router;