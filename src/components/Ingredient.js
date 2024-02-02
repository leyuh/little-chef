
import { useEffect } from "react";

const Ingredient = (props) => {
    const {
        ingredient,
        isGenerator,
        selectedItem,
        setSelectedItem,
        workspaceIngredients,
        setWorkspaceIngredients,
        onItemClick
    } = props;

    return <div 
        className="grid-item ingredient bg5 border1 text0" 
        onClick={() => onItemClick(ingredient, "ingredient", isGenerator)}
    >
        <h1 className="text0">{ingredient.name}</h1>
    </div>
}

export default Ingredient;