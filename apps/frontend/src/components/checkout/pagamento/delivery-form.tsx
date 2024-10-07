import type { OrderDelivery } from "@gstore/core";

export interface DeliveryFormProps {
  delivery: Partial<OrderDelivery>;
  onDeliveryChange: (delivery: Partial<OrderDelivery>) => void;
  className?: string;
}

export default function DeliveryForm({
  delivery,
  onDeliveryChange,
  className,
}: DeliveryFormProps) {
  function changeAttribute(attribute: string) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      onDeliveryChange({ ...delivery, [attribute]: e.target.value });
    };
  }

  return (
    <div className={`flex flex-col gap-3 ${className ?? ""}`}>
      <span className="px-7 pb-2 text-xl font-bold text-white/70">
        Dados da Delivery
      </span>
      <div className="flex flex-col gap-5 bg-violet-dark/50 rounded-xl p-6">
        <input
          placeholder="Nome Completo"
          value={delivery.name}
          onChange={changeAttribute("name")}
          className="input"
        />
        <div className="flex gap-5">
          <input
            placeholder="E-mail"
            value={delivery.email}
            onChange={changeAttribute("email")}
            className="input flex-1"
          />
          <input
            placeholder="CPF"
            value={delivery.cpf}
            onChange={changeAttribute("cpf")}
            className="input flex-1"
          />
        </div>
        <div className="flex gap-5">
          <input
            placeholder="Logradouro"
            value={delivery.publicPlace}
            onChange={changeAttribute("publicPlace")}
            className="input flex-1"
          />
          <input
            placeholder="Complemento"
            value={delivery.complement}
            onChange={changeAttribute("complement")}
            className="input"
          />
        </div>
        <div className="flex gap-5">
          <input
            placeholder="Cidade"
            value={delivery.city}
            onChange={changeAttribute("city")}
            className="input flex-1"
          />
          <input
            placeholder="Estado"
            value={delivery.state}
            onChange={changeAttribute("state")}
            className="input flex-1"
          />
        </div>
      </div>
    </div>
  );
}
