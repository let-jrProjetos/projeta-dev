export const ProfilePhoto = ({ user }) => {
  return (
    <div className="relative font-Montserrat  text-xs grid-cols-1 grid-rows-1 ">
      <p className="z-[100] absolute right-[0.8rem] bottom-[0.6rem] text-sm font-bold text-[#2B788B]">
        {user.name[0]}
      </p>
      <div className="bg-[#C3DCE3] w-9 h-9 rounded-full"></div>
    </div>
  );
};
