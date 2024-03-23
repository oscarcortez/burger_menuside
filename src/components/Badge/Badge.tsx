import { FunctionComponent, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

type BadgeProps = {
  label: string
  navigateTo?: string
}

export const Badge: FunctionComponent<BadgeProps> = ({
  label,
  navigateTo
}: BadgeProps): ReactNode => {
  return (
    <NavLink to={navigateTo || '/'}>
      <div className="bg-yellow-200 text-black text-xs rounded-full p-3 float-left mt-2 mb-2">
        {label}
      </div>
    </NavLink>
  )
}
