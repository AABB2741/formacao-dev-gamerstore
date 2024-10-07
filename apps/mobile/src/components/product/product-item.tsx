import colors from "@/src/data/constants/colors";
import { useCart } from "@/src/data/hooks/use-cart";
import { useInstallment } from "@/src/data/hooks/use-installment";
import { Ionicons } from "@expo/vector-icons";
import type { Product } from "@gstore/core";
import { Currency } from "@gstore/core";
import { LinearGradient } from "expo-linear-gradient";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ReviewRating } from "../shared/review-rating";

export interface ProductItemProps {
  product: Product;
  selectedProduct?: (product: Product) => void;
}

export default function ProductItem(props: ProductItemProps) {
  const { addItem } = useCart();
  const installment = useInstallment(props.product.promotionalPrice);

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.product}
        onPress={() => props.selectedProduct?.(props.product)}
      >
        <Image
          src={props.product.imageUrl}
          style={styles.imagem}
          alt="Imagem do Product"
        />
        <View style={{ flex: 1 }}>
          <View style={styles.reviewContainer}>
            <ReviewRating rating={props.product.rating} />
          </View>
          <Text style={styles.nome}>{props.product.name}</Text>
          <Text style={styles.precoCheio}>
            de {Currency.format({ value: props.product.basePrice })}
          </Text>
          <View style={styles.precoContainer}>
            <Text style={{ color: "white" }}>por</Text>
            <Text style={styles.preco}>
              {Currency.format({ value: props.product.promotionalPrice })}
            </Text>
          </View>
          <Text style={styles.parcelamento}>
            ou {installment.installmentAmount}x de{" "}
            {Currency.format({ value: installment.installmentPrice })}
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={styles.botao}
        onPress={(e) => {
          e.preventDefault();
          addItem(props.product);
        }}
      >
        <Ionicons name="cart-outline" size={22} style={styles.botaoTexto} />
        <Text style={styles.botaoTexto}>Adicionar</Text>
      </Pressable>
      <LinearGradient
        colors={["transparent", "#7811F5", "transparent"]}
        start={{ x: 0, y: 0.75 }}
        end={{ x: 1, y: 0.25 }}
        style={styles.bordaInferior}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    maxWidth: Dimensions.get("window").width,
  },
  product: {
    flexDirection: "row",
    alignItems: "center",
  },
  imagem: {
    width: 150,
    height: 150,
  },
  reviewContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  nome: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
  },
  precoCheio: {
    fontSize: 14,
    color: "#AAA",
    textDecorationLine: "line-through",
  },
  precoContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 4,
  },
  preco: {
    fontSize: 24,
    color: "#34d399",
    fontWeight: "bold",
  },
  parcelamento: {
    fontSize: 14,
    color: "#FFF",
  },
  botao: {
    color: "#FFF",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.PRIMARY,
    alignSelf: "center",
    borderRadius: 9999,
    height: 40,
    paddingHorizontal: 80,
    gap: 8,
  },
  botaoTexto: {
    color: "#FFF",
  },
  bordaInferior: {
    marginTop: 20,
    height: 2,
    width: Dimensions.get("window").width,
  },
});
