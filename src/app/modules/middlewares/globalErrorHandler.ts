import { ErrorRequestHandler } from "express";
import { ZodError } from "zod";

export const globalErrorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  next
) => {
  let statsCode = err.statusCode || 500;
  let message = err.message || "sumThink want error";
//   type TErrorSouse = {
//     path: string | number;
//     message: string;
//   }[];

//   const errorSources: TErrorSouse = [
//     {
//       path: "",
//       message: "sumThink want Error",
//     },
//   ];

  return res.status(statsCode).json({
    success: false,
    message,
    err,
    // errorSources
  });
};
