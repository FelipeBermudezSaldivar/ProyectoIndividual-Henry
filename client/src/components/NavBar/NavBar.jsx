import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import style from "./NavBar.module.css";
const NavBar = () => {
    return (
        <div className={style.mainConteiner}>
            <nav className={style.nav} >
                <Link to="/FelipeBermudez" className={style.button}><a className={style.a}>Developer❤️</a></Link>
                <Link to="/food" className={style.button}><a className={style.a}>Food</a></Link>
                <Link to="/create" className={style.button}><a className={style.a}>Form</a></Link>
                <Link to="/recipe-create" className={style.button}><a className={style.a}>Create Recipe</a></Link>
                <SearchBar />
            </nav>
        </div>
    )
}
export default NavBar;