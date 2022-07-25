import styled from "styled-components";


export const ModalMain = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(20, 20, 20, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;


`
export const ModalContent = styled.div`
    width: 50vw;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0.1rem 1rem rgba(10, 10, 10, 0.2);
    border-radius: 1em;
    background: linear-gradient(to right, #ffffff, #ece9e6);

    @media screen and (max-width:768px) {
    width: 100vw;
    padding: rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0.1rem 1rem rgba(10, 10, 10, 0.2);
    border-radius: 1em;
    background: linear-gradient(to right, #ffffff, #ece9e6);
}

`
export const ModalTopAndBottom = styled.div`

    padding: 10px;

`
export const ModalTitle = styled.h4`

margin: 0;
    text-align: center;
    font-size: 32px;
    /* box-shadow: 0 10px 10px #ece9e6; */

`
export const ModalBody = styled.div`

padding: 30px;

`
export const Modalfooter = styled.div`
  display: flex;
  padding: 1rem;
  margin-top: auto;
  justify-content: right;
  gap: 10px;
`