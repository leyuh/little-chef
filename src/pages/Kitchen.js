import { useState, useEffect, useRef } from "react";

import "../styles/Kitchen.css";

import Checkerboard from "../components/Checkerboard.js";
import Ingredient from "../components/Ingredient.js";

const Kitchen = (props) => {
    const {
        ingredients,
        selectedIngredient,
        setSelectedIngredient
    } = props;

    const [workspaceIngredients, setWorkspaceIngredients] = useState([]);
    const workspaceRef = useRef(null);

    useEffect(() => {
        console.log(workspaceIngredients);
    }, [workspaceIngredients])

    return <div id="kitchen" className="page bg3">

        <div id="ingredients-div" className="bg4 border1">
            <ul id="ingredients-list">
                {ingredients.map((ingredient, i) => {
                    return <li className="ingredient-li" key={i}>
                        <Ingredient 
                            name={ingredient}
                            selectedIngredient={selectedIngredient}
                            setSelectedIngredient={setSelectedIngredient}
                            finite={false}
                            workspaceIngredients={workspaceIngredients}
                            setWorkspaceIngredients={setWorkspaceIngredients}
                        />
                    </li>
                })}
            </ul>
        </div>

        <div id="workspace" ref={workspaceRef}>
            <Checkerboard 
                areaRef={workspaceRef}
                selectedIngredient={selectedIngredient}
                setSelectedIngredient={setSelectedIngredient}
                workspaceIngredients={workspaceIngredients}
                setWorkspaceIngredients={setWorkspaceIngredients}
            />
        </div>

    </div>
}

export default Kitchen;