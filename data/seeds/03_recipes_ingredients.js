
exports.seed = function(knex, Promise) {
  return knex('recipes_ingredients').insert([   
    { ingredient_id: 1,  recipe_id: 1 },
    { ingredient_id: 2,  recipe_id: 2 }
  ])
}
