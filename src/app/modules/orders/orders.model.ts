import { model, Schema } from "mongoose";
import { TOrders } from "./orders.interface";


const orderSchema=new Schema<TOrders>({
    email:{type:String,required:true},
    productId:{type:String,required:true},
    price:{type:Number,required:true},
    quantity:{type:Number,required:true}
})

export const order=model<TOrders>('order',orderSchema)




