import { ProductsContext } from "@/contexts/product-context";
import { useContext } from "react";

export const useProducts = () => useContext(ProductsContext);
