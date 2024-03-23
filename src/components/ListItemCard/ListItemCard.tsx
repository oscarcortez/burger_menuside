import { FunctionComponent, ReactNode } from 'react'
import { MenuItemCard } from '../MenuItemCard'
import { IconType } from 'react-icons'
import { MenuSectionTitle } from '../MenuSectionTitle'
import { Badge } from '../Badge'

interface ItemCardProps {
  label: string
  icon?: IconType
  navigateTo?: string
  type: string
}
interface ListItemCardProps {
  items: {
    label: string
    icon?: IconType
    navigateTo?: string
    type: string
  }[]
}

export const ListItemCard: FunctionComponent<ListItemCardProps> = ({
  items
}: ListItemCardProps): ReactNode => {
  return (
    <div className="flex flex-col justify-start">
      {items.map((item: ItemCardProps) => {
        switch (item.type) {
          case 'titleItem':
            return <MenuSectionTitle title={item.label} />
          case 'linkItem':
            return (
              <MenuItemCard
                label={item.label}
                icon={item.icon}
                navigateTo={item.navigateTo}
              />
            )
          case 'badgeItem':
            return <Badge label={item.label} navigateTo={item.navigateTo} />
          default:
            return null
        }
      })}
    </div>
  )
}
