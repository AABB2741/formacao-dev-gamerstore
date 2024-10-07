import {
  CalculateInstallment,
  Cart,
  CartItem,
  Installment,
  Product,
} from "@gstore/core";
import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/use-local-storage";

export interface CartContextProps {
  items: CartItem[];
  itemCount: number;
  fullTotalPrice: number;
  totalPrice: number;
  installment: Installment;
  addItem: (product: Product) => void;
  removeItem: (product: Product) => void;
  removeProduct: (product: Product) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextProps>({} as any);

export function CartProvider(props: any) {
  const { saveItem, getItem } = useLocalStorage();
  const [cart, setCart] = useState<Cart>(new Cart());

  function addItem(product: Product) {
    updateCart(cart.addItem(product));
  }

  function removeItem(product: Product) {
    updateCart(cart.removeItem(product));
  }

  function removeProduct(product: Product) {
    updateCart(cart.removeProduct(product));
  }

  function clearCart() {
    updateCart(cart.clear());
  }

  function updateCart(cart: Cart) {
    saveItem("cart", cart.items);
    setCart(cart);
  }

  useEffect(() => {
    getItem("cart").then((itemsSalvos: CartItem[]) => {
      if (itemsSalvos) setCart(new Cart(itemsSalvos));
    });
  }, [getItem]);

  return (
    <CartContext.Provider
      value={{
        items: cart.items,
        itemCount: cart.itemCount,
        totalPrice: cart.totalPrice,
        fullTotalPrice: cart.fullTotalPrice,
        installment: new CalculateInstallment().execute({
          price: cart.totalPrice,
        }),
        addItem,
        removeItem,
        removeProduct,
        clearCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
