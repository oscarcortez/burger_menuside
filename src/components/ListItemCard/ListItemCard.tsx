import { FunctionComponent } from "react";
import { MenuItemCard } from "../MenuItemCard";
import { IconType } from 'react-icons';

interface ListItemCardProps {
    items: { label: string; icon?: IconType }[];
}

export const ListItemCard: FunctionComponent<ListItemCardProps> = ({ items }: ListItemCardProps) => {
  return (
    <div className="flex flex-col justify-start">
      {items.map((item: any) => (
        <MenuItemCard label={item.label} icon={item.icon}/>
      ))}
    </div>
  );
};
