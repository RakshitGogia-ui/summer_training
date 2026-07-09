import { useEffect, useState } from "react";
import "./SingleProduct.css";

function SingleProduct() {

    const [product, setProduct] = useState(null);

    useEffect(() => {

        fetch("https://dummyjson.com/products/1")
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
            });

    }, []);

    if (!product) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="singleProduct">

            <h2>{product.title}</h2>

            <img
                src={product.images[0]}
                width="250"
            />

            <h3>${product.price}</h3>

            <p>{product.category}</p>

            <p>{product.description}</p>

            <p>Rating : {product.rating}</p>

        </div>
    );
}

export default SingleProduct;