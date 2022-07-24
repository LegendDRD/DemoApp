import axios from 'axios';
import { useState } from 'react'
import { Navigate, useNavigate, NavLink } from 'react-router-dom';

// styled components
import { CenterDiv } from "../styledComponents/centerDiv";
import { Input } from "../styledComponents/inputs";
import { TenSpacer } from "../styledComponents/tenSpacer";
import { FilledButton } from "../styledComponents/filledButton";
import { Link } from "../styledComponents/linkStyle";

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
            <CenterDiv>
                <p>Corporate Registration</p>
                <Input type="name"
                    placeholder="Organisation's Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                <TenSpacer />
                <Input autoFocus
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <TenSpacer />
                <Input type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <TenSpacer />
                <FilledButton onClick={() => { orgRegSubmit(); }} disabled={!validateForm()} >Submit</FilledButton>

                {(failedLogin) ? <p>Invalid details</p> : <></>}

                {/* {(reg) ? <NavLink to='/orginisation'><span>Reg successful</span></NavLink> : <></>} */}
            </CenterDiv>
        </>
    )
}


