import './App.css'
import './styles.css'

import { Route, Routes } from 'react-router-dom'

import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header/Header";
// import { MenuItemCard } from "./components/MenuItemCard";

export default () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-1 bg-gray-100 p-4">{/* Columna izquierda */}</div>
      <div className="col-span-2 bg-gray-200 p-4">
        <Header>
          <NavBar />
          <Routes>
            <Route path="/" element={<h1>home</h1>} />
            <Route path="about" element={<h1>about</h1>} />
            <Route path="services" element={<h1>services</h1>} />
            <Route path="contact" element={<h1>contact</h1>} />
          </Routes>
        </Header>
      </div>
    </div>
  );
}

