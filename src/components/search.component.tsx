import React, { useState } from "react";

type RecipeSearchProps = {
  onSearch: (query: string) => void;
  onSurpriseMe: () => void;
};

const RecipeSearch: React.FC<RecipeSearchProps> = ({
  onSearch,
  onSurpriseMe,
}) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  };

  return (
    <div className="p-4 flex flex-col  items-center   m-auto ">
      <p className="max-w-[40ch] py-4 lg:text-xl lg:text-center">
        Find hundreds of recipes, You can get started by searching in the box
        below or try having fun with the surprise me button
      </p>
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          onClick={() => {
            handleSearch();
            handleScroll();
          }}
          className="p-2 ml-2 bg-black text-white font-custom2 rounded"
        >
          SEARCH
        </button>
        <button
          // onClick={onSurpriseMe}
          onClick={() => {
            onSurpriseMe();
            handleScroll(); // Scroll down when the button is clicked
          }}
          className="block p-2 mt-2 bg-black text-white font-custom2 m-auto w-max rounded"
        >
          SURPRISE ME
        </button>
      </div>
    </div>
  );
};

export default RecipeSearch;
