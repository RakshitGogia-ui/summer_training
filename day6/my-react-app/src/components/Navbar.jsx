import "./Navbar.css";
import useCart from "../hooks/useCart";
import { Link } from "react-router-dom";
function Navbar() {

    const { cart } = useCart();

    return(
        <>
            <div className="toplinks">
                <a href="#">storefinder</a>
                <a href="#">help</a>
                <a href="#">orders and returns</a>
                <a href="#">sign up</a>
                <a href="#">log in</a>
            </div>
            <nav className="navbar"><div className="logo">
             <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" alt="adidas" />
            </div>
           <ul className="mainmenu">

  <li className="offer">END OF SEASON SALE</li>

  <li className="nav-item">
    SHOES

    <div className="dropdown">
      <div className="column">
        <h4>NEW ARRIVALS</h4>
        <p>Running</p>
        <p>Football</p>
        <p>Walking</p>
        <p>Training</p>
      </div>

      <div className="column">
        <h4>SPORTS</h4>
        <p>Shoes</p>
        <p>Clothing</p>
        <p>Accessories</p>
      </div>

      <div className="column">
        <h4>COLLECTION</h4>
        <p>Samba</p>
        <p>Campus</p>
        <p>Gazelle</p>
      </div>
    </div>
  </li>

  <li className="nav-item">
    MEN

    <div className="dropdown">
      <div className="column">
        <h4>FOOTWEAR</h4>
        <p>Running</p>
        <p>Sneakers</p>
        <p>Slides</p>
      </div>

      <div className="column">
        <h4>CLOTHING</h4>
        <p>T-Shirts</p>
        <p>Shorts</p>
        <p>Jackets</p>
      </div>

      <div className="column">
        <h4>ACCESSORIES</h4>
        <p>Bags</p>
        <p>Caps</p>
        <p>Socks</p>
      </div>
    </div>
  </li>

  <li className="nav-item">
    WOMEN

    <div className="dropdown">
      <div className="column">
        <h4>FOOTWEAR</h4>
        <p>Running</p>
        <p>Sneakers</p>
        <p>Slides</p>
      </div>

      <div className="column">
        <h4>CLOTHING</h4>
        <p>Tops</p>
        <p>Leggings</p>
        <p>Jackets</p>
      </div>

      <div className="column">
        <h4>ACCESSORIES</h4>
        <p>Bags</p>
        <p>Caps</p>
        <p>Socks</p>
      </div>
    </div>
  </li>

  <li className="nav-item">
    KIDS

    <div className="dropdown">
      <div className="column">
        <h4>BOYS</h4>
        <p>Shoes</p>
        <p>Clothing</p>
        <p>Accessories</p>
      </div>

      <div className="column">
        <h4>GIRLS</h4>
        <p>Shoes</p>
        <p>Clothing</p>
        <p>Accessories</p>
      </div>

      <div className="column">
        <h4>SPORTS</h4>
        <p>Football</p>
        <p>Cricket</p>
        <p>Training</p>
      </div>
    </div>
  </li>

  <li className="nav-item">
    SPORTS & LIFESTYLE

    <div className="dropdown">
      <div className="column">
        <h4>SPORTS</h4>
        <p>Running</p>
        <p>Cricket</p>
        <p>Football</p>
      </div>

      <div className="column">
        <h4>GYM</h4>
        <p>Training</p>
        <p>Yoga</p>
        <p>Fitness</p>
      </div>

      <div className="column">
        <h4>LIFESTYLE</h4>
        <p>Originals</p>
        <p>Sneakers</p>
        <p>Streetwear</p>
      </div>
    </div>
  </li>

  <li className="nav-item">
    OUTLET

    <div className="dropdown">
      <div className="column">
        <h4>SHOP BY PRICE</h4>
        <p>Under ₹2000</p>
        <p>Under ₹5000</p>
        <p>Flat 50% Off</p>
      </div>

      <div className="column">
        <h4>CATEGORIES</h4>
        <p>Shoes</p>
        <p>Clothing</p>
        <p>Accessories</p>
      </div>
    </div>
  </li>

</ul>
            <div className="rightsection">
                <input type="text" placeholder="Search" />
                <span>👤</span>
                <span>❤</span>
              <Link to="/cart">
    <span>🛒</span>
</Link>
<span>{cart.length}</span>
            </div>
                </nav>
            
        </>
    )
}
export default Navbar;