import styled from "styled-components";
// import backgroundUrl from '../static/Images/blackholeV1.webp'
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export const TicketCard = styled.div`

width: 100%;
 height: 100%;
 display: grid;
 &:hover{
    background: linear-gradient(to top,  #3ac22d,#3ac22d10,#3ac22d30);
 }
`;

export const ProfileStyled = styled.div`
    position: absolute;
    left: 0;
    top: 30%;
    width: 100%;
    text-align: center;

`;
export const ProfileImageContainer = styled.div`
    position:relative;
`;
export const SmallContainer = styled.div`

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* max-width: 100vw; */
  margin-block: 2rem;
  gap: 2rem;
  /* padding: 10px 100px 60px; */
  /* background-color: white; */

  @media only screen and (max-width: 1280px) {
    
    display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-block: 1rem;
  gap: 1rem;
}
`;

export const ProfileImageStyled = styled.img`

    height: 400px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
    box-shadow: 5px 5px 10px rgb(51, 51, 51, .5);

    @media only screen and (max-width: 1280px) {
    
        height: 300px;

    }

    @media only screen and (max-width: 700px) {
    
    height: 250px;
    /* display: block; */
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
      /* margin-top: -20px; */

}


@media only screen and (max-width: 500px) {
    
    height: 250px;
    /* display: block; */
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
      margin-top: -22px;

}

@media only screen and (max-width: 400px) {
    
    height: 200px;
    /* display: block; */
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
      margin-top: -35px;

}
@media only screen and (max-width: 375px) {
    
    height: 150px;
    /* display: block; */
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
      margin-top: -40px;

}
   

`;
export const ProfileImageBackDropStyled = styled.div`
 position:absolute;
 display:flex;
height: 420px;
width: 420px;
background-color:black;
top:2%;
left:38.5vw;
border-radius: 400px;
z-index:-99;
box-shadow: 5px 5px 10px rgb(51, 51, 51, .5);

@media only screen and (max-width: 1280px) {
    
    position:absolute;
    display:flex;
    height: 340px;
    width: 340px;
    background-color:black;
    top:-1.5rem;
    left:36.8vw;
    border-radius: 400px;
    z-index:-99;
    box-shadow: 5px 5px 10px rgb(51, 51, 51, .5);

}
@media only screen and (max-width: 714px) {
    
    position:absolute;
    display:flex;
    height: 340px;
    width: 340px;
    background-color:black;
    top:-1.5rem;
    left:9vw;
    border-radius: 400px;
    z-index:-99;
    box-shadow: 5px 5px 10px rgb(51, 51, 51, .5);
    
    
    }

@media only screen and (max-width: 414px) {
    
    position:absolute;
    display:flex;
    height: 340px;
    width: 340px;
    background-color:black;
    top:-1.5rem;
    left:9vw;
    border-radius: 400px;
    z-index:-99;
    box-shadow: 5px 5px 10px rgb(51, 51, 51, .5);
    
    
    }


`;

export const ProfileImageBackBorderStyled = styled.div`
 position:absolute;
 display:flex;
height: 20px;
width: 100%;
background-color:black;
bottom:28%;
/* border-radius: 4px; */
z-index:-99;
/* box-shadow: 5px 5px 10px rgb(51, 51, 51, .5); */

@media only screen and (max-width: 1280px) {
    
    position:absolute;
 display:flex;
height: 20px;
width: 100%;
background-color:black;
bottom:45%;
/* border-radius: 4px; */
z-index:-99;
/* box-shadow: 5px 5px 10px rgb(51, 51, 51, .5); */

}
@media only screen and (max-width: 700px) {
    
    position:absolute;
 display:flex;
height: 20px;
width: 100%;
background-color:black;
bottom:45%;
/* border-radius: 4px; */
z-index:-99;
box-shadow: 5px 5px 10px rgb(51, 51, 51, .5);

}


`;

