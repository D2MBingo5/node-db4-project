const Recipes = require('./model')

const router = require('express').Router()

router.get('/:recipe_id', (req, res, next) => {
    Recipes.getRecipeById(req.params.recipe_id)
        .then(r => {
            res.status(200).json(r)
        })
        .catch(next)
})

router.use('*', (req, res, next) => { // eslint-disable-line
    res.json({ api: 'up' })
})

module.exports = router