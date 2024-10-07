"use client";

import { useProducts } from "@/hooks/use-products";
import { ProductItem } from "./product-item";
import { ProductNotFound } from "./product-not-found";

export function ProductList() {
  const { products } = useProducts();
  return products.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  ) : (
    <ProductNotFound hasBackButton={false} />
  );
}
