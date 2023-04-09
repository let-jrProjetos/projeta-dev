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

export const SideBarDesktop = ({ user, setIsLogedIn, setIsSideBarDesktop }) => {
  return (
    <div
      className="hidden absolute top-0 left-0 w-full h-screen bg-transparent lg:flex"
      onClick={() => setIsSideBarDesktop(false)}
    >
      <div className="z-100 absolute right-40 top-14 w-48 h-4/6 bg-white rounded-2xl border-2 ">
        <div className="h-full p-4 pb-6 flex flex-col text-[#C4C4C4] text-xl justify-between items-end">
          <div className="text-black text-sm py-1">Logo</div>
          <Link to="/projetos">
            <button className="flex items-center hover:text-[#C3DCE3] active:text-blue-green">
              <span className="font-Montserrat text-sm text-gray-header px-2">
                Dashboard
              </span>
              <FaPager />
            </button>
          </Link>
          <Link to={`/meusProjetos/${user.id}`}>
            <button className="flex items-center hover:text-[#C3DCE3] active:text-blue-green">
              <span className="font-Montserrat text-sm text-gray-header px-2">
                Meus Projetos
              </span>
              <FaFolderOpen />
            </button>
          </Link>
          <Link to={`/novoProjeto/${user.id}`}>
            <button className="flex items-center hover:text-[#C3DCE3] active:text-blue-green">
              <span className="font-Montserrat text-sm text-gray-header px-2">
                Novo Projeto
              </span>
              <FaFolderPlus />
            </button>
          </Link>
          <button className="flex items-center hover:text-[#C3DCE3] active:text-blue-green">
            <span className="font-Montserrat text-sm text-gray-header px-2">
              Mensagens
            </span>
            <FaRegEnvelope />
          </button>
          <div className="w-36 border-b-2 border-[#C4C4C4] py-1 mr-1"></div>
          <Link to="/perguntasFrequentes">
            <button className="flex items-center hover:text-[#C3DCE3] active:text-blue-green">
              <span className="font-Montserrat text-sm text-gray-header px-2">
                Ajuda
              </span>
              <FaQuestionCircle />
            </button>
          </Link>
          <Link to={`/editarPerfil/${user.id}`}>
            <button className="flex items-center hover:text-[#C3DCE3] active:text-blue-green">
              <span className="font-Montserrat text-sm text-gray-header px-2">
                Configurações
              </span>
              <FaRegSun />
            </button>
          </Link>
          <Link to={`/meuPerfil/${user.id}`}>
            <ProfilePhoto user={user} />
          </Link>
          <Link to="/">
            <button
              className="flex items-center hover:text-[#C3DCE3] active:text-blue-green"
              onClick={() => setIsLogedIn(false)}
            >
              <span className="font-Montserrat text-sm text-gray-header px-2">
                Sair
              </span>
              <FaSignOutAlt />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
