import colors from "@/src/data/constants/colors";
import { Product } from "@gstore/core";
import { StyleSheet, Text, View } from "react-native";

export interface SpecificationsProps {
  product: Product;
}

export default function Specifications(props: SpecificationsProps) {
  const { product } = props;
  return (
    <View style={styles.container}>
      {product?.specifications &&
        Object.keys(product?.specifications!)
          .filter((k) => k !== "destaque")
          .map((chave) => (
            <View key={chave} style={styles.specification}>
              <Text style={styles.nome}>{chave}</Text>
              <Text style={styles.valor}>{product?.specifications[chave]}</Text>
            </View>
          ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  specification: {
    flexDirection: "row",
    gap: 10,
  },
  nome: {
    color: "white",
    width: "35%",
    backgroundColor: colors.PRIMARY,
    padding: 8,
    borderRadius: 6,
  },
  valor: {
    flex: 1,
    color: "white",
    backgroundColor: colors.PRIMARY,
    padding: 8,
    borderRadius: 6,
  },
});
