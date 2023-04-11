import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDiets, postRecipes } from "../../redux/actions";
import React, { useEffect, useState } from "react";
import style from "./RecipeCreate.module.css"

function validate(input) {
    let errors = {};
    /*  errors.name = !input.name ? "Se requiere un nombre" : errors.name; */
    if (!input.name) errors.name = "Ingrese titulo";
    if (!(/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i).test(input.image)) errors.image = "Se requiere una imagen jpg";
    if (!input.resumen_de_plato) errors.resumen_de_plato = "Se requiere un titulo";
    if (!(input.health_score < 101)) errors.health_score = "Health Score de 0 a 100";
    if (!input.paso_a_paso) errors.paso_a_paso = "Se requiere instrucciones de la receta";


    return errors;

}

const RecipeCreate = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const diets = useSelector((state) => state.diets)
    const [errors, setErrors] = useState({});

    const [input, setInput] = useState({
        name: "",
        image: "",
        resumen_de_plato: "",
        health_score: "",
        paso_a_paso: "",
        diets: []
    })

    const handlerChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
        console.log(input) // imprimo lo que guarda
    }

    const handlerSelect = (e) => {
        setInput({
            ...input,
            diets: [...input.diets, e.target.value]
        })
    }
    const handleDelete = (el) => {
        setInput({
            ...input,
            diets: input.diets.filter(element => element !== el)
        })
    }

    const handlerSubmit = (e) => {
        e.preventDefault();
        if (!Object.keys(errors).length) {
            dispatch(postRecipes(input))
            alert("Recipe creado !!")
            setInput({
                name: "",
                image: "",
                resumen_de_plato: "",
                health_score: "",
                paso_a_paso: "",
            })
            history.push('/food')
        } else {
            alert("Formulario incompleto")
        }

    }
    useEffect(() => {
        dispatch(getDiets())
    }, [dispatch]);

    return (
        <div className={style.conteinerCreate}>
            <div className={style.conteinerLeft}>
                <Link to="/food"><button className={style.buttonVolver} >Volver a Home</button></Link>
                <br></br>
                <span className={style.spanTitle} >One new experience in the FOOD CLUB</span>
                <h1 className={style.h1title} >Create to Recipe</h1>
            </div>
            <div className={style.conteinerRight}>
                <form className={style.conteinerForm} onSubmit={e => handlerSubmit(e)}>
                    <div className={style.contentForm} >
                        <label className={style.label}>Title the new recipe : </label>
                        <input className={style.input} type="text" onChange={e => handlerChange(e)} value={input.name} name="name" placeholder="Enter your name"></input>
                        {errors.name && (<span>{errors.name} </span>)}
                    </div>
                    <div className={style.contentForm}>
                        <label className={style.label}>Imagen : </label>
                        <input className={style.input} type="text" onChange={e => handlerChange(e)} value={input.image} name="image" placeholder="Enter your image"></input>
                        {errors.image && (<span>{errors.image} </span>)}
                    </div>
                    <div className={style.contentForm}>
                        <label className={style.label}>Resumen de plato : </label>
                        <input className={style.input} type="text" onChange={e => handlerChange(e)} value={input.resumen_de_plato} name="resumen_de_plato" placeholder="Enter summary the recipe"></input>
                        {errors.resumen_de_plato && (<span>{errors.resumen_de_plato} </span>)}
                    </div>
                    <div className={style.contentForm}>
                        <label className={style.label}>Health Score : </label>
                        <input className={style.input} type="number" onChange={e => handlerChange(e)} value={input.health_score} name="health_score" placeholder="Enter health Score the recipe"></input>
                        {errors.health_score && (<span>{errors.health_score} </span>)}
                    </div>
                    <div className={style.contentForm}>
                        <label className={style.label}>Paso a Paso : </label>
                        <input className={style.input} type="text" onChange={e => handlerChange(e)} value={input.paso_a_paso} name="paso_a_paso" placeholder="Enter the instructions the recipe"></input>
                        {errors.paso_a_paso && (<span>{errors.paso_a_paso} </span>)}
                    </div>
                    <select className={style.select} onChange={(e) => handlerSelect(e)} >
                        {diets.map(die => {
                            return (
                                <option key={die.id} value={die.id} >{die.name}</option>
                            )
                        })}
                    </select>
                    <button className={style.buttonEnviar} type="submit"> Crear receta</button>
                </form>
                {input.diets.map((el) =>
                    <div>
                        <p>
                            {el}
                        </p>
                        <button onClick={() => handleDelete(el)}> X </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default RecipeCreate;