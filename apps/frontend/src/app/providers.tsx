import { CartProvider } from "@/contexts/cart-context";
import { PaymentProvider } from "@/contexts/payment-context";
import { ProductsProvider } from "@/contexts/product-context";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ProductsProvider>
      <CartProvider>
        <PaymentProvider>{children}</PaymentProvider>
      </CartProvider>
    </ProductsProvider>
  );
}
