"use client";

import { useInstallment } from "@/hooks/use-installment";
import { Currency, type Product } from "@gstore/core";
import { IconCreditCard, IconShoppingCart } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export interface ShoppingBannerProps {
  product: Product;
}

export function ShoppingBanner({ product }: ShoppingBannerProps) {
  const router = useRouter();
  // const { adicionarItem } = useCarrinho()
  const { installment } = useInstallment(product.promotionalPrice);

  return (
    <div className="flex">
      <div className="flex flex-col border-r border-zinc-500 pr-5">
        <div className="line-through text-zinc-400">
          de R$ {product.basePrice}
        </div>
        <div className="text-2xl font-semibold">
          <span className="text-base text-zinc-300">por</span>{" "}
          <span className="text-emerald-500">
            R$ {product.promotionalPrice}
          </span>{" "}
          <span className="text-base text-zinc-300">à vista</span>
        </div>
      </div>
      <div className="flex-1 flex flex-col text-2xl font-semibold text-zinc-400 pl-5">
        <span className="text-base text-zinc-300">
          {installment.installmentAmount}x de
        </span>
        {Currency.format({ value: installment.installmentPrice })}{" "}
      </div>
      <div className="flex gap-2 items-center">
        <button
          className="flex-1 button bg-pink-600"
          onClick={() => {}}
          // onClick={() => adicionarItem(produto)}
        >
          <IconShoppingCart size={20} />
          <span>Adicionar</span>
        </button>
        <button
          className="flex-1 button bg-violet-700"
          onClick={() => {
            // adicionarItem(produto)
            router.push("/checkout/pagamento");
          }}
        >
          <IconCreditCard size={20} />
          <span>Comprar</span>
        </button>
      </div>
    </div>
  );
}
