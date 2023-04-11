import styles from "./SearchBar.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameRecipe } from "../../redux/actions";

export default function SearchBar() {
    const dispatch = useDispatch()
    const [name, setName] = useState("");

    function handlerInputChange(event) {
        event.preventDefault();
        setName(event.target.value);
        console.log(name)
    }

    function handlerSubmit(event) {
        event.preventDefault();
        dispatch(getNameRecipe(name))
    }

    return (
        <div className={styles.search} >
            <input className={styles.inputSearch}
                type="text"
                placeholder="Buscar ..."
                onChange={(e) => handlerInputChange(e)}
            />
            <button className={styles.buttonAdd}
                type="submit"
                onClick={(e) => handlerSubmit(e)}>Buscar</button>
        </div>
    )
}