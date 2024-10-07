import type { Product } from "../product";

export interface OrderItem {
  id: number;
  amount: number;
  unitPrice: number;
  product: Product;
}
