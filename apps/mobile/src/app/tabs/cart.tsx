import CabecalhoCheckout from "@/src/components/checkout/CabecalhoCheckout";
import CarrinhoVazio from "@/src/components/checkout/carrinho/CarrinhoVazio";
import useCarrinho from "@/src/data/hooks/use-cart";
import { Ionicons } from "@expo/vector-icons";
import { ItemCarrinho } from "@gstore/core";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import CarrinhoItem from "../../components/checkout/carrinho/CarrinhoItem";

export default function Carrinho({ navigation }: any) {
  const { itens, qtdeItens, adicionarItem, removerItem, removerProduto } =
    useCarrinho();

  return (
    <SafeAreaView style={styles.container}>
      <CabecalhoCheckout passo="carrinho" />
      <ScrollView
        contentContainerStyle={{ paddingVertical: 20, width: "100%" }}
      >
        {itens.length === 0 && <CarrinhoVazio />}
        {itens.map((item: ItemCarrinho) => (
          <CarrinhoItem
            key={item.produto.id}
            item={item}
            adicionarItem={() => adicionarItem(item.produto)}
            removerItem={() => removerItem(item.produto)}
            removerProduto={() => removerProduto(item.produto)}
          />
        ))}
      </ScrollView>
      {qtdeItens > 0 && (
        <Pressable
          style={styles.botao}
          onPress={() => {
            navigation.navigate("Pagamento");
          }}
        >
          <Ionicons name="card-outline" size={22} style={styles.botaoTexto} />
          <Text style={styles.botaoTexto}>Continuar</Text>
        </Pressable>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0E001D",
    width: "100%",
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
    marginVertical: 20,
    paddingHorizontal: 50,
    gap: 8,
  },
  botaoTexto: {
    color: "#FFF",
  },
});
