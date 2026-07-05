import "./CategoryLinks.css";

function CategoryLinks() {

    const links = [

        [
            "Women's Football Jersey",
            "Women's Football Shoes",
            "Women's White Football Shoes"
        ],

        [
            "Women's Black Football Shoes",
            "Predator Shoes",
            "F50 Shoes"
        ],

        [
            "Copa Shoes",
            "FIFA World Cup 26™",
            "Argentina Football Kits"
        ],

        [
            "Spain Football Kits",
            "Germany Football Kits",
            "Italy Football Kits"
        ],

        [
            "Real Madrid Football Kits",
            "Liverpool Football Kits",
            "Arsenal Football Kits"
        ],

        [
            "Juventus Football Kits",
            "Women's Football Accessories",
            "Women's Football Sale"
        ]

    ];

    return (

        <div className="categoryLinks">

            <h1>OUR CLOTHING AND SHOE CATEGORIES</h1>

            <div className="linksContainer">

                {
                    links.map((column, index) => (

                        <div className="column" key={index}>

                            {
                                column.map((item, i) => (

                                    <p key={i}>{item}</p>

                                ))
                            }

                        </div>

                    ))
                }

            </div>

        </div>

    );

}

export default CategoryLinks;