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
        <h3 className="mt-2 font-bold text-xl lg:text-2xl">
          <span>TITLE: </span> {title}
        </h3>
        <img
          src={image}
          alt={title}
          className="mt-2 shadow-xl w-[1fr] rounded transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="text-center mt-5">
        <h3 className="text-xl font-bold lg:text-2xl">INSTRUCTIONS </h3>
        <p className="mt-2 mx-auto max-w-[50ch]">{instructions}</p>
      </div>
    </div>
  );
};

export default Recipe;
