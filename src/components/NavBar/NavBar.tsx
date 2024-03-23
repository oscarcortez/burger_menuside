import { SideMenu } from '../SideMenu/SideMenu'
import { ListItemCard } from '../ListItemCard'
import { Badge } from '../Badge'

import { items } from '../../service/SidebarItemsService'
/*
TODO: Necesary to use children here. Its not possible to put components into the Navbar
TODO: Put padding in all the sidebar
TODO: I think navbar and sidebar should be separated
*/

export const NavBar: React.FC = () => {
  return (
    <>
      <div className="border-2 p-4 sticky top-0 flex min-h-6 w-full max-w-[100vw] transform-gpu flex-wrap justify-end items-center gap-x-2 px-2 sm:gap-x-4 sm:px-4 print:relative">
        <SideMenu>
          <ListItemCard items={items} />
          <Badge color="red" label="PacketPost" />
        </SideMenu>
      </div>
    </>
  )
}
