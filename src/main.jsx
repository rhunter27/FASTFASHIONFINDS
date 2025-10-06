import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // Make sure this matches your actual filename!
import "./global.css"; // Global styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
