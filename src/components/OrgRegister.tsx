import axios from 'axios';
import { useState } from 'react'
import { Navigate, useNavigate, NavLink } from 'react-router-dom';

export default function OrgRegister() {
    const nav = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [failedLogin, setFailedLogin] = useState(false);
    const [reg, setReg] = useState(false);

    function orgRegSubmit() {
        axios.post(`${process.env.REACT_APP_API_URL}org/register`, { email, password, name })
            .then(function (response) {
                setFailedLogin(false);
                // localStorage.setItem('Auth', response.data.accessToken);
                // nav('/login');
                setReg(true);
            })
            .catch(function (error) {
                setFailedLogin(true);
                console.log(error);
            });
    }

    function validateForm() {

        return email.length > 0 && password.length > 0 && name.length > 0;

    }

    return (
        <>
            <div>Org Register</div>

            <span>email</span>
            <input autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />

            <span>password</span>
            <input type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />

            <span>orgname</span>
            <input type="name"
                value={name}
                onChange={(e) => setName(e.target.value)} />

            <button onClick={() => { orgRegSubmit(); }} disabled={!validateForm()} >Submit</button>

            {(failedLogin) ? <span>Invalid details</span> : <></>}

            {/* {(reg) ? <NavLink to='/orginisation'><span>Reg successful</span></NavLink> : <></>} */}
        </>
    )
}


