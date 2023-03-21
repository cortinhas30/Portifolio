import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Eu sou um dev Front-End
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            textin da hora q vou pensar depois
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to to-blue-500 cursor-pointer">
              Portifolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineArrowRightAlt size={30} className="ml-1"/>
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="object-cover h-96 w-96 rounded-2xl mx-auto md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
