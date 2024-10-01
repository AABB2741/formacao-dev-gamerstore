import type { Product } from "@/core";
import Image from "next/image";
import { Specifications } from "./specifications";

export interface ProductInfosProps {
  product: Product;
}

export function ProductInfos({ product }: ProductInfosProps) {
  return (
    <div className="flex items-center bg-violet-dark rounded-xl p-5">
      <div className="flex-1 relative flex justify-center h-96">
        <Image
          src={product.imageUrl}
          fill
          className="object-cover p-7"
          alt="Imagem do Produto"
        />
      </div>
      <Specifications product={product} />
    </div>
  );
}
