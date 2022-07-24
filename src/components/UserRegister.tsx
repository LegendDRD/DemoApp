import axios from 'axios';
import { useState } from 'react'
import { Navigate, useNavigate, NavLink } from 'react-router-dom';

// styled components
import { CenterDiv } from "../styledComponents/centerDiv";
import { Input } from "../styledComponents/inputs";
import { TenSpacer } from "../styledComponents/tenSpacer";
import { FilledButton } from "../styledComponents/filledButton";
import { Link } from "../styledComponents/linkStyle";
import { FlexDiv } from "../styledComponents/flexDiv";
import { ShortInput } from "../styledComponents/shortInput";

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
            <span>User Register</span>
            <TenSpacer />
            <FlexDiv>
                <ShortInput type="name"
                    placeholder="First Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />

                <ShortInput type="surname"
                    placeholder="Last Name"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)} />
            </FlexDiv>
            <TenSpacer />
            <FlexDiv>
                <ShortInput type="mobile_no"
                    placeholder="Mobile Number"
                    value={mobile_no}
                    onChange={(e) => setMobile_no(e.target.value)} />

                <ShortInput type="residence"
                    placeholder="Address"
                    value={residence}
                    onChange={(e) => setResidence(e.target.value)} />
            </FlexDiv>
            <TenSpacer />
            <Input type="country"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)} />
<TenSpacer />
            <Input autoFocus
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
                <TenSpacer />
            <Input type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
<TenSpacer />

            <FilledButton onClick={() => { userRegSubmit(); }} disabled={!validateForm()} >Submit</FilledButton>
            <TenSpacer />
            {(failedLogin) ? <span>Invalid details</span> : <></>}

            {/* {(reg) ? <NavLink to='/orginisation'><span>Reg successful</span></NavLink> : <></>} */}
        </>
    )
}


