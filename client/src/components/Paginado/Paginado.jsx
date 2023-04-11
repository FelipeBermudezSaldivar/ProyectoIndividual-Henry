
import style from './Paginado.module.css'
export default function Paginado({ recipes, recipesPerPage, paginado }) {

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(recipes / recipesPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div className={style.container}>
            <nav>
                <ul className={style.paginado}>
                    {pageNumbers.map((number) => {
                        return (
                            <li className={style.number} key={number}>
                                <a className={style.a} onClick={() => paginado(number)}> {number} </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}