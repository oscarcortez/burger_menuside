import { FunctionComponent, ReactNode } from "react";
import classNames from "classnames";

interface RightSidebarProps {
    children: ReactNode
    isVisible: boolean
}

export const RightSidebar: FunctionComponent<RightSidebarProps> = ({
    children,
    isVisible,
}: RightSidebarProps): ReactNode => {
    return (
        <>
            <div
                className={classNames("absolute h-screen top-0 bottom-0 right-0 bg-opacity-25 transition-all duration-300 z-10", {
                    "sm:w-full md:w-2/5 lg:w-2/5 xl:w-2/5": isVisible,
                    "w-0": !isVisible
                })}
            >
                {isVisible && (
                    <div className="sidemenu-content bg-[#f4f4f4]">
                        <div className="sidemenu-body pr-3 pl-3">{children}</div>
                    </div>
                )}
            </div>
        </>
    )
}