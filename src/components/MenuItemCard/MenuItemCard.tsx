import { IconType } from "react-icons";
// import { Link } from "react-router-dom";

export const MenuItemCard = ({
  icon,
  label,
  // navigateTo,
}: {
  icon?: IconType;
  label: string;
}) => {
  return (
    <>
      {/* <Link to={navigateTo}> */}
      <div className="flex flex-row justify-start">
        {icon && icon({ size: 20 })}
        <p className="text-gray-900 leading-none font-bold text-left">
          {label}
        </p>
      </div>
      {/* </Link> */}
    </>
  );
};
