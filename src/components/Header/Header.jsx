import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { HamburguerMenu } from "./hamburger/HamburguerMenu";
import { HorizontalMenuLogin } from "./horizontalMenu/Login";
import { HorizontalMenuUser } from "./horizontalMenu/User";
import { RightMenuLogin } from "./rightMenu/Login";
import { RightMenuUser } from "./rightMenu/User";
import { SideBarDesktop } from "./sideBar/SideBarDesktop";
import { SideBarMobile } from "./sideBar/SideBarMobile";

export const Header = () => {
  const [isLogedIn, setIsLogedIn] = useState(true);
  const [user, setUser] = useState({ name: "Alex", id: "AlexA" });
  const [isBurguerOpen, setIsBurguerOpen] = useState(false);
  const [isSideBarMobile, setIsSideBarMobile] = useState(false);
  const [isSideBarDesktop, setIsSideBarDesktop] = useState(false);

  return (
    <header className="w-full h-14 bg-[#F6F5F4] font-Dela text-black text-sm font-normal px-5 border-b-1">
      <div className="relative w-full h-full flex justify-between items-center">
        <button className="lg:hidden" onClick={() => setIsBurguerOpen(true)}>
          <FaBars />
        </button>
        {isLogedIn ? <HorizontalMenuUser /> : <HorizontalMenuLogin />}
        {isLogedIn ? (
          <RightMenuUser
            user={user}
            setIsSideBarMobile={setIsSideBarMobile}
            setIsSideBarDesktop={setIsSideBarDesktop}
          />
        ) : (
          <RightMenuLogin />
        )}
      </div>
      {isBurguerOpen ? (
        <HamburguerMenu setIsBurguerOpen={setIsBurguerOpen} />
      ) : (
        ""
      )}
      {isSideBarMobile ? (
        <SideBarMobile
          user={user}
          setIsLogedIn={setIsLogedIn}
          setSideBarMobile={setIsSideBarMobile}
        />
      ) : (
        ""
      )}
      {isSideBarDesktop ? (
        <SideBarDesktop
          user={user}
          setIsLogedIn={setIsLogedIn}
          setIsSideBarDesktop={setIsSideBarDesktop}
        />
      ) : (
        ""
      )}
    </header>
  );
};
