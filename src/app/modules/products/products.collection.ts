import { NextFunction, Request, Response } from "express";
import { productServices } from "./products.service";
import catchAsync from "../../utility/catchAsync";
import sendResponse from "../../utility/sendRespose";
import httpStatus from "http-status";


const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await productServices.createProductIntoDB(req.body);

    res.status(400).json({
      success: true,
      message: "successfully create product",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllProducts = catchAsync(async (req: Request, res: Response) => {

  // console.log(req.query)
  const result = await productServices.getAllProductsFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    massage: "successfully get all product",
    data: result,
  });
});

const getSingleProductById = catchAsync(async (req, res) => {
  // console.log(req.params)
  // console.log(req)

  const { productID } = req.params;

  const result = await productServices.getSingleProductFromBD(productID);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    massage: "successfully get single product",
    data: result,
  });
});

const updateProductById = catchAsync(async (req, res) => {
  const { productID } = req.params;
// console.log("from product controller")
  
  const result = await productServices.updateProductsIntoDB(
    productID,
    req.body
  );
  

  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    massage: "successfully update Product data",
    data: result,
  });
});

const deleteProduct=catchAsync(async(req,res)=>{
    const {productID}=req.params;
    const result=await productServices.DeleteSingleProductIntoDB(productID)
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        massage:"successfully delate  product",
        data:result
    })
})

export const productsCollections = {
  createProduct,
  getAllProducts,
  getSingleProductById,
  updateProductById,
  deleteProduct
};
