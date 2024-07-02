
import { TProducts } from "./products.interface";
import { product } from "./products.model";



const createProductIntoDB=async(payload:TProducts)=>{
    const result=await product.create(payload)
    return result

}

export const productServices={
    createProductIntoDB,
}