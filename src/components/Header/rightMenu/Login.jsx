import { Login } from "../../LoginModal/Login";
import { SingIn } from "../../SingInModal/SingIn";

export const RightMenuLogin = () => {
  return (
    <div className="lg:pr-[10rem] flex justify-space-between items-center gap-4 font-normal">
      <div className="w-1px border-l-2 h-4 lg:hidden"></div>
      <Login />
      <SingIn />
    </div>
  );
};
