import "./App.css";
import "./styles.css";

import { Route, Routes } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header/Header";
import ThreeColumnsPage from "./samples/ThreeColumnsPage";

// import { MenuItemCard } from "./components/MenuItemCard";

export default () => {
  return (
    <div className="flex flex-col md:flex-row h-screen relative">
      <div className="md:w-1/3 relative border"></div>
      <NavBar>
        <Routes>
          <Route path="/" element={<h1>home</h1>} />
          <Route path="about" element={<h1>about</h1>} />
          <Route path="services" element={<h1>services</h1>} />
          <Route path="contact" element={<h1>contact</h1>} />
        </Routes>
      </NavBar>
      <div className="md:w-1/3 relative border"></div>
    </div>
    // <ThreeColumnsPage />
  );
};
