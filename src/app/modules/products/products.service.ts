
import { TProducts } from "./products.interface";
import { product } from "./products.model";




const createProductIntoDB=async(payload:TProducts)=>{
    const result=await product.create(payload)
    return result

    
}

const getAllProductsFromDB=async(payload:any)=>{
    // console.log(payload)
    let searchTerm=''
    if(payload?.searchTerm){
        searchTerm=payload.searchTerm
        console.log(searchTerm)
    }
    const result=await product.find()
    return result
}

const getSingleProductFromBD=async(id:string)=>{
    const result=await product.findById(id)
    return result

}
const updateProductsIntoDB=async(id:string,payload:Partial<TProducts>)=>{
    console.log(payload,id)
  const result=await product.findByIdAndUpdate({_id:id},payload,{new:true})
//   const result=await product.findOneAndUpdate({id})
  return result;
}

const DeleteSingleProductIntoDB=async(id:string)=>{
    // console.log(id)
    // const result=await product.updateOne({id},{isDeleted:true})
    const result=await product.findByIdAndDelete({_id:id})
    return result
}
  


export const productServices={
    createProductIntoDB,
    getAllProductsFromDB,
    getSingleProductFromBD,
    updateProductsIntoDB,
    DeleteSingleProductIntoDB,
}