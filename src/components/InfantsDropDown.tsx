import React, { useState } from 'react'
import styled from 'styled-components';

export default function InfantsDropDown(props: any) {
    const [isOpenAri, setIsOpenAri] = useState(false);
    const togglingAri = () => setIsOpenAri(!isOpenAri);
    const [selectedOption, setSelectedOption] = useState(0);

    // const onOptionClicked = (value: any) => () => {
    //     setSelectedOption(value);
    //     setIsOpenAri(false);
    //     console.log(selectedOption);
    // };

    function onOptionClicked(value: any) {
        setSelectedOption(value);
        setIsOpenAri(false);
        console.log(selectedOption);
    }

    let Cities = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const DropDownContainer = styled("div")`

  `;

    const DropDownHeader = styled("div")`
      box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
      font-weight: 500;
      font-size: 18px;
      color: #0c4e38;
      border: 1px solid #0c4e38;
      box-shadow: 0 0.1rem 1rem rgba(10, 10, 10, 0.2);
      padding: 5px;
      width: 300px;
  `;

    const DropDownListContainer = styled("div")`
    position:absolute;`;

    const DropDownList = styled("ul")`
    padding: 0;
    margin: 0;
    /* padding-left: 1em; */
    background: #ffffff;
    border: 2px solid #0c4e38;
    border-radius: 5px;
    box-sizing: border-box;
    color: #0c4e38;
    font-size: 1.3rem;
    font-weight: 500;
    box-shadow: 0 0.1rem 1rem rgba(10, 10, 10, 0.2);
    &:first-child {
      padding-top: 0.8em;
    }
  `;

    const ListItem = styled("li")`
    padding: 0.0em 2em 0.4em 0em;
    list-style: none;
    margin-bottom: 0.8em;
    border-bottom: 2px solid #0c4e38;
    text-align:center;

  `;
    return (
        <>
            <DropDownContainer>
                <DropDownHeader onClick={togglingAri}>
                    {"Infant " + selectedOption}
                </DropDownHeader>
                {isOpenAri && (
                    <DropDownListContainer>
                        <DropDownList>
                            {Cities.map((option: any) => (
                                <ListItem onClick={() => { onOptionClicked(option); props.infant(option) }} key={Math.random()}>
                                    {option}
                                </ListItem>
                            ))}
                        </DropDownList>
                    </DropDownListContainer>
                )}
            </DropDownContainer>
        </>
    )
}
