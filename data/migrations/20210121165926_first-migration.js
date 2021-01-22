
exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments()
      tbl.string('recipe_name', 128).notNullable().unique()
    })
    .createTable('ingredients', tbl => {
      tbl.increments()
      tbl.string('ingredient_name', 128).notNullable().unique()
    })
    .createTable('recipes_ingredients', tbl => {
        tbl.increments()
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onDelete('CASCADE')
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onDelete('CASCADE')
      })
      .createTable('instructions', tbl => {
        tbl.increments()
        tbl.integer('recipes_ingredients_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes_ingredients')
            .onDelete('CASCADE')
        tbl.float('quantity').notNullable()
        tbl.integer('step').notNullable()
        tbl.string('instructions_info', 500).notNullable()
      })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('instructions')
        .dropTableIfExists('recipes_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
};
