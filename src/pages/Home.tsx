import UserNavBar from 'components/UserNavBar';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const [auth, setAuth] = useState(false);
    const nav = useNavigate();

    useEffect(() => {
        console.log(localStorage.getItem('Auth'))
        if (localStorage.getItem('Auth')) {
            setAuth(true);
        } else {
            nav('/login')
        }
    }, [nav]);

    return (
        <>
            <div>
                <UserNavBar />
                <h1 >HomePage aaaaaaaaaaaaaaaaaaaaa</h1>
            </div>a



        </>
    );
}
