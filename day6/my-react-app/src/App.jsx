import Navbar from './components/Navbar.jsx';
import Hero from './components/hero.jsx';
import Categories from './components/Categories.jsx'

import Products from './components/Products.jsx';
import CategoryLinks from './components/CategoryLinks.jsx';
import Membership from './components/Membership.jsx';
import Footer from './components/Footer.jsx';
import SingleProduct from "./components/SingleProduct";
function App() {
  return (<>
    <Navbar/>
    <Hero/>
    <Categories/>
    
     <Products/>
     <SingleProduct />
     <CategoryLinks/>
     <Membership/>
     <Footer/></>
  );
}

export default App
