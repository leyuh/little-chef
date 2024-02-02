import { useState, useEffect, useRef } from "react";

import "../styles/Kitchen.css";

import Checkerboard from "../components/Checkerboard.js";
import Ingredient from "../components/Ingredient.js";

import INGREDIENTS from "../modules/ingredients.js";
import RECIPES from "../modules/recipes.js";

import { DEFAULT_INGREDIENTS, DEFAULT_APPLIANCES } from "../modules/configs.js";

const Kitchen = (props) => {
    const {
    } = props;


    const [unlockedIngredients, setUnlockedIngredients] = useState(DEFAULT_INGREDIENTS);
    
    const [selectedItem, setSelectedItem] = useState(null);


    const [workspaceIngredients, setWorkspaceIngredients] = useState([]);
    const [workspaceAppliances, setWorkspaceAppliances] = useState(DEFAULT_APPLIANCES);

    const workspaceRef = useRef(null);

    const createRecipeIfItExists = (selectedWorkspaceItem) => {
        let sameTileIngredients = workspaceIngredients.filter((ing, i) => {
            return ing.tile === selectedWorkspaceItem.tile;
        })
        let sameTileAppliance = workspaceAppliances.find(app => app.tile === selectedWorkspaceItem.tile);

        console.log(sameTileIngredients);

        let includesAll = (arr, values) => values.every(val => arr.includes(val));
        console.log(sameTileAppliance);
        let recipeName = Object.keys(RECIPES).find(recipeName => includesAll(sameTileIngredients.map(ing => ing.name), RECIPES[recipeName].ingredients) && (RECIPES[recipeName].appliance === sameTileAppliance?.name));

        if (recipeName) {
            console.log("recipe found");
            setSelectedItem(null);

            if (unlockedIngredients.indexOf(recipeName) === -1) {
                setUnlockedIngredients(prev => [...prev, recipeName]);
            }

            setWorkspaceIngredients(prev => {
                let newIngs = [...prev].filter((ing, i) => sameTileIngredients.indexOf(ing) === -1);
                newIngs.push({
                    name: recipeName,
                    tile: selectedWorkspaceItem.tile,
                    key: newIngs.length + workspaceAppliances.length
                });
                return newIngs;
            });
            
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
        console.log("click", selectedItem);
        if (selectedItem === null) {
            console.log(item.key);

            let key = item.key;

            if (type === "ingredient" && isGenerator) {
                key = workspaceIngredients.length + workspaceAppliances.length;
                console.log(key);
                setWorkspaceIngredients(prev => [...prev, {
                    name: item.name,
                    tile: null,
                    key: key
                }]);
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
        console.log(workspaceIngredients);
    }, [workspaceIngredients])

    return <div id="kitchen" className="page bg3">

        <div id="ingredients-div" className="bg4 border1">
            <ul id="ingredients-list">
                {unlockedIngredients.map((val, i) => { return {
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