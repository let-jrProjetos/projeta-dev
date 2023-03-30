import { useState } from "react";
import { FaArrowRight, FaBars, FaAngleDown } from "react-icons/fa";

export const Header = () => {
  const [isLogedIn, setIsLogedIn] = useState(false);
  return (
    <header className="relative bg-[#F6F5F4] font-Dela text-black text-sm font-normal h-14 px-2 flex justify-between items-center">
      <div className="lg:hidden">
        <FaBars />
      </div>
      {!isLogedIn ? (
        <div className="flex pl-3 sm:pl-[10rem] grow shrink-1 justify-start sm:justify-center lg:justify-start items-center">
          <div>Nome Logo</div>
          <div className="hidden text-grey-header font-Montserrat text-sm lg:flex lg:justify-start lg:p-2 g-4">
            <div className="w-1px border-l-2 h-4"></div>
            <div>Home</div>
            <div>About Us</div>
            <div>Faq</div>
          </div>
        </div>
      ) : (
        <div className="flex pl-3 sm:pl-[5rem] grow shrink-1 justify-start sm:justify-center">
          <div>Nome Logo</div>
        </div>
      )}

      {isLogedIn ? (
        <div className="flex justify-space-between items-center gap-2">
          <img
            className="bg-black w-10 h-10 rounded-full text-xs"
            src="../../assets/img/larissaTerada.jpg"
            alt="Profile Photo"
          />
          <div className="flex justify-space-between items-center gap-1">
            <div className="font-Montserrat font-bold text-xs">User</div>
            <FaAngleDown />
          </div>
        </div>
      ) : (
        <div className="flex justify-space-between items-center gap-4 ">
          <div className="w-1px border-l-2 h-4"></div>
          <div className="flex justify-space-between items-center gap-1">
            <div className="font-Montserrat font-bold text-sm">Login</div>
            <FaArrowRight />
          </div>
          <div className="bg-[#2B788B] font-Montserrat font-bold text-xs px-4 py-3 rounded-xl">
            Sign Up
          </div>
        </div>
      )}
    </header>
  );
};
