import {
  FaFolderOpen,
  FaFolderPlus,
  FaPager,
  FaQuestionCircle,
  FaRegEnvelope,
  FaRegSun,
  FaSignOutAlt,
} from "react-icons/fa";
import { ProfilePhoto } from "../profilePhoto/ProfilePhoto";

export const SideBarMobile = ({ user }) => {
  return (
    <div className="absolute right-0 top-14 w-[4.5rem] h-3/4 bg-white rounded-2xl border-2 border-gray-700 ">
      <div className="p-4 flex flex-col text-[#C4C4C4] justify-center items-center gap-y-6 ">
        <div className="text-black">Logo</div>
        <FaPager />
        <FaFolderOpen />
        <FaFolderPlus />
        <FaRegEnvelope />
        <div className="w-9 border-b-2 border-[#C4C4C4]"></div>
        <FaQuestionCircle />
        <FaRegSun />
        <ProfilePhoto user={user} />
        <FaSignOutAlt />
      </div>
    </div>
  );
};
