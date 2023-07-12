'use client'
import "./login.css"
import { login } from "../../service/firebase/auth"
import React from "react"

export default function loginp() {

    const [state, setState] = React.useState({
        email: "",
        password: ""
    })

    function onChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        setState({
            ...state,
            [name]: value
        })
    }

    function onLogin() {
        const {email, password} = state;
        login (email, password)
    }

    return (
        <div className="container">
            <input onChange={onChange} name="email" type="text" value={state.email} />
            <input onChange={onChange} name="password" type="password" value={state.password} />
            <button onClick={onLogin}>login</button>
        </div>
    )
}
