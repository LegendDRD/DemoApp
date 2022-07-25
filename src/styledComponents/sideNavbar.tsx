import styled from "styled-components";


export const Sidebar = styled.div`

    margin: 0;
  padding: 0;
  width: 70px;
  background-color: #1a1919;
  position: fixed;
  height: 100%;
  /* overflow: auto; */
  
  div {
    display: block;
  color: black;
  padding: 20px;
  /* text-decoration: none; */
  &:hover{
    background-color:red;
  }
  
  &.active{
    background-color:red;
  }
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



export const Sidebar2 = styled.div`

    margin-left: 70px;
    padding: 0;
    width: 200px;
    background-color: #252424;
    position: fixed;
    height: 100%;
    overflow: auto;

    a {
    display: block;
    color: #ffffff;
    padding: 20px;
    text-decoration: none;
}
`;