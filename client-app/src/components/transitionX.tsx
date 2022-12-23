import { ReactNode } from "react";

export type TransitionType = {
  children: ReactNode;
  execute: boolean;
  post: number;
  pre: number;
};

export const TransitionX = ({
  execute,
  children,
  post,
  pre,
}: TransitionType) => {
  const postTransition =
    post >= 0
      ? ("opacity-100 sm:translate-x-" + post).toString()
      : ("opacity-100 sm:-translate-x-" + Math.abs(post)).toString();
  const preTransition =
    pre >= 0
      ? ("opacity-0 sm:translate-x-" + pre).toString()
      : ("opacity-0 sm:-translate-x-" + Math.abs(post)).toString();

  return (
    <div
      className={`z-50 flex trans justify-center items-center tra transition-all duration-1000 ease-in 
      transform ${execute ? postTransition : preTransition}`}
    >
      {children}
    </div>
  );
};
export default TransitionX;
