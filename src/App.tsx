import React from "react";
import RecipeFinder from "./components/recipe-finder.component";
import BackToTopButton from "./components/back-to-top-btn.component";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App bg-body m-auto max-w-[1920px]">
      <RecipeFinder />
      <BackToTopButton />
    </div>
  );
};

export default App;
