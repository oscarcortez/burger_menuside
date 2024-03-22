import "./App.css";
import "./styles.css";

// import { AiFillFire } from "react-icons/ai";

import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header/Header";
// import { MenuItemCard } from "./components/MenuItemCard";

function App() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-1 bg-gray-100 p-4">{/* Columna izquierda */}</div>
      <div className="col-span-2 bg-gray-200 p-4">
        <Header>
          <NavBar />
        </Header>
      </div>
      <div className="col-span-1 bg-gray-100 p-4">{/* Columna derecha */}</div>
    </div>
  );
}

export default App;
