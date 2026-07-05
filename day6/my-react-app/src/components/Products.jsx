import "./Products.css";
import ProductCard from "./ProductCard";

import shoe1 from "../assets/shoe1.avif";
import shoe2 from "../assets/shoe2.avif";
import shoe3 from "../assets/shoe3.avif";
import shoe4 from "../assets/shoe4.avif";

function Products() {

    const products = [

        {
            image: shoe1,
            price: "₹4699",
            title: "Galaxy 7 Running Shoes",
            category: "Running",
            colors: "4 colours",
            offer: "Buy 2 get 50% off"
        },

        {
            image: shoe2,
            price: "₹7999",
            title: "Samba OG Shoes",
            category: "Originals",
            colors: "2 colours",
            offer: "Buy 2 get 50% off"
        },

        {
            image: shoe3,
            price: "₹9999",
            title: "Samba OG Shoes",
            category: "Originals",
            colors: "3 colours",
            offer: "Buy 2 get 50% off"
        },

        {
            image: shoe4,
            price: "₹6599",
            title: "Classic Track Pant",
            category: "Women Originals",
            colors: "2 colours",
            offer: "Buy 2 get 50% off"
        }

    ];

    return(

        <div className="products">

            {
                products.map((item,index)=>{

                    return(
                        <ProductCard
                            key={index}
                            image={item.image}
                            price={item.price}
                            title={item.title}
                            category={item.category}
                            colors={item.colors}
                            offer={item.offer}
                        />
                    )

                })
            }

        </div>

    )

}

export default Products;