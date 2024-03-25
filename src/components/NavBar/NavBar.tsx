import { SideMenu } from "../SideMenu/SideMenu";
import { ListItemCard } from "../ListItemCard";
import { Accordion } from "../Accordion";

import { items, seeMoreItems } from "../../service/SidebarItemsService";
import { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import { IconType } from "react-icons";
/*
TODO: Necesary to use children here. Its not possible to put components into the Navbar
TODO: Put padding in all the sidebar
TODO: I think navbar and sidebar should be separated
*/

interface NavBarProps {
  onClickRightMenuIcon: () => void
  rightMenuIcon: ReactNode
}

export const NavBar: FunctionComponent<PropsWithChildren<NavBarProps>> = ({
  onClickRightMenuIcon,
  rightMenuIcon
}) => {
  return (
    <>
      <div className="flex justify-end">
        <div onClick={onClickRightMenuIcon} className="cursor-pointer">
          {/* <AiOutlineMenu size={30} /> */}
          {rightMenuIcon}
        </div>
      </div>

    </>
    // <SideMenu>
    //   <ListItemCard items={items} />
    //   <Accordion title="Se Mere">
    //     <ListItemCard items={seeMoreItems} />
    //   </Accordion>
    // </SideMenu>
  );
};
