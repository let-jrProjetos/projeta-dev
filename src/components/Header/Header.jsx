import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { HamburguerMenu } from "./hamburger/HamburguerMenu";
import { HorizontalMenuLogin } from "./horizontalMenu/Login";
import { HorizontalMenuUser } from "./horizontalMenu/User";
import { RightMenuLogin } from "./rightMenu/Login";
import { RightMenuUser } from "./rightMenu/User";
import { SideBarDesktop } from "./sideBar/SideBarDesktop";
import { SideBarMobile } from "./sideBar/SideBarMobile";

export const Header = () => {
  const navigate = useNavigate();

  const [isLogedIn, setIsLogedIn] = useState(false);
  const [user, setUser] = useState("Alex");
  const [isBurguerOpen, setIsBurguerOpen] = useState(false);

  return (
    <header className="w-full h-14 bg-[#F6F5F4] font-Dela text-black text-sm font-normal px-5 border-b-1">
      <div className="relative w-full h-full flex justify-between items-center">
        <button className="lg:hidden" onClick={() => setIsBurguerOpen(true)}>
          <FaBars />
        </button>
        {isLogedIn ? (
          <HorizontalMenuUser navigate={navigate} />
        ) : (
          <HorizontalMenuLogin navigate={navigate} />
        )}
        {isLogedIn ? (
          <RightMenuUser navigate={navigate} user={user} />
        ) : (
          <RightMenuLogin navigate={navigate} />
        )}
      </div>
      {isBurguerOpen ? (
        <HamburguerMenu setIsBurguerOpen={setIsBurguerOpen} />
      ) : (
        ""
      )}
      <SideBarMobile/>
      <SideBarDesktop/>
    </header>
  );
};
