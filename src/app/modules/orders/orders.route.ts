
import express  from 'express';
import { orderController } from './orders.controller';

const router=express.Router()


router.post('/',orderController.createOrders)


export const orderRoute=router;