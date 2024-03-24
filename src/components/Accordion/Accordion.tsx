import { useState } from "react";
import { FunctionComponent, ReactNode } from "react";
import classNames from "classnames";

import { AiOutlineRight } from "react-icons/ai";

interface AccordionProps {
  title: string;
  children: ReactNode;
}

export const Accordion: FunctionComponent<AccordionProps> = ({
  title,
  children,
}: AccordionProps): ReactNode => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-4">
      <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between w-full">
        <span className="font-semibold"> {title} </span>
        <span>
          <AiOutlineRight
            className={classNames("bg-gray-300 rounded-full text-2xl p-1 transition-all duration-300", {
              "transform rotate-90": isOpen,
            })}
          />
        </span>
      </button>
      <div
        className={classNames("grid overflow-hidden transition-all duration-300 ease-in-out", {
          "grid-rows-[1fr] opacity-100": isOpen,
          "grid-rows-[0fr] opacity-0": !isOpen,
        })}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
};
