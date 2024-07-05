import { z } from 'zod';

// Define the Zod schema for variants
const variantsSchema = z.object({
    type: z.string(),
    value: z.string()
});

// Define the Zod schema for inventory
const inventorySchema = z.object({
    quantity: z.number().int().nonnegative({ message: "Quantity must be a non-negative integer" }),
    inStock: z.boolean()
});

// Define the Zod schema for products
 export const productsValidationSchema =z.object({
    body: z.object({
        name: z.string({ required_error: "Name is required" }),
        description: z.string({ required_error: "Description is required" }),
        price: z
          .number({ required_error: "Price is required" })
          .positive({ message: "Price must be a positive number" }),
        category: z.string({ required_error: "Category is required" }),
        tags: z.array(z.string()).nonempty({ message: "Tags must contain at least one tag" }),
        variants: z.array(variantsSchema).nonempty({ message: "Variants must contain at least one variant" }),
        inventory: inventorySchema,
        
      }),
    })
