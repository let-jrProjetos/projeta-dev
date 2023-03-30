import { useState } from "react";
import { FaArrowRight, FaBars, FaAngleDown } from "react-icons/fa";
import { ProfilePhoto } from "./profilePhoto/ProfilePhoto";

export const Header = () => {
  const [isLogedIn, setIsLogedIn] = useState(true);
  const [user, setUser] = useState({ name: "Alex" });
  return (
    <header className="relative bg-[#F6F5F4] font-Dela text-black text-sm font-normal h-14 px-5 flex justify-between items-center border-b-1">
      <button className="lg:hidden">
        <FaBars />
      </button>
      {!isLogedIn ? (
        <div className="flex pl-3 sm:pl-[10rem] grow shrink-1 justify-start sm:justify-center lg:justify-start items-center">
          <div>Nome Logo</div>
          <div className="hidden w-60 text-gray-header font-Montserrat text-sm lg:flex lg:justify-between lg:pl-6 lg:p-x-2 items-center">
            <div className="w-1px border-l-2 h-4"></div>
            <div className="hover:text-black active:font-bold">Home</div>
            <div className="hover:text-black active:font-bold">About Us</div>
            <div className="hover:text-black active:font-bold">Faq</div>
          </div>
        </div>
      ) : (
        <div className="flex pl-3 sm:pl-[5rem] lg:pl-[10rem] grow shrink-1 justify-start sm:justify-center lg:justify-start items-center">
          <div>Nome Logo</div>
          <div className="hidden w-60 text-gray-header font-Montserrat text-sm lg:flex lg:justify-between lg:pl-6 lg:p-x-2 items-center">
            <div className="w-1px border-l-2 h-4"></div>
            <div>Home</div>
            <div>About Us</div>
            <div>Faq</div>
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
