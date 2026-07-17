import "./ProductCard.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="productCard">
      <div className="imgBox">
        <img src={product.images[0]} />

        <span className="wishlist">♡</span>
      </div>

      <div className="details">
        <h4>${product.price}</h4>

        <p>{product.title}</p>

        <p>{product.category}</p>

        <p>{product.brand}</p>

        <p>⭐ {product.rating}</p>

        <p>{product.discountPercentage}% OFF</p>

        <button onClick={() => dispatch(addToCart(product))}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;