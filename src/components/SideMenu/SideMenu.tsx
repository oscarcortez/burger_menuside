import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FunctionComponent, PropsWithChildren, useState } from "react";
import { ProfileCard } from "../ProfileCard";

const AVATAR_URL = "https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745";
const USERNAME = "JOHN DOE";
const EMAIL = "john@doe";

export const SideMenu: FunctionComponent<PropsWithChildren<{}>> = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {/* Overlay */}
      {isOpen ? <div className="bg-black/20 fixed w-full h-screen z-10 top-0 left-0"></div> : ""}
      {/* Side drawer menu */}
      <div
        className={
          isOpen
            ? "border-2 fixed top-0 right-0 h-screen bg-[#f4f4f4] z-10 duration-300 w-full sm:w-[100%] md:w-[70%] lg:w-[60%] xl:w-[40%]"
            : "border-2 fixed top-0 right-[-100%] w-0 h-screen bg-[#f4f4f4] z-10 duration-300"
        }
      >
        <div className="sidemenu-content">
          <div className="sidemenu-header flex justify-between">
            <ProfileCard avatarImage={AVATAR_URL} profileName={USERNAME} profileEmail={EMAIL} />
            <div className="flex-shrink-0">
              <AiOutlineClose onClick={() => setIsOpen(!isOpen)} size={30} className="cursor-pointer" />
            </div>
          </div>
          <div className="sidemenu-body">{props.children}</div>
        </div>
      </div>
      <div className="flex justify-end items-center">
        <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
      </div>
    </>
  );
};
