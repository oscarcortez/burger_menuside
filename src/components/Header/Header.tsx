import { FunctionComponent, PropsWithChildren } from "react";
{
  /* <div className="border-2 p-4 sticky top-0 flex min-h-6 w-full max-w-[100vw] transform-gpu flex-wrap justify-end items-center gap-x-2 px-2 sm:gap-x-4 sm:px-4 print:relative"></div> */
}
export const Header: FunctionComponent<PropsWithChildren<{}>> = (props) => {
  return (
    <div className="border-2 max-w-[100%] sticky top-0 mx-auto flex justify-end items-center p-4 shadow-sm gap-x-2 sm:gap-x-4 sm:px-4 print:relative">
      {props.children}
    </div>
  );
};
