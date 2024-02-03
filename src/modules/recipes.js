const RECIPES = {


    // DAIRY
    "cream": {
        "appliance": "fridge",
        "ingredientCombos": [["milk"]],
        "icon": "",
        "category": "dairy"
    },
    "butter": {
        "appliance": undefined,
        "ingredientCombos": [["cream", "salt"]],
        "icon": "",
        "category": "dairy"
    },
    "sour cream": {
        "appliance": "fridge",
        "ingredientCombos": [["milk", "cream"]],
        "icon": "",
        "category": "dairy"
    },
    "yogurt": {
        "appliance": "fridge",
        "ingredientCombos": [["milk", "sugar"]],
        "icon": "",
        "category": "dairy"
    },
    "strawberry yogurt": {
        "appliance": "fridge",
        "ingredientCombos": [["strawberry", "yogurt"], ["strawberry", "milk", "sugar"]],
        "icon": "",
        "category": "condiment"
    },
    "ice cream": {
        "appliance": "fridge",
        "ingredientCombos": [["cream", "sugar"]],
        "icon": "",
        "category": "dairy"
    },
    "strawberry ice cream": {
        "appliance": "fridge",
        "ingredientCombos": [["strawberry", "ice cream"], ["strawberry", "cream", "sugar"]],
        "icon": "",
        "category": "condiment"
    },
    "cheese": {
        "appliance": undefined,
        "ingredientCombos": [["milk", "salt"]],
        "icon": "",
        "category": "dairy"
    },


    // GRAINS
    "pasta": {
        "appliance": "oven",
        "ingredientCombos": [["flour", "egg", "salt", "oil"]],
        "icon": "",
        "category": "grain"
    },
    "bread": {
        "appliance": "oven",
        "ingredientCombos": [["flour", "water"]],
        "icon": "",
        "category": "grain"
    },
    "tortilla": {
        "appliance": "oven",
        "ingredientCombos": [["flour", "water", "salt"]],
        "icon": "",
        "category": "grain"
    },


    // CONDIMENTS
    "strawberry jam": {
        "appliance": "oven",
        "ingredientCombos": [["strawberry", "sugar"]],
        "icon": "",
        "category": "condiment"
    }

    

}

export default RECIPES;