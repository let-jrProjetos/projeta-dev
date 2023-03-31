import { FaAngleDown } from "react-icons/fa";
import { ProfilePhoto } from "../profilePhoto/ProfilePhoto";

export const RightMenuUser = ({ user, navigate }) => {
  return (
    <div className="lg:pr-[10rem] flex justify-space-between items-center gap-2">
      <ProfilePhoto user={user} />
      <div className="flex justify-space-between items-center gap-1">
        <div className="font-Montserrat font-bold text-xs text-gray-header">
          <button>{user.name}</button>
        </div>
        <button>
          <FaAngleDown className="lg:hidden text-gray-header" />
        </button>
      </div>
    </div>
  );
};
