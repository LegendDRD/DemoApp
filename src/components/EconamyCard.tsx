import React, { useState } from 'react'
import GalleryModal from './GalleryModal'

export default function EconamyCard(props: any) {
    // const [showData, setShowData] = useState(false);
    const [payModel, setpayModel] = useState(false)
    return (
        <div>
            <div style={{ height: "5px", backgroundColor: "green" }} />
            <GalleryModal info={props.item} price={props.item.ecoPrice} show={payModel} onClose={() => setpayModel(false)}></GalleryModal>
            <div style={{ width: "100%", height: "100%", display: "grid" }} onClick={() => setpayModel(true)} >
                <span>Econamy</span>
                <span style={{ textAlign: "center" }}>R {props.item.ecoPrice}</span>
                <span style={{ textAlign: "center" }}>Purchase</span>
            </div>
        </div>
    )
}
