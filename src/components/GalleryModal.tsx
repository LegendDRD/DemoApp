import { ModalMain, ModalContent, ModalTopAndBottom, ModalTitle, ModalBody, Modalfooter } from '../styledComponents/modalStyled'
import { BaseBtn, BaseBtnLink, BaseBtnLinkRed } from '../styledComponents/globalStyled'
// import ImageCarousel from './imageCarousel'
// import '../../theme/core.css'
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
                    </ModalTopAndBottom>

                    <ModalBody>
                        <div style={{ display: "grid" }}>
                            <span>Gate number: {props.info.gateNumber}</span>
                            <span>arrival: {props.info.arrival}</span>
                            <span>departure: {props.info.departure}</span>
                            <span>Prive: {props.price}</span>
                            <span>Gate number: {props.info.gateNumber}</span>

                        </div>

                    </ModalBody>
                    <Modalfooter>
                        <BaseBtn>
                            <BaseBtnLinkRed onClick={props.onClose}  >Close</BaseBtnLinkRed>
                        </BaseBtn>
                    </Modalfooter>
                </ModalContent>
            </ModalMain>

        </>
    );
}
