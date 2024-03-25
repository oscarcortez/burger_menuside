
import { FunctionComponent, PropsWithChildren, ReactNode } from "react";

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
          {rightMenuIcon}
        </div>
      </div>

    </>
  );
};
