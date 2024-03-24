import { AiOutlineMenu } from "react-icons/ai";
import { FunctionComponent, PropsWithChildren, useState } from "react";
import { ProfileCard } from "../ProfileCard";
import { IoIosCloseCircleOutline } from "react-icons/io";

const AVATAR_URL = "https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745";
const USERNAME = "JOHN DOE";
const EMAIL = "john@doe";

export const SideMenu: FunctionComponent<PropsWithChildren<{}>> = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="md:w-[50%] p-4 relative border">
      {isOpen && <div className="fixed inset-0 bg-gray-500 bg-opacity-50 z-10"></div>}
      <div className="flex justify-end items-center">
        <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
      </div>
      <div
        className={`absolute h-screen top-0 right-0 bottom-0 md:left-auto bg-opacity-25 transition-all duration-300 z-10 ${isOpen ? "w-2/5" : "w-0"}`}
      >
        {isOpen && (
          <div className="sidemenu-content bg-[#f4f4f4]">
            <div className="flex justify-between p-4">
              <ProfileCard avatarImage={AVATAR_URL} profileName={USERNAME} profileEmail={EMAIL} />
              <div className="flex-shrink-0 py-6 pr-4">
                <IoIosCloseCircleOutline
                  onClick={() => setIsOpen(!isOpen)}
                  size={25}
                  className="cursor-pointer"
                />
              </div>
            </div>
            <div className="sidemenu-body pr-3 pl-3">{props.children}</div>
          </div>
        )}
      </div>
    </div>
  );
};
