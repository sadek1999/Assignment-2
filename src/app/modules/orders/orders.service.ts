import { TOrders } from "./orders.interface"
import { order } from "./orders.model"


const creteOrderIntoDB=async(payload:TOrders)=>{
  const result=await order.create(payload)
  return result
}

const getAllOrdersFromDB=async(payload:string)=>{
  
  let query=''
  if(payload?.email){
    query={email:payload.email}
  }
    const result=await order.find(query)
    return result
}



export const orderServices={
    creteOrderIntoDB,
    getAllOrdersFromDB,
    
}
