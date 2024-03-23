import { FunctionComponent } from "react"

interface MenuSectionTitleProps {
    title: string;
}

export const MenuSectionTitle: FunctionComponent<MenuSectionTitleProps> = ({title}: MenuSectionTitleProps) => {
  return (
    <>
        <p className="text-gray-900 leading-none text-left mt-2 text-lg font-bold">
            {title}
        </p>
    </>
  )
}
