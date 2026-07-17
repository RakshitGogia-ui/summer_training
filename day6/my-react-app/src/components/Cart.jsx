import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
} from "../features/cart/cartSlice";

function Cart() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);

  const total = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <div>
      <h2>Cart</h2>

      {cart.map((item) => (
        <div key={item.id}>
          <img src={item.images[0]} width="80" />

          <h3>{item.title}</h3>

          <p>${item.price}</p>

          <p>Qty : {item.quantity}</p>

          <button
            onClick={() => dispatch(decreaseQuantity(item.id))}
          >
            -
          </button>

          <span style={{ margin: "0 10px" }}>
            {item.quantity}
          </span>

          <button
            onClick={() => dispatch(increaseQuantity(item.id))}
          >
            +
          </button>
        </div>
      ))}

      <h2>Total: ${total.toFixed(2)}</h2>

      <button className="checkout-btn">
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Cart;