import { FunctionComponent, ReactNode } from 'react'
import { MenuItemCard } from '../MenuItemCard'
import { IconType } from 'react-icons'
import { MenuSectionTitle } from '../MenuSectionTitle'

interface ItemCardProps {
  label: string
  icon?: IconType
  navigateTo: string
  isTitle?: boolean
}
interface ListItemCardProps {
  items: {
    label: string
    icon?: IconType
    navigateTo: string
    isTitle?: boolean
  }[]
}

export const ListItemCard: FunctionComponent<ListItemCardProps> = ({
  items
}: ListItemCardProps): ReactNode => {
  return (
    <div className="flex flex-col justify-start">
      {items.map((item: ItemCardProps) =>
        item.isTitle ? (
          <MenuSectionTitle title={item.label} />
        ) : (
          <MenuItemCard
            label={item.label}
            icon={item.icon}
            navigateTo={item.navigateTo}
          />
        )
      )}
    </div>
  )
}
