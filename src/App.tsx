import './App.css'
import './styles.css'

import { Route, Routes } from 'react-router-dom'

import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header/Header";
import Sidebar from "./samples/SideBar";
import SideBarEx from "./samples/SideBarEx";
import OtherSideBar from "./samples/OtherSideBar";

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

