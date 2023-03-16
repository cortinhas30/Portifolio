import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">Cortinhas</h1>
      </div>

      <ul className="flex">
        <li>Home</li>
      </ul>
    </div>
  );
};

export default NavBar;
