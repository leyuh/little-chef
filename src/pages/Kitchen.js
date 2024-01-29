import { useState, useEffect } from "react";

import "../styles/Kitchen.css";

import Checkerboard from "../components/Checkerboard.js";

const Kitchen = (props) => {
    const {
        ingredients,
        selectedIngredient,
        setSelectedIngredient
    } = props;

    const [workspaceIngredients, setWorkspaceIngredients] = useState([]);

    const placeIngredient = (ingredient, e) => {
        console.log(e.clientX, e.clientY);

        let newWorkspaceIngredient = {
            "name": ingredient,
            "posX": e.clientX - 230 - 55,
            "posY": e.clientY - 55,
            "index": workspaceIngredients.length
        }

        setWorkspaceIngredients(prev => [...prev, newWorkspaceIngredient]);

        setSelectedIngredient(null);
    }

    return <div id="kitchen" className="page">

        <div id="ingredients-div">
            <ul id="ingredients-list">
                {ingredients.map((ingredient, i) => {
                    return <li className="ingredient-li" key={i}>
                        <button className="ingredient" onClick={() => {
                            setSelectedIngredient(prev => prev === ingredient ? null : ingredient);
                        }}>
                            {ingredient}
                        </button>
                    </li>
                })}
            </ul>
        </div>

        <div id="workspace" onClick={(e) => {
            if (selectedIngredient) {
                placeIngredient(selectedIngredient, e);
            }
        }}>
            <Checkerboard 
                width={20}
                height={15}
                colorA="rgb(162, 140, 111)"
                colorB="rgb(175, 154, 126)"
            />

            <div id="workspace-ingredients-div">
                {workspaceIngredients.map((ingredient, i) => {
                    return <div className="ingredient" id={`ing-${ingredient.index}`} key={i} style={{
                        "left": `${ingredient.posX}px`,
                        "top": `${ingredient.posY}px`,
                    }} onClick={() => {
                        setWorkspaceIngredients(prev => prev.filter(ing => ing !== ingredient));
                        
                        setSelectedIngredient(prev => prev === ingredient.name ? null : ingredient.name);
                    }}>
                        <h1>{ingredient.name}</h1>
                    </div>
                })}
            </div>
        </div>

    </div>
}

export default Kitchen;