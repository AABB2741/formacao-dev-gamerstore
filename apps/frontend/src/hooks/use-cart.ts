import { useContext } from "react";
import { CartContext } from "../contexts/cart-context";

export const useCart = () => useContext(CartContext);
