const Recipes = require('./model')

const router = require('express').Router()

router.get('/:recipe_id', (req, res, next) => {
    Recipes.getRecipeById(req.params.recipe_id)
        .then(r => {
            res.status(200).json(r)
        })
        .catch(next)
})

module.exports = router