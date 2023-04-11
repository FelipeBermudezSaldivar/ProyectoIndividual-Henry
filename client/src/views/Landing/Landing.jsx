import { Link } from 'react-router-dom';
import style from './Landing.module.css';
const Landing = () => {
    return (
        <div className={style.container}>
            <h1>Bienvenido a The food Club</h1>
            <span>Agregar Login</span>
            <span>Agregar map</span>
            <span>Agregar promociones</span>
            <br />

            <Link to="/FelipeBermudez" >
                <button className={style.button}> Ir al Home</button>
            </Link>

        </div>
    )
}
export default Landing;