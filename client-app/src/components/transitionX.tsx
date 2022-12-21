import { ReactNode } from "react";

export type TransitionType = {
  children: ReactNode;
  execute: boolean;
};

export const TransitionX = ({ execute, children }: TransitionType) => {
  return (
    <div
      className={`z-50 w-full h-full flex justify-center items-center tra transition-all duration-1000 ease-in 
      transform ${
        execute
          ? `opacity-100 sm:translate-x-72`
          : "opacity-0 sm:translate-x-96"
      }`}
    >
      {children}
    </div>
  );
};
export default TransitionX;
