import React, { useState } from "react";
import axios from "axios";
import Recipe from "./recipe.component";
import RecipeSearch from "./search.component";
import Hero from "./hero.component";
import notfound from "../assets/recepe_not_found.gif";

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
  const [recipes, setRecipes] = useState<IRecipe[] | null>([]);

  const handleSearch = async (query: string) => {
    try {
      const response = await axios.get<{ meals: IRecipe[] }>(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );

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
  console.log(recipes);

  return (
    <div>
      <div>
        <Hero />
        <RecipeSearch onSearch={handleSearch} onSurpriseMe={handleSurpriseMe} />
      </div>

      {recipes !== null ? (
        recipes.map((recipe) => (
          <div key={recipe.idMeal} className="p-4">
            <Recipe
              id={recipe.idMeal}
              key={recipe.idMeal}
              title={recipe.strMeal}
              image={recipe.strMealThumb}
              instructions={recipe.strInstructions}
              area={recipe.strArea}
              category={recipe.strCategory}
              youtube={recipe.strYoutube}
              ingredient={recipe.strIngredient}
              measure={recipe.strMeasure}
            />
          </div>
        ))
      ) : (
        <img src={notfound} alt="not found" />
      )}
    </div>
  );
};

export default RecipeFinder;
