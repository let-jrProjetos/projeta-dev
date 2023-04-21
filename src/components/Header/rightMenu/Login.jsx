import { FaArrowRight } from "react-icons/fa";
import { SingIn } from "../../modal/SingIn";

export const RightMenuLogin = () => {
  return (
    <div className="lg:pr-[10rem] flex justify-space-between items-center gap-4 ">
      <div className="w-1px border-l-2 h-4 lg:hidden"></div>
      <div className="flex justify-space-between items-center gap-1">
        <div className="font-Montserrat font-bold text-black text-sm">
          Entrar
        </div>
        <FaArrowRight />
      </div>
      <SingIn />
    </div>
  );
};
