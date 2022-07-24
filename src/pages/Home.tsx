import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

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
    }, [])

    return (
        <>
            <h1>HomePage</h1>
        </>
    );
}
