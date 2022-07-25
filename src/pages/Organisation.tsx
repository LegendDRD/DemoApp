import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Icons
import { FaHome, FaTaxi } from 'react-icons/fa'
import { IoMdAirplane } from 'react-icons/io'
import { BiTrain } from 'react-icons/bi'
import { AiOutlineLogout } from 'react-icons/ai'

// styled components
import { CenterDiv,PaddingLeftDiv } from "../styledComponents/centerDiv";
import { Input } from "../styledComponents/inputs";
import { TenSpacer, FortySpacer } from "../styledComponents/tenSpacer";


// Svg's
import { ReactComponent as IncLogo } from '../static/images/inc-logo-beta.svg';

import { Sidebar, Sidebar2 } from '../styledComponents/sideNavbar';
export default function Organisation() {
    const [auth, setAuth] = useState('');
    const nav = useNavigate();
    const [listUser, setListUser] = useState([])
    const [mainWidth, setMainWidth] = useState("300px");

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
    const Content = styled.div`
    transition: all .1s ease;

    margin-left: ${mainWidth};
    padding: 8px  16px;
    height: 1000px;
  
  `;
    function logOut() {

        localStorage.setItem('Auth', '')
        nav('/login')
    }
    const [contentList, setContentList] = useState(0);

    return (
        <>

            <Sidebar >

                <a href="#" onClick={() => { setContentList(0); setMainWidth("300px") }}><FaHome style={{ color: "white", fontSize: '2rem' }} /></a>
                <a href="#" onClick={() => { setContentList(1); setMainWidth("100px") }}><IoMdAirplane style={{ color: "white", fontSize: '2rem' }} /></a>
                <a href="#" onClick={() => { setContentList(2); setMainWidth("100px") }}><BiTrain style={{ color: "white", fontSize: '2rem' }} /></a>
                <a href="#" onClick={() => { setContentList(3); setMainWidth("100px") }}><FaTaxi style={{ color: "white", fontSize: '2rem' }} /></a>
                <a style={{ position: "absolute", bottom: "0" }} ><AiOutlineLogout onClick={() => { logOut() }} style={{ cursor: "pointer", color: "white", fontSize: '2rem' }} /></a>

            </Sidebar>
            {
                (contentList === 0) ?
                    <>
                        <Sidebar2 >
                                <FortySpacer/>
                            <PaddingLeftDiv>
                            <IncLogo width="70%" />
                            </PaddingLeftDiv>
                            <a href="#" onClick={() => setContentList(0)}><FaHome style={{ color: "white", fontSize: '1rem' }} />aaaaa</a>
                            <a href="#" onClick={() => setContentList(1)}><IoMdAirplane style={{ color: "white", fontSize: '1rem' }} />dddw</a>
                            <a href="#" onClick={() => setContentList(1)}><BiTrain style={{ color: "white", fontSize: '1rem' }} />dwdwd</a>
                            <a href="#" onClick={() => setContentList(3)}><FaTaxi style={{ color: "white", fontSize: '1rem' }} />adwadawd</a>
                        </Sidebar2>

                        <Content >
                            <h2>Page1</h2> {/*Add in as a component*/}
                            <p>This example use media queries to transform the sidebar to a top navigation bar when the screen size is 700px or less.</p>
                            <p>We have also added a media query for screens that are 400px or less, which will vertically stack and center the navigation links.</p>
                            <h3>Resize the browser window to see the effect.</h3>
                        </Content>

                    </>
                    : <></>
            }
            {
                (contentList === 1) ?
                    <Content >
                        <h1>Org user page</h1>
                        <table>
                            <tr> <th>Name</th> <th>surname</th>  <th>email</th> <th>residence</th> <th>country</th> <th>limit</th> <th>created_at</th></tr>

                            {listUser.map((item: any, index) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{item.name} </td>
                                            <td>{item.surname}  </td>
                                            <td>{item.email} </td>
                                            <td>{item.residence}  </td>
                                            <td>{item.country} </td>
                                            <td>{item.limit}  </td>
                                            <td> {item.created_at}   </td>
                                            {/* <div key={index} > </div> */}
                                            <button onClick={() => { }}>Edit</button>
                                            <button onClick={() => { userDelete(item) }}>Delete</button>
                                        </tr>
                                    </>
                                )
                            })}
                        </table>

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


            <></>
        </>
    );
}
