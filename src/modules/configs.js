import INGREDIENTS from "./ingredients.js";

export const DEFAULT_INGREDIENTS = Object.keys(INGREDIENTS);

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
        name: "fermenter",
        tile: `${3}-${0}`,
        key: 3
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
    "meals",
    "sides"
]

// CHECKERBOARD
export const TILE_SIZE = 100;
export const BORDER_WIDTH = 15;


