import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

console.log(import.meta.env.VITE_HOST);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
