import { PaymentContext } from "@/contexts/payment-context";
import { useContext } from "react";

export const usePayment = () => useContext(PaymentContext);
