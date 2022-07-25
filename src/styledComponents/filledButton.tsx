import styled from "styled-components";
export const FilledButton = styled.button`

    width: 71.5%;
    background-color: #0b2027;
    height:40px;
    color: white;
    border-radius: 5px;
    transition: all .1s ease;
    cursor: pointer;
    &:hover {
        width: 71.5%;
    background-color: #40798c;
    height:40px;
    color: white;
    border-radius: 5px;
    }
    
    `
    ;
export const GreyFilledButton = styled.button`

    width: 71.5%;
    background-color: #0b2027;
    height:40px;
    color: white;
    border-radius: 5px;
    opacity: 0.5;
    cursor:not-allowed;
    
    `
    ;

    export const HalfFilledButton = styled.button`

    width: 100%;
    background-color: #0b2027;
    height:40px;
    color: white;
    border-radius: 5px;
    transition: all .1s ease;
    cursor: pointer;
    &:hover {
        width: 100%;
    background-color: #40798c;
    height:40px;
    color: white;
    border-radius: 5px;
    }
    
    `
    ;

    export const HalfFilledButtonRed = styled.button`

    width: 100%;
    background-color: #0b2027;
    height:40px;
    color: white;
    border-radius: 5px;
    transition: all .1s ease;
    cursor: pointer;
    &:hover {
        width: 100%;
    background-color: red;
    height:40px;
    color: white;
    border-radius: 5px;
    }
    
    `
    ;