import { useState } from "react";
import { FaArrowRight, FaBars, FaAngleDown } from "react-icons/fa";
import { HamburguerIcon } from "./burguer/Burguer";
import { ProfilePhoto } from "./profilePhoto/ProfilePhoto";

export const Header = () => {
  const [isLogedIn, setIsLogedIn] = useState(true);
  const [user, setUser] = useState({ name: "Alex" });
  return (
    <header className="w-full h-14 bg-[#F6F5F4] font-Dela text-black text-sm font-normal px-5 border-b-1">
      <div className="relative w-full h-full flex justify-between items-center">
        <button
          className="lg:hidden"
          onClick={() => console.log("Apertou o hamburguinho")}
        >
          <HamburguerIcon />
        </button>
        {!isLogedIn ? (
          <div className="flex pl-3 sm:pl-[10rem] grow shrink-1 justify-start sm:justify-center lg:justify-start items-center">
            <div>NomeLogo</div>
            <div className="hidden gap-4 text-gray-header font-Montserrat text-sm lg:flex lg:justify-between lg:pl-4 lg:p-x-2 items-center">
              <div className="w-1px border-l-2 h-4"></div>
              <div className="hover:text-black active:font-bold">
                Página Inicial
              </div>
              <div className="hover:text-black active:font-extrabold">
                Sobre nós
              </div>
              <div className="hover:text-black active:font-bold">
                Perguntas Frequentes
              </div>
            </div>
          </div>
        ) : (
          <div className="flex pl-3 sm:pl-[5rem] lg:pl-[10rem] grow shrink-1 justify-start sm:justify-center lg:justify-start items-center">
            <div>Nome Logo</div>
            <div className="hidden gap-6 text-gray-header font-Montserrat text-sm lg:flex lg:justify-between lg:pl-6 lg:p-x-2 items-center">
              <div className="w-1px border-l-2 h-4"></div>
              <div className="hover:text-black active:font-bold">
                Página Inicial
              </div>
              <div className="hover:text-black active:font-bold">Sobre nós</div>
              <div className="hover:text-black active:font-bold">
                Perguntas Frequentes
              </div>
            </div>
          </div>
        )}

        {isLogedIn ? (
          <div className="lg:pr-[10rem] flex justify-space-between items-center gap-2">
            <ProfilePhoto user={user} />
            <div className="flex justify-space-between items-center gap-1">
              <div className="font-Montserrat font-bold text-xs text-gray-header">
                <button>{user.name}</button>
              </div>
              <button>
                <FaAngleDown className="lg:hidden text-gray-header" />
              </button>
            </div>
          </div>
        ) : (
          <div className="lg:pr-[10rem] flex justify-space-between items-center gap-4 ">
            <div className="w-1px border-l-2 h-4 lg:hidden"></div>
            <div className="flex justify-space-between items-center gap-1">
              <div className="font-Montserrat font-bold text-black text-sm">
                Entrar
              </div>
              <FaArrowRight />
            </div>
            <div className="bg-[#2B788B] font-Montserrat font-bold text-white text-xs px-4 py-3 rounded-xl">
              Cadastrar
            </div>
          </div>
        )}
      </div>

      <div className="absolute top-0 left-0 w-full h-full z-100 bg-gray-123 ">
        <div className="w-full h-14 border-b-1 border-gray-header flex justify-between items-center px-5">
          <span className="font-Montserrat font-semibold text-base text-gray-header">X</span>
          <div> NomeLogo</div>
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center font-Montserrat font-semibold text-base text-gray-text gap-y-6 pb-14">
          <div className="hover:text-blue-green active:font-bold">
            Página Inicial
          </div>
          <div className="hover:text-blue-green active:font-extrabold">
            Sobre nós
          </div>
          <div className="hover:text-blue-green active:font-bold">
            Perguntas Frequentes
          </div>
        </div>
      </div>
    </header>
  );
};
