import { Link } from "react-router-dom";

export const HorizontalMenuUser = () => {
  return (
    <div className="flex pl-3 sm:pl-[5rem] lg:pl-[10rem] grow shrink-1 justify-start sm:justify-center lg:justify-start items-center">
      <div>Nome Logo</div>
      <div className="hidden gap-6 text-gray-header font-Montserrat text-sm lg:flex lg:justify-between lg:pl-6 lg:p-x-2 items-center">
        <div className="w-1px border-l-2 h-4"></div>
        <Link to="/">
          <button className="hover:text-black active:font-bold">
            Página Inicial
          </button>
        </Link>
        <Link to="/sobreNos">
          <button className="hover:text-black active:font-bold">
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
