import styled from "styled-components";
import bgimage from "../static/images/bg-image.png"


export const BgImage50 = styled.div`

    display: flex;
    height: 100vh;
    width: 100vw;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${bgimage});
    align-items: center;
    justify-content: center;

`;
