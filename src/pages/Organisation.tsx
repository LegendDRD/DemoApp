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
import { CenterDiv, PaddingLeftDiv, LeftTableRow, Table, TableHeader, TableData, TableDataButtons } from "../styledComponents/centerDiv";
import { Input } from "../styledComponents/inputs";
import { TenSpacer, FortySpacer } from "../styledComponents/tenSpacer";
import { NavP, H1 } from "../styledComponents/StyledText";
import { HalfFilledButton, GreyFilledButton, HalfFilledButtonRed } from "../styledComponents/filledButton";


// Svg's
import { ReactComponent as IncLogo } from '../static/images/inc-logo-beta.svg';

import { Sidebar, Sidebar2 } from '../styledComponents/sideNavbar';
import EditingModal from 'components/EditingModal';
import AddUserModal from 'components/AddUserModal';
export default function Organisation() {
    const [auth, setAuth] = useState('');
    const nav = useNavigate();
    const [listUser, setListUser] = useState([])
    const [mainWidth, setMainWidth] = useState("300px");
    const [show, setShow] = useState(false);
    const [showAdd, setShowAdd] = useState(false);

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
    }, [nav, show]);

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
    const [selectedUser, setSelectedUser] = useState({ name: "aa" });

    return (
        <>
            <EditingModal show={show} info={selectedUser} onClose={() => { setShow(false) }} />
            <AddUserModal show={showAdd} onClose={() => { setShowAdd(false) }} />
            <Sidebar >

                <div onClick={() => { setContentList(0); setMainWidth("300px") }}><FaHome style={{ color: "white", fontSize: '2rem' }} /></div>
                <div onClick={() => { setContentList(1); setMainWidth("100px") }}><IoMdAirplane style={{ color: "white", fontSize: '2rem' }} /></div>
                <div onClick={() => { setContentList(2); setMainWidth("100px") }}><BiTrain style={{ color: "white", fontSize: '2rem' }} /></div>
                <div onClick={() => { setContentList(3); setMainWidth("100px") }}><FaTaxi style={{ color: "white", fontSize: '2rem' }} /></div>

                <div onClick={() => { setShowAdd(true); }}><FaTaxi style={{ color: "white", fontSize: '2rem' }} /></div>

                <div style={{ position: "absolute", bottom: "0" }} ><AiOutlineLogout onClick={() => { logOut() }} style={{ cursor: "pointer", color: "white", fontSize: '2rem' }} /></div>

            </Sidebar>
            {
                (contentList === 0) ?
                    <>
                        <Sidebar2 >
                            <FortySpacer />
                            <PaddingLeftDiv>
                                <IncLogo width="70%" />
                            </PaddingLeftDiv>
                            <a href="#" onClick={() => setContentList(0)}><FaHome style={{ color: "white", fontSize: '1rem' }} /><NavP>Users</NavP></a>
                            {/* <a href="#" onClick={() => setContentList(1)}><IoMdAirplane style={{ color: "white", fontSize: '1rem' }} /><NavP>aaaaa</NavP></a>
                            <a href="#" onClick={() => setContentList(1)}><BiTrain style={{ color: "white", fontSize: '1rem' }} /><NavP>aaaaa</NavP></a>
                            <a href="#" onClick={() => setContentList(3)}><FaTaxi style={{ color: "white", fontSize: '1rem' }} /><NavP>aaaaa</NavP></a> */}
                        </Sidebar2>

                        <Content >
                            <CenterDiv>
                                <TenSpacer />
                                <H1>Organisation Admin Page</H1>
                                <p>Welcome to your Organisation Admin Page!<br />Here you can create and edit users within your organisation</p>
                                <TenSpacer />
                                <TenSpacer />
                            </CenterDiv>
                            <Table>
                                <LeftTableRow>
                                    <TableHeader>Name</TableHeader>
                                    <TableHeader>Surname</TableHeader>
                                    <TableHeader>Email</TableHeader>
                                    <TableHeader>Residence</TableHeader>
                                    <TableHeader>Country</TableHeader>
                                    <TableHeader>Limit</TableHeader>
                                    <TableHeader>Created on</TableHeader>
                                </LeftTableRow>

                                {listUser.map((item: any, index) => {
                                    return (
                                        <>
                                            <tr>
                                                <TableData>{item.name} </TableData>
                                                <TableData>{item.surname}  </TableData>
                                                <TableData>{item.email} </TableData>
                                                <TableData>{item.residence}  </TableData>
                                                <TableData>{item.country} </TableData>
                                                <TableData>{item.limit}  </TableData>
                                                <TableData> {item.created_at}   </TableData>
                                                {/* <div key={index} > </div> */}
                                                <TableDataButtons><HalfFilledButton onClick={() => { setShow(true); setSelectedUser(item) }}>Edit</HalfFilledButton></TableDataButtons>
                                                <TableDataButtons><HalfFilledButtonRed onClick={() => { userDelete(item) }}>Delete</HalfFilledButtonRed></TableDataButtons>
                                            </tr>
                                        </>
                                    )
                                })}
                            </Table>

                        </Content>

                    </>
                    : <></>
            }
            {
                (contentList === 1) ?
                    <Content >
                        <TenSpacer />
                        <H1>Org user page</H1>
                        <Table>
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
                                            <td>{item.cash_limit}  </td>
                                            <td> {item.created_at}   </td>
                                            {/* <div key={index} > </div> */}
                                            <button onClick={() => { setShow(true); setSelectedUser(item) }}>Edit</button>
                                            <button onClick={() => { userDelete(item) }}>Delete</button>
                                        </tr>
                                    </>
                                )
                            })}
                        </Table>

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
