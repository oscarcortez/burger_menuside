import { IconType } from 'react-icons'
import { FunctionComponent, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

interface MenuItemCardProps {
  icon?: IconType
  label: string
  navigateTo?: string
}

export const MenuItemCard: FunctionComponent<MenuItemCardProps> = ({
  icon,
  label,
  navigateTo
}: MenuItemCardProps): ReactNode => {
  return (
    <>
      <NavLink to={navigateTo || '/'}>
        <div className="flex flex-row justify-start bg-white pt-3 pb-3 pl-2 mb-2">
          {icon && icon({ size: 20, className: 'mr-1' })}
          <p className="text-gray-900 leading-none text-left">{label}</p>
        </div>
      </NavLink>
    </>
  )
}
