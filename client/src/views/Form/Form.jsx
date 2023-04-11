import { useState } from "react";
import axios from "axios";
import styles from "./Form.module.css"

const Form = () => {

    const [form, setForm] = useState({
        email: "",
        name: "",
        phone: "",

    })

    const [errors, setErrors] = useState({
        email: "",
        name: "",
        phone: ""
    })
    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        validate({ ...form, [property]: value })

        setForm({ ...form, [property]: value })


    }
    const validate = (form) => {
        if (test(form.email)) {
            setErrors({ ...errors, email: "" })
        } else {
            setErrors({ ...errors, email: "Tiene un error el email" })
        }
        if (form.email === "") setErrors({ ...errors, email: "Email vacio" })
    }
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(form)
        alert("apretado el boton")
        axios.post("http://localhost:3001/user", form)
            .then(res => alert(res))
            .catch(err => alert(err))

    }

    return (
        <div className={styles.conteinerCreate} >
            <div>

            </div>
            <div>


                <form onSubmit={submitHandler}>
                    <div>
                        <label>Email: </label>
                        <input type="text" value={form.email} onChange={changeHandler} name="email" />
                        {errors.email && <span>{errors.email} </span>}
                    </div>
                    <div>
                        <label>Name: </label>
                        <input type="text" value={form.name} onChange={changeHandler} name="name" />
                    </div>
                    <div>
                        <label>Phone: </label>
                        <input type="text" value={form.phone} onChange={changeHandler} name="phone" />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>

    )
}
export default Form;