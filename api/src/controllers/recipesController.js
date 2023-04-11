const { Recipe, Diet } = require("../db")
const axios = require('axios');
const { Op } = require("sequelize");
require('dotenv').config();
const {
    api_key
} = process.env;

const cleanArrayById = (arrFilter) => {
    const { id, title, image, summary, healthScore, diets, analyzedInstructions } = arrFilter;
    return {
        id: id,
        name: title,
        image: image,
        resumen_de_plato: summary,
        health_score: healthScore,
        diets: diets.map(diets => diets),
        paso_a_paso: analyzedInstructions.map(i => i),
        created: false

    }
}
const cleanArray = (arr) =>
    arr.map(elem => {
        return {
            id: elem.id,
            name: elem.title,
            image: elem.image,
            resumen_de_plato: elem.summary,
            health_score: elem.healthScore,
            diets: elem.diets.map(diets => diets),
            paso_a_paso: elem.analyzedInstructions.map(i => i),
            created: false
        };
    });

const getRecipesById = async (idRecipe, source) => {

    //
    if (source === "api") {
        const apiRecipeRaw = await axios(`https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${api_key}&addRecipeInformation=true`)
        const apiRecipes = cleanArrayById(apiRecipeRaw.data);
        return apiRecipes;
    } else {
        const dataBaseRecipes = await Recipe.findByPk(idRecipe, {
            include: {
                model: Diet,
                attributes: ["id", "name"],
                through: {
                    attributes: [],
                }
            }
        });
        return dataBaseRecipes;
    }
    /*  const recipe =
         source === "api"
             ? (await axios(`https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${api_key}&addRecipeInformation=true`)).data
             : await Recipe.findByPk(idRecipe);
     return recipe; */
}

const createRecipes =
    async (name, image, resumen_de_plato, health_score, paso_a_paso) =>
        await Recipe.create({ name, image, resumen_de_plato, health_score, paso_a_paso });

const searchRecipesByName = async (name) => {
    //obtenemos los datos de la base de datos si nos llega un query
    const dataBaseRecipes = await Recipe.findAll({
        where: {
            name: { [Op.iLike]: `%${name}%` }
        },
        include: {
            model: Diet,
            attributes: ["id", "name"],
            through: {
                attributes: [],
            }
        }

    })
    //traemos los usuarios de la api
    const apiRecipesRaw = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${api_key}&addRecipeInformation=true&number=100`);

    const apiRecipes = cleanArray(apiRecipesRaw.data.results);
    //usamos un filter para buscar por name

    const filterApi = apiRecipes.filter((filt) => filt.name.toLowerCase().includes(name.toLocaleLowerCase()));
    /* const filterApi = apiRecipes.filter((filt) => filt.name === name); */

    //retornamos lo arreglos concatenados

    return [...dataBaseRecipes, ...filterApi]

}
const getAllRecipes = async () => {
    //buscar en BDD
    const dataBaseRecipes = await Recipe.findAll(
        {
            include: {
                model: Diet,
                attributes: ["id", "name"],
                through: {
                    attributes: [],
                }
            }
        });
    //traer los datos de la api
    const apiRecipesRaw = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${api_key}&addRecipeInformation=true&number=100`);
    const apiRecipes = cleanArray(apiRecipesRaw.data.results);

    return [...dataBaseRecipes, ...apiRecipes]

}

module.exports = { createRecipes, getRecipesById, searchRecipesByName, getAllRecipes }