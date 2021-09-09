
exports.up = async function(knex) {
  await knex.schema
    .createTable('recipes', table => {
        table.increments('recipe_id')
    })
    .createTable('steps', table => {
        table.increments('step_id')
    })
    .createTable('ingredients', table => {
        table.increments('ingredient_id')
    })
    .createTable('step_ingredients', table => {
        table.increments('quantity_id')
    })
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')
};
