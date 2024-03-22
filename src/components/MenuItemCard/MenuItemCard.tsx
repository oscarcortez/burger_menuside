import { IconType } from "react-icons";
// import { Link } from "react-router-dom";
import { FunctionComponent } from "react";

interface MenuItemCardProps {
  icon?: IconType;
  label: string;
}

export const MenuItemCard: FunctionComponent<MenuItemCardProps> = ({
  icon,
  label,
  // navigateTo,
}: MenuItemCardProps) => {
  return (
    <>
      {/* <Link to={navigateTo}> */}
      <div className="flex flex-row justify-start bg-white pt-3 pb-3 pl-2">
        {icon && icon({ size: 20 })}
        <p className="text-gray-900 leading-none font-bold text-left">
          {label}
        </p>
      </div>
      {/* </Link> */}
    </>
  );
};
