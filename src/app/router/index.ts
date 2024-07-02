import { Router } from "express";
import { productsRoutes } from "../modules/products/products.route";



const router=Router()
 const moduleRouters=[
{
    path:"/products",
    route:productsRoutes
}
 ]
 
 
 moduleRouters.forEach((route)=> {
    router.use(route.path,route.route)
 });

 export default router