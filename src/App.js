import { useState, useEffect } from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import Sound from "react-sound";
import backgroundMusic from "./sounds/evening-meal-aylex-main-version-21980-02-41.mp3";

import './styles/Colors.css';
import './styles/App.css';

import NavBar from "./components/NavBar.js";
import Home from "./pages/Home.js";
import Kitchen from './pages/Kitchen.js';
import Recipes from "./pages/Recipes.js";

function App() {

  const [playMusic, setPlayMusic] = useState(false);


  return (
    
    <div id="app">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home 
            playMusic={playMusic}
            setPlayMusic={setPlayMusic}
          />}/>
          
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
      </BrowserRouter>

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
