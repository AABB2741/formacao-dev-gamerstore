import {
  Order,
  OrderDelivery,
  PaymentMethod,
  Status,
  type OrderItem,
} from "@gstore/core";
import { createContext, useEffect, useState } from "react";
import { useApi } from "../hooks/use-api";
import { useCart } from "../hooks/use-cart";
import { useLocalStorage } from "../hooks/use-local-storage";

export interface PaymentContextProps {
  paymentMethod: PaymentMethod;
  delivery: Partial<OrderDelivery>;
  updatePaymentMethod: (paymentMethod: PaymentMethod) => void;
  updateDelivery: (delivery: Partial<OrderDelivery>) => void;
  finishPurchase: () => void;
}

const PaymentContext = createContext<PaymentContextProps>({} as any);

export function PaymentProvider(props: any) {
  const { httpPost } = useApi();
  const { items, totalPrice, clearCart } = useCart();
  const { saveItem, getItem } = useLocalStorage();

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
      totalPrice,
      delivery: delivery as OrderDelivery,
      status: Status.RECEIVED,
      items: items.map(
        (item) =>
          ({
            product: item.product,
            amount: item.amount,
            unitPrice: item.product.promotionalPrice,
          }) as OrderItem,
      ),
    };

    await httpPost("/pedidos", order);
    clearCart();
  }

  useEffect(() => {
    getItem("delivery").then((delivery) => {
      setDelivery(delivery ?? {});
    });
    getItem("pagamento").then((paymentMethod) => {
      setPaymentMethod(paymentMethod ?? PaymentMethod.PIX);
    });
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

export default PaymentContext;
