{Object.keys(RECIPES[recipeInfo]).map((prop, i) => {
    if (prop !== "appliance" && prop !== "category" && prop !== "ingredientCombos") return;
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
                } else if (prop === "appliance") {
                    return <li key={j}>
                        {(prop === "appliance" && val === undefined) ? "counter" : val}
                    </li>
                }
                return;
                
            })}
        </ul>
    </li>
})}