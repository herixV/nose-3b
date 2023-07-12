
import "./login.css"
import React from "react"
import { singup } from "../../service/firebase/auth"


function login() {

    const [state, setState] = React.useState({
        email: "",
        password: "",
        confirmPassword: "",
        displayName: ""
    })

    function onChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        setState({
            ...state,
            [name]: value
        })
    }

    function onRegister() {
        const {email, password, displayName} = state;
        if (confirmPassword === password){
            const sendable = {
                email,
                password,
                displayName
            }
            singup(sendable)
        }
        else {
            alert ("las contraeñas no coinciden")
        }
    }

    return (
        <div className="container">
            <form onSubmit={onRegister} style={{
                display: "flex",
                flexDirection: "column"
            }}>
            <input required={onChange} name="email" type="email" value={state.email} />
            <input required={onChange} name="password" type="password" value={state.password} />
            <input required={onChange} name="confirmpassword" type="password" value={state.confirmPassword} />
            <input required={onChange} name="displayName" type="text" value={state.displayName} />
            <button type="submit"> registrarse</button>
            </form>
        </div>
    )
}

export default login;
// nose asta aca me quede creo (moento de perdida lunes 3. pedir asesoria :c)