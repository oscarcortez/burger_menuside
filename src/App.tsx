import "./App.css";
import "./styles.css";

// import { AiFillFire } from "react-icons/ai";

import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header/Header";
import Sidebar from "./samples/SideBar";
import SideBarEx from "./samples/SideBarEx";
import OtherSideBar from "./samples/OtherSideBar";

// import { MenuItemCard } from "./components/MenuItemCard";

export default () => {
  return (
    // <SideBarEx />
    <div className="fixed top-0 left-0 right-0">
      <nav className="container flex items-center justify-between py-1 lg:py-5">
        <Header>
         <NavBar />
       </Header>
      </nav>
    </div>

    // <div className="w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap py-4 flex-grow">
    //   <div className="bg-gray-100 w-fixed w-[40%] flex-shrink flex-grow-0 px-4 ">
    //     {/* Ads here */}
    //   </div>
    //   {/* <Header>
    //     <NavBar />
    //   </Header> */}
    //   {/* <Sidebar /> */}
    //   <div className="bg-gray-100 w-[40%] w-fixed flex-shrink flex-grow-0 px-2">
    //     {/* Ads here */}
    //   </div>
    // </div>
  );
}

