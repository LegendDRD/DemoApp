import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FlexDiv } from 'styledComponents/centerDiv';
import { Input, ShortInput } from 'styledComponents/inputs';
import { ModalBody, ModalContent, Modalfooter, ModalMain, ModalTitle, ModalTopAndBottom } from 'styledComponents/modalStyled'
import { TenSpacer } from 'styledComponents/tenSpacer';

export default function EditingModal(props: any) {

    const [email, setEmail] = useState(props.info.email);
    const [name, setName] = useState(props.info.name);
    const [surname, setSurname] = useState(props.info.surname);
    const [mobile_no, setMobile_no] = useState(props.info.mobile_no);
    const [residence, setResidence] = useState(props.info.residence);
    const [country, setCountry] = useState(props.info.country);


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
            axios.put(`${process.env.REACT_APP_API_URL}org/${props.info.id}`, { email, name, surname, mobile_no, residence, country }, { headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': "application/json" } })
                .then(function (response) {
                    // setFailedLogin(false);
                    // localStorage.setItem('Auth', response.data.accessToken);
                    // nav('/login');
                    // setReg(true);
                    console.log(response);
                    window.location.reload()

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
                                placeholder={props.info.name}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <ShortInput type="surname"
                                placeholder={props.info.surname}
                                value={surname}
                                onChange={(e) => setSurname(e.target.value)}
                            />
                        </FlexDiv>
                        <TenSpacer />
                        <FlexDiv>
                            <ShortInput type="mobile_no"
                                placeholder={props.info.mobile_no}
                                value={mobile_no}
                                onChange={(e) => setMobile_no(e.target.value)}
                            />

                            <ShortInput type="residence"
                                placeholder={props.info.residence}
                                value={residence}
                                onChange={(e) => setResidence(e.target.value)}
                            />
                        </FlexDiv>
                        <TenSpacer />
                        <Input type="country"
                            placeholder={props.info.country}
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        />
                        <TenSpacer />
                        <Input autoFocus
                            placeholder={props.info.email}
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
