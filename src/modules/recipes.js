export const RAW_RECIPES = {


    // DAIRY
    "butter": {
        "appliance": [undefined],
        "ingredientCombos": [["cream", "salt"]],
        "icon": "",
        "category": ["dairy"]
    },
    "sour cream": {
        "appliance": ["fridge"],
        "ingredientCombos": [["bacteria", "cream"], ["vinegar", "cream"]],
        "icon": "",
        "category": ["dairy"]
    },
    "milk": {
        "appliance": [undefined, "fridge"],
        "ingredientCombos": [["milk"]],
        "icon": "",
        "category": ["dairy", "liquids", "sweets"],
        "variants": {
            "chocolate": ["chocolate"],
            "strawberry": ["strawberry"]
        },
        "canExistAlone": false
    },
    "cheese": {
        "appliance": [undefined],
        "ingredientCombos": [["milk", "salt", "bacteria"]],
        "icon": "",
        "category": ["dairy"]
    },
    "yogurt": {
        "appliance": ["fridge"],
        "ingredientCombos": [["yogurt"], ["milk", "bacteria"]],
        "icon": "",
        "category": ["dairy"],
        "variants": {
            "vanilla": ["vanilla beans"],
            "strawberry": ["strawberry"],
            "blueberry": ["blueberry"]
        },
        "canExistAlone": true
    },
    "ice cream": {
        "appliance": ["fridge"],
        "ingredientCombos": [["cream", "sugar"]],
        "icon": "",
        "category": ["dairy", "sweets"],
        "variants": {
            "vanilla": ["vanilla beans"],
            "strawberry": ["strawberry"],
            "chocolate": ["chocolate"],
            "caramel": ["caramel"],
            "mocha": ["mocha"]
        },
        "canExistAlone": false
    },
    "milkshake": {
        "appliance": ["fridge", undefined],
        "ingredientCombos": [["milk"]],
        "icon": "",
        "category": ["dairy", "sweets"],
        "variants": {
            "vanilla": ["vanilla ice cream"],
            "strawberry": ["strawberry ice cream"],
            "chocolate": ["chocolate ice cream"],
            "caramel": ["caramel ice cream"],
            "mocha": ["mocha ice cream"]
        },
        "canExistAlone": false
    },
    


    // GRAINS
    "bread": {
        "appliance": ["oven"],
        "ingredientCombos": [["flour", "water", "yeast"]],
        "icon": "",
        "category": ["grains"],
        "variants": {
            "sour dough": ["bacteria"],
            "wheat": []
        },
        "canExistAlone": false
    },
    "tortilla": {
        "appliance": ["oven"],
        "ingredientCombos": [["flour", "water", "salt"]],
        "icon": "",
        "category": ["grains"]
    },
    "taco shell": {
        "appliance": ["oven"],
        "ingredientCombos": [["oil", "tortilla"]],
        "icon": "",
        "category": ["grains"]
    },
    "tortilla chips": {
        "appliance": ["oven"],
        "ingredientCombos": [["oil", "tortilla", "salt"]],
        "icon": "",
        "category": ["grains", "sides"]
    },
    "pasta": {
        "appliance": ["oven"],
        "ingredientCombos": [["flour", "egg", "salt", "oil"]],
        "icon": "",
        "category": ["grains"]
    },
    "pizza dough": {
        "appliance": ["oven"],
        "ingredientCombos": [["flour", "yeast", "salt", "oil", "water"]],
        "icon": "",
        "category": ["grains"]
    },
    "bun": {
        "appliance": ["oven"],
        "ingredientCombos": [["flour", "water", "salt", "milk", "egg"]],
        "icon": "",
        "category": ["grains"]
    },
    "biscuit": {
        "appliance": ["oven"],
        "ingredientCombos": [["flour", "milk", "salt", "sugar", "butter"]],
        "icon": "",
        "category": ["grains"]
    },

    // LIQUIDS
    "oil": {
        "appliance": ["oven"],
        "ingredientCombos": [["olive"], ["peanut"]],
        "icon": "",
        "category": ["liquids"]
    },
    "simple syrup": {
        "appliance": ["oven"],
        "ingredientCombos": [["water", "sugar"]],
        "icon": "",
        "category": ["liquids"]
    },
    "lemonade": {
        "appliance": ["fridge"],
        "ingredientCombos": [["simple syrup", "lemon"]],
        "icon": "",
        "category": ["liquids"]
    },
    "chocolate": {
        "appliance": ["oven"],
        "ingredientCombos": [["cocoa beans", "milk", "sugar"]],
        "icon": "",
        "category": ["liquids", "sweets"]
    },
    "caramel": {
        "appliance": ["oven"],
        "ingredientCombos": [["sugar", "cream", "butter"]],
        "icon": "",
        "category": ["liquids", "sweets"]
    },
    "coffee": {
        "appliance": ["oven"],
        "ingredientCombos": [["coffee beans", "water"]],
        "icon": "",
        "category": ["liquids"]
    },
    "latte": {
        "appliance": [undefined],
        "ingredientCombos": [["coffee", "milk"], ["coffee", "cream"]],
        "icon": "",
        "category": ["liquids"]
    },
    "mocha": {
        "appliance": [undefined],
        "ingredientCombos": [["coffee", "milk", "chocolate"], ["coffee", "cream", "chocolate"], ["latte", "chocolate"]],
        "icon": "",
        "category": ["liquids"]
    },

    // FERMENTS
    "vinegar": {
        "appliance": [undefined],
        "ingredientCombos": [["yeast", "bacteria", "sugar"]],
        "icon": "",
        "category": ["liquids", "ferments"]
    },

    // CONDIMENTS
    "strawberry jam": {
        "appliance": ["oven"],
        "ingredientCombos": [["strawberry", "sugar"]],
        "icon": "",
        "category": ["condiments"]
    },
    "peanut butter": {
        "appliance": [undefined],
        "ingredientCombos": [["peanut", "salt"]],
        "icon": "",
        "category": ["condiments"]
    },
    "mayonnaise": {
        "appliance": [undefined],
        "ingredientCombos": [["egg", "oil", "lemon"], ["egg", "oil", "vinegar"]],
        "icon": "",
        "category": ["condiments"]
    },
    "mustard": {
        "appliance": [undefined],
        "ingredientCombos": [["mustard seed", "vinegar"]],
        "icon": "",
        "category": ["condiments"]
    },
    "ranch": {
        "appliance": [undefined],
        "ingredientCombos": [["mayonnaise", "lemon"], ["sour cream", "lemon"]],
        "icon": "",
        "category": ["condiments"]
    },
    "alfredo sauce": {
        "appliance": ["oven"],
        "ingredientCombos": [["butter", "cream", "cheese", "garlic"]],
        "icon": "",
        "category": ["condiment"]
    },
    "tomato paste": {
        "appliance": ["oven"],
        "ingredientCombos": [["tomato", "oil"]],
        "icon": "",
        "category": ["condiment"]
    },
    "marinara sauce": {
        "appliance": ["oven"],
        "ingredientCombos": [["tomato paste", "onion", "garlic", "water"]],
        "icon": "",
        "category": ["condiment"]
    },


    // PASTRIES
    "pie crust": {
        "appliance": ["oven"],
        "ingredientCombos": [["flour", "salt", "butter", "water"]],
        "icon": "",
        "category": ["pastries"]
    },
    "pie filling": {
        "appliance": ["oven"],
        "ingredientCombos": [["sugar", "water"]],
        "icon": "",
        "category": ["pastries", "sweets"],
        "variants": {
            "apple": ["apple", "cinnamon"]
        },
        "canExistAlone": false
    },
    "pie": {
        "appliance": ["oven", undefined],
        "ingredientCombos": [["pie crust", "sugar", "water", "butter"]],
        "icon": "",
        "category": ["pastries", "sweets"],
        "variants": {
            "apple": ["pie crust", "apple pie filling"]
        },
        "canExistAlone": false
    },

    // SWEETS
    "caramel apple": {
        "appliance": ["oven", undefined],
        "ingredientCombos": [["apple", "caramel"]],
        "icon": "",
        "category": ["sweets"]
    },

    // BREAKFAST
    "toasted bread": {
        "appliance": ["oven"],
        "ingredientCombos": [["wheat bread"], ["sour dough bread"]],
        "icon": "",
        "category": ["breakfast", "grains"]
    },
    "toast": {
        "appliance": [undefined],
        "ingredientCombos": [["toasted bread"]],
        "icon": "",
        "category": ["breakfast"],
        "variants": {
            "jam": ["strawberry jam"],
            "buttered": ["butter"],
            "peanut butter": ["peanut butter"]
        },
        "canExistAlone": false
    },
    "pancake": {
        "appliance": [undefined],
        "ingredientCombos": [
            ["flour", "baking powder", "sugar", "milk", "butter", "egg"],
            ["flour", "baking powder", "sugar", "milk", "oil", "egg"],
        ],
        "icon": "",
        "category": ["breakfast"]
    },
    "omelette": {
        "appliance": [undefined],
        "ingredientCombos": [["cheese", "egg"]],
        "icon": "",
        "category": ["breakfast"]
    },

    // ENTREES
    "spaghetti": {
        "appliance": ["oven"],
        "ingredientCombos": [["marinara sauce", "pasta"]],
        "icon": "",
        "category": ["entrees"]
    },
    "taco": {
        "appliance": [undefined],
        "ingredientCombos": [
            ["taco shell", "sour cream", "lettuce", "cheese"], 
        ],
        "icon": "",
        "category": ["entrees"],
        "variants": {
            "chicken": ["chicken"],
            "beef": ["ground beef"]
        },
        "canExistAlone": false
    },
    "burrito": {
        "appliance": [undefined],
        "ingredientCombos": [
            ["tortilla", "sour cream", "lettuce", "cheese"], 
        ],
        "icon": "",
        "category": ["entrees"],
        "variants": {
            "chicken": ["chicken"],
            "beef": ["ground beef"]
        },
        "canExistAlone": false
    },
    "pizza": {
        "appliance": ["oven"],
        "ingredientCombos": [["marinara sauce", "cheese", "pizza dough"]],
        "icon": "",
        "category": ["entrees"]
    },
    "alfredo": {
        "appliance": ["oven"],
        "ingredientCombos": [["alfredo sauce", "pasta"]],
        "icon": "",
        "category": ["entrees"]
    },
    "pb&j sandwich": {
        "appliance": [undefined],
        "ingredientCombos": [["bread", "peanut butter", "strawberry jam"]],
        "icon": "",
        "category": ["entrees"]
    },
    "salad": {
        "appliance": [undefined],
        "ingredientCombos": [["lettuce", "cheese"]],
        "icon": "",
        "category": ["entrees"],
        "variants": {
            "caesar": ["lemon", "oil", "egg"],
            "house": ["ranch", "tomato"]
        },
        "canExistAlone": false
    },
    "burger": {
        "appliance": [undefined],
        "ingredientCombos": [["lettuce", "patty", "bun", "tomato"]],
        "icon": "",
        "category": ["entrees"],
        "variants": {
            "cheese": ["cheese"]
        },
        "canExistAlone": true
    },


    // SIDES
    "potato chips": {
        "appliance": ["oven"],
        "ingredientCombos": [["oil", "potato", "salt"]],
        "icon": "",
        "category": ["sides"]
    },
    "french fries": {
        "appliance": ["oven"],
        "ingredientCombos": [["oil", "potato", "salt"]],
        "icon": "",
        "category": ["sides"]
    },

    // PROTEINS
    "patty": {
        "appliance": ["oven"],
        "ingredientCombos": [["ground beef", "milk", "egg"]],
        "icon": "",
        "category": ["proteins"]
    }

}

