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
    <div>
      <h3 className="mt-2">
        <span className="text-xl">TITLE: </span> {title}
      </h3>
      <img src={image} alt={title} className="mt-2 shadow-xl" />
      <p className="mt-2">
        <span className="text-xl">INSTRUCTIONS: </span> {instructions}
      </p>
    </div>
  );
};

export default Recipe;
