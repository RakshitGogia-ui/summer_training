import "./Navbar.css";
function Navbar(){
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
                <li>SHOES</li>
                <li>MEN</li>
                <li>WOMEN</li>
                <li>KIDS</li>
                <li>SPORTS & LIFESTYLE</li>
                <li>OUTLET</li> 
            </ul>
            <div className="rightsection">
                <input type="text" placeholder="Search" />
                <span>👤</span>
                <span>❤</span>
                <span>🛍</span>
            </div>
                </nav>
            
        </>
    )
}
export default Navbar;