import { z } from "zod";

export const specificationsSchema = z.intersection(
  z.object({
    highlightedSpec: z.string(),
  }),
  z.record(z.string(), z.union([z.string(), z.number(), z.boolean()])),
);

export type Specifications = z.infer<typeof specificationsSchema>;
