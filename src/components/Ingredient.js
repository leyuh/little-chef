import "../styles/Ingredient.css";

import { useEffect } from "react";

const Ingredient = (props) => {
    const {
        ingredient,
        generator,
        selectedIngredient,
        setSelectedIngredient,
        workspaceIngredients,
        setWorkspaceIngredients
    } = props;

    return <div 
        className="ingredient bg5 border1 text0" 
        onClick={() => {
            if (selectedIngredient === null) {
                console.log(ingredient.key);

                let key = ingredient.key;

                if (generator) {
                    key = workspaceIngredients.length;
                    setWorkspaceIngredients(prev => [...prev, {
                        name: ingredient.name,
                        tile: null,
                        key: key
                    }]);
                }
                setSelectedIngredient(key);
            }
        }}
    >
        <h1 className="text0">{ingredient.name}</h1>
    </div>
}

export default Ingredient;