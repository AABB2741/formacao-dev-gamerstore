import { Currency } from "@gstore/core";
import { IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";

export interface CartTotalProps {
  itemCount: number;
  totalPrice: number;
}

export default function CartTotal({ itemCount, totalPrice }: CartTotalProps) {
  return (
    <div className="flex justify-end items-center gap-7 bg-violet-dark h-24 rounded-xl px-7">
      <div className="flex flex-col">
        <span className="text-zinc-400">
          Total ({itemCount} {itemCount === 1 ? "item" : "itens"}):
        </span>
        <span className="text-emerald-500 text-2xl font-semibold">
          {Currency.format({ value: totalPrice })}
        </span>
      </div>
      <Link href="/checkout/pagamento" className="button bg-indigo-700">
        <IconShoppingCart size={20} />
        <span>Continuar</span>
      </Link>
    </div>
  );
}
