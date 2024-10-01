import type { Product } from "@/core";

export interface ProductTitleProps {
  product: Product;
}

export function ProductTitle({ product }: ProductTitleProps) {
  return (
    <div className="flex flex-col">
      <div className="text-2xl">{product.name}</div>
      <div className="font-light text-zinc-400">{product.description}</div>
    </div>
  );
}
