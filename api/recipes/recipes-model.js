const db = require('./db-config')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes')
}

function getShoppingList(recipe_id) {
    return db('recipes_ingredients')
    .join('ingredients')
    .join('instructions')
    .select('instructions.quantity', 'ingredients.ingredient_name')
    .where({recipe_id})
}

function getInstructions(recipe_id) {
    return db('instructions')
    .select('*')
    .where(recipe_id)
}