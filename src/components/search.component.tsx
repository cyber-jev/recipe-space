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

  return (
    <div className="p-4">
      <p className="max-w-[40ch] py-4 text-l">
        Find hundreds of recipe, You can get started by searching in the box
        below or having fun with the surprise me button
      </p>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2"
      />
      <button
        onClick={handleSearch}
        className="p-2 ml-2 bg-black text-white font-custom"
      >
        SEARCH
      </button>
      <button
        onClick={onSurpriseMe}
        className="block p-2 mt-2 bg-black text-white font-custom"
      >
        SURPRISE ME
      </button>
    </div>
  );
};

export default RecipeSearch;
