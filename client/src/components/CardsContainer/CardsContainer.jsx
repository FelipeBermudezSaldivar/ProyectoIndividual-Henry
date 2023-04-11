
import Card from "../Card/Card";
import style from "./CardsConteiner.module.css";
import { useSelector } from "react-redux";

const CardsConteiner = () => {

    const users = useSelector(state => state.users);
    return (
        <div className={style.container}>
            {users.map(user => {
                return <Card
                    id={user.id}
                    name={user.name}
                    phone={user.phone}
                    email={user.email}
                />
            })}
        </div>
    )
}
export default CardsConteiner;