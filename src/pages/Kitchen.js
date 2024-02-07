import { useState, useEffect, useRef } from "react";
import useStickyState from "../hooks/useStickyState.js";

import "../styles/Kitchen.css";

import Checkerboard from "../components/Checkerboard.js";
import Ingredient from "../components/Ingredient.js";
import SearchBar from "../components/SearchBar.js";
import FilterBar from "../components/FilterBar.js";

import INGREDIENTS from "../modules/ingredients.js";
import RECIPES from "../modules/recipes.js";


import { DEFAULT_INGREDIENTS, DEFAULT_APPLIANCES } from "../modules/configs.js";


const Kitchen = (props) => {
    const {
        playMusic,
        setPlayMusic,
        unlockedIngredients,
        setUnlockedIngredients,
        getCategoryQuantities
    } = props;


    

    const [searchedUnlockedIngredients, setSearchedUnlockedIngredients] = useState(unlockedIngredients);
    const [filteredUnlockedIngredients, setFilteredUnlockedIngredients] = useState(unlockedIngredients);

    const [viewIngredients, setViewIngredients] = useState(unlockedIngredients);
    
    const [selectedItem, setSelectedItem] = useState(null);


    const [workspaceIngredients, setWorkspaceIngredients] = useStickyState([], "workspaceIngredients");
    const [workspaceAppliances, setWorkspaceAppliances] = useStickyState(DEFAULT_APPLIANCES, "workspaceAppliances");
    const [currKey, setCurrKey] = useStickyState(DEFAULT_APPLIANCES.length, "currKey");

    const [categoryQuantities, setCategoryQuantities] = useState(getCategoryQuantities({...INGREDIENTS, ...RECIPES}));
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        console.log(categoryQuantities);
    }, [categoryQuantities])

    const workspaceRef = useRef(null);

    const createRecipeIfItExists = (selectedWorkspaceItem) => {
        let sameTileIngredients = workspaceIngredients.filter((ing, i) => {
            return ing.tile === selectedWorkspaceItem.tile;
        })
        let sameTileAppliance = workspaceAppliances.find(app => app.tile === selectedWorkspaceItem.tile);

        const includesAll = (arr, values) => values.every(val => arr.includes(val));
        let sameApplianceRecipeNames = Object.keys(RECIPES).filter(recipeName => RECIPES[recipeName].appliance.indexOf(sameTileAppliance?.name) !== -1);
        let recipeNames = [];
        let ingredientsLists = [];
        sameApplianceRecipeNames?.map((recName, i) => {
            let recipe = RECIPES[recName];

            for (let i = 0; i < recipe.ingredientCombos.length; i++) {

                let combo = recipe.ingredientCombos[i];
                if (recName === "toast") console.log(combo);
            
                // check if ingredients include recipe ingredients
                if (includesAll(sameTileIngredients.map(ing => ing.name), combo)) {
                    recipeNames.push(recName);
                    ingredientsLists.push(combo);
                }
            }
        }) 

        console.log(recipeNames);


        let recipeVariantsNames = [];
        let recipeVariantsIngredients = [];

        for (let i = 0; i < recipeNames.length; i++) {
            let recipeName = recipeNames[i];
            let combo = ingredientsLists[i];
            let recipe = RECIPES[recipeName];

            // check if ingredients include variant ingredients
            if (recipe.hasOwnProperty("variants")) {
                for (let j = 0; j < Object.keys(recipe.variants).length; j++) {
                    let variantName = Object.keys(recipe.variants)[j];
                    let variantIngredients = recipe.variants[variantName];

                    let variantCombo = [...combo, ...variantIngredients];


                    if (includesAll(sameTileIngredients.map(ing => ing.name), variantCombo)) {
                        recipeVariantsNames.push(variantName + " " + recipeName);
                        recipeVariantsIngredients.push(variantCombo);
                    }
                }
            }

            // filter out recipe if it can not exist alone
            let canExistAlone = recipe.hasOwnProperty("canExistAlone") ? recipe.canExistAlone : true;
            if (!canExistAlone) {
                console.log("REMOVING ", recipeName);
                recipeNames.splice(i, 1);
                ingredientsLists.splice(i, 1);
            }
        }

        // add variants to recipe lists
        recipeNames.push(...recipeVariantsNames);
        ingredientsLists.push(...recipeVariantsIngredients);

        
        // favor most complicated recipe
        let mostComplicatedIngredients;
        let mostComplicatedLength;
        let mostComplicatedIndex;
        for (let i = 0; i < ingredientsLists.length; i++) {
            if (!mostComplicatedIngredients || ingredientsLists[i].length > mostComplicatedLength) {
                mostComplicatedIngredients = ingredientsLists[i];
                mostComplicatedLength = ingredientsLists[i].length;
                mostComplicatedIndex = i;
            }
        }

        let ingredientsList = mostComplicatedIngredients;
        let recipeName = recipeNames[mostComplicatedIndex];

        if (recipeName) {
            console.log("recipe found");
            setSelectedItem(null);

            if (unlockedIngredients.indexOf(recipeName) === -1) {
                setUnlockedIngredients(prev => [...prev, recipeName]);
            }

            setWorkspaceIngredients(prev => {
                let newIngs = [];

                let ingsNeeded = [...ingredientsList];
                for (let i = 0; i < prev.length; i++) {
                    let ing = prev[i];
                    if (sameTileIngredients.indexOf(ing) === -1) {
                        // ingredient was not on tile
                        newIngs.push(ing);
                    } else {
                        console.log(ingsNeeded);
                        // if on same tile, only push if not in needed ings list
                        if (ingsNeeded.indexOf(ing.name) === -1) {
                            newIngs.push(ing);
                        } else {
                            console.log(ingsNeeded);
                            ingsNeeded.splice(ingsNeeded.indexOf(ing.name), 1);
                            console.log(ingsNeeded);
                        }
                    }
                }

                newIngs.push({
                    name: recipeName,
                    tile: selectedWorkspaceItem.tile,
                    key: currKey
                });
                return newIngs;
            });

            setCurrKey(prev => prev + 1);
            
        }
    }

    const trashItemIfNecessary = (selectedWorkspaceItem) => {
        let trash = workspaceAppliances.find(app => app.name === "trash");

        if (selectedItem.type === "ingredient" && selectedWorkspaceItem.tile === trash.tile) {
            setWorkspaceIngredients(prev => [...prev].filter((ing, i) => ing.key !== selectedItem.key));
            setSelectedItem(null);
        }
    }

    const onItemClick = (item, type, isGenerator = false) => {

        if (selectedItem === null) {
            console.log(item.key);

            let key = item.key;

            if (type === "ingredient" && isGenerator) {
                key = currKey;
                console.log(key);
                setWorkspaceIngredients(prev => [...prev, {
                    name: item.name,
                    tile: null,
                    key: key
                }]);
                setCurrKey(prev => prev + 1);
            }

            setSelectedItem({
                key,
                type
            });
        } else {
            let selectedWorkspaceItem = workspaceIngredients.find(ing => ing.key === selectedItem.key);

            // if ingredients on tile form recipe, create it
            console.log(type);
            if (type === "ingredient") {
                createRecipeIfItExists(selectedWorkspaceItem);
            }

            // if selected item is ingredient and on same tile on trash, trash selected item
            trashItemIfNecessary(selectedWorkspaceItem)   
        }
    }

    useEffect(() => {
        setViewIngredients(filteredUnlockedIngredients.filter(ing => searchedUnlockedIngredients.indexOf(ing) !== -1).sort((a, b) => {
            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            }
            
            return 0;
        }));
    }, [filteredUnlockedIngredients, searchedUnlockedIngredients])

    return <div id="kitchen" className="page bg3">

        <div id="ingredients-div" className="bg4 border1">
            <SearchBar 
                items={unlockedIngredients}
                filteredItems={searchedUnlockedIngredients}
                setFilteredItems={setSearchedUnlockedIngredients}
            />
            <FilterBar 
                items={unlockedIngredients}
                filteredItems={filteredUnlockedIngredients}
                setFilteredItems={setFilteredUnlockedIngredients}
                setSelectedCategory={setSelectedCategory}
            />

            <ul id="ingredients-list">
                {viewIngredients.map((val, i) => { return {
                    name: val
                }}).map((ing, i) => {
                    return <li className="ingredient-li" key={i}>
                        <Ingredient 
                            ingredient={ing}
                            isGenerator={true}
                            selectedItem={selectedItem}
                            setSelectedItem={setSelectedItem}
                            workspaceIngredients={workspaceIngredients}
                            setWorkspaceIngredients={setWorkspaceIngredients}
                            onItemClick={onItemClick}
                        />
                    </li>
                })}
            </ul>

            <h1 id="ingredients-list-quantity-label" className="text1">
                {selectedCategory ? 
                    (unlockedIngredients.filter(ing => ({...INGREDIENTS, ...RECIPES})[ing].category.indexOf(selectedCategory) !== -1)?.length) 
                : 
                    unlockedIngredients.length}/{selectedCategory ? categoryQuantities[selectedCategory] : Object.keys({...INGREDIENTS, ...RECIPES}).length}
            </h1>
        </div>

        <div id="workspace" ref={workspaceRef}>
            <Checkerboard 
                areaRef={workspaceRef}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
                workspaceIngredients={workspaceIngredients}
                setWorkspaceIngredients={setWorkspaceIngredients}
                workspaceAppliances={workspaceAppliances}
                setWorkspaceAppliances={setWorkspaceAppliances}
                onItemClick={onItemClick}
            />
        </div>

    </div>
}

export default Kitchen;