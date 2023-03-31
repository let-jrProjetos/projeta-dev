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

export const SideBarDesktop = ({
  user,
  navigate,
  setIsLogedIn,
  setIsSideBarDesktop,
}) => {
  return (
    <div
      className="hidden absolute top-0 left-0 w-full h-screen bg-transparent lg:flex"
      onClick={() => setIsSideBarDesktop(false)}
    >
      <div className="z-100 absolute right-36 top-14 w-48 h-4/6 bg-white rounded-2xl border-2 ">
        <div className="h-full p-4 flex flex-col text-[#C4C4C4] text-xl justify-arround items-end gap-y-5 ">
          <div className="text-black text-sm py-1">Logo</div>
          <button
            className="flex items-center"
            onClick={() => goToDashboard(navigate)}
          >
            <span className="font-Montserrat text-sm text-gray-header px-2">
              Dashboard
            </span>
            <FaPager />
          </button>
          <button
            className="flex items-center"
            onClick={() => goToProjects(navigate)}
          >
            <span className="font-Montserrat text-sm text-gray-header px-2">
              Projetos
            </span>
            <FaFolderOpen />
          </button>
          <button
            className="flex items-center"
            onClick={() => goToProjectForm(navigate)}
          >
            <span className="font-Montserrat text-sm text-gray-header px-2">
              Novo Projeto
            </span>
            <FaFolderPlus />
          </button>
          <button
            className="flex items-center"
            onClick={() => goToMessages(navigate)}
          >
            <span className="font-Montserrat text-sm text-gray-header px-2">
              Mensagens
            </span>
            <FaRegEnvelope />
          </button>

          <div className="w-36 border-b-2 border-[#C4C4C4] py-1"></div>
          <button
            className="flex items-center"
            onClick={() => goToHelp(navigate)}
          >
            <span className="font-Montserrat text-sm text-gray-header px-2">
              Ajuda
            </span>
            <FaQuestionCircle />
          </button>
          <button
            className="flex items-center"
            onClick={() => goToSettings(navigate)}
          >
            <span className="font-Montserrat text-sm text-gray-header px-2">
              Configurações
            </span>
            <FaRegSun />
          </button>

          <ProfilePhoto user={user} />
          <button
            className="flex items-center"
            onClick={() => setIsLogedIn(false)}
          >
            <span className="font-Montserrat text-sm text-gray-header px-2">
              Sair
            </span>
            <FaSignOutAlt />
          </button>
        </div>
      </div>
    </div>
  );
};
