import { FunctionComponent } from "react";
import { MenuItemCard } from "../MenuItemCard";
import { IconType } from 'react-icons';
import { MenuSectionTitle } from "../MenuSectionTitle";

interface ListItemCardProps {
    items: { label: string; icon?: IconType, isTitle?: boolean }[];
}

export const ListItemCard: FunctionComponent<ListItemCardProps> = ({ items }: ListItemCardProps) => {
  return (
    <div className="flex flex-col justify-start">
      {items.map((item: any) => (
        item.isTitle 
        ? <MenuSectionTitle title={item.label}/>
        : <MenuItemCard label={item.label} icon={item.icon}/>
      ))}
    </div>
  );
};
