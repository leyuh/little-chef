const RECIPES = {


    // DAIRY
    "butter": {
        "appliance": [undefined],
        "ingredientCombos": [["cream", "salt"]],
        "icon": "",
        "category": ["dairy"]
    },
    "cream": {
        "appliance": ["fridge"],
        "ingredientCombos": [["milk"]],
        "icon": "",
        "category": ["dairy"]
    },
    "sour cream": {
        "appliance": ["fridge"],
        "ingredientCombos": [["bacteria", "cream"], ["vinegar", "cream"]],
        "icon": "",
        "category": ["dairy"]
    },
    "chocolate milk": {
        "appliance": [undefined, "fridge"],
        "ingredientCombos": [["milk", "chocolate"]],
        "icon": "",
        "category": ["dairy", "liquids"]
    },
    "cheese": {
        "appliance": [undefined],
        "ingredientCombos": [["milk", "salt"]],
        "icon": "",
        "category": ["dairy"]
    },
    "yogurt": {
        "appliance": ["oven", "fridge"],
        "ingredientCombos": [["milk", "bacteria"]],
        "icon": "",
        "category": ["dairy"]
    },
    "strawberry yogurt": {
        "appliance": ["fridge", undefined],
        "ingredientCombos": [["strawberry", "yogurt"]],
        "icon": "",
        "category": ["dairy"]
    },
    "ice cream": {
        "appliance": ["fridge"],
        "ingredientCombos": [["cream", "sugar"]],
        "icon": "",
        "category": ["dairy"]
    },
    "strawberry ice cream": {
        "appliance": ["fridge", undefined],
        "ingredientCombos": [["strawberry", "ice cream"]],
        "icon": "",
        "category": ["dairy"]
    },
    "chocolate ice cream": {
        "appliance": ["fridge", undefined],
        "ingredientCombos": [["chocolate", "ice cream"]],
        "icon": "",
        "category": ["dairy"]
    },


    // GRAINS
    "bread": {
        "appliance": ["oven"],
        "ingredientCombos": [["flour", "water", "yeast"]],
        "icon": "",
        "category": ["grain"]
    },
    "toast": {
        "appliance": ["oven"],
        "ingredientCombos": [["bread"]],
        "icon": "",
        "category": ["grain"]
    },
    "tortilla": {
        "appliance": ["oven"],
        "ingredientCombos": [["flour", "water", "salt"]],
        "icon": "",
        "category": ["grain"]
    },
    "pasta": {
        "appliance": ["oven"],
        "ingredientCombos": [["flour", "egg", "salt", "oil"]],
        "icon": "",
        "category": ["grain"]
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
        "category": ["liquids"]
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
    "bacteria": {
        "appliance": ["fermenter"],
        "ingredientCombos": [["sugar"]],
        "icon": "",
        "category": ["ferment"]
    },
    "yeast": {
        "appliance": ["fermenter"],
        "ingredientCombos": [["flour", "water"]],
        "icon": "",
        "category": ["ferment"]
    },
    "vinegar": {
        "appliance": ["fermenter"],
        "ingredientCombos": [["yeast", "sugar"]],
        "icon": "",
        "category": ["liquids", "ferment"]
    },

    // CONDIMENTS
    "strawberry jam": {
        "appliance": ["oven"],
        "ingredientCombos": [["strawberry", "sugar"]],
        "icon": "",
        "category": ["condiment"]
    },
    "peanut butter": {
        "appliance": [undefined],
        "ingredientCombos": [["peanut", "salt"]],
        "icon": "",
        "category": ["condiment"]
    },
    "mayonnaise": {
        "appliance": [undefined],
        "ingredientCombos": [["egg", "oil", "lemon"], ["egg", "oil", "vinegar"]],
        "icon": "",
        "category": ["condiment"]
    },
    "mustard": {
        "appliance": [undefined],
        "ingredientCombos": [["mustard seed", "vinegar"]],
        "icon": "",
        "category": ["condiment"]
    },
    "ranch": {
        "appliance": [undefined],
        "ingredientCombos": [["mayonnaise", "lemon"], ["sour cream", "lemon"]],
        "icon": "",
        "category": ["condiment"]
    },


}

export default RECIPES;