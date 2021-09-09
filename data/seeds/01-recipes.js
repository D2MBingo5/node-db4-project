
exports.seed = function(knex, Promise) {
    return knex('recipes').insert([
        { recipe_name: 'Pickle in a Cup' },
        { recipe_name: 'Spaghetti' },
    ]);
};