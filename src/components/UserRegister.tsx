import axios from 'axios';
import { useState } from 'react'
import { Navigate, useNavigate, NavLink } from 'react-router-dom';

export default function UserRegister() {
    const nav = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [mobile_no, setMobile_no] = useState("");
    const [residence, setResidence] = useState("");
    const [country, setCountry] = useState("");

    const [failedLogin, setFailedLogin] = useState(false);
    const [reg, setReg] = useState(false);

    function userRegSubmit() {
        axios.post(`${process.env.REACT_APP_API_URL}users/register`, { email, password, name, surname, mobile_no, residence, country })
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
            <div>User Register</div>

            <span>name</span>
            <input type="name"
                value={name}
                onChange={(e) => setName(e.target.value)} />

            <span>surname</span>
            <input type="surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)} />

            <span>mobile_no</span>
            <input type="mobile_no"
                value={mobile_no}
                onChange={(e) => setMobile_no(e.target.value)} />

            <span>residence</span>
            <input type="residence"
                value={residence}
                onChange={(e) => setResidence(e.target.value)} />

            <span>country</span>
            <input type="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)} />

            <span>email</span>
            <input autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />

            <span>password</span>
            <input type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />


            <button onClick={() => { userRegSubmit(); }} disabled={!validateForm()} >Submit</button>

            {(failedLogin) ? <span>Invalid details</span> : <></>}

            {/* {(reg) ? <NavLink to='/orginisation'><span>Reg successful</span></NavLink> : <></>} */}
        </>
    )
}


