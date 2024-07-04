import { Request, Response } from "express";
import { productServices } from "./products.service";
import catchAsync from "../../utility/catchAsync";
import sendResponse from "../../utility/sendRespose";
import httpStatus from "http-status";


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

const getAllProducts=catchAsync(async(req:Request,res:Response)=>{
    const result=await productServices.getAllProductsFromDB();
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        massage:'successfully get all product',
        data:result
    })
})




export const productsCollections={
    createProduct,
    getAllProducts,
   
}