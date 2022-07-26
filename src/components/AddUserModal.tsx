import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FlexDiv } from 'styledComponents/centerDiv';
import { Input, ShortInput } from 'styledComponents/inputs';
import { ModalBody, ModalContent, Modalfooter, ModalMain, ModalTitle, ModalTopAndBottom } from 'styledComponents/modalStyled'
import { TenSpacer } from 'styledComponents/tenSpacer';
import { CenterDiv } from "../styledComponents/centerDiv";
import { Link, Link2Green, Link2Red, Link2GreenB, Link2RedB } from "../styledComponents/linkStyle";

import { ReactComponent as ReactLogo } from '../static/images/demo-logo.svg';

export default function AddUserModal(props: any) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [mobile_no, setMobile_no] = useState("");
    const [residence, setResidence] = useState("");
    const [country, setCountry] = useState("");


    if (!props.show) {
        return null;
    }


    // const [failedLogin, setFailedLogin] = useState(false);
    // const [reg, setReg] = useState(false);

    function userEditSubmit() {
        if (localStorage.getItem('Auth')) {
            let accessToken: any = ''
            accessToken = localStorage.getItem('Auth')
            // setAuth(accessToken)
            axios.post(`${process.env.REACT_APP_API_URL}org/user/register`, { email, name, password, surname, mobile_no, residence, country }, { headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': "application/json" } })
                .then(function (response) {
                    console.log(response);
                    window.location.reload();

                })
                .catch(function (error) {
                    // setFailedLogin(true);
                    console.log(error);
                });

        } else {
            console.log("Error")
        }
    }

    return (
        <>
            <ModalMain>
                <ModalContent>
                    <ModalBody>
                    <CenterDiv>
                    <ReactLogo width="50%" fill="#0b2027"/>
                        <p>Add a new user</p>
                        </CenterDiv>
                        <FlexDiv>
                            <ShortInput type="name"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <ShortInput type="surname"
                                placeholder="Surname"
                                value={surname}
                                onChange={(e) => setSurname(e.target.value)}
                            />
                        </FlexDiv>
                        <TenSpacer />
                        <FlexDiv>
                            <ShortInput type="mobile_no"
                                placeholder="Mobile Number"
                                value={mobile_no}
                                onChange={(e) => setMobile_no(e.target.value)}
                            />

                            <ShortInput type="residence"
                                placeholder="Residence"
                                value={residence}
                                onChange={(e) => setResidence(e.target.value)}
                            />
                        </FlexDiv>
                        <TenSpacer />
                        <FlexDiv>
                        <ShortInput type="country"
                            placeholder="Country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        />
                        <ShortInput autoFocus
                            placeholder="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        </FlexDiv>
                        <TenSpacer />
                        <FlexDiv>
                        <ShortInput autoFocus
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <ShortInput autoFocus
                            placeholder="Confirm Password"
                            type="password"
                        />
                        </FlexDiv>
                        <TenSpacer />


                    </ModalBody>
                    <Modalfooter>
                        <Link2GreenB onClick={() => userEditSubmit()} style={{ textDecoration: 'none' }}>
                            Save
                        </Link2GreenB>
                        <Link2RedB onClick={props.onClose} style={{ textDecoration: 'none' }}>
                            Exit
                        </Link2RedB>
                    </Modalfooter>
                </ModalContent>
            </ModalMain>
        </>
    )
}
