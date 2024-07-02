import { Schema, model } from "mongoose";
import { TInventory, TProducts, TVariants } from "./products.interface";


const variantsSchema=new Schema<TVariants>({
    type:{type:String,required:true},
    value:{type:String,required:true}
})

const inventorySchema=new Schema<TInventory>({
    quantity:{type:Number,required:true},
    inStock:{type:Boolean,required:true}
})


const productsSchema = new Schema< TProducts>({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    category:{type:String,required:true},
    tags:{type:[String],required:true},
    variants:[variantsSchema],
    inventory:inventorySchema,

})


export const product =model<TProducts>('product',productsSchema)