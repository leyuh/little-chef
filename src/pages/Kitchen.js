import { useState, useEffect, useRef } from "react";

import "../styles/Kitchen.css";

import Checkerboard from "../components/Checkerboard.js";
import Ingredient from "../components/Ingredient.js";

const Kitchen = (props) => {
    const {
    } = props;

    const DEFAULT_INGREDIENTS = [
        "water",
        "flour",
        "sugar",
        "salt",
        "milk"
    ];
    
    const [selectedIngredient, setSelectedIngredient] = useState(null);


    const [workspaceIngredients, setWorkspaceIngredients] = useState([]);

    const workspaceRef = useRef(null);

    useEffect(() => {
        console.log(workspaceIngredients);
    }, [workspaceIngredients])

    return <div id="kitchen" className="page bg3">

        <div id="ingredients-div" className="bg4 border1">
            <ul id="ingredients-list">
                {DEFAULT_INGREDIENTS.map((val, i) => { return {
                    name: val
                }}).map((ing, i) => {
                    return <li className="ingredient-li" key={i}>
                        <Ingredient 
                            ingredient={ing}
                            generator={true}
                            selectedIngredient={selectedIngredient}
                            setSelectedIngredient={setSelectedIngredient}
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