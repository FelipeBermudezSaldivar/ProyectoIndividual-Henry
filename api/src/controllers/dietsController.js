const { Diet } = require("../db");
const axios = require('axios');
const { Op } = require("sequelize");
require('dotenv').config();
const {
    api_key
} = process.env;

const getAllDietsRaw = async () => {
    const apiDietsRaw = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${api_key}&addRecipeInformation=true&number=100`);
    //limpiamos los datos de la api luego agregamos al BDD
    cleanDietsArray(apiDietsRaw.data.results);
}

const resultsFunction = async (diets) => {
    for (let diet of diets) {
        await Diet.findOrCreate({ where: { name: diet } })
    }
};

const cleanDietsArray = async (arr) => {
    let diets = [];
    arr.forEach((elem) => {
        //obtenemos vegetarian luego concatenamos todo lo que tenga diets de cada objeto + vegetarian
        if (elem.vegetarian === true) diets = [...diets, Object.keys(elem).shift()];
        diets = [...diets, ...elem.diets]
    })

    //eliminamos repetidos
    diets = [...new Set(diets)];
    //ahora tenemos que agregar a la BDD
    return resultsFunction(diets);

}

const searchDietsByName = async (name) => {
    //traemos los diets de los 100 recetas de la api

    //obtenemos los datos de la BDD por name
    const dataBaseDiets = await Diet.findAll({
        where: {
            name: { [Op.iLike]: `%${name}%` }
        }
    })
    return [...dataBaseDiets];
}
const getAllDiets = async () => {
    getAllDietsRaw();
    const dataBaseDiets = await Diet.findAll();
    return [...dataBaseDiets];
}

module.exports = { searchDietsByName, getAllDiets };