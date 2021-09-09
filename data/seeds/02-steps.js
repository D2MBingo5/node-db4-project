
exports.seed = function(knex, Promise) {
    return knex('steps').insert([
        { recipe_id: 1, step_number: 1, 
            step_instructions: 'Grab pickle' },
        { recipe_id: 1, step_number: 2, 
            step_instructions: 'Put pickle in cup' },
        { recipe_id: 1, step_number: 1, 
            step_instructions: 'Add 1 cup of water to pot on high heat' },
        { recipe_id: 1, step_number: 2, 
            step_instructions: 'Add 1 box of spaghetti pasta to boiling water' },
        { recipe_id: 1, step_number: 3, 
            step_instructions: 'Drain water and put cooked pasta on plate' },
        { recipe_id: 1, step_number: 4, 
            step_instructions: 'Add 1/2 cup of tomato sauce to top of pasta' },
    ]);
};