export const BackBorderStyled = styled.div`
 position:absolute;
 display:flex;
height: 30px;
width: 100%;
background-color:black;
bottom:-5px;
z-index:-99;
 box-shadow: 5px 5px 10px rgb(51, 51, 51, .5); 
`;
export const TextBorderStyled = styled.span`
    background-color: #111;
    color: #fff;
    padding: 10px;
    opacity: 80%;
    font-size: 25px;
    letter-spacing: 10px;

    @media only screen and (max-width: 1280px) {
    
    background-color: #111;
    color: #fff;
    padding: 0px 15px 0px 15px;
    opacity: 80%;
    font-size: 25px;
    letter-spacing: 10px;
}
`;

export const TextBorderStyledMainTitle = styled.span`
    background-color: #111;
    color: #fff;
    padding: 10px;
    font-size: 32px;
    letter-spacing: 10px;

    @media only screen and (max-width: 1280px) {
    
    background-color: #111;
    color: #fff;
    padding: 0px 15px 0px 15px;
    opacity: 80%;
    font-size: 25px;
    letter-spacing: 10px;
}
`;

export const Gap170 = styled.div`
 height: 170px;

@media only screen and (max-width: 700px) {

    height: 120px;

}


@media only screen and (max-width: 400px) {
    height: 100px;

}
@media only screen and (max-width: 375px) {

    height: 100px;

}


`;
export const Gap50 = styled.div`
height: 50px;

`;

export const ProfileAboutStyled = styled.h1`
    font-weight: bold;
    color: rgb(19, 18, 18);
    text-align: center;
    opacity: 80%;
    font-size: 36px;
    letter-spacing: 10px;
`;

export const ProfileAboutStyledH2 = styled.h2`
    font-weight: bold;
    color: rgb(19, 18, 18);
    text-align: center;
    opacity: 80%;
    font-size: 36px;
    letter-spacing: 10px;

`;
export const AboutViewText = styled.p`
    padding: 40px calc(20vw) 30px;
    text-align: center;
    font-size: 18px;
    background-color: white;

    @media only screen and (max-width: 1280px) {
    
    padding: 20px calc(10vw) 20px;
    text-align: center;
    font-size: 18px;
    background-color: white;


}

`;
export const GlobalContainer = styled.div`
    /* display: flex; */
    /* flex-wrap: wrap; */
    /* margin-block: 2rem; */
    padding: 10px 100px 60px;
    background: linear-gradient(175deg, #fff, #ffffff, #ece9e6);
    
    @media only screen and (max-width: 1280px) {
        padding: 10px 20px 60px;


}
`;
export const BaseBtn = styled.a`
    display: flex;
    align-items: center;
    border-radius: 10%;
`;
export const BaseBtnLink = styled.div`
    border-radius: 50px;
    border: 1px solid #1d1d1d !important;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-right: 25px;
    padding-left: 25px;
    color: rgb(7, 7, 7);
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    
    &:hover {

    transition: all 0.2s ease-in-out;
    color: #31f72a;
    border: 1px solid #31f72a !important;
}
`;
export const BaseBtnLinkRed = styled.div`
    border-radius: 50px;
    border: 1px solid #1d1d1d !important;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-right: 25px;
    padding-left: 25px;
    color: rgb(7, 7, 7);
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    
    &:hover {
        transition: all 0.2s ease-in-out;
    color: #f72a2a;
    border: 1px solid #f72a2a !important;


}
`;
export const BaseBtnLinkPurple = styled.div`
    border-radius: 50px;
    border: 1px solid #1d1d1d !important;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-right: 25px;
    padding-left: 25px;
    color: rgb(7, 7, 7);
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
    color: #ad85e7;
    border: 1px solid #ad85e7 !important;

}
`;
export const NavBarStyle = styled.div`
    background-color: black;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding: .5rem;
    z-index: 10;
`;
export const NavBarLink = styled(NavLink)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    transition: all .2s ease;
    &:hover {
    font-size: larger;
    color: #2aa6f7;
    }
`;
export const NavBarHashLink = styled(HashLink)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    
    transition: all .2s ease;
    &:hover {
    font-size: larger;
    color: #2aa6f7
}
`;
export const NavBarMenuLink = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width:768px) {
        display: none; 
}
`;




