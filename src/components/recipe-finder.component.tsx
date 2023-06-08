import React, { useState } from "react";
import axios from "axios";

const RecipeFinder: React.FC = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  interface Recipe {
    id: string;
    title: string;
    image: string;
    ingredients: string;
  }

  const handleSearch = async () => {
    const options = {
      method: "GET",
      url: "https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe",
      params: {
        query: query,
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "recipe-by-api-ninjas.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response);
      const updatedRecipes: Recipe[] = await Promise.all(
        response.data.map(async (recipe: any) => {
          const imageUrl = await fetchGoogleImage(recipe.title);
          return { ...recipe, image: imageUrl };
        })
      );

      setRecipes(updatedRecipes);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchGoogleImage = async (title: string) => {
    const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY; //"YOUR_GOOGLE_API_KEY";
    const SEARCH_ENGINE_ID = process.env.REACT_APP_SEARCH_ENGINE_ID; //"YOUR_SEARCH_ENGINE_ID";
    const url = `https://www.googleapis.com/customsearch/v1?key=${GOOGLE_API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${encodeURIComponent(
      title
    )}&searchType=image&num=1`;

    try {
      const response = await axios.get(url);
      if (response.data.items && response.data.items.length > 0) {
        return response.data.items[0].link;
      }
    } catch (error) {
      console.error(error);
    }

    return ""; // Return empty string if no image is found
  };

  return (
    <div className=" ">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {recipes.map((recipe: any, index: number) => (
        <div key={index} className=" ">
          <h3>{recipe.title}</h3>
          <div>
            {recipe.image && (
              <img src={recipe.image} alt={recipe.title} className=" " />
            )}
          </div>
          <h4>{recipe.servings}</h4>
          <div>
            <h4>Ingredeients</h4>
            <p>{recipe.ingredients}</p>
          </div>
          <div>
            <h4>Instructions</h4>
            <p>{recipe.instructions}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeFinder;
