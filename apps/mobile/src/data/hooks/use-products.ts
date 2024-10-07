import { useContext } from "react";
import { ProductsContext } from "../contexts/products-context";

export const useProducts = () => useContext(ProductsContext);
