import { useState, useEffect } from "react";

import "../styles/Recipes.css";

import { RAW_RECIPES, RECIPES } from "../modules/recipes.js";

import SearchBar from "../components/SearchBar.js";
import FilterBar from "../components/FilterBar.js";

const Recipes = (props) => {
    const {
        unlockedIngredients,
        setUnlockedIngredients,
        getCategoryQuantities
    } = props;


    const [items, setItems] = useState(Object.keys(RAW_RECIPES));
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
                    condition={item => unlockedIngredients.indexOf(item) === -1 && unlockedIngredients.filter(ing => ing.parentRecipe === item).length === 0 }
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
                    return ((unlockedIngredients.indexOf(name) === -1) && unlockedIngredients.filter(ing => ing.parentRecipe === name).length === 0) ?
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
                    
                    <li>
                        <h4>categories</h4>
                        <ul>{RAW_RECIPES[recipeInfo].category.map((cat, i) => {
                            return <li key={i}>
                                {cat}
                            </li>
                        })}</ul>
                    </li>

                    <li>
                        <h4>appliances</h4>
                        <ul>{RAW_RECIPES[recipeInfo].appliance.map((app, i) => {
                            return <li key={i}>
                                {app === undefined ? "counter" : app}
                            </li>
                        })}</ul>
                    </li>

                    {RAW_RECIPES[recipeInfo].variants && <li>
                        <h4>variants</h4>
                        <ul>
                            {RAW_RECIPES[recipeInfo].canExistAlone && <li>{recipeInfo}</li>}
                            {Object.keys(RECIPES).filter(recName => RECIPES[recName].parentRecipe === recipeInfo).filter(name => unlockedIngredients.indexOf(name) !== -1).map((vari, i) => {
                                return <li key={i}>
                                    {vari}
                                </li>
                            })}
                        </ul>
                    </li>}


                    <li>
                        <h4>recipes</h4>
                        
                        <ul>
                            {Object.keys(RECIPES).filter((recName => recName === recipeInfo || (RECIPES[recName].parentRecipe === recipeInfo && unlockedIngredients.indexOf(recName) !== -1))).map((recName, u) => 
                                <li key={u}>
                                    {<h4>{recName}</h4>}
                                    {RECIPES[recName].ingredientCombos.map((combo, i) => {
                                        return <ul key={i} className="recipe-ingredient-combo-list">
                                            {RECIPES[recName].ingredientCombos[i].map((ing, j) => {
                                                return <li key={j}>{ing}</li>
                                            })}
                                        </ul>
                                    })}
                                </li>
                            )}
                        </ul>

                    </li> 
                    

                </ul>
            </div>}
        </div>
    </div>
}

export default Recipes;