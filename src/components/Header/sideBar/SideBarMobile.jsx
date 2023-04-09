import {
  FaFolderOpen,
  FaFolderPlus,
  FaPager,
  FaQuestionCircle,
  FaRegEnvelope,
  FaRegSun,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
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
        <div className="h-full p-4 pb-6 flex flex-col text-[#C4C4C4] text-lg justify-between items-center">
          <div className="text-black text-sm py-2">Logo</div>
          <Link to="/projetos">
            <button className="hover:text-[#C3DCE3] active:text-blue-green">
              <FaPager />
              {/* onClick={() => goToDashboard(navigate)}  */}
            </button>
          </Link>
          <Link to="/meusProjetos/:id">
            <button className="hover:text-[#C3DCE3] active:text-blue-green">
              <FaFolderOpen />
              {/* onClick={() => goToProjects(navigate)}  */}
            </button>
          </Link>
          <Link to="/novoProjeto/:id">
            <button className="hover:text-[#C3DCE3] active:text-blue-green">
              <FaFolderPlus />
              {/*  onClick={() => goToProjectForm(navigate)}  */}
            </button>
          </Link>
          <button className="hover:text-[#C3DCE3] active:text-blue-green">
            <FaRegEnvelope />
            {/* onClick={() => goToMessages(navigate)}  */}
          </button>
          <div className="w-9 border-b-2 border-[#C4C4C4] py-1"></div>
          <Link to="/perguntasFrequentes">
            <button className="hover:text-[#C3DCE3] active:text-blue-green">
              <FaQuestionCircle />
              {/* onClick={() => goToHelp(navigate)}  */}
            </button>
          </Link>
          <Link to="/editarMeuPerfil/:id">
            <button className="hover:text-[#C3DCE3] active:text-blue-green">
              <FaRegSun />
              {/*  onClick={() => goToSettings(navigate)}  */}
            </button>
          </Link>
          <Link to="/meuPerfil/:id">
            <ProfilePhoto user={user} />
          </Link>
          <Link to="/">
            <button
              className="hover:text-[#C3DCE3] active:text-blue-green"
              onClick={() => setIsLogedIn(false)}
            >
              <FaSignOutAlt />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
