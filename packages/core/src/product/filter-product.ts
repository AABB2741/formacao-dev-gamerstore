import type { Product } from "./product";

export class FilterProducts {
  execute(search: string, product: Product[]): Product[] {
    const words = search.toLowerCase().split(" ");
    return product.filter((product) => {
      const text = `
                ${product.name}
                ${product.description}
                ${Object.values(product.specifications).join(" ")}
                ${product.brand}
            `.toLowerCase();
      return words.every((word) => text.includes(word));
    });
  }
}
