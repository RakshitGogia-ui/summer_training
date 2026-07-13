import "./ProductCard.css";
import useCart from "../hooks/useCart";
function ProductCard({ product }) {
const  { addToCart }  = useCart();
    return(

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
<button onClick={() => addToCart(product)}>
    Add to Cart
</button>
            </div>

        </div>

    )

}

export default ProductCard;