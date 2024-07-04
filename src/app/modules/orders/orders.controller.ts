import httpStatus from "http-status";
import catchAsync from "../../utility/catchAsync";
import sendResponse from "../../utility/sendRespose";

import { orderServices } from "./orders.service";

const createOrders = catchAsync(async (req, res) => {
  const result = await orderServices.creteOrderIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    massage: "successfully create orders",
    data: result,
  });
});


export const orderController={
    createOrders
}

