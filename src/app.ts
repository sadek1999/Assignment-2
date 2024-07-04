import express, { Application } from "express";
import cors from "cors";

import { productsRoutes } from "./app/modules/products/products.route";
import { globalErrorHandler } from "./app/modules/middlewares/globalErrorHandler";
import { notFound } from "./app/modules/middlewares/notFound";
import { orderRoute } from "./app/modules/orders/orders.route";
const app:Application = express();


app.use(express.json());
app.use(cors());



app.use('/api',productsRoutes)
app.use('/api/orders',orderRoute)


app.get("/", (req, res) => {
  res.send("Hello World!kkkk");
});

// app.post("/data",async(req,res)=>{
//   console.log(req.body)
//   res.send("hi>......")
// })
app.use(globalErrorHandler)
app.use(notFound)

export default app;
