import React, { useState } from 'react'
import { TicketCard, GreyTicketCard } from 'styledComponents/globalStyled'
import GalleryModal from './GalleryModal'

export default function EconamyCard(props: any) {
    // const [showData, setShowData] = useState(false);
    const [payModel, setpayModel] = useState(false)

    return (
        <>
            <GalleryModal info={props.item} people={props} price={props.item.ecoPrice} show={payModel} onClose={() => setpayModel(false)}></GalleryModal>
            {(props.avi) ?
                <div style={{ height: "120px" }}>
                    <div style={{ height: "5px", backgroundColor: "green" }} />
                    <TicketCard onClick={() => setpayModel(true)} >
                        <span>{props.class}</span>
                        <span style={{ textAlign: "center" }}>R {props.item.ecoPrice}</span>
                        <span style={{ textAlign: "center" }}>Purchase</span>
                    </TicketCard>
                </div>
                :
                <>

                    <div style={{ height: "125px" }}>
                        <GreyTicketCard onClick={() => setpayModel(true)} >
                            <div style={{ height: "5px", backgroundColor: "grey" }} />
                            <span>{props.class}</span>
                            <span style={{ textAlign: "center" }}>No {props.class} Class Avaliable</span>
                            <span style={{ textAlign: "center" }}> </span>
                        </GreyTicketCard>
                    </div>
                </>

            }
        </>
    )
}
