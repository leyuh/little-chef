import { useState, useEffect } from "react";

import Sound from "react-sound";
import backgroundMusic from "./sounds/evening-meal-aylex-main-version-21980-02-41.mp3";

import './styles/Colors.css';
import './styles/App.css';

import Kitchen from './pages/Kitchen.js';


function App() {

  const [playMusic, setPlayMusic] = useState(false);

  return (
    <div id="app">
      <Kitchen 
      />

      <Sound 
        url={backgroundMusic}
        playStatus={playMusic ? Sound.status.PLAYING : Sound.status.STOPPED}
        volume={10}
        loop={true}
      />
    </div>
  );
}

export default App;
