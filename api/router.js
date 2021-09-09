const Recipes = require('./model')

const router = require('express').Router()

router.get('/:recipe_id', (req, res, next) => {
    const { recipe_id } = req.params


})

module.exports = router