const compileRecipes = (recipes) => {
    let newRecipes = {};
    for (let i = 0; i < Object.keys(recipes).length; i++) {
        let recipeKey = Object.keys(recipes)[i];
        let recipeVal = recipes[recipeKey];

        if (!recipeVal.hasOwnProperty("canExistAlone") && !recipeVal.hasOwnProperty("variants")) {
            // no variants, push to recipes
            newRecipes[recipeKey] = recipeVal;
        } else {
            // recipe has variants
            if (recipeVal.canExistAlone) {
                let newVal = {
                    "appliance": recipeVal.appliance,
                    "ingredientCombos": recipeVal.ingredientCombos,
                    "icon": recipeVal.icon,
                    "category": recipeVal.category
                }

                newRecipes[recipeKey] = newVal;
            }

            // variants
            if (recipeVal.variants) {
                for (let j = 0; j < Object.keys(recipeVal.variants).length; j++) {
                    let variantKey = Object.keys(recipeVal.variants)[j];
                    let variantVal = recipeVal.variants[variantKey];

                    let newVal = {
                        "appliance": recipeVal.appliance,
                        "ingredientCombos": recipeVal.ingredientCombos.map(combo => [...combo, ...variantVal]),
                        "icon": recipeVal.icon,
                        "category": recipeVal.category,
                        "parentRecipe": recipeKey
                    }

                    newRecipes[`${variantKey} ${recipeKey}`] = newVal;

                }
            }

        }

    }

    return newRecipes;
}

export const RECIPES = compileRecipes(RAW_RECIPES);

