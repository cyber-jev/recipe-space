import React from "react";
import RecipeFinder from "./components/recipe-finder.component";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App p-4">
      <h1>Food Recipe Finder</h1>
      <RecipeFinder />
    </div>
  );
};

export default App;
