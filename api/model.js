const db = require('../data/db-config')

async function getRecipeById(recipe_id) {
    const recipeRows = await db('recipes as r')
        .leftJoin('steps as st', 'r.recipe_id', 'st.recipe_id')
        .where('r.recipe_id', recipe_id)
        .select('st.*', 'r.recipe_name', 'r.recipe_id', 'r.created_at')
        .orderBy('st.step_number')

    const result = {
        recipe_id: recipeRows[0].recipe_id,
        recipe_name: recipeRows[0].recipe_name,
        created_at: recipeRows[0].created_at,
        steps: []
    }

    recipeRows.forEach(row => {
        if (row.step_id) {
            result.steps.push({
                step_id: row.step_id,
                step_number: row.step_number,
                step_instructions: row.step_instructions
            })
        }
    })
    
    return result
}

module.exports = {
    getRecipeById
}