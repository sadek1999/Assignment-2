
import { TProducts } from "./products.interface";
import { product } from "./products.model";
import { Request } from 'express';



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
const updateProductsIntoDB=async(id:string,payload:Partial<TProducts>)=>{
    // console.log(payload,id)
  const result=await product.findByIdAndUpdate({id},payload,{new:true})
  return result;
}

const DeleteSingleProductIntoDB=async(id:string)=>{
    console.log(id)
    const result=await product.updateOne({id},{isDeleted:true})
    return result
}
  


export const productServices={
    createProductIntoDB,
    getAllProductsFromDB,
    getSingleProductFromBD,
    updateProductsIntoDB,
    DeleteSingleProductIntoDB,
}