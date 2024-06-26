import styled from "styled-components";
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

export const FullWidthInput = styled.input`

    width:100%;
    padding: 10px;
    border: 1px solid #0b2027;
    border-radius: 5px;
    &::placeholder {
    padding-left: 5px;
    }

    :focus::placeholder {
    color: transparent;
    }
`;

