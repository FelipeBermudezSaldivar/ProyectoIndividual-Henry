
const { createRecipes, getRecipesById, searchRecipesByName, getAllRecipes } = require('../controllers/recipesController');


const createRecipesHandler = async (req, res) => {
    try {
        const { name, image, resumen_de_plato, health_score, paso_a_paso, diets } = req.body;
        const newRecipes = await createRecipes(name, image, resumen_de_plato, health_score, paso_a_paso);
        await newRecipes.addDiets(diets);
        res.status(200).json(newRecipes);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}
const getRecipesHandlers = async (req, res) => {
    const { name } = req.query;
    try {
        const results = name ? await searchRecipesByName(name) : await getAllRecipes();
        if (results.length === 0) res.status(200).json("No results found")
        res.status(200).json(results);
    } catch (error) {
        res.status(400).json()
    }

}
const getRecipesHandlerId = async (req, res) => {
    const { idRecipe } = req.params;
    const source = isNaN(idRecipe) ? "bdd" : "api";
    try {
        //mandamos por parametro y donde buscara
        const recipes = await getRecipesById(idRecipe, source);
        res.status(200).json(recipes);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}
module.exports = {
    createRecipesHandler,
    getRecipesHandlers,
    getRecipesHandlerId
}