import { useEffect, useState } from "react";
import axios from 'axios'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

export default function Login() {
    const nav = useNavigate();
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [failedLogin, setFailedLogin] = useState(false);
    const [logIn, setLogIn] = useState(false);

    function validateForm() {

        return email.length > 0 && password.length > 0;

    }

    function loginSubmit() {
        axios.post(`${process.env.REACT_APP_API_URL}/login`, { email, password })
            .then(function (response) {
                setFailedLogin(false);
                localStorage.setItem('Auth', response.data.accessToken);
                nav('/');
                setLogIn(true)
            })
            .catch(function (error) {
                setFailedLogin(true);
                console.log(error);
            });
    }


    return (
        <>
            <span>email</span>
            <input autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />

            <span>password</span>
            <input type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />

            <button onClick={() => { loginSubmit(); }} disabled={!validateForm()} >Submit</button>

            {(failedLogin) ? <span>Invalid login</span> : <></>}


        </>

    );
}