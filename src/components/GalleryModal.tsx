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
                            <div style={{ width: `200px` }}><span><span>Arrival Time:</span> {props.info.arrival}</span></div>
                            <div style={{ width: `200px` }}><span><span>Departure Time:</span> {props.info.departure}</span></div>
                            <div style={{ width: `200px` }}><span><span>Price:</span> {props.price}</span></div>

                        </div>
                        <TenSpacer />
                        <div style={{ display: "flex", justifyContent: `space-between` }}>
                            <div style={{ width: `200px` }}><span>Adult count {props.people.adult}</span></div>
                            <div style={{ width: `200px` }}><span>Children number: {props.people.children}</span></div>
                            <div style={{ width: `200px` }}><span>Infants number: {props.people.infant}</span></div>

                        </div>

                    </ModalBody>
                    <Modalfooter>
                        <BaseBtn>
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
