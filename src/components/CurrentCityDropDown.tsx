import React, { useState } from 'react'
import styled from 'styled-components';

export default function CurrentCityDropDown(props: any) {
    const [isOpenAri, setIsOpenAri] = useState(false);
    const togglingAri = () => setIsOpenAri(!isOpenAri);
    const [selectedOption, setSelectedOption] = useState(null);

    function onOptionClicked1(value: any) {
        setSelectedOption(value);
        setIsOpenAri(false);
        console.log(selectedOption);
    }

    let Cities = ["Johannesburg (JNB)", "Cape Town (CPT)", "Bloemfontein (BFN)", "Durban (DUR)", "Skukuza (SZK)"]

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
    `;

    const DropDownListContainer = styled("div")`
      position:absolute;
      box-shadow: 0 0.1rem 1rem rgba(10, 10, 10, 0.2);
      
      `;

    const DropDownList = styled("ul")`
      padding:0px;
      margin: 0;
      /* padding-left: 1em; */
      background: #ffffff;
      border: 2px solid #0c4e38;
      box-sizing: border-box;
      color: #0c4e38;
      font-size: 1.3rem;
      font-weight: 500;
      
      &:first-child {
        padding-top: 0.8em;
      }
    `;

    const ListItem = styled("li")`
       padding: 0.4em 20vw 0.4em 1em;
      list-style: none;
      margin-bottom: 0.8em;
      border-bottom: 2px solid #0c4e38;
    `;
    return (
        <>
            <DropDownContainer>
                <DropDownHeader onClick={togglingAri}>
                    {selectedOption || "Current City"}
                </DropDownHeader>
                {isOpenAri && (
                    <DropDownListContainer>
                        <DropDownList>
                            {Cities.map((option: any) => (
                                <>
                                    {(option === "Johannesburg (JNB)") ? <ListItem onClick={() => { onOptionClicked1(option); props.show(); }} key={Math.random()}>
                                        {option}
                                    </ListItem>
                                        :
                                        <ListItem onClick={() => { onOptionClicked1(option); props.hide(); }} key={Math.random()}>
                                            {option}
                                        </ListItem>
                                    }
                                </>

                            ))}
                        </DropDownList>
                    </DropDownListContainer>
                )}
            </DropDownContainer>
        </>
    )
}
