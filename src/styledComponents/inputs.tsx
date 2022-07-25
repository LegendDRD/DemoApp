import styled from "styled-components";
import { FaHome, FaTaxi } from 'react-icons/fa'
export const Input = styled.input`

    width:70%;
    height:30px;
    border: 1px solid #0b2027;
    border-radius: 5px;
    &::placeholder {
    padding-left: 5px;
    }

    :focus::placeholder {
    color: transparent;
    }
`;

export const ShortInput = styled.input`

    width:34%;
    height:30px;
    border: 1px solid #0b2027;
    border-radius: 5px;
    &::placeholder {
    padding-left: 5px;
    }

    :focus::placeholder {
    color: transparent;
    }
`;
export const HomeStyle = styled(FaHome)`

cursor: "pointer";
color: "white";
font-size: '23rem' 
`;
