import z from "zod";

export const priceableSchema = z.object({
  basePrice: z.number(),
  promotionalPrice: z.number(),
  lowestPrice: z.number(),
  highestPrice: z.number(),
  averagePrice: z.number(),
});

export type Priceable = z.infer<typeof priceableSchema>;
