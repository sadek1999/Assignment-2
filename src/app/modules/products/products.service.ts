
import { TProducts } from "./products.interface";
import { product } from "./products.model";



const createProductIntoDB=async(payload:TProducts)=>{
    const result=await product.create(payload)
    return result

    
}

const getAllProductsFromDB=async()=>{
    const result=await product.find()
    return result
}

const getSingleProductFromBD=async(id:string)=>{
    const result=await product.findById(id)
    return result

}
  


export const productServices={
    createProductIntoDB,
    getAllProductsFromDB,
    getSingleProductFromBD,
}