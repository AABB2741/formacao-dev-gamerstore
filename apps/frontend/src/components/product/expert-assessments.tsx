import type { Product } from "@gstore/core";

export interface ExpertAssessmentsProps {
  product: Product;
}

export default function ExpertAssessments(props: ExpertAssessmentsProps) {
  const { product } = props;
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-3xl">🎯</span>
          <span className="text-2xl font-semibold">
            Avaliação Especializada
          </span>
        </div>
        <p className="font-light text-zinc-300">
          *As avaliações que apresentamos não são desenvolvidos por nós, mas sim
          por canais especializados em tecnologia, que trazem uma análise
          aprofundada e imparcial dos products.
        </p>
      </div>
      <div className="relative lg:h-[500px]">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={product?.videoReviewUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
