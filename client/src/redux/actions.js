import axios from "axios";
export const GET_USERS = "GET_USERS";
export const GET_RECIPES = "GET_RECIPES";
export const FILTER_HEALTH_SCORE = "FILTER_HEALTH_SCORE";
export const FILTER_CREATED = "FILTER_CREATED";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_HEALTH_SCORE = "ORDER_BY_HEALTH_SCORE";
export const SEARCH_NAME = "SEARCH_NAME";
export const GET_DIETS = "GET_DIETS";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const GET_DETAIL = "GET_DETAIL";
export const FILTER_BY_DIET = "FILTER_BY_DIET";

export const getUsers = () => {
    return async function (dispatch) {
        const apiData = await axios.get("http://localhost:3001/user/");
        const users = apiData.data;
        dispatch({ type: GET_USERS, payload: users }
        );
    };
};
export const getRecipes = () => {
    return async function (dispatch) {
        const apiDataAndBDD = await axios("http://localhost:3001/recipes");
        const recipes = apiDataAndBDD.data;
        dispatch({ type: GET_RECIPES, payload: recipes });
    }
}
export function getNameRecipe(name) {
    return async function (dispatch) {
        try {
            const searchRecipe = await axios("http://localhost:3001/recipes?name=" + name)
            const searchRecipes = searchRecipe.data;
            dispatch({ type: SEARCH_NAME, payload: searchRecipes })
        } catch (error) {
            console.log("Recipe not found")
            /* alert("Recipe not found") */
        }
    }
}
export function getDiets() {
    return async function (dispatch) {
        const dataDietsRaw = await axios("http://localhost:3001/diets");
        const dataDiets = dataDietsRaw.data;
        dispatch({ type: GET_DIETS, payload: dataDiets })
    }
}
export function postRecipes(payload) {
    console.log(payload)
    return async function (dispatch) {
        const createRecipe = await axios.post("http://localhost:3001/recipes", payload);
        return createRecipe;
    }
}
export function filterRecipesHealthScore(payload) {
    return {
        type: FILTER_HEALTH_SCORE,
        payload
    }
}
export function filterCreated(payload) {
    return {
        type: FILTER_CREATED,
        payload
    }
}
export function filterByDiets(payload) {
    try {
        return {
            type: FILTER_BY_DIET,
            payload
        }
    } catch (error) {
        console.log(error)
    }

}
export function orderByName(payload) {
    return {
        type: ORDER_BY_NAME,
        payload
    }
}

export function orderByHealthScore(payload) {
    return {
        type: ORDER_BY_HEALTH_SCORE,
        payload
    }
}
export function getDetail(idRecipe) {
    return async function (dispatch) {
        try {

            const dataRecipes = await axios.get("http://localhost:3001/recipes/" + idRecipe)
            const dataRecipe = dataRecipes.data;
            return dispatch({ type: GET_DETAIL, payload: dataRecipe })
        } catch (error) {
            console.log(error)
            /* alert("Recipe not found") */
        }
    }
}


/* export const getUser = (id) => {
    return async function (dispatch) {
        const apiData = await axios(`https://jsonplaceholder.typicode.com/users/${id}`);
        const user = apiData.data;
        dispatch({ type: GET_USER, payload: user });
    }
}
export const filterBySource = () => {
    dispatch({ type: "FILTER_BY_NAME" })
} */
