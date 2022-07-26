import React, { useState } from 'react'
import styled from 'styled-components';
import AdultDropDown from './AdultDropDown';
import ChildrenDropDown from './ChildrenDropDown';
import CurrentCityDropDown from './CurrentCityDropDown';
import DestinationCityDropDown from './DestinationCityDropDown';
import InfantsDropDown from './InfantsDropDown';
import PlanClassDropDown from './PlanClassDropDown';
import { GiAirplaneDeparture } from 'react-icons/gi';

export default function BookTrip() {
    // const [startDate, setStartDate] = useState(new Date());
    const [selectDate, setSelectDate] = useState(new Date().toDateString());
    let demoData = [{
        airlineName: "Emerenita",
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
        airlineName: "Britsh Airlines",
        gateNumber: "01",
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
        airlineName: "Britsh Airlines",
        gateNumber: "01",
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
        airlineName: "Britsh Airlines",
        gateNumber: "01",
        arrival: "12:30",
        departure: "15:30",
        ecoPrice: 10000,
        ecoAvi: false,
        busPrice: 50000,
        busAvi: true,
        firstPrice: 120000,
        firstAvi: false,

    }]


    return (


        <>

            <div style={{ display: "flex" }}>

                <div style={{ display: "grid" }}>
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
                </div>
                <div style={{ width: "100%" }}>
                    <h1 style={{ width: "100%" }}>Book Trip</h1>
                    <div style={{ display: "flex", width: "100%", justifyContent: "space-evenly" }}>
                        <CurrentCityDropDown />
                        <DestinationCityDropDown />
                    </div>
                    <div style={{ display: "flex", width: "100%", justifyContent: "space-evenly" }}>
                        <AdultDropDown />
                        <ChildrenDropDown />
                        <InfantsDropDown />
                        <PlanClassDropDown />

                    </div>
                    <div style={{ display: "flex", width: "100%", justifyContent: "space-between", backgroundColor: "#0c3628", boxShadow: " 0 2px 3px rgba(0, 0, 0, 0.15)", border: '2px solid #0c4e38' }}>

                        <div style={{ display: "grid", padding: '20px' }}>

                            <div style={{ color: 'white', textAlign: "center" }} ><GiAirplaneDeparture style={{ fontSize: "2rem", paddingRight: "10px" }} />Departure Date</div><input onChange={(e: any) => setSelectDate(e.target.value)} type={"date"} />

                        </div>
                        <div style={{ padding: '20px' }}>
                            <input type={"radio"} />
                            <span style={{ color: 'white' }}>One way </span>
                        </div>

                    </div>
                    <h2 style={{ width: "100%", textAlign: "center", display: "flex" }}><div style={{ width: "30Vw", height: "2px", background: "black", top: "23px" }} />OutBound to<div style={{ width: "30vw", height: "2px", background: "black" }} /></h2>
                    <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", width: "60%", justifyContent: "space-between" }}>

                            <div >Date: {selectDate}</div>

                            <div >all times displayed are local for each city</div>
                        </div>
                        <div style={{ display: "flex", width: "25%", justifyContent: "space-between" }}>
                            <button>Previous</button>
                            <span>page number 1</span>
                            <button>Next</button>
                        </div>
                    </div>

                    <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", width: "74%", justifyContent: "space-between" }}>
                            <div >Filter: showing all flights</div>
                            <div >Sort by:</div>
                        </div>
                        <div style={{ display: "flex", width: "25%" }} >
                            <button>Price</button>
                            <button>Arrival Time</button>
                            <button>Departure Time</button>
                        </div>
                    </div>
                    {
                        demoData.map((item, index) => {

                            return (
                                <div style={{ display: "flex", width: "100%", padding: "10px" }}>
                                    <div style={{ display: "flex", width: "25%", backgroundColor: "burlywood" }}>

                                        <span>{item.gateNumber}</span>
                                        <span>{item.airlineName}</span>

                                        <div style={{ display: "grid", backgroundColor: "lightgrey" }}>
                                            <span style={{ textAlign: "center" }}>Arrival TIme {item.arrival}</span>
                                            <span style={{ textAlign: "center" }}>Departure Time {item.departure}</span>

                                        </div>
                                    </div>

                                    <div style={{ display: "grid", width: "20%", backgroundColor: "lightgrey" }}>
                                        {(item.ecoAvi) ? <div style={{ height: "5px", backgroundColor: "green" }} /> : <div style={{ height: "5px", backgroundColor: "grey" }} />}
                                        <span>Econamy</span>
                                        <span style={{ textAlign: "center" }}>R {item.ecoPrice}</span>
                                        <span style={{ textAlign: "center" }}>Purchase</span>
                                    </div>
                                    <div style={{ display: "grid", width: "20%", backgroundColor: "lightgrey" }}>
                                        {(item.busAvi) ? <div style={{ height: "5px", backgroundColor: "green" }} /> : <div style={{ height: "5px", backgroundColor: "grey" }} />}
                                        <span>Business</span>
                                        <span style={{ textAlign: "center" }}>R {item.busPrice}</span>
                                        <span style={{ textAlign: "center" }}>Purchase</span>
                                    </div>

                                    <div style={{ display: "grid", width: "20%", backgroundColor: "lightgrey" }}>
                                        {(item.firstAvi) ? <div style={{ height: "5px", backgroundColor: "green" }} /> : <div style={{ height: "5px", backgroundColor: "grey" }} />}
                                        <span>First</span>
                                        <span style={{ textAlign: "center" }}>R {item.firstPrice}</span>
                                        <span style={{ textAlign: "center" }}>Purchase</span>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>



            </div>

        </>
    )
}
