import "./Products.css";
import ProductCard from "./ProductCard";
import Resultbar from "./Resultbar";

import shoe1 from "../assets/shoe1.avif";
import shoe2 from "../assets/shoe2.avif";
import shoe3 from "../assets/shoe3.avif";
import shoe4 from "../assets/shoe4.avif";
import { useState, useEffect } from "react";

function Products() {
const [products, setProducts] = useState([]);
const [totalProducts, setTotalProducts] = useState(0);
const [currentPage, setCurrentPage] = useState(1);
const productsPerPage = 10;
const totalPages = Math.ceil(totalProducts / productsPerPage);
    

    
    useEffect(() => {
        const skip = (currentPage - 1) * productsPerPage;
 fetch(
`https://dummyjson.com/products?limit=${productsPerPage}&skip=${skip}`
)
    .then((res) => res.json())
    .then((data) => {
      ;
      setProducts(data.products);
      setTotalProducts(data.total);
    });
}, [currentPage]);


    return(
<>
    <Resultbar totalProducts={totalProducts} />
        <div className="products">

            {
                products.map((item,index)=>{

                    return(
                        <ProductCard
                        image={item.images[0]}
                        price={item.price}
                        title={item.title}
                        category={item.category}
                        brand={item.brand}
                        rating={item.rating}
                        discount={item.discountPercentage}
/>

                    )

                })
            }

        </div>
        <div className="pagination">

  <button
    onClick={() => setCurrentPage(currentPage - 1)}
    disabled={currentPage === 1}
  >
    Previous
  </button>

  <span>
  Page {currentPage} of {totalPages}
</span>

  <button
    onClick={() => setCurrentPage(currentPage + 1)}
    disabled={currentPage === totalPages}
  >
    Next
  </button>

</div>

 </>   )

}

export default Products;