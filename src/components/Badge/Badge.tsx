import { FunctionComponent, ReactNode } from 'react'

type BadgeProps = {
  label: string
  color: string
}

export const Badge: FunctionComponent<BadgeProps> = ({
  label
}: BadgeProps): ReactNode => {
  return (
    <div className="bg-yellow-200 text-black text-xs rounded-full p-3 float-left mt-2">
      {label}
    </div>
  )
}
