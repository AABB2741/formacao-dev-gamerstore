import { CalculateInstallment } from "@gstore/core";

export function useInstallment(price: number, amount: number = 12) {
  return new CalculateInstallment().execute({
    price,
    installmentAmount: amount,
  });
}
