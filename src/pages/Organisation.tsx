import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Organisation() {
    const [auth, setAuth] = useState('');
    const nav = useNavigate();
    const [listUser, setListUser] = useState([])

    useEffect(() => {

        if (localStorage.getItem('Auth')) {
            let accessToken: any = ''
            accessToken = localStorage.getItem('Auth')
            setAuth(accessToken)
            axios.get(`${process.env.REACT_APP_API_URL}org`, { headers: { Authorization: `Bearer ${accessToken}` } })
                .then(function (response) {

                    setListUser(response.data)
                })
                .catch(function (error) {

                    console.log(error);
                });

        } else {
            nav('/login')
        }
    }, [nav]);

    function userDelete(itemInfo: any) {
        axios.delete(`${process.env.REACT_APP_API_URL}org/${itemInfo.id}`, { headers: { Authorization: `Bearer ${auth}` } })
            .then(function (response) {
                // setFailedLogin(false);
                // localStorage.setItem('Auth', response.data.accessToken);
                // nav('/login');
                // setReg(true);
            })
            .catch(function (error) {
                // setFailedLogin(true);
                console.log(error);
            });
    }


    return (
        <>
            <h1>Org HomePage</h1>

            {listUser.map((item: any, index) => {
                return <div key={index} >{item.name} {item.surname} {item.email}  {item.residence} {item.country} {item.limit} {item.created_at} <button onClick={() => { userDelete(item) }}>Delete</button> </div>
            })}
            <></>
        </>
    );
}
