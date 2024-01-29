import { useState, useEffect } from "react";

import './styles/App.css';

import Kitchen from './pages/Kitchen.js';

function App() {

  const [ingredients, setIngredients] = useState([
    "water",
    "flour",
    "sugar",
    "salt",
    "milk"
  ]);

  const [selectedIngredient, setSelectedIngredient] = useState(null);

  useEffect(() => {
    console.log(selectedIngredient);
  }, [selectedIngredient])

  return (
    <div id="app">
      <Kitchen 
        ingredients={ingredients}
        selectedIngredient={selectedIngredient}
        setSelectedIngredient={setSelectedIngredient}
      />
    </div>
  );
}

export default App;
