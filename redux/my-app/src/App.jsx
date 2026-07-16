import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./features/theme/themeSlice";

function App() {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        height: "100vh",
        background: theme === "light" ? "#ffffff" : "#222222",
        color: theme === "light" ? "#000000" : "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Current Theme: {theme}</h1>

      <button onClick={() => dispatch(toggleTheme())}>
        Toggle Theme
      </button>
    </div>
  );
}

export default App;