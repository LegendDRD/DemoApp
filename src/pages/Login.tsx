import { useEffect, useState } from "react";
import axios from 'axios'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

export default function Login() {
    const nav = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [failedLogin, setFailedLogin] = useState(false);
    const [orgLogin, setOrgLogin] = useState(false);



    function validateForm() {

        return email.length > 0 && password.length > 0;

    }

    function userloginSubmit() {
        axios.post(`${process.env.REACT_APP_API_URL}/login`, { email, password })
            .then(function (response) {
                setFailedLogin(false);
                localStorage.setItem('Auth', response.data.accessToken);
                nav('/');
            })
            .catch(function (error) {
                setFailedLogin(true);
                console.log(error);
            });
    }

    function orgloginSubmit() {
        axios.post(`${process.env.REACT_APP_API_URL}/orglogin`, { email, password })
            .then(function (response) {
                setFailedLogin(false);
                localStorage.setItem('Auth', response.data.accessToken);
                nav('/orginisation');
            })
            .catch(function (error) {
                setFailedLogin(true);
                console.log(error);
            });
    }

    return (
        <>

            {(orgLogin) ?
                <> {/*ORG login */}

                    <h1>Org login</h1>
                    <span>email</span>
                    <input autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />

                    <span>password</span>
                    <input type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />

                    <button onClick={() => { orgloginSubmit(); }} disabled={!validateForm()} >Submit</button>

                    {(failedLogin) ? <span>Invalid login</span> : <></>}
                    <a onClick={() => { setOrgLogin(false) }}>Switch to User </a>
                </>
                :
                <>
                    {/*User login */}
                    <h1>User login</h1>
                    <span>email</span>
                    <input autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />

                    <span>password</span>
                    <input type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />

                    <button onClick={() => { userloginSubmit(); }} disabled={!validateForm()} >Submit</button>

                    {(failedLogin) ? <span>Invalid login</span> : <></>}

                    <a onClick={() => { setOrgLogin(true) }}>Switch to Org </a>
                </>
            }


        </>

    );
}