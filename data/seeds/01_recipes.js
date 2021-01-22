
exports.seed = function(knex, Promise) {
  return knex('recipes').insert([   
    { recipe_name: 'Zucchini Pumpkin Oat Bars' },
    { recipe_name: 'Spaghetti Squash Lasagna' }
  ])
}
