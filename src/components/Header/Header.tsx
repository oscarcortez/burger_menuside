import { FunctionComponent, PropsWithChildren } from "react";

export const Header: FunctionComponent<PropsWithChildren<{}>> = (props) => {
  return (
    <>
    
    {props.children}
    </>

  );
};
