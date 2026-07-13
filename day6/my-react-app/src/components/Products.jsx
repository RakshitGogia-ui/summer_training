import "./Products.css";
import ProductCard from "./ProductCard";
import Resultbar from "./Resultbar";


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
                products.map((item) => {
  return (
    <ProductCard
      key={item.id}
      product={item}
    />
  );
})}

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