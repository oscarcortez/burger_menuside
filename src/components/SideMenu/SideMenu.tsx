// import { AiOutlineMenu } from "react-icons/ai";
// import { FunctionComponent, PropsWithChildren, useState } from "react";
// import { ProfileCard } from "../ProfileCard";
// import { IoIosCloseCircleOutline } from "react-icons/io";

// const AVATAR_URL = "https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745";
// const USERNAME = "JOHN DOE";
// const EMAIL = "john@doe";

// export const SideMenu: FunctionComponent<PropsWithChildren<{}>> = (props) => {
//   const [isOpen, setIsOpen] = useState<boolean>(false);

//   return (
//     <>
//       {isOpen && <div className="fixed inset-0 bg-gray-500 bg-opacity-50 z-10"></div>}
//       <div className="flex justify-end">
//         <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
//           <AiOutlineMenu size={30} />
//         </div>
//       </div>
//       <div
//         // className={`absolute h-screen top-0 bottom-0 right-0 bg-opacity-25 transition-all duration-300 z-10 ${isOpen ? "sm:w-[100%] md:w-[100%] lg:w-[40%] xl:w-[40%]" : "w-0"}`}
//         className={`absolute h-screen top-0 bottom-0 right-0 bg-opacity-25 transition-all duration-300 z-10 ${isOpen ? "sm:w-full md:w-2/5 lg:w-2/5 xl:w-2/5" : "w-0"}`}
//       >
//         {isOpen && (
//           <div className="sidemenu-content bg-[#f4f4f4]">
//             <div className="flex justify-between">
//               {/* <ProfileCard avatarImage={AVATAR_URL} profileName={USERNAME} profileEmail={EMAIL} /> */}
//               <div className="flex-shrink-0 py-6 pr-4">
//                 <IoIosCloseCircleOutline
//                   onClick={() => setIsOpen(!isOpen)}
//                   size={25}
//                   className="cursor-pointer"
//                 />
//               </div>
//             </div>
//             <div className="sidemenu-body pr-3 pl-3">{props.children}</div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };
