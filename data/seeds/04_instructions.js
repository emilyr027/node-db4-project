
exports.seed = function(knex, Promise) {
  return knex('instructions').insert([   
    { recipes_ingredients_id: 1, quantity: 2, step: 1, instructions_info: 'Grate the zucchini and combine with the can of pumpkin, 16 oz egg whites, and oats. Blend with hand blender. Bake at 350 degrees for 60 minutes.' },
    { recipes_ingredients_id: 2, quantity: 3, step: 2, instructions_info: 'Grate the zucchini and combine with the can of pumpkin, 16 oz egg whites, and oats. Blend with hand blender. Bake at 350 degrees for 60 minutes.' }
  ])
}
