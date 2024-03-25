import { FunctionComponent, ReactNode } from "react";
import { ProfileCard } from "../ProfileCard";
import { IoIosCloseCircleOutline } from "react-icons/io";

const AVATAR_URL = "https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745";
const USERNAME = "JOHN DOE";
const EMAIL = "john@doe";

interface RightSidebarProps {
    children: ReactNode
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}

export const RightSidebar: FunctionComponent<RightSidebarProps> = ({
    children,
    isOpen,
    setIsOpen
}: RightSidebarProps): ReactNode => {
    return (
        <>
            <div
                className={`absolute h-screen top-0 bottom-0 right-0 bg-opacity-25 transition-all duration-300 z-10 ${isOpen ? "sm:w-full md:w-2/5 lg:w-2/5 xl:w-2/5" : "w-0"}`}
            >
                {isOpen && (
                    <div className="sidemenu-content bg-[#f4f4f4]">
                        <div className="flex justify-between">
                            <ProfileCard avatarImage={AVATAR_URL} profileName={USERNAME} profileEmail={EMAIL} />
                            <div className="flex-shrink-0 py-6 pr-4">
                                <IoIosCloseCircleOutline
                                    onClick={() => setIsOpen(!isOpen)}
                                    size={25}
                                    className="cursor-pointer"
                                />
                            </div>
                        </div>
                        <div className="sidemenu-body pr-3 pl-3">{children}</div>
                    </div>
                )}
            </div>
        </>
    )
}