import INGREDIENTS from "./ingredients.js";
import RECIPES from "./recipes.js";

export const DEFAULT_INGREDIENTS = Object.keys(INGREDIENTS);
export const TEST_RECIPES = Object.keys({});

export const DEFAULT_APPLIANCES = [
    {
        name: "oven",
        tile: `${2}-${0}`,
        key: 0
    },
    {
        name: "fridge",
        tile: `${1}-${0}`,
        key: 1
    },
    {
        name: "trash",
        tile: `${0}-${0}`,
        key: 2
    }
];

export const CATEGORIES = [
    "baking",
    "spices",
    "sweets",
    "ferments",
    "liquids",
    "condiments",
    "dairy",
    "proteins",
    "fruits",
    "vegetables",
    "beans",
    "nuts",
    "seeds",
    "grains",
    "pastries",
    "entrees",
    "breakfast",
    "sides"
]

// CHECKERBOARD
export const TILE_SIZE = window.screen.width > 1000 ? 100 : 80;
export const BORDER_WIDTH = 15;


