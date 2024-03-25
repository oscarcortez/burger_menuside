import "./App.css";
import "./styles.css";

import { Route, Routes } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { MainContent } from "./components/MainContent";
import { Header } from "./components/Header/Header";
import ThreeColumnsPage from "./samples/ThreeColumnsPage";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { RightSidebar } from "./components/RightSidebar";
import { items, seeMoreItems } from "./service/SidebarItemsService";
import { ListItemCard } from "./components/ListItemCard";
import { Accordion } from "./components/Accordion";


export default () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-row h-screen relative">
      <div className="md:w-1/3 relative border"></div>
      <MainContent>
        <NavBar
          rightMenuIcon={<AiOutlineMenu size={30} />}
          onClickRightMenuIcon={() => { setIsOpen(true) }}
        />
        <RightSidebar isOpen={isOpen} setIsOpen={() => setIsOpen(false)}>
          <ListItemCard items={items} />
          <Accordion title="Se Mere">
            <ListItemCard items={seeMoreItems} />
          </Accordion>
        </RightSidebar>
        <Routes>
          <Route path="/" element={<h1>home</h1>} />
          <Route path="about" element={<h1>about</h1>} />
          <Route path="services" element={<h1>services</h1>} />
          <Route path="contact" element={<h1>contact</h1>} />
        </Routes>
      </MainContent>
      <div className="md:w-1/3 relative border"></div>
    </div >
    // <ThreeColumnsPage />
  );
};
