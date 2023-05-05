import { FaArrowRight } from "react-icons/fa";
import { SingIn } from "../../SingInModal/SingIn";

export const RightMenuLogin = () => {
  return (
    <div className="lg:pr-[10rem] flex justify-space-between items-center gap-4 font-normal">
      <div className="w-1px border-l-2 h-4 lg:hidden"></div>
      <div className="flex justify-space-between items-center gap-1">
        <div className="font-Montserrat font-bold text-black text-sm">
          Entrar
        </div>
        <FaArrowRight />
      </div>
      <SingIn className="font-normal" />
    </div>
  );
};
