import { FilterProducts, Product } from "@gstore/core";
import { createContext, useCallback, useEffect, useState } from "react";
import { useApi } from "../hooks/use-api";

export interface ProductsContextProps {
  products: Product[];
  search: string;
  setSearch: (search: string) => void;
  productById: (id: number) => Product | null;
}

export const ProductsContext = createContext<ProductsContextProps>({} as any);

export function ProductsProvider(props: any) {
  const { httpGet } = useApi();
  const [search, setSearch] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = useCallback(async () => {
    const products = await httpGet("/products");
    setProducts(Array.isArray(products) ? products : []);
  }, [httpGet]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <ProductsContext.Provider
      value={{
        search,
        get products() {
          if (!search) return products;
          return new FilterProducts().execute(search, products);
        },
        setSearch,
        productById: (id: number) =>
          products.find((product) => product.id === id) ?? null,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
}
