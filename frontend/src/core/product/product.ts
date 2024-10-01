import type { Priceable } from "./priceable";
import type { Specifications } from "./specifications";

export interface Product extends Priceable {
  id: number;
  name: string;
  description: string;
  brand: string;
  model: string;
  imageUrl: string;
  rating: number;
  videoReviewUrl: string;
  tags: string[];
  specifications: Specifications;
}
