import { MenuItemCard } from "../MenuItemCard";

export const ListItemCard = ({ items }: { items: any }) => {
  return (
    <div className="flex flex-col justify-start">
      {items.map((item: any) => (
        <MenuItemCard label={item.label} icon={item.icon} />
      ))}
    </div>
  );
};
