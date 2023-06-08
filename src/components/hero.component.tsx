import React from "react";
import homeImg from "../assets/imghero.jpg";
import imgSpoon from "../assets/food-svgrepo-com.svg";

const Hero = () => {
  return (
    <div
      className="bg-[url-to-image] bg-cover bg-center flex"
      style={{ backgroundImage: `url(${homeImg})` }}
    >
      <div className="mt-[10rem] p-14 bg-accent w-64 h-[14rem] float-left text-white">
        <h1 className="text-3xl font-custom font-bold">
          Recipe <br /> Space
        </h1>
        <img src={imgSpoon} alt="spoon and fork" className="w-[70px]" />
      </div>
    </div>
  );
};

export default Hero;
