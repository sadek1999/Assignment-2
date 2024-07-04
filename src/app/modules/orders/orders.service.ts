import { TOrders } from "./orders.interface"
import { order } from "./orders.model"


const creteOrderIntoDB=async(payload:TOrders)=>{
  const result=await order.create(payload)
  return result
}

export const orderServices={
    creteOrderIntoDB,
}
