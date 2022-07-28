import { ModalMain, ModalContent, ModalTopAndBottom, ModalTitle, ModalBody, Modalfooter } from '../styledComponents/modalStyled'
import { BaseBtn, BaseBtnLink, BaseBtnLinkRed } from '../styledComponents/globalStyled'
// import ImageCarousel from './imageCarousel'
// import '../../theme/core.css'

import { TenSpacer, FortySpacer } from "../styledComponents/tenSpacer";
import { CenterDiv, } from "../styledComponents/centerDiv";

export default function GalleryModal(props: any) {

    console.log(props.show)
    if (!props.show) {
        return null;
    }

    return (
        <>
            <ModalMain>
                <ModalContent>

                    <ModalTopAndBottom>
                        <ModalTitle>
                            {props.info.airlineName}
                        </ModalTitle>
                        <TenSpacer />
                        <CenterDiv>
                            <span>Below you can see the details of the ticket selected, Once you are sure of your purchase please procceed to payment</span>

                        </CenterDiv>
                    </ModalTopAndBottom>

                    <ModalBody>
                        <div style={{ display: "flex", justifyContent: `space-between` }}>
                            <div style={{ width: `200px` }}><span><span>Arrival Time:</span><strong> {props.info.arrival}</strong></span></div>
                            <div style={{ width: `200px` }}><span><span>Departure Time:</span><strong> {props.price}</strong></span></div>
                            <div style={{ width: `200px` }}><span><span>Price:</span><strong> {props.price}</strong></span></div>

                        </div>
                        <TenSpacer />
                        <div style={{ display: "flex", justifyContent: `space-between` }}>
                            <div style={{ width: `200px` }}><span>Adult count<strong> {props.people.adult}</strong></span></div>
                            <div style={{ width: `200px` }}><span>Children number:<strong> {props.people.children}</strong></span></div>
                            <div style={{ width: `200px` }}><span>Infants number:<strong> {props.people.infant}</strong></span></div>

                        </div>

                    </ModalBody>
                    <Modalfooter>
                        <BaseBtn>
                        <div style={{ padding: '20px' }}>
                            <input type={"checkbox"} />
                            <span style={{ color: 'black' }}>My Flight details are correct.</span>
                        </div>
                            <BaseBtnLink>Confirm your details</BaseBtnLink>
                            <TenSpacer />
                            <BaseBtnLinkRed onClick={props.onClose}  >Close</BaseBtnLinkRed>
                        </BaseBtn>
                    </Modalfooter>
                </ModalContent>
            </ModalMain>

        </>
    );
}
