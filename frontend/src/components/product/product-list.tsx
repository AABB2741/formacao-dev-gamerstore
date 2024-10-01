"use client";

import { products } from "@/core";
import { ProductItem } from "./product-item";
import { ProductNotFound } from "./product-not-found";

// import useProdutos from '@/data/hooks/useProdutos'

export function ProductList() {
  // const { produtos } = useProdutos()
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
