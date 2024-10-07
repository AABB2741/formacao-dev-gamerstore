import colors from "@/src/data/constants/colors";
import { useCart } from "@/src/data/hooks/use-cart";
import { useInstallment } from "@/src/data/hooks/use-installment";
import { Ionicons } from "@expo/vector-icons";
import { Currency, Product } from "@gstore/core";
import { Pressable, StyleSheet, Text, View } from "react-native";

export interface ShoppingBannerProps {
  product: Product;
}

export default function ShoppingBanner(props: ShoppingBannerProps) {
  const { product } = props;
  const { addItem } = useCart();
  const installment = useInstallment(product.promotionalPrice);

  return (
    <View style={styles.container}>
      <View style={styles.containerPreco}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            borderRightWidth: 3,
            borderRightColor: colors.PRIMARY,
          }}
        >
          <Text style={styles.valorCheio}>de R$ {product?.basePrice}</Text>
          <View style={styles.precoPromocional}>
            <Text style={styles.valor}>por</Text>
            <Text style={styles.valorDestaque}>
              {Currency.format({ value: product?.promotionalPrice })}
            </Text>
          </View>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={styles.valor}>
            até {installment.installmentAmount}x de
          </Text>
          <Text style={styles.valor}>
            {Currency.format({ value: installment.installmentPrice })}
          </Text>
        </View>
      </View>
      <View style={{ gap: 10 }}>
        <Pressable
          onPress={() => addItem(product)}
          style={{ ...styles.botao, backgroundColor: colors.PRIMARY }}
        >
          <Ionicons style={styles.botaoTexto} name="cart-outline" size={20} />
          <Text style={styles.botaoTexto}>Add</Text>
        </Pressable>
        <Pressable
          onPress={() => {}}
          style={{
            ...styles.botao,
            backgroundColor: colors.SECONDARY,
          }}
        >
          <Ionicons style={styles.botaoTexto} name="card-outline" size={20} />
          <Text style={styles.botaoTexto}>Comprar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    gap: 30,
  },
  containerPreco: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  valorCheio: {
    textDecorationLine: "line-through",
    color: "#C4C4C4",
  },
  precoPromocional: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 8,
  },
  valor: {
    fontSize: 16,
    color: "white",
  },
  valorDestaque: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.TEXT_HIGHLIGHT_1,
  },
  botao: {
    color: "#FFF",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 9999,
    height: 35,
    paddingHorizontal: 80,
    gap: 8,
  },
  botaoTexto: {
    color: "#FFF",
  },
});
