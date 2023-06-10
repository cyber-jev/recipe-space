import React from "react";

type RecipeProps = {
  id: string;
  title: string;
  image: string;
  instructions: string;
  area: string;
  category: string;
  youtube: string;
  ingredient: string[];
  measure: string[];
};

const Recipe: React.FC<RecipeProps> = ({
  id,
  title,
  image,
  instructions,
  area,
  category,
  youtube,
  ingredient,
  measure,
}) => {
  return (
    <div className="mt-7 p-4 gap-3 rounded shadow-lg  md:grid md:grid-cols-2  ">
      <div>
        <h2 className="mt-2 font-bold text-xl lg:text-2xl">
          <span>TITLE: </span> {title}
        </h2>
        <h3 className="font-semibold">
          <span>Region: {area}</span>{" "}
          <span className="text-accent font-extrabold">|</span>{" "}
          <span>Category: {category}</span>
        </h3>
        <img
          src={image}
          alt={title}
          className="mt-4 shadow-xl w-[1fr] rounded transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="text-center mt-5 p-3 transition-transform duration-300 hover:scale-105">
        <h2 className="text-xl font-bold lg:text-2xl">INSTRUCTIONS </h2>
        <p className="mt-2 p-2  mx-auto max-w-[50ch]">{instructions}</p>
      </div>
    </div>
  );
};

export default Recipe;
