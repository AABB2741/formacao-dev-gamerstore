import { CalculateInstallment } from "@gstore/core";

export function useInstallment(price: number, installmentAmount = 12) {
  const installment = new CalculateInstallment().execute({
    price,
    installmentAmount,
  });

  return { installment };
}
