
exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([   
    { ingredient_name: 'Zucchini' },
    { ingredient_name: 'Eggs' }
  ])
}
