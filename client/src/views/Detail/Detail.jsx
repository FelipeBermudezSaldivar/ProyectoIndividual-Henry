import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetail } from "../../redux/actions";

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();



    useEffect(() => {
        /*  dispatch(getDetail(id)) */
        dispatch(getDetail(id))
    }, [dispatch, id])
    const myRecipe = useSelector((state) => state.detail)

    return (
        <div>
            <h1>estamos en el detail</h1>
            {
                myRecipe.length === 0 ?
                    <div>
                        <p>{id}Loading...  </p>
                    </div> : <div>
                        <h1> Soy {myRecipe?.name} </h1>
                        <img src={myRecipe?.image} />
                        <p dangerouslySetInnerHTML={{ __html: myRecipe?.resumen_de_plato }}></p>
                        <h2> Health Score : {myRecipe?.health_score} </h2>
                        <h2> Diets: {myRecipe.created === false ? myRecipe.diets + " " : myRecipe.Diets.map(el => el.name + (" "))} </h2>
                        <h2>Paso a paso:{myRecipe.paso_a_paso.steps} </h2>
                    </div>
            }
            <Link to="/food">
                <button>Volver</button>
            </Link>
        </div>
    )
}
export default Detail;