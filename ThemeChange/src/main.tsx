import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./components/Home.tsx";
import Header from "./components/Header.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <Home />
  </React.StrictMode>
);
