import { z } from "zod";

  export const orderValidationSchema = z.object({
  body: z.object({
    email: z
      .string({ required_error:"Email is required"})
      .email({ message: "Invalid email address" })
      ,
    productId: z.string({required_error:"Products ID is required"}),
    price: z
      .number({required_error:"Price is required"})
      .positive({ message: "Price must be a positive number" })
     ,
    quantity: z
      .number({required_error:"Quantity is required"})
      .int()
      .positive({ message: "Quantity must be a positive integer" })
     ,
  }),
});
