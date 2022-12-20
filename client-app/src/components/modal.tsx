import { Children } from "react";
import { isPropertySignature } from "typescript";

export type ModalType = {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  children: any;
};

export const Modal = ({ opened, setOpened, children }: ModalType) => {
  if (opened) {
    return (
      <div className="absolute z-50 w-screen h-full bg-opacity-80 bg-white flex flex-col justify-center items-center overscroll-auto">
        <div
          onClick={() => setOpened(false)}
          className="self-end h-10 mr-10 mt-20 cursor-pointer hover:text-lg focus:text-lg hover:underline"
        >
          Close Window
        </div>
        <div className="sm:w-11/12 w-96 h-auto bg-gray-100 flex justify-center">
          {children}
        </div>
      </div>
    );
  } else return <div></div>;
};
export default Modal;
