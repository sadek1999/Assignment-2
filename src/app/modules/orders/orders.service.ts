import { TOrders } from "./orders.interface"
import { order } from "./orders.model"


const creteOrderIntoDB=async(payload:TOrders)=>{
  const result=await order.create(payload)
  return result
}

const getAllOrdersFromDB=async()=>{
    const result=await order.find()
    return result
}



export const orderServices={
    creteOrderIntoDB,
    getAllOrdersFromDB,
    
}
