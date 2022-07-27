import React, { useState } from 'react'
import { TicketCard } from 'styledComponents/globalStyled'
import GalleryModal from './GalleryModal'

export default function EconamyCard(props: any) {
    // const [showData, setShowData] = useState(false);
    const [payModel, setpayModel] = useState(false)
    console.log(props.avi)
    return (
        <>
            <GalleryModal info={props.item} price={props.item.ecoPrice} show={payModel} onClose={() => setpayModel(false)}></GalleryModal>
            {(props.avi) ?
                <div>
                    <div style={{ height: "5px", backgroundColor: "green" }} />
                    <TicketCard onClick={() => setpayModel(true)} >
                        <span>{props.class}</span>
                        <span style={{ textAlign: "center" }}>R {props.item.ecoPrice}</span>
                        <span style={{ textAlign: "center" }}>Purchase</span>
                    </TicketCard>
                </div>
                :
                <>
                    <div style={{ height: "5px", backgroundColor: "grey" }} />
                    <span>{props.class}</span>
                    <span style={{ textAlign: "center" }}>No {props.class} Class Avaliable</span>
                </>

            }
        </>
    )
}
