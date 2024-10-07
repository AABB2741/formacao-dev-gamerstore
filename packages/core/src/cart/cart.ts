import type { Product } from "../product";
import type { CartItem } from "./cart-item";

export class Cart {
  constructor(readonly items: CartItem[] = []) {}

  addItem(product: Product): Cart {
    const item = this.itemPerProduct(product);
    if (item) {
      return new Cart(this.updateItemAmount(this.items, product, 1));
    } else {
      return new Cart([...this.items, { product, amount: 1 }]);
    }
  }

  removeItem(product: Product) {
    const item = this.itemPerProduct(product);
    if (!item) return this;

    return new Cart(this.updateItemAmount(this.items, product, -1));
  }

  removeProduct(product: Product) {
    const item = this.itemPerProduct(product);
    if (!item) return this;

    return new Cart(
      this.items.filter((item) => item.product.id !== product.id),
    );
  }

  clear() {
    return new Cart();
  }

  get itemCount() {
    return this.items.map((item) => item.amount).reduce((a, b) => a + b, 0);
  }

  get totalPrice() {
    return this.items
      .map((item) => item.product.promotionalPrice * item.amount)
      .reduce((a, b) => a + b, 0);
  }

  get fullTotalPrice() {
    return this.items
      .map((item) => item.product.basePrice * item.amount)
      .reduce((a, b) => a + b, 0);
  }

  private itemPerProduct(product: Product): CartItem | undefined {
    return this.items.find((item) => item.product.id === product.id);
  }

  private updateItemAmount(
    items: CartItem[],
    product: Product,
    difference: number,
  ): CartItem[] {
    return items
      .map((i) =>
        i.product.id === product.id
          ? { ...i, amount: i.amount + difference }
          : i,
      )
      .filter((i) => i.amount > 0);
  }
}
