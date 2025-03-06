import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { RxAvatar } from "react-icons/rx";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-router-dom";

const Header = () => {
  const [avatarOpen, setAvatarOpen] = useState(false);
  return (
    <header className="bg-gray-600 w-full">
      <div className="flex justify-between items-center p-4 text-white">
        <Link to="/">
          <img src={logo} className="w-20 object-contain" />
        </Link>
        <h1 className="md:text-4xl sm:text-3xl max-sm:text-2xl">
          Simple Blog Platform
        </h1>
        <OutsideClickHandler onOutsideClick={() => setAvatarOpen(false)}>
          <div
            className="w-10 h-10 mx-6 hover:cursor-pointer relative"
            onClick={() => {
              setAvatarOpen(!avatarOpen);
            }}
          >
            <RxAvatar className="size-full" />
            {avatarOpen && (
              <div className="flex flex-col absolute right-0 bg-white text-gray-500 hover:bg-gray-500 hover:text-white w-32 rounded-sm drop-shadow-md p-2 items-start z-50">
                <button
                  //   onClick={handleLogout}
                  className="w-full text-start text-inherit px-2 hover:cursor-pointer"
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        </OutsideClickHandler>
      </div>
    </header>
  );
};

export default Header;
