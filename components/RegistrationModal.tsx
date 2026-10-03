"use client";

import { ModalType, useModal } from "./ModalContext";
import PartnershipForm from "./PartnershipForm";
import RegistrationForm from "./RegistrationForm";
import { partnershipData } from "@/data/partnershipData";

export default function RegistrationModal() {

    const { modalType, closeModal } = useModal();

    let dataObj = null;
    const registrants = ["child", "corporate", "participant"];
    const other = ["partner", "vendor", "exhibitor"];

    type PartnerType = "partner" | "vendor" | "exhibitor";


    if (!modalType) {
        return null;
    }

    function isPartnershipType (type: ModalType) : type is PartnerType {
        return type === "partner" || type === "vendor" || type === "exhibitor"
    }

    if(isPartnershipType(modalType)) {
        dataObj = partnershipData[modalType]
    }

    return (
        <div className="modal" id="modal">
            <div className="modalbox">
                <button className="close" onClick={() => closeModal()}>×</button>
                {registrants.includes(modalType) && (
                    <div style={{ marginTop: "50px" }}>
                        <div className="kicker" id="modalKicker">Join the AU-IBAR Walk</div>
                        <h2 id="modalTitle" style={{ marginLeft: "0px" }}>Register for the AU-IBAR Walk</h2>
                        <p className="lead" id="modalLead" style={{ fontSize: "15px", marginBottom: "5px" }}>
                            Complete the registration details below.
                        </p>
                        <RegistrationForm />
                    </div>
                )}
                {other.includes(modalType) && (
                    <div style={{ marginTop: "50px" }}>
                        <div className="kicker" id="modalKicker">{dataObj?.kicker}</div>
                        <h2 id="modalTitle" style={{ marginLeft: "0px" }}>{dataObj?.title}</h2>
                        <p className="lead" id="modalLead" style={{ fontSize: "15px", marginBottom: "5px" }}>{dataObj?.lead}</p>
                        <PartnershipForm />
                    </div>
                )}
            </div>
        </div>
    )
}
