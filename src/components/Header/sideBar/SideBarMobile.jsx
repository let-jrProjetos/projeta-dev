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

export const SideBarMobile = ({
  user,
  navigate,
  setIsLogedIn,
  setSideBarMobile,
}) => {
  return (
    <div
      className="absolute top-0 left-0 w-full h-screen bg-transparent lg:hidden"
      onClick={() => setSideBarMobile(false)}
    >
      <div className="z-100 absolute right-0 top-14 w-[4.5rem] h-4/6 bg-white rounded-2xl border-2 ">
        <div className="h-full p-4 flex flex-col text-[#C4C4C4] text-2xl justify-arround items-center gap-y-7 ">
          <div className="text-black text-sm py-4">Logo</div>
          <FaPager onClick={() => goToDashboard(navigate)} />
          <FaFolderOpen onClick={() => goToProjects(navigate)} />
          <FaFolderPlus onClick={() => goToProjectForm(navigate)} />
          <FaRegEnvelope onClick={() => goToMessages(navigate)} />
          <div className="w-9 border-b-2 border-[#C4C4C4] py-1"></div>
          <FaQuestionCircle onClick={() => goToHelp(navigate)} />
          <FaRegSun onClick={() => goToSettings(navigate)} />
          <ProfilePhoto user={user} />
          <FaSignOutAlt onClick={() => setIsLogedIn(false)} />
        </div>
      </div>
    </div>
  );
};
