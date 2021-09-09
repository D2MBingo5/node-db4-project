
exports.seed = function(knex, Promise) {
    return knex('step_ingredients').insert([
        { quantity: 1, ingredient_id: 1, step_id: 1 },
        { quantity: 1, ingredient_id: 2, step_id: 3 },
        { quantity: 1, ingredient_id: 3, step_id: 4 },
        { quantity: 0.5, ingredient_id: 4, step_id: 6 },
    ]);
};