import "./Footer.css";

function Footer() {

    const footerData = [

        {
            title: "PRODUCTS",
            links: [
                "Footwear",
                "Clothing",
                "Accessories",
                "Outlet-Sale",
                "New Arrivals",
                "Flat 50% Off!"
            ]
        },

        {
            title: "SPORTS",
            links: [
                "Running",
                "Football",
                "Cricket",
                "Gym/Training",
                "Tennis",
                "Hiking & Outdoor",
                "Basketball",
                "Swimming",
                "Skateboarding"
            ]
        },

        {
            title: "COLLECTIONS",
            links: [
                "ULTRABOOST",
                "Superstar",
                "Stan Smith",
                "Sustainability",
                "Predator",
                "Adicolor"
            ]
        },

        {
            title: "SUPPORT",
            links: [
                "Help",
                "UNiDAYS",
                "Customer Services",
                "Returns & Exchanges",
                "Shipping",
                "Order Tracker",
                "Store Finder",
                "adiClub",
                "adiClub Terms & Conditions",
                "Sitemap",
                "How to place bulk orders?"
            ]
        },

        {
            title: "COMPANY INFO",
            links: [
                "About Us",
                "adidas Stories",
                "adidas Apps",
                "Entity Details",
                "Press",
                "Careers"
            ]
        }

    ];

    return (

        <footer>

            <div className="footerTop">

                {

                    footerData.map((section,index)=>(

                        <div className="footerColumn" key={index}>

                            <h3>{section.title}</h3>

                            {

                                section.links.map((item,i)=>(

                                    <p key={i}>{item}</p>

                                ))

                            }

                        </div>

                    ))

                }

                <div className="footerColumn">

                    <h3>FOLLOW US</h3>

                    <p className="icon">📷</p>

                </div>

            </div>


            <div className="footerMiddle">

                <a href="#">Cookie Settings</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms and Conditions</a>
                <a href="#">Cookies</a>

            </div>

            <div className="footerBottom">

                ©2026 adidas India Marketing Pvt. Ltd.

            </div>

        </footer>

    );

}

export default Footer;