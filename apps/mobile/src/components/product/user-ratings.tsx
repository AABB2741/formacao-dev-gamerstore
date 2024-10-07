import colors from "@/src/data/constants/colors";
import { Product } from "@gstore/core";
import { Text, View } from "react-native";
import { ReviewRating } from "../shared/review-rating";

export interface UserRatingsProps {
  product: Product;
}

export function UserRatings({ product }: UserRatingsProps) {
  return (
    <View
      style={{
        padding: 30,
        gap: 10,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 7 }}>
        <Text>⭐</Text>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          Avaliações dos Usuários
        </Text>
      </View>
      <Text style={{ color: "#ddd", textAlign: "justify" }}>
        O product é elogiado por seu desempenho, qualidade de som e praticidade.
        Os clientes destacam o bom custo-benefício, a qualidade do microfone
        embutido e a facilidade de instalação. Alguns mencionam que o product é
        ideal para jogos e que o desempenho é excelente, mesmo sem placa de
        vídeo dedicada. Outros destacam a qualidade do som e o conforto do fone
        de ouvido.
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 20,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              color: colors.TEXT_HIGHLIGHT_2,
              fontSize: 48,
              fontWeight: "bold",
            }}
          >
            {product.rating.toFixed(1).replace(".", ",")}
          </Text>
          <ReviewRating rating={product.rating} size={18} />
          <Text>(198 Comentários)</Text>
        </View>
        <View>
          <Text>Desempenho excelente.</Text>
          <Text>Custo benefício ótimo.</Text>
          <Text>Gráfico dedicado.</Text>
        </View>
      </View>
    </View>
  );
}
