import { SideMenu } from "../SideMenu/SideMenu";
import { MenuItemCard } from "../MenuItemCard";
import { AiFillFire } from "react-icons/ai";
import { FunctionComponent } from "react";

export const NavBar: FunctionComponent = () => {
  return (
    <>
      <SideMenu>
        <MenuItemCard label="Home" icon={AiFillFire} />
      </SideMenu>
    </>
  );
};
