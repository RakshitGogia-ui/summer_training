import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products";
import CategoryLinks from "./components/CategoryLinks";
import Membership from "./components/Membership";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {

  const [page, setPage] = useState("home");

  return (
    <>
      <Navbar setPage={setPage} />

      {
        page === "home" && (
          <>
            <Hero />
            <Categories />
            <Products />
            <CategoryLinks />
            <Membership />
          </>
        )
      }

      {
        page === "cart" && <Cart />
      }

      <Footer />
    </>
  );
}

export default App;