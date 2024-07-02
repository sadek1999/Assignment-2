import express, { Application } from "express";

import { productsCollections } from "./app/modules/products/products.collection";
import { productsRoutes } from "./app/modules/products/products.route";
const app:Application = express();



app.use('/api/v1',productsRoutes)


app.get("/", (req, res) => {
  res.send("Hello World!kkkk");
});

export default app;
