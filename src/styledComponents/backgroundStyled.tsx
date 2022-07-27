import styled from "styled-components";
import bgimage from "../static/images/bg-image.png"
import bgimage1 from "../static/images/orgbg.png"
import bgimage12 from "../static/images/flight-info.png"


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

export const BgImageC = styled.div`

    display: flex;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${bgimage1});
    align-items: center;
    justify-content: center;

`;

export const BgImageB = styled.div`

    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(${bgimage12});
    height: 86px
`;

