import { MAX_INSTALLMENT_AMOUNT, MONTHLY_INTEREST_RATE } from "../constants";

interface CalculateInstallmentProps {
  price: number;
  installmentAmount?: number;
  interestRate?: number;
}

export class CalculateInstallment {
  execute({
    price,
    installmentAmount = MAX_INSTALLMENT_AMOUNT,
    interestRate = MONTHLY_INTEREST_RATE,
  }: CalculateInstallmentProps) {
    if (installmentAmount < 2 || installmentAmount > MAX_INSTALLMENT_AMOUNT) {
      throw new Error(
        `Quantidade de parcelas deve ser entre 2 e ${MAX_INSTALLMENT_AMOUNT}`,
      );
    }

    const totalWithInterest = this.calculateCompoundInterest(
      price,
      interestRate,
      installmentAmount,
    );

    return {
      installmentPrice: this.withTwoDecimalPlaces(
        totalWithInterest / installmentAmount,
      ),
      totalPrice: this.withTwoDecimalPlaces(totalWithInterest),
      installmentAmount,
      interestRate,
    };
  }

  private calculateCompoundInterest(
    price: number,
    monthlyInterestRate: number,
    installmentAmount: number,
  ) {
    return price * Math.pow(1 + monthlyInterestRate, installmentAmount);
  }

  private withTwoDecimalPlaces(value: number): number {
    return Math.round(value * 100) / 100;
  }
}
