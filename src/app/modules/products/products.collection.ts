import { Request, Response } from "express";
import { productServices } from "./products.service";


const createProduct=async(req:Request,res:Response)=>{
    try{
        const result=await productServices.createProductIntoDB(req.body)
                console.log(req.body)
        res.status(400).json({
            success:true,
            message:"successfully create product",
            data:result
        })
    }catch(err){
        console.log(err)
    }
}


export const productsCollections={
    createProduct,
}