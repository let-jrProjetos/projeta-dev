import React from "react";
import { FaGithubAlt, FaLinkedin, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="flex flex-col px-5 py-10 md:px-48">
      <div className="flex flex-col justify-around items-center md:flex-row md:justify-between border-t-[1.2px] border-[#E0E0E0]">
        <div className="mt-2.5 border-2 rounded-lg text-[#757575]">
          Logo Projeta Dev
        </div>
        <div class="grid grid-cols-3 gap-5 my-5 text-2xl">
          <FaGithubAlt className="fill-[#bababa] cursor-pointer" />
          <FaLinkedin className="fill-[#bababa] cursor-pointer" />
          <FaYoutube className="fill-[#bababa] cursor-pointer" />
        </div>
      </div>
      <div className="text-center text-[10px] text-[#757575] justify-self-end">
        ©2023 Projeta Dev
      </div>
    </div>
  );
};
