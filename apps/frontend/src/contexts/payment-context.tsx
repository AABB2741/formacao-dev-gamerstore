"use client";

import { useApi } from "@/hooks/use-api";
import { useCart } from "@/hooks/use-cart";
import useLocalStorage from "@/hooks/use-local-storage";
import {
  OrderDelivery,
  PaymentMethod,
  Status,
  type CartItem,
  type Order,
  type OrderItem,
} from "@gstore/core";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

export interface PaymentContextProps {
  paymentMethod: PaymentMethod;
  delivery: Partial<OrderDelivery>;
  updatePaymentMethod: (paymentMethod: PaymentMethod) => void;
  updateDelivery: (delivery: Partial<OrderDelivery>) => void;
  finishPurchase: () => void;
}

export const PaymentContext = createContext<PaymentContextProps>({} as any);

export function PaymentProvider(props: any) {
  const { httpPost } = useApi();
  const { items, totalPrice, clearCart } = useCart();
  const { saveItem, getItem } = useLocalStorage();
  const router = useRouter();

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(
    PaymentMethod.PIX,
  );
  const [delivery, setDelivery] = useState<Partial<OrderDelivery>>({});

  function updatePaymentMethod(paymentMethod: PaymentMethod) {
    saveItem("paymentMethod", paymentMethod);
    setPaymentMethod(paymentMethod);
  }

  function updateDelivery(delivery: Partial<OrderDelivery>) {
    saveItem("delivery", delivery);
    setDelivery(delivery);
  }

  async function finishPurchase() {
    const order: Partial<Order> = {
      date: new Date(),
      paymentMethod,
      totalPrice: totalPrice,
      delivery: delivery as OrderDelivery,
      status: Status.RECEIVED,
      items: items.map(
        (item: CartItem) =>
          ({
            product: item.product,
            amount: item.amount,
            unitPrice: item.product.promotionalPrice,
          }) as OrderItem,
      ),
    };

    await httpPost("/pedidos", order);
    clearCart();
    router.push("/checkout/sucesso");
  }

  useEffect(() => {
    const delivery = getItem("delivery");
    const paymentMethod = getItem("paymentMethod");
    if (delivery) setDelivery(delivery);
    if (paymentMethod) setPaymentMethod(paymentMethod);
  }, [getItem]);

  return (
    <PaymentContext.Provider
      value={{
        delivery,
        paymentMethod,
        updateDelivery,
        updatePaymentMethod,
        finishPurchase,
      }}
    >
      {props.children}
    </PaymentContext.Provider>
  );
}
