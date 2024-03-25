import "./App.css";
// import "./styles.css";

import { Route, Routes } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { MainContent } from "./components/MainContent";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { RightSidebar } from "./components/RightSidebar";
import { ListItemCard } from "./components/ListItemCard";
import { Accordion } from "./components/Accordion";
import { ProfileCard } from "./components/ProfileCard";

import { items, seeMoreItems, profileValues } from "./service/SidebarItemsService";
import { listRoutes } from "./service/RoutesService";

export default () => {
  const [isVisibleRightSidebar, setIsVisibleRightSidebar] = useState<boolean>(false);
  return (
    <div className="flex flex-row h-screen relative">
      <div className="md:w-1/3 relative border"></div>
      <MainContent>
        <NavBar
          rightMenuIcon={<AiOutlineMenu size={30} />}
          onClickRightMenuIcon={() => { setIsVisibleRightSidebar(true) }}
        />
        <RightSidebar
          isVisible={isVisibleRightSidebar}
        >
          <ProfileCard
            avatarImage={profileValues.avatarImage}
            profileName={profileValues.name}
            profileEmail={profileValues.email}
            onClose={() => setIsVisibleRightSidebar(false)}
          />
          <ListItemCard items={items} />
          <Accordion title="Se Mere">
            <ListItemCard items={seeMoreItems} />
          </Accordion>
        </RightSidebar>
        <Routes>
          {listRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </MainContent>
      <div className="md:w-1/3 relative border"></div>
    </div >
    // <ThreeColumnsPage />
  );
};
