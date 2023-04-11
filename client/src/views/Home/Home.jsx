import CardsConteiner from '../../components/CardsContainer/CardsContainer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../redux/actions';
import style from './Home.module.css';
import { FaHeart, FaFacebook, FaLinkedinIn, FaLinkedin, FaGithub, FaFile, FaInstagram, FaMailBulk, FaWhatsapp } from "react-icons/fa";
import felipe from '../images/felipe.jpg'
import { Link } from 'react-router-dom';

const Home = () => {
    //que haga el dispatch =>useDispatch
    const dispatch = useDispatch();
    //cuando se monta, useEffect()
    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    return (
        <div className={style.body}>
            <div className={style.gridContainer}>

                <header className={style.header}>
                    <h1>Proyecto individual HENRY FOOD</h1>
                </header>
                <nav className={style.navbar}>
                    <h4>Paginas desarrolladas por Felipe </h4>
                    <h5>Lista de paginas</h5>
                    <ul className={style.ul}>
                        <li className={style.li}><a className={style.a} href="https://propertyshop.top/">✔ Property Shop</a></li>
                        <li className={style.li}><a className={style.a} href="https://bienemico.com/">✔ Bienemico</a></li>
                        <li className={style.li}><a className={style.a} href="https://andeankhipu.com/">✔ Andean Khipus</a></li>
                        <li className={style.li}><a className={style.a} href="https://dancekickboxing.com/">✔ Dance Kick Boxing</a></li>
                        <li className={style.li}><a className={style.a} href="https://www.pachaincacuscotours.com/">✔ Pacha Inca Cusco Tours</a></li>
                        <li className={style.li}><a className={style.a} href="https://tripinkatown.com/">✔ Trip Inka Town</a></li>
                        <li className={style.li}><a className={style.a} href="https://imaginamultimedios.com/">✔ Imagina Multimedios</a></li>
                        <li className={style.li}><a className={style.a} href="https://corladcusco.org.pe/">✔ Colegio de administradores Cusco</a></li>
                        <li className={style.li}><a className={style.a} href="https://www.alfampsecurity.com/">✔ Alfa security</a></li>
                        <li className={style.li}><a className={style.a} href="https://www.andeantrip.com.pe/">✔ Andena Trip</a></li>
                        <li className={style.li}><a className={style.a} href="https://areosjoyeria.com/">✔ Areos Joyeria</a></li>
                        <li className={style.li}><a className={style.a} href="https://casaliz.pe/">✔ Casa liz Arquitectos</a></li>
                        <li className={style.li}><a className={style.a} href="https://cuscobungeejumping/">✔ Cusco Bungee Yamping</a></li>
                        <li className={style.li}><a className={style.a} href="https://inox.pe/">✔ Inox 304 acero inoxidable</a></li>
                        <li className={style.li}><a className={style.a} href="https://saludents.info/">✔ SaluDents Clinica Odontologica</a></li>
                        <li className={style.li}><a className={style.a} href="https://futuraproperty.pe/">✔ Futura Property Grupo Inmobiliario</a></li>

                    </ul>
                    <h4>Redes sociales:</h4>
                    <ul className={style.ulRedes}>
                        <li className={style.liRedes}><a className={style.aRedes} href="https://www.facebook.com/felipe.bermudezsaldivar.9" ><FaFacebook /></a></li>
                        <li className={style.liRedes}><a className={style.aRedes} href="https://www.linkedin.com/in/felipegerardobermudezsaldivar/" ><FaLinkedin /></a></li>
                        <li className={style.liRedes}><a className={style.aRedes} href="https://github.com/FelipeBermudezSaldivar" ><FaGithub /></a></li>
                        <li className={style.liRedes}><a className={style.aRedes} href="https://www.instagram.com/felipe_bs7/" ><FaInstagram /></a></li>
                    </ul>
                </nav>
                <aside className={style.aside}>
                    <h4>Menu</h4>
                    <Link to="/food">
                        <button className={style.button}>View Food</button>
                    </Link>
                    <Link to="/recipe-create">
                        <button className={style.button}>Recate Recipe</button>
                    </Link>
                </aside>
                <article className={style.article}>Developer
                    <h4>Ing. Felipe Bermudez Saldivar</h4>
                    <div className={style.conteinerArticle}>
                        <div className={style.left}>
                            <center> <img className={style.imageFelipe}
                                src={felipe}
                                alt="logo" /></center>
                        </div>
                        <div className={style.right}>
                            <p className={style.p}>Hola 👋 Mi nombre es Felipe soy Ing. de Sistemas e Informática y desarrollador Full Stack capacitado en el bootcamp de Henry donde me especialicé en tecnologías web tales como HTML, CSS, Javascript, React JS, Redux, Express, Node JS, Sequelize, PostgreSQL, Typescript, Mongo DB, entre otras.
                                También tengo conocimiento en MySQL, PHP, Laravel, WordPress, Diseño grafico, Diseño Audiovisual, Cpanel, Dominios, Certificados SSL entre otras.
                                Soy responsable, ordenado, puntual, competitivo en su justa medida y tengo capacidad para las relaciones interpersonales.
                                El hecho de haber apostado por el mundo de la programación hizo de mí una persona sumamente perseverante, soy un apasionado de la programación , abierto al cambio y con muchas ganas de seguir aprendiendo, perfeccionando así mis habilidades blandas y técnicas! </p>
                        </div>
                    </div>
                    <h4>Contactame:</h4>
                    <ul className={style.ulRedes}>
                        <li className={style.liRedes}><a className={style.aRedes} href="mailto:pcprotechnologymmf@gmail.com" ><FaMailBulk /></a></li>
                        <li className={style.liRedes}><a className={style.aRedes} href="https://wa.link/z0x14h" ><FaWhatsapp /></a></li>
                        <li className={style.liRedes}><a className={style.aRedes} href="https://www.linkedin.com/in/felipegerardobermudezsaldivar/" ><FaLinkedin /></a></li>
                    </ul>
                </article>
                <footer className={style.footer}>FOOTER</footer>
                {/* <CardsConteiner /> */}
            </div>
        </div>
    )

    {/* <div className={style.body}>


            <div className={style.gridContainer}>

                <header className={style.header}>HEADER</header>
                <nav className={style.navbar}>NAVBAR</nav>
                <aside className={style.aside}>ASIDE</aside>
                <article className={style.article}>MAIN
                </article>
                <footer className={style.footer}>FOOTER</footer>
                <CardsConteiner />
            </div>
        </div> */}


}
export default Home;
