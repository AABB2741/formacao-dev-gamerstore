import { ProductInfos } from "@/components/product/product-infos";
import { ProductNotFound } from "@/components/product/product-not-found";
import { ProductTitle } from "@/components/product/product-title";
import { ShoppingBanner } from "@/components/product/shopping-banner";
import { products } from "@gstore/core";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((item) => item.id === Number(params.id));

  if (!product) {
    return <ProductNotFound />;
  }

  return (
    <div className="flex flex-col gap-20 container py-10">
      <div className="flex flex-col gap-10">
        <ProductTitle product={product} />
        <ProductInfos product={product} />
        <ShoppingBanner product={product} />
      </div>
    </div>
  );
}
