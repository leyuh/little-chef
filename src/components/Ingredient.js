import "../styles/Ingredient.css";

import { useEffect } from "react";

const Ingredient = (props) => {
    const {
        name,
        selectedIngredient,
        setSelectedIngredient,
        finite,
        workspaceIngredients,
        setWorkspaceIngredients
    } = props;

    return <div 
        className="ingredient bg5 border1 text0" 
        onClick={() => {
            console.log(name);
            if (!selectedIngredient) {
                setSelectedIngredient(prev => prev === name ? null : name);
            }
        }}
    >
        <h1 className="text0">{name}</h1>
    </div>
}

export default Ingredient;