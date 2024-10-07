"use client";

import CartItem from "@/components/checkout/carrinho/cart-item";
import CartTotal from "@/components/checkout/carrinho/cart-total";
import EmptyCart from "@/components/checkout/carrinho/empty-cart";
import CheckoutHeader from "@/components/checkout/checkout-header";
import { useCart } from "@/hooks/use-cart";

export default function Page() {
  const { itemCount, totalPrice, items, addItem, removeItem, removeProduct } =
    useCart();

  return (
    <div className="flex flex-col gap-5 container">
      <CheckoutHeader currentStep="carrinho" />
      <div className="flex flex-col gap-4">
        {items.length === 0 && <EmptyCart />}
        {items.map((item: any) => (
          <CartItem
            key={item.produto.id}
            item={item}
            addItem={() => addItem(item.produto)}
            removeItem={() => removeItem(item.produto)}
            removeProduct={() => removeProduct(item.produto)}
          />
        ))}
      </div>
      <CartTotal itemCount={itemCount} totalPrice={totalPrice} />
    </div>
  );
}
