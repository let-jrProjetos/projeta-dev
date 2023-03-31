export const HorizontalMenuLogin = ({ navigate }) => {
  return (
    <div className="flex pl-3 sm:pl-[10rem] grow shrink-1 justify-start sm:justify-center lg:justify-start items-center">
      <div>NomeLogo</div>
      <div className="hidden gap-4 text-gray-header font-Montserrat text-sm lg:flex lg:justify-between lg:pl-4 lg:p-x-2 items-center">
        <div className="w-1px border-l-2 h-4"></div>
        <div
          className="hover:text-black active:font-bold"
          onClick={() => goToHome(navigate)}
        >
          Página Inicial
        </div>
        <div
          className="hover:text-black active:font-extrabold"
          onClick={() => goToAbotUs(navigate)}
        >
          Sobre nós
        </div>
        <div
          className="hover:text-black active:font-bold"
          onClick={() => goToFaq(navigate)}
        >
          Perguntas Frequentes
        </div>
      </div>
    </div>
  );
};
