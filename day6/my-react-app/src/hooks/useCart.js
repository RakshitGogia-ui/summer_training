import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

console.log("CartContext =", CartContext);

export default function useCart() {
  return useContext(CartContext);
}