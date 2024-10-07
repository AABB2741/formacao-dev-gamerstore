import { PaymentMethod } from "@gstore/core";

export interface SelectPaymentMethodProps {
  paymentMethod?: PaymentMethod;
  onPaymentMethodChange?: (value: PaymentMethod) => void;
  className?: string;
}

export default function SelectPaymentMethod({
  paymentMethod,
  onPaymentMethodChange,
  className,
}: SelectPaymentMethodProps) {
  function renderItem(label: string, method: PaymentMethod) {
    const selecionado = paymentMethod === method;
    return (
      <button
        className="flex items-center gap-3 bg-violet-dark rounded-lg h-12 px-7"
        onClick={() => onPaymentMethodChange?.(method)}
      >
        <span
          className={`
                        ${selecionado ? "bg-emerald-500 border-emerald-500" : "bg-transparent border-white"}
                        w-5 h-5 border-2 rounded-full
                    `}
        ></span>
        <span>{label}</span>
      </button>
    );
  }

  return (
    <div className={`flex flex-col gap-3 ${className ?? ""}`}>
      <span className="px-7 pb-2 text-xl font-bold text-white/70">
        Forma de Pagamento
      </span>
      <div className="flex flex-col gap-3">
        {renderItem("Pagamento no PIX", PaymentMethod.PIX)}
        {renderItem("Boleto Bancário", PaymentMethod.BILLET)}
        {renderItem("Cartão de Crédito", PaymentMethod.CARD)}
      </div>
    </div>
  );
}
