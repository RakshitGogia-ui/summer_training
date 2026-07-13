import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();
export function CartProvider({ children }) {

    const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : [];
});
    const addToCart = (product) => {

    const existingProduct = cart.find(
        (item) => item.id === product.id
    );

    if (existingProduct) {

        setCart(
            cart.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );

    } else {

        setCart([
            ...cart,
            {
                ...product,
                quantity: 1
            }
        ]);

    }

};
const increaseQuantity = (id) => {
    setCart(
        cart.map((item) =>
            item.id === id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        )
    );
};
const decreaseQuantity = (id) => {

    setCart(

        cart
            .map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
            .filter((item) => item.quantity > 0)

    );

};useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);
    return (
  <CartContext.Provider
    value={{
      cart,
        setCart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
    }}
  >
    {children}
  </CartContext.Provider>
);

}