import React from 'react'
import styled from 'styled-components';
import { FaHome, FaTaxi } from 'react-icons/fa'
import { IoMdAirplane } from 'react-icons/io'
import { BiTrain } from 'react-icons/bi'
export default function UserNavBar() {

    const Sidebar = styled.div`

    margin: 0;
  padding: 0;
  width: 200px;
  background-color: #1a1919;
  position: fixed;
  height: 100%;
  overflow: auto;
  
  a {
    display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
}
@media screen and (max-width: 700px) {
 
    width: 100%;
    height: auto;
    position: relative;
  
  a {float: left;}
  Content {margin-left: 0;}
}
@media screen and (max-width: 400px) {
  a {
    text-align: center;
    float: none;
  }
}
`;

    const Content = styled.div`
  margin-left: 200px;
  padding: 8px  16px;
  height: 1000px;

`;


    return (
        <>
            <Sidebar >
                <a href="#"><FaHome style={{ color: "white" }} /></a>
                <a href="#"><IoMdAirplane style={{ color: "white" }} /></a>
                <a href="#"><BiTrain style={{ color: "white" }} /></a>
                <a href="#"><FaTaxi style={{ color: "white" }} /></a>

            </Sidebar>

            <Content >
                <h2>Responsive Sidebar Example</h2>
                <p>This example use media queries to transform the sidebar to a top navigation bar when the screen size is 700px or less.</p>
                <p>We have also added a media query for screens that are 400px or less, which will vertically stack and center the navigation links.</p>
                <h3>Resize the browser window to see the effect.</h3>
            </Content>

        </>


    )
}
