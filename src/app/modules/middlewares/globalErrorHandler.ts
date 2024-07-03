import { ErrorRequestHandler } from "express";



 export const globalErrorHandler :ErrorRequestHandler=(err, req,res,next)=>{

let statesCode=err.statusCode || 500;
let message=err.message || "sumThink want error";
type TErrorSouse={
    path:string|number,
    message:string
}[];

const errorSources:TErrorSouse=[
    {
        path:'',
        message:"sumThink want Error"
    }
]

return res.status(statesCode).json({
    success:false,
    message,
    errorSources
})
    



}