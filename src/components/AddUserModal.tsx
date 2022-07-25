import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FlexDiv } from 'styledComponents/centerDiv';
import { Input, ShortInput } from 'styledComponents/inputs';
import { ModalBody, ModalContent, Modalfooter, ModalMain, ModalTitle, ModalTopAndBottom } from 'styledComponents/modalStyled'
import { TenSpacer } from 'styledComponents/tenSpacer';

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
                        <FlexDiv>
                            <ShortInput type="name"
                                placeholder="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <ShortInput type="surname"
                                placeholder="surname"
                                value={surname}
                                onChange={(e) => setSurname(e.target.value)}
                            />
                        </FlexDiv>
                        <TenSpacer />
                        <FlexDiv>
                            <ShortInput type="mobile_no"
                                placeholder="mobile_no"
                                value={mobile_no}
                                onChange={(e) => setMobile_no(e.target.value)}
                            />

                            <ShortInput type="residence"
                                placeholder="residence"
                                value={residence}
                                onChange={(e) => setResidence(e.target.value)}
                            />
                        </FlexDiv>
                        <TenSpacer />
                        <Input type="country"
                            placeholder="country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        />
                        <TenSpacer />
                        <Input autoFocus
                            placeholder="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TenSpacer />
                        <TenSpacer />
                        <Input autoFocus
                            placeholder="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <TenSpacer />


                    </ModalBody>
                    <Modalfooter>
                        <div onClick={() => userEditSubmit()} style={{ textDecoration: 'none' }}>
                            Save
                        </div>
                        <div onClick={props.onClose} style={{ textDecoration: 'none' }}>
                            Exit
                        </div>
                    </Modalfooter>
                </ModalContent>
            </ModalMain>
        </>
    )
}
