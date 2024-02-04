import { useState, useEffect } from "react";
import useStickyState from "../hooks/useStickyState.js";

import "../styles/Recipes.css";

import RECIPES from "../modules/recipes.js";

import SearchBar from "../components/SearchBar.js";
import FilterBar from "../components/FilterBar.js";

const Recipes = (props) => {
    const {
        unlockedIngredients,
        setUnlockedIngredients,
        getCategoryQuantities
    } = props;


    const [items, setItems] = useState(Object.keys(RECIPES));
    const [searchedRecipes, setSearchedRecipes] = useState(items);
    const [filteredRecipes, setFilteredRecipes] = useState(items);

    const [viewRecipes, setViewRecipes] = useState(items);

    const [recipeInfo, setRecipeInfo] = useState(null);

    const [categoryQuantities, setCategoryQuantities] = useState(getCategoryQuantities(RECIPES));
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {

        setViewRecipes(filteredRecipes.filter(rec => searchedRecipes.indexOf(rec) !== -1).sort((a, b) => {
            if (unlockedIngredients.indexOf(a) === -1 && unlockedIngredients.indexOf(b) !== -1) return 1;
            if (unlockedIngredients.indexOf(a) !== -1 && unlockedIngredients.indexOf(b) === -1) return -1;

            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            }
            
            return 0;
        }));
    }, [filteredRecipes, searchedRecipes])

    return <div id="recipes" className="page bg6 text5">
        <div id="recipes-div" className={`bg7 panel border1`}>
            <div id="filters-div" className={`${recipeInfo ? "half" : ""}`}>
                <SearchBar 
                    items={items}
                    filteredItems={searchedRecipes}
                    setFilteredItems={setSearchedRecipes}
                    condition={item => unlockedIngredients.indexOf(item) !== -1}
                />
                <FilterBar 
                    items={items}
                    filteredItems={filteredRecipes}
                    setFilteredItems={setFilteredRecipes}
                    setSelectedCategory={setSelectedCategory}
                />
            </div>

            <div id="recipes-grid" className={`${recipeInfo ? "half" : ""}`}>
                {viewRecipes.map((name, i) => {
                    return (unlockedIngredients.indexOf(name) === -1) ?
                        // locked
                        <div className="recipe-item locked border4" key={i}>
                            <h1 className="text4">?</h1>
                        </div>
                    :
                        // unlocked
                        <div 
                            className="recipe-item bg5 border1 unlocked" 
                            key={i}
                            onClick={() => setRecipeInfo(name)}
                        >
                            <h1 className="text0">{name}</h1>
                        </div>
                })}
            </div>

            <h1 id="recipes-quantity-label" className={`text1 ${recipeInfo ? "half" : ""}`}>
                {selectedCategory ? 
                    (unlockedIngredients.filter(ing => Object.keys(RECIPES).indexOf(ing) !== -1).filter(ing => RECIPES[ing].category.indexOf(selectedCategory) !== -1)?.length) 
                : 
                    unlockedIngredients.filter(ing => Object.keys(RECIPES).indexOf(ing) !== -1).length}/{selectedCategory ? categoryQuantities[selectedCategory] : Object.keys(RECIPES).length}
            </h1>

            {recipeInfo && <div id="recipe-info" className="half bg2 border1 panel">
                <button id="recipe-info-close-btn" className="bg5 border1 text1" onClick={() => setRecipeInfo(null)}>&lt;</button>
                <h1>{recipeInfo}</h1>
                <ul>
                    {Object.keys(RECIPES[recipeInfo]).map((prop, i) => {
                        if (prop === "icon") return;
                        return <li key={i}>
                            <h4>{prop === "appliance" ? "appliances" : prop === "ingredientCombos" ? "recipes" : "categories"}</h4>
                            <ul>
                                {RECIPES[recipeInfo][prop].map((val, j) => {
                                    if (prop === "ingredientCombos") {
                                        return <ul key={j} className="recipe-ingredient-combo-list">
                                            {RECIPES[recipeInfo][prop][j].map((val, k) => {
                                                return <li key={k}>{val}</li>
                                            })}
                                        </ul>
                                    } else {
                                        return <li key={j}>
                                            {(prop === "appliance" && val === undefined) ? "counter" : val}
                                        </li>
                                    }
                                    
                                })}
                            </ul>
                        </li>
                    })}
                </ul>
            </div>}
        </div>
    </div>
}

export default Recipes;