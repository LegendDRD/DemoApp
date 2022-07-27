import React, { useState } from 'react'
import styled from 'styled-components';
import AdultDropDown from './AdultDropDown';
import ChildrenDropDown from './ChildrenDropDown';
import CurrentCityDropDown from './CurrentCityDropDown';
import DestinationCityDropDown from './DestinationCityDropDown';
import InfantsDropDown from './InfantsDropDown';
import PlanClassDropDown from './PlanClassDropDown';
import { GiAirplaneDeparture } from 'react-icons/gi';

import { TenSpacer, FortySpacer } from "../styledComponents/tenSpacer";
import { Link, Link2Green, Link2Red } from "../styledComponents/linkStyle";

import { NavP, H1, Header } from "../styledComponents/StyledText";
import { Input, FullWidthInput } from "../styledComponents/inputs";
import EconamyCard from './TicketCard';
import { BgImageB } from "../styledComponents/backgroundStyled";

export default function BookTrip() {
    // const [startDate, setStartDate] = useState(new Date());
    const [selectDate, setSelectDate] = useState(new Date().toDateString());
    const [showData, setShowData] = useState(false);
    const [payModel, setpayModel] = useState(false)

    let demoData = [{
        airlineName: "Asiana Airlines",
        gateNumber: "01",
        arrival: "13:30",
        departure: "15:30",
        ecoPrice: 10000,
        ecoAvi: true,
        busPrice: 50000,
        busAvi: true,
        firstPrice: 120000,
        firstAvi: false,

    },
    {
        airlineName: "easyJet",
        gateNumber: "15",
        arrival: "13:30",
        departure: "15:30",
        ecoPrice: 10000,
        ecoAvi: true,
        busPrice: 50000,
        busAvi: false,
        firstPrice: 120000,
        firstAvi: false,

    },
    {
        airlineName: "Cebu Pacific Air",
        gateNumber: "03",
        arrival: "12:30",
        departure: "15:30",
        ecoPrice: 10000,
        ecoAvi: false,
        busPrice: 50000,
        busAvi: true,
        firstPrice: 120000,
        firstAvi: false,

    },
    {
        airlineName: "Virgin Blue Airlines",
        gateNumber: "10",
        arrival: "12:30",
        departure: "15:30",
        ecoPrice: 10000,
        ecoAvi: false,
        busPrice: 50000,
        busAvi: true,
        firstPrice: 120000,
        firstAvi: true,

    }]


    return (


        <>

            <div>
                {/* <div style={{ display: "grid" }}>
                    <div style={{ paddingRight: "30px" }}>
                        <div style={{ backgroundColor: "#0c3628", width: "50px", height: "50px", borderRadius: "100%" }}>
                            <h1 style={{ textAlign: "center", color: "white" }}>1</h1>
                        </div>
                    </div>


                    <div style={{ paddingRight: "30px" }}>
                        <div style={{ backgroundColor: "#0c3628", width: "50px", height: "50px", borderRadius: "100%" }}>
                            <h1 style={{ textAlign: "center", color: "white" }}>2</h1>
                        </div>
                    </div>

                    <div style={{ paddingRight: "30px" }}>
                        <div style={{ backgroundColor: "#0c3628", width: "50px", height: "50px", borderRadius: "100%" }}>
                            <h1 style={{ textAlign: "center", color: "white" }}>3</h1>
                        </div>
                    </div>
                </div> */}
                <div style={{ width: "100%" }}>
                    <h1 style={{ width: "100%" }}>1. Book Your Trip</h1>
                    <div style={{ display: "flex", gap: `20px` }}>
                        <div style={{ width: "100%" }}>
                            <CurrentCityDropDown show={() => { setShowData(true) }} hide={() => { setShowData(false) }} />
                        </div>
                        <div style={{ width: "100%" }}>
                            <DestinationCityDropDown />
                        </div>
                    </div>
                    <TenSpacer />
                    <div style={{ display: "flex", width: "100%", gap: "10px" }}>
                        <AdultDropDown />
                        <ChildrenDropDown />
                        <InfantsDropDown />
                        <PlanClassDropDown />

                    </div>
                    <TenSpacer />
                    <div style={{ display: "flex", width: "100%", justifyContent: "space-between", height: `15 0px`, backgroundColor: "#0c3628", boxShadow: " 0 2px 3px rgba(0, 0, 0, 0.15)", border: '2px solid #0c4e38' }}>

                        <div style={{ padding: '20px' }}>

                            <Header style={{ color: 'white', textAlign: "center" }} > <GiAirplaneDeparture style={{ fontSize: "2rem", paddingRight: "10px" }} />Departure Date</Header>
                            <TenSpacer />
                            <FullWidthInput onChange={(e: any) => setSelectDate(e.target.value)} type={"date"} />

                        </div>
                        <div style={{ padding: '20px' }}>
                            <input type={"checkbox"} />
                            <span style={{ color: 'white' }}>One way </span>
                        </div>

                    </div>
                    <FortySpacer />
                    <div style={{ width: "100%", textAlign: "center", display: "flex", gap: `5px` }}>
                        <div style={{ width: "100%", height: "2px", background: "black", top: "23px" }} /><h2 style={{ width: "30%", textAlign: "center", fontSize: "30px", marginTop: `-18px` }}>OutBound</h2><div style={{ width: "100%", height: "2px", background: "black" }} />
                        <div style={{}}>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", width: "60%", justifyContent: "space-between" }}>

                            <div >Date: <strong>{selectDate}</strong></div>

                            <div >All times displayed are local for each city</div>
                        </div>
                        <div style={{ display: "flex", gap: `20px` }}>
                            <Link style={{ textDecoration: `underline` }}>Previous</Link>
                            <Link>1</Link>
                            <Link style={{ textDecoration: `underline` }}>Next</Link>
                        </div>
                    </div>
                    <TenSpacer />
                    <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", width: "74%", justifyContent: "space-between" }}>
                            <div >Filter: All flights</div>
                            <div >Sort by:</div>
                        </div>
                        <div style={{ display: "flex", gap: `20px` }} >
                            <Link>Price</Link>
                            <Link>Arrival Time</Link>
                            <Link>Departure Time</Link>
                        </div>
                    </div>
                    <TenSpacer />
                    {(showData) ? <div>

                        {
                            demoData.map((item, index) => {

                                return (
                                    <>
                                        <div style={{ display: "flex", width: "100%", height: `13vh` }}>
                                            <div style={{ width: "25%", backgroundColor: "burlywood" }}>
                                                <div style={{ display: "flex", gap: "20%", padding: "15px", fontSize: `20px`, fontWeight: "400", backgroundColor: "#0c3628", color: `white` }}>
                                                    <span>{item.gateNumber}</span>
                                                    <span>{item.airlineName}</span>
                                                </div>
                                                <BgImageB>
                                                    {/* <span style={{ textAlign: "center", paddingTop: "15px" }}>Arrival TIme {item.arrival}</span>
                                                    <span style={{ textAlign: "center", }}>Departure Time {item.departure}</span> */}
                                                </BgImageB>
                                            </div>

                                            <div style={{ display: "grid", width: "25%" }}>
                                                <EconamyCard item={item} class={"Economy"} avi={item.ecoAvi} />

                                            </div>
                                            <div style={{ display: "grid", width: "25%" }}>
                                                <EconamyCard item={item} class={"Business"} avi={item.busAvi} />
                                            </div>

                                            <div style={{ display: "grid", width: "25%" }}>
                                                <EconamyCard item={item} class={"First"} avi={item.firstAvi} />
                                            </div>
                                        </div>
                                        <TenSpacer /></>
                                )
                            })
                        }
                    </div> :
                        <>
                            <h2>No Flights</h2>
                        </>}


                </div>



            </div>

        </>
    )
}
