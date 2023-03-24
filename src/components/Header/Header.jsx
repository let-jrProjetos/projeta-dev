import { useState } from "react";
// import { BsArrowRightShort } from "react-icons/fa";

const Header = () => {
  const [isLogedIn, setIsLogedIn] = useState(true);
  return (
    <header className="z-1 relative bg-[#F6F5F4] font-Dela text-black text-sm font-normal h-14 pl-2 flex justify-start items-center gap-4">
      <div className="text-xs">Burguer</div>
      <div>Nome Logo</div>
      {isLogedIn ? (
        <>
          <div className="z-1 absolute right-2 flex justify-end items-center gap-4">
            <img
              className="bg-black w-10 h-10 rounded-full text-xs"
              src="../../assets/img/larissaTerada.jpg"
              alt="Profile Photo"
            />
            <div className="font-Montserrat font-bold text-xs">User</div>
          </div>
        </>
      ) : (
        <div className="z-1 absolute right-2 flex justify-end items-center gap-4">
          <div className="w-1px border-l-2 h-4"></div>
          <div className="font-Montserrat font-bold text-sm">Login</div>
          <div className="bg-[#2B788B] font-Montserrat font-bold text-xs px-4 py-3 rounded-xl">
            Sign Up
          </div>
        </div>
      )}
      <div></div>
    </header>
  );
};
export default Header;
