
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaTaxi } from 'react-icons/fa'
import { IoMdAirplane } from 'react-icons/io'
import { BiTrain } from 'react-icons/bi'
import { Sidebar, Sidebar2 } from '../styledComponents/sideNavbar';
import { AiOutlineLogout } from 'react-icons/ai';
import BookTrip from 'components/BookTrip';

export default function User() {

    const [auth, setAuth] = useState(false);
    const nav = useNavigate();
    const [mainWidth, setMainWidth] = useState("300px");
    useEffect(() => {
        console.log(localStorage.getItem('Auth'))
        if (localStorage.getItem('Auth')) {
            setAuth(true);
        } else {
            nav('/login')
        }
    }, [nav]);

    function logOut() {

        localStorage.setItem('Auth', '')
        nav('/login')
    }

    const Content = styled.div`
       transition: all .1s ease;
    margin-left: ${mainWidth};
    padding: 8px  16px;
    height: 100%;
  
  `;

    const [contentList, setContentList] = useState(0);

    return (
        <>
            <Sidebar  >
                <div onClick={() => { setContentList(0); setMainWidth("300px") }}><FaHome style={{ cursor: "pointer", color: "white", fontSize: '2rem' }} /></div>
                <div onClick={() => { setContentList(1); setMainWidth("100px") }}><IoMdAirplane style={{ cursor: "pointer", color: "white", fontSize: '2rem' }} /></div>
                <div onClick={() => { setContentList(2); setMainWidth("100px") }}><BiTrain style={{ cursor: "pointer", color: "white", fontSize: '2rem' }} /></div>
                <div onClick={() => { setContentList(3); setMainWidth("100px") }}><FaTaxi style={{ cursor: "pointer", color: "white", fontSize: '2rem' }} /></div>
                <div style={{ position: "absolute", bottom: "0" }} ><AiOutlineLogout onClick={() => { logOut() }} style={{ cursor: "pointer", color: "white", fontSize: '2rem' }} /></div>
            </Sidebar>
            {
                (contentList === 0) ?
                    <>
                        <Sidebar2 >
                            <a onClick={() => setContentList(0)}><FaHome style={{ color: "white", fontSize: '1rem' }} />aaaaa</a>
                            <a onClick={() => setContentList(1)}><IoMdAirplane style={{ color: "white", fontSize: '1rem' }} />dddw</a>
                            <a onClick={() => setContentList(1)}><BiTrain style={{ color: "white", fontSize: '1rem' }} />dwdwd</a>
                            <a onClick={() => setContentList(3)}><FaTaxi style={{ color: "white", fontSize: '1rem' }} />adwadawd</a>
                        </Sidebar2>

                        <Content >
                            <BookTrip />
                        </Content>

                    </>
                    : <></>
            }
            {
                (contentList === 1) ?
                    <Content >
                        <h2>Page2</h2> {/*Add in as a component*/}
                        <p>This example use media queries to transform the sidebar to a top navigation bar when the screen size is 700px or less.</p>
                        <p>We have also added a media query for screens that are 400px or less, which will vertically stack and center the navigation links.</p>
                        <h3>Resize the browser window to see the effect.</h3>
                    </Content> : <></>
            }
            {
                (contentList === 2) ?
                    <Content >
                        <h2>page3</h2>{/*Add in as a component*/}
                        <p>This example use media queries to transform the sidebar to a top navigation bar when the screen size is 700px or less.</p>
                        <p>We have also added a media query for screens that are 400px or less, which will vertically stack and center the navigation links.</p>
                        <h3>Resize the browser window to see the effect.</h3>
                    </Content> : <></>
            }
            {
                (contentList === 3) ?
                    <Content >
                        <h2>page4</h2>{/*Add in as a component*/}
                        <p>This example use media queries to transform the sidebar to a top navigation bar when the screen size is 700px or less.</p>
                        <p>We have also added a media query for screens that are 400px or less, which will vertically stack and center the navigation links.</p>
                        <h3>Resize the browser window to see the effect.</h3>
                    </Content> : <></>
            }


        </>
    );
}
