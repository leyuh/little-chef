import { useEffect, useState } from "react";

import { CATEGORIES } from "../modules/configs.js";
import RECIPES from "../modules/recipes.js";
import INGREDIENTS from "../modules/ingredients.js";

import "../styles/Bar.css";

const FilterBar = (props) => {
    const {
        items,
        filteredItems,
        setFilteredItems,
        categoryQuantities,
        setSelectedCategoryQuantity
    } = props;

    const [input, setInput] = useState(null);

    useEffect(() => {
        if (!input || input === "all") {
            setFilteredItems(items);
            setSelectedCategoryQuantity(Object.values(categoryQuantities).reduce((a, b) => a + b, 0))
        } else {
            setSelectedCategoryQuantity(categoryQuantities[input]);
            setFilteredItems(items.filter(item => (RECIPES[item] || INGREDIENTS[item]).category.indexOf(input) !== -1));
        }
    }, [input, items])

    return <div className="filter-bar bar bg5 text0">
        <select 
            name="categories" 
            id="categories" 
            defaultValue={"filter"}
            onChange={(e) => setInput(e.target.value)}
        >
            <option value="filter" disabled>filter</option>
            <option value="all">all categories</option>
            {CATEGORIES.map((val, i) => {
                return <option value={val} key={i}>{val}</option>
            })}
        </select>
    </div>
}

export default FilterBar;