import { productsCollections } from "../products/products.collection"
import { productServices } from "../products/products.service"
import { TOrders } from "./orders.interface"
import { order } from "./orders.model"


const creteOrderIntoDB=async(payload:TOrders)=>{
  // console.log(payload)
  const{productId,quantity}=payload

  const product=await productServices.getSingleProductFromBD(productId)
  // console.log(product.inventory)

  if(product?.inventory.quantity >=1){
    if(product?.inventory.quantity >= quantity){
      console.log(productId)
      const q=product?.inventory.quantity-payload.quantity
      const up={
        inventory:{
          quantity :q
        }
      }
      console.log(q)
      const update =await productServices.updateProductsIntoDB(productId,up)
      // console.log(updata)

     const result=await order.create(payload)
  
    //  cosnt update =await productServices.updateProductsIntoDB(productId,data)


     return result
    }
    else{
      const result="Products are not available"
      return result
    }
  }
  
 
}

const getAllOrdersFromDB=async(payload:string)=>{
  
  let query=null
  if(payload?.email){
    query={email:payload.email}
  }
  // console.log(query)
    const result=await order.find(query)
    return result
}



export const orderServices={
    creteOrderIntoDB,
    getAllOrdersFromDB,
    
}
