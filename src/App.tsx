import "./App.css";
import "./styles.css";

// import { AiFillFire } from "react-icons/ai";

import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header/Header";
// import { MenuItemCard } from "./components/MenuItemCard";

export default () => {
  return (
    <div className="w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap py-4 flex-grow">
      <div className="bg-gray-100 w-fixed w-[40%] flex-shrink flex-grow-0 px-4 ">
        {/* Ads here */}
      </div>
      <Header>
        <NavBar />
      </Header>
      <div className="bg-gray-100 w-[40%] w-fixed flex-shrink flex-grow-0 px-2">
        {/* Ads here */}
      </div>
    </div>
  );
}

