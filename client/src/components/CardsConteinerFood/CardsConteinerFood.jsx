import CardFood from "../CardFood/CardFood";
import style from './CardsConteinerFood.module.css'
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Paginado from "../Paginado/Paginado";
import { Link } from "react-router-dom";
import { filterByDiets, filterCreated, filterRecipesHealthScore, getDiets, getRecipes, orderByHealthScore, orderByName } from "../../redux/actions";
import { useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";

const CardsConteinerFood = () => {

    const viewRecipes = 9;

    const dispatch = useDispatch();
    const diets = useSelector((state) => state.diets)
    const recipes = useSelector(state => state.recipes)
    const [currentPage, setCurrentPage] = useState(1);//mi pagina inicial comienza 1
    const [orden, setOrden] = useState('');
    const [recipesPerPage, setRecipePerPage] = useState(viewRecipes);//cuantos personje spor pagina requiero
    const indexOfLastRecipe = currentPage * recipesPerPage; //1*9 = 9
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;//0
    const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getRecipes())
        dispatch(getDiets())
    }, [dispatch])

    function handleClick(event) {
        event.preventDefault();//puede que no pase nada y no se recargue la pagina
        dispatch(getRecipes());
    }

    function handlerFilterHealthScore(event) {
        dispatch(filterRecipesHealthScore(event.target.value))
    }
    function handlerFilterDiets(event) {
        dispatch(filterByDiets(event.target.value))
    }

    function handlerCreated(event) {
        dispatch(filterCreated(event.target.value))
    }
    function handlerViewRecipes(event) {
        viewRecipes = event.target.value;
        console.log(viewRecipes)
    }
    function handlerSord(event) {
        event.preventDefault();
        dispatch(orderByName(event.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${event.target.value}`)
    }
    function handlerSordHealth(event) {
        event.preventDefault();
        dispatch(orderByHealthScore(event.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado por Health Score ${event.target.value}`);
    }


    return (
        <div className={style.container} >
            <Link to="/recipe-create"><button className={style.buttonHeader}>Crear Recipe</button> </Link>
            <button className={style.buttonHeader} onClick={event => { handleClick(event) }}>Volver a cargar recipes</button>
            <Paginado
                recipesPerPage={recipesPerPage}
                recipes={recipes.length}
                paginado={paginado}
            />
            <div className={style.conteinerFilter}>
                <div>
                    <div>
                        <span className={style.conteinerSpam}>   Ordenar:  </span>
                        <select className={style.conteinerSelect} onChange={e => handlerSord(e)}>
                            <option value="asc">Ascendente</option>
                            <option value="desc">Descendente</option>
                        </select>
                        <span className={style.conteinerSpam}>  Filtrar por Diets : </span>
                        <select className={style.conteinerSelect} onChange={e => handlerFilterDiets(e)}>
                            {diets.map(die => {
                                return (
                                    <option key={die.id} value={die.name}> {die.name} </option>
                                )
                            })}
                        </select>

                        <span className={style.conteinerSpam}>  Filter recipes por: </span>
                        <select className={style.conteinerSelect} onChange={e => handlerCreated(e)}>
                            <option value="all"> Todos </option>
                            <option value="created"> Creados </option>
                            <option value="api"> Api </option>
                        </select>
                        <span className={style.conteinerSpam}>  Filtrar por Health Score: </span>
                        <select className={style.conteinerSelect} onChange={e => handlerSordHealth(e)}>
                            <option value="asc"> Menor health score </option>
                            <option value="desc"> Mayor health score </option>
                        </select>
                        <span className={style.conteinerSpam}>  Traer recetas: </span>
                        <select className={style.conteinerSelect} onChange={e => handlerViewRecipes(e)}>
                            <option value="9"> 9 </option>
                            <option value="15"> 15 </option>
                            <option value="30"> 30 </option>
                        </select>
                    </div>
                </div>

            </div>
            <div className={style.containerFood}>
                {
                    currentRecipes.map(recipe => {
                        return <CardFood
                            key={recipe.id}
                            id={recipe.id}
                            name={recipe.name}
                            image={recipe.image}
                            diets={recipe.created === false ? recipe.diets : recipe.Diets.map(el => el.name)}
                            resumen_de_plato={recipe.resumen_de_plato}
                            paso_a_paso={recipe.paso_a_paso}
                            health_score={recipe.health_score}
                        />
                    })
                }
            </div>
        </div>
    )
}
export default CardsConteinerFood;
/* diets = { recipe.Diets ? recipe.Diets : recipe.Diets.name } */