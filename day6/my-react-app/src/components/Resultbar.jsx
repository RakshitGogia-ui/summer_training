import "./Resultbar.css";

function Resultbar(props)  {
  return (
    <div className="resultsBar">
      <p>{props.totalProducts} results</p>

      <button className="filterBtn">
        Filter & Sort
        <span>☰</span>
      </button>
    </div>
  );
}

export default Resultbar;