import { useState, useEffect, useRef } from "react";

import "../styles/Kitchen.css";

import Checkerboard from "../components/Checkerboard.js";

const Kitchen = (props) => {
    const {
        ingredients,
        selectedIngredient,
        setSelectedIngredient
    } = props;

    const [workspaceIngredients, setWorkspaceIngredients] = useState([]);
    const workspaceRef = useRef(null);

    return <div id="kitchen" className="page bg3">

        <div id="ingredients-div" className="bg4 border1">
            <ul id="ingredients-list">
                {ingredients.map((ingredient, i) => {
                    return <li className="ingredient-li" key={i}>
                        <button className="ingredient bg5 border1 text0" onClick={() => {
                            setSelectedIngredient(prev => prev === ingredient ? null : ingredient);
                        }}>
                            {ingredient}
                        </button>
                    </li>
                })}
            </ul>
        </div>

        <div id="workspace" ref={workspaceRef}>
            <Checkerboard 
                areaRef={workspaceRef}
                selectedIngredient={selectedIngredient}
                setSelectedIngredient={setSelectedIngredient}
            />
        </div>

    </div>
}

export default Kitchen;