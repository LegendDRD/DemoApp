import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Organisation() {
    const [auth, setAuth] = useState('');
    const nav = useNavigate();
    const [listUser, setListUser] = useState([])

    useEffect(() => {
        console.log(localStorage.getItem('Auth'))
        if (localStorage.getItem('Auth')) {
            let accessToken: any = ''
            accessToken = localStorage.getItem('Auth')
            setAuth(accessToken);
            console.log(accessToken)
            axios.get(`${process.env.REACT_APP_API_URL}org`, { headers: { Authentication: `Bearer ${accessToken}` } })
                .then(function (response) {
                    // setFailedLogin(false);
                    // localStorage.setItem('Auth', response.data.accessToken);
                    // nav('/login');
                    // setReg(true);
                    setListUser(response.data)
                })
                .catch(function (error) {
                    // setFailedLogin(true);
                    console.log(error);
                });

        } else {
            nav('/login')
        }
    }, [nav]);

    useEffect(() => {

    }, [nav]);



    return (
        <>
            <h1>Org HomePage</h1>

            {listUser.map((item: any, index) => {
                return <div key={index} >{item.name}</div>
            })}
            <></>
        </>
    );
}
