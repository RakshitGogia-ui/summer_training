import "./Resultbar.css";

function Resultbar() {
  return (
    <div className="resultsBar">
      <p>1977 results</p>

      <button className="filterBtn">
        Filter & Sort
        <span>☰</span>
      </button>
    </div>
  );
}

export default Resultbar;