import style from './Card.module.css';

const Card = (props) => {
    return (
        <div className={style.container}>
            <p>Name: {props.name} </p>
            <p>Email: {props.email} </p>
            <p>Phone: {props.phone} </p>
        </div>
    )
}
export default Card;