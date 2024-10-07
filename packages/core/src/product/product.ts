import z from "zod";
import { priceableSchema } from "./priceable";
import { specificationsSchema } from "./specifications";

export const productSchema = z.intersection(
  z.object({
    id: z.number().int().positive(),
    name: z.string(),
    description: z.string(),
    brand: z.string(),
    model: z.string(),
    imageUrl: z.string(),
    rating: z.number(),
    videoReviewUrl: z.string(),
    tags: z.array(z.string()),
    specifications: specificationsSchema,
  }),
  priceableSchema,
);

export type Product = z.infer<typeof productSchema>;
