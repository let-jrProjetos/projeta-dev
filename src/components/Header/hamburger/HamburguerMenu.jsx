import { Link } from "react-router-dom";

export const HamburguerMenu = ({ setIsBurguerOpen }) => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full z-100 bg-gray-123 lg:hidden ">
        <div className="w-full h-14 border-b-1 border-gray-header flex justify-between items-center px-5">
          <button
            className="font-Montserrat font-semibold text-base text-gray-header"
            onClick={() => setIsBurguerOpen(false)}
          >
            X
          </button>
          <div> NomeLogo</div>
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center font-Montserrat font-semibold text-base text-gray-text gap-y-6 pb-14">
          <Link to="/">
            <button
              className="hover:text-blue-green active:font-extrabold"
              onClick={() => setIsBurguerOpen(false)}
            >
              Página Inicial
            </button>
          </Link>
          <Link to="/sobreNos">
            <button
              className="hover:text-blue-green active:font-extrabold"
              onClick={() => setIsBurguerOpen(false)}
            >
              Sobre nós
            </button>
          </Link>
          <Link to="/perguntasFrequentes">
            <button
              className="hover:text-blue-green active:font-extrabold"
              onClick={() => setIsBurguerOpen(false)}
            >
              Perguntas Frequentes
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
