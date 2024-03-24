import { SideMenu } from "../SideMenu/SideMenu";
import { ListItemCard } from "../ListItemCard";
import { Accordion } from "../Accordion";

import { items, seeMoreItems } from "../../service/SidebarItemsService";
import { FunctionComponent, PropsWithChildren } from "react";

/*
TODO: Necesary to use children here. Its not possible to put components into the Navbar
TODO: Put padding in all the sidebar
TODO: I think navbar and sidebar should be separated
*/

export const NavBar: FunctionComponent<PropsWithChildren<{}>> = () => {
  return (
    <SideMenu>
      <ListItemCard items={items} />
      <Accordion title="Se Mere">
        <ListItemCard items={seeMoreItems} />
      </Accordion>
    </SideMenu>
  );
};
