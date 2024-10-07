import { useContext } from "react";
import PaymentContext from "../contexts/payment-context";

export const usePayment = () => useContext(PaymentContext);
