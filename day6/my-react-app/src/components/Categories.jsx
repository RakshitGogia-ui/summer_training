import "./Categories.css";
import men from "../assets/men.avif";
import women from "../assets/women.avif";
import kids from "../assets/kids.avif";
import running from "../assets/running.avif";
import top from "../assets/top.avif";
import shorts from "../assets/shorts.avif";
import sneaker from "../assets/sneaker.avif";
function Categories() {

  const categories = [
  { title: "MEN", image: men },
  { title: "WOMEN", image: women },
  { title: "KIDS", image: kids },
  { title: "RUNNING SHOES", image: running },
  { title: "DAILY SNEAKERS", image: sneaker },
  { title: "T-SHIRTS", image: top },
  { title: "SHORTS", image: shorts },
];

  return(
    <div className="categories">
  {categories.map((item, index) => (
    <div className="categorycard" key={index}>
      <img src={item.image} alt={item.title} />
      <h4>{item.title}</h4>
    </div>
  ))}
</div>
  )
}

export default Categories;
    
  