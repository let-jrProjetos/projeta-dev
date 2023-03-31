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
        <div className="h-full p-4 flex flex-col text-[#C4C4C4] text-lg justify-arround items-center gap-y-5">
          <div className="text-black text-sm py-3">Logo</div>
          <button className="hover:text-[#C3DCE3] active:text-blue-green">
            <FaPager onClick={() => goToDashboard(navigate)} />
          </button>
          <button className="hover:text-[#C3DCE3] active:text-blue-green">
            <FaFolderOpen onClick={() => goToProjects(navigate)} />
          </button>
          <button className="hover:text-[#C3DCE3] active:text-blue-green">
            <FaFolderPlus onClick={() => goToProjectForm(navigate)} />
          </button>
          <button className="hover:text-[#C3DCE3] active:text-blue-green">
            <FaRegEnvelope onClick={() => goToMessages(navigate)} />
          </button>
          <div className="w-9 border-b-2 border-[#C4C4C4] py-1"></div>
          <button className="hover:text-[#C3DCE3] active:text-blue-green">
            <FaQuestionCircle onClick={() => goToHelp(navigate)} />
          </button>
          <button className="hover:text-[#C3DCE3] active:text-blue-green">
            <FaRegSun onClick={() => goToSettings(navigate)} />
          </button>
          <ProfilePhoto user={user} />
          <button className="hover:text-[#C3DCE3] active:text-blue-green">
            <FaSignOutAlt onClick={() => setIsLogedIn(false)} />
          </button>
        </div>
      </div>
    </div>
  );
};
