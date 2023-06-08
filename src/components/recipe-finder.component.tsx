import React, { useState } from "react";
import axios from "axios";

export interface IRecipe {
  idMeal: string;
  strArea: string;
  strCategory: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
  strYoutube: string;
  strIngredient: string[];
  strMeasure: string[];
}

export const RecipeFinder: React.FC = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get<{ meals: IRecipe[] }>(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      console.log(response.data.meals);
      setRecipes(response.data.meals);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSurpriseMe = async () => {
    try {
      const response = await axios.get<{ meals: IRecipe[] }>(
        `https://www.themealdb.com/api/json/v1/1/random.php`
      );
      setRecipes(response.data.meals);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleSurpriseMe}>Surprise Me</button>
      {recipes.map((recipe) => (
        <div key={recipe.idMeal}>
          <h3>
            <span className="text-xl">TITLE: </span> {recipe.strMeal}
          </h3>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <p>
            <span className="text-xl">INSTRUCTIONS: </span>{" "}
            {recipe.strInstructions}
          </p>
        </div>
      ))}
    </div>
  );
};

export default RecipeFinder;
