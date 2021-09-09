
exports.seed = function(knex, Promise) {
    return knex('ingredients').insert([
        { ingredient_name: 'Pickle' },
        { ingredient_name: 'Water' },
        { ingredient_name: 'Spaghetti Pasta' },
        { ingredient_name: 'Tomato Sauce' },
    ]);
};