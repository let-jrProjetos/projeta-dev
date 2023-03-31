import { useState } from "react";
import { FaArrowRight, FaBars, FaAngleDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { HamburguerMenu } from "./burguer/HamburguerMenu";
import { ProfilePhoto } from "./profilePhoto/ProfilePhoto";

export const Header = () => {
  const navigate = useNavigate();

  const [isLogedIn, setIsLogedIn] = useState(true);
  const [user, setUser] = useState({ name: "Alex" });
  const [isBurguerOpen, setIsBurguerOpen] = useState(false);
  return (
    <header className="w-full h-14 bg-[#F6F5F4] font-Dela text-black text-sm font-normal px-5 border-b-1">
      <div className="relative w-full h-full flex justify-between items-center">
        <button className="lg:hidden" onClick={() => setIsBurguerOpen(true)}>
          <FaBars />
        </button>
        {!isLogedIn ? (
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
        ) : (
          <div className="flex pl-3 sm:pl-[5rem] lg:pl-[10rem] grow shrink-1 justify-start sm:justify-center lg:justify-start items-center">
            <div>Nome Logo</div>
            <div className="hidden gap-6 text-gray-header font-Montserrat text-sm lg:flex lg:justify-between lg:pl-6 lg:p-x-2 items-center">
              <div className="w-1px border-l-2 h-4"></div>
              <div
                className="hover:text-black active:font-bold"
                onClick={() => goToHome(navigate)}
              >
                Página Inicial
              </div>
              <div
                className="hover:text-black active:font-bold"
                onClick={() => goToAboutUs(navigate)}
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
      {isBurguerOpen ? (
        <HamburguerMenu setIsBurguerOpen={setIsBurguerOpen} />
      ) : (
        ""
      )}
    </header>
  );
};
