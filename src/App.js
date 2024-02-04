import { useState, useEffect } from "react";
import useStickyState from "./hooks/useStickyState.js";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";

import Sound from "react-sound";
import backgroundMusic from "./sounds/evening-meal-aylex-main-version-21980-02-41.mp3";

import './styles/Colors.css';
import './styles/App.css';

import NavBar from "./components/NavBar.js";
import Home from "./pages/Home.js";
import Kitchen from './pages/Kitchen.js';
import Recipes from "./pages/Recipes.js";

import { DEFAULT_INGREDIENTS, TEST_RECIPES, CATEGORIES } from "./modules/configs.js";

function App() {

  const [playMusic, setPlayMusic] = useState(false);
  const [unlockedIngredients, setUnlockedIngredients] = useStickyState([...DEFAULT_INGREDIENTS, ...TEST_RECIPES], "unlockedIngredients");

  const getCategoryQuantities = (items) => {
    let quantities = {};
    for (let i = 0; i < CATEGORIES.length; i++) {
      let cat = CATEGORIES[i];
      quantities[cat] = Object.keys(items).filter(rec => items[rec].category.indexOf(cat) !== -1)?.length;
    }

    return quantities;
  }

  return (
    
    <div id="app">
      <HashRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home 
            playMusic={playMusic}
            setPlayMusic={setPlayMusic}
          />}/>
          
          <Route path="/kitchen" element={<Kitchen 
            unlockedIngredients={unlockedIngredients}
            setUnlockedIngredients={setUnlockedIngredients}
            getCategoryQuantities={getCategoryQuantities}
          />} />
          <Route path="/recipes" element={<Recipes 
            unlockedIngredients={unlockedIngredients}
            setUnlockedIngredients={setUnlockedIngredients}
            getCategoryQuantities={getCategoryQuantities}
          />} />
        </Routes>
      </HashRouter>

      <Sound 
        url={backgroundMusic}
        playStatus={playMusic ? Sound.status.PLAYING : Sound.status.STOPPED}
        volume={20}
        loop={true}
      />
    </div>
  );
}

export default App;
