import Link from "next/link";

interface CheckoutHeaderProps {
  currentStep: "carrinho" | "pagamento";
}

export default function CheckoutHeader({ currentStep }: CheckoutHeaderProps) {
  function selectedColor(step: string) {
    return currentStep === step ? "text-pink-500" : "text-zinc-400";
  }

  function bkSelecionado(step: string) {
    return currentStep === step
      ? "bg-pink-500 text-white"
      : "bg-zinc-400 text-black";
  }

  function renderizarItem(
    step: "carrinho" | "pagamento",
    index: number,
    title: string,
    path: string,
  ) {
    return (
      <Link
        href={path}
        className={`flex items-center gap-2 cursor-pointer ${selectedColor(step)}`}
      >
        <span
          className={`flex justify-center items-center text-xs font-bold w-5 h-5 rounded-full ${bkSelecionado(step)}`}
        >
          {index}
        </span>
        <span>{title}</span>
      </Link>
    );
  }

  return (
    <div className="flex justify-center items-center gap-6 h-20 select-none">
      {renderizarItem("carrinho", 1, "Carrinho", "/checkout/carrinho")}
      <div className="bg-zinc-300 h-px w-12"></div>
      {renderizarItem("pagamento", 2, "Pagamento", "/checkout/pagamento")}
    </div>
  );
}
