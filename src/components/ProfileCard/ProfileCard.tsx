import { capitalize } from "../../utils";
import { FunctionComponent, PropsWithChildren } from "react";

export const ProfileCard: FunctionComponent<
  PropsWithChildren<{
    avatarImage: string;
    profileName: string;
    profileEmail: string;
  }>
> = (props) => {
  return (
    <>
      <div className="flex justify-between pl-1">
        <div className="flex p-4">
          <img
            className="inline-block h-11 w-11 rounded-full ring-2 ring-white"
            src={props.avatarImage}
            alt="User Avatar"
          />
          <div className="flex flex-col justify-start ml-2 p-1">
            <p className="text-gray-900 leading-none font-bold text-left">{capitalize(props.profileName)}</p>
            <p className="text-gray-400 text-sm text-left py-1">{capitalize(props.profileEmail)}</p>
          </div>
        </div>
      </div>
    </>
  );
};
