import style from './CardFood.module.css';
import { Link } from 'react-router-dom';

const CardFood = (props) => {
    return (
        <div className={style.container}>

            <h4 >Recipe</h4>
            <Link to={`/detail/${props.id}`} className={style.linkRecipe} >
                <p className={style.title}>{props.name}</p>
            </Link>
            <ul className={style.ul} >
                <li className={style.li}>
                    <p> {props.diets ? props.diets : props.Diets.map(el => el.name)}</p>
                </li>
            </ul>
            <Link to={`detail/${props.id}`}>
                <img className={style.imageFood} src={props.image} alt={props.name} />
            </Link>
        </div>
    )
}
export default CardFood;