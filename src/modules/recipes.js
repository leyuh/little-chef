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
    "strawberry milk": {
        "appliance": [undefined, "fridge"],
        "ingredientCombos": [["milk", "strawberry"]],
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
    "vanilla ice cream": {
        "appliance": ["fridge"],
        "ingredientCombos": [["cream", "sugar", "vanilla beans"]],
        "icon": "",
        "category": ["dairy"]
    },
    "strawberry ice cream": {
        "appliance": ["fridge", undefined],
        "ingredientCombos": [["strawberry", "vanilla ice cream"], ["cream", "sugar", "strawberry"]],
        "icon": "",
        "category": ["dairy"]
    },
    "chocolate ice cream": {
        "appliance": ["fridge", undefined],
        "ingredientCombos": [["chocolate", "vanilla ice cream"], ["cream", "sugar", "chocolate"]],
        "icon": "",
        "category": ["dairy"]
    },
    "vanilla milkshake": {
        "appliance": ["fridge"],
        "ingredientCombos": [["vanilla icecream", "milk"]],
        "icon": "",
        "category": ["dairy"]
    },
    "strawberry milkshake": {
        "appliance": ["fridge"],
        "ingredientCombos": [["strawberry icecream", "milk"]],
        "icon": "",
        "category": ["dairy"]
    },
    "chocolate milkshake": {
        "appliance": ["fridge"],
        "ingredientCombos": [["chocolate icecream", "milk"]],
        "icon": "",
        "category": ["dairy"]
    },


    // GRAINS
    "bread": {
        "appliance": ["oven"],
        "ingredientCombos": [["flour", "water", "yeast"]],
        "icon": "",
        "category": ["grains"]
    },
    "toast": {
        "appliance": ["oven"],
        "ingredientCombos": [["bread"]],
        "icon": "",
        "category": ["grains"]
    },
    "tortilla": {
        "appliance": ["oven"],
        "ingredientCombos": [["flour", "water", "salt"]],
        "icon": "",
        "category": ["grains"]
    },
    "pasta": {
        "appliance": ["oven"],
        "ingredientCombos": [["flour", "egg", "salt", "oil"]],
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
    "bacteria": {
        "appliance": ["fermenter"],
        "ingredientCombos": [["sugar"]],
        "icon": "",
        "category": ["ferments"]
    },
    "yeast": {
        "appliance": ["fermenter"],
        "ingredientCombos": [["flour", "water"]],
        "icon": "",
        "category": ["ferments"]
    },
    "vinegar": {
        "appliance": ["fermenter"],
        "ingredientCombos": [["yeast", "sugar"]],
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
    "spaghetti sauce": {
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
    "apple pie filling": {
        "appliance": ["oven"],
        "ingredientCombos": [["apple", "sugar", "water", "butter", "cinnamon"]],
        "icon": "",
        "category": ["pastries", "sweets"]
    },
    "apple pie": {
        "appliance": ["oven", undefined],
        "ingredientCombos": [["pie crust", "apple pie filling"]],
        "icon": "",
        "category": ["pastries", "sweets"]
    },

    // SWEETS
    "caramel apple": {
        "appliance": ["oven", undefined],
        "ingredientCombos": [["apple", "caramel"]],
        "icon": "",
        "category": ["sweets"]
    },

    // MEALS
    "spaghetti": {
        "appliance": ["oven"],
        "ingredientCombos": [["spaghetti sauce", "pasta"]],
        "icon": "",
        "category": ["meals"]
    },
    "alfredo": {
        "appliance": ["oven"],
        "ingredientCombos": [["alfredo sauce", "pasta"]],
        "icon": "",
        "category": ["meals"]
    },
    "pb&j sandwich": {
        "appliance": [undefined],
        "ingredientCombos": [["bread", "peanut butter", "strawberry jam"]],
        "icon": "",
        "category": ["meals"]
    },
    "peanut butter toast": {
        "appliance": [undefined],
        "ingredientCombos": [["peanut butter", "toast"]],
        "icon": "",
        "category": ["meals"]
    },
    "jam toast": {
        "appliance": [undefined],
        "ingredientCombos": [["strawberry jam", "toast"]],
        "icon": "",
        "category": ["meals"]
    },
    "house salad": {
        "appliance": [undefined],
        "ingredientCombos": [["lettuce", "ranch", "cheese", "tomato"]],
        "icon": "",
        "category": ["meals"]
    },
    "caesar salad": {
        "appliance": [undefined],
        "ingredientCombos": [["lettuce", "lemon", "oil", "egg", "cheese"]],
        "icon": "",
        "category": ["meals"]
    },
    "hamburger": {
        "appliance": [undefined],
        "ingredientCombos": [["lettuce", "cheese", "hamburger patty", "bun", "tomato"]],
        "icon": "",
        "category": ["meals"]
    },

    // SIDES
    "french fries": {
        "appliance": ["oven"],
        "ingredientCombos": [["oil", "potato", "salt"]],
        "icon": "",
        "category": ["sides"]
    },

    // PROTEINS
    "hamburger patty": {
        "appliance": ["oven"],
        "ingredientCombos": [["ground beef", "milk", "egg"]],
        "icon": "",
        "category": ["proteins"]
    }

}

export default RECIPES;