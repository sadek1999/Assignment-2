import { z } from 'zod';

// Define the Zod schema for variants
const variantsSchema = z.object({
    type: z.string().nonempty({ message: "Type is required" }),
    value: z.string().nonempty({ message: "Value is required" })
});

// Define the Zod schema for inventory
const inventorySchema = z.object({
    quantity: z.number().int().nonnegative({ message: "Quantity must be a non-negative integer" }),
    inStock: z.boolean()
});

// Define the Zod schema for products
 export const productsValidationSchema =z.object({
    body: z.object({
        name: z.string().nonempty({ message: "Name is required" }),
        description: z.string().nonempty({ message: "Description is required" }),
        price: z.number().positive({ message: "Price must be a positive number" }),
        category: z.string().nonempty({ message: "Category is required" }),
        tags: z.array(z.string()).nonempty({ message: "Tags must contain at least one tag" }),
        variants: z.array(variantsSchema).nonempty({ message: "Variants must contain at least one variant" }),
        inventory: inventorySchema
    })
 })