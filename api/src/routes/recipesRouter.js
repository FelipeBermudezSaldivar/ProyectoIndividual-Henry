const { Router } = require('express');
const { createRecipesHandler, getRecipesHandlers, getRecipesHandlerId } = require('../handlers/recipesHandler')

const recipesRouter = Router();
recipesRouter.post('/', createRecipesHandler)
recipesRouter.get('/', getRecipesHandlers)
recipesRouter.get('/:idRecipe', getRecipesHandlerId);
module.exports = recipesRouter;