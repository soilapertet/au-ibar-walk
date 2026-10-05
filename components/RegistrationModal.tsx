"use client";

import { useState } from "react";
import { PartyPopper } from "lucide-react";

import { ModalType, useModal } from "./ModalContext";
import PartnershipForm from "./PartnershipForm";
import RegistrationForm from "./RegistrationForm";
import { partnershipData } from "@/data/partnershipData";

export default function RegistrationModal() {

    const { modalType, closeModal } = useModal();
    const [submitted, setSubmitted] = useState(false);

    let dataObj = null;
    const registrants = ["child", "corporate", "participant"];
    const partnerTypes = ["partner", "vendor", "exhibitor"];

    type PartnerType = "partner" | "vendor" | "exhibitor";


    if (!modalType) {
        return null;
    }

    function handleClose() {
        closeModal();
        setSubmitted(false);
    }

    function handleSuccess() {
        setSubmitted(true);
    }

    function isPartnershipType(type: ModalType): type is PartnerType {
        return type === "partner" || type === "vendor" || type === "exhibitor"
    }

    if (isPartnershipType(modalType)) {
        dataObj = partnershipData[modalType]
    }

    return (
        <div className="modal" id="modal" onClick={handleClose}>
            <div className="modalbox" onClick={(e) => e.stopPropagation()}>
                <button className="close" onClick={() => handleClose()}>×</button>
                {submitted && (
                    <>
                        <PartyPopper size={52} />
                        <div className="kicker">Thank you!</div>
                        {partnerTypes.includes(modalType) ? (
                            <>
                                <h2>Your submission has been received.</h2>
                                <p className="lead">The AU-IBAR team will be in touch shortly.</p>
                            </>
                        ) : (
                            <>
                                <h2>You're registered!</h2>
                                <p className="lead">
                                    We can't wait to walk with you on 28 November 2026. A confirmation email is on its way. 
                                    Keep an eye on your inbox for event details and what to bring.
                                </p>
                            </>
                        )}
                        <button className="submit" onClick={handleClose}>CLOSE</button>'
                    </>
                )}
                {!submitted && registrants.includes(modalType) && (
                    <div style={{ marginTop: "50px" }}>
                        <div className="kicker" id="modalKicker">Join the AU-IBAR Walk</div>
                        <h2 id="modalTitle" style={{ marginLeft: "0px" }}>Register for the AU-IBAR Walk</h2>
                        <p className="lead" id="modalLead" style={{ fontSize: "15px", marginBottom: "5px" }}>
                            Complete the registration details below.
                        </p>
                        <RegistrationForm onSuccess={handleSuccess}/>
                    </div>
                )}
                {!submitted && partnerTypes.includes(modalType) && (
                    <div style={{ marginTop: "50px" }}>
                        <div className="kicker" id="modalKicker">{dataObj?.kicker}</div>
                        <h2 id="modalTitle" style={{ marginLeft: "0px" }}>{dataObj?.title}</h2>
                        <p className="lead" id="modalLead" style={{ fontSize: "15px", marginBottom: "5px" }}>{dataObj?.lead}</p>
                        <PartnershipForm onSuccess={handleSuccess}/>
                    </div>
                )}
            </div>
        </div>
    )
}
