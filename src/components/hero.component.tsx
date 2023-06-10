import React from "react";
import homeImg from "../assets/imghero.jpg";
import imgSpoon from "../assets/food-svgrepo-com.svg";

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center shadow-xl flex lg:w-[900px] lg:relative"
      style={{ backgroundImage: `url(${homeImg})` }}
    >
      <div className="mt-[10rem] p-14 bg-accent w-64 h-[14rem] float-left text-white rounded-tr-lg shadow-lg lg:w-80 lg:h-[20rem] lg:absolute lg:bottom-0">
        <h1 className="text-3xl mb-3 font-custom font-bold lg:text-5xl">
          Recipe <br /> Space
        </h1>
        <img
          src={imgSpoon}
          alt="spoon and fork"
          className="w-[70px] animate-bounce animate-spin-slow transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Hero;
