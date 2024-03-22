import "./App.css";
import "./styles.css";

import { AiFillFire } from "react-icons/ai";

import { NavBar } from "./components/NavBar";
import { MenuItemCard } from "./components/MenuItemCard";

function App() {
  return (
    <div>
      <NavBar />
      <MenuItemCard label="Home" icon={AiFillFire} />
    </div>
  );
}

export default App;
