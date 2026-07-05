import "./ProductCard.css";

function ProductCard(props){

    return(

        <div className="productCard">

            <div className="imgBox">

                <img src={props.image} />

                <span className="wishlist">♡</span>

            </div>

            <div className="details">

                <h4>{props.price}</h4>

                <p>{props.title}</p>

                <p>{props.category}</p>

                <p>{props.colors}</p>

                <p>{props.offer}</p>

            </div>

        </div>

    )

}

export default ProductCard;