import { useNavigate } from "react-router-dom";

export const HamburguerMenu = ({ setIsBurguerOpen }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full z-100 bg-gray-123 lg:hidden ">
        <div className="w-full h-14 border-b-1 border-gray-header flex justify-between items-center px-5">
          <span
            className="font-Montserrat font-semibold text-base text-gray-header"
            onClick={() => setIsBurguerOpen(false)}
          >
            X
          </span>
          <div> NomeLogo</div>
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center font-Montserrat font-semibold text-base text-gray-text gap-y-6 pb-14">
          <div
            className="hover:text-blue-green active:font-extrabold"
            onClick={() => goToHome(navigate)}
          >
            Página Inicial
          </div>
          <div
            className="hover:text-blue-green active:font-extrabold"
            onClick={() => goToAboutUs(navigate)}
          >
            Sobre nós
          </div>
          <div
            className="hover:text-blue-green active:font-extrabold"
            onClick={() => goToFaq(navigate)}
          >
            Perguntas Frequentes
          </div>
        </div>
      </div>
    </>
  );
};
