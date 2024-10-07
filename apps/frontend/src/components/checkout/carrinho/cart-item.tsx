import { useInstallment } from "@/hooks/use-installment";
import { CartItem as CartItemModel, Currency } from "@gstore/core";
import { IconMinus, IconPlus, IconTrash } from "@tabler/icons-react";
import Image from "next/image";

export interface CartItemProps {
  item: CartItemModel;
  addItem: () => void;
  removeItem: () => void;
  removeProduct: () => void;
}

export default function CartItem({
  item,
  addItem,
  removeItem,
  removeProduct,
}: CartItemProps) {
  const { product, amount } = item;
  const { installment } = useInstallment(product.promotionalPrice);

  return (
    <div className="flex items-center bg-violet-dark px-8 py-0 rounded-xl gap-16">
      <Image
        src={product.imageUrl}
        width={200}
        height={0}
        alt="Imagem Product"
      />
      <div className="flex flex-col h-28 flex-1">
        <span className="text-xl">{product.name}</span>
      </div>
      <div className="flex flex-col items-center gap-4">
        <span className="text-sm text-zinc-400">Quantidade</span>
        <div className="flex items-center border border-zinc-300 rounded-lg">
          <button
            disabled={amount === 1}
            className={`${amount === 1 && "text-zinc-500 cursor-not-allowed"} px-2 py-0.5`}
            onClick={removeItem}
          >
            <IconMinus size={15} />
          </button>
          <span className="border-x border-zinc-300 text-lg px-4 py-0.5">
            {amount}
          </span>
          <button className="px-2 py-0.5 text-emerald-500" onClick={addItem}>
            <IconPlus size={15} />
          </button>
        </div>
        <button
          className="flex items-center gap-1 text-pink-600 select-none"
          onClick={removeProduct}
        >
          <IconTrash size={20} />
          <span className="text-sm">Remove</span>
        </button>
      </div>
      <div className="flex flex-col items-end">
        <span className="line-through text-zinc-400 text-sm">
          de {Currency.format({ value: product.basePrice })}
        </span>
        <div className="flex gap-1.5 items-baseline">
          <span className="text-sm">por</span>
          <span className="text-emerald-500 text-xl font-semibold">
            {Currency.format({ value: product.promotionalPrice })}
          </span>
        </div>
        <span className="text-xs text-zinc-300">
          Preço à vista no PIX/Boleto
        </span>
        <span className="text-sm text-zinc-300 mt-4">
          Installment no Cartão
        </span>
        <div className="text-sm text-zinc-300">
          em até{" "}
          <span className="text-white font-semibold">
            {installment.installmentAmount}x
          </span>{" "}
          de{" "}
          <span className="text-white font-semibold">
            {Currency.format({ value: installment.installmentPrice })}
          </span>
        </div>
      </div>
    </div>
  );
}
