

import { productServices } from "../products/products.service";
import { TOrders } from "./orders.interface";
import { order } from "./orders.model";

const creteOrderIntoDB = async (payload: TOrders) => {
  
  const { productId, quantity } = payload;

  const product = await productServices.getSingleProductFromBD(productId);
  
 if(product?.inventory.quantity){
  if (product?.inventory.quantity >= 1) {
    if (product?.inventory.quantity >= quantity) {
      // console.log(productId);

      const q = product?.inventory.quantity - payload.quantity;
      const up = {
        inventory: {
          quantity: q,
          inStock: true,
        },
      };
      // console.log(q);
      const update = await productServices.updateProductsIntoDB(productId, up);
      if (product?.inventory.inStock) {
        console.log("form inStock")
        if (product?.inventory.quantity == 0) {
          const up = {
            inventory: {
              quantity: q,
              inStock: false,
            },
          };
          const update = await productServices.updateProductsIntoDB(
            productId,
            up
          );
        }
      }

      const result = await order.create(payload);

      //  cosnt update =await productServices.updateProductsIntoDB(productId,data)

      return result;
    } else {
      throw new Error("Insufficient quantity available in inventory")
    }
  }
 }
 
};

const getAllOrdersFromDB = async (payload: any) => {
  let query = null;
  
  if (payload?.email ) {
    query = { email: payload.email };
  }else{
    query={}
  }
  // console.log(query)
  const result = await order.find(query);
  return result;
};

export const orderServices = {
  creteOrderIntoDB,
  getAllOrdersFromDB,
};
