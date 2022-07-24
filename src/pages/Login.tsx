import { useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import UserRegister from "components/UserRegister";
import OrgRegister from "components/OrgRegister";


// styled components
import { BgImage50 } from "../styledComponents/backgroundStyled";
import { Modal } from "../styledComponents/modal";
import { CenterDiv } from "../styledComponents/centerDiv";
import { Input } from "../styledComponents/inputs";
import { TenSpacer } from "../styledComponents/tenSpacer";
import { FilledButton } from "../styledComponents/filledButton";
import { Link } from "../styledComponents/linkStyle";

// SVG's
import { ReactComponent as ReactLogo } from '../static/images/demo-logo.svg';


export default function Login() {
    const nav = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [failedLogin, setFailedLogin] = useState(false);
    const [orgLogin, setOrgLogin] = useState(false);
    const [register, setRegister] = useState(false);


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
            <BgImage50>
                <Modal>
                    <CenterDiv>
                        <ReactLogo width="50%" />
                    </CenterDiv>
                    {(register) ?
                        <> {(orgLogin) ?
                            <> {/*ORG Register */}
                                <CenterDiv>
                                    <OrgRegister />
                                    <TenSpacer />
                                    <Link onClick={() => { setOrgLogin(false) }}>Switch to User </Link>
                                </CenterDiv>
                            </>
                            :
                            <>
                                {/*User Register */}
                                <CenterDiv>
                                    <UserRegister />


                                    <Link onClick={() => { setOrgLogin(true) }}>Switch to Org </Link>
                                </CenterDiv>

                            </>
                        }<CenterDiv>
                                <TenSpacer />
                                <Link onClick={() => { setRegister(false) }}>Login</Link>
                            </CenterDiv>
                        </>
                        :
                        <> {(orgLogin) ?
                            <> {/*ORG login */}
                                <CenterDiv>
                                    <TenSpacer />
                                    <p>Corporate login</p>
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
                                    <FilledButton onClick={() => { orgloginSubmit(); }} disabled={!validateForm()} >Submit</FilledButton>
                                    <TenSpacer />
                                    {(failedLogin) ? <span>Invalid login</span> : <></>}
                                    <Link onClick={() => { setOrgLogin(false) }}>Switch to User </Link>
                                </CenterDiv>
                            </>
                            :
                            <>
                                {/*User login */}
                                <CenterDiv>
                                    <TenSpacer />
                                    <p>User login</p>
                                    <Input autoFocus
                                        type="email"
                                        placeholder="Email"
                                        width="100%"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                    <TenSpacer />
                                    <Input type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} />
                                    <TenSpacer />

                                    <FilledButton onClick={() => { userloginSubmit(); }} disabled={!validateForm()} >Submit</FilledButton>

                                    {(failedLogin) ? <span>Invalid login</span> : <></>}
                                    <TenSpacer />
                                    <TenSpacer />
                                    <Link onClick={() => { setOrgLogin(true) }}>Corporate Portal</Link>
                                    <TenSpacer />
                                    <Link onClick={() => { setRegister(true) }}>Register</Link>
                                </CenterDiv>
                            </>
                        }
                        </>
                    }
                </Modal>
            </BgImage50>
        </>

    );
}