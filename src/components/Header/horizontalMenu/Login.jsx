import { Link } from "react-router-dom";

export const HorizontalMenuLogin = () => {
  return (
    <div className="flex pl-3 sm:pl-[10rem] grow shrink-1 justify-start sm:justify-center lg:justify-start items-center">
      <div>NomeLogo</div>
      <div className="hidden gap-4 text-gray-header font-Montserrat text-sm lg:flex lg:justify-between lg:pl-4 lg:p-x-2 items-center">
        <div className="w-1px border-l-2 h-4"></div>
        <Link to="/">
          <button className="hover:text-black active:font-bold">
            Página Inicial
          </button>
        </Link>
        <Link to="/sobreNos">
          <button className="hover:text-black active:font-extrabold">
            Sobre nós
          </button>
        </Link>
        <Link to="/perguntasFrequentes">
          <button className="hover:text-black active:font-bold">
            Perguntas Frequentes
          </button>
        </Link>
      </div>
    </div>
  );
};
