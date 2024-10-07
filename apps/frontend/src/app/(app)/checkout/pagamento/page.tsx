"use client";

import CheckoutHeader from "@/components/checkout/checkout-header";
import DeliveryForm from "@/components/checkout/pagamento/delivery-form";
import PaymentSummary from "@/components/checkout/pagamento/payment-summary";
import SelectPaymentMethod from "@/components/checkout/pagamento/select-payment-method";
import { useCart } from "@/hooks/use-cart";
import { usePayment } from "@/hooks/use-payment";

export default function Page() {
  const { installment, itemCount, totalPrice, fullTotalPrice } = useCart();
  const {
    delivery,
    paymentMethod,
    updateDelivery,
    updatePaymentMethod,
    finishPurchase,
  } = usePayment();

  return (
    <div className="flex flex-col gap-7 container">
      <CheckoutHeader currentStep="pagamento" />
      <div className="flex gap-5">
        <div className="flex-1 flex flex-col gap-5">
          <SelectPaymentMethod
            paymentMethod={paymentMethod}
            onPaymentMethodChange={updatePaymentMethod}
          />
          <DeliveryForm delivery={delivery} onDeliveryChange={updateDelivery} />
        </div>
        <PaymentSummary
          itemCount={itemCount}
          totalPrice={totalPrice}
          fullTotalPrice={fullTotalPrice}
          installment={installment}
          finishPurchase={finishPurchase}
          className="mt-12"
        />
      </div>
    </div>
  );
